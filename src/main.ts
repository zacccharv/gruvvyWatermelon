import { ExtensionContext, workspace } from "vscode";
import * as utils from "./utils";

export const activate = async (context: ExtensionContext) => {
	const config = utils.getConfiguration();

	// regenerate theme on fresh install
	if ((await utils.isFreshInstall(context)) === true) {
		utils.updateTheme(config, utils.UpdateTrigger.FRESH_INSTALL);
	}

	context.subscriptions.push(
		workspace.onDidChangeConfiguration((evt) => {
			if (evt.affectsConfiguration("gruvvy-Watermelon")) {
				utils.updateTheme(config, utils.UpdateTrigger.CONFIG_CHANGE);
			}
			if (
				evt.affectsConfiguration("todo-tree") ||
				evt.affectsConfiguration("errorLens")
			) {
				console.log("Syncing configuration defaults for extensions.");
				utils.syncConfiguration();
			}
		})
	);
};
