import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { repoRoot } from "./constants";
import { accentNames } from "@/palettes";

const config = {
	configuration: {
		title: "gruvvy-watermelon",
		properties: {
			"gruvvy-watermelon.accentColor": {
				scope: "window",
				// TODO FIX: make this enum work properly
				type: "string",
				default: "watermelon",
				description:
					"Sets the accent color for the Gruvvy Watermelon theme. Choose from a variety of vibrant colors to customize your coding experience.",
				enum: [...Object.keys(accentNames)],
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
