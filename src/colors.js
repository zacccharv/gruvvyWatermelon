const colors = {
    dark_hard: "#171c1b",
    dark_normal: "#202626",
    dark_soft: "#293030",
    dark_0: "#2e3836",
    dark_1: "#607570",
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
    color_9: "#4FB094"
}

const workBenchColors = {
    editor_bg: "",
    widget_bg: "",
    menu_fg: "",
    select_hl: "",
    menu: "",
    button: "",
    buttonHover: ""
}

const tokenColors = {
    // punctuation
    punctuation: colors.color_8,

    // public, private, static...
    storage: colors.color_9,
    storage_modifier: colors.color_8,

    // base types (bool, string, int, uint, float...) + flow control + operators
    keyword_flow: colors.color_7,
    keyword: colors.color_7,
    operator: colors.color_7,

    // type/class
    type: colors.color_5,
    type_declaration: colors.color_1,

    // fieldNames
    field_name: colors.color_0,
    field_name_declaration: colors.color_0,

    // namespaces + classname + className of file
    namespace: colors.color_1,
    class_name: colors.color_1,

    // property names
    object_property: colors.light_hard,
    property: colors.color_9,

    // functions/methods
    method: colors.color_3,

    // number value + string value + enum value + bool
    string: colors.color_9,
    number: colors.color_9,
    bool: colors.color_9,
    enum: colors.color_9,

    // error
    errorColor: colors.color_1,
    // warn
    warnColor: colors.color_1,
    // info
    infoColor: colors.color_6,
    // hint
    hintColor: colors.color_8,

    menuHighlight: colors.color_6,
    buttonHighlight: colors.color_8,
    secondaryButtonHighlight: colors.color_2
}

module.exports = { colors, tokenColors } 