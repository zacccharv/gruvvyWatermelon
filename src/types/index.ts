import { AccentName, Accents, AnsiColors, Colors, Flavor } from "./palettetypes";

export type * from "./textmate-colors";
export type * from "./workbench-colors";
export type * from "./errorlens";
export type * from "./todoTree";

export type GruvvyAnsiPalette = AnsiColors<string>;

export type GruvvyPalette = Colors<string>

export type GruvvyAccents = Accents<string>;

export type PaletteCollection = {
	colors: GruvvyPalette;
	ansiColors: GruvvyAnsiPalette
	tokenColors: TokenColors;
	workbenchColors: WorkbenchThemeColors;
	widgetColors: WidgetThemeColors;
};

export type WorkbenchThemeColors = {
	menu_bg_highlight: string;
	menu_fg_highlight: string;
	button_bg_highlight: string;
	button_fg_highlight: string;
	secondaryButtonHighlight: string;
};

export type WidgetThemeColors = {
	widget_bg: string;
	widget_fg: string;
	widget_hl: string;
	widget_menu_bg: string;
};

export type TokenColors = {

	/**
	 * @description plain text
	 * @type {string}
	 */
	plain: string;

	/**
	 * @description punctuation and delimiters: }
	 * @type {string}
	 * @example  , . ; ( ) { } [ ]
	 */
	punctuation: string;

	/**
	 * @description arithmetic / bitwise / logical / assignment operators
	 * @type {string}
	 * @example + - * / % = == === != !== < > <= >= && || ! ? ?? .? as in is where etc...
	 *
	 */
	operator: string;

	/**
	 * @description storage keywords:
	 * @type {string}
	 * @example  public, private, protected, static, final, const, var, let
	 */
	keyword_storage: string;

	/**
	 * @description custom attribute / decorator keywords:
	 * @type {string}
	 * @example [Serializable], #nullable, [Obsolete]
	 */
	keyword_attribute: string;

	/**
	 * @description base types
	 * @type {string}
	 * @example int, float, bool, void, string, number, etc...
	 */
	keyword_base_types: string;

	/**
	 * @description flow control keywords
	 * @type {string}
	 * @example if, else, switch, case, for, while, do, return, break, yield, continue, etc...
	 */
	keyword_flow: string;

	/**
	 * @description special keywords
	 * @type {string}
	 * @example this, self, super, base, etc...
	 */
	keyword_special: string;

	/**
	 * @description top level special header keywords
	 * @type {string}
	 * @example using, import, export, etc...
	 */
	keyword_header: string;

	/**
	 * @description custom type declaration names
	 * @type {string}
	 * @example  class *MyClass*, struct *MyStruct*, interface *MyInterface*, enum *MyEnum*
	 */
	struct_declaration: string;

	/**
	 * @description custom type references
	 * @type {string}
	 * @example  var myVar: *MyType* = xxx
	 */
	type_reference: string;

	// TODO: merge with function_name, the things listed below are all secret functions basically
	/**
	 * @description special declaration names
	 * @type {string}
	 * @example
	 * ```c#
	 * c# - delegate *MyDelegate*, *MyProperty* { get; set; }
	 * ```
	 */
	type_declaration: string;

	/**
	 * @description field name declarations
	 * @type {string}
	 * @example
	 * ```js
	 * js - const *myConstant*
	 * ```
	 * ```c#
	 * c# - private string = *myPrivateField*
	 * ```
	 */
	field_name_declaration: string;

	/**
	 * @description object field/property references
	 * @type {string}
	 * @example  other.*myField*, other.*myConstant*, other.*myVariable*
	 */
	property_reference: string;

	/**
	 * @description object references
	 * @type {string}
	 * @example  *myObject*.myField, *myObject*.myMethod()
	 */
	object_reference: string;

	field_name_reference: string;
	namespace: string;
	class_name: string;

	method: string;
	event: string;

	/**
		* @description bool values | null/undefined/nil values | string values
		* @example  true, false, null, undefined, "string", 'string', `string`
		* @type {string}
	*/
	base_value: string;

	/**
	 * @description number value, should have different color than base_value
	 * @example  123, 12.34, 0xFF, 0b1010
	 * @type {string}
	 * */
	number_value: string;

	/**
	 * @description entity names (xml, html, etc...)
	 * @type {string}
	 * @example ```html
	 * <*MyEntity*></*MyEntity*>;
	 * ```
	 * */
	entity_name: string;

	/**
	 * @description error color
	 * @type {string}
	 * */
	errorColor: string;

	/**
	 * @description success color
	 * @type {string}
	 * */
	successColor: string;

	/**
	 * @description warning color
	 * @type {string}
	 * */
	warnColor: string;

	/**
	 * @description information color
	 * @type {string}
	 * */
	infoColor: string;

	/**
	 * @description hint color
	 * @type {string}
	 * */
	hintColor: string;
};

export type GruvvyFlavor = Flavor;

export type ThemeOptions = {
	accentColor: AccentName;
	integrateTodoTree: boolean;
	integrateErrorLensGutter: boolean;
};

export type ThemeContext = {
	palette: PaletteCollection;
	options: ThemeOptions;
};

export type JsonSettings = {
	"gruvvy-watermelon.accentColor": {
		changed: boolean;
	};
	"gruvvy-watermelon.integrateTodoTree": {
		changed: boolean;
	};
	"gruvvy-watermelon.integrateErrorLensGutter": {
		changed: boolean;
	};
};
