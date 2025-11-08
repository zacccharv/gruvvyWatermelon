import { createVSIX } from "@vscode/vsce";
import { build } from "tsup";
import { getFlag } from "type-flag";

import { generatePackage, readPackageJsonVersion } from "@/hooks/packageJson";
import { compileTheme, defaultOptions } from "@/theme";

const development = getFlag("--dev", Boolean);
const shouldRegenerate = !getFlag("--no-regenerate", Boolean);

// Update package.json if not --no-regenerate flag next
const packageJsonVersion = await readPackageJsonVersion();

if (shouldRegenerate) {
	console.debug(
		`Regenerating package.json with version "${packageJsonVersion}"`,
	);
	await generatePackage();
	compileTheme(defaultOptions);
}

// build extension last
// main.ts creates the theme at runtime
await build({
	format: ["esm", "cjs"],
	target: "esnext",
	outDir: "dist",
	clean: true,
	entry: ["src/main.ts", "src/hooks/generateTheme.ts"],
	external: ["vscode", "keytar"],
	minify: !development,
	sourcemap: development,
	dts: development,
	tsconfig: "tsconfig.json",
});

const packagePath = `gruvvygruvvy-watermelon-${packageJsonVersion}.vsix`;

await createVSIX({ dependencies: false, packagePath });