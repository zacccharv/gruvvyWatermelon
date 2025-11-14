import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
	const { colors } = context.palette;

	return [
		{
			name: "GraphQL variables",
			scope: "variable.graphql",
			settings: {
				foreground: colors.text,
			},
		},
		{
			name: "GraphQL aliases",
			scope: "string.unquoted.alias.graphql",
			settings: {
				foreground: colors.peachpuff,
			},
		},
		{
			name: "GraphQL enum members",
			scope: "constant.character.enum.graphql",
			settings: {
				foreground: colors.mint,
			},
		},
		{
			name: "GraphQL field in types",
			scope: "meta.objectvalues.graphql constant.object.key.graphql string.unquoted.graphql",
			settings: {
				foreground: colors.peachpuff,
			},
		},
	];
};

export default tokens;
