import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
	const { colors } = context.palette;

	return [
		{
			name: "Annotations",
			scope: [
				"punctuation.definition.annotation",
				"storage.type.annotation",
			],
			settings: {
				foreground: colors.peach,
			},
		},
		{
			name: "Java enums",
			scope: "constant.other.enum.java",
			settings: {
				foreground: colors.mint,
			},
		},
		{
			name: "Java imports",
			scope: "storage.modifier.import.java",
			settings: {
				foreground: colors.text,
			},
		},
		{
			name: "Javadoc",
			scope: "comment.block.javadoc.java keyword.other.documentation.javadoc.java",
			settings: { fontStyle: "" },
		},
	];
};

export default tokens;
