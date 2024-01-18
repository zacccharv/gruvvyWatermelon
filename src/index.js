const fs = require('fs').promises
const getTheme = require('./theme')

const zeeboxTheme = getTheme({
    theme: 'dark',
    name: 'ZeeBox',
})

// write theme
fs.mkdir('./themes', { recursive: true })
    .then(() =>
        Promise.all([
            fs.writeFile('./themes/zeebox-color-theme.json', JSON.stringify(zeeboxTheme, null, 2)),
        ])
    )
    .catch(() => process.exit(1))