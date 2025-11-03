import {
    ExtensionContext,
    LogOutputChannel,
    Uri,
    commands,
    window,
    workspace,
} from "vscode";
import { compileTheme, defaultOptions } from "./theme";
import { ThemeOptions } from "@/types";

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

const writeThemeFile = async (uri: Uri, data: any): Promise<void> => {
    return workspace.fs
        .writeFile(uri, Buffer.from(JSON.stringify(data, undefined, 2)))
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
        const themeUri = Uri.file(
            "./themes/Gruvvy-Watermelon-color-theme.json"
        );
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
    LOG.info("Checking if catppuccin is installed for the first time.");
    const flagUri = Uri.file(context.asAbsolutePath("themes/.flag"));
    if (await fileExists(flagUri)) {
        LOG.info("Catppuccin has been installed before.");
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
    const config = workspace.getConfiguration("gruvvy-Watermelon");
    const options = {
        overrideTodoTree: config.get<boolean>("overrideTodoTree"),
        // bracketMode: config.get<"rainbow" | "nvim" | "off">("bracketMode"),
        // boldkeywords: config.get<boolean>("boldkeywords"),
        // italicComments: config.get<boolean>("italicComments"),
        // italicKeywords: config.get<boolean>("italicKeywords"),
    };
    return {
        ...defaultOptions,
        ...filterObject(options, ([, value]) => value !== undefined),
    };
};
