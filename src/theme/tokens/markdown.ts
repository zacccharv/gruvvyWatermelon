import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
	const { colors } = context.palette;

	return [
		{
			scope: [
				"heading.1.markdown punctuation.definition.heading.markdown",
				"heading.1.markdown",
				"heading.1.quarto punctuation.definition.heading.quarto",
				"heading.1.quarto",
				"markup.heading.atx.1.mdx",
				"markup.heading.atx.1.mdx punctuation.definition.heading.mdx",
				"markup.heading.setext.1.markdown",
				"markup.heading.heading-0.asciidoc",
			],
			settings: {
				foreground: colors.cherry,
			},
		},
		{
			scope: [
				"heading.2.markdown punctuation.definition.heading.markdown",
				"heading.2.markdown",
				"heading.2.quarto punctuation.definition.heading.quarto",
				"heading.2.quarto",
				"markup.heading.atx.2.mdx",
				"markup.heading.atx.2.mdx punctuation.definition.heading.mdx",
				"markup.heading.setext.2.markdown",
				"markup.heading.heading-1.asciidoc",
			],
			settings: {
				foreground: colors.peach,
			},
		},
		{
			scope: [
				"heading.3.markdown punctuation.definition.heading.markdown",
				"heading.3.markdown",
				"heading.3.quarto punctuation.definition.heading.quarto",
				"heading.3.quarto",
				"markup.heading.atx.3.mdx",
				"markup.heading.atx.3.mdx punctuation.definition.heading.mdx",
				"markup.heading.heading-2.asciidoc",
			],
			settings: {
				foreground: colors.raspberry2,
			},
		},
		{
			scope: [
				"heading.4.markdown punctuation.definition.heading.markdown",
				"heading.4.markdown",
				"heading.4.quarto punctuation.definition.heading.quarto",
				"heading.4.quarto",
				"markup.heading.atx.4.mdx",
				"markup.heading.atx.4.mdx punctuation.definition.heading.mdx",
				"markup.heading.heading-3.asciidoc",
			],
			settings: {
				foreground: colors.watermelon,
			},
		},
		{
			scope: [
				"heading.5.markdown punctuation.definition.heading.markdown",
				"heading.5.markdown",
				"heading.5.quarto punctuation.definition.heading.quarto",
				"heading.5.quarto",
				"markup.heading.atx.5.mdx",
				"markup.heading.atx.5.mdx punctuation.definition.heading.mdx",
				"markup.heading.heading-4.asciidoc",
			],
			settings: {
				foreground: colors.cornflower,
			},
		},
		{
			scope: [
				"heading.6.markdown punctuation.definition.heading.markdown",
				"heading.6.markdown",
				"heading.6.quarto punctuation.definition.heading.quarto",
				"heading.6.quarto",
				"markup.heading.atx.6.mdx",
				"markup.heading.atx.6.mdx punctuation.definition.heading.mdx",
				"markup.heading.heading-5.asciidoc",
			],
			settings: {
				foreground: colors.lavender,
			},
		},
		{
			scope: "markup.bold",
			settings: {
				foreground: colors.cherry,
				fontStyle: "bold",
			},
		},
		{
			scope: "markup.italic",
			settings: {
				foreground: colors.cherry,
				fontStyle: "italic",
			},
		},
		{
			scope: "markup.strikethrough",
			settings: {
				foreground: colors.subtext0,
				fontStyle: "strikethrough",
			},
		},
		{
			name: "Markdown auto links",
			scope: ["punctuation.definition.link", "markup.underline.link"],
			settings: {
				foreground: colors.blueberry,
			},
		},
		{
			name: "Markdown links",
			scope: [
				"text.html.markdown punctuation.definition.link.title",
				"text.html.quarto punctuation.definition.link.title",
				"string.other.link.title.markdown",
				"string.other.link.title.quarto",
				"markup.link",
				// references like
				// > [1]: http://example.com "Example"
				"punctuation.definition.constant.markdown",
				"punctuation.definition.constant.quarto",
				"constant.other.reference.link.markdown",
				"constant.other.reference.link.quarto",
				"markup.substitution.attribute-reference",
			],
			settings: {
				foreground: colors.lavender,
			},
		},
		{
			name: "Markdown code spans",
			scope: [
				"punctuation.definition.raw.markdown",
				"punctuation.definition.raw.quarto",
				"markup.inline.raw.string.markdown",
				"markup.inline.raw.string.quarto",
				"markup.raw.block.markdown",
				"markup.raw.block.quarto",
			],
			settings: {
				foreground: colors.watermelon,
			},
		},
		{
			name: "Markdown triple backtick language identifier",
			scope: "fenced_code.block.language",
			settings: {
				foreground: colors.sky,
			},
		},
		{
			name: "Markdown triple backticks",
			scope: [
				"markup.fenced_code.block punctuation.definition",
				"markup.raw support.asciidoc",
			],
			settings: {
				foreground: colors.overlay2,
			},
		},
		{
			name: "Markdown quotes",
			scope: ["markup.quote", "punctuation.definition.quote.begin"],
			settings: {
				foreground: colors.bubblegum,
			},
		},
		{
			name: "Markdown separators",
			scope: "meta.separator.markdown",
			settings: {
				foreground: colors.mint,
			},
		},
		{
			name: "Markdown list bullets",
			scope: [
				"punctuation.definition.list.begin.markdown",
				"punctuation.definition.list.begin.quarto",
				"markup.list.bullet",
			],
			settings: {
				foreground: colors.mint,
			},
		},
		{
			name: "Quarto headings",
			scope: "markup.heading.quarto",
			settings: {
				fontStyle: "bold",
			},
		},
	];
};

export default tokens;
