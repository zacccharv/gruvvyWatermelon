// Generate Gruvvyflavor from hex colors
import {
	AnsiColorFormat,
	AnsiColors,
	ColorFormat,
	GruvvyAnsiColors,
	GruvvyColors,
} from "@/types/palettetypes";
import { AccentNames, AnsiNames } from "@/types/palettetypes";
import { hexToHsl, hexToRgba } from "@/theme/utils";
import { palette } from "../palettes";
import { writeFile } from "fs";
import { GruvvyFlavor } from "@/types";

type Entries<T> = {
	[K in keyof T]: [K, T[K]];
}[keyof T][];

export const createColorFormat = (
	name: string,
	hex: string,
	accent: boolean,
): ColorFormat => {
	return {
		name,
		hex,
		rgb: hexToRgba(hex),
		hsl: hexToHsl(hex),
		accent,
	};
};

export const createAnsiColorFormat = (
	name: string,
	hex: string,
	code: number,
): AnsiColorFormat => {
	return {
		name,
		hex,
		rgb: hexToRgba(hex),
		hsl: hexToHsl(hex),
		code,
	};
};

const colorMap: GruvvyColors = Object.fromEntries(
	Object.entries(palette.colors).map(([name, hex]) => [
		name,
		createColorFormat(name, hex, isAccent(name)),
	]),
) as GruvvyColors;

const ansiColorMap: GruvvyAnsiColors = Object.fromEntries(
	Object.entries(palette.ansiColors).map(([name, hex], index) => [
		name,
		createAnsiColorFormat(name, hex, index),
	]),
) as GruvvyAnsiColors;

const colorEntries: Entries<GruvvyColors> = Object.entries(
	colorMap,
) as Entries<GruvvyColors>;

const mappedFlavors: GruvvyFlavor = {
	name: "Gruvvy Watermelon",
	colors: colorMap,
	ansiColors: ansiColorMap,
	colorEntries: colorEntries,
};

export const generate = async (): Promise<Boolean> => {
	return new Promise((resolve) => {
		writeFile(
			"./src/theme-gen/theme/gruvvyWatermelon.json",
			JSON.stringify(mappedFlavors, null, 2),
			(err) => {
				if (err) {
					console.error("Error writing Gruvvy Watermelon JSON:", err);
					resolve(false);
				} else {
					console.log(
						"Successfully wrote Gruvvy Watermelon Backing Theme.",
					);
					resolve(true);
				}
			},
		);
	});
};

function isAccent(name: string): boolean {
	return (Object.values(AccentNames) as string[]).includes(name);
}

generate();

