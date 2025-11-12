import { AccentName, AnsiColors, Flavor } from "./palettetypes";

export type * from "./textmate-colors";
export type * from "./workbench-colors";
export type * from "./errorlens";
export type * from "./todoTree";

export type GruvvyAnsiPalette = AnsiColors<string>;

type Brand<K, T> = K & { __brand: T };

export type GruvvyPalette = {
	/**
	 * @param {string} <span style="color:#111111;background-color:#ffc7d6;">-rosewater-</span>
	*/
	rosewater: `#${string}`;
	/**
	 * @param {string} <span style="color:#111111;background-color:#ff647d;">-cherry-</span>
	 */
	cherry: string;
	/**
	 * @param {string} <span style="color:#111111;background-color:#FFB6EB;">-pink-</span>
	 */
	pink: string;
	/**
	 * @param {string} <span style="color:#111111;background-color:#DD5A8E;">-raspberry-</span>
	 */
	raspberry: string;
	/**
	 * @param {string} <span style="color:#111111;background-color:#C3ADFF;">-lavender-</span>
	 */
	lavender: string;
	/**
	 * @param {string} <span style="color:#111111;background-color:#9781D5;">-mauve-</span>
	 */
	mauve: string;
	/**
	 * @param {string} <span style="color:#111111;background-color:#a1ede0;">-seafoam-</span>
	 */
	seafoam: string;
	/**
	 * @param {string} <span style="color:#111111;background-color:#86d5df;">-teal-</span>
	 */
	teal: string;
	/**
	 * @param {string} <span style="color:#111111;background-color:#67938E;">-darkteal-</span>
	 */
	darkteal: string;
	/**
	 * @param {string} <span style="color:#111111;background-color:#80e5b3;">-mint-</span>
	 */
	mint: string;
	/**
	 * @param {string} <span style="color:#111111;background-color:#4fb094;">-watermelon-</span>
	 */
	watermelon: string;
	/**
	 * @param {string} <span style="color:#111111;background-color:#f1bcac;">-champagne-</span>
	 */
	champagne: string;
	/**
	 * @param {string} <span style="color:#111111;background-color:#f18464;">-peach-</span>
	 */
	peach: string;
	/**
	 *  @param {string} <span style="color:#111111;background-color:#ecefee;">-text-</span>
	 */
	text: string;
	/**
	 * @param {string} subtext1 - {@link themeGen.colors.subtext1}
	 */
	subtext1: string;
	/**
	 * @param {string} subtext0 - {@link themeGen.colors.subtext0}
	 */
	subtext0: string;
	/**
	 * @param {string} overlay1 - {@link themeGen.colors.overlay1}
	*/
	overlay1: string;
	/**
	 * @param {string} overlay0 - {@link themeGen.colors.overlay0}
	 */
	overlay0: string;
	/**
	 * @param {string} surface1 - {@link themeGen.colors.surface1}
	  */
	surface1: string;
	/**
	 * @param {string} surface0 - {@link themeGen.colors.surface0}
	*/
	surface0: string;
	/**
	 * @param {string} subSurface - {@link themeGen.colors.subSurface}
	*/
	subSurface: string;
	/**
	 * @param {string} base - {@link themeGen.colors.base}
	*/
	base: string;
	/**
	 * @param {string} mantle - {@link themeGen.colors.mantle}
	*/
	mantle: string;
	/**
	 * @param {string} crust - {@link themeGen.colors.crust}
	*/
	crust: string;
}

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
	 * @description storage keywords:
	 * @type {string}
	 * @example  public, private, protected, static, final, const, var, let
	 */
	keyword_storage: string;

	keyword_attribute: string;
	keyword_base_types: string;
	keyword_flow: string;
	keyword_special: string;
	keyword_header: string;
	struct_declaration: string;
	operator: string;
	type: string;
	type_declaration: string;
	field_name_declaration: string;
	field_reference: string;
	field_name: string;
	property_reference: string;
	namespace: string;
	class_name: string;
	property: string;
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

export type Accent = AccentName;

export type ThemeOptions = {
	accentColor: Accent;
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
