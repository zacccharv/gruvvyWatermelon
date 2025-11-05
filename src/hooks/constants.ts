import path from "node:path";
import { fileURLToPath } from "node:url";

// check if cjs or esm and set root accordingly
const root = (): string => {
	try {
		// @ts-ignore: esbuild empty-import-meta warning
		return path.dirname(fileURLToPath(import.meta.url));
	} catch {
		return __dirname;
	}
};

export const repoRoot = path.join(root(), "../../");
