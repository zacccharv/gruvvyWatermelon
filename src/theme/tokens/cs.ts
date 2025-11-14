import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
	const { colors } = context.palette;

	return [
		{
			name: "C# Interpolated Strings",
			scope: "meta.interpolation.cs",
			settings: {
				foreground: colors.text,
			},
		},
		{
			name: "C# xml-style docs",
			scope: "comment.block.documentation.cs",
			settings: {
				foreground: colors.text,
			},
		},
		{
			name: "c# field names",
			scope: ["source.cs entity.name.variable.field"],
			settings: {
				foreground: colors.peachpuff,
			},
		},
		{
			name: "using keyword",
			scope: "keyword.other.directive.using",
			settings: {
				foreground: colors.watermelon,
			},
		},
	];
};

export default tokens;
