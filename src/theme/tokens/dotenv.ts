import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
	const { colors } = context.palette;

	return [
		{
			name: "dotenv left-hand side assignments",
			scope: ["variable.other.env"],
			settings: {
				foreground: colors.cornflower,
			},
		},
		{
			name: "dotenv reference to existing env variable",
			scope: ["string.quoted variable.other.env"],
			settings: {
				foreground: colors.text,
			},
		},
	];
};

export default tokens;
