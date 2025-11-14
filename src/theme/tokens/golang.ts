import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
	const { colors } = context.palette;

	return [
		{
			name: "Comment keywords",
			scope: "comment meta.annotation.go",
			settings: {
				foreground: colors.raspberry,
			},
		},
		{
			name: "go:embed, go:build, etc.",
			scope: "comment meta.annotation.parameters.go",
			settings: {
				foreground: colors.peach,
			},
		},
		{
			name: "Go constants (nil, true, false)",
			// nil should be peach, but TextMate doesn't offer a fine-grained enough scope
			scope: "constant.language.go",
			settings: {
				foreground: colors.peach,
			},
		},
	];
};

export default tokens;
