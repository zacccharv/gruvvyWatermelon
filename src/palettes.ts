import { Palette, TokenColors, WidgetThemeColors } from "@/types";
import { Colors, GruvvyColors } from "./types/palettetypes";

const colors: GruvvyColors = {
	rosewater: "#ffc7d6",
	cherry: "#FF647D",
	pink: "#FFB6EB",
	raspberry: "#DD5A8E",
	lavender: "#C3ADFF",
	mauve: "#9781D5",
	seafoam: "#A2EDE0",
	teal: "#67938E",
	mint: "#81E5B3",
	watermelon: "#4FB094",
	champagne: "#f1bcac",
	peach: "#f18464",
	text: "hsla(160, 9%, 93%, 1.00)",
	subtext1: "hsla(173, 26%, 88%, 1.00)",
	subtext0: "hsla(174, 38%, 86%, 1.00)",
	overlay1: "hsla(175, 10%, 65%, 1.00)",
	overlay0: "hsla(175, 10%, 46%, 1.00)",
	surface1: "hsla(173, 5%, 39%, 1.00)",
	surface0: "hsla(169, 9%, 23%, 1.00)",
	base: "hsla(180, 8%, 18%, 1.00)",
	mantle: "hsla(180, 9%, 14%, 1.00)",
	crust: "hsla(168, 10%, 10%, 1.00)",
};

const flavor: FlavorColors = {
	white: colors.text,
	gray: colors.overlay0,
	crust: colors.crust,

	mantle: colors.mantle,
	base: colors.base,
	surface0: colors.surface0,
	text: colors.text,
	subtext1: colors.subtext1,
	subtext0: colors.subtext0,

	rosewater: colors.rosewater,
	cherry: colors.cherry,
	pink: colors.pink,
	raspberry: colors.raspberry,
	lavender: colors.lavender,
	mauve: colors.mauve,
	teal: colors.teal,
	mint: colors.mint,
	watermelon: colors.watermelon,
	champagne: colors.champagne,
	peach: colors.peach,
};

const tokens: TokenColors = {
	plain: flavor.white,

	// punctuation
	punctuation: flavor.mint,

	// public, private, static...
	keyword_storage: flavor.mint,

	// base types (bool, string, int, uint, float...) + flow control + operators + using
	keyword_base_types: flavor.watermelon,
	keyword_flow: flavor.watermelon,
	operator: flavor.watermelon,

	// type/class
	type: flavor.mauve,
	type_declaration: flavor.raspberry,

	// fieldNames
	field_name_declaration: flavor.champagne,
	field_name: flavor.rosewater,

	// namespaces + classname + className of file
	namespace: flavor.cherry,
	class_name: flavor.cherry,

	// property names
	property: flavor.raspberry,

	// functions/methods/events/getters + setters
	method: flavor.raspberry,
	event: flavor.raspberry,

	// number value + string value + enum value + bool
	base_value: flavor.watermelon,

	// error
	errorColor: flavor.cherry,
	// warn
	warnColor: flavor.peach,
	// info
	infoColor: flavor.mint,
	// hint
	hintColor: flavor.lavender,

	menu_bg_highlight: flavor.watermelon,
	menu_fg_highlight: flavor.crust,
	button_bg_highlight: flavor.watermelon,
	button_fg_highlight: flavor.crust,
	secondaryButtonHighlight: flavor.raspberry,
};

const widgets: WidgetThemeColors = {
	widget_bg: flavor.base,
	widget_fg: flavor.text,
	widget_hl: flavor.gray,
	widget_menu_bg: flavor.surface0,
};

const palette: Palette = {
	colors: colors,
	flavor: flavor,
	tokenColors: tokens,
	widgetColors: widgets,
};

export { palette };
