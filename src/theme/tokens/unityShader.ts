import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
	const { colors } = context.palette;

	return [
		{
			name: "Literal Expressions",
			scope: ["literal.rgba"],
			settings: {
				foreground: colors.blueberry,
			},
		},
		{
			name: "Unity shader struct types",
			scope: "string.unity.tagblock.key",
			settings: {
				foreground: colors.plum,
			},
		},
		{
			name: "Unity shader variable names",
			scope: [
				"meta.variable.declaration.unity.hlsl",
				"support.variable.input.unity",
			],
			settings: {
				foreground: colors.azalea,
			},
		},
		{
			name: "Unity support class properties",
			scope: ["support.class.param.unity", "string.unity.tagblock.value"],
			settings: {
				foreground: colors.azalea,
			},
		},
		{
			name: "Unity shader Semantic variables",
			scope: "variable.other.semantic.shader.extension.unity",
			settings: {
				foreground: colors.cherry,
			},
		},
		{
			name: "Preprocessor after vars",
			scope: "variable.other.unity.hlsl",
			settings: {
				foreground: colors.blueberry,
				fontStyle: "",
			},
		},
	];
};

export default tokens;
