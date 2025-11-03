"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  activate: () => activate
});
module.exports = __toCommonJS(main_exports);
var import_vscode2 = require("vscode");

// src/utils.ts
var import_vscode = require("vscode");

// src/palettes.ts
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
var flavor = {
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
var tokens = {
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
  errorColor: flavor.red_pink,
  // warn
  warnColor: flavor.peach,
  // info
  infoColor: flavor.bright_aqua,
  // hint
  hintColor: flavor.bright_purple,
  menuHighlight: flavor.bright_blue,
  buttonHighlight: flavor.bright_aqua,
  secondaryButtonHighlight: flavor.purple_pink
};
var widgets = {
  widget_bg: flavor.bg_1,
  widget_fg: flavor.fg_0,
  widget_hl: flavor.gray,
  widget_menu_bg: flavor.bg_2
};
var palette = {
  colors,
  palette: flavor,
  tokenColors: tokens,
  widgetColors: widgets
};

// src/theme/UIColors/workbench.ts
function workBench(ctx) {
  const { colors: colors2, tokenColors, widgetColors, palette: palette2 } = ctx;
  return {
    "editorBracketHighlight.foreground1": tokenColors.buttonHighlight,
    "editorBracketHighlight.foreground2": colors2.color_3,
    "editorBracketHighlight.foreground3": tokenColors.menuHighlight,
    "editorBracketHighlight.foreground4": colors2.color_2,
    "activityBar.activeBorder": tokenColors.menuHighlight,
    "activityBar.activeFocusBorder": tokenColors.menuHighlight,
    "activityBar.background": colors2.dark_hard,
    "activityBar.border": colors2.dark_hard,
    "activityBar.foreground": colors2.light_hard,
    "activityBar.inactiveForeground": colors2.light_0,
    "activityBarBadge.background": colors2.color_2,
    "activityBarBadge.foreground": palette2.black,
    "badge.background": palette2.bright_blue,
    "badge.foreground": palette2.black,
    "breadcrumb.activeSelectionForeground": colors2.light_hard,
    "breadcrumb.focusForeground": colors2.light_hard,
    "breadcrumb.foreground": colors2.light_0,
    "button.background": colors2.color_2,
    "button.foreground": colors2.dark_normal,
    "button.hoverBackground": tokenColors.menuHighlight,
    "checkbox.background": colors2.dark_normal,
    "checkbox.border": colors2.dark_1,
    "checkbox.foreground": colors2.color_3,
    "debugToolBar.background": colors2.dark_normal,
    "diffEditor.insertedTextBackground": tokenColors.menuHighlight + "20",
    "diffEditor.removedTextBackground": tokenColors.buttonHighlight + "26",
    "dropdown.background": colors2.dark_normal,
    "dropdown.border": colors2.dark_1,
    "dropdown.foreground": colors2.light_hard,
    "editor.background": colors2.dark_normal,
    "editor.findMatchBackground": palette2.bright_aqua + "40",
    "editor.findMatchHighlightBackground": palette2.bright_purple + "40",
    "editor.findRangeHighlightBackground": palette2.bright_purple + "40",
    "editor.foreground": colors2.light_hard,
    "editor.hoverHighlightBackground": tokenColors.menuHighlight + "36",
    "editor.lineHighlightBackground": colors2.dark_0 + "40",
    "editor.lineHighlightBorder": colors2.dark_0 + "00",
    "editor.rangeHighlightBackground": colors2.color_5 + "40",
    "editor.selectionBackground": colors2.dark_0 + "f0",
    "editor.selectionHighlightBackground": colors2.dark_0 + "00",
    "editor.snippetFinalTabstopHighlightBackground": colors2.color_5 + "30",
    "editor.snippetFinalTabstopHighlightBorder": colors2.dark_normal,
    "editor.snippetTabstopHighlightBackground": colors2.dark_1 + "a0",
    "editor.symbolHighlightBackground": tokenColors.menuHighlight + "38",
    "editor.wordHighlightBackground": colors2.dark_0 + "c0",
    "editor.wordHighlightStrongBackground": colors2.dark_0 + "c0",
    "editorBracketMatch.background": colors2.dark_1,
    "editorBracketMatch.border": colors2.dark_normal + "00",
    "editorCodeLens.foreground": colors2.light_0,
    "editorCursor.foreground": colors2.light_hard,
    "editorError.foreground": tokenColors.errorColor,
    "editorGroup.border": colors2.dark_hard,
    "editorGroup.dropBackground": colors2.dark_1 + "60",
    "editorGroupHeader.noTabsBackground": colors2.dark_normal,
    "editorGroupHeader.tabsBackground": colors2.dark_normal,
    "editorGutter.addedBackground": tokenColors.menuHighlight + "40",
    "editorGutter.background": colors2.dark_normal + "00",
    "editorGutter.deletedBackground": tokenColors.buttonHighlight + "40",
    "editorGutter.modifiedBackground": tokenColors.menuHighlight + "40",
    "editorHint.foreground": widgetColors.widget_fg,
    "editorHoverWidget.background": widgetColors.widget_bg,
    "editorHoverWidget.border": widgetColors.widget_bg,
    "editorIndentGuide.activeBackground1": colors2.dark_1,
    "editorIndentGuide.background1": colors2.dark_0,
    "editorInfo.foreground": tokenColors.infoColor,
    "editorLightBulb.foreground": palette2.purple_pink,
    "editorLightBulbAutoFix.foreground": tokenColors.infoColor,
    "editorLineNumber.activeForeground": colors2.light_hard,
    "editorLineNumber.foreground": colors2.light_0,
    "editorLink.activeForeground": tokenColors.menuHighlight,
    "editorMarkerNavigation.background": colors2.dark_1,
    "editorMarkerNavigationError.background": tokenColors.buttonHighlight,
    "editorMarkerNavigationInfo.background": tokenColors.menuHighlight,
    "editorMarkerNavigationWarning.background": colors2.color_4,
    "editorOverviewRuler.addedForeground": tokenColors.menuHighlight + "80",
    "editorOverviewRuler.border": colors2.dark_normal + "00",
    "editorOverviewRuler.commonContentForeground": colors2.light_0,
    "editorOverviewRuler.currentContentForeground": tokenColors.menuHighlight + "a0",
    "editorOverviewRuler.deletedForeground": tokenColors.buttonHighlight + "80",
    "editorOverviewRuler.errorForeground": tokenColors.errorColor,
    "editorOverviewRuler.findMatchForeground": tokenColors.menuHighlight + "80",
    "editorOverviewRuler.incomingContentForeground": tokenColors.menuHighlight + "a0",
    "editorOverviewRuler.infoForeground": tokenColors.menuHighlight,
    "editorOverviewRuler.modifiedForeground": tokenColors.menuHighlight + "80",
    "editorOverviewRuler.rangeHighlightForeground": tokenColors.menuHighlight + "80",
    "editorOverviewRuler.selectionHighlightForeground": tokenColors.menuHighlight + "80",
    "editorOverviewRuler.warningForeground": colors2.color_4,
    "editorOverviewRuler.wordHighlightForeground": colors2.light_0 + "80",
    "editorOverviewRuler.wordHighlightStrongForeground": colors2.light_0 + "60",
    "editorRuler.foreground": colors2.dark_1,
    "editorSuggestWidget.background": widgetColors.widget_bg,
    "editorSuggestWidget.border": widgetColors.widget_bg,
    "editorSuggestWidget.foreground": widgetColors.widget_fg,
    "editorSuggestWidget.highlightForeground": widgetColors.widget_fg,
    "editorSuggestWidget.selectedBackground": widgetColors.widget_hl,
    "editorUnnecessaryCode.border": colors2.light_0,
    "editorUnnecessaryCode.opacity": colors2.light_hard,
    "editorWarning.foreground": tokenColors.warnColor,
    "editorWhitespace.foreground": colors2.light_0,
    "editorWidget.background": widgetColors.widget_menu_bg,
    "editorWidget.border": widgetColors.widget_bg,
    errorForeground: tokenColors.buttonHighlight,
    "extensionBadge.remoteBackground": tokenColors.menuHighlight,
    "extensionBadge.remoteForeground": colors2.dark_normal,
    "extensionButton.prominentBackground": tokenColors.menuHighlight,
    "extensionButton.prominentForeground": colors2.dark_normal,
    "extensionButton.prominentHoverBackground": tokenColors.menuHighlight,
    focusBorder: colors2.dark_1 + "00",
    foreground: colors2.light_hard,
    "gitDecoration.addedResourceForeground": tokenColors.menuHighlight + "80",
    "gitDecoration.conflictingResourceForeground": colors2.color_5 + "90",
    "gitDecoration.deletedResourceForeground": colors2.color_3,
    "gitDecoration.ignoredResourceForeground": colors2.dark_1,
    "gitDecoration.modifiedResourceForeground": tokenColors.menuHighlight + "d1",
    "gitDecoration.submoduleResourceForeground": colors2.color_3 + "d1",
    "gitDecoration.untrackedResourceForeground": colors2.color_4 + "d1",
    "icon.foreground": tokenColors.menuHighlight,
    "input.background": colors2.dark_normal + "00",
    "input.border": widgetColors.widget_bg,
    "input.foreground": colors2.light_hard,
    "input.placeholderForeground": colors2.light_0,
    "inputOption.activeBorder": widgetColors.widget_hl,
    "inputValidation.errorBackground": colors2.dark_0,
    "inputValidation.errorBorder": tokenColors.buttonHighlight,
    "inputValidation.errorForeground": tokenColors.buttonHighlight,
    "inputValidation.infoBackground": colors2.dark_0,
    "inputValidation.infoBorder": widgetColors.widget_bg,
    "inputValidation.infoForeground": tokenColors.menuHighlight,
    "inputValidation.warningBackground": colors2.dark_0,
    "inputValidation.warningBorder": colors2.color_4,
    "inputValidation.warningForeground": colors2.color_4,
    "list.activeSelectionBackground": colors2.dark_normal + "e0",
    "list.activeSelectionForeground": colors2.light_hard,
    "list.dropBackground": colors2.dark_0 + "80",
    "list.errorForeground": tokenColors.buttonHighlight,
    "list.focusBackground": colors2.dark_1 + "80",
    "list.focusForeground": colors2.light_hard,
    "list.highlightForeground": tokenColors.menuHighlight,
    "list.hoverBackground": colors2.dark_hard + "00",
    "list.hoverForeground": colors2.light_hard,
    "list.inactiveFocusBackground": colors2.dark_1 + "68",
    "list.inactiveSelectionBackground": colors2.dark_normal + "c8",
    "list.inactiveSelectionForeground": colors2.light_0,
    "list.invalidItemForeground": tokenColors.buttonHighlight + "80",
    "list.warningForeground": colors2.color_4,
    "menu.background": colors2.dark_hard,
    "menu.foreground": colors2.light_hard,
    "menu.selectionBackground": colors2.dark_normal,
    "menu.selectionForeground": colors2.light_hard,
    "menubar.selectionBackground": colors2.dark_normal,
    "menubar.selectionBorder": colors2.dark_normal,
    "merge.border": colors2.dark_normal + "00",
    "merge.currentContentBackground": tokenColors.menuHighlight + "1a",
    "merge.currentHeaderBackground": tokenColors.menuHighlight + "30",
    "merge.incomingContentBackground": tokenColors.menuHighlight + "1a",
    "merge.incomingHeaderBackground": tokenColors.menuHighlight + "30",
    "minimap.errorHighlight": tokenColors.buttonHighlight + "70",
    "minimap.findMatchHighlight": tokenColors.menuHighlight + "40",
    "minimap.selectionHighlight": colors2.dark_1 + "f0",
    "minimap.warningHighlight": colors2.color_4 + "50",
    "minimapGutter.addedBackground": tokenColors.menuHighlight + "a0",
    "minimapGutter.deletedBackground": tokenColors.buttonHighlight + "a0",
    "minimapGutter.modifiedBackground": tokenColors.menuHighlight + "a0",
    "notificationCenterHeader.background": colors2.dark_0,
    "notificationCenterHeader.foreground": colors2.light_hard,
    "notificationLink.foreground": tokenColors.menuHighlight,
    "notifications.background": colors2.dark_normal,
    "notifications.foreground": colors2.light_hard,
    "notificationsErrorIcon.foreground": tokenColors.buttonHighlight,
    "notificationsInfoIcon.foreground": tokenColors.menuHighlight,
    "notificationsWarningIcon.foreground": colors2.color_4,
    "panel.background": colors2.dark_0,
    "panel.border": colors2.dark_0,
    "panelInput.border": widgetColors.widget_bg,
    "panelTitle.activeBorder": tokenColors.menuHighlight,
    "panelTitle.activeForeground": colors2.light_soft,
    "panelTitle.inactiveForeground": colors2.light_0,
    "peekView.border": widgetColors.widget_bg,
    "peekViewEditor.background": widgetColors.widget_bg,
    "peekViewEditor.matchHighlightBackground": widgetColors.widget_hl,
    "peekViewEditorGutter.background": widgetColors.widget_menu_bg,
    "peekViewResult.background": widgetColors.widget_menu_bg,
    "peekViewResult.fileForeground": widgetColors.widget_fg,
    "peekViewResult.matchHighlightBackground": widgetColors.widget_hl,
    "peekViewResult.selectionBackground": widgetColors.widget_menu_bg,
    "peekViewTitle.background": widgetColors.widget_menu_bg,
    "peekViewTitleDescription.foreground": widgetColors.widget_fg,
    "peekViewTitleLabel.foreground": widgetColors.widget_fg,
    "pickerGroup.border": colors2.light_hard + "1a",
    "problemsErrorIcon.foreground": tokenColors.buttonHighlight,
    "problemsInfoIcon.foreground": tokenColors.menuHighlight,
    "problemsWarningIcon.foreground": colors2.color_4,
    "progressBar.background": tokenColors.menuHighlight,
    "quickInputList.focusBackground": widgetColors.widget_hl,
    "scrollbar.shadow": colors2.dark_hard + "70",
    "scrollbarSlider.activeBackground": colors2.light_0 + "b0",
    "scrollbarSlider.background": colors2.light_0 + "70",
    "scrollbarSlider.hoverBackground": colors2.light_0 + "90",
    "selection.background": colors2.dark_1 + "e0",
    "settings.checkboxBackground": colors2.dark_normal,
    "settings.checkboxBorder": colors2.dark_1,
    "settings.checkboxForeground": colors2.color_3,
    "settings.dropdownBackground": colors2.dark_normal,
    "settings.dropdownBorder": colors2.dark_1,
    "settings.dropdownForeground": tokenColors.menuHighlight,
    "settings.headerForeground": colors2.light_hard,
    "settings.numberInputBackground": colors2.dark_normal,
    "settings.numberInputBorder": widgetColors.widget_bg,
    "settings.numberInputForeground": colors2.color_5,
    "settings.textInputBackground": widgetColors.widget_bg,
    "settings.textInputBorder": widgetColors.widget_bg,
    "settings.textInputForeground": tokenColors.menuHighlight,
    "sideBar.background": colors2.dark_hard,
    "sideBar.foreground": colors2.light_0,
    "sideBarSectionHeader.background": colors2.dark_normal + "00",
    "sideBarSectionHeader.foreground": colors2.light_0,
    "sideBarTitle.foreground": colors2.light_0,
    "statusBar.background": palette2.bright_red_pink,
    "statusBar.border": colors2.dark_hard,
    "statusBar.debuggingBackground": tokenColors.buttonHighlight,
    "statusBar.debuggingBorder": tokenColors.buttonHighlight,
    "statusBar.debuggingForeground": colors2.dark_normal,
    "statusBar.foreground": colors2.dark_normal,
    "statusBar.noFolderBackground": colors2.color_2,
    "statusBar.noFolderBorder": colors2.dark_hard,
    "statusBar.noFolderForeground": colors2.dark_normal,
    "statusBarItem.activeBackground": colors2.dark_1 + "a0",
    "statusBarItem.hoverBackground": tokenColors.menuHighlight,
    "statusBarItem.remoteBackground": tokenColors.buttonHighlight,
    "statusBarItem.remoteForeground": colors2.dark_normal,
    "symbolIcon.arrayForeground": colors2.light_hard,
    "symbolIcon.booleanForeground": colors2.color_5,
    "symbolIcon.classForeground": tokenColors.class_name,
    "symbolIcon.colorForeground": colors2.light_hard,
    "symbolIcon.constantForeground": colors2.color_5,
    "symbolIcon.constructorForeground": tokenColors.menuHighlight,
    "symbolIcon.enumeratorForeground": colors2.color_5,
    "symbolIcon.enumeratorMemberForeground": colors2.color_5,
    "symbolIcon.eventForeground": tokenColors.menuHighlight,
    "symbolIcon.fieldForeground": tokenColors.field_name,
    "symbolIcon.fileForeground": colors2.light_hard,
    "symbolIcon.folderForeground": colors2.light_hard,
    "symbolIcon.functionForeground": tokenColors.method,
    "symbolIcon.interfaceForeground": tokenColors.menuHighlight,
    "symbolIcon.keyForeground": tokenColors.menuHighlight,
    "symbolIcon.keywordForeground": tokenColors.buttonHighlight,
    "symbolIcon.methodForeground": tokenColors.method,
    "symbolIcon.moduleForeground": tokenColors.buttonHighlight,
    "symbolIcon.namespaceForeground": tokenColors.buttonHighlight,
    "symbolIcon.nullForeground": colors2.color_5,
    "symbolIcon.numberForeground": colors2.color_5,
    "symbolIcon.objectForeground": tokenColors.menuHighlight,
    "symbolIcon.operatorForeground": tokenColors.buttonHighlight,
    "symbolIcon.packageForeground": tokenColors.buttonHighlight,
    "symbolIcon.propertyForeground": tokenColors.property,
    "symbolIcon.referenceForeground": tokenColors.menuHighlight,
    "symbolIcon.snippetForeground": colors2.light_hard,
    "symbolIcon.stringForeground": colors2.color_4,
    "symbolIcon.structForeground": tokenColors.menuHighlight,
    "symbolIcon.textForeground": colors2.light_hard,
    "symbolIcon.typeParameterForeground": colors2.color_3,
    "symbolIcon.unitForeground": colors2.light_hard,
    "symbolIcon.variableForeground": tokenColors.class_name,
    "tab.activeBackground": colors2.dark_normal,
    "tab.activeBorder": tokenColors.hintColor,
    "tab.activeForeground": colors2.light_hard,
    "tab.border": colors2.dark_hard,
    "tab.hoverBackground": colors2.dark_normal,
    "tab.inactiveBackground": colors2.dark_normal,
    "tab.inactiveForeground": colors2.light_0,
    "tab.unfocusedActiveBorder": colors2.dark_hard,
    "tab.unfocusedActiveForeground": colors2.light_hard,
    "tab.unfocusedInactiveForeground": colors2.light_0,
    "terminal.ansiBlack": colors2.dark_hard,
    "terminal.ansiBlue": tokenColors.menuHighlight,
    "terminal.ansiBrightBlack": colors2.dark_0,
    "terminal.ansiBrightBlue": tokenColors.menuHighlight,
    "terminal.ansiBrightCyan": colors2.color_3,
    "terminal.ansiBrightGreen": tokenColors.menuHighlight,
    "terminal.ansiBrightMagenta": colors2.color_5,
    "terminal.ansiBrightRed": tokenColors.buttonHighlight,
    "terminal.ansiBrightWhite": colors2.light_hard,
    "terminal.ansiBrightYellow": colors2.color_4,
    "terminal.ansiCyan": colors2.color_3,
    "terminal.ansiGreen": tokenColors.menuHighlight,
    // "terminal.ansiMagenta": colors.color_5,
    "terminal.ansiRed": tokenColors.buttonHighlight,
    "terminal.ansiWhite": colors2.light_hard,
    "terminal.ansiYellow": colors2.color_4,
    "terminal.foreground": colors2.light_hard,
    "terminalCursor.foreground": colors2.light_hard,
    "textBlockQuote.background": colors2.dark_0,
    "textBlockQuote.border": colors2.light_0,
    "textCodeBlock.background": colors2.dark_0,
    "textLink.activeForeground": tokenColors.menuHighlight + "a0",
    "textLink.foreground": tokenColors.menuHighlight,
    "titleBar.activeBackground": colors2.dark_hard,
    "titleBar.activeForeground": colors2.light_hard,
    "titleBar.border": colors2.dark_hard,
    "titleBar.inactiveBackground": colors2.dark_hard,
    "titleBar.inactiveForeground": colors2.light_0,
    "tree.indentGuidesStroke": colors2.light_0,
    "widget.shadow": colors2.dark_hard + "70"
  };
}

// src/theme/themeExtensions/errorlens.ts
function errorColors(context) {
  const { palette: palette2, tokenColors } = context;
  return {
    "errorLens.errorForeground": tokenColors.errorColor,
    "errorLens.errorBackground": tokenColors.errorColor + "19",
    "errorLens.warningForeground": tokenColors.warnColor,
    "errorLens.warningBackground": tokenColors.warnColor + "19",
    "errorLens.infoForeground": tokenColors.infoColor,
    "errorLens.infoMessageBackground": tokenColors.infoColor + "19",
    "errorLens.hintForeground": tokenColors.hintColor,
    "errorLens.hintBackground": tokenColors.hintColor + "19"
  };
}

// src/theme/themeExtensions/index.ts
function extensions(ctx) {
  return {
    ...errorColors(ctx)
  };
}

// src/theme/uiColors.ts
var getUiColors = (ctx) => {
  return { ...workBench(ctx), ...extensions(ctx) };
};

// src/theme/tokens/full.ts
function full(ctx) {
  const { colors: colors2, tokenColors } = ctx;
  return [
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
      scope: ["comment variable", "comment variable.other"],
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
        foreground: tokenColors.buttonHighlight
      }
    },
    {
      scope: "comment.git-status.header.local",
      settings: {
        foreground: tokenColors.menuHighlight
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
        foreground: tokenColors.base_value
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
        foreground: tokenColors.namespace
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
        foreground: tokenColors.menuHighlight
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
        foreground: tokenColors.menuHighlight,
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
        foreground: tokenColors.buttonHighlight
      }
    },
    {
      scope: "entity.name.function.operator",
      settings: {
        foreground: tokenColors.buttonHighlight
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
        foreground: tokenColors.type
      }
    },
    {
      scope: "entity.other.attribute-name",
      settings: {
        foreground: tokenColors.menuHighlight,
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
        foreground: tokenColors.menuHighlight
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
        foreground: tokenColors.menuHighlight,
        fontStyle: "italic"
      }
    },
    {
      scope: ["entity.name.function", "support.function"],
      settings: {
        foreground: tokenColors.menuHighlight
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
        foreground: tokenColors.menuHighlight
      }
    },
    {
      scope: "entity.name.lifetime.rust",
      settings: {
        foreground: tokenColors.buttonHighlight
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
        foreground: tokenColors.keyword_base_types
      }
    },
    {
      scope: "keyword.control",
      settings: {
        foreground: tokenColors.keyword_flow,
        fontStyle: ""
      }
    },
    {
      scope: ["keyword.operator", "keyword.operator.member"],
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
        foreground: tokenColors.buttonHighlight
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
        foreground: tokenColors.menuHighlight
      }
    },
    {
      scope: ["keyword.control.rust", "keyword.operator.misc.rust"],
      settings: {
        foreground: tokenColors.buttonHighlight
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
        foreground: tokenColors.menuHighlight
      }
    },
    {
      scope: [
        "markup.inserted",
        "markup.inserted punctuation.definition.inserted"
      ],
      settings: {
        foreground: tokenColors.menuHighlight
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
        foreground: tokenColors.menuHighlight
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
        foreground: tokenColors.menuHighlight
      }
    },
    {
      scope: [
        "meta.attribute-with-value.class string",
        "meta.attribute.class.html string"
      ],
      settings: {
        foreground: tokenColors.menuHighlight
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
      scope: ["entity.name.constant.preprocessor", "meta.preprocessor"],
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
      scope: ["meta.attribute.rust", "variable.language.rust"],
      settings: {
        foreground: colors2.color_3
      }
    },
    {
      scope: ["punctuation.definition.interpolation"],
      settings: {
        foreground: tokenColors.punctuation
      }
    },
    {
      scope: "punctuation",
      settings: {
        foreground: tokenColors.punctuation
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
        foreground: tokenColors.punctuation
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
        foreground: tokenColors.punctuation
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
        foreground: tokenColors.punctuation
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
        foreground: tokenColors.punctuation
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
        foreground: tokenColors.buttonHighlight
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
        foreground: tokenColors.menuHighlight
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
        foreground: tokenColors.buttonHighlight
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
      scope: ["source.scss", "source.sass"],
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
        foreground: tokenColors.buttonHighlight
      }
    },
    {
      scope: "storage.type",
      settings: {
        foreground: tokenColors.keyword_storage,
        fontStyle: "bold"
      }
    },
    {
      scope: "storage.type.accessor",
      settings: {
        foreground: tokenColors.method
      }
    },
    {
      scope: "storage.type.extends",
      settings: {
        foreground: tokenColors.buttonHighlight,
        fontStyle: ""
      }
    },
    {
      scope: "storage.type.function.arrow",
      settings: {
        foreground: tokenColors.buttonHighlight,
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
        foreground: tokenColors.keyword_storage,
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
        foreground: tokenColors.buttonHighlight
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
        foreground: tokenColors.menuHighlight
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
        foreground: tokenColors.buttonHighlight
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
      scope: ["string.other.link.title", "string.other.link.description"],
      settings: {
        foreground: tokenColors.buttonHighlight
      }
    },
    {
      scope: "string.other.link.description.title",
      settings: {
        foreground: tokenColors.menuHighlight
      }
    },
    {
      scope: [
        "string.regexp punctuation.definition.string.begin",
        "string.regexp punctuation.definition.string.end"
      ],
      settings: {
        foreground: tokenColors.punctuation
      }
    },
    {
      scope: ["string.other.ref", "string.other.restructuredtext.ref"],
      settings: {
        foreground: tokenColors.menuHighlight
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
        foreground: tokenColors.buttonHighlight
      }
    },
    {
      scope: "support.constant",
      settings: {
        foreground: tokenColors.menuHighlight
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
        foreground: tokenColors.menuHighlight
      }
    },
    {
      scope: ["support.type", "entity.name.type.object.console"],
      settings: {
        foreground: tokenColors.menuHighlight,
        fontStyle: "italic"
      }
    },
    {
      scope: "support.variable",
      settings: {
        foreground: tokenColors.menuHighlight
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
        foreground: tokenColors.menuHighlight
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
      scope: ["variable"],
      settings: {
        foreground: tokenColors.field_name,
        fontStyle: ""
      }
    },
    {
      scope: ["variable.parameter", "parameters variable.function"],
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
      scope: ["variable.other.class"],
      settings: {
        foreground: tokenColors.field_name
      }
    },
    {
      scope: [
        "variable.other.class",
        "variable.other.object.property",
        "variable.other.property.gdscript"
      ],
      settings: {
        foreground: tokenColors.plain
      }
    },
    {
      scope: "variable.other.constant",
      settings: {
        foreground: tokenColors.field_name
      }
    },
    {
      scope: "variable.other.member",
      settings: {
        foreground: tokenColors.field_name
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
        foreground: tokenColors.property
      }
    },
    {
      scope: "variable.function",
      settings: {
        foreground: tokenColors.menuHighlight
      }
    },
    {
      scope: ["variable.other.substitution", "heading.2.markdown"],
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
        foreground: tokenColors.menuHighlight
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
        foreground: tokenColors.field_name_declaration
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
        foreground: tokenColors.field_name_declaration
      }
    },
    {
      scope: ["variable.other", "variable.other.object"],
      settings: {
        foreground: tokenColors.field_name
      }
    },
    {
      scope: ["entity.name.variable.local", "entity.name.variable.field"],
      settings: {
        foreground: tokenColors.field_name_declaration
      }
    },
    {
      scope: ["support.type.property-name"],
      settings: {
        foreground: tokenColors.property
      }
    },
    {
      scope: [
        "entity.name.class",
        "entity.name.type.class",
        "entity.name.type.struct"
      ],
      settings: {
        foreground: tokenColors.type_declaration
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
        foreground: tokenColors.method,
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
        foreground: tokenColors.property
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
        foreground: tokenColors.base_value
      }
    },
    {
      scope: [
        "punctuation.definition.string.begin",
        "punctuation.definition.string.end"
      ],
      settings: {
        foreground: tokenColors.plain
      }
    },
    {
      scope: ["keyword.operator", "punctuation.accessor"],
      settings: {
        foreground: tokenColors.punctuation
      }
    },
    {
      scope: [
        "keyword.type",
        "keyword.operator.expression.new",
        "storage.type.var.gdscript"
      ],
      settings: {
        foreground: tokenColors.keyword_base_types,
        fontStyle: "italic"
      }
    },
    {
      scope: ["keyword.operator"],
      settings: {
        foreground: tokenColors.buttonHighlight,
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
        foreground: tokenColors.buttonHighlight
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
}

// src/theme/tokens/index.ts
function tokens2(ctx) {
  return [...full(ctx)];
}

// src/theme/tokencolors.ts
var getTokenColors = (ctx) => {
  return tokens2(ctx);
};

// src/theme/index.ts
var defaultOptions = {
  overrideTodoTree: false
  // TODO: genereate these options
  // bracketMode: "rainbow",
  // boldKeywords: true,
  // italicComments: true,
  // italicKeywords: true,
};
var compileTheme = (options) => {
  return {
    name: "Gruvvy Watermelon",
    type: "dark",
    colors: getUiColors(palette),
    semanticHighlighting: false,
    semanticTokenColors: {},
    tokenColors: getTokenColors(palette)
  };
};

// src/utils.ts
var filterObject = (object, function_) => {
  return Object.fromEntries(
    Object.entries(object).filter(
      (element, index, array) => function_(element, index, array)
    )
  );
};
var LOG = import_vscode.window.createOutputChannel(
  "Gruvvy Watermelon Theme",
  { log: true }
);
var writeThemeFile = async (uri, data) => {
  return import_vscode.workspace.fs.writeFile(uri, Buffer.from(JSON.stringify(data, void 0, 2))).then(
    () => {
    },
    (error) => {
      import_vscode.window.showErrorMessage(error.message);
    }
  );
};
var updateTheme = async (options, trigger) => {
  const promise = async () => {
    const theme = compileTheme(options);
    const themeUri = import_vscode.Uri.file(
      "./themes/Gruvvy-Watermelon-color-theme.json"
    );
    return writeThemeFile(themeUri, theme);
  };
  Promise.resolve(promise).then(() => {
    promptToReload(trigger);
  }).catch((error) => {
    import_vscode.window.showErrorMessage(
      "Failed to save re-compiled theme: \n" + error.message
    );
  });
};
function promptToReload(trigger) {
  const message = `Gruvvy Watermelon: ${trigger} - Reload required.`;
  const action = "Reload window";
  import_vscode.window.showInformationMessage(message, action).then((selectedAction) => {
    if (selectedAction === action) {
      import_vscode.commands.executeCommand("workbench.action.reloadWindow");
    }
  });
}
var isFreshInstall = async (context) => {
  LOG.info("Checking if catppuccin is installed for the first time.");
  const flagUri = import_vscode.Uri.file(context.asAbsolutePath("themes/.flag"));
  if (await fileExists(flagUri)) {
    LOG.info("Catppuccin has been installed before.");
    return false;
  } else {
    LOG.info("Catppuccin is installed for the first time!");
    return import_vscode.workspace.fs.writeFile(flagUri, Buffer.from("")).then(
      () => true,
      () => "error"
    );
  }
};
var fileExists = async (uri) => {
  return import_vscode.workspace.fs.stat(uri).then(
    () => true,
    () => false
  );
};
var getConfiguration = () => {
  const config = import_vscode.workspace.getConfiguration("gruvvy-Watermelon");
  const options = {
    overrideTodoTree: config.get("overrideTodoTree")
    // bracketMode: config.get<"rainbow" | "nvim" | "off">("bracketMode"),
    // boldkeywords: config.get<boolean>("boldkeywords"),
    // italicComments: config.get<boolean>("italicComments"),
    // italicKeywords: config.get<boolean>("italicKeywords"),
  };
  return {
    ...defaultOptions,
    ...filterObject(options, ([, value]) => value !== void 0)
  };
};

// src/main.ts
var activate = async (context) => {
  const config = getConfiguration();
  if (await isFreshInstall(context) === true) {
    updateTheme(config, "Update detected" /* FRESH_INSTALL */);
  }
  context.subscriptions.push(
    import_vscode2.workspace.onDidChangeConfiguration((evt) => {
      if (evt.affectsConfiguration("gruvvy-Watermelon")) {
        updateTheme(config, "Configuration changed" /* CONFIG_CHANGE */);
      }
    })
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  activate
});
//# sourceMappingURL=main.cjs.map