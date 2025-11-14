import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
	const { colors } = context.palette;

	return [
		{
			name: "Shell shebang",
			scope: [
				"comment.line.shebang",
				"comment.line.shebang punctuation.definition.comment",
				"comment.line.shebang",
				"punctuation.definition.comment.shebang.shell",
				"meta.shebang.shell",
			],
			settings: {
				foreground: colors.bubblegum,
				fontStyle: "italic",
			},
		},
		{
			name: "Shell shebang command",
			scope: "comment.line.shebang constant.language",
			settings: {
				foreground: colors.mint,
				fontStyle: "italic",
			},
		},
		{
			name: "Shell interpolated command",
			scope: [
				"meta.function-call.arguments.shell punctuation.definition.variable.shell",
				"meta.function-call.arguments.shell punctuation.section.interpolation",
				"meta.function-call.arguments.shell punctuation.definition.variable.shell",
				"meta.function-call.arguments.shell punctuation.section.interpolation",
			],
			settings: {
				foreground: colors.cherry,
			},
		},
		{
			name: "Shell interpolated command variable",
			scope: "meta.string meta.interpolation.parameter.shell variable.other.readwrite",
			settings: {
				foreground: colors.peach,
				fontStyle: "italic",
			},
		},
		{
			scope: [
				"source.shell punctuation.section.interpolation",
				"punctuation.definition.evaluation.backticks.shell",
			],
			settings: {
				foreground: colors.mint,
			},
		},
		{
			name: "Shell EOF",
			scope: "entity.name.tag.heredoc.shell",
			settings: {
				foreground: colors.plum,
			},
		},
		{
			name: "Shell quoted variable",
			scope: "string.quoted.double.shell variable.other.normal.shell",
			settings: {
				foreground: colors.text,
			},
		},
	];
};

export default tokens;
