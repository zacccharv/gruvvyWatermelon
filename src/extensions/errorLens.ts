import { Palette, ErrorLensConfig } from "@/types";

const errorLensConfiguration = (
	ctx: Palette,
	integrateErrorLensGutter: boolean = false
): ErrorLensConfig | object => {
	const { tokenColors } = ctx;
	if (!integrateErrorLensGutter) {
		return {};
	}
	return {
		"errorLens.hintGutterIconColor": tokenColors.hintColor,
		"errorLens.infoGutterIconColor": tokenColors.infoColor,
		"errorLens.warningGutterIconColor": tokenColors.warnColor,
		"errorLens.errorGutterIconColor": tokenColors.errorColor,
	};
};

export { errorLensConfiguration };
