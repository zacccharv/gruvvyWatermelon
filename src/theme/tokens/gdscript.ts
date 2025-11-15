import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
	const { colors } = context.palette;

	return [
		{
			name: "GDScript special keywords",
			scope: "variable.language.gdscript",
			settings: {
				foreground: colors.cherry,
				fontStyle: "italic",
			},
		},
		{
			name: "GDScript functions",
			scope: "support.function.builtin.gdscript",
			settings: {
				foreground: colors.cornflower,
			},
		},
		{
			name: "GDScript constants",
			scope: "constant.language.gdscript",
			settings: {
				foreground: colors.watermelon,
			},
		},
		{
			name: "mutable variable name",
			scope: "meta.variable.declaration.gdscript variable.other.gdscript",
			settings: {
				foreground: colors.peachpuff,
			},
		},
		{
			name: "mutable variable name reference",
			scope: "variable.other.gdscript",
			settings: {
				foreground: colors.azalea,
			},
		},
	];
};

export default tokens;
