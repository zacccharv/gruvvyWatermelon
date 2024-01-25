const fs = require('fs').promises
const getTheme = require('./theme')

const gruvvyWatermelonTheme = getTheme({
    theme: 'dark',
    name: 'Gruvvy Watermelon',
})

// write theme
fs.mkdir('./themes', { recursive: true })
    .then(() =>
        Promise.all([
            fs.writeFile('./themes/Gruvvy-Watermelon-color-theme.json', JSON.stringify(gruvvyWatermelonTheme, null, 2)),
        ])
    )
    .catch(() => process.exit(1))