export type TextmateColors = {
	name?: string;
	scope?: string | string[];
	settings?: Settings;
}[];

export type Settings = {
	foreground?: string;
	background?: string;
	fontStyle?: string;
};
