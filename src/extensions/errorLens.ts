import { Palette, ErrorLensConfig } from "@/types";

const errorLensConfiguration = (
	ctx: Palette,
	integrateErrorLensGutter: boolean = false
): ErrorLensConfig => {
	const { tokenColors } = ctx;
	return {
		"errorLens.hintGutterIconColor": tokenColors.hintColor,
		"errorLens.infoGutterIconColor": tokenColors.infoColor,
		"errorLens.warningGutterIconColor": tokenColors.warnColor,
		"errorLens.errorGutterIconColor": tokenColors.errorColor,
	};
};

export { errorLensConfiguration };
