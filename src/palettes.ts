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
	raspberry2: "raspberry2",
	cornflower: "cornflower",
	sky: "sky",
};

export const m_colors = {
	// was rosewater
	azalea: "#ffc7d6",
	// was red
	cherry: "#ff647d",
	// was pink
	bubblegum: "#ffb8ec",
	// was maroon
	raspberry: "#dd5a8e",
	// was flamingo
	peachpuff: "#f1bcac",
	// was peach
	peach: "#eea48dff",
	// was yellow #f9e2af
	raspberry2: "#dd5a8e",
	// was teal
	mint: "#80e5b3",
	// was green
	watermelon: "#4fb094",
	// was sky
	sky: "#a1ede0",
	// was sapphire
	cornflower: "#86d5df",
	// was blue
	blueberry: "#74c7ec",
	// was mauve
	plum: "#9781d5",
	// was lavender
	lavender: "#C3ADFF",
	text: "#e9f2f1",
	subtext1: "#b6d2ca",
	subtext0: "#a2c4ba",
	overlay2: "#8eb5aa",
	overlay1: "#7ba59a",
	overlay0: "#689589",
	surface2: "#5c7f76",
	surface1: "#4f6a63",
	surface0: "#415550",
	base: "#273030ff",
	mantle: "#202727ff",
	crust: "#171c1bff",
} as const satisfies GruvvyPalette;

const m_ansiColors = {
	black: m_colors.base,
	red: m_colors.cherry,
	green: m_colors.watermelon,
	yellow: m_colors.peachpuff,
	blue: m_colors.cornflower,
	magenta: m_colors.bubblegum,
	cyan: m_colors.blueberry,
	white: m_colors.subtext0,
	brightBlack: m_colors.surface2,
	brightRed: "#ff5a76",
	brightGreen: "#47c5a1",
	brightYellow: "#ffbaa4",
	brightBlue: "#74cdd8",
	brightMagenta: "#fe97e3",
	brightCyan: "#5bc2f1",
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