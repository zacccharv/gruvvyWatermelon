import { ConfigurationChangeEvent, ExtensionContext, workspace } from "vscode";
import * as utils from "./utils";

type ConfigTargets = utils.configTargets;

export const activate = async (context: ExtensionContext) => {
	const config = utils.getConfiguration();

	const configTargets: ConfigTargets = {
		"gruvvy-watermelon.integrateTodoTree": {
			changed: false,
		},
		"gruvvy-watermelon.integrateErrorLensGutter": {
			changed: false,
		},
	};

	// regenerate theme on fresh install
	if ((await utils.isFreshInstall(context)) === true) {
		utils.updateTheme(config, utils.UpdateTrigger.FRESH_INSTALL);
		utils.syncExtensionSettings(configTargets);
	}

	context.subscriptions.push(
		workspace.onDidChangeConfiguration((evt) => {
			if (evt.affectsConfiguration("gruvvy-watermelon")) {
				utils.updateTheme(config, utils.UpdateTrigger.CONFIG_CHANGE);

				// sync settings for updated config keys
				let syncResult = syncMe(configTargets, evt);
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
