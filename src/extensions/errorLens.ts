import { ErrorLensConfig, ThemeContext } from "@/types";

const errorLensConfiguration = (ctx: ThemeContext): ErrorLensConfig => {
	const { tokenColors } = ctx.palette;
	return {
		hintGutterIconColor: tokenColors.hintColor,
		infoGutterIconColor: tokenColors.infoColor,
		warningGutterIconColor: tokenColors.warnColor,
		errorGutterIconColor: tokenColors.errorColor,
	};
};

export { errorLensConfiguration };
