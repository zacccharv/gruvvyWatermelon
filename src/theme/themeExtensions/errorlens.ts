import { ThemeContext, ErrorLensColors } from "@/types";

type PartialErrorLens = Partial<Record<keyof ErrorLensColors, string>>;

export default function errorColors(ctx: ThemeContext): PartialErrorLens {
	const { tokenColors } = ctx.palette;

	return {
		"errorLens.errorForeground": tokenColors.errorColor,
		"errorLens.errorBackground": tokenColors.errorColor + "19",
		"errorLens.warningForeground": tokenColors.warnColor,
		"errorLens.warningBackground": tokenColors.warnColor + "19",
		"errorLens.infoForeground": tokenColors.infoColor,
		"errorLens.infoMessageBackground": tokenColors.infoColor + "19",
		"errorLens.hintForeground": tokenColors.hintColor,
		"errorLens.hintBackground": tokenColors.hintColor + "19",
	};
}
