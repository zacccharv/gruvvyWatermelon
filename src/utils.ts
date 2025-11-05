import {
	ConfigurationTarget,
	ExtensionContext,
	LogOutputChannel,
	Uri,
	ColorThemeKind,
	commands,
	window,
	workspace,
} from "vscode";
import { compileTheme, defaultOptions } from "./theme";
import type { ErrorLensConfig, ThemeOptions, TodoTreeConfig } from "./types";
import { todoConfiguration } from "./extensions/todoTree";
import { palette } from "./palettes";
import { errorLensConfiguration } from "./extensions/errorLens";
/* eslint-disable no-restricted-imports */
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { repoRoot } from "./hooks/constants";

// the reason why an update has been triggered, and a reload is needed
export enum UpdateTrigger {
	CONFIG_CHANGE = "Configuration changed",
	FRESH_INSTALL = "Update detected",
}

type Entry<T> = { [K in keyof T]: [K, T[K]] }[keyof T];

const filterObject = <T extends object>(
	object: T,
	function_: (entry: Entry<T>, index: number, array: Entry<T>[]) => boolean
) => {
	return Object.fromEntries(
		(Object.entries(object) as Entry<T>[]).filter((element, index, array) =>
			function_(element, index, array)
		)
	) as Partial<T>;
};

export const LOG: LogOutputChannel = window.createOutputChannel(
	"Gruvvy Watermelon Theme",
	{ log: true }
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const writeThemeFile = async (uri: Uri, data: any): Promise<void> => {
	return workspace.fs
		.writeFile(uri, Buffer.alloc(5, JSON.stringify(data, undefined, 2)))
		.then(
			() => {},
			(error) => {
				window.showErrorMessage(error.message);
			}
		);
};

export const updateTheme = async (
	options: ThemeOptions,
	trigger: UpdateTrigger
) => {
	const promise = async (): Promise<void> => {
		const theme = compileTheme(options);
		const themeUri = Uri.file("./themes/Gruvvy-Watermelon-color-theme.json");
		return writeThemeFile(themeUri, theme);
	};

	Promise.resolve(promise)
		.then(() => {
			promptToReload(trigger);
		})
		.catch((error) => {
			window.showErrorMessage(
				"Failed to save re-compiled theme: \n" + error.message
			);
		});
};

function promptToReload(trigger: UpdateTrigger) {
	const message = `Gruvvy Watermelon: ${trigger} - Reload required.`;
	const action = "Reload window";
	window.showInformationMessage(message, action).then((selectedAction) => {
		if (selectedAction === action) {
			commands.executeCommand("workbench.action.reloadWindow");
		}
	});
}

export const isFreshInstall = async (
	context: ExtensionContext
): Promise<boolean | "error"> => {
	LOG.info("Checking if gruvvy watermelon is installed for the first time.");
	const flagUri = Uri.file(context.asAbsolutePath("themes/.flag"));
	if (await fileExists(flagUri)) {
		LOG.info("Gruvvy Watermelon has been installed before.");
		return false;
	} else {
		LOG.info("Catppuccin is installed for the first time!");
		return workspace.fs.writeFile(flagUri, Buffer.from("")).then(
			() => true,
			() => "error"
		);
	}
};

const fileExists = async (uri: Uri): Promise<boolean> => {
	return workspace.fs.stat(uri).then(
		() => true,
		() => false
	);
};

export const getConfiguration = (): ThemeOptions => {
	const config = workspace.getConfiguration("gruvvy-watermelon");
	const options = {
		integrateTodoTree: config.get<boolean>("overrideTodoTree"),
		integrateErrorLensGutter: config.get<boolean>("integrateErrorLensGutter"),
	};
	return {
		...defaultOptions,
		...filterObject(options, ([, value]) => value !== undefined),
	};
};

// const getActiveTheme = (): string => {
// 	// if `window.autoDetectColorScheme` is enabled, we have to check the active color theme "kind"
// 	// and then use that to look up one of the `workbench.preferred*ColorTheme` settings.
// 	// if not, we can use the theme specified by `workbench.colorTheme`.
// 	//
// 	// this really feels like a function that should be in the API, but I couldn't find it.

// 	return .get<string>("colorTheme") ?? "";
// };

export function syncExtensionSettings() {
	const config = workspace.getConfiguration("gruvvy-watermelon");
	const integrateTodoTree = config.get<boolean>("integrateTodoTree");
	const integrateErrorLensGutter = config.get<boolean>(
		"integrateErrorLensGutter"
	);

	// Update Todo Tree settings
	const todoConfig = todoConfiguration(palette, integrateTodoTree);
	for (const [key, value] of Object.entries(todoConfig)) {
		workspace.getConfiguration("todo-tree").update(
			key.replace(/^todo-tree\./, ""), // remove "todo-tree." prefix for update
			integrateTodoTree ? value : undefined,
			ConfigurationTarget.Workspace
		);
	}

	// Update ErrorLens settings
	const errorLensConfig = errorLensConfiguration(
		palette,
		integrateErrorLensGutter
	);
	for (const [key, value] of Object.entries(errorLensConfig)) {
		workspace.getConfiguration("errorLens").update(
			key.replace(/^errorLens\./, ""), // remove "errorLens." prefix for update
			integrateErrorLensGutter ? value : undefined,
			ConfigurationTarget.Workspace
		);
	}
}
