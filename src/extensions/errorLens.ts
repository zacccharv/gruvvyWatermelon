import { Palette, ErrorLensConfig } from "@/types";

const errorLensConfiguration = (ctx: Palette): ErrorLensConfig => {
	const { tokenColors } = ctx;
	return {
		"hintGutterIconColor": tokenColors.hintColor,
		"infoGutterIconColor": tokenColors.infoColor,
		"warningGutterIconColor": tokenColors.warnColor,
		"errorGutterIconColor": tokenColors.errorColor,
	};
};

export { errorLensConfiguration };
