import {
	GruvvyPalette,
	GruvvyAnsiPalette,
	PaletteCollection,
	TokenColors,
	WidgetThemeColors,
	WorkbenchThemeColors,
	GruvvyAccents,
} from "@/types";

export const accentNames: GruvvyAccents = {
	azalea: "azalea",
	cherry: "cherry",
	bubblegum: "bubblegum",
	raspberry: "raspberry",
	lavender: "lavender",
	plum: "plum",
	blueberry: "blueberry",
	mint: "mint",
	watermelon: "watermelon",
	peachpuff: "peachpuff",
	peach: "peach",
	cornflower: "cornflower",
	sky: "sky",
};

export const m_colors = {
	peachpuff: "#f1bcac",
	peach: "#eea48d",
	azalea: "#ffc7d6",
	cherry: "#ff647d",
	bubblegum: "#ffb8ec",
	raspberry: "#dd5a8e",
	mint: "#80e5b3",
	watermelon: "#4fb094",
	sky: "#a1ede0",
	cornflower: "#71ccbf",
	blueberry: "#479e9e",
	lavender: "#c3adff",
	plum: "#9781d5",
	text: "#e9f2f1",
	subtext1: "#b6d2ca",
	subtext0: "#a2c4ba",
	overlay2: "#8eb5aa",
	overlay1: "#7ba59a",
	overlay0: "#689589",
	surface2: "#5c7f76",
	surface1: "#4f6a63",
	surface0: "#415550",
	base: "#273030",
	mantle: "#202727",
	crust: "#171c1b",
} as const satisfies GruvvyPalette;

const m_ansiColors = {
	black: m_colors.base,
	red: m_colors.cherry,
	green: m_colors.watermelon,
	yellow: m_colors.peachpuff,
	blue: m_colors.sky,
	magenta: m_colors.bubblegum,
	cyan: m_colors.cornflower,
	white: m_colors.subtext0,
	brightBlack: m_colors.surface2,
	brightRed: "#ff5a76",
	brightGreen: "#47c5a1",
	brightYellow: "#ffbaa4",
	brightBlue: "#7ee0d6",
	brightMagenta: "#fe97e3",
	brightCyan: "#71ccbf",
	brightWhite: m_colors.subtext1,
} as const satisfies GruvvyAnsiPalette;

const tokens = {
	plain: m_colors.text,
	punctuation: m_colors.mint,
	operator: m_colors.mint,
	comment: m_colors.overlay0,
	keyword_storage: m_colors.mint,
	keyword_attribute: m_colors.plum,
	keyword_base_types: m_colors.watermelon,
	keyword_flow: m_colors.watermelon,
	keyword_special: m_colors.raspberry,
	keyword_header: m_colors.mint,
	struct_declaration: m_colors.plum,
	type_reference: m_colors.plum,
	type_declaration: m_colors.raspberry,
	field_name_declaration: m_colors.peachpuff,
	property_reference: m_colors.text,
	object_reference: m_colors.azalea,
	field_name_reference: m_colors.azalea,
	namespace: m_colors.cherry,
	class_name: m_colors.cherry,
	method: m_colors.raspberry,
	event: m_colors.raspberry,
	base_value: m_colors.watermelon,
	number_value: m_colors.blueberry,
	entity_name: m_colors.plum,
	errorColor: m_colors.cherry,
	successColor: m_colors.mint,
	warnColor: m_colors.peachpuff,
	infoColor: m_colors.mint,
	hintColor: m_colors.lavender,
} as const satisfies TokenColors;

const workbench = {
	menu_bg_highlight: m_colors.watermelon,
	menu_fg_highlight: m_colors.crust,
	button_bg_highlight: m_colors.watermelon,
	button_fg_highlight: m_colors.crust,
	secondaryButtonHighlight: m_colors.raspberry,
} as const satisfies WorkbenchThemeColors;

const widgets = {
	widget_bg: m_colors.base,
	widget_fg: m_colors.text,
	widget_hl: m_colors.surface0,
	widget_menu_bg: m_colors.surface0,
} as const satisfies WidgetThemeColors;

const palette = {
	tokenColors: tokens,
	workbenchColors: workbench,
	widgetColors: widgets,
	colors: m_colors,
	ansiColors: m_ansiColors,
} as const satisfies PaletteCollection;

export { palette };