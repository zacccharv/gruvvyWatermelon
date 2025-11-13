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
	seagreen: "seagreen",
	blueberry: "blueberry",
	juniper: "juniper",
	mint: "mint",
	watermelon: "watermelon",
	peachpuff: "peachpuff",
	peach: "peach",
};

export const m_colors = {
	azalea: "#ffc7d6",
	cherry: "#ff647d",
	bubblegum: "#ffb8ec",
	raspberry: "#dd5a8e",
	lavender: "#C3ADFF",
	plum: "#9781D5",
	seagreen: "#a1ede0",
	blueberry: "#86d5df",
	juniper: "#67938E",
	mint: "#80e5b3",
	watermelon: "#4fb094",
	peachpuff: "#f1bcac",
	peach: "#f18464",
	text: "#ecefee",
	subtext1: "#d8e8e6",
	subtext0: "#cee9e6",
	overlay1: "#9dafad",
	overlay0: "#6a817f",
	surface1: "#627776",
	surface0: "#5e6867",
	subSurface: "#35403e",
	base: "#2a3232",
	mantle: "#202727",
	crust: "#171c1b",
} as const satisfies GruvvyPalette;

const m_ansiColors = {
	black: m_colors.base,
	red: m_colors.cherry,
	green: m_colors.mint,
	yellow: m_colors.peachpuff,
	blue: m_colors.watermelon,
	magenta: m_colors.bubblegum,
	cyan: m_colors.blueberry,
	white: m_colors.subtext0,
	brightBlack: m_colors.surface1,
	brightRed: "#ff5a76",
	brightGreen: "#8ff3d1",
	brightYellow: "#ffc9b9",
	brightBlue: "#47c5a1",
	brightMagenta: "#fe97e3",
	brightCyan: "#53e5dd",
	brightWhite: m_colors.subtext1,
} as const satisfies GruvvyAnsiPalette;

const tokens = {
	plain: m_colors.text,
	punctuation: m_colors.mint,
	operator: m_colors.mint,

	// access modifiers / type modifiers keywords:
	// | (public, private, protected, static, final, const, let, var, etc...)
	// | (async, await, etc...)
	// | (class, interface, enum, struct, module, package, etc...)
	// | string interpolation key symbols ( $"", @"", ``, etc...)
	// italic
	keyword_storage: m_colors.mint,

	// custom attribute / decorator:
	// | ( @Injectable, @export, [Serializable], [HideInInspector], etc...)
	// italic
	keyword_attribute: m_colors.plum,

	// flow control keywords | base types | operator:
	// | (if, else, switch, case, for, while, do, return, break, yield, continue...)
	// | (try, catch, finally, throw, etc...)
	// | (int, uint, float, bool, void, etc...)
	keyword_base_types: m_colors.watermelon,
	keyword_flow: m_colors.watermelon,

	// special keywords:
	// | (this, self, super, base. etc...)
	// italic
	keyword_special: m_colors.raspberry,

	// top level special header keywords:
	// | ( using, import, export)
	// bold
	keyword_header: m_colors.mint,

	// custom struct | custom class | custom interface | custom enum decleration:
	struct_declaration: m_colors.plum,

	// custom struct ref
	type_reference: m_colors.plum,

	// special declaration names:
	// get set properties... basically methods pretending to be fields
	type_declaration: m_colors.raspberry,

	// fieldName declarations
	// when a variable, constant, type, class, interface, enum, function/method is declared
	field_name_declaration: m_colors.peachpuff,
	property_reference: m_colors.text,
	object_reference: m_colors.azalea,
	field_name_reference: m_colors.azalea,

	// namespaces | classname | className of file reference and declaration
	namespace: m_colors.cherry,
	class_name: m_colors.cherry,

	// method names | event names | getters + setters | method/event references
	method: m_colors.raspberry,
	event: m_colors.raspberry,

	// bool value | null/undefined/nil value | string value
	base_value: m_colors.watermelon,

	// number value ( maybe different from base_value in some languages? )
	number_value: m_colors.blueberry,

	// entity name (xml, html, etc...)
	entity_name: m_colors.plum,

	// error
	errorColor: m_colors.cherry,
	// success
	successColor: m_colors.mint,
	// warn
	warnColor: m_colors.peachpuff,
	// info
	infoColor: m_colors.mint,
	// hint
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
	widget_hl: m_colors.subSurface,
	widget_menu_bg: m_colors.subSurface,
} as const satisfies WidgetThemeColors;

const palette = {
	tokenColors: tokens,
	workbenchColors: workbench,
	widgetColors: widgets,
	colors: m_colors,
	ansiColors: m_ansiColors,
} as const satisfies PaletteCollection;

export { palette };