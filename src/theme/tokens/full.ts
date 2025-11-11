import { ThemeContext } from "../../types";
import { mix } from "../utils";

export default function full(ctx: ThemeContext) {
	const { colors, tokenColors } = ctx.palette;

	return [
		{
			scope: [
				"comment",
				"comment keyword",
				"comment markup.underline.link",
				"comment string",
				"comment punctuation",
				"comment text",
			],
			settings: {
				foreground: colors.surface0,
			},
		},
		{
			scope: ["comment storage.type", "comment punctuation.definition"],
			settings: {
				foreground: tokenColors.keyword_storage,
			},
		},
		{
			scope: "comment entity.name.type",
			settings: {
				foreground: tokenColors.type,
			},
		},
		{
			scope: ["comment variable", "comment variable.other"],
			settings: {
				foreground: colors.champagne,
			},
		},
		{
			scope: "comment keyword.codetag.notation",
			settings: {
				foreground: colors.mauve,
			},
		},
		{
			scope: "comment.git-status.header.remote",
			settings: {
				foreground: tokenColors.entity_name,
			},
		},
		{
			scope: "comment.git-status.header.local",
			settings: {
				foreground: tokenColors.menu_bg_highlight,
			},
		},
		{
			scope: "comment.other.git-status.head",
			settings: {
				foreground: colors.text,
			},
		},
		{
			scope: "constant",
			settings: {
				foreground: colors.mauve,
			},
		},
		{
			scope: "constant.other",
			settings: {
				foreground: colors.text,
			},
		},
		{
			scope: "constant.other.php",
			settings: {
				foreground: colors.mauve,
			},
		},
		{
			scope: "constant.other.property",
			settings: {
				foreground: colors.mauve,
			},
		},
		{
			scope: "constant.other.citation.latex",
			settings: {
				foreground: colors.mauve,
			},
		},
		{
			scope: "constant.other.color",
			settings: {
				foreground: colors.mauve,
			},
		},
		{
			scope: "constant.other.character-class.escape",
			settings: {
				foreground: colors.mauve,
			},
		},
		{
			scope: "constant.other.key",
			settings: {
				foreground: colors.mauve,
			},
		},
		{
			scope: "constant.other.symbol",
			settings: {
				foreground: colors.raspberry,
			},
		},
		{
			scope: "constant.numeric",
			settings: {
				foreground: colors.mauve,
			},
		},
		{
			scope: "constant.language",
			settings: {
				foreground: tokenColors.base_value,
			},
		},
		{
			scope: "constant.character.escape",
			settings: {
				foreground: colors.mauve,
			},
		},
		{
			scope: "constant.numeric.line-number.find-in-files",
			settings: {
				foreground: colors.surface0,
			},
		},
		{
			scope: "constant.numeric.line-number.match.find-in-files",
			settings: {
				foreground: colors.lavender,
			},
		},
		{
			scope: "entity.name.function.member.static",
			settings: {
				foreground: colors.text,
			},
		},
		{
			scope: [
				"entity.name.type.class.templated",
				"entity.name.type.class.generic",
				"entity.name.type.namespace",
				"entity.name.namespace",
				"string.quoted.other.lt-gt.include.cpp",
			],
			settings: {
				foreground: tokenColors.namespace,
			},
		},
		{
			scope: "entity.name.label",
			settings: {
				foreground: colors.mauve,
			},
		},
		{
			scope: "entity.name.function.preprocessor",
			settings: {
				foreground: tokenColors.menu_bg_highlight,
			},
		},
		{
			scope: "entity.name.constant",
			settings: {
				foreground: colors.mauve,
			},
		},
		{
			scope: "entity.other.inherited-class",
			settings: {
				foreground: tokenColors.menu_bg_highlight,
				fontStyle: "italic",
			},
		},
		{
			scope: [
				"entity.name.tag",
				"entity.name.tag.js.jsx support.class.component.js.jsx",
				"entity.name.tag support.class.component",
			],
			settings: {
				foreground: tokenColors.entity_name,
			},
		},
		{
			scope: "entity.name.function.operator",
			settings: {
				foreground: tokenColors.entity_name,
			},
		},
		{
			scope: [
				"entity.name.type",
				"entity.name.type.class.reference",
				"entity.name.type.class.value",
				"entity.name.type.delegate",
				"entity.name.function.decorator.gdscript",
			],
			settings: {
				foreground: tokenColors.type,
			},
		},
		{
			scope: "entity.other.attribute-name",
			settings: {
				foreground: tokenColors.menu_bg_highlight,
				fontStyle: "italic",
			},
		},
		{
			scope: [
				"entity.other.attribute-name.class.css",
				"entity.other.attribute-name.parent-selector-suffix.css",
				"entity.other.attribute-name.parent-selector-suffix.css punctuation.definition.entity.css",
				"entity.other.attribute-name.css",
			],
			settings: {
				foreground: tokenColors.menu_bg_highlight,
			},
		},
		{
			scope: "entity.other.attribute-name.id.css",
			settings: {
				foreground: colors.raspberry,
			},
		},
		{
			scope: [
				"entity.other.attribute-name.pseudo-class.css",
				"entity.other.pseudo-class.css",
				"entity.other.pseudo-element.css",
			],
			settings: {
				foreground: tokenColors.menu_bg_highlight,
				fontStyle: "italic",
			},
		},
		{
			scope: ["entity.name.function", "support.function"],
			settings: {
				foreground: tokenColors.menu_bg_highlight,
			},
		},
		{
			scope: "entity.other.git-status.hex",
			settings: {
				foreground: colors.mauve,
			},
		},
		{
			scope: "entity.other.jinja2.delimiter",
			settings: {
				foreground: colors.surface0,
			},
		},
		{
			scope: "entity.name.operator.custom-literal",
			settings: {
				foreground: colors.text,
			},
		},
		{
			scope: "entity.name.operator.custom-literal.string",
			settings: {
				foreground: colors.lavender,
			},
		},
		{
			scope: "entity.name.operator.custom-literal.number",
			settings: {
				foreground: colors.mauve,
			},
		},
		{
			scope: "entity.name.type.rust",
			settings: {
				foreground: tokenColors.menu_bg_highlight,
			},
		},
		{
			scope: "entity.name.lifetime.rust",
			settings: {
				foreground: tokenColors.entity_name,
			},
		},
		{
			scope: "invalid",
			settings: {
				fontStyle: "italic",
			},
		},
		{
			scope: "keyword",

			settings: {
				foreground: tokenColors.keyword_base_types,
			},
		},
		{
			scope: "keyword.control",
			settings: {
				foreground: tokenColors.keyword_flow,
				fontStyle: "",
			},
		},
		{
			scope: ["keyword.operator", "keyword.operator.member"],
			settings: {
				foreground: colors.raspberry,
			},
		},
		{
			scope: "keyword.other.substitution",
			settings: {
				foreground: colors.surface0,
			},
		},
		{
			scope: [
				"keyword.other.template.begin",
				"keyword.other.template.end",
			],
			settings: {
				foreground: tokenColors.entity_name,
			},
		},
		{
			scope: [
				"keyword.operator.heading.restructuredtext",
				"keyword.operator.table.row.restructuredtext keyword.operator.table.data.restructuredtext",
			],
			settings: {
				foreground: colors.surface0,
			},
		},
		{
			scope: [
				"keyword.other.fn.rust",
				"keyword.other.rust",
				"keyword.other.unsafe.rust",
				"keyword.other.where.rust",
			],
			settings: {
				foreground: tokenColors.menu_bg_highlight,
			},
		},
		{
			scope: ["keyword.control.rust", "keyword.operator.misc.rust"],
			settings: {
				foreground: tokenColors.entity_name,
			},
		},
		{
			scope: "markup.italic",
			settings: {
				fontStyle: "italic",
			},
		},
		{
			scope: "markup.bold",
			settings: {
				fontStyle: "bold",
			},
		},
		{
			scope: "markup.heading",
			settings: {
				foreground: colors.lavender,
			},
		},
		{
			scope: "markup.raw",
			settings: {
				foreground: colors.raspberry,
			},
		},
		{
			scope: "markup.underline",
			settings: {
				fontStyle: "underline",
			},
		},
		{
			scope: "markup.underline.link",
			settings: {
				foreground: tokenColors.menu_bg_highlight,
			},
		},
		{
			scope: [
				"markup.inserted",
				"markup.inserted punctuation.definition.inserted",
			],
			settings: {
				foreground: tokenColors.menu_bg_highlight,
			},
		},
		{
			scope: [
				"markup.deleted",
				"markup.deleted punctuation.definition.deleted",
			],
			settings: {
				foreground: colors.raspberry,
			},
		},
		{
			scope: [
				"markup.changed",
				"markup.changed punctuation.definition.changed",
			],
			settings: {
				foreground: colors.lavender,
			},
		},
		{
			scope: [
				"markup.ignored",
				"markup.ignored punctuation.definition.ignored",
			],
			settings: {
				foreground: colors.surface0,
			},
		},
		{
			scope: "markup.untracked",
			settings: {
				foreground: colors.surface1,
			},
		},
		{
			scope: "markup.quote",
			settings: {
				fontStyle: "italic",
			},
		},
		{
			scope: [
				"meta.brace.round",
				"meta.brace.square",
				"meta.brace.curly",
				"meta.delimiter.comma.js",
				"meta.function-call.without-arguments.js",
				"meta.function-call.method.without-arguments.js",
			],
			settings: {
				foreground: colors.teal,
			},
		},
		{
			scope: [
				"meta.function-call.python",
				"meta.function-call.arguments.python meta.function-call.python",
			],
			settings: {
				foreground: tokenColors.menu_bg_highlight,
			},
		},
		{
			scope: "meta.function-call.python meta.function-call.arguments.python",
			settings: {
				foreground: colors.text,
			},
		},
		{
			scope: "meta.instance.constructor",
			settings: {
				foreground: tokenColors.menu_bg_highlight,
			},
		},
		{
			scope: [
				"meta.attribute-with-value.class string",
				"meta.attribute.class.html string",
			],
			settings: {
				foreground: tokenColors.menu_bg_highlight,
			},
		},
		{
			scope: [
				"meta.attribute-with-value.id string",
				"meta.attribute.id.html string",
			],
			settings: {
				foreground: colors.raspberry,
			},
		},
		{
			scope: [
				"source.json meta.structure.dictionary",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
				"source.json meta.structure.dictionary string",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
				"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
			],
			settings: {
				foreground: colors.text,
			},
		},
		{
			scope: [
				"source.json meta.structure.dictionary.value string",
				"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
				"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
				"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
				"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
				"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
				"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
				"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
				"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
				"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
				"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
				"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
				"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
				"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
				"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
				"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
			],
			settings: {
				foreground: colors.lavender,
			},
		},

		{
			scope: "meta.property-list.css variable.other",
			settings: {
				foreground: colors.raspberry,
			},
		},
		{
			scope: ["entity.name.constant.preprocessor", "meta.preprocessor"],
			settings: {
				foreground: colors.mauve,
			},
		},
		{
			scope: "meta.diff.git-diff.header",
			settings: {
				foreground: colors.lavender,
			},
		},
		{
			scope: "meta.type_params.rust",
			settings: {
				foreground: colors.text,
			},
		},
		{
			scope: ["meta.attribute.rust", "variable.language.rust"],
			settings: {
				foreground: colors.raspberry,
			},
		},
		{
			scope: ["punctuation.definition.interpolation"],
			settings: {
				foreground: tokenColors.punctuation,
			},
		},
		{
			scope: "punctuation",
			settings: {
				foreground: tokenColors.punctuation,
			},
		},
		{
			scope: [
				"punctuation.definition.tag",
				"punctuation.definition.tag source",
				"punctuation.definition.group.begin.ruby",
				"punctuation.definition.group.end.ruby",
				"punctuation.definition.group.begin.css",
				"punctuation.definition.group.end.css",
				"punctuation.definition.string.end.html source.css",
			],
			settings: {
				foreground: tokenColors.punctuation,
			},
		},
		{
			scope: "punctuation.definition.group",
			settings: {
				foreground: colors.text,
			},
		},
		{
			scope: "punctuation.definition.comment",
			settings: {
				foreground: colors.surface0,
			},
		},
		{
			scope: [
				"punctuation.definition.variable",
				"punctuation.definition.keyword.scss",
				"punctuation.definition.entity.css",
			],
			settings: {
				foreground: tokenColors.punctuation,
			},
		},
		{
			scope: [
				"punctuation.section.embedded",
				"punctuation.section.embedded entity.name.tag",
				"punctuation.section.embedded constant.other",
				"punctuation.section.embedded source",
			],
			settings: {
				foreground: tokenColors.punctuation,
			},
		},
		{
			scope: [
				"punctuation.template-string.element.begin",
				"punctuation.template-string.element.end",
				"punctuation.definition.string.template.begin",
				"punctuation.definition.string.template.end",
				"string.quoted.template punctuation.definition.string.begin",
				"string.quoted.template punctuation.definition.string.end",
			],
			settings: {
				foreground: tokenColors.punctuation,
			},
		},
		{
			scope: [
				"meta.paragraph.markdown meta.dummy.line-break",
				"meta.paragraph.markdown meta.hard-line-break.markdown",
			],
			settings: {},
		},
		{
			scope: "region.redish",
			settings: {
				foreground: tokenColors.entity_name,
			},
		},
		{
			scope: "region.orangish",
			settings: {
				foreground: colors.raspberry,
			},
		},
		{
			scope: "region.yellowish",
			settings: {
				foreground: colors.lavender,
			},
		},
		{
			scope: "region.greenish",
			settings: {
				foreground: tokenColors.menu_bg_highlight,
			},
		},
		{
			scope: "region.bluish",
			settings: {
				foreground: colors.pink,
			},
		},
		{
			scope: "region.purplish",
			settings: {
				foreground: colors.mauve,
			},
		},
		{
			scope: "region.pinkish",
			settings: {
				foreground: tokenColors.entity_name,
			},
		},
		{
			scope: "region.whitish",
			settings: {
				foreground: colors.text,
			},
		},
		{
			scope: "source",
			settings: {
				foreground: colors.text,
			},
		},
		{
			scope: ["source.scss", "source.sass"],
			settings: {
				foreground: colors.text,
			},
		},
		{
			scope: [
				"source.sass variable.other",
				"source.sass variable.sass",
				"source.scss variable.other",
				"source.scss variable.scss",
				"source.scss variable.sass",
				"source.css variable.other",
				"source.css variable.scss",
				"source.less variable.other",
				"source.less variable.other.less",
				"source.less variable.declaration.less",
			],
			settings: {
				foreground: colors.raspberry,
				fontStyle: "italic",
			},
		},
		{
			scope: "source.git-show.commit.sha",
			settings: {
				foreground: colors.mauve,
			},
		},
		{
			scope: [
				"source.git-show.author",
				"source.git-show.date",
				"source.git-diff.command",
				"source.git-diff.command meta.diff.git-diff.header.from-file",
				"source.git-diff.command meta.diff.git-diff.header.to-file",
			],
			settings: {
				foreground: colors.surface0,
			},
		},
		{
			scope: [
				"source.git-show meta.diff.git-diff.header.extended.index.from-sha",
				"source.git-show meta.diff.git-diff.header.extended.index.to-sha",
			],
			settings: {
				foreground: colors.mauve,
			},
		},
		{
			scope: "source.git-show meta.diff.range.unified",
			settings: {
				foreground: colors.raspberry,
			},
		},
		{
			scope: [
				"source.git-show meta.diff.header.from-file",
				"source.git-show meta.diff.header.to-file",
			],
			settings: {
				foreground: colors.surface0,
			},
		},
		{
			scope: "storage",
			settings: {
				foreground: tokenColors.entity_name,
			},
		},
		{
			scope: "storage.type",
			settings: {
				foreground: tokenColors.keyword_storage,
				fontStyle: "bold",
			},
		},
		{
			scope: "storage.type.accessor",
			settings: {
				foreground: tokenColors.method,
			},
		},
		{
			scope: "storage.type.extends",
			settings: {
				foreground: tokenColors.entity_name,
				fontStyle: "",
			},
		},
		{
			scope: "storage.type.function.arrow",
			settings: {
				foreground: tokenColors.entity_name,
				fontStyle: "",
			},
		},
		{
			scope: [
				"storage.modifier",
				"storage.type.modifier",
				"storage.type.function.gdscript",
			],
			settings: {
				foreground: tokenColors.keyword_storage,
				fontStyle: "italic",
			},
		},
		{
			scope: "storage.class.restructuredtext.ref",
			settings: {
				foreground: colors.mauve,
			},
		},
		{
			scope: [
				"storage.modifier.visibility.rust",
				"storage.modifier.lifetime.rust",
			],
			settings: {
				foreground: tokenColors.entity_name,
			},
		},
		{
			scope: [
				"storage.modifier.const.rust",
				"storage.modifier.dyn.rust",
				"storage.modifier.mut.rust",
				"storage.modifier.static.rust",
				"storage.type.rust",
				"storage.type.core.rust",
				"storage.class.std.rust",
			],
			settings: {
				foreground: tokenColors.menu_bg_highlight,
			},
		},
		{
			scope: [
				"storage.type.rust",
				"storage.modifier.const.rust",
				"storage.modifier.dyn.rust",
				"storage.modifier.mut.rust",
				"storage.modifier.static.rust",
				"keyword.other.rust",
				"keyword.other.where.rust",
			],
			settings: {
				foreground: tokenColors.entity_name,
			},
		},
		{
			scope: "string",
			settings: {
				foreground: colors.lavender,
			},
		},
		{
			scope: "string.unquoted.label",
			settings: {
				foreground: colors.text,
			},
		},
		{
			scope: "string source",
			settings: {
				foreground: colors.text,
			},
		},
		{
			scope: "string source punctuation.section.embedded",
			settings: {
				foreground: colors.surface0,
			},
		},
		{
			scope: ["string.other.link.title", "string.other.link.description"],
			settings: {
				foreground: tokenColors.entity_name,
			},
		},
		{
			scope: "string.other.link.description.title",
			settings: {
				foreground: tokenColors.menu_bg_highlight,
			},
		},
		{
			scope: [
				"string.regexp punctuation.definition.string.begin",
				"string.regexp punctuation.definition.string.end",
			],
			settings: {
				foreground: tokenColors.punctuation,
			},
		},
		{
			scope: ["string.other.ref", "string.other.restructuredtext.ref"],
			settings: {
				foreground: tokenColors.menu_bg_highlight,
			},
		},
		{
			scope: "string.other.git-status.help.key",
			settings: {
				foreground: colors.surface0,
			},
		},
		{
			scope: "string.other.git-status.remote",
			settings: {
				foreground: tokenColors.entity_name,
			},
		},
		{
			scope: "support.constant",
			settings: {
				foreground: tokenColors.menu_bg_highlight,
			},
		},
		{
			scope: "support.constant.handlebars",
			settings: {
				foreground: colors.surface0,
			},
		},
		{
			scope: "support.type.vendor-prefix.css",
			settings: {
				foreground: colors.surface0,
			},
		},
		{
			scope: "support.function",
			settings: {
				foreground: tokenColors.menu_bg_highlight,
			},
		},
		{
			scope: ["support.type", "entity.name.type.object.console"],
			settings: {
				foreground: tokenColors.menu_bg_highlight,
				fontStyle: "italic",
			},
		},
		{
			scope: "support.variable",
			settings: {
				foreground: tokenColors.menu_bg_highlight,
			},
		},
		{
			scope: "support.type.property-name",
			settings: {
				foreground: colors.text,
				fontStyle: "",
			},
		},
		{
			scope: "support.class",
			settings: {
				foreground: tokenColors.menu_bg_highlight,
			},
		},
		{
			scope: "support.constant.core.rust",
			settings: {
				foreground: colors.mauve,
			},
		},
		{
			scope: "text",
			settings: {
				foreground: colors.text,
			},
		},
		{
			scope: "text.find-in-files",
			settings: {
				foreground: colors.text,
			},
		},
		{
			scope: ["variable"],
			settings: {
				foreground: tokenColors.field_name,
				fontStyle: "",
			},
		},
		{
			scope: ["variable.parameter", "parameters variable.function"],
			settings: {
				foreground: colors.raspberry,
				fontStyle: "italic",
			},
		},
		{
			scope: [
				"variable.language",
				"variable.parameter.function.language.special.self.python",
				"variable.parameter.function.language.special.cls.python",
			],
			settings: {
				foreground: colors.raspberry,
				fontStyle: "italic",
			},
		},
		{
			scope: "variable.language.arguments",
			settings: {
				foreground: colors.mauve,
			},
		},
		{
			scope: ["variable.other.class"],
			settings: {
				foreground: tokenColors.field_name,
			},
		},
		{
			scope: [
				"meta.object.member",
				"variable.other.class",
				"variable.other.property.js",
				"variable.other.property.gdscript",
			],
			settings: {
				foreground: tokenColors.plain,
			},
		},
		{
			scope: "variable.other.constant",
			settings: {
				foreground: tokenColors.field_name,
			},
		},
		{
			scope: "variable.other.member",
			settings: {
				foreground: tokenColors.field_name,
			},
		},
		{
			scope: "variable.other.enummember",
			settings: {
				foreground: colors.mauve,
			},
		},
		{
			scope: [
				"variable.other.property",
				"variable.other.property.static",
				"variable.other.event",
			],
			settings: {
				foreground: tokenColors.property,
			},
		},
		{
			scope: "variable.function",
			settings: {
				foreground: tokenColors.menu_bg_highlight,
			},
		},
		{
			scope: ["variable.other.substitution", "heading.2.markdown"],
			settings: {
				foreground: colors.pink,
			},
		},
		{
			scope: [
				"source.ruby variable.other.readwrite.instance.ruby",
				"source.ruby variable.other.readwrite.class.ruby",
			],
			settings: {
				foreground: colors.mauve,
			},
		},
		{
			scope: "source.jinja2 variable.other.jinja2.block",
			settings: {
				foreground: tokenColors.menu_bg_highlight,
			},
		},
		{
			scope: "source.jinja2 variable.other.jinja2",
			settings: {
				foreground: colors.raspberry,
			},
		},
		{
			scope: [
				"comment",
				"keyword",
				"storage.modifier",
				"storage.type.class.js",
				"keyword.control.directive.include.cpp",
			],
			settings: {
				fontStyle: "italic",
			},
		},
		{
			scope: [
				"invalid",
				"keyword.other.unit.px.css",
				"constant.numeric.decimal.js",
				"constant.numeric.json",
			],
			settings: {
				fontStyle: "",
			},
		},
		{
			scope: [
				"meta.variable.declaration.gdscript variable.other.gdscript",
				"variable.parameter.function.language.gdscript",
			],
			settings: {
				foreground: tokenColors.field_name_declaration,
			},
		},
		{
			scope: [
				"entity.name.variable.field",
				"entity.name.variable.parameter",
				"entity.name.variable.local",
				"entity.name.variable.tuple-element",
			],
			settings: {
				foreground: tokenColors.field_name_declaration,
			},
		},
		{
			scope: ["variable.other", "variable.other.object"],
			settings: {
				foreground: tokenColors.field_name,
			},
		},
		{
			scope: ["entity.name.variable.local", "entity.name.variable.field"],
			settings: {
				foreground: tokenColors.field_name_declaration,
			},
		},
		{
			scope: ["support.type.property-name"],
			settings: {
				foreground: tokenColors.property,
			},
		},
		{
			scope: [
				"entity.name.class",
				"entity.name.type.class",
				"entity.name.type.struct",
			],
			settings: {
				foreground: tokenColors.type_declaration,
			},
		},
		{
			scope: [
				"function",
				"entity.name.function",
				"entity.name.function.templated",
				"meta.function-call.gdscript keyword.language.gdscript",
			],
			settings: {
				foreground: tokenColors.method,
				fontStyle: "",
			},
		},
		{
			scope: [
				"property",
				"entity.name.variable.event",
				"entity.name.variable.property",
			],
			settings: {
				foreground: tokenColors.property,
			},
		},
		{
			scope: [
				"string",
				"constant.language",
				"constant.numeric",
				"string.quoted.double",
				"entity.name.variable.enum-member",
				"variable.other.constant.gdscript",
			],
			settings: {
				foreground: tokenColors.base_value,
			},
		},
		{
			scope: [
				"punctuation.definition.string.begin",
				"punctuation.definition.string.end",
			],
			settings: {
				foreground: tokenColors.punctuation,
			},
		},
		{
			scope: ["keyword.operator", "punctuation.accessor"],
			settings: {
				foreground: tokenColors.punctuation,
			},
		},
		{
			scope: [
				"keyword.type",
				"keyword.operator.expression.new",
				"storage.type.var.gdscript",
			],
			settings: {
				foreground: tokenColors.keyword_base_types,
				fontStyle: "italic",
			},
		},
		{
			scope: ["keyword.operator"],
			settings: {
				foreground: tokenColors.operator,
				fontStyle: "",
			},
		},
		{
			scope: "token.info-token",
			settings: {
				foreground: colors.pink,
			},
		},
		{
			scope: "token.warn-token",
			settings: {
				foreground: colors.lavender,
			},
		},
		{
			scope: "token.error-token",
			settings: {
				foreground: tokenColors.entity_name,
			},
		},
		{
			scope: "token.debug-token",
			settings: {
				foreground: colors.mauve,
			},
		},
		{
			scope: "heading.1.markdown",
			settings: {
				foreground: "#bb9aff",
				fontStyle: "bold",
			},
		},
		{
			scope: "heading.2.markdown",
			settings: {
				foreground: "#ff9ade",
				fontStyle: "bold",
			},
		},
		{
			scope: "heading.3.markdown",
			settings: {
				foreground: "#ffc19a",
			},
		},
		{
			scope: "heading.4.markdown",
			settings: {
				foreground: "#ff9aad",
			},
		},
		{
			scope: "punctuation.definition.heading.markdown",
			settings: {
				foreground: colors.surface0,
				fontStyle: "bold",
			},
		},
	];
}
