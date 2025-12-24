import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
	const { colors } = context.palette;

	return [
		{
			name: "Unity shader variable declaration",
			scope: "meta.variable.declaration.unity.hlsl",
			settings: {
				foreground: colors.azalea,
			},
		},
		{
			name: "Unity support class params",
			scope: "support.class.param.unity",
			settings: {
				foreground: colors.azalea,
			},
		},
		{
			name: "Unity shader input variables",
			scope: "support.variable.input.unity",
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
	];
};

export default tokens;
