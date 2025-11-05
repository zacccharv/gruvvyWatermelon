export interface ErrorLensColors {
	/**
	 * Background color of the entire line containing error.
	 */
	errorBackground: string;

	/**
	 * Background color of the error message.
	 */
	errorMessageBackground: string;

	/**
	 * Background color of the error range (when problemRangeDecorationEnabled setting enabled).
	 */
	errorRangeBackground: string;

	/**
	 * Background color of the entire line containing error (Only in light themes).
	 */
	errorBackgroundLight: string;

	/**
	 * Text color used to highlight lines containing errors.
	 */
	errorForeground: string;

	/**
	 * Text color used to highlight lines containing errors (Only in light themes).
	 */
	errorForegroundLight: string;

	/**
	 * Background color used to highlight lines containing warnings.
	 */
	warningBackground: string;

	/**
	 * Background color of the warning message.
	 */
	warningMessageBackground: string;

	/**
	 * Background color of the warning range (when problemRangeDecorationEnabled setting enabled).
	 */
	warningRangeBackground: string;

	/**
	 * Background color used to highlight lines containing warnings (Only in light themes).
	 */
	warningBackgroundLight: string;

	/**
	 * Text color used to highlight lines containing warnings.
	 */
	warningForeground: string;

	/**
	 * Text color used to highlight lines containing warnings (Only in light themes).
	 */
	warningForegroundLight: string;

	/**
	 * Background color used to highlight lines containing info.
	 */
	infoBackground: string;

	/**
	 * Background color of the info message.
	 */
	infoMessageBackground: string;

	/**
	 * Background color of the info range (when problemRangeDecorationEnabled setting enabled).
	 */
	infoRangeBackground: string;

	/**
	 * Background color used to highlight lines containing info (Only in light themes).
	 */
	infoBackgroundLight: string;

	/**
	 * Text color used to highlight lines containing info.
	 */
	infoForeground: string;

	/**
	 * Text color used to highlight lines containing info (Only in light themes).
	 */
	infoForegroundLight: string;

	/**
	 * Background color used to highlight lines containing hints.
	 */
	hintBackground: string;

	/**
	 * Background color of the hint message.
	 */
	hintMessageBackground: string;

	/**
	 * Background color of the hint range (when problemRangeDecorationEnabled setting enabled).
	 */
	hintRangeBackground: string;

	/**
	 * Background color used to highlight lines containing hints (Only in light themes).
	 */
	hintBackgroundLight: string;

	/**
	 * Text color used to highlight lines containing hints.
	 */
	hintForeground: string;

	/**
	 * Text color used to highlight lines containing hints (Only in light themes).
	 */
	hintForegroundLight: string;

	/**
	 * Status bar icon item error color. Foreground is used when the `statusBarIconsUseBackground` setting is disabled.
	 */
	statusBarIconErrorForeground: string;

	/**
	 * Status bar icon item error color. Foreground is used when the `statusBarIconsUseBackground` setting is disabled.
	 */
	statusBarIconWarningForeground: string;

	/**
	 * Status bar item error color.
	 */
	statusBarErrorForeground: string;

	/**
	 * Status bar item warning color.
	 */
	statusBarWarningForeground: string;

	/**
	 * Status bar item info color.
	 */
	statusBarInfoForeground: string;

	/**
	 * Status bar item hint color.
	 */
	statusBarHintForeground: string;
}

export type ErrorLensConfig = {
	/**
	 * "Info color of simple gutter icons (shapes and letters). [demo](https://github.com/usernamehw/vscode-error-lens/blob/master/docs/docs.md#errorlenserrorguttericoncolor)"Gutter icon color for errors.
	 */
	errorGutterIconColor: string;
	/**
	 * Error color of simple gutter icons (shapes and letters). [demo](https://github.com/usernamehw/vscode-error-lens/blob/master/docs/docs.md#errorlenserrorguttericoncolor)
	 */
	warningGutterIconColor: string;
	/**
	 * Info color of simple gutter icons (shapes and letters). [demo](https://github.com/usernamehw/vscode-error-lens/blob/master/docs/docs.md#errorlenserrorguttericoncolor)
	 */
	infoGutterIconColor: string;
	/**
	 * Hint color of simple gutter icons (shapes and letters). [demo](https://github.com/usernamehw/vscode-error-lens/blob/master/docs/docs.md#errorlenserrorguttericoncolor)
	 */
	hintGutterIconColor: string;
};
