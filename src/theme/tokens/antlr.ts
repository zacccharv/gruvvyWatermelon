import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
	const { colors } = context.palette;

	return [
		{
			name: "Antlr source",
			scope: "source.antlr",
			settings: {
				foreground: colors.subtext1,
			},
		},
		{
			name: "Language keywords",
			scope: ["entity.other.pointer.antlr", "string.regexp.antlr"],
			settings: {
				foreground: colors.cherry,
			},
		},
		{
			name: "Support other token",
			scope: ["support.other.token.lexer.antlr"],
			settings: {
				foreground: colors.text,
			},
		},
		{
			name: "Support function",
			scope: "support.function.parser.antlr",
			settings: {
				foreground: colors.blueberry,
			},
		},
		{
			name: "Constants/Literals",
			scope: ["constant.other.antlr"],
			settings: {
				foreground: colors.watermelon,
			},
		},
	];
};

export default tokens;
