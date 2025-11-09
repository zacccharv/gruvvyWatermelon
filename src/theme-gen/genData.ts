// Generate Gruvvyflavor from hex colors
import { GruvvyFlavor, ColorFormat, Colors, GruvvyColors } from "@/types";
import { hexToHsl, hexToRgba } from "@/theme/utils";
import { palette } from "../palettes";
import { writeFile } from "fs";

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

const colorMap: GruvvyColors = Object.fromEntries(
	Object.entries(palette.colors).map(([name, hex]) => [
		name,
		createColorFormat(name, hex, false),
	]),
) as GruvvyColors;

const colorEntries: Entries<GruvvyColors> = Object.entries(
	colorMap,
) as Entries<GruvvyColors>;

const mappedFlavors: GruvvyFlavor = {
	name: "Gruvvy Watermelon",
	colors: colorMap,
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
					console.log("Successfully wrote Gruvvy Watermelon JSON.");
					resolve(true);
				}
			},
		);
	});
};

generate();
