import { promises as fs } from 'fs'
import { generateTheme } from './theme.js'
import { bench } from './ui/workbench.js'
import { grammarColors } from './grammars/default.js'
import { errorColors } from './extensions/errorlens.js'

const gruvvyWatermelonTheme = generateTheme(
    'Gruvvy Watermelon',
    bench,
    grammarColors,
    errorColors
)

// write theme
fs.mkdir('./themes', { recursive: true })
    .then(() =>
        Promise.all([
            fs.writeFile('./themes/Gruvvy-Watermelon-color-theme.json', JSON.stringify(gruvvyWatermelonTheme, null, 2)),
        ])
    )
    .catch(() => process.exit(1))