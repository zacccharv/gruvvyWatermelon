import {
	ConfigurationChangeEvent,
	ExtensionContext,
	Uri,
	window,
	workspace,
} from "vscode";

import * as utils from "./utils";

export type ConfigTargets = {
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

export const activate = async (context: ExtensionContext) => {
	const base = context.extensionUri;
	const path = Uri.joinPath(
		base,
		"themes",
		"Gruvvy-Watermelon-color-theme.json",
	);

	const configTargets: ConfigTargets = {
		"gruvvy-watermelon.accentColor": {
			changed: false,
		},
		"gruvvy-watermelon.integrateTodoTree": {
			changed: false,
		},
		"gruvvy-watermelon.integrateErrorLensGutter": {
			changed: false,
		},
	};
	const config = utils.getConfiguration();
	// regenerate theme on fresh install/first activation
	if ((await utils.isFreshInstall(context)) && !utils.isDefaultConfig()) {
		utils.updateTheme(config, path, utils.UpdateTrigger.FRESH_INSTALL);
		utils.syncExtensionSettings(configTargets);
	}

	context.subscriptions.push(
		workspace.onDidChangeConfiguration((evt) => {
			if (evt.affectsConfiguration("gruvvy-watermelon")) {
				const newConfig = utils.getConfiguration();
				console.log(
					"Config changed, new accent color:",
					newConfig.accentColor,
				);

				utils.updateTheme(
					newConfig,
					path,
					utils.UpdateTrigger.CONFIG_CHANGE,
				);

				let syncResult = syncMe(configTargets, evt);

				// sync settings for updated config keys
				if (syncResult.changed) {
					utils.syncExtensionSettings(syncResult.entries);
				}
			}
		}),
	);
};

// utility function to check which config keys changed and return those for syncing
let syncMe = (
	syncTargets: ConfigTargets,
	event?: ConfigurationChangeEvent,
): { entries: ConfigTargets; changed: boolean } => {
	var result: { changed: boolean; kvp: ConfigTargets } = {
		changed: false,
		kvp: syncTargets,
	};

	for (const key in syncTargets) {
		if (event?.affectsConfiguration(key)) {
			result.kvp[key as keyof ConfigTargets].changed = true;
			result.changed = true;
		}
	}

	return { entries: result.kvp, changed: result.changed };
};
