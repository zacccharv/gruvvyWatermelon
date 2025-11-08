
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

export const AccentNames = {
	ROSEWATER: "rosewater",
	CHERRY: "cherry",
	PINK: "pink",
	RASPBERRY: "raspberry",
	LAVENDER: "lavender",
	MAUVE: "mauve",
	SEAFOAM: "seafoam",
	TEAL: "teal",
	MINT: "mint",
	WATERMELON: "watermelon",
	CHAMPAGNE: "champagne",
	PEACH: "peach",
} as const;

export type AccentName = "rosewater" | "cherry" | "pink" | "raspberry" | "lavender" | "mauve" | "seafoam" | "teal" | "mint" | "watermelon" | "champagne" | "peach";

export type MonochromaticName = "text" | "subtext1" | "subtext0" |  "overlay1" | "overlay0" |  "surface1" | "surface0" | "base" | "mantle" | "crust";

export type ColorName = AccentName | MonochromaticName;

export type Colors<T> = Record<ColorName, T>;

export type GruvvyColors = Readonly<Colors<ColorFormat>>;
