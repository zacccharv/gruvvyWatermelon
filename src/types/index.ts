import { AccentName, Colors } from "./palettetypes";

export type * from "./palettetypes";
export type * from "./textmate-colors";
export type * from "./workbench-colors";
export type * from "./errorlens";
export type * from "./todoTree";

export type GruvvyPalette = Colors<string>;

export type FlavorPalette = {
	colors: GruvvyPalette;
	tokenColors: TokenColors;
	widgetColors: WidgetThemeColors;
};

export type WidgetThemeColors = {
	widget_bg: string;
	widget_fg: string;
	widget_hl: string;
	widget_menu_bg: string;
};

export type TokenColors = {
	plain: string;
	punctuation: string;
	keyword_storage: string;
	keyword_base_types: string;
	keyword_flow: string;
	operator: string;
	type: string;
	type_declaration: string;
	field_name_declaration: string;
	field_name: string;
	namespace: string;
	class_name: string;
	property: string;
	method: string;
	event: string;
	base_value: string;
	errorColor: string;
	warnColor: string;
	infoColor: string;
	hintColor: string;
	menu_bg_highlight: string;
	menu_fg_highlight: string;
	button_bg_highlight: string;
	button_fg_highlight: string;
	secondaryButtonHighlight: string;
};

export type ThemeOptions = {
	integrateTodoTree: boolean;
	integrateErrorLensGutter: boolean;
	accentColor: AccentName;
};

export type ThemeContext = {
	accentColor: AccentName;
	palette: FlavorPalette;
	options: ThemeOptions;
};

export type JsonSettings = {
	"gruvvy-watermelon.integrateTodoTree": {
		changed: boolean;
	};
	"gruvvy-watermelon.integrateErrorLensGutter": {
		changed: boolean;
	};
};
