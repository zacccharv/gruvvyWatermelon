import { palette } from "../palettes";
import { ThemeContext, ThemeOptions } from "@/types";
import { getUiColors } from "./uiColors";
import { getTokenColors } from "./tokencolors";

export const defaultOptions: ThemeOptions = {
	accentColor: "mauve",
	integrateTodoTree: false,
	integrateErrorLensGutter: false,
};

export const compileTheme = (
	options: ThemeOptions = defaultOptions,
): object => {
	const ctx: ThemeContext = {
		palette: palette,
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
