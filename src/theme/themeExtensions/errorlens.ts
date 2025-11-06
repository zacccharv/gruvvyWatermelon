import { Palette, ErrorLensColors } from "@/types";

export default function errorColors(
    context: Palette
): Partial<ErrorLensColors> {
    const { tokenColors } = context;

    return {
		"errorForeground": tokenColors.errorColor,
		"errorBackground": tokenColors.errorColor + "19",
		"warningForeground": tokenColors.warnColor,
		"warningBackground": tokenColors.warnColor + "19",
		"infoForeground": tokenColors.infoColor,
		"infoMessageBackground": tokenColors.infoColor + "19",
		"hintForeground": tokenColors.hintColor,
		"hintBackground": tokenColors.hintColor + "19",
	};
}
