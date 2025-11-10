import { ThemeContext, ErrorLensColors } from "@/types";
import { opacity } from "../utils";

type PartialErrorLens = Partial<Record<keyof ErrorLensColors, string>>;

export default function errorColors(ctx: ThemeContext): PartialErrorLens {
	const { tokenColors } = ctx.palette;

	return {
		"errorLens.errorBackground": opacity(tokenColors.errorColor, 0.15),
		"errorLens.errorBackgroundLight": opacity(tokenColors.errorColor, 0.15),
		"errorLens.errorForeground": tokenColors.errorColor,
		"errorLens.errorForegroundLight": tokenColors.errorColor,
		"errorLens.errorMessageBackground": opacity(
			tokenColors.errorColor,
			0.15,
		),
		"errorLens.hintBackground": opacity(tokenColors.hintColor, 0.15),
		"errorLens.hintBackgroundLight": opacity(tokenColors.hintColor, 0.15),
		"errorLens.hintForeground": tokenColors.hintColor,
		"errorLens.hintForegroundLight": tokenColors.hintColor,
		"errorLens.hintMessageBackground": opacity(tokenColors.hintColor, 0.15),
		"errorLens.infoBackground": opacity(tokenColors.infoColor, 0.15),
		"errorLens.infoBackgroundLight": opacity(tokenColors.infoColor, 0.15),
		"errorLens.infoForeground": tokenColors.infoColor,
		"errorLens.infoForegroundLight": tokenColors.infoColor,
		"errorLens.infoMessageBackground": opacity(tokenColors.infoColor, 0.15),
		"errorLens.statusBarErrorForeground": tokenColors.errorColor,
		"errorLens.statusBarHintForeground": tokenColors.hintColor,
		"errorLens.statusBarIconErrorForeground": tokenColors.errorColor,
		"errorLens.statusBarIconWarningForeground": tokenColors.warnColor,
		"errorLens.statusBarInfoForeground": tokenColors.infoColor,
		"errorLens.statusBarWarningForeground": tokenColors.warnColor,
		"errorLens.warningBackground": opacity(tokenColors.warnColor, 0.15),
		"errorLens.warningBackgroundLight": opacity(
			tokenColors.warnColor,
			0.15,
		),
		"errorLens.warningForeground": tokenColors.warnColor,
		"errorLens.warningForegroundLight": tokenColors.warnColor,
		"errorLens.warningMessageBackground": opacity(
			tokenColors.warnColor,
			0.15,
		),
	};
}
