import colorObject from "../../colors.ts";
let tokenColors = colorObject.tokenColors;
let gruvvyWatermelonColors = colorObject.gruvvyWatermelonColors;

const values = {
    "errorLens.errorForeground": tokenColors.errorColor,
    "errorLens.errorBackground": tokenColors.errorColor + "19",
    "errorLens.warningForeground": tokenColors.warnColor,
    "errorLens.warningBackground": tokenColors.warnColor + "19",
    "errorLens.infoForeground": gruvvyWatermelonColors.purple,
    "errorLens.infoMessageBackground": gruvvyWatermelonColors.purple + "19",
    "errorLens.hintForeground": tokenColors.hintColor,
    "errorLens.hintBackground": tokenColors.hintColor + "19",
}

const errorColors = {
    colors: values
}

export default { errorColors };