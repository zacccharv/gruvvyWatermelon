const { colors } = require('./colors')

function getTheme({ theme, name }) {
    const themes = (options) => options[theme]

    return {
        name: name,
        colors: {
            focusBorder: colors.green,
        },
        tokencolors: [

        ]
    }
}

module.exports = getTheme