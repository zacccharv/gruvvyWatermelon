import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
	const { colors } = context.palette;

	return [
		{
			name: "Nix attribute names",
			scope: [
				"entity.other.attribute-name.multipart.nix",
				"entity.other.attribute-name.single.nix",
			],
			settings: {
				foreground: colors.cornflower,
			},
		},
		{
			name: "Nix parameter names",
			scope: "variable.parameter.name.nix",
			settings: {
				foreground: colors.text,
				fontStyle: "",
			},
		},
		{
			name: "Nix interpolated parameter names",
			scope: "meta.embedded variable.parameter.name.nix",
			settings: {
				foreground: colors.lavender,
				fontStyle: "",
			},
		},
		{
			name: "Nix paths",
			scope: "string.unquoted.path.nix",
			settings: {
				foreground: colors.bubblegum,
				fontStyle: "",
			},
		},
	];
};

export default tokens;
