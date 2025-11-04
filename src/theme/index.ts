import { palette } from "../palettes";
import { ThemeOptions } from "@/types";
import { getUiColors } from "./uiColors";
import { getTokenColors } from "./tokencolors";

export const defaultOptions: ThemeOptions = {
	integrateTodoTree: false,
	integrateErrorLensGutter: false,
	// TODO: genereate these options
	// bracketMode: "rainbow",
	// boldKeywords: true,
	// italicComments: true,
	// italicKeywords: true,
};

export const compileTheme = (
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	_options: ThemeOptions = defaultOptions
): object => {
	return {
		name: "Gruvvy Watermelon",
		type: "dark",
		colors: getUiColors(palette),
		semanticHighlighting: false,
		semanticTokenColors: {},
		tokenColors: getTokenColors(palette),
	};
};
