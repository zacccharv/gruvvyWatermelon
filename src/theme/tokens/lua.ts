import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
	const { colors } = context.palette;

	return [
		{
			name: "Lua docstring keywords",
			scope: "comment.line.double-dash.documentation.lua storage.type.annotation.lua",
			settings: {
				foreground: colors.plum,
				fontStyle: "",
			},
		},
		{
			name: "Lua docstring variables",
			scope: [
				"comment.line.double-dash.documentation.lua entity.name.variable.lua",
				"comment.line.double-dash.documentation.lua variable.lua",
			],
			settings: {
				foreground: colors.text,
			},
		},
	];
};

export default tokens;
