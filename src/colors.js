const colors = {
    dark_hard: "#171c1b",
    dark_normal: "#202626",
    dark_soft: "#293030",
    dark_0: "#35403e",
    dark_1: "#5f6867",
    light_hard: "#ecefee",
    light_normal: "#d8e8e6",
    light_soft: "#cce8e5",
    light_0: "#647a78",
    color_0: "#ffc7d6",
    color_1: "#FF647D",
    color_2: "#FFB6EB",
    color_3: "#DD5A8E",
    color_4: "#C3ADFF",
    color_5: "#9781D5",
    color_6: "#A2EDE0",
    color_7: "#67938E",
    color_8: "#81E5B3",
    color_9: "#4FB094",
    color_10: "#f1bcac",
    color_11: "#f18464"
}

const gruvvyWatermelonColors = {

    white: colors.light_hard,
    gray: colors.light_0,
    black: colors.dark_hard,

    bg_0: colors.dark_normal,
    bg_1: colors.dark_soft,
    bg_2: colors.dark_0,
    fg_0: colors.light_hard,
    fg_1: colors.light_normal,
    fg_2: colors.light_soft,

    bright_red_pink: colors.color_0,
    red_pink: colors.color_1,
    bright_purple_pink: colors.color_2,
    purple_pink: colors.color_3,
    bright_purple: colors.color_4,
    purple: colors.color_5,
    bright_blue: colors.color_6,
    blue: colors.color_7,
    bright_aqua: colors.color_8,
    aqua: colors.color_9,
    bright_peach: colors.color_10,
    peach: colors.color_11
}

const workBenchColors = {
    widget_bg: gruvvyWatermelonColors.bg_1,
    widget_fg: gruvvyWatermelonColors.fg_0,
    widget_hl: gruvvyWatermelonColors.gray,
    widget_menu_bg: gruvvyWatermelonColors.bg_2
}

const tokenColors = {
    plain: gruvvyWatermelonColors.white,

    // punctuation
    punctuation: gruvvyWatermelonColors.bright_aqua,

    // public, private, static...
    keyword_storage: gruvvyWatermelonColors.aqua,

    // base types (bool, string, int, uint, float...) + flow control + operators + using
    keyword_base_types: gruvvyWatermelonColors.aqua,
    keyword_flow: gruvvyWatermelonColors.aqua,
    operator: gruvvyWatermelonColors.aqua,

    // type/class
    type: gruvvyWatermelonColors.purple,
    type_declaration: gruvvyWatermelonColors.purple_pink,

    // fieldNames
    field_name_declaration: gruvvyWatermelonColors.bright_peach,
    field_name: gruvvyWatermelonColors.bright_red_pink,

    // namespaces + classname + className of file
    namespace: gruvvyWatermelonColors.red_pink,
    class_name: gruvvyWatermelonColors.red_pink,

    // property names
    property: gruvvyWatermelonColors.purple_pink,

    // functions/methods/events/getters + setters
    method: gruvvyWatermelonColors.purple_pink,
    event: gruvvyWatermelonColors.purple_pink,

    // number value + string value + enum value + bool
    base_value: gruvvyWatermelonColors.aqua,

    // error
    errorColor: gruvvyWatermelonColors.purple_pink,
    // warn
    warnColor: gruvvyWatermelonColors.peach,
    // info
    infoColor: colors.purple,
    // hint
    hintColor: gruvvyWatermelonColors.bright_aqua,

    menuHighlight: gruvvyWatermelonColors.bright_blue,
    buttonHighlight: gruvvyWatermelonColors.bright_aqua,
    secondaryButtonHighlight: gruvvyWatermelonColors.purple_pink
}

module.exports = { colors, tokenColors, workBenchColors, gruvvyWatermelonColors } 