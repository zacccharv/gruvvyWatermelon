const colors = {
    dark_hard: "#171C1B",
    dark_normal: "#202626",
    dark_soft: "#293030",
    dark_0: "#35403E",
    dark_1: "#35403E",
    light_hard: "#eeeeee",
    light_normal: "#D8E8E6",
    light_soft: "#CCE8E5",
    light_0: "#647A78",
    color_0: "#FFC7D6",
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

const tokenColors = {
    // public, private, static...
    keyword_storage: colors.color_8,

    // punctuation
    punctuation: colors.color_8,

    // base types (bool, string, int, uint, float...) + flow control + operators
    keyword_flow: colors.color_7,
    keyword_base_types: colors.color_7,
    operator: colors.color_7,

    // type/class
    type: colors.color_5,

    // fieldNames
    field_name: colors.color_0,

    // namespaces + classname + className of file
    namespace: colors.color_1,
    class_name: colors.color_1,

    // property names
    property: colors.color_9,

    // functions/methods
    method: colors.color_3,

    // number value + string value + enum value + bool
    value: colors.color_9,
    string: colors.color_9,

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