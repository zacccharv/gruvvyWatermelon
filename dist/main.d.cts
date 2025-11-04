import { ExtensionContext } from 'vscode';

declare const activate: (context: ExtensionContext) => Promise<void>;

export { activate };
