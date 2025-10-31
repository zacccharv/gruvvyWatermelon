export default function generateTheme({ name, workBenchColors, grammarColors, errorlensColors }) {
    return {
        name: name,
        colors: {
            ...workBenchColors,
            ...errorlensColors,
        },
        tokenColors: grammarColors,
    };
}