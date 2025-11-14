import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
	const { colors } = context.palette;

	return [
		{
			name: "Markup Diff",
			scope: "markup.changed.diff",
			settings: {
				foreground: colors.peach,
			},
		},
		{
			name: "Diff",
			scope: [
				"meta.diff.header.from-file",
				"meta.diff.header.to-file",
				"punctuation.definition.from-file.diff",
				"punctuation.definition.to-file.diff",
			],
			settings: {
				foreground: colors.blueberry,
			},
		},
		{
			name: "Diff Inserted",
			scope: "markup.inserted.diff",
			settings: {
				foreground: colors.watermelon,
			},
		},
		{
			name: "Diff Deleted",
			scope: "markup.deleted.diff",
			settings: {
				foreground: colors.cherry,
			},
		},
	];
};

export default tokens;
