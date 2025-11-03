import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { compileTheme, defaultOptions } from "@/theme";
import { repoRoot } from "./constants";

// options can also be passed as a JSON string as an environment variable
const optEnvironmentVariable = process.env.GRUVVY_THEME_OPTIONS;
const optEnvironment = optEnvironmentVariable
    ? JSON.parse(optEnvironmentVariable)
    : {};

const main = async () => {
    await mkdir(path.join(repoRoot, "themes"), { recursive: true });
    const options = { ...defaultOptions, ...optEnvironment };
    const theme = compileTheme(options);
    writeFile(
        path.join(repoRoot, `themes/Gruvvy-Watermelon-color-theme.json`),
        JSON.stringify(theme, undefined, 2)
    );
};

export default main;
if (typeof require !== "undefined" && require.main === module) {
    console.log("Compiling themes...");
    main();
}
