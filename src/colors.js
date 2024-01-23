const colors = {
    dark_hard: "#1c1718",
    dark_normal: "#262021",
    dark_soft: "#31292a",
    dark_0: "#31292a",
    dark_1: "#3f3436",
    light_hard: "#eae0e2",
    light_normal: "#e9d9dc",
    light_soft: "#e7ccd1",
    light_0: "#7a6473",
    // keywords like public
    color_0: "#74d7a5",
    // Class/TypeName
    color_1: "#b39df3",
    // FieldNames
    color_2: "#f6c3b1",
    // Namespaces + classname of file
    color_3: "#f39db4",
    // Property names
    color_2_dark: "#d06c73",
    // Functions 
    color_4: "#ffb8f7",
    // numbers + strings + enums + bools
    color_5: "#ff7baf",    // keyword.type + kwrd.operator + kwrd.control
    color_6: "#78a19c",    // base types like int, float, bool
}

const tokenColors = {

    // public, private, static...
    keyword_storage: colors.color_0,

    // punctuation
    punctuation: colors.color_0,

    // base types (bool, string, int, uint, float...) + flow control + operators
    keyword_flow: colors.color_6,
    keyword_base_types: colors.color_6,
    operator: colors.color_6,

    // type/class
    type: colors.color_1,

    // fieldNames
    field_name: colors.color_2,

    // namespaces + classname + className of file
    namespace: colors.color_3,
    class_name: colors.color_3,

    // property names
    property: colors.color_2_dark,

    // functions/methods
    method: colors.color_4,

    // number value + string value + enum value + bool
    value: colors.color_5,

    // error
    errorColor: colors.color_2_dark,
    // warn
    warnColor: colors.color_2,
    // info
    infoColor: colors.color_1,
    // hint
    hintColor: colors.color_0
}

module.exports = { colors, tokenColors }