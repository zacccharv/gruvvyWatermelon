import tokenColors from "./theme/tokens/full";
import _ from "lodash";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { configuration } from "./extensions/todoTree";
import { getFlag } from "type-flag";
import { palette } from "./colors";

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

export async function generateAndLogTheme() {
    const uiFiles = fs
        .readdirSync(path.resolve(__dirname, ".//theme//UIColors"))
        .filter((file) => file.endsWith(".ts"));

    const uiModules = await Promise.all(
        uiFiles.map(
            (file) =>
                import(
                    pathToFileURL(
                        path.resolve(__dirname, ".//theme//UIColors", file)
                    ).href
                )
        )
    );

    const uiObjects = _.merge({}, ...uiModules.map((module) => module.default));

    // Extract and merge all colors into a single flat object
    const mergedColors = {};

    // Function to recursively find all 'colors' objects and merge them
    function extractAndMergeColors(obj: any): void {
        if (typeof obj === "object" && obj !== null) {
            if (
                obj.hasOwnProperty("colors") &&
                typeof obj.colors === "object"
            ) {
                Object.assign(mergedColors, obj.colors);
            }

            // Recursively check nested objects
            for (const value of Object.values(obj)) {
                extractAndMergeColors(value);
            }
        }
    }

    extractAndMergeColors(uiObjects);

    // Create a single colors object for theme generation
    const flatColorsObject = { colors: mergedColors };

    const gruvvyWatermelonTheme = {
        name: "Gruvvy Watermelon",
        type: "dark",
        semanticHighlighting: false,
        semanticTokenColors: {},
        colors: Object.entries(flatColorsObject)[0][1],
        tokenColors: Object.values(tokenColors)[0].tokens,
    };

    // Log the result to console
    console.log("\nGenerated Theme:");
    console.log(JSON.stringify(gruvvyWatermelonTheme, null, 2));
}

const shouldRegenerate = getFlag("--no-regenerate", Boolean);
if (shouldRegenerate) {
    await configuration(palette);
}
