export type TextmateColors = {
    name?: string;
    scope?: string | string[];
    settings?: Settings;
}[];

export interface TextmateColors {
    textmateColors?: TextmateColors;
}

export interface Settings {
    foreground?: string;
    background?: string;
    fontStyle?: string;
}
