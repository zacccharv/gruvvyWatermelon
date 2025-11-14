import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
	const { colors } = context.palette;

	return [
		{
			name: "Liquid Builtin Objects & User Defined Variables",
			scope: "variable.language.liquid",
			settings: {
				foreground: colors.bubblegum,
			},
		},
	];
};

export default tokens;
