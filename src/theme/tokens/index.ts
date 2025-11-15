import type { TextmateColors, ThemeContext } from "@/types";

import cpp from "./cpp";
import cs from "./cs";
import css from "./css";
import data from "./data";
import diff from "./diff";
import dotenv from "./dotenv";
import gdscript from "./gdscript";
import golang from "./golang";
import graphql from "./graphql";
import html from "./html";
import java from "./java";
import javascript from "./javascript";
import julia from "./julia";
import latex from "./latex";
import liquid from "./liquid";
import lua from "./lua";
import markdown from "./markdown";
import nix from "./nix";
import php from "./php";
import python from "./python";
import r from "./r";
import regex from "./regex";
import rust from "./rust";
import shell from "./shell";
import typst from "./typst";

export default function tokens(context: ThemeContext): TextmateColors {
	const { options, palette } = context;
	const { colors } = palette;

	return [
		{
			name: "Basic text & variable names (incl. leading punctuation)",
			scope: ["text", "source", "punctuation.definition.variable"],
			settings: {
				foreground: colors.text,
			},
		},
		{
			name: "Parentheses, Brackets, Braces",
			scope: "punctuation",
			settings: {
				foreground: colors.mint,
				fontStyle: "",
			},
		},
		{
			name: "Comments",
			scope: ["comment", "punctuation.definition.comment"],
			settings: {
				foreground: colors.surface1,
				fontStyle: "italic",
			},
		},
		{
			name: "meta preprocessors",
			scope: ["meta.preprocessor", "keyword.preprocessor"],
			settings: {
				foreground: colors.watermelon,
				fontStyle: "italic",
			},
		},
		{
			scope: ["string", "punctuation.definition.string"],
			settings: {
				foreground: colors.watermelon,
			},
		},
		{
			scope: "constant.character.escape",
			settings: {
				foreground: colors.plum,
			},
		},
		{
			name: "Booleans, constants, number type names",
			scope: ["keyword"],
			settings: {
				foreground: colors.mint,
				fontStyle: "italic",
			},
		},
		{
			name: "Using directives",
			scope: [
				"keyword.control.import",
				"keyword.control.include",
				"keyword.control.export",
			],
			settings: {
				foreground: colors.raspberry,
				fontStyle: "bold",
			},
		},
		{
			name: "Control Flow Keywords",
			scope: ["keyword.control.flow", "keyword.control.conditional"],
			settings: {
				foreground: colors.cherry,
				fontStyle: "",
			},
		},
		{
			scope: [
				"keyword.operator.word",
				"keyword.operator.new",
				"storage.type",
				// include punctuation like $ and @ if they're part of the keyword
				"punctuation.definition.keyword",
			],
			settings: {
				foreground: colors.mint,
				fontStyle: "bold",
			},
		},
		{
			scope: "variable.language",
			settings: {
				foreground: colors.cherry,
				fontStyle: "italic",
			},
		},
		{
			name: "base type keywords (void, int, string, etc.)",
			scope: "support.type.primitive",
			settings: {
				foreground: colors.sky,
				fontStyle: "italic",
			},
		},
		{
			scope: "storage.modifier",
			settings: {
				foreground: colors.mint,
				fontStyle: "italic",
			},
		},
		{
			name: "bool / string / const values",
			scope: [
				"variable.other.constant",
				"entity.name.constant",
				"constant.language.boolean",
				"constant.language.false",
				"constant.language.true",
				"keyword.other.unit.user-defined",
			],
			settings: {
				foreground: colors.watermelon,
			},
		},
		{
			scope: "entity.name.tag.documentation",
			settings: {
				foreground: colors.plum,
			},
		},
		{
			name: "Punctuation",
			scope: [
				"keyword.operator",
				"punctuation.accessor",
				"punctuation.definition.generic",
				"meta.function.closure punctuation.section.parameters",
				"punctuation.separator.key-value",
			],
			settings: {
				foreground: colors.mint,
			},
		},
		{
			scope: [
				"entity.name.function",
				"meta.function-call.method",
				"support.function",
				"support.function.misc",
				"variable.function",
			],
			settings: {
				foreground: colors.raspberry,
			},
		},
		{
			name: "Classes",
			scope: [
				"entity.name.class",
				"entity.name.type.class",
				"entity.other.inherited-class",
				"support.class",
				"meta.function-call.constructor",
				"entity.name.struct",
			],
			settings: {
				foreground: colors.raspberry,
			},
		},
		{
			name: "Enum",
			scope: "entity.name.enum",
			settings: {
				foreground: colors.raspberry,
				fontStyle: "italic",
			},
		},
		{
			name: "mutable variable declarations",
			scope: [
				"variable.other.readwrite",
				"variable.other.object",
				"entity.name.variable",
			],
			settings: {
				foreground: colors.peachpuff,
			},
		},
		{
			name: "mutable variable name references",
			scope: ["variable.other.readwrite", "variable.other.object"],
			settings: {
				foreground: colors.azalea,
			},
		},
		{
			name: "Number / Enum member",
			scope: [
				"constant.numeric",
				"meta.enum variable.other.readwrite",
				"variable.other.enummember",
				"entity.name.variable.enum-member",
			],
			settings: {
				foreground: colors.watermelon,
			},
		},
		{
			name: "Object properties",
			scope: ["meta.property.object", "variable.other.object.property"],
			settings: {
				foreground: colors.text,
			},
		},
		{
			name: "Types",
			scope: [
				"meta.type",
				"meta.type-alias",
				"support.type",
				"entity.name.type",
			],
			settings: {
				foreground: colors.plum,
			},
		},
		{
			name: "Decorators",
			scope: [
				"meta.annotation variable.function",
				"meta.annotation variable.annotation.function",
				"meta.annotation punctuation.definition.annotation",
				"meta.decorator",
				"punctuation.decorator",
				"keyword.other.unit.suffix.floating-point",
				"constant.numeric.other.suffix",
			],
			settings: {
				foreground: colors.subtext1,
			},
		},
		{
			name: "Function parameters / Constructor parameters",
			scope: [
				"variable.parameter",
				"meta.function.parameters",
				"entity.name.variable.property",
				"entity.name.variable.parameter",
			],
			settings: {
				foreground: colors.azalea,
			},
		},
		{
			name: "Built-ins",
			scope: ["constant.language", "support.function.builtin"],
			settings: {
				foreground: colors.cherry,
			},
		},
		{
			scope: "entity.other.attribute-name.documentation",
			settings: {
				foreground: colors.cherry,
			},
		},
		{
			name: "Preprocessor directives",
			scope: [
				"keyword.control.directive",
				"punctuation.definition.directive",
			],
			settings: {
				foreground: colors.raspberry,
			},
		},
		{
			name: "Type parameters",
			scope: "punctuation.definition.typeparameters",
			settings: {
				foreground: colors.sky,
			},
		},
		{
			name: "Namespaces",
			scope: ["entity.name.namespace", "entity.name.type.namespace"],
			settings: {
				foreground: colors.cherry,
			},
		},
		{
			name: "Property names (left hand assignments in json/yaml/css/less)",
			scope: [
				"support.type.property-name.css",
				"support.type.property-name.less",
			],
			settings: {
				foreground: colors.cornflower,
				fontStyle: "",
			},
		},
		{
			name: "This/Self keyword",
			scope: [
				"variable.language.this",
				// leading punctuation like $this in PHP
				"variable.language.this punctuation.definition.variable",
			],
			settings: {
				foreground: colors.cherry,
			},
		},
		{
			name: "Object properties",
			scope: "variable.object.property",
			settings: {
				foreground: colors.text,
			},
		},
		{
			name: "String template interpolation",
			scope: ["string.template variable", "string variable"],
			settings: {
				foreground: colors.text,
			},
		},
		{
			name: "`new` as bold",
			scope: "keyword.operator.new",
			settings: {
				fontStyle: "bold",
			},
		},

		// per-language tokens
		...[
			cpp,
			cs,
			css,
			data,
			diff,
			dotenv,
			gdscript,
			golang,
			graphql,
			html,
			java,
			javascript,
			julia,
			latex,
			liquid,
			lua,
			markdown,
			nix,
			php,
			python,
			r,
			regex,
			rust,
			shell,
			typst,
		].flatMap((element) => element(context)),
	];
}
