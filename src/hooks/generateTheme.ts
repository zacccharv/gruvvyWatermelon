import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { compileTheme, defaultOptions } from "@/theme";
import { repoRoot } from "./constants";

const main = async () => {
	await mkdir(path.join(repoRoot, "themes"), { recursive: true });
	const options = { ...defaultOptions };
	const theme = compileTheme(options);
	writeFile(
		path.join(repoRoot, `themes/Gruvvy-Watermelon-color-theme.json`),
		JSON.stringify(theme, undefined, 2),
	);
};

export default main;

if (typeof require !== "undefined" && require.main === module) {
	console.log("Compiling themes...");
	main();
}