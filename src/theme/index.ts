import { palette } from "../palettes";
import {
	GruvvyFlavor,
	GruvvyPalette,
	PaletteCollection,
	ThemeContext,
	ThemeOptions,
} from "@/types";
import { getUiColors } from "./uiColors";
import { getTokenColors } from "./tokencolors";
import { readFileSync } from "fs";
import { repoRoot } from "@/hooks/constants";
import path from "path";

export const defaultOptions: ThemeOptions = {
	integrateTodoTree: false,
	integrateErrorLensGutter: false,
	accentColor: "mauve",
};

export const compileTheme = (
	options: ThemeOptions = defaultOptions,
): object => {
	const ctxPalette = {} as GruvvyPalette;
	const flavor: GruvvyFlavor = JSON.parse(
		readFileSync(
			path.join(repoRoot, "/src/theme-gen/theme/gruvvyWatermelon.json"),
			"utf-8",
		),
	);

	for (const [colorName, colorValue] of flavor.colorEntries) {
		ctxPalette[colorName] = colorValue.hex;
	}

	const ctxPaletteCollection: PaletteCollection = {
		colors: ctxPalette,
		tokenColors: palette.tokenColors,
		widgetColors: palette.widgetColors,
	};

	const ctx: ThemeContext = {
		palette: ctxPaletteCollection,
		options: options,
	};

	return {
		name: "Gruvvy Watermelon",
		type: "dark",
		colors: getUiColors(ctx),
		semanticHighlighting: false,
		semanticTokenColors: {},
		tokenColors: getTokenColors(ctx),
	};
};
