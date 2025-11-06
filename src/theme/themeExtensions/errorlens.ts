import { Palette, ErrorLensColors } from "@/types";

type PartialErrorLens = Partial<Record<keyof ErrorLensColors, string>>;

export default function errorColors(context: Palette): PartialErrorLens {
	const { tokenColors } = context;

	return {
		errorForeground: tokenColors.errorColor,
		errorBackground: tokenColors.errorColor + "19",
		warningForeground: tokenColors.warnColor,
		warningBackground: tokenColors.warnColor + "19",
		infoForeground: tokenColors.infoColor,
		infoMessageBackground: tokenColors.infoColor + "19",
		hintForeground: tokenColors.hintColor,
		hintBackground: tokenColors.hintColor + "19",
	};
}
