// Generate Gruvvyflavor from hex colors
import {
	AnsiColorFormat,
	ColorFormat,
	GruvvyAnsiColors,
	GruvvyColors,
} from "@/types/palettetypes";
import { hexToHsl, hexToRgba } from "@/theme/utils";
import { accentNames, palette } from "../palettes";
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
	return (Object.values(accentNames) as string[]).includes(name);
}

export const generateCSSVariables = async (): Promise<boolean> => {
	return new Promise((resolve) => {
		// Generate CSS content
		let cssContent = `:root {\n`;
		cssContent += `  /* Gruvvy Watermelon Theme Variables */\n\n`;

		// Add regular colors
		cssContent += `  /* Theme Colors */\n`;
		Object.entries(colorMap).forEach(([name, color]) => {
			const { hex, rgb, hsl } = color;
			const varName = name.replace(/([A-Z])/g, "-$1").toLowerCase();

			cssContent += `  --gruvvy-${varName}: ${hex};\n`;
			cssContent += `  --gruvvy-${varName}-rgb: rgb(${rgb.r}, ${rgb.g}, ${rgb.b});\n`;
			cssContent += `  --gruvvy-${varName}-hsl: hsl(${hsl.h.toFixed(1)}, ${hsl.s.toFixed(1)}%, ${hsl.l.toFixed(1)}%);\n`;
			cssContent += `\n`;
		});

		// Add ANSI colors
		cssContent += `  /* ANSI Terminal Colors */\n`;
		Object.entries(ansiColorMap).forEach(([name, color]) => {
			const { hex, rgb, hsl } = color;
			const varName = name.replace(/([A-Z])/g, "-$1").toLowerCase();

			cssContent += `  --gruvvy-ansi-${varName}: ${hex};\n`;
			cssContent += `  --gruvvy-ansi-${varName}-rgb: rgb(${rgb.r}, ${rgb.g}, ${rgb.b});\n`;
			cssContent += `  --gruvvy-ansi-${varName}-hsl: hsl(${hsl.h.toFixed(1)}, ${hsl.s.toFixed(1)}%, ${hsl.l.toFixed(1)}%);\n`;
			cssContent += `\n`;
		});

		cssContent += `}\n`;

		// Write to CSS file
		writeFile(
			"./src/theme-gen/theme/gruvvy-watermelon-variables.css",
			cssContent,
			(err) => {
				if (err) {
					console.error("Error writing CSS variables:", err);
					resolve(false);
				} else {
					console.log("Successfully wrote CSS variables file.");
					resolve(true);
				}
			},
		);
	});
};

generate();
generateCSSVariables();

