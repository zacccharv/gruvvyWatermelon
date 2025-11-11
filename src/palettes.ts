import {
	GruvvyPalette,
	GruvvyAnsiPalette,
	PaletteCollection,
	TokenColors,
	WidgetThemeColors,
} from "@/types";

const m_colors: GruvvyPalette = {
	rosewater: "#ffc7d6",
	cherry: "#ff647dff",
	pink: "#FFB6EB",
	raspberry: "#DD5A8E",
	lavender: "#C3ADFF",
	mauve: "#9781D5",
	seafoam: "#a1ede0ff",
	teal: "#86d5dfff",
	mint: "#80e5b3ff",
	watermelon: "#4fb094ff",
	champagne: "#f1bcac",
	peach: "#f18464",
	text: "#ecefeeff",
	subtext1: "#d8e8e6ff",
	subtext0: "#cee9e6ff",
	overlay1: "#9dafadff",
	overlay0: "#6a817fff",
	surface1: "#627776",
	surface0: "#5e6867ff",
	subSurface: "#35403eff",
	base: "#2a3232ff",
	mantle: "#202727ff",
	crust: "#171c1bff",
};

const m_ansiColors: GruvvyAnsiPalette = {
	black: m_colors.base,
	red: m_colors.cherry,
	green: m_colors.mint,
	yellow: m_colors.champagne,
	blue: m_colors.watermelon,
	magenta: m_colors.pink,
	cyan: m_colors.teal,
	white: m_colors.subtext0,
	brightBlack: m_colors.surface1,
	brightRed: "#ff5a76ff",
	brightGreen: "#8ff3d1ff",
	brightYellow: "#ffc9b9ff",
	brightBlue: "#47c5a1ff",
	brightMagenta: "#fe97e3ff",
	brightCyan: "#53e5ddff",
	brightWhite: m_colors.subtext1,
};

const tokens: TokenColors = {
	plain: m_colors.text,

	// punctuation
	punctuation: m_colors.mint,

	// public, private, static...
	keyword_storage: m_colors.mint,

	// base types (bool, string, int, uint, float...) + flow control + operators + using
	keyword_base_types: m_colors.watermelon,
	keyword_flow: m_colors.watermelon,
	operator: m_colors.watermelon,

	// type/class
	type: m_colors.mauve,
	type_declaration: m_colors.raspberry,

	// fieldNames
	field_name_declaration: m_colors.champagne,
	field_name: m_colors.rosewater,

	// namespaces + classname + className of file
	namespace: m_colors.cherry,
	class_name: m_colors.cherry,

	// property names
	property: m_colors.raspberry,

	// functions/methods/events/getters + setters
	method: m_colors.raspberry,
	event: m_colors.raspberry,

	// number value + string value + enum value + bool
	base_value: m_colors.watermelon,
	string_value: m_colors.watermelon,
	number_value: m_colors.watermelon,

	// entity name (xml, html, etc...)
	entity_name: m_colors.mauve,

	// error
	errorColor: m_colors.cherry,
	// warn
	warnColor: m_colors.champagne,
	// info
	infoColor: m_colors.mint,
	// hint
	hintColor: m_colors.lavender,

	menu_bg_highlight: m_colors.watermelon,
	menu_fg_highlight: m_colors.crust,
	button_bg_highlight: m_colors.watermelon,
	button_fg_highlight: m_colors.crust,
	secondaryButtonHighlight: m_colors.raspberry,
};

const widgets: WidgetThemeColors = {
	widget_bg: m_colors.base,
	widget_fg: m_colors.text,
	widget_hl: m_colors.subSurface,
	widget_menu_bg: m_colors.subSurface,
};

const palette: PaletteCollection = {
	tokenColors: tokens,
	widgetColors: widgets,
	colors: m_colors,
	ansiColors: m_ansiColors,
};

export { palette };
