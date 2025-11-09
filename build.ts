import { createVSIX } from "@vscode/vsce";
import { build } from "tsup";
import { getFlag } from "type-flag";
import { generate } from "./src/theme-gen/genData";
import generateTheme from "./src/hooks/generateTheme";

import { generatePackage, readPackageJsonVersion } from "@/hooks/packageJson";

const main = async () => {
	const development = getFlag("--dev", Boolean);
	const shouldRegenerate = !getFlag("--no-regenerate", Boolean);

	// Update package.json if not --no-regenerate flag next
	const packageJsonVersion = await readPackageJsonVersion();

	if (shouldRegenerate) {
		console.debug(
			`Regenerating package.json with version "${packageJsonVersion}"`,
		);
		await generatePackage();
	}

	await generate().then(() => generateTheme());

	// build extension last
	// main.ts creates the theme at runtime
	await build({
		format: ["esm", "cjs"],
		target: "esnext",
		outDir: "dist",
		clean: true,
		entry: ["src/main.ts"],
		external: ["vscode", "keytar"],
		minify: !development,
		sourcemap: development,
		dts: development,
		tsconfig: "tsconfig.json",
	});

	const packagePath = `gruvvygruvvy-watermelon-${packageJsonVersion}.vsix`;

	await createVSIX({ dependencies: false, packagePath });
};

main().catch(console.error);
