import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
	const { colors } = context.palette;

	return [
		{
			name: "Classes, reflecting the className color in JSX",
			scope: [
				"source.css entity.other.attribute-name.class.css",
				"entity.other.attribute-name.parent-selector.css punctuation.definition.entity.css",
			],
			settings: {
				foreground: colors.raspberry,
			},
		},
		{
			name: "Operators",
			scope: "punctuation.separator.operator.css",
			settings: {
				foreground: colors.mint,
			},
		},
		{
			name: "Pseudo classes",
			scope: "source.css entity.other.attribute-name.pseudo-class",
			settings: {
				foreground: colors.mint,
			},
		},
		{
			scope: "source.css constant.other.unicode-range",
			settings: {
				foreground: colors.peach,
			},
		},
		{
			scope: "source.css variable.parameter.url",
			settings: {
				foreground: colors.watermelon,
				fontStyle: "",
			},
		},
		{
			name: "CSS vendored property names",
			scope: ["support.type.vendored.property-name"],
			settings: {
				foreground: colors.sky,
			},
		},
		{
			name: "Less/SCSS right-hand variables (@/$-prefixed)",
			scope: [
				"source.css meta.property-value variable",
				"source.css meta.property-value variable.other.less",
				"source.css meta.property-value variable.other.less punctuation.definition.variable.less",
				// the left hand equivalent, initial assignment
				"meta.definition.variable.scss",
				// "meta.property-list variable.scss",
			],
			settings: {
				foreground: colors.raspberry,
			},
		},
		{
			name: "CSS variables (--prefixed)",
			scope: [
				"source.css meta.property-list variable",
				// ditto for less
				"meta.property-list variable.other.less",
				"meta.property-list variable.other.less punctuation.definition.variable.less",
			],
			settings: {
				foreground: colors.azalea,
			},
		},
		{
			name: "CSS Percentage values, styled the same as numbers",
			scope: "keyword.other.unit.percentage.css",
			settings: {
				foreground: colors.peach,
			},
		},
		{
			name: "CSS Attribute selectors, styled the same as strings",
			scope: "source.css meta.attribute-selector",
			settings: {
				foreground: colors.watermelon,
			},
		},
	];
};

export default tokens;
