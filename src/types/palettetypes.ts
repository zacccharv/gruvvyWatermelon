export const AnsiNames = {
	RED: "red",
	GREEN: "green",
	YELLOW: "yellow",
	BLUE: "blue",
	MAGENTA: "magenta",
	CYAN: "cyan",
	WHITE: "white",
	BRIGHTBLACK: "brightBlack",
	BRIGHTRED: "brightRed",
	BRIGHTGREEN: "brightGreen",
	BRIGHTYELLOW: "brightYellow",
	BRIGHTBLUE: "brightBlue",
	BRIGHTMAGENTA: "brightMagenta",
	BRIGHTCYAN: "brightCyan",
	BRIGHTWHITE: "brightWhite",
} as const;

type Entries<T> = {
    [K in keyof T]: [K, T[K]];
}[keyof T][];

export type AccentName = "azalea" | "cherry" | "bubblegum" | "raspberry" | "lavender" | "plum" | "mint" | "watermelon" | "sky"| "cornflower" | "blueberry" | "peachpuff" | "peach";

export type MonochromaticName = "text" | "subtext1" | "subtext0" | "overlay2" |  "overlay1" | "overlay0" | "surface2" |  "surface1" | "surface0" | "base" | "mantle" | "crust";

export type ColorName = AccentName | MonochromaticName;

export type Colors<T> = Record<ColorName, T>;

export type Accents<T> = Record<AccentName, T>;

export type ColorFormat = {
	/**
	 * Name of the color.
	 */
	name: string;
	/**
	 * String-formatted hex value.
	 * @example "#babbf1"
	 */
	hex: string;
	/**
	 * Formatted rgb value.
	 * @example { r: 186, g: 187, b: 241}
	 */
	rgb: {
		/**
		 * Red, 0-255
		 */
		r: number;
		/**
		 * Green, 0-255
		 */
		g: number;
		/**
		 * Blue, 0-255
		 */
		b: number;
	};
	/**
	 * Formatted hsl value.
	 * @example { h: 238.9, s: 12.1, l: 83.5 }
	 */
	hsl: {
		/**
		 * Hue, 0-360
		 */
		h: number;
		/**
		 * Saturation, 0-100
		 */
		s: number;
		/**
		 * Lightness, 0-100
		 */
		l: number;
	};
	/**
	 * Indicates whether the color is intended to be used as an accent color.
	 */
	accent: boolean;
};

export type GruvvyColors = Record<ColorName, ColorFormat>;

export type AnsiColorName = "black" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white" | "brightBlack" | "brightRed" | "brightGreen" | "brightYellow" | "brightBlue" | "brightMagenta" | "brightCyan" | "brightWhite";

export type AnsiColors<T> = Record<AnsiColorName, T>;

export type AnsiColorFormat = {
	/**
     * Name of the ANSI group.
     */
    name: string;
    /**
     * String-formatted hex value.
     * @example "#babbf1"
     */
    hex: string;
    /**
     * Formatted rgb value.
     * @example { r: 186, g: 187, b: 241}
     */
    rgb: {
        /**
         * Red, 0-255
         */
        r: number;
        /**
         * Green, 0-255
         */
        g: number;
        /**
         * Blue, 0-255
         */
        b: number;
    };
    /**
     * Formatted hsl value.
     * @example { h: 238.9, s: 12.1, l: 83.5 }
     */
    hsl: {
        /**
         * Hue, 0-360
         */
        h: number;
        /**
         * Saturation, 0-100
         */
        s: number;
        /**
         * Lightness, 0-100
         */
        l: number;
    };
    /**
     * The ANSI color code.
     * @example 4
     */
    code: number;
};

export type GruvvyAnsiColors = Record<AnsiColorName, AnsiColorFormat>;

export type Flavor = {
	name: string;
	colors: GruvvyColors;
	ansiColors: GruvvyAnsiColors;
	colorEntries: Entries<GruvvyColors>;
}