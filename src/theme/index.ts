import { palette } from "../palettes";
import { ThemeOptions } from "@/types";
import { getUiColors } from "./uiColors";
import { getTokenColors } from "./tokencolors";

export const defaultOptions: ThemeOptions = {
	integrateTodoTree: false,
	integrateErrorLensGutter: false,
	accentColor: "mauve",
};

export const compileTheme = (options: ThemeOptions = defaultOptions): object => {
	return {
		name: "Gruvvy Watermelon",
		type: "dark",
		colors: getUiColors(palette),
		semanticHighlighting: false,
		semanticTokenColors: {},
		tokenColors: getTokenColors(palette),
	};
};
