import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
	const { colors } = context.palette;

	return [
		{
			name: "R function calls",
			scope: "meta.function-call.r",
			settings: {
				foreground: colors.cornflower,
			},
		},
		{
			name: "R function call arguments",
			scope: "meta.function-call.arguments.r",
			settings: {
				foreground: colors.text,
			},
		},
	];
};

export default tokens;
