import { palette } from "../palettes";
import {
	GruvvyFlavor,
	PaletteCollection,
	ThemeContext,
	ThemeOptions,
} from "@/types";
import { getUiColors } from "./uiColors";
import { getTokenColors } from "./tokencolors";
import path from "node:path";
import fs from "node:fs";
import { repoRoot } from "@/hooks/constants";

export const defaultOptions: ThemeOptions = {
	integrateTodoTree: false,
	integrateErrorLensGutter: false,
	accentColor: "watermelon",
};

export const compileTheme = (
	options: ThemeOptions = defaultOptions,
): object => {
	console.log("compileTheme called with options:", options);
	// Use the dynamic palette instead of reading from static JSON
	const ctxPaletteCollection: PaletteCollection = {
		colors: palette.colors,
		tokenColors: palette.tokenColors,
		widgetColors: palette.widgetColors,
	};

	const ctx: ThemeContext = {
		palette: ctxPaletteCollection,
		options: options,
	};

	console.log("Context created with accentColor:", ctx.options.accentColor);

	return {
		name: "Gruvvy Watermelon",
		type: "dark",
		colors: getUiColors(ctx),
		semanticHighlighting: false,
		semanticTokenColors: {},
		tokenColors: getTokenColors(ctx),
	};
};
