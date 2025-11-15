import {
	ConfigurationTarget,
	ExtensionContext,
	LogOutputChannel,
	Uri,
	commands,
	window,
	workspace,
} from "vscode";
import { compileTheme, defaultOptions } from "./theme";
import type { ThemeOptions, JsonSettings, ThemeContext } from "@/types";
import { todoConfiguration } from "./extensions/todoTree";
import { palette } from "./palettes";
import { errorLensConfiguration } from "./extensions/errorLens";
import { AccentName } from "./types/palettetypes";
/* eslint-disable no-restricted-imports */

type Entry<T> = { [K in keyof T]: [K, T[K]] }[keyof T];

export enum UpdateTrigger {
	CONFIG_CHANGE = "Configuration changed",
	FRESH_INSTALL = "Update detected",
}

const filterObject = <T extends object>(
	object: T,
	function_: (entry: Entry<T>, index: number, array: Entry<T>[]) => boolean,
) => {
	return Object.fromEntries(
		(Object.entries(object) as Entry<T>[]).filter((element, index, array) =>
			function_(element, index, array),
		),
	) as Partial<T>;
};

export const LOG: LogOutputChannel = window.createOutputChannel(
	"Gruvvy Watermelon Theme",
	{ log: true },
);

const writeThemeFile = async (uri: Uri, data: any): Promise<void> => {
	return workspace.fs
		.writeFile(uri, Buffer.from(JSON.stringify(data, undefined, 2)))
		.then(
			() => {},
			(error) => {
				window.showErrorMessage(error.message);
			},
		);
};

export const updateTheme = async (
	options: ThemeOptions,
	path: Uri,
	trigger: UpdateTrigger,
) => {
	console.log("updateTheme called with options:", options);
	console.log("updateTheme path:", path.fsPath);

	try {
		const theme = compileTheme(options);
		await writeThemeFile(path, theme);
		console.log("Theme file written successfully");

		// Try to force VS Code to reload the theme by switching themes momentarily
		const config = workspace.getConfiguration("workbench");
		const currentTheme = config.get<string>("colorTheme");

		if (currentTheme === "Gruvvy Watermelon") {
			// Switch to default dark theme briefly, then back
			await config.update("colorTheme", "Default Dark+", true);
			// Small delay to ensure the change is processed
			setTimeout(async () => {
				await config.update("colorTheme", "Gruvvy Watermelon", true);
			}, 100);
		}

		promptToReload(trigger);
	} catch (error) {
		console.error("Error updating theme:", error);
		window.showErrorMessage(
			"Failed to save re-compiled theme: \n" + (error as Error).message,
		);
	}
};

function promptToReload(trigger: UpdateTrigger) {
	const message = `Gruvvy Watermelon: ${trigger} - Theme updated! Please reload to see changes.`;
	const action = "Reload Now";
	window.showInformationMessage(message, action).then((selectedAction) => {
		if (selectedAction === action) {
			commands.executeCommand("workbench.action.reloadWindow");
		}
	});
}

export const isDefaultConfig = (): boolean => {
	LOG.info("Checking if Gruvvy Watermelon is using default config.");
	const state =
		JSON.stringify(getConfiguration()) === JSON.stringify(defaultOptions);
	LOG.info(
		`Gruvvy Watermelon is using ${state ? "default" : "custom"} config.`,
	);

	return state;
};

export const isFreshInstall = async (
	ctx: ExtensionContext,
): Promise<boolean | "error"> => {
	LOG.info("Checking if gruvvy watermelon is installed for the first time.");
	const flagUri = Uri.file(ctx.asAbsolutePath("themes/.flag"));
	if (await fileExists(flagUri)) {
		LOG.info("Gruvvy Watermelon has been installed before.");
		return false;
	} else {
		LOG.info("Gruvvy Watermelon is installed for the first time!");
		return workspace.fs.writeFile(flagUri, Buffer.from("")).then(
			() => true,
			() => "error",
		);
	}
};

const fileExists = async (uri: Uri): Promise<boolean> => {
	return workspace.fs.stat(uri).then(
		() => true,
		() => false,
	);
};

export const getConfiguration = (): ThemeOptions => {
	const config = workspace.getConfiguration("gruvvy-watermelon");

	const options = {
		accentColor: config.get<AccentName>("accentColor"),
		integrateTodoTree: config.get<boolean>("integrateTodoTree"),
		integrateErrorLensGutter: config.get<boolean>(
			"integrateErrorLensGutter",
		),
	} satisfies Partial<ThemeOptions>;

	const result = {
		...defaultOptions,
		...filterObject(options, ([, value]) => value !== undefined),
	};

	console.log("getConfiguration result:", result);
	return result;
};

// const getActiveTheme = (): string => {
// 	// if `window.autoDetectColorScheme` is enabled, we have to check the active color theme "kind"
// 	// and then use that to look up one of the `workbench.preferred*ColorTheme` settings.
// 	// if not, we can use the theme specified by `workbench.colorTheme`.
// 	//
// 	// this really feels like a function that should be in the API, but I couldn't find it.

// 	return .get<string>("colorTheme") ?? "";
// };

export function syncExtensionSettings(configTargets: JsonSettings) {
	const config = workspace.getConfiguration("gruvvy-watermelon");
	const integrateTodoTree = config.get<boolean>("integrateTodoTree");
	const integrateErrorLensGutter = config.get<boolean>(
		"integrateErrorLensGutter",
	);

	const ctx: ThemeContext = {
		palette: palette,
		options: getConfiguration(),
	};

	// Update Todo Tree settings
	if (configTargets["gruvvy-watermelon.integrateTodoTree"].changed) {
		{
			const todoConfig = todoConfiguration(ctx);
			for (const [key, value] of Object.entries(todoConfig)) {
				workspace.getConfiguration("todo-tree").update(
					key, // remove "todo-tree." prefix for update
					integrateTodoTree ? value : undefined,
					ConfigurationTarget.Global,
				);
			}
		}
	}

	if (configTargets["gruvvy-watermelon.integrateErrorLensGutter"].changed) {
		// Update ErrorLens settings
		const errorLensConfig = errorLensConfiguration(ctx);
		for (const [key, value] of Object.entries(errorLensConfig)) {
			workspace.getConfiguration("errorLens").update(
				key, // remove "errorLens." prefix for update
				integrateErrorLensGutter ? value : undefined,
				ConfigurationTarget.Global,
			);
		}
	}
}
