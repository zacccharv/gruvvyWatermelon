import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
	const { colors } = context.palette;

	return [
		{
			name: "LaTeX preamble",
			scope: "text.tex keyword.control.preamble",
			settings: {
				foreground: colors.mint,
			},
		},
		{
			name: "LaTeX be functions",
			scope: "text.tex support.function.be",
			settings: {
				foreground: colors.sky,
			},
		},
		{
			name: "LaTeX math",
			scope: "constant.other.general.math.tex",
			settings: {
				foreground: colors.peachpuff,
			},
		},
	];
};

export default tokens;
