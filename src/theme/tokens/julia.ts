import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
	const { colors } = context.palette;

	return [
		{
			name: "Julia macros",
			scope: "support.function.macro.julia",
			settings: {
				foreground: colors.mint,
				fontStyle: "italic",
			},
		},
		{
			name: "Julia language constants (true, false)",
			scope: "constant.language.julia",
			settings: {
				foreground: colors.peach,
			},
		},
		{
			name: "Julia other constants (these seem to be arguments inside arrays)",
			scope: "constant.other.symbol.julia",
			settings: {
				foreground: colors.raspberry,
			},
		},
	];
};

export default tokens;
