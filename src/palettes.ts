import {
	GruvvyPalette,
	GruvvyAnsiPalette,
	PaletteCollection,
	TokenColors,
	WidgetThemeColors,
} from "@/types";

const m_colors: GruvvyPalette = {
	rosewater: "#ffc7d6",
	cherry: "#ff647d",
	pink: "#FFB6EB",
	raspberry: "#DD5A8E",
	lavender: "#C3ADFF",
	mauve: "#9781D5",
	seafoam: "#a1ede0",
	teal: "#86d5df",
	darkteal: "#67938E",
	mint: "#80e5b3",
	watermelon: "#4fb094",
	champagne: "#f1bcac",
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
	brightRed: "#ff5a76",
	brightGreen: "#8ff3d1",
	brightYellow: "#ffc9b9",
	brightBlue: "#47c5a1",
	brightMagenta: "#fe97e3",
	brightCyan: "#53e5dd",
	brightWhite: m_colors.subtext1,
};

const tokens: TokenColors = {
	// plain text
	plain: m_colors.text,

	// punctuation / delimiters:
	// | ( , ; : . ` ' " etc...)
	// | ( (), {}, [], < > ) unless brackets are colorized by workbench settings
	punctuation: m_colors.mint,

	// arithmetic + bit operators + assignment operators:
	// | (+, -, *, /, %, =, ==, ===, !=, !==, <, >, <=, >=, &&, ||, !, ?, ??, .?, etc...)
	// | (is, in, where, as, where, default, etc...)
	operator: m_colors.mint,

	// access modifiers / type modifiers keywords:
	// | (public, private, protected, static, final, const, let, var, etc...)
	// | (async, await, etc...)
	// | (class, interface, enum, struct, module, package, etc...)
	// | string interpolation key symbols ( $"", @"", ``, etc...)
	keyword_storage: m_colors.mint,
	// + italic

	// custom attribute / decorator:
	// | ( @Injectable, @export, [Serializable], [HideInInspector], etc...)
	// ==> keyword_attribute: m_colors.mauve + italic,

	// flow control keywords | base types | operator:
	// | (if, else, switch, case, for, while, do, return, break, yield, continue...)
	// | (try, catch, finally, throw, etc...)
	// | (int, uint, float, bool, void, etc...)
	keyword_base_types: m_colors.watermelon,
	keyword_flow: m_colors.watermelon,

	// special keywords:
	// | (this, self, super, base. etc...)
	// ==> keyword_special: m_colors.raspberry + italic,

	// top level special header keywords:
	// | ( using, import, export)
	// ==> keyword_header: m_colors.mint + bold,

	// custom struct | custom class | custom interface | custom enum decleration:
	// ==> struct_declaration: m_colors.mauve,

	// custom struct ref
	type: m_colors.mauve,

	// special declaration names:
	// get set properties... basically methods pretending to be fields
	type_declaration: m_colors.raspberry,

	// fieldName declarations
	// when a variable, constant, type, class, interface, enum, function/method is declared
	field_name_declaration: m_colors.champagne,

	// field reference
	// when a variable, constant, type, class, interface, enum is directly referenced not as a property
	// field_reference: m_colors.rosewater,
	field_name: m_colors.rosewater,

	// property reference
	// when accessing object properties or fields with dot notation
	// property_reference: m_colors.plain,

	// namespaces | classname | className of file reference and declaration
	namespace: m_colors.cherry,
	class_name: m_colors.cherry,

	// property names (when accessing object properties)
	property: m_colors.raspberry,

	// method names | event names | getters + setters | method/event references
	method: m_colors.raspberry,
	event: m_colors.raspberry,

	// bool value | null/undefined/nil value | string value
	base_value: m_colors.watermelon,
	string_value: m_colors.watermelon,

	// number value ( maybe different from base_value in some languages? )
	number_value: m_colors.watermelon,

	// entity name (xml, html, etc...)
	entity_name: m_colors.mauve,

	// error
	errorColor: m_colors.cherry,
	// success
	// successColor: m_colors.mint,
	// warn
	warnColor: m_colors.champagne,
	// info
	infoColor: m_colors.mint,
	// hint
	hintColor: m_colors.lavender,

	// TODO: create workbench colors type/const move to workbench colors
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
