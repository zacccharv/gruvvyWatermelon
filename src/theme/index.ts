import { palette } from "../palettes";
import {
	PaletteCollection,
	TextmateColors,
	ThemeContext,
	ThemeOptions,
} from "@/types";
import { getUiColors, WorkbenchPartial } from "./uiColors";
import { getTokenColors } from "./tokencolors";

export const defaultOptions: ThemeOptions = {
	integrateTodoTree: false,
	integrateErrorLensGutter: false,
	accentColor: "watermelon",
};

export type ThemeObject = {
	name: string;
	type: "vs-dark" | "vs" | "hc-black" | "hc-light";
	colors: WorkbenchPartial;
	semanticHighlighting: boolean;
	semanticTokenColors: object;
	tokenColors: TextmateColors;
};

export const compileTheme = (options: ThemeOptions = defaultOptions) => {
	console.log("compileTheme called with options:", options);

	// Use the dynamic palette instead of reading from static JSON
	const ctxPaletteCollection: PaletteCollection = {
		colors: palette.colors,
		ansiColors: palette.ansiColors,
		tokenColors: palette.tokenColors,
		workbenchColors: palette.workbenchColors,
		widgetColors: palette.widgetColors,
	};

	const ctx: ThemeContext = {
		palette: ctxPaletteCollection,
		options: options,
	};

	console.log("Context created with accentColor:", ctx.options.accentColor);

	return {
		name: "Gruvvy Watermelon",
		type: "vs-dark",
		colors: getUiColors(ctx),
		semanticHighlighting: false,
		semanticTokenColors: {},
		tokenColors: getTokenColors(ctx),
	} as const satisfies ThemeObject;
};
