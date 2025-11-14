import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
	const { colors } = context.palette;

	return [
		{
			name: "Regex string begin/end in JS/TS",
			scope: [
				"string.regexp punctuation.definition.string.begin",
				"string.regexp punctuation.definition.string.end",
			],
			settings: {
				foreground: colors.bubblegum,
			},
		},
		{
			name: "Regex anchors (^, $)",
			scope: "keyword.control.anchor.regexp",
			settings: {
				foreground: colors.plum,
			},
		},
		{
			name: "Regex regular string match",
			scope: "string.regexp.ts",
			settings: {
				foreground: colors.text,
			},
		},
		{
			name: "Regex group parenthesis & backreference (\\1, \\2, \\3, ...)",
			scope: [
				"punctuation.definition.group.regexp",
				"keyword.other.back-reference.regexp",
			],
			settings: {
				foreground: colors.watermelon,
			},
		},
		{
			name: "Regex character class []",
			scope: "punctuation.definition.character-class.regexp",
			settings: {
				foreground: colors.raspberry2,
			},
		},
		{
			name: "Regex character classes (\\d, \\w, \\s)",
			scope: "constant.other.character-class.regexp",
			settings: {
				foreground: colors.bubblegum,
			},
		},
		{
			name: "Regex range",
			scope: "constant.other.character-class.range.regexp",
			settings: {
				foreground: colors.azalea,
			},
		},
		{
			name: "Regex quantifier",
			scope: "keyword.operator.quantifier.regexp",
			settings: {
				foreground: colors.mint,
			},
		},
		{
			name: "Regex constant/numeric",
			scope: "constant.character.numeric.regexp",
			settings: {
				foreground: colors.peach,
			},
		},
		{
			name: "Regex lookaheads, negative lookaheads, lookbehinds, negative lookbehinds",
			scope: [
				"punctuation.definition.group.no-capture.regexp",
				"meta.assertion.look-ahead.regexp",
				"meta.assertion.negative-look-ahead.regexp",
			],
			settings: {
				foreground: colors.blueberry,
			},
		},
	];
};

export default tokens;
