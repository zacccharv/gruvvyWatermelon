import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
	const { colors } = context.palette;

	return [
		{
			name: "PHP Attributes",
			scope: ["support.attribute.builtin", "meta.attribute.php"],
			settings: {
				foreground: colors.raspberry2,
			},
		},
		{
			name: "PHP Parameters (needed for the leading dollar sign)",
			scope: "meta.function.parameters.php punctuation.definition.variable.php",
			settings: {
				foreground: colors.raspberry,
			},
		},
		{
			name: "PHP Constants (null, __FILE__, etc.)",
			scope: "constant.language.php",
			settings: {
				foreground: colors.plum,
			},
		},
		{
			name: "PHP functions",
			scope: "text.html.php support.function",
			settings: {
				foreground: colors.sky,
			},
		},
		{
			name: "PHPdoc keywords",
			scope: "keyword.other.phpdoc.php",
			settings: {
				fontStyle: "",
			},
		},
	];
};

export default tokens;
