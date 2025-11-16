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
			name: "C# Properties",
			scope: ["source.cs entity.name.variable.property"],
			settings: {
				foreground: colors.raspberry,
			},
		},
		{
			scope: [
				"storage.type.accessor.get.cs",
				"storage.type.accessor.set.cs",
			],
			settings: {
				foreground: colors.raspberry,
				fontStyle: "italic",
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
