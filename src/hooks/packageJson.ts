/* eslint-disable no-restricted-imports */
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { repoRoot } from "./constants";
import { todoConfiguration } from "@/extensions/todoTree";
import { errorLensConfiguration } from "@/extensions/errorLens";
import { palette } from "@/palettes";

const readPackageJsonVersion = async () => {
	return await readFile(path.join(repoRoot, "package.json"), "utf8").then(
		(data) => {
			const json = JSON.parse(data);
			return json.version;
		}
	);
};

const generatePackage = async () => {
	// return await readFile(path.join(repoRoot, "package.json"), "utf8")
	// 	.then((data) => JSON.parse(data))
	// 	.then((data) => {
	// 		return {
	// 			...data,
	// 			contributes: {
	// 				...data.contributes,
	// 				configurationDefaults: {
	// 					...todoConfiguration(palette, false), // Use default false for build time
	// 					...errorLensConfiguration(palette, false), // Use default false for build time
	// 				},
	// 			},
	// 		};
	// 	})
	// 	// .then((data) => {
	// 	// 	pruneConfigurationDefaults(data);
	// 	// })
	// 	.then((data) => {
	// 		writeFile(
	// 			path.join(repoRoot, "package.json"),
	// 			JSON.stringify(data, undefined, 2) + "\n",
	// 			"utf8"
	// 		);
	// 		return data;
	// 	});
};

export { generatePackage as updatePackageJson, readPackageJsonVersion };
