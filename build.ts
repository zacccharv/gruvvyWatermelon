import { createVSIX } from "@vscode/vsce";
import { build } from "tsup";
import { getFlag } from "type-flag";

import { updatePackageJson, readPackageJsonVersion } from "@/hooks/packageJson";
// import generateTheme from "@/hooks/generateTheme";

const main = async () => {
	const development = getFlag("--dev", Boolean);
	const shouldRegenerate = !getFlag("--no-regenerate", Boolean);
	// await generateTheme(); // Run this separately

	const packageJsonVersion = await readPackageJsonVersion();

	if (shouldRegenerate) {
		console.debug(
			`Regenerating package.json with version "${packageJsonVersion}"`
		);
		await updatePackageJson();
	}

	await build({
		clean: true,
		entry: ["src/main.ts"],
		external: ["vscode", "keytar"],
		minify: !development,
		sourcemap: development,
		target: "node16",
		format: ["cjs"],
	});

	const packagePath = `gruvvygruvvy-watermelon-${packageJsonVersion}.vsix`;

	await createVSIX({ dependencies: false, packagePath });
};

main().catch(console.error);
