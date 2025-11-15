import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
	const { colors } = context.palette;

	return [
		{
			name: "Exported Variable",
			scope: "meta.export variable.other.readwrite.js",
			settings: {
				foreground: colors.raspberry,
			},
		},
		{
			name: "JS/TS constants & properties",
			scope: [
				"variable.other.constant.js",
				"variable.other.constant.ts",
				"variable.other.property.js",
				"variable.other.property.ts",
			],
			settings: {
				foreground: colors.peachpuff,
			},
		},
		{
			name: "JSDoc; these are mainly params, so styled as such",
			scope: [
				"variable.other.jsdoc",
				"comment.block.documentation variable.other",
			],
			settings: {
				foreground: colors.raspberry,
				fontStyle: "",
			},
		},
		{
			name: "JSDoc keywords",
			scope: "storage.type.class.jsdoc",
			settings: {
				fontStyle: "",
			},
		},
		{
			scope: "support.type.object.console.js",
			settings: {
				foreground: colors.text,
			},
		},
		{
			name: "Node constants as keywords (module, etc.)",
			scope: ["support.constant.node", "support.type.object.module.js"],
			settings: {
				foreground: colors.plum,
			},
		},
		{
			name: "implements as keyword",
			scope: "storage.modifier.implements",
			settings: {
				foreground: colors.plum,
			},
		},
		{
			name: "Builtin types",
			scope: [
				"constant.language.null.js",
				"constant.language.null.ts",
				"constant.language.undefined.js",
				"constant.language.undefined.ts",
				"support.type.builtin.ts",
			],
			settings: {
				foreground: colors.plum,
			},
		},
		{
			scope: "variable.parameter.generic",
			settings: {
				foreground: colors.raspberry,
			},
		},
		{
			name: "Arrow functions",
			scope: [
				"keyword.declaration.function.arrow.js",
				"storage.type.function.arrow.ts",
			],
			settings: {
				foreground: colors.mint,
			},
		},
		{
			name: "Decorator punctuations (decorators inherit from blue functions, instead of styleguide peach)",
			scope: "punctuation.decorator.ts",
			settings: {
				foreground: colors.cornflower,
				fontStyle: "italic",
			},
		},
		{
			name: "Extra JS/TS keywords",
			scope: [
				"keyword.operator.expression.in.js",
				"keyword.operator.expression.in.ts",
				"keyword.operator.expression.infer.ts",
				"keyword.operator.expression.instanceof.js",
				"keyword.operator.expression.instanceof.ts",
				"keyword.operator.expression.is",
				"keyword.operator.expression.keyof.ts",
				"keyword.operator.expression.of.js",
				"keyword.operator.expression.of.ts",
				"keyword.operator.expression.typeof.ts",
			],
			settings: {
				foreground: colors.plum,
			},
		},
	];
};

export default tokens;
