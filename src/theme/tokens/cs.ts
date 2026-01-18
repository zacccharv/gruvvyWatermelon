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
			name: "C# field names",
			scope: ["source.cs entity.name.variable.field"],
			settings: {
				foreground: colors.peachpuff,
			},
		},
		{
			name: "Using keyword",
			scope: "keyword.other.directive.using",
			settings: {
				foreground: colors.watermelon,
			},
		},
		{
			name: "Attribute names",
			scope: ["entity.name.type.attribute.cs.extensions"],
			settings: {
				foreground: colors.raspberry,
				fontStyle: "italic",
			},
		},
		{
			name: "Markdown signature entity name",
			scope: ["variable.other.object"],
			settings: {
				foreground: colors.azalea,
			},
		},
		{
			name: "C# struct name",
			scope: ["entity.name.type.cs"],
			settings: {
				foreground: colors.plum,
			},
		},
		{
			name: "C# Variable read write",
			scope: ["variable.other.readwrite.cs"],
			settings: {
				foreground: colors.blueberry,
			},
		},
	];
};

export default tokens;
