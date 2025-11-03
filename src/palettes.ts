import {
    Colors,
    FlavorColors,
    Palette,
    TokenColors,
    WidgetThemeColors,
} from "@/types";

const colors: Colors = {
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
    color_11: "#f18464",
};

const flavor: FlavorColors = {
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
    peach: colors.color_11,
};

const tokens: TokenColors = {
    plain: flavor.white,

    // punctuation
    punctuation: flavor.bright_aqua,

    // public, private, static...
    keyword_storage: flavor.bright_aqua,

    // base types (bool, string, int, uint, float...) + flow control + operators + using
    keyword_base_types: flavor.aqua,
    keyword_flow: flavor.aqua,
    operator: flavor.aqua,

    // type/class
    type: flavor.purple,
    type_declaration: flavor.purple_pink,

    // fieldNames
    field_name_declaration: flavor.bright_peach,
    field_name: flavor.bright_red_pink,

    // namespaces + classname + className of file
    namespace: flavor.red_pink,
    class_name: flavor.red_pink,

    // property names
    property: flavor.purple_pink,

    // functions/methods/events/getters + setters
    method: flavor.purple_pink,
    event: flavor.purple_pink,

    // number value + string value + enum value + bool
    base_value: flavor.aqua,

    // error
    errorColor: flavor.purple_pink,
    // warn
    warnColor: flavor.peach,
    // info
    infoColor: flavor.purple,
    // hint
    hintColor: flavor.bright_aqua,

    menuHighlight: flavor.bright_blue,
    buttonHighlight: flavor.bright_aqua,
    secondaryButtonHighlight: flavor.purple_pink,
};

const widgets: WidgetThemeColors = {
    widget_bg: flavor.bg_1,
    widget_fg: flavor.fg_0,
    widget_hl: flavor.gray,
    widget_menu_bg: flavor.bg_2,
};

const palette: Palette = {
    colors: colors,
    palette: flavor,
    tokenColors: tokens,
    widgetColors: widgets,
};

export { palette };
