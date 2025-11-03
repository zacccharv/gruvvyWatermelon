import * as vscode from "vscode";
import { generateAndLogTheme } from "./index";

// the reason why an update has been triggered, and a reload is needed
export enum UpdateTrigger {
    CONFIG_CHANGE = "Configuration changed",
    FRESH_INSTALL = "Update detected",
}

const writeThemeFile = async (uri: vscode.Uri, data: any): Promise<void> => {
    return vscode.workspace.fs
        .writeFile(uri, Buffer.from(JSON.stringify(data, undefined, 2)))
        .then(
            () => {},
            (error) => {
                vscode.window.showErrorMessage(error.message);
            }
        );
};

export const updateTheme = async (trigger: UpdateTrigger) => {
    const promise = async (): Promise<void> => {
        const theme = generateAndLogTheme();
        const themeUri = vscode.Uri.file(
            "./themes/Gruvvy-Watermelon-color-theme.json"
        );
        return writeThemeFile(themeUri, theme);
    };

    Promise.resolve(promise)
        .then(() => {
            promptToReload(trigger);
        })
        .catch((error) => {
            vscode.window.showErrorMessage(
                "Failed to save re-compiled theme: \n" + error.message
            );
        });
};

function promptToReload(trigger: UpdateTrigger) {
    const message = `Gruvvy Watermelon: ${trigger} - Reload required.`;
    const action = "Reload window";
    vscode.window
        .showInformationMessage(message, action)
        .then((selectedAction) => {
            if (selectedAction === action) {
                vscode.commands.executeCommand("workbench.action.reloadWindow");
            }
        });
}
