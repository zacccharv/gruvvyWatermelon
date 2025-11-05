import { ExtensionContext, window, workspace } from "vscode";
import * as utils from "./utils";

export const activate = async (context: ExtensionContext) => {
	const config = utils.getConfiguration();

	// regenerate theme on fresh install
	if ((await utils.isFreshInstall(context)) === true) {
		utils.updateTheme(config, utils.UpdateTrigger.FRESH_INSTALL);
	}

	context.subscriptions.push(
		workspace.onDidChangeConfiguration((evt) => {
			if (evt.affectsConfiguration("gruvvy-watermelon")) {
				utils.updateTheme(config, utils.UpdateTrigger.CONFIG_CHANGE);
				if (evt.affectsConfiguration("gruvvy-watermelon.integrateTodoTree")) {
					window.showInformationMessage(
						"Syncing configuration for gruvvy-watermelon.integrateTodoTree"
					);
					utils.syncConfiguration();
				}
				if (
					evt.affectsConfiguration("gruvvy-watermelon.integrateErrorLensGutter")
				) {
					window.showInformationMessage(
						"Syncing configuration for gruvvy-watermelon.integrateErrorLensGutter"
					);
					utils.syncConfiguration();
				}
			}
		})
	);
};
