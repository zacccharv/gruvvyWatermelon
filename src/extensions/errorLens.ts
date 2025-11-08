import { ErrorLensConfig, PaletteCollection, ThemeContext } from "@/types";

const errorLensConfiguration = (ctx: PaletteCollection): ErrorLensConfig => {
	const { tokenColors } = ctx;
	return {
		hintGutterIconColor: tokenColors.hintColor,
		infoGutterIconColor: tokenColors.infoColor,
		warningGutterIconColor: tokenColors.warnColor,
		errorGutterIconColor: tokenColors.errorColor,
	};
};

export { errorLensConfiguration };
