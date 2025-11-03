import { Palette, ErrorLensColors } from "@/types";

export default function errorColors(
    context: Palette
): Partial<ErrorLensColors> {
    const { palette, tokenColors } = context;

    return {
        "errorLens.errorForeground": tokenColors.errorColor,
        "errorLens.errorBackground": tokenColors.errorColor + "19",
        "errorLens.warningForeground": tokenColors.warnColor,
        "errorLens.warningBackground": tokenColors.warnColor + "19",
        "errorLens.infoForeground": palette.purple,
        "errorLens.infoMessageBackground": palette.purple + "19",
        "errorLens.hintForeground": tokenColors.hintColor,
        "errorLens.hintBackground": tokenColors.hintColor + "19",
    };
}
