import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { repoRoot } from "./constants";

const config = {
	configuration: {
		title: "gruvvy-watermelon",
		properties: {
			"gruvvy-watermelon.accentColor": {
				scope: "window",
				// TODO Turn this into an enum with available accent colors so it shows a dropdown in settings
				type: "string",
				default: "mauve",
				description:
					"Sets the accent color for the Gruvvy Watermelon theme. Choose from a variety of vibrant colors to customize your coding experience.",
			},
			"gruvvy-watermelon.integrateTodoTree": {
				scope: "window",
				type: "boolean",
				default: false,
				description:
					"Integrate Gruvvy Watermelon theme with the Todo Tree extension.",
			},
			"gruvvy-watermelon.integrateErrorLensGutter": {
				scope: "window",
				type: "boolean",
				default: false,
				description:
					"Integrate Gruvvy Watermelon theme with the Error Lens extension gutter icons. Adds basic shapes that use the theme colors for errors, warnings and info and puts them in the editor gutter next to each line with a notification.",
			},
		},
	},
};

const readPackageJsonVersion = async () => {
	return await readFile(path.join(repoRoot, "package.json"), "utf8").then((data) => {
		const json = JSON.parse(data);
		return json.version;
	});
};

const generatePackage = async () => {
	return await readFile(path.join(repoRoot, "package.json"), "utf8")
		.then((data) => JSON.parse(data))
		.then((data) => {
			return {
				...data,
				contributes: {
					...data.contributes,
					configuration: {
						...config.configuration,
					},
				},
			};
		})
		.then((data) => {
			writeFile(path.join(repoRoot, "package.json"), JSON.stringify(data, undefined, 2) + "\n", "utf8");
			return data;
		});
};

export { generatePackage, readPackageJsonVersion };
