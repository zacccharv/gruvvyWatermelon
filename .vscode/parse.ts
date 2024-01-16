const PURPLE = "#9B6DFF"

const baseColors = {
    errorForeground: PURPLE,
}

// create json 
const mytheme = {
    "name": "mytheme",
    "type": "dark",
    "colors": { ...baseColors }
}

function createJsonTheme() {
    // save to json
    const file = new File(mytheme, "../themes/mytheme.json", {
        type: "text/plain",
    });
}

createJsonTheme()