"use strict";
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = function(to, from, except, desc) {
    if (from && (typeof from === "undefined" ? "undefined" : _type_of(from)) === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
// src/theme.ts
function generateTheme(name, uiColors, grammarColors2) {
    return {
        name: name,
        colors: Object.values(uiColors)[0].colors,
        tokenColors: Object.values(grammarColors2)[0]
    };
}
// src/colors.ts
var colors = {
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
};
var gruvvyWatermelonColors = {
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
};
var workBenchColors = {
    widget_bg: gruvvyWatermelonColors.bg_1,
    widget_fg: gruvvyWatermelonColors.fg_0,
    widget_hl: gruvvyWatermelonColors.gray,
    widget_menu_bg: gruvvyWatermelonColors.bg_2
};
var tokenColors = {
    plain: gruvvyWatermelonColors.white,
    // punctuation
    punctuation: gruvvyWatermelonColors.bright_aqua,
    // public, private, static...
    keyword_storage: gruvvyWatermelonColors.bright_aqua,
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
    infoColor: gruvvyWatermelonColors.purple,
    // hint
    hintColor: gruvvyWatermelonColors.bright_aqua,
    menuHighlight: gruvvyWatermelonColors.bright_blue,
    buttonHighlight: gruvvyWatermelonColors.bright_aqua,
    secondaryButtonHighlight: gruvvyWatermelonColors.purple_pink
};
var colorObject = {
    tokenColors: tokenColors,
    colors: colors,
    gruvvyWatermelonColors: gruvvyWatermelonColors,
    workBenchColors: workBenchColors
};
var colors_default = {
    colorObject: colorObject
};
// src/grammars/default.ts
var colors2 = colors_default.colorObject.colors;
var tokenColors2 = colors_default.colorObject.tokenColors;
var grammarTokens = [
    {
        scope: [
            "comment",
            "comment keyword",
            "comment markup.underline.link",
            "comment string",
            "comment punctuation.definition",
            "comment punctuation",
            "comment text"
        ],
        settings: {
            foreground: colors2.light_0
        }
    },
    {
        scope: "comment storage.type",
        settings: {
            foreground: colors2.light_0
        }
    },
    {
        scope: "comment entity.name.type",
        settings: {
            foreground: colors2.light_0
        }
    },
    {
        scope: [
            "comment variable",
            "comment variable.other"
        ],
        settings: {
            foreground: colors2.light_0
        }
    },
    {
        scope: "comment keyword.codetag.notation",
        settings: {
            foreground: colors2.color_5
        }
    },
    {
        scope: "comment.git-status.header.remote",
        settings: {
            foreground: tokenColors2.buttonHighlight
        }
    },
    {
        scope: "comment.git-status.header.local",
        settings: {
            foreground: tokenColors2.menuHighlight
        }
    },
    {
        scope: "comment.other.git-status.head",
        settings: {
            foreground: colors2.light_hard
        }
    },
    {
        scope: "constant",
        settings: {
            foreground: colors2.color_5
        }
    },
    {
        scope: "constant.other",
        settings: {
            foreground: colors2.light_hard
        }
    },
    {
        scope: "constant.other.php",
        settings: {
            foreground: colors2.color_5
        }
    },
    {
        scope: "constant.other.property",
        settings: {
            foreground: colors2.color_5
        }
    },
    {
        scope: "constant.other.citation.latex",
        settings: {
            foreground: colors2.color_5
        }
    },
    {
        scope: "constant.other.color",
        settings: {
            foreground: colors2.color_5
        }
    },
    {
        scope: "constant.other.character-class.escape",
        settings: {
            foreground: colors2.color_5
        }
    },
    {
        scope: "constant.other.key",
        settings: {
            foreground: colors2.color_5
        }
    },
    {
        scope: "constant.other.symbol",
        settings: {
            foreground: colors2.color_3
        }
    },
    {
        scope: "constant.numeric",
        settings: {
            foreground: colors2.color_5
        }
    },
    {
        scope: "constant.language",
        settings: {
            foreground: tokenColors2.base_value
        }
    },
    {
        scope: "constant.character.escape",
        settings: {
            foreground: colors2.color_5
        }
    },
    {
        scope: "constant.numeric.line-number.find-in-files",
        settings: {
            foreground: colors2.light_0
        }
    },
    {
        scope: "constant.numeric.line-number.match.find-in-files",
        settings: {
            foreground: colors2.color_4
        }
    },
    {
        scope: "entity.name.function.member.static",
        settings: {
            foreground: colors2.light_hard
        }
    },
    {
        scope: [
            "entity.name.type.class.templated",
            "entity.name.type.class.generic",
            "entity.name.type.namespace",
            "entity.name.namespace",
            "string.quoted.other.lt-gt.include.cpp"
        ],
        settings: {
            foreground: tokenColors2.namespace
        }
    },
    {
        scope: "entity.name.label",
        settings: {
            foreground: colors2.color_5
        }
    },
    {
        scope: "entity.name.function.preprocessor",
        settings: {
            foreground: tokenColors2.menuHighlight
        }
    },
    {
        scope: "entity.name.constant",
        settings: {
            foreground: colors2.color_5
        }
    },
    {
        scope: "entity.other.inherited-class",
        settings: {
            foreground: tokenColors2.menuHighlight,
            fontStyle: "italic"
        }
    },
    {
        scope: [
            "entity.name.tag",
            "entity.name.tag.js.jsx support.class.component.js.jsx",
            "entity.name.tag support.class.component"
        ],
        settings: {
            foreground: tokenColors2.buttonHighlight
        }
    },
    {
        scope: "entity.name.function.operator",
        settings: {
            foreground: tokenColors2.buttonHighlight
        }
    },
    {
        scope: [
            "entity.name.type",
            "entity.name.type.class.reference",
            "entity.name.type.class.value",
            "entity.name.type.delegate",
            "entity.name.function.decorator.gdscript"
        ],
        settings: {
            foreground: tokenColors2.type
        }
    },
    {
        scope: "entity.other.attribute-name",
        settings: {
            foreground: tokenColors2.menuHighlight,
            fontStyle: "italic"
        }
    },
    {
        scope: [
            "entity.other.attribute-name.class.css",
            "entity.other.attribute-name.parent-selector-suffix.css",
            "entity.other.attribute-name.parent-selector-suffix.css punctuation.definition.entity.css",
            "entity.other.attribute-name.css"
        ],
        settings: {
            foreground: tokenColors2.menuHighlight
        }
    },
    {
        scope: "entity.other.attribute-name.id.css",
        settings: {
            foreground: colors2.color_3
        }
    },
    {
        scope: [
            "entity.other.attribute-name.pseudo-class.css",
            "entity.other.pseudo-class.css",
            "entity.other.pseudo-element.css"
        ],
        settings: {
            foreground: tokenColors2.menuHighlight,
            fontStyle: "italic"
        }
    },
    {
        scope: [
            "entity.name.function",
            "support.function"
        ],
        settings: {
            foreground: tokenColors2.menuHighlight
        }
    },
    {
        scope: "entity.other.git-status.hex",
        settings: {
            foreground: colors2.color_5
        }
    },
    {
        scope: "entity.other.jinja2.delimiter",
        settings: {
            foreground: colors2.light_0
        }
    },
    {
        scope: "entity.name.operator.custom-literal",
        settings: {
            foreground: colors2.light_hard
        }
    },
    {
        scope: "entity.name.operator.custom-literal.string",
        settings: {
            foreground: colors2.color_4
        }
    },
    {
        scope: "entity.name.operator.custom-literal.number",
        settings: {
            foreground: colors2.color_5
        }
    },
    {
        scope: "entity.name.type.rust",
        settings: {
            foreground: tokenColors2.menuHighlight
        }
    },
    {
        scope: "entity.name.lifetime.rust",
        settings: {
            foreground: tokenColors2.buttonHighlight
        }
    },
    {
        scope: "invalid",
        settings: {
            fontStyle: "italic"
        }
    },
    {
        scope: "keyword",
        settings: {
            foreground: tokenColors2.keyword_base_types
        }
    },
    {
        scope: "keyword.control",
        settings: {
            foreground: tokenColors2.keyword_flow,
            fontStyle: ""
        }
    },
    {
        scope: [
            "keyword.operator",
            "keyword.operator.member"
        ],
        settings: {
            foreground: colors2.color_3
        }
    },
    {
        scope: "keyword.other.substitution",
        settings: {
            foreground: colors2.light_0
        }
    },
    {
        scope: [
            "keyword.other.template.begin",
            "keyword.other.template.end"
        ],
        settings: {
            foreground: tokenColors2.buttonHighlight
        }
    },
    {
        scope: [
            "keyword.operator.heading.restructuredtext",
            "keyword.operator.table.row.restructuredtext keyword.operator.table.data.restructuredtext"
        ],
        settings: {
            foreground: colors2.light_0
        }
    },
    {
        scope: [
            "keyword.other.fn.rust",
            "keyword.other.rust",
            "keyword.other.unsafe.rust",
            "keyword.other.where.rust"
        ],
        settings: {
            foreground: tokenColors2.menuHighlight
        }
    },
    {
        scope: [
            "keyword.control.rust",
            "keyword.operator.misc.rust"
        ],
        settings: {
            foreground: tokenColors2.buttonHighlight
        }
    },
    {
        scope: "markup.italic",
        settings: {
            fontStyle: "italic"
        }
    },
    {
        scope: "markup.bold",
        settings: {
            fontStyle: "bold"
        }
    },
    {
        scope: "markup.heading",
        settings: {
            foreground: colors2.color_4
        }
    },
    {
        scope: "markup.raw",
        settings: {
            foreground: colors2.color_3
        }
    },
    {
        scope: "markup.underline",
        settings: {
            fontStyle: "underline"
        }
    },
    {
        scope: "markup.underline.link",
        settings: {
            foreground: tokenColors2.menuHighlight
        }
    },
    {
        scope: [
            "markup.inserted",
            "markup.inserted punctuation.definition.inserted"
        ],
        settings: {
            foreground: tokenColors2.menuHighlight
        }
    },
    {
        scope: [
            "markup.deleted",
            "markup.deleted punctuation.definition.deleted"
        ],
        settings: {
            foreground: colors2.color_3
        }
    },
    {
        scope: [
            "markup.changed",
            "markup.changed punctuation.definition.changed"
        ],
        settings: {
            foreground: colors2.color_4
        }
    },
    {
        scope: [
            "markup.ignored",
            "markup.ignored punctuation.definition.ignored"
        ],
        settings: {
            foreground: colors2.light_0
        }
    },
    {
        scope: "markup.untracked",
        settings: {
            foreground: colors2.light_0
        }
    },
    {
        scope: "markup.quote",
        settings: {
            fontStyle: "italic"
        }
    },
    {
        scope: [
            "meta.brace.round",
            "meta.brace.square",
            "meta.brace.curly",
            "meta.delimiter.comma.js",
            "meta.function-call.without-arguments.js",
            "meta.function-call.method.without-arguments.js"
        ],
        settings: {
            foreground: colors2.light_0
        }
    },
    {
        scope: [
            "meta.function-call.python",
            "meta.function-call.arguments.python meta.function-call.python"
        ],
        settings: {
            foreground: tokenColors2.menuHighlight
        }
    },
    {
        scope: "meta.function-call.python meta.function-call.arguments.python",
        settings: {
            foreground: colors2.light_hard
        }
    },
    {
        scope: "meta.instance.constructor",
        settings: {
            foreground: tokenColors2.menuHighlight
        }
    },
    {
        scope: [
            "meta.attribute-with-value.class string",
            "meta.attribute.class.html string"
        ],
        settings: {
            foreground: tokenColors2.menuHighlight
        }
    },
    {
        scope: [
            "meta.attribute-with-value.id string",
            "meta.attribute.id.html string"
        ],
        settings: {
            foreground: colors2.color_3
        }
    },
    {
        scope: [
            "source.json meta.structure.dictionary",
            "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
            "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
            "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
            "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
            "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
            "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
            "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
            "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
            "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
            "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
            "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
            "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
            "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
            "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
            "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
            "source.json meta.structure.dictionary string",
            "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
            "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
            "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
            "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
            "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
            "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
            "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
            "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
            "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
            "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
            "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
            "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
            "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
            "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
            "source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string"
        ],
        settings: {
            foreground: colors2.light_hard
        }
    },
    {
        scope: [
            "source.json meta.structure.dictionary.value string",
            "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
            "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
            "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
            "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
            "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
            "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
            "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
            "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
            "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
            "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
            "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
            "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
            "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
            "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
            "source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string"
        ],
        settings: {
            foreground: colors2.color_4
        }
    },
    {
        scope: "meta.object.member",
        settings: {
            foreground: colors2.light_hard
        }
    },
    {
        scope: "meta.property-list.css variable.other",
        settings: {
            foreground: colors2.color_3
        }
    },
    {
        scope: [
            "entity.name.constant.preprocessor",
            "meta.preprocessor"
        ],
        settings: {
            foreground: colors2.color_5
        }
    },
    {
        scope: "meta.diff.git-diff.header",
        settings: {
            foreground: colors2.color_4
        }
    },
    {
        scope: "meta.type_params.rust",
        settings: {
            foreground: colors2.light_hard
        }
    },
    {
        scope: [
            "meta.attribute.rust",
            "variable.language.rust"
        ],
        settings: {
            foreground: colors2.color_3
        }
    },
    {
        scope: [
            "punctuation.definition.interpolation"
        ],
        settings: {
            foreground: tokenColors2.punctuation
        }
    },
    {
        scope: "punctuation",
        settings: {
            foreground: tokenColors2.punctuation
        }
    },
    {
        scope: [
            "punctuation.definition.tag",
            "punctuation.definition.tag source",
            "punctuation.definition.group.begin.ruby",
            "punctuation.definition.group.end.ruby",
            "punctuation.definition.group.begin.css",
            "punctuation.definition.group.end.css",
            "punctuation.definition.string.end.html source.css"
        ],
        settings: {
            foreground: tokenColors2.punctuation
        }
    },
    {
        scope: "punctuation.definition.group",
        settings: {
            foreground: colors2.light_hard
        }
    },
    {
        scope: "punctuation.definition.comment",
        settings: {
            foreground: colors2.light_0
        }
    },
    {
        scope: [
            "punctuation.definition.variable",
            "punctuation.definition.keyword.scss",
            "punctuation.definition.entity.css"
        ],
        settings: {
            foreground: tokenColors2.punctuation
        }
    },
    {
        scope: [
            "punctuation.section.embedded",
            "punctuation.section.embedded entity.name.tag",
            "punctuation.section.embedded constant.other",
            "punctuation.section.embedded source"
        ],
        settings: {
            foreground: tokenColors2.punctuation
        }
    },
    {
        scope: [
            "punctuation.template-string.element.begin",
            "punctuation.template-string.element.end",
            "punctuation.definition.string.template.begin",
            "punctuation.definition.string.template.end",
            "string.quoted.template punctuation.definition.string.begin",
            "string.quoted.template punctuation.definition.string.end"
        ],
        settings: {
            foreground: tokenColors2.punctuation
        }
    },
    {
        scope: [
            "meta.paragraph.markdown meta.dummy.line-break",
            "meta.paragraph.markdown meta.hard-line-break.markdown"
        ],
        settings: {}
    },
    {
        scope: "region.redish",
        settings: {
            foreground: tokenColors2.buttonHighlight
        }
    },
    {
        scope: "region.orangish",
        settings: {
            foreground: colors2.color_3
        }
    },
    {
        scope: "region.yellowish",
        settings: {
            foreground: colors2.color_4
        }
    },
    {
        scope: "region.greenish",
        settings: {
            foreground: tokenColors2.menuHighlight
        }
    },
    {
        scope: "region.bluish",
        settings: {
            foreground: colors2.color_2
        }
    },
    {
        scope: "region.purplish",
        settings: {
            foreground: colors2.color_5
        }
    },
    {
        scope: "region.pinkish",
        settings: {
            foreground: tokenColors2.buttonHighlight
        }
    },
    {
        scope: "region.whitish",
        settings: {
            foreground: colors2.light_hard
        }
    },
    {
        scope: "source",
        settings: {
            foreground: colors2.light_hard
        }
    },
    {
        scope: [
            "source.scss",
            "source.sass"
        ],
        settings: {
            foreground: colors2.light_hard
        }
    },
    {
        scope: [
            "source.sass variable.other",
            "source.sass variable.sass",
            "source.scss variable.other",
            "source.scss variable.scss",
            "source.scss variable.sass",
            "source.css variable.other",
            "source.css variable.scss",
            "source.less variable.other",
            "source.less variable.other.less",
            "source.less variable.declaration.less"
        ],
        settings: {
            foreground: colors2.color_3,
            fontStyle: "italic"
        }
    },
    {
        scope: "source.git-show.commit.sha",
        settings: {
            foreground: colors2.color_5
        }
    },
    {
        scope: [
            "source.git-show.author",
            "source.git-show.date",
            "source.git-diff.command",
            "source.git-diff.command meta.diff.git-diff.header.from-file",
            "source.git-diff.command meta.diff.git-diff.header.to-file"
        ],
        settings: {
            foreground: colors2.light_0
        }
    },
    {
        scope: [
            "source.git-show meta.diff.git-diff.header.extended.index.from-sha",
            "source.git-show meta.diff.git-diff.header.extended.index.to-sha"
        ],
        settings: {
            foreground: colors2.color_5
        }
    },
    {
        scope: "source.git-show meta.diff.range.unified",
        settings: {
            foreground: colors2.color_3
        }
    },
    {
        scope: [
            "source.git-show meta.diff.header.from-file",
            "source.git-show meta.diff.header.to-file"
        ],
        settings: {
            foreground: colors2.light_0
        }
    },
    {
        scope: "storage",
        settings: {
            foreground: tokenColors2.buttonHighlight
        }
    },
    {
        scope: "storage.type",
        settings: {
            foreground: tokenColors2.keyword_storage,
            fontStyle: "bold"
        }
    },
    {
        scope: "storage.type.accessor",
        settings: {
            foreground: tokenColors2.method
        }
    },
    {
        scope: "storage.type.extends",
        settings: {
            foreground: tokenColors2.buttonHighlight,
            fontStyle: ""
        }
    },
    {
        scope: "storage.type.function.arrow",
        settings: {
            foreground: tokenColors2.buttonHighlight,
            fontStyle: ""
        }
    },
    {
        scope: [
            "storage.modifier",
            "storage.type.modifier",
            "storage.type.function.gdscript"
        ],
        settings: {
            foreground: tokenColors2.keyword_storage,
            fontStyle: "italic"
        }
    },
    {
        scope: "storage.class.restructuredtext.ref",
        settings: {
            foreground: colors2.color_5
        }
    },
    {
        scope: [
            "storage.modifier.visibility.rust",
            "storage.modifier.lifetime.rust"
        ],
        settings: {
            foreground: tokenColors2.buttonHighlight
        }
    },
    {
        scope: [
            "storage.modifier.const.rust",
            "storage.modifier.dyn.rust",
            "storage.modifier.mut.rust",
            "storage.modifier.static.rust",
            "storage.type.rust",
            "storage.type.core.rust",
            "storage.class.std.rust"
        ],
        settings: {
            foreground: tokenColors2.menuHighlight
        }
    },
    {
        scope: [
            "storage.type.rust",
            "storage.modifier.const.rust",
            "storage.modifier.dyn.rust",
            "storage.modifier.mut.rust",
            "storage.modifier.static.rust",
            "keyword.other.rust",
            "keyword.other.where.rust"
        ],
        settings: {
            foreground: tokenColors2.buttonHighlight
        }
    },
    {
        scope: "string",
        settings: {
            foreground: colors2.color_4
        }
    },
    {
        scope: "string.unquoted.label",
        settings: {
            foreground: colors2.light_hard
        }
    },
    {
        scope: "string source",
        settings: {
            foreground: colors2.light_hard
        }
    },
    {
        scope: "string source punctuation.section.embedded",
        settings: {
            foreground: colors2.light_0
        }
    },
    {
        scope: [
            "string.other.link.title",
            "string.other.link.description"
        ],
        settings: {
            foreground: tokenColors2.buttonHighlight
        }
    },
    {
        scope: "string.other.link.description.title",
        settings: {
            foreground: tokenColors2.menuHighlight
        }
    },
    {
        scope: [
            "string.regexp punctuation.definition.string.begin",
            "string.regexp punctuation.definition.string.end"
        ],
        settings: {
            foreground: tokenColors2.punctuation
        }
    },
    {
        scope: [
            "string.other.ref",
            "string.other.restructuredtext.ref"
        ],
        settings: {
            foreground: tokenColors2.menuHighlight
        }
    },
    {
        scope: "string.other.git-status.help.key",
        settings: {
            foreground: colors2.light_0
        }
    },
    {
        scope: "string.other.git-status.remote",
        settings: {
            foreground: tokenColors2.buttonHighlight
        }
    },
    {
        scope: "support.constant",
        settings: {
            foreground: tokenColors2.menuHighlight
        }
    },
    {
        scope: "support.constant.handlebars",
        settings: {
            foreground: colors2.light_0
        }
    },
    {
        scope: "support.type.vendor-prefix.css",
        settings: {
            foreground: colors2.light_0
        }
    },
    {
        scope: "support.function",
        settings: {
            foreground: tokenColors2.menuHighlight
        }
    },
    {
        scope: [
            "support.type",
            "entity.name.type.object.console"
        ],
        settings: {
            foreground: tokenColors2.menuHighlight,
            fontStyle: "italic"
        }
    },
    {
        scope: "support.variable",
        settings: {
            foreground: tokenColors2.menuHighlight
        }
    },
    {
        scope: "support.type.property-name",
        settings: {
            foreground: colors2.light_hard,
            fontStyle: ""
        }
    },
    {
        scope: "support.class",
        settings: {
            foreground: tokenColors2.menuHighlight
        }
    },
    {
        scope: "support.constant.core.rust",
        settings: {
            foreground: colors2.color_5
        }
    },
    {
        scope: "text",
        settings: {
            foreground: "#fceae6"
        }
    },
    {
        scope: "text.find-in-files",
        settings: {
            foreground: colors2.light_hard
        }
    },
    {
        scope: [
            "variable"
        ],
        settings: {
            foreground: tokenColors2.field_name,
            fontStyle: ""
        }
    },
    {
        scope: [
            "variable.parameter",
            "parameters variable.function"
        ],
        settings: {
            foreground: colors2.color_3,
            fontStyle: "italic"
        }
    },
    {
        scope: [
            "variable.language",
            "variable.parameter.function.language.special.self.python",
            "variable.parameter.function.language.special.cls.python"
        ],
        settings: {
            foreground: colors2.color_3,
            fontStyle: "italic"
        }
    },
    {
        scope: "variable.language.arguments",
        settings: {
            foreground: colors2.color_5
        }
    },
    {
        scope: [
            "variable.other.class"
        ],
        settings: {
            foreground: tokenColors2.field_name
        }
    },
    {
        scope: [
            "variable.other.class",
            "variable.other.object.property",
            "variable.other.property.gdscript"
        ],
        settings: {
            foreground: tokenColors2.plain
        }
    },
    {
        scope: "variable.other.constant",
        settings: {
            foreground: tokenColors2.field_name
        }
    },
    {
        scope: "variable.other.member",
        settings: {
            foreground: tokenColors2.field_name
        }
    },
    {
        scope: "variable.other.enummember",
        settings: {
            foreground: colors2.color_5
        }
    },
    {
        scope: [
            "variable.other.property",
            "variable.other.property.static",
            "variable.other.event"
        ],
        settings: {
            foreground: tokenColors2.property
        }
    },
    {
        scope: "variable.function",
        settings: {
            foreground: tokenColors2.menuHighlight
        }
    },
    {
        scope: [
            "variable.other.substitution",
            "heading.2.markdown"
        ],
        settings: {
            foreground: colors2.color_2
        }
    },
    {
        scope: [
            "source.ruby variable.other.readwrite.instance.ruby",
            "source.ruby variable.other.readwrite.class.ruby"
        ],
        settings: {
            foreground: colors2.color_5
        }
    },
    {
        scope: "source.jinja2 variable.other.jinja2.block",
        settings: {
            foreground: tokenColors2.menuHighlight
        }
    },
    {
        scope: "source.jinja2 variable.other.jinja2",
        settings: {
            foreground: colors2.color_3
        }
    },
    {
        scope: [
            "comment",
            "keyword",
            "storage.modifier",
            "storage.type.class.js",
            "keyword.control.directive.include.cpp"
        ],
        settings: {
            fontStyle: "italic"
        }
    },
    {
        scope: [
            "invalid",
            "keyword.other.unit.px.css",
            "constant.numeric.decimal.js",
            "constant.numeric.json"
        ],
        settings: {
            fontStyle: ""
        }
    },
    {
        scope: [
            "meta.variable.declaration.gdscript variable.other.gdscript",
            "variable.parameter.function.language.gdscript"
        ],
        settings: {
            foreground: tokenColors2.field_name_declaration
        }
    },
    {
        scope: [
            "entity.name.variable.field",
            "entity.name.variable.parameter",
            "entity.name.variable.local",
            "entity.name.variable.tuple-element"
        ],
        settings: {
            foreground: tokenColors2.field_name_declaration
        }
    },
    {
        scope: [
            "variable.other",
            "variable.other.object"
        ],
        settings: {
            foreground: tokenColors2.field_name
        }
    },
    {
        scope: [
            "entity.name.variable.local",
            "entity.name.variable.field"
        ],
        settings: {
            foreground: tokenColors2.field_name_declaration
        }
    },
    {
        scope: [
            "support.type.property-name"
        ],
        settings: {
            foreground: tokenColors2.property
        }
    },
    {
        scope: [
            "entity.name.class",
            "entity.name.type.class",
            "entity.name.type.struct"
        ],
        settings: {
            foreground: tokenColors2.type_declaration
        }
    },
    {
        scope: [
            "function",
            "entity.name.function",
            "entity.name.function.templated",
            "meta.function-call.gdscript keyword.language.gdscript"
        ],
        settings: {
            foreground: tokenColors2.method,
            fontStyle: ""
        }
    },
    {
        scope: [
            "property",
            "entity.name.variable.event",
            "entity.name.variable.property"
        ],
        settings: {
            foreground: tokenColors2.property
        }
    },
    {
        scope: [
            "string",
            "constant.language",
            "constant.numeric",
            "string.quoted.double",
            "entity.name.variable.enum-member",
            "variable.other.constant.gdscript"
        ],
        settings: {
            foreground: tokenColors2.base_value
        }
    },
    {
        scope: [
            "punctuation.definition.string.begin",
            "punctuation.definition.string.end"
        ],
        settings: {
            foreground: tokenColors2.plain
        }
    },
    {
        scope: [
            "keyword.operator",
            "punctuation.accessor"
        ],
        settings: {
            foreground: tokenColors2.punctuation
        }
    },
    {
        scope: [
            "keyword.type",
            "keyword.operator.expression.new",
            "storage.type.var.gdscript"
        ],
        settings: {
            foreground: tokenColors2.keyword_base_types,
            fontStyle: "italic"
        }
    },
    {
        scope: [
            "keyword.operator"
        ],
        settings: {
            foreground: tokenColors2.buttonHighlight,
            fontStyle: ""
        }
    },
    {
        scope: "token.info-token",
        settings: {
            foreground: colors2.color_2
        }
    },
    {
        scope: "token.warn-token",
        settings: {
            foreground: colors2.color_4
        }
    },
    {
        scope: "token.error-token",
        settings: {
            foreground: tokenColors2.buttonHighlight
        }
    },
    {
        scope: "token.debug-token",
        settings: {
            foreground: colors2.color_5
        }
    },
    {
        scope: "heading.1.markdown",
        settings: {
            foreground: "#bb9aff",
            fontStyle: "bold"
        }
    },
    {
        scope: "heading.2.markdown",
        settings: {
            foreground: "#ff9ade",
            fontStyle: "bold"
        }
    },
    {
        scope: "heading.3.markdown",
        settings: {
            foreground: "#ffc19a"
        }
    },
    {
        scope: "heading.4.markdown",
        settings: {
            foreground: "#ff9aad"
        }
    },
    {
        scope: "punctuation.definition.heading.markdown",
        settings: {
            foreground: colors2.light_0,
            fontStyle: "bold"
        }
    }
];
var grammarColors = {
    tokens: grammarTokens
};
var default_default = {
    grammarColors: grammarColors
};
// src/index.ts
var fs = __toESM(require("fs"), 1);
var path = __toESM(require("path"), 1);
function getTsFilesAsObjects(directoryPath) {
    return _async_to_generator(function() {
        var objects, files, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, file, filePath, module2, err, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    objects = [];
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        11,
                        ,
                        12
                    ]);
                    return [
                        4,
                        fs.promises.readdir(directoryPath)
                    ];
                case 2:
                    files = _state.sent();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 3;
                case 3:
                    _state.trys.push([
                        3,
                        8,
                        9,
                        10
                    ]);
                    _iterator = files[Symbol.iterator]();
                    _state.label = 4;
                case 4:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        7
                    ];
                    file = _step.value;
                    if (!(file.endsWith(".ts") && !file.endsWith(".d.ts"))) return [
                        3,
                        6
                    ];
                    filePath = path.join(directoryPath, file);
                    return [
                        4,
                        Promise.resolve(filePath).then(function(p) {
                            return /*#__PURE__*/ _interop_require_wildcard(require(p));
                        })
                    ];
                case 5:
                    module2 = _state.sent();
                    if (module2.default) {
                        objects.push(exports.default);
                    }
                    _state.label = 6;
                case 6:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        4
                    ];
                case 7:
                    return [
                        3,
                        10
                    ];
                case 8:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        10
                    ];
                case 9:
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                    return [
                        7
                    ];
                case 10:
                    console.log("Successfully read ".concat(objects.length, " TypeScript files from ").concat(directoryPath));
                    return [
                        3,
                        12
                    ];
                case 11:
                    error = _state.sent();
                    console.error("Error reading directory or importing files: ".concat(error));
                    return [
                        3,
                        12
                    ];
                case 12:
                    return [
                        2,
                        objects
                    ];
            }
        });
    })();
}
var folderToScan = function folderToScan() {
    return path.dirname("./ui");
};
var uiObjects = getTsFilesAsObjects(folderToScan());
var gruvvyWatermelonTheme = generateTheme("Gruvvy Watermelon", uiObjects, default_default);
fs.promises.mkdir("./themes", {
    recursive: true
}).then(function() {
    return Promise.all([
        fs.promises.writeFile("./themes/Gruvvy-Watermelon-color-theme.json", JSON.stringify(gruvvyWatermelonTheme, null, 2))
    ]);
}).catch(function() {
    return process.exit(1);
});
//# sourceMappingURL=index.cjs.map