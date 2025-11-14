import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
	const { colors } = context.palette;

	return [
		{
			scope: ["markup.heading.typst"],
			settings: {
				foreground: colors.cherry,
			},
		},
	];
};

export default tokens;
