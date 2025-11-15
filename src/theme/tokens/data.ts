import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
	const { colors } = context.palette;

	return [
		{
			name: "JSON/YAML keys, other left-hand assignments",
			scope: [
				"keyword.other.definition.ini",
				"punctuation.support.type.property-name.json",
				"support.type.property-name.json",
				"punctuation.support.type.property-name.toml",
				"support.type.property-name.toml",
				"entity.name.tag.yaml",
				"punctuation.support.type.property-name.yaml",
				"support.type.property-name.yaml",
			],
			settings: {
				foreground: colors.raspberry,
				fontStyle: "",
			},
		},
		{
			name: "JSON/YAML constants",
			scope: ["constant.language.json", "constant.language.yaml"],
			settings: {
				foreground: colors.watermelon,
			},
		},
		{
			name: "YAML anchors",
			scope: [
				"entity.name.type.anchor.yaml",
				"variable.other.alias.yaml",
			],
			settings: {
				foreground: colors.raspberry,
				fontStyle: "",
			},
		},
		{
			name: "TOML tables / ini groups",
			scope: [
				"support.type.property-name.table",
				"entity.name.section.group-title.ini",
			],
			settings: {
				foreground: colors.raspberry,
			},
		},
		{
			name: "TOML dates",
			scope: "constant.other.time.datetime.offset.toml",
			settings: {
				foreground: colors.bubblegum,
			},
		},
		{
			name: "YAML anchor puctuation",
			scope: [
				"punctuation.definition.anchor.yaml",
				"punctuation.definition.alias.yaml",
			],
			settings: {
				foreground: colors.bubblegum,
			},
		},
		{
			name: "YAML triple dashes",
			scope: "entity.other.document.begin.yaml",
			settings: {
				foreground: colors.bubblegum,
			},
		},
	];
};

export default tokens;
