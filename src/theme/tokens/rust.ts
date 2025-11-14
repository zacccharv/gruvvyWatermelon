import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
	const { colors } = context.palette;

	return [
		{
			name: "Rust attribute",
			scope: [
				"meta.annotation.rust",
				"meta.annotation.rust punctuation",
				"meta.attribute.rust",
				"punctuation.definition.attribute.rust",
			],
			settings: {
				foreground: colors.raspberry2,
				fontStyle: "italic",
			},
		},
		{
			name: "Rust attribute strings",
			scope: [
				"meta.attribute.rust string.quoted.double.rust",
				"meta.attribute.rust string.quoted.single.char.rust",
			],
			settings: {
				fontStyle: "",
			},
		},
		{
			name: "Rust keyword",
			scope: [
				"entity.name.function.macro.rules.rust",
				"storage.type.module.rust",
				"storage.modifier.rust",
				"storage.type.struct.rust",
				"storage.type.enum.rust",
				"storage.type.trait.rust",
				"storage.type.union.rust",
				"storage.type.impl.rust",
				"storage.type.rust",
				"storage.type.function.rust",
				"storage.type.type.rust",
			],
			settings: {
				foreground: colors.plum,
				fontStyle: "",
			},
		},
		{
			name: "Rust u/i32, u/i64, etc.",
			scope: "entity.name.type.numeric.rust",
			settings: {
				foreground: colors.plum,
				fontStyle: "",
			},
		},
		{
			name: "Rust generic",
			scope: "meta.generic.rust",
			settings: {
				foreground: colors.peach,
			},
		},
		{
			name: "Rust impl",
			scope: "entity.name.impl.rust",
			settings: {
				foreground: colors.raspberry2,
				fontStyle: "italic",
			},
		},
		{
			name: "Rust module",
			scope: "entity.name.module.rust",
			settings: {
				foreground: colors.peach,
			},
		},
		{
			name: "Rust trait",
			scope: "entity.name.trait.rust",
			settings: {
				foreground: colors.raspberry2,
				fontStyle: "italic",
			},
		},
		{
			name: "Rust struct",
			scope: "storage.type.source.rust",
			settings: {
				foreground: colors.raspberry2,
			},
		},
		{
			name: "Rust union",
			scope: "entity.name.union.rust",
			settings: {
				foreground: colors.raspberry2,
			},
		},
		{
			name: "Rust enum member",
			scope: "meta.enum.rust storage.type.source.rust",
			settings: {
				foreground: colors.mint,
			},
		},
		{
			name: "Rust macro",
			scope: [
				"support.macro.rust",
				"meta.macro.rust support.function.rust",
				"entity.name.function.macro.rust",
			],
			settings: {
				foreground: colors.blueberry,
				fontStyle: "italic",
			},
		},
		{
			name: "Rust lifetime",
			scope: [
				"storage.modifier.lifetime.rust",
				"entity.name.type.lifetime",
			],
			settings: {
				foreground: colors.blueberry,
				fontStyle: "italic",
			},
		},
		{
			name: "Rust string formatting",
			scope: "string.quoted.double.rust constant.other.placeholder.rust",
			settings: {
				foreground: colors.bubblegum,
			},
		},
		{
			name: "Rust return type generic",
			scope: "meta.function.return-type.rust meta.generic.rust storage.type.rust",
			settings: {
				foreground: colors.text,
			},
		},
		{
			name: "Rust functions",
			scope: "meta.function.call.rust",
			settings: {
				foreground: colors.blueberry,
			},
		},
		{
			name: "Rust angle brackets",
			scope: "punctuation.brackets.angle.rust",
			settings: {
				foreground: colors.sky,
			},
		},
		{
			name: "Rust constants",
			scope: "constant.other.caps.rust",
			settings: {
				foreground: colors.peach,
			},
		},
		{
			name: "Rust function parameters",
			scope: ["meta.function.definition.rust variable.other.rust"],
			settings: {
				foreground: colors.raspberry,
			},
		},
		{
			name: "Rust closure variables",
			scope: "meta.function.call.rust variable.other.rust",
			settings: {
				foreground: colors.text,
			},
		},
		{
			name: "Rust self",
			scope: "variable.language.self.rust",
			settings: {
				foreground: colors.cherry,
			},
		},
		{
			name: "Rust metavariable names",
			scope: [
				"variable.other.metavariable.name.rust",
				"meta.macro.metavariable.rust keyword.operator.macro.dollar.rust",
			],
			settings: {
				foreground: colors.bubblegum,
			},
		},
	];
};

export default tokens;
