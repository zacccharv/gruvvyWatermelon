const { colors } = require('./colors')
const { tokenColors } = require('./colors')

function getTheme({ theme, name }) {

    function themes(options) {
        return options[theme]
    }

    return {
        name: name,
        "colors": {
            "editorBracketHighlight.foreground1": tokenColors.buttonHighlight,
            "editorBracketHighlight.foreground2": colors.color_3,
            "editorBracketHighlight.foreground3": tokenColors.menuHighlight,
            "editorBracketHighlight.foreground4": colors.color_2,
            "errorLens.errorForeground": tokenColors.errorColor,
            "errorLens.errorBackground": tokenColors.errorColor + "19",
            "errorLens.warningForeground": tokenColors.warnColor,
            "errorLens.warningBackground": tokenColors.warnColor + "19",
            "errorLens.infoForeground": tokenColors.infoColor,
            "errorLens.infoMessageBackground": tokenColors.infoColor + "19",
            "errorLens.hintForeground": tokenColors.hintColor,
            "errorLens.hintBackground": tokenColors.hintColor + "19",
            "activityBar.activeBorder": tokenColors.menuHighlight,
            "activityBar.activeFocusBorder": tokenColors.menuHighlight,
            "activityBar.background": colors.dark_hard,
            "activityBar.border": colors.dark_hard,
            "activityBar.foreground": colors.light_hard,
            "activityBar.inactiveForeground": colors.light_0,
            "activityBarBadge.background": colors.color_2,
            "activityBarBadge.foreground": colors.dark_normal,
            "badge.background": tokenColors.infoColor,
            "badge.foreground": colors.dark_normal,
            "breadcrumb.activeSelectionForeground": colors.light_hard,
            "breadcrumb.focusForeground": colors.light_hard,
            "breadcrumb.foreground": colors.light_0,
            "button.background": colors.color_2,
            "button.foreground": colors.dark_normal,
            "button.hoverBackground": tokenColors.menuHighlight,
            "checkbox.background": colors.dark_normal,
            "checkbox.border": colors.dark_1,
            "checkbox.foreground": colors.color_3,
            "debugToolBar.background": colors.dark_normal,
            "diffEditor.insertedTextBackground": tokenColors.menuHighlight + "20",
            "diffEditor.removedTextBackground": tokenColors.buttonHighlight + "26",
            "dropdown.background": colors.dark_normal,
            "dropdown.border": colors.dark_1,
            "dropdown.foreground": colors.light_hard,
            "editor.background": colors.dark_normal,
            "editor.findMatchBackground": tokenColors.buttonHighlight + "40",
            "editor.findMatchHighlightBackground": colors.color_5 + "40",
            "editor.findRangeHighlightBackground": colors.color_5 + "40",
            "editor.foreground": colors.light_hard,
            "editor.hoverHighlightBackground": tokenColors.menuHighlight + "36",
            "editor.lineHighlightBackground": colors.dark_0 + "e0",
            "editor.lineHighlightBorder": colors.dark_0 + "00",
            "editor.rangeHighlightBackground": colors.color_5 + "40",
            "editor.selectionBackground": colors.dark_0 + "f0",
            "editor.selectionHighlightBackground": colors.dark_0 + "00",
            "editor.snippetFinalTabstopHighlightBackground": colors.color_5 + "30",
            "editor.snippetFinalTabstopHighlightBorder": colors.dark_normal,
            "editor.snippetTabstopHighlightBackground": colors.dark_1 + "a0",
            "editor.symbolHighlightBackground": tokenColors.menuHighlight + "38",
            "editor.wordHighlightBackground": colors.dark_0 + "c0",
            "editor.wordHighlightStrongBackground": colors.dark_0 + "c0",
            "editorBracketMatch.background": colors.dark_1,
            "editorBracketMatch.border": colors.dark_normal + "00",
            "editorCodeLens.foreground": colors.light_0,
            "editorCursor.foreground": colors.light_hard,
            "editorError.foreground": tokenColors.buttonHighlight,
            "editorGroup.border": colors.dark_hard,
            "editorGroup.dropBackground": colors.dark_1 + "60",
            "editorGroupHeader.noTabsBackground": colors.dark_normal,
            "editorGroupHeader.tabsBackground": colors.dark_normal,
            "editorGutter.addedBackground": tokenColors.menuHighlight + "40",
            "editorGutter.background": colors.dark_normal + "00",
            "editorGutter.deletedBackground": tokenColors.buttonHighlight + "40",
            "editorGutter.modifiedBackground": tokenColors.menuHighlight + "40",
            "editorHint.foreground": tokenColors.menuHighlight,
            "editorHoverWidget.background": colors.dark_0,
            "editorHoverWidget.border": colors.dark_1,
            "editorIndentGuide.activeBackground1": colors.dark_1,
            "editorIndentGuide.background1": colors.dark_0,
            "editorInfo.foreground": tokenColors.menuHighlight,
            "editorLightBulb.foreground": colors.color_3,
            "editorLightBulbAutoFix.foreground": tokenColors.menuHighlight,
            "editorLineNumber.activeForeground": colors.light_hard,
            "editorLineNumber.foreground": colors.light_0,
            "editorLink.activeForeground": tokenColors.menuHighlight,
            "editorMarkerNavigation.background": colors.dark_0,
            "editorMarkerNavigationError.background": tokenColors.buttonHighlight,
            "editorMarkerNavigationInfo.background": tokenColors.menuHighlight,
            "editorMarkerNavigationWarning.background": colors.color_4,
            "editorOverviewRuler.addedForeground": tokenColors.menuHighlight + "80",
            "editorOverviewRuler.border": colors.dark_normal + "00",
            "editorOverviewRuler.commonContentForeground": colors.light_0,
            "editorOverviewRuler.currentContentForeground": tokenColors.menuHighlight + "a0",
            "editorOverviewRuler.deletedForeground": tokenColors.buttonHighlight + "80",
            "editorOverviewRuler.errorForeground": tokenColors.errorColor,
            "editorOverviewRuler.findMatchForeground": tokenColors.menuHighlight + "80",
            "editorOverviewRuler.incomingContentForeground": tokenColors.menuHighlight + "a0",
            "editorOverviewRuler.infoForeground": tokenColors.menuHighlight,
            "editorOverviewRuler.modifiedForeground": tokenColors.menuHighlight + "80",
            "editorOverviewRuler.rangeHighlightForeground": tokenColors.menuHighlight + "80",
            "editorOverviewRuler.selectionHighlightForeground": tokenColors.menuHighlight + "80",
            "editorOverviewRuler.warningForeground": colors.color_4,
            "editorOverviewRuler.wordHighlightForeground": colors.light_0 + "80",
            "editorOverviewRuler.wordHighlightStrongForeground": colors.light_0 + "60",
            "editorRuler.foreground": colors.dark_1,
            "editorSuggestWidget.background": colors.dark_0,
            "editorSuggestWidget.border": colors.dark_0,
            "editorSuggestWidget.foreground": colors.light_hard,
            "editorSuggestWidget.highlightForeground": tokenColors.menuHighlight,
            "editorSuggestWidget.selectedBackground": colors.dark_1,
            "editorUnnecessaryCode.border": colors.light_0,
            "editorUnnecessaryCode.opacity": colors.light_hard,
            "editorWarning.foreground": colors.color_4,
            "editorWhitespace.foreground": colors.light_0,
            "editorWidget.background": colors.dark_normal,
            "editorWidget.border": colors.dark_1,
            "errorForeground": tokenColors.buttonHighlight,
            "extensionBadge.remoteBackground": tokenColors.menuHighlight,
            "extensionBadge.remoteForeground": colors.dark_normal,
            "extensionButton.prominentBackground": tokenColors.menuHighlight,
            "extensionButton.prominentForeground": colors.dark_normal,
            "extensionButton.prominentHoverBackground": tokenColors.menuHighlight,
            "focusBorder": colors.dark_1 + "00",
            "foreground": colors.light_hard,
            "gitDecoration.addedResourceForeground": tokenColors.menuHighlight + "80",
            "gitDecoration.conflictingResourceForeground": colors.color_5 + "90",
            "gitDecoration.deletedResourceForeground": colors.color_3,
            "gitDecoration.ignoredResourceForeground": colors.dark_1,
            "gitDecoration.modifiedResourceForeground": tokenColors.menuHighlight + "d1",
            "gitDecoration.submoduleResourceForeground": colors.color_3 + "d1",
            "gitDecoration.untrackedResourceForeground": colors.color_4 + "d1",
            "icon.foreground": tokenColors.menuHighlight,
            "input.background": colors.dark_normal + "00",
            "input.border": colors.dark_1,
            "input.foreground": colors.light_hard,
            "input.placeholderForeground": colors.light_0,
            "inputOption.activeBorder": tokenColors.menuHighlight,
            "inputValidation.errorBackground": colors.dark_0,
            "inputValidation.errorBorder": tokenColors.buttonHighlight,
            "inputValidation.errorForeground": tokenColors.buttonHighlight,
            "inputValidation.infoBackground": colors.dark_0,
            "inputValidation.infoBorder": tokenColors.menuHighlight,
            "inputValidation.infoForeground": tokenColors.menuHighlight,
            "inputValidation.warningBackground": colors.dark_0,
            "inputValidation.warningBorder": colors.color_4,
            "inputValidation.warningForeground": colors.color_4,
            "list.activeSelectionBackground": colors.dark_normal + "e0",
            "list.activeSelectionForeground": colors.light_hard,
            "list.dropBackground": colors.dark_0 + "80",
            "list.errorForeground": tokenColors.buttonHighlight,
            "list.focusBackground": colors.dark_1 + "80",
            "list.focusForeground": colors.light_hard,
            "list.highlightForeground": tokenColors.menuHighlight,
            "list.hoverBackground": colors.dark_hard + "00",
            "list.hoverForeground": colors.light_hard,
            "list.inactiveFocusBackground": colors.dark_1 + "68",
            "list.inactiveSelectionBackground": colors.dark_normal + "c8",
            "list.inactiveSelectionForeground": colors.light_0,
            "list.invalidItemForeground": tokenColors.buttonHighlight + "80",
            "list.warningForeground": colors.color_4,
            "menu.background": colors.dark_hard,
            "menu.foreground": colors.light_hard,
            "menu.selectionBackground": colors.dark_normal,
            "menu.selectionForeground": colors.light_hard,
            "menubar.selectionBackground": colors.dark_normal,
            "menubar.selectionBorder": colors.dark_normal,
            "merge.border": colors.dark_normal + "00",
            "merge.currentContentBackground": tokenColors.menuHighlight + "1a",
            "merge.currentHeaderBackground": tokenColors.menuHighlight + "30",
            "merge.incomingContentBackground": tokenColors.menuHighlight + "1a",
            "merge.incomingHeaderBackground": tokenColors.menuHighlight + "30",
            "minimap.errorHighlight": tokenColors.buttonHighlight + "70",
            "minimap.findMatchHighlight": tokenColors.menuHighlight + "40",
            "minimap.selectionHighlight": colors.dark_1 + "f0",
            "minimap.warningHighlight": colors.color_4 + "50",
            "minimapGutter.addedBackground": tokenColors.menuHighlight + "a0",
            "minimapGutter.deletedBackground": tokenColors.buttonHighlight + "a0",
            "minimapGutter.modifiedBackground": tokenColors.menuHighlight + "a0",
            "notificationCenterHeader.background": colors.dark_0,
            "notificationCenterHeader.foreground": colors.light_hard,
            "notificationLink.foreground": tokenColors.menuHighlight,
            "notifications.background": colors.dark_normal,
            "notifications.foreground": colors.light_hard,
            "notificationsErrorIcon.foreground": tokenColors.buttonHighlight,
            "notificationsInfoIcon.foreground": tokenColors.menuHighlight,
            "notificationsWarningIcon.foreground": colors.color_4,
            "panel.background": colors.dark_0,
            "panel.border": colors.dark_0,
            "panelInput.border": colors.dark_1,
            "panelTitle.activeBorder": tokenColors.menuHighlight,
            "panelTitle.activeForeground": colors.light_soft,
            "panelTitle.inactiveForeground": colors.light_0,
            "peekView.border": colors.dark_0,
            "peekViewEditor.background": colors.dark_soft,
            "peekViewEditor.matchHighlightBackground": tokenColors.menuHighlight + "28",
            "peekViewEditorGutter.background": colors.dark_soft,
            "peekViewResult.background": colors.dark_0,
            "peekViewResult.fileForeground": colors.light_hard,
            "peekViewResult.matchHighlightBackground": colors.color_3 + "50",
            "peekViewResult.selectionBackground": tokenColors.menuHighlight + "28",
            "peekViewTitle.background": colors.dark_soft,
            "peekViewTitleDescription.foreground": colors.light_0,
            "peekViewTitleLabel.foreground": colors.light_hard,
            "pickerGroup.border": colors.light_hard + "1a",
            "problemsErrorIcon.foreground": tokenColors.buttonHighlight,
            "problemsInfoIcon.foreground": tokenColors.menuHighlight,
            "problemsWarningIcon.foreground": colors.color_4,
            "progressBar.background": tokenColors.menuHighlight,
            "quickInputList.focusBackground": colors.dark_0 + "f0",
            "scrollbar.shadow": colors.dark_hard + "70",
            "scrollbarSlider.activeBackground": colors.light_0 + "b0",
            "scrollbarSlider.background": colors.light_0 + "70",
            "scrollbarSlider.hoverBackground": colors.light_0 + "90",
            "selection.background": colors.dark_1 + "e0",
            "settings.checkboxBackground": colors.dark_normal,
            "settings.checkboxBorder": colors.dark_1,
            "settings.checkboxForeground": colors.color_3,
            "settings.dropdownBackground": colors.dark_normal,
            "settings.dropdownBorder": colors.dark_1,
            "settings.dropdownForeground": tokenColors.menuHighlight,
            "settings.headerForeground": colors.light_hard,
            "settings.numberInputBackground": colors.dark_normal,
            "settings.numberInputBorder": colors.dark_1,
            "settings.numberInputForeground": colors.color_5,
            "settings.textInputBackground": colors.dark_normal,
            "settings.textInputBorder": colors.dark_1,
            "settings.textInputForeground": tokenColors.menuHighlight,
            "sideBar.background": colors.dark_hard,
            "sideBar.foreground": colors.light_0,
            "sideBarSectionHeader.background": colors.dark_normal + "00",
            "sideBarSectionHeader.foreground": colors.light_0,
            "sideBarTitle.foreground": colors.light_0,
            "statusBar.background": tokenColors.buttonHighlight,
            "statusBar.background": tokenColors.secondaryButtonHighlight,
            "statusBar.border": colors.dark_hard,
            "statusBar.debuggingBackground": tokenColors.buttonHighlight,
            "statusBar.debuggingBorder": tokenColors.buttonHighlight,
            "statusBar.debuggingForeground": colors.dark_normal,
            "statusBar.foreground": colors.dark_normal,
            "statusBar.noFolderBackground": colors.color_2,
            "statusBar.noFolderBorder": colors.dark_hard,
            "statusBar.noFolderForeground": colors.dark_normal,
            "statusBarItem.activeBackground": colors.dark_1 + "a0",
            "statusBarItem.hoverBackground": tokenColors.menuHighlight,
            "statusBarItem.remoteBackground": tokenColors.buttonHighlight,
            "statusBarItem.remoteForeground": colors.dark_normal,
            "symbolIcon.arrayForeground": colors.light_hard,
            "symbolIcon.booleanForeground": colors.color_5,
            "symbolIcon.classForeground": tokenColors.class_name,
            "symbolIcon.colorForeground": colors.light_hard,
            "symbolIcon.constantForeground": colors.color_5,
            "symbolIcon.constructorForeground": tokenColors.menuHighlight,
            "symbolIcon.enumeratorForeground": colors.color_5,
            "symbolIcon.enumeratorMemberForeground": colors.color_5,
            "symbolIcon.eventForeground": tokenColors.menuHighlight,
            "symbolIcon.fieldForeground": tokenColors.field_name,
            "symbolIcon.fileForeground": colors.light_hard,
            "symbolIcon.folderForeground": colors.light_hard,
            "symbolIcon.functionForeground": tokenColors.method,
            "symbolIcon.interfaceForeground": tokenColors.menuHighlight,
            "symbolIcon.keyForeground": tokenColors.menuHighlight,
            "symbolIcon.keywordForeground": tokenColors.buttonHighlight,
            "symbolIcon.methodForeground": tokenColors.method,
            "symbolIcon.moduleForeground": tokenColors.buttonHighlight,
            "symbolIcon.namespaceForeground": tokenColors.buttonHighlight,
            "symbolIcon.nullForeground": colors.color_5,
            "symbolIcon.numberForeground": colors.color_5,
            "symbolIcon.objectForeground": tokenColors.menuHighlight,
            "symbolIcon.operatorForeground": tokenColors.buttonHighlight,
            "symbolIcon.packageForeground": tokenColors.buttonHighlight,
            "symbolIcon.propertyForeground": tokenColors.property,
            "symbolIcon.referenceForeground": tokenColors.menuHighlight,
            "symbolIcon.snippetForeground": colors.light_hard,
            "symbolIcon.stringForeground": colors.color_4,
            "symbolIcon.structForeground": tokenColors.menuHighlight,
            "symbolIcon.textForeground": colors.light_hard,
            "symbolIcon.typeParameterForeground": colors.color_3,
            "symbolIcon.unitForeground": colors.light_hard,
            "symbolIcon.variableForeground": tokenColors.class_name,
            "tab.activeBackground": colors.dark_normal,
            "tab.activeBorder": tokenColors.hintColor,
            "tab.activeForeground": colors.light_hard,
            "tab.border": colors.dark_hard,
            "tab.hoverBackground": colors.dark_normal,
            "tab.inactiveBackground": colors.dark_normal,
            "tab.inactiveForeground": colors.light_0,
            "tab.unfocusedActiveBorder": colors.dark_hard,
            "tab.unfocusedActiveForeground": colors.light_hard,
            "tab.unfocusedInactiveForeground": colors.light_0,
            "terminal.ansiBlack": colors.dark_hard,
            "terminal.ansiBlue": tokenColors.menuHighlight,
            "terminal.ansiBrightBlack": colors.dark_0,
            "terminal.ansiBrightBlue": tokenColors.menuHighlight,
            "terminal.ansiBrightCyan": colors.color_3,
            "terminal.ansiBrightGreen": tokenColors.menuHighlight,
            "terminal.ansiBrightMagenta": colors.color_5,
            "terminal.ansiBrightRed": tokenColors.buttonHighlight,
            "terminal.ansiBrightWhite": colors.light_hard,
            "terminal.ansiBrightYellow": colors.color_4,
            "terminal.ansiCyan": colors.color_3,
            "terminal.ansiGreen": tokenColors.menuHighlight,
            "terminal.ansiMagenta": colors.color_5,
            "terminal.ansiRed": tokenColors.buttonHighlight,
            "terminal.ansiWhite": colors.light_hard,
            "terminal.ansiYellow": colors.color_4,
            "terminal.foreground": colors.light_hard,
            "terminalCursor.foreground": colors.light_hard,
            "textBlockQuote.background": colors.dark_0,
            "textBlockQuote.border": colors.light_0,
            "textCodeBlock.background": colors.dark_0,
            "textLink.activeForeground": tokenColors.menuHighlight + "a0",
            "textLink.foreground": tokenColors.menuHighlight,
            "titleBar.activeBackground": colors.dark_hard,
            "titleBar.activeForeground": colors.light_hard,
            "titleBar.border": colors.dark_hard,
            "titleBar.inactiveBackground": colors.dark_hard,
            "titleBar.inactiveForeground": colors.light_0,
            "tree.indentGuidesStroke": colors.light_0,
            "widget.shadow": colors.dark_hard + "70",
            "activityBar.activeBorder": tokenColors.menuHighlight,
        },
        "tokenColors": [
            {
                "scope": [
                    "comment",
                    "comment keyword",
                    "comment markup.underline.link",
                    "comment string",
                    "comment punctuation.definition",
                    "comment punctuation",
                    "comment text"
                ],
                "settings": {
                    "foreground": colors.light_0
                }
            },
            {
                "scope": "comment storage.type",
                "settings": {
                    "foreground": colors.light_0
                }
            },
            {
                "scope": "comment entity.name.type",
                "settings": {
                    "foreground": colors.light_0
                }
            },
            {
                "scope": [
                    "comment variable",
                    "comment variable.other"
                ],
                "settings": {
                    "foreground": colors.light_0
                }
            },
            {
                "scope": "comment keyword.codetag.notation",
                "settings": {
                    "foreground": colors.color_5
                }
            },
            {
                "scope": "comment.git-status.header.remote",
                "settings": {
                    "foreground": tokenColors.buttonHighlight
                }
            },
            {
                "scope": "comment.git-status.header.local",
                "settings": {
                    "foreground": tokenColors.menuHighlight
                }
            },
            {
                "scope": "comment.other.git-status.head",
                "settings": {
                    "foreground": colors.light_hard
                }
            },
            {
                "scope": "constant",
                "settings": {
                    "foreground": colors.color_5
                }
            },
            {
                "scope": "constant.other",
                "settings": {
                    "foreground": colors.light_hard
                }
            },
            {
                "scope": "constant.other.php",
                "settings": {
                    "foreground": colors.color_5
                }
            },
            {
                "scope": "constant.other.property",
                "settings": {
                    "foreground": colors.color_5
                }
            },
            {
                "scope": "constant.other.citation.latex",
                "settings": {
                    "foreground": colors.color_5
                }
            },
            {
                "scope": "constant.other.color",
                "settings": {
                    "foreground": colors.color_5
                }
            },
            {
                "scope": "constant.other.character-class.escape",
                "settings": {
                    "foreground": colors.color_5
                }
            },
            {
                "scope": "constant.other.key",
                "settings": {
                    "foreground": colors.color_5
                }
            },
            {
                "scope": "constant.other.symbol",
                "settings": {
                    "foreground": colors.color_3
                }
            },
            {
                "scope": "constant.numeric",
                "settings": {
                    "foreground": colors.color_5
                }
            },
            {
                "scope": "constant.language",
                "settings": {
                    "foreground": tokenColors.value
                }
            },
            {
                "scope": "constant.character.escape",
                "settings": {
                    "foreground": colors.color_5
                }
            },
            {
                "scope": "constant.numeric.line-number.find-in-files",
                "settings": {
                    "foreground": colors.light_0
                }
            },
            {
                "scope": "constant.numeric.line-number.match.find-in-files",
                "settings": {
                    "foreground": colors.color_4
                }
            },
            {
                "scope": "entity.name.function.member.static",
                "settings": {
                    "foreground": colors.light_hard
                }
            },
            {
                "scope": [
                    "entity.name.type.class.templated",
                    "entity.name.type.class.generic",
                    "entity.name.type.namespace",
                    "entity.name.class",
                ],
                "settings": {
                    "foreground": tokenColors.namespace
                }
            },
            {
                "scope": "entity.name.label",
                "settings": {
                    "foreground": colors.color_5
                }
            },
            {
                "scope": "entity.name.function.preprocessor",
                "settings": {
                    "foreground": tokenColors.menuHighlight
                }
            },
            {
                "scope": "entity.name.constant",
                "settings": {
                    "foreground": colors.color_5
                }
            },
            {
                "scope": "entity.name.namespace",
                "settings": {
                    "foreground": colors.light_hard
                }
            },
            {
                "scope": "entity.other.inherited-class",
                "settings": {
                    "foreground": tokenColors.menuHighlight,
                    "fontStyle": "italic"
                }
            },
            {
                "scope": [
                    "entity.name.tag",
                    "entity.name.tag.js.jsx support.class.component.js.jsx",
                    "entity.name.tag support.class.component"
                ],
                "settings": {
                    "foreground": tokenColors.buttonHighlight
                }
            },
            {
                "scope": "entity.name.function.operator",
                "settings": {
                    "foreground": tokenColors.buttonHighlight
                }
            },
            {
                "scope": [
                    "entity.name.type",
                    "entity.name.type.class.reference",
                    "entity.name.type.class.value"
                ],
                "settings": {
                    "foreground": tokenColors.type
                }
            },
            {
                "scope": "entity.other.attribute-name",
                "settings": {
                    "foreground": tokenColors.menuHighlight,
                    "fontStyle": "italic"
                }
            },
            {
                "scope": [
                    "entity.other.attribute-name.class.css",
                    "entity.other.attribute-name.parent-selector-suffix.css",
                    "entity.other.attribute-name.parent-selector-suffix.css punctuation.definition.entity.css",
                    "entity.other.attribute-name.css"
                ],
                "settings": {
                    "foreground": tokenColors.menuHighlight
                }
            },
            {
                "scope": "entity.other.attribute-name.id.css",
                "settings": {
                    "foreground": colors.color_3
                }
            },
            {
                "scope": [
                    "entity.other.attribute-name.pseudo-class.css",
                    "entity.other.pseudo-class.css",
                    "entity.other.pseudo-element.css"
                ],
                "settings": {
                    "foreground": tokenColors.menuHighlight,
                    "fontStyle": "italic"
                }
            },
            {
                "scope": [
                    "entity.name.function",
                    "support.function"
                ],
                "settings": {
                    "foreground": tokenColors.menuHighlight
                }
            },
            {
                "scope": "entity.other.git-status.hex",
                "settings": {
                    "foreground": colors.color_5
                }
            },
            {
                "scope": "entity.other.jinja2.delimiter",
                "settings": {
                    "foreground": colors.light_0
                }
            },
            {
                "scope": "entity.name.operator.custom-literal",
                "settings": {
                    "foreground": colors.light_hard
                }
            },
            {
                "scope": "entity.name.operator.custom-literal.string",
                "settings": {
                    "foreground": colors.color_4
                }
            },
            {
                "scope": "entity.name.operator.custom-literal.number",
                "settings": {
                    "foreground": colors.color_5
                }
            },
            {
                "scope": "entity.name.type.rust",
                "settings": {
                    "foreground": tokenColors.menuHighlight
                }
            },
            {
                "scope": "entity.name.lifetime.rust",
                "settings": {
                    "foreground": tokenColors.buttonHighlight
                }
            },
            {
                "scope": "invalid",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "keyword",
                "settings": {
                    "foreground": tokenColors.keyword_storage
                }
            },
            {
                "scope": "keyword.control",
                "settings": {
                    "foreground": tokenColors.keyword_flow,
                    "fontStyle": ""
                }
            },
            {
                "scope": [
                    "keyword.operator",
                    "keyword.operator.member",
                ],
                "settings": {
                    "foreground": colors.color_3
                }
            },
            {
                "scope": "keyword.other.substitution",
                "settings": {
                    "foreground": colors.light_0
                }
            },
            {
                "scope": [
                    "keyword.other.template.begin",
                    "keyword.other.template.end"
                ],
                "settings": {
                    "foreground": tokenColors.buttonHighlight
                }
            },
            {
                "scope": [
                    "keyword.operator.heading.restructuredtext",
                    "keyword.operator.table.row.restructuredtext keyword.operator.table.data.restructuredtext"
                ],
                "settings": {
                    "foreground": colors.light_0
                }
            },
            {
                "scope": [
                    "keyword.other.fn.rust",
                    "keyword.other.rust",
                    "keyword.other.unsafe.rust",
                    "keyword.other.where.rust"
                ],
                "settings": {
                    "foreground": tokenColors.menuHighlight
                }
            },
            {
                "scope": [
                    "keyword.control.rust",
                    "keyword.operator.misc.rust"
                ],
                "settings": {
                    "foreground": tokenColors.buttonHighlight
                }
            },
            {
                "scope": "markup.italic",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "markup.bold",
                "settings": {
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "markup.heading",
                "settings": {
                    "foreground": colors.color_4
                }
            },
            {
                "scope": "markup.raw",
                "settings": {
                    "foreground": colors.color_3
                }
            },
            {
                "scope": "markup.underline",
                "settings": {
                    "fontStyle": "underline"
                }
            },
            {
                "scope": "markup.underline.link",
                "settings": {
                    "foreground": tokenColors.menuHighlight
                }
            },
            {
                "scope": [
                    "markup.inserted",
                    "markup.inserted punctuation.definition.inserted"
                ],
                "settings": {
                    "foreground": tokenColors.menuHighlight
                }
            },
            {
                "scope": [
                    "markup.deleted",
                    "markup.deleted punctuation.definition.deleted"
                ],
                "settings": {
                    "foreground": colors.color_3
                }
            },
            {
                "scope": [
                    "markup.changed",
                    "markup.changed punctuation.definition.changed"
                ],
                "settings": {
                    "foreground": colors.color_4
                }
            },
            {
                "scope": [
                    "markup.ignored",
                    "markup.ignored punctuation.definition.ignored"
                ],
                "settings": {
                    "foreground": colors.light_0
                }
            },
            {
                "scope": "markup.untracked",
                "settings": {
                    "foreground": colors.light_0
                }
            },
            {
                "scope": "markup.quote",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": [
                    "meta.brace.round",
                    "meta.brace.square",
                    "meta.brace.curly",
                    "meta.delimiter.comma.js",
                    "meta.function-call.without-arguments.js",
                    "meta.function-call.method.without-arguments.js"
                ],
                "settings": {
                    "foreground": colors.light_0
                }
            },
            {
                "scope": [
                    "meta.function-call.python",
                    "meta.function-call.arguments.python meta.function-call.python"
                ],
                "settings": {
                    "foreground": tokenColors.menuHighlight
                }
            },
            {
                "scope": "meta.function-call.python meta.function-call.arguments.python",
                "settings": {
                    "foreground": colors.light_hard
                }
            },
            {
                "scope": "meta.instance.constructor",
                "settings": {
                    "foreground": tokenColors.menuHighlight
                }
            },
            {
                "scope": [
                    "meta.attribute-with-value.class string",
                    "meta.attribute.class.html string"
                ],
                "settings": {
                    "foreground": tokenColors.menuHighlight
                }
            },
            {
                "scope": [
                    "meta.attribute-with-value.id string",
                    "meta.attribute.id.html string"
                ],
                "settings": {
                    "foreground": colors.color_3
                }
            },
            {
                "scope": [
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
                "settings": {
                    "foreground": colors.light_hard
                }
            },
            {
                "scope": [
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
                "settings": {
                    "foreground": colors.color_4
                }
            },
            {
                "scope": "meta.object.member",
                "settings": {
                    "foreground": colors.light_hard
                }
            },
            {
                "scope": "meta.property-list.css variable.other",
                "settings": {
                    "foreground": colors.color_3
                }
            },
            {
                "scope": [
                    "entity.name.constant.preprocessor",
                    "meta.preprocessor"
                ],
                "settings": {
                    "foreground": colors.color_5
                }
            },
            {
                "scope": "meta.diff.git-diff.header",
                "settings": {
                    "foreground": colors.color_4
                }
            },
            {
                "scope": "meta.type_params.rust",
                "settings": {
                    "foreground": colors.light_hard
                }
            },
            {
                "scope": [
                    "meta.attribute.rust",
                    "variable.language.rust"
                ],
                "settings": {
                    "foreground": colors.color_3
                }
            },
            {
                "scope": [
                    "punctuation.definition.interpolation",
                ],
                "settings": {
                    "foreground": tokenColors.punctuation
                }
            },
            {
                "scope": "punctuation",
                "settings": {
                    "foreground": tokenColors.punctuation
                }
            },
            {
                "scope": [
                    "punctuation.definition.tag",
                    "punctuation.definition.tag source",
                    "punctuation.definition.group.begin.ruby",
                    "punctuation.definition.group.end.ruby",
                    "punctuation.definition.group.begin.css",
                    "punctuation.definition.group.end.css",
                    "punctuation.definition.string.end.html source.css"
                ],
                "settings": {
                    "foreground": tokenColors.punctuation
                }
            },
            {
                "scope": "punctuation.definition.group",
                "settings": {
                    "foreground": colors.light_hard
                }
            },
            {
                "scope": "punctuation.definition.comment",
                "settings": {
                    "foreground": colors.light_0
                }
            },
            {
                "scope": [
                    "punctuation.definition.variable",
                    "punctuation.definition.keyword.scss",
                    "punctuation.definition.entity.css"
                ],
                "settings": {
                    "foreground": tokenColors.punctuation
                }
            },
            {
                "scope": [
                    "punctuation.section.embedded",
                    "punctuation.section.embedded entity.name.tag",
                    "punctuation.section.embedded constant.other",
                    "punctuation.section.embedded source"
                ],
                "settings": {
                    "foreground": tokenColors.punctuation
                }
            },
            {
                "scope": [
                    "punctuation.template-string.element.begin",
                    "punctuation.template-string.element.end",
                    "punctuation.definition.string.template.begin",
                    "punctuation.definition.string.template.end",
                    "string.quoted.template punctuation.definition.string.begin",
                    "string.quoted.template punctuation.definition.string.end"
                ],
                "settings": {
                    "foreground": tokenColors.punctuation
                }
            },
            {
                "scope": [
                    "meta.paragraph.markdown meta.dummy.line-break",
                    "meta.paragraph.markdown meta.hard-line-break.markdown"
                ],
                "settings": {
                    "background": colors.color_5
                }
            },
            {
                "scope": "region.redish",
                "settings": {
                    "foreground": tokenColors.buttonHighlight,
                    "background": tokenColors.buttonHighlight + "59"
                }
            },
            {
                "scope": "region.orangish",
                "settings": {
                    "foreground": colors.color_3,
                    "background": colors.color_3 + "59"
                }
            },
            {
                "scope": "region.yellowish",
                "settings": {
                    "foreground": colors.color_4,
                    "background": colors.color_4 + "59"
                }
            },
            {
                "scope": "region.greenish",
                "settings": {
                    "foreground": tokenColors.menuHighlight,
                    "background": tokenColors.menuHighlight + "59"
                }
            },
            {
                "scope": "region.bluish",
                "settings": {
                    "foreground": colors.color_2,
                    "background": colors.color_2 + "59"
                }
            },
            {
                "scope": "region.purplish",
                "settings": {
                    "foreground": colors.color_5,
                    "background": colors.color_5 + "59"
                }
            },
            {
                "scope": "region.pinkish",
                "settings": {
                    "foreground": tokenColors.buttonHighlight,
                    "background": tokenColors.buttonHighlight + "59"
                }
            },
            {
                "scope": "region.whitish",
                "settings": {
                    "foreground": colors.light_hard
                }
            },
            {
                "scope": "source",
                "settings": {
                    "foreground": colors.light_hard
                }
            },
            {
                "scope": [
                    "source.scss",
                    "source.sass"
                ],
                "settings": {
                    "foreground": colors.light_hard
                }
            },
            {
                "scope": [
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
                "settings": {
                    "foreground": colors.color_3,
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "source.git-show.commit.sha",
                "settings": {
                    "foreground": colors.color_5
                }
            },
            {
                "scope": [
                    "source.git-show.author",
                    "source.git-show.date",
                    "source.git-diff.command",
                    "source.git-diff.command meta.diff.git-diff.header.from-file",
                    "source.git-diff.command meta.diff.git-diff.header.to-file"
                ],
                "settings": {
                    "foreground": colors.light_0
                }
            },
            {
                "scope": [
                    "source.git-show meta.diff.git-diff.header.extended.index.from-sha",
                    "source.git-show meta.diff.git-diff.header.extended.index.to-sha"
                ],
                "settings": {
                    "foreground": colors.color_5
                }
            },
            {
                "scope": "source.git-show meta.diff.range.unified",
                "settings": {
                    "foreground": colors.color_3
                }
            },
            {
                "scope": [
                    "source.git-show meta.diff.header.from-file",
                    "source.git-show meta.diff.header.to-file"
                ],
                "settings": {
                    "foreground": colors.light_0
                }
            },
            {
                "scope": "storage",
                "settings": {
                    "foreground": tokenColors.buttonHighlight
                }
            },
            {
                "scope": "storage.type",
                "settings": {
                    "foreground": tokenColors.keyword_base_types,
                }
            },
            {
                "scope": "storage.type.accessor",
                "settings": {
                    "foreground": tokenColors.method,
                }
            },
            {
                "scope": "storage.type.extends",
                "settings": {
                    "foreground": tokenColors.buttonHighlight,
                    "fontStyle": ""
                }
            },
            {
                "scope": "storage.type.function.arrow",
                "settings": {
                    "foreground": tokenColors.buttonHighlight,
                    "fontStyle": "normal"
                }
            },
            {
                "scope": [
                    "storage.modifier",
                    "storage.type.modifier"
                ],
                "settings": {
                    "foreground": tokenColors.keyword_storage,
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "storage.class.restructuredtext.ref",
                "settings": {
                    "foreground": colors.color_5
                }
            },
            {
                "scope": [
                    "storage.modifier.visibility.rust",
                    "storage.modifier.lifetime.rust"
                ],
                "settings": {
                    "foreground": tokenColors.buttonHighlight
                }
            },
            {
                "scope": [
                    "storage.modifier.const.rust",
                    "storage.modifier.dyn.rust",
                    "storage.modifier.mut.rust",
                    "storage.modifier.static.rust",
                    "storage.type.rust",
                    "storage.type.core.rust",
                    "storage.class.std.rust"
                ],
                "settings": {
                    "foreground": tokenColors.menuHighlight
                }
            },
            {
                "scope": [
                    "storage.type.rust",
                    "storage.modifier.const.rust",
                    "storage.modifier.dyn.rust",
                    "storage.modifier.mut.rust",
                    "storage.modifier.static.rust",
                    "keyword.other.rust",
                    "keyword.other.where.rust"
                ],
                "settings": {
                    "foreground": tokenColors.buttonHighlight
                }
            },
            {
                "scope": "string",
                "settings": {
                    "foreground": colors.color_4
                }
            },
            {
                "scope": "string.unquoted.label",
                "settings": {
                    "foreground": colors.light_hard
                }
            },
            {
                "scope": "string source",
                "settings": {
                    "foreground": colors.light_hard
                }
            },
            {
                "scope": "string source punctuation.section.embedded",
                "settings": {
                    "foreground": colors.light_0
                }
            },
            {
                "scope": [
                    "string.other.link.title",
                    "string.other.link.description"
                ],
                "settings": {
                    "foreground": tokenColors.buttonHighlight
                }
            },
            {
                "scope": "string.other.link.description.title",
                "settings": {
                    "foreground": tokenColors.menuHighlight
                }
            },
            {
                "scope": [
                    "string.regexp punctuation.definition.string.begin",
                    "string.regexp punctuation.definition.string.end"
                ],
                "settings": {
                    "foreground": tokenColors.punctuation
                }
            },
            {
                "scope": [
                    "string.other.ref",
                    "string.other.restructuredtext.ref"
                ],
                "settings": {
                    "foreground": tokenColors.menuHighlight
                }
            },
            {
                "scope": "string.other.git-status.help.key",
                "settings": {
                    "foreground": colors.light_0
                }
            },
            {
                "scope": "string.other.git-status.remote",
                "settings": {
                    "foreground": tokenColors.buttonHighlight
                }
            },
            {
                "scope": "support.constant",
                "settings": {
                    "foreground": tokenColors.menuHighlight
                }
            },
            {
                "scope": "support.constant.handlebars",
                "settings": {
                    "foreground": colors.light_0
                }
            },
            {
                "scope": "support.type.vendor-prefix.css",
                "settings": {
                    "foreground": colors.light_0
                }
            },
            {
                "scope": "support.function",
                "settings": {
                    "foreground": tokenColors.menuHighlight
                }
            },
            {
                "scope": [
                    "support.type",
                    "entity.name.type.object.console"
                ],
                "settings": {
                    "foreground": tokenColors.menuHighlight,
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "support.variable",
                "settings": {
                    "foreground": tokenColors.menuHighlight
                }
            },
            {
                "scope": "support.type.property-name",
                "settings": {
                    "foreground": colors.light_hard,
                    "fontStyle": "normal"
                }
            },
            {
                "scope": "support.class",
                "settings": {
                    "foreground": tokenColors.menuHighlight
                }
            },
            {
                "scope": "support.constant.core.rust",
                "settings": {
                    "foreground": colors.color_5
                }
            },
            {
                "scope": "text",
                "settings": {
                    "foreground": colors.light_hard
                }
            },
            {
                "scope": "text.find-in-files",
                "settings": {
                    "foreground": colors.light_hard
                }
            },
            {
                "scope": [
                    "variable",
                    "variable.other"
                ],
                "settings": {
                    "foreground": colors.light_hard
                }
            },
            {
                "scope": [
                    "variable.parameter",
                    "parameters variable.function"
                ],
                "settings": {
                    "foreground": colors.color_3,
                    "fontStyle": "italic"
                }
            },
            {
                "scope": [
                    "variable.language",
                    "variable.parameter.function.language.special.self.python",
                    "variable.parameter.function.language.special.cls.python"
                ],
                "settings": {
                    "foreground": colors.color_3,
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "variable.language.arguments",
                "settings": {
                    "foreground": colors.color_5
                }
            },
            {
                "scope": [
                    "variable.other.class",
                ],
                "settings": {
                    "foreground": tokenColors.menuHighlight
                }
            },
            {
                "scope": [
                    "variable.other.class",
                    "variable.other.object.property.cs"
                ],
                "settings": {
                    "foreground": colors.light_hard
                }
            },
            {
                "scope": "variable.other.constant",
                "settings": {
                    "foreground": colors.color_5
                }
            },
            {
                "scope": "variable.other.member",
                "settings": {
                    "foreground": colors.light_hard
                }
            },
            {
                "scope": "variable.other.enummember",
                "settings": {
                    "foreground": colors.color_5
                }
            },
            {
                "scope": [
                    "variable.other.property",
                    "variable.other.property.static",
                    "variable.other.event"
                ],
                "settings": {
                    "foreground": colors.color_2
                }
            },
            {
                "scope": "variable.function",
                "settings": {
                    "foreground": tokenColors.menuHighlight
                }
            },
            {
                "scope": [
                    "variable.other.substitution",
                    "heading.2.markdown"
                ],
                "settings": {
                    "foreground": colors.color_2
                }
            },
            {
                "scope": [
                    "source.ruby variable.other.readwrite.instance.ruby",
                    "source.ruby variable.other.readwrite.class.ruby"
                ],
                "settings": {
                    "foreground": colors.color_5
                }
            },
            {
                "scope": "source.jinja2 variable.other.jinja2.block",
                "settings": {
                    "foreground": tokenColors.menuHighlight
                }
            },
            {
                "scope": "source.jinja2 variable.other.jinja2",
                "settings": {
                    "foreground": colors.color_3
                }
            },
            {
                "scope": [
                    "comment",
                    "entity.name.type.class",
                    "keyword",
                    "storage.modifier",
                    "storage.type.class.js"
                ],
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": [
                    "invalid",
                    "keyword.other.unit.px.css",
                    "constant.numeric.decimal.js",
                    "constant.numeric.json",
                    "entity.name.type.class.cs"
                ],
                "settings": {
                    "fontStyle": ""
                }
            },
            {
                "scope": [
                    "variable.other",
                    "variable.other.object",
                    "entity.name.variable.field",
                    "entity.name.variable.parameter",
                    "entity.name.variable.local"
                ],
                "settings": {
                    "foreground": tokenColors.field_name,
                }
            },
            {
                "scope": [
                    "support.type.property-name"
                ],
                "settings": {
                    "foreground": tokenColors.property
                }
            },
            {
                "scope": [
                    "entity.name.class",
                    "entity.name.type.class",
                    "entity.name.variable.event",
                    "entity.name.type.struct",
                    "entity.name.type.namespace"
                ],
                "settings": {
                    "foreground": tokenColors.namespace
                }
            },
            {
                "scope": [
                    "function",
                    "entity.name.function",
                    "entity.name.function.templated"
                ],
                "settings": {
                    "foreground": tokenColors.method
                }
            },
            {
                "scope": [
                    "property",
                    "entity.name.variable.property"
                ],
                "settings": {
                    "foreground": tokenColors.property
                }
            },
            {
                "scope": [
                    "string",
                    "constant.language",
                    "constant.numeric",
                    "string.quoted.double",
                    "entity.name.variable.enum-member"
                ],
                "settings": {
                    "foreground": tokenColors.value
                }
            },
            {
                "scope": [
                    "punctuation.definition.string.begin",
                    "punctuation.definition.string.end"
                ],
                "settings": {
                    "foreground": tokenColors.string
                }
            },
            {
                "scope": [
                    "keyword.operator",
                    "punctuation.accessor",
                ],
                "settings": {
                    "foreground": tokenColors.punctuation
                }
            },
            {
                "scope": [
                    "keyword.type",
                    "keyword.operator.expression.new"
                ],
                "settings": {
                    "foreground": tokenColors.keyword_base_types,
                    "fontStyle": ""
                }
            }, {
                "scope": [
                    "keyword.operator",
                ],
                "settings": {
                    "foreground": tokenColors.buttonHighlight,
                    "fontStyle": ""
                }
            },
            {
                "scope": "token.info-token",
                "settings": {
                    "foreground": colors.color_2
                }
            },
            {
                "scope": "token.warn-token",
                "settings": {
                    "foreground": colors.color_4
                }
            },
            {
                "scope": "token.error-token",
                "settings": {
                    "foreground": tokenColors.buttonHighlight
                }
            },
            {
                "scope": "token.debug-token",
                "settings": {
                    "foreground": colors.color_5
                }
            },
            {
                "scope": "heading.1.markdown",
                "settings": {
                    "foreground": colors.color_3,
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "heading.2.markdown",
                "settings": {
                    "foreground": colors.color_3,
                    "fontStyle": "bold"
                }
            }
        ]
    }
}

module.exports = getTheme