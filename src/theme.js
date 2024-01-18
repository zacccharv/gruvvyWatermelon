const { colors } = require('./colors')

function getTheme({ theme, name }) {
    const themes = (options) => options[theme]

    return {

        name: name,
        "colors": {
            "activityBar.activeBorder": colors.green,
            "activityBar.activeFocusBorder": colors.green,
            "activityBar.background": colors.dark_hard,
            "activityBar.border": colors.dark_hard,
            "activityBar.foreground": colors.light_hard,
            "activityBar.inactiveForeground": colors.light_0,
            "activityBarBadge.background": colors.blue,
            "activityBarBadge.foreground": colors.dark_normal,
            "badge.background": colors.green,
            "badge.foreground": colors.dark_normal,
            "breadcrumb.activeSelectionForeground": colors.light_hard,
            "breadcrumb.focusForeground": colors.light_hard,
            "breadcrumb.foreground": colors.light_0,
            "button.background": colors.blue,
            "button.foreground": colors.dark_normal,
            "button.hoverBackground": colors.green,
            "checkbox.background": colors.dark_normal,
            "checkbox.border": dark_1,
            "checkbox.foreground": colors.orange,
            "debugToolBar.background": colors.dark_normal,
            "diffEditor.insertedTextBackground": colors.green + "20",
            "diffEditor.removedTextBackground": colors.red + "26",
            "dropdown.background": colors.dark_normal,
            "dropdown.border": dark_1,
            "dropdown.foreground": colors.light_hard,
            "editor.background": colors.dark_normal,
            "editor.findMatchBackground": colors.red + "40",
            "editor.findMatchHighlightBackground": colors.purple + "40",
            "editor.findRangeHighlightBackground": colors.purple + "40",
            "editor.foreground": colors.light_hard,
            "editor.hoverHighlightBackground": colors.green + "36",
            "editor.lineHighlightBackground": colors.dark_0 + "e0",
            "editor.lineHighlightBorder": colors.dark_0 + "00",
            "editor.rangeHighlightBackground": colors.purple + "40",
            "editor.selectionBackground": colors.dark_0 + "f0",
            "editor.selectionHighlightBackground": dark_0 + "00",
            "editor.snippetFinalTabstopHighlightBackground": colors.purple + "30",
            "editor.snippetFinalTabstopHighlightBorder": colors.dark_normal,
            "editor.snippetTabstopHighlightBackground": colors.dark_1 + "a0",
            "editor.symbolHighlightBackground": colors.green + "38",
            "editor.wordHighlightBackground": dark_0 + "c0",
            "editor.wordHighlightStrongBackground": dark_0 + "c0",
            "editorBracketMatch.background": dark_1,
            "editorBracketMatch.border": colors.dark_normal + "00",
            "editorCodeLens.foreground": colors.light_0,
            "editorCursor.foreground": colors.light_hard,
            "editorError.foreground": colors.red,
            "editorGroup.border": dark_hard,
            "editorGroup.dropBackground": dark_1 + "60",
            "editorGroupHeader.noTabsBackground": colors.dark_normal,
            "editorGroupHeader.tabsBackground": colors.dark_normal,
            "editorGutter.addedBackground": colors.green + "40",
            "editorGutter.background": colors.dark_normal + "00",
            "editorGutter.deletedBackground": colors.red + "40",
            "editorGutter.modifiedBackground": colors.green + "40",
            "editorHint.foreground": colors.green,
            "editorHoverWidget.background": colors.dark_0,
            "editorHoverWidget.border": dark_1,
            "editorIndentGuide.activeBackground1": dark_1,
            "editorIndentGuide.background1": dark_0,
            "editorInfo.foreground": colors.green,
            "editorLightBulb.foreground": colors.orange,
            "editorLightBulbAutoFix.foreground": colors.green,
            "editorLineNumber.activeForeground": colors.light_hard,
            "editorLineNumber.foreground": colors.light_0,
            "editorLink.activeForeground": colors.green,
            "editorMarkerNavigation.background": colors.dark_0,
            "editorMarkerNavigationError.background": colors.red,
            "editorMarkerNavigationInfo.background": colors.green,
            "editorMarkerNavigationWarning.background": colors.yellow,
            "editorOverviewRuler.addedForeground": colors.green + "80",
            "editorOverviewRuler.border": colors.dark_normal + "00",
            "editorOverviewRuler.commonContentForeground": colors.light_0,
            "editorOverviewRuler.currentContentForeground": colors.green + "a0",
            "editorOverviewRuler.deletedForeground": colors.red + "80",
            "editorOverviewRuler.errorForeground": colors.red,
            "editorOverviewRuler.findMatchForeground": colors.green + "80",
            "editorOverviewRuler.incomingContentForeground": colors.green + "a0",
            "editorOverviewRuler.infoForeground": colors.green,
            "editorOverviewRuler.modifiedForeground": colors.green + "80",
            "editorOverviewRuler.rangeHighlightForeground": colors.green + "80",
            "editorOverviewRuler.selectionHighlightForeground": colors.green + "80",
            "editorOverviewRuler.warningForeground": colors.yellow,
            "editorOverviewRuler.wordHighlightForeground": colors.light_0 + "80",
            "editorOverviewRuler.wordHighlightStrongForeground": colors.light_0 + "60",
            "editorRuler.foreground": dark_1,
            "editorSuggestWidget.background": colors.dark_0,
            "editorSuggestWidget.border": colors.dark_0,
            "editorSuggestWidget.foreground": colors.light_hard,
            "editorSuggestWidget.highlightForeground": colors.green,
            "editorSuggestWidget.selectedBackground": dark_0,
            "editorUnnecessaryCode.border": colors.light_0,
            "editorUnnecessaryCode.opacity": colors.light_hard,
            "editorWarning.foreground": colors.yellow,
            "editorWhitespace.foreground": colors.light_0,
            "editorWidget.background": colors.dark_normal,
            "editorWidget.border": dark_1,
            "errorForeground": colors.red,
            "extensionBadge.remoteBackground": colors.green,
            "extensionBadge.remoteForeground": colors.dark_normal,
            "extensionButton.prominentBackground": colors.green,
            "extensionButton.prominentForeground": colors.dark_normal,
            "extensionButton.prominentHoverBackground": colors.green,
            "focusBorder": dark_1 + "00",
            "foreground": colors.light_hard,
            "gitDecoration.addedResourceForeground": colors.green + "80",
            "gitDecoration.conflictingResourceForeground": colors.purple + "90",
            "gitDecoration.deletedResourceForeground": colors.orange,
            "gitDecoration.ignoredResourceForeground": dark_1,
            "gitDecoration.modifiedResourceForeground": colors.green + "80",
            "gitDecoration.submoduleResourceForeground": colors.orange + "80",
            "gitDecoration.untrackedResourceForeground": colors.yellow + "70",
            "icon.foreground": colors.green,
            "input.background": colors.dark_normal + "00",
            "input.border": dark_1,
            "input.foreground": colors.light_hard,
            "input.placeholderForeground": colors.light_0,
            "inputOption.activeBorder": colors.green,
            "inputValidation.errorBackground": dark_0,
            "inputValidation.errorBorder": colors.red,
            "inputValidation.errorForeground": colors.red,
            "inputValidation.infoBackground": dark_0,
            "inputValidation.infoBorder": colors.green,
            "inputValidation.infoForeground": colors.green,
            "inputValidation.warningBackground": dark_0,
            "inputValidation.warningBorder": colors.yellow,
            "inputValidation.warningForeground": colors.yellow,
            "list.activeSelectionBackground": colors.dark_normal + "e0",
            "list.activeSelectionForeground": colors.light_hard,
            "list.dropBackground": colors.dark_0 + "80",
            "list.errorForeground": colors.red,
            "list.focusBackground": colors.dark_1 + "80",
            "list.focusForeground": colors.light_hard,
            "list.highlightForeground": colors.green,
            "list.hoverBackground": colors.dark_hard + "00",
            "list.hoverForeground": colors.light_hard,
            "list.inactiveFocusBackground": colors.dark_1 + "68",
            "list.inactiveSelectionBackground": colors.dark_normal + "c8",
            "list.inactiveSelectionForeground": colors.light_0,
            "list.invalidItemForeground": colors.red + "80",
            "list.warningForeground": colors.yellow,
            "menu.background": colors.dark_hard,
            "menu.foreground": colors.light_hard,
            "menu.selectionBackground": colors.dark_normal,
            "menu.selectionForeground": colors.light_hard,
            "menubar.selectionBackground": colors.dark_normal,
            "menubar.selectionBorder": colors.dark_normal,
            "merge.border": colors.dark_normal + "00",
            "merge.currentContentBackground": colors.green + "1a",
            "merge.currentHeaderBackground": colors.green + "30",
            "merge.incomingContentBackground": colors.green + "1a",
            "merge.incomingHeaderBackground": colors.green + "30",
            "minimap.errorHighlight": colors.red + "70",
            "minimap.findMatchHighlight": colors.green + "40",
            "minimap.selectionHighlight": dark_1 + "f0",
            "minimap.warningHighlight": colors.yellow + "50",
            "minimapGutter.addedBackground": colors.green + "a0",
            "minimapGutter.deletedBackground": colors.red + "a0",
            "minimapGutter.modifiedBackground": colors.green + "a0",
            "notificationCenterHeader.background": dark_0,
            "notificationCenterHeader.foreground": colors.light_hard,
            "notificationLink.foreground": colors.green,
            "notifications.background": colors.dark_normal,
            "notifications.foreground": colors.light_hard,
            "notificationsErrorIcon.foreground": colors.red,
            "notificationsInfoIcon.foreground": colors.green,
            "notificationsWarningIcon.foreground": colors.yellow,
            "panel.background": colors.dark_0,
            "panel.border": colors.dark_0,
            "panelInput.border": dark_1,
            "panelTitle.activeBorder": colors.green,
            "panelTitle.activeForeground": colors.light_hard,
            "panelTitle.inactiveForeground": colors.light_0,
            "peekView.border": dark_0,
            "peekViewEditor.background": colors.dark_0,
            "peekViewEditor.matchHighlightBackground": colors.green + "28",
            "peekViewEditorGutter.background": colors.dark_0,
            "peekViewResult.background": colors.dark_0,
            "peekViewResult.fileForeground": colors.light_hard,
            "peekViewResult.matchHighlightBackground": colors.orange + "50",
            "peekViewResult.selectionBackground": colors.green + "28",
            "peekViewTitle.background": dark_0,
            "peekViewTitleDescription.foreground": colors.light_0,
            "peekViewTitleLabel.foreground": colors.light_hard,
            "pickerGroup.border": light_hard + "1a",
            "problemsErrorIcon.foreground": colors.red,
            "problemsInfoIcon.foreground": colors.green,
            "problemsWarningIcon.foreground": colors.yellow,
            "progressBar.background": colors.green,
            "quickInputList.focusBackground": colors.dark_0 + "f0",
            "scrollbar.shadow": colors.dark_hard + "70",
            "scrollbarSlider.activeBackground": colors.light_0 + "b0",
            "scrollbarSlider.background": colors.light_0 + "70",
            "scrollbarSlider.hoverBackground": colors.light_0 + "90",
            "selection.background": dark_1 + "e0",
            "settings.checkboxBackground": colors.dark_normal,
            "settings.checkboxBorder": dark_1,
            "settings.checkboxForeground": colors.orange,
            "settings.dropdownBackground": colors.dark_normal,
            "settings.dropdownBorder": dark_1,
            "settings.dropdownForeground": colors.green,
            "settings.headerForeground": colors.light_hard,
            "settings.numberInputBackground": colors.dark_normal,
            "settings.numberInputBorder": dark_1,
            "settings.numberInputForeground": colors.purple,
            "settings.textInputBackground": colors.dark_normal,
            "settings.textInputBorder": dark_1,
            "settings.textInputForeground": colors.green,
            "sideBar.background": colors.dark_hard,
            "sideBar.foreground": colors.light_0,
            "sideBarSectionHeader.background": colors.dark_normal + "00",
            "sideBarSectionHeader.foreground": colors.light_0,
            "sideBarTitle.foreground": colors.light_0,
            "statusBar.background": colors.blue,
            "statusBar.border": colors.dark_hard,
            "statusBar.debuggingBackground": colors.red,
            "statusBar.debuggingBorder": colors.red,
            "statusBar.debuggingForeground": colors.dark_normal,
            "statusBar.foreground": colors.dark_normal,
            "statusBar.noFolderBackground": colors.blue,
            "statusBar.noFolderBorder": colors.dark_hard,
            "statusBar.noFolderForeground": colors.dark_normal,
            "statusBarItem.activeBackground": colors.dark_1 + "a0",
            "statusBarItem.hoverBackground": colors.green,
            "statusBarItem.remoteBackground": colors.red,
            "statusBarItem.remoteForeground": colors.dark_normal,
            "symbolIcon.arrayForeground": colors.light_hard,
            "symbolIcon.booleanForeground": colors.purple,
            "symbolIcon.classForeground": colors.green,
            "symbolIcon.colorForeground": colors.light_hard,
            "symbolIcon.constantForeground": colors.purple,
            "symbolIcon.constructorForeground": colors.green,
            "symbolIcon.enumeratorForeground": colors.purple,
            "symbolIcon.enumeratorMemberForeground": colors.purple,
            "symbolIcon.eventForeground": colors.green,
            "symbolIcon.fieldForeground": colors.light_hard,
            "symbolIcon.fileForeground": colors.light_hard,
            "symbolIcon.folderForeground": colors.light_hard,
            "symbolIcon.functionForeground": colors.green,
            "symbolIcon.interfaceForeground": colors.green,
            "symbolIcon.keyForeground": colors.green,
            "symbolIcon.keywordForeground": colors.red,
            "symbolIcon.methodForeground": colors.green,
            "symbolIcon.moduleForeground": colors.red,
            "symbolIcon.namespaceForeground": colors.red,
            "symbolIcon.nullForeground": colors.purple,
            "symbolIcon.numberForeground": colors.purple,
            "symbolIcon.objectForeground": colors.green,
            "symbolIcon.operatorForeground": colors.red,
            "symbolIcon.packageForeground": colors.red,
            "symbolIcon.propertyForeground": colors.light_hard,
            "symbolIcon.referenceForeground": colors.green,
            "symbolIcon.snippetForeground": colors.light_hard,
            "symbolIcon.stringForeground": colors.yellow,
            "symbolIcon.structForeground": colors.green,
            "symbolIcon.textForeground": colors.light_hard,
            "symbolIcon.typeParameterForeground": colors.orange,
            "symbolIcon.unitForeground": colors.light_hard,
            "symbolIcon.variableForeground": colors.light_hard,
            "tab.activeBackground": colors.dark_normal,
            "tab.activeBorder": colors.green,
            "tab.activeForeground": colors.light_hard,
            "tab.border": colors.dark_normal,
            "tab.hoverBackground": colors.dark_normal,
            "tab.inactiveBackground": colors.dark_normal,
            "tab.inactiveForeground": colors.light_0,
            "tab.unfocusedActiveBorder": colors.dark_normal + "00",
            "tab.unfocusedActiveForeground": colors.light_hard,
            "tab.unfocusedInactiveForeground": colors.light_0,
            "terminal.ansiBlack": colors.dark_hard,
            "terminal.ansiBlue": colors.green,
            "terminal.ansiBrightBlack": colors.dark_0,
            "terminal.ansiBrightBlue": colors.green,
            "terminal.ansiBrightCyan": colors.orange,
            "terminal.ansiBrightGreen": colors.green,
            "terminal.ansiBrightMagenta": colors.purple,
            "terminal.ansiBrightRed": colors.red,
            "terminal.ansiBrightWhite": colors.light_hard,
            "terminal.ansiBrightYellow": colors.yellow,
            "terminal.ansiCyan": colors.orange,
            "terminal.ansiGreen": colors.green,
            "terminal.ansiMagenta": colors.purple,
            "terminal.ansiRed": colors.red,
            "terminal.ansiWhite": colors.light_hard,
            "terminal.ansiYellow": colors.yellow,
            "terminal.foreground": colors.light_hard,
            "terminalCursor.foreground": colors.light_hard,
            "textBlockQuote.background": colors.dark_0,
            "textBlockQuote.border": colors.light_0,
            "textCodeBlock.background": colors.dark_0,
            "textLink.activeForeground": colors.green + "a0",
            "textLink.foreground": colors.green,
            "titleBar.activeBackground": colors.dark_hard,
            "titleBar.activeForeground": colors.light_hard,
            "titleBar.border": colors.dark_hard,
            "titleBar.inactiveBackground": colors.dark_hard,
            "titleBar.inactiveForeground": colors.light_0,
            "tree.indentGuidesStroke": colors.light_0,
            "widget.shadow": colors.dark_hard + "70",
            "activityBar.activeBorder": colors.green,
        },
        "tokencolors": [
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
                    "foreground": "#8e856b"
                }
            },
            {
                "scope": "comment storage.type",
                "settings": {
                    "foreground": "#8e856b"
                }
            },
            {
                "scope": "comment entity.name.type",
                "settings": {
                    "foreground": "#8e856b"
                }
            },
            {
                "scope": [
                    "comment variable",
                    "comment variable.other"
                ],
                "settings": {
                    "foreground": "#8e856b"
                }
            },
            {
                "scope": "comment keyword.codetag.notation",
                "settings": {
                    "foreground": "#B39DF3"
                }
            },
            {
                "scope": "comment.git-status.header.remote",
                "settings": {
                    "foreground": "#ff5f87"
                }
            },
            {
                "scope": "comment.git-status.header.local",
                "settings": {
                    "foreground": "#87d787"
                }
            },
            {
                "scope": "comment.other.git-status.head",
                "settings": {
                    "foreground": "#ebdbb2"
                }
            },
            {
                "scope": "constant",
                "settings": {
                    "foreground": "#B39DF3"
                }
            },
            {
                "scope": "constant.other",
                "settings": {
                    "foreground": "#ebdbb2"
                }
            },
            {
                "scope": "constant.other.php",
                "settings": {
                    "foreground": "#B39DF3"
                }
            },
            {
                "scope": "constant.other.property",
                "settings": {
                    "foreground": "#B39DF3"
                }
            },
            {
                "scope": "constant.other.citation.latex",
                "settings": {
                    "foreground": "#B39DF3"
                }
            },
            {
                "scope": "constant.other.color",
                "settings": {
                    "foreground": "#B39DF3"
                }
            },
            {
                "scope": "constant.other.character-class.escape",
                "settings": {
                    "foreground": "#B39DF3"
                }
            },
            {
                "scope": "constant.other.key",
                "settings": {
                    "foreground": "#B39DF3"
                }
            },
            {
                "scope": "constant.other.symbol",
                "settings": {
                    "foreground": "#F39660"
                }
            },
            {
                "scope": "constant.numeric",
                "settings": {
                    "foreground": "#B39DF3"
                }
            },
            {
                "scope": "constant.language",
                "settings": {
                    "foreground": "#B39DF3"
                }
            },
            {
                "scope": "constant.character.escape",
                "settings": {
                    "foreground": "#B39DF3"
                }
            },
            {
                "scope": "constant.numeric.line-number.find-in-files",
                "settings": {
                    "foreground": "#8e856b"
                }
            },
            {
                "scope": "constant.numeric.line-number.match.find-in-files",
                "settings": {
                    "foreground": "#E7C664"
                }
            },
            {
                "scope": [
                    "entity.name.function",
                    "entity.name.function.templated"
                ],
                "settings": {
                    "foreground": "#9ED072"
                }
            },
            {
                "scope": "entity.name.function.member.static",
                "settings": {
                    "foreground": "#ebdbb2"
                }
            },
            {
                "scope": [
                    "entity.name.type.class.templated",
                    "entity.name.type.class.generic",
                    "entity.name.type.namespace"
                ],
                "settings": {
                    "foreground": "#87d787"
                }
            },
            {
                "scope": "entity.name.label",
                "settings": {
                    "foreground": "#B39DF3"
                }
            },
            {
                "scope": "entity.name.function.preprocessor",
                "settings": {
                    "foreground": "#87d787"
                }
            },
            {
                "scope": "entity.name.class",
                "settings": {
                    "foreground": "#87d787"
                }
            },
            {
                "scope": "entity.name.constant",
                "settings": {
                    "foreground": "#B39DF3"
                }
            },
            {
                "scope": "entity.name.namespace",
                "settings": {
                    "foreground": "#ebdbb2"
                }
            },
            {
                "scope": "entity.other.inherited-class",
                "settings": {
                    "foreground": "#87d787",
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "entity.name.function",
                "settings": {
                    "foreground": "#9ED072"
                }
            },
            {
                "scope": [
                    "entity.name.tag",
                    "entity.name.tag.js.jsx support.class.component.js.jsx",
                    "entity.name.tag support.class.component"
                ],
                "settings": {
                    "foreground": "#ff5f87"
                }
            },
            {
                "scope": "entity.name.function.operator",
                "settings": {
                    "foreground": "#ff5f87"
                }
            },
            {
                "scope": [
                    "entity.name.type",
                    "entity.name.type.class.reference",
                    "entity.name.type.class.value"
                ],
                "settings": {
                    "foreground": "#87d787"
                }
            },
            {
                "scope": "entity.other.attribute-name",
                "settings": {
                    "foreground": "#87d787",
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
                    "foreground": "#9ED072"
                }
            },
            {
                "scope": "entity.other.attribute-name.id.css",
                "settings": {
                    "foreground": "#F39660"
                }
            },
            {
                "scope": [
                    "entity.other.attribute-name.pseudo-class.css",
                    "entity.other.pseudo-class.css",
                    "entity.other.pseudo-element.css"
                ],
                "settings": {
                    "foreground": "#87d787",
                    "fontStyle": "italic"
                }
            },
            {
                "scope": [
                    "entity.name.function",
                    "support.function"
                ],
                "settings": {
                    "foreground": "#9ED072"
                }
            },
            {
                "scope": "entity.other.git-status.hex",
                "settings": {
                    "foreground": "#B39DF3"
                }
            },
            {
                "scope": "entity.other.jinja2.delimiter",
                "settings": {
                    "foreground": "#8e856b"
                }
            },
            {
                "scope": "entity.name.operator.custom-literal",
                "settings": {
                    "foreground": "#ebdbb2"
                }
            },
            {
                "scope": "entity.name.operator.custom-literal.string",
                "settings": {
                    "foreground": "#E7C664"
                }
            },
            {
                "scope": "entity.name.operator.custom-literal.number",
                "settings": {
                    "foreground": "#B39DF3"
                }
            },
            {
                "scope": "entity.name.type.rust",
                "settings": {
                    "foreground": "#87d787"
                }
            },
            {
                "scope": "entity.name.lifetime.rust",
                "settings": {
                    "foreground": "#ff5f87"
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
                    "foreground": "#ff5f87"
                }
            },
            {
                "scope": "keyword.control",
                "settings": {
                    "foreground": "#ff5f87"
                }
            },
            {
                "scope": "keyword.control.directive",
                "settings": {
                    "foreground": "#ff5f87"
                }
            },
            {
                "scope": [
                    "keyword.operator",
                    "keyword.operator.member",
                ],
                "settings": {
                    "foreground": "#ff5f87"
                }
            },
            {
                "scope": "keyword.other.substitution",
                "settings": {
                    "foreground": "#8e856b"
                }
            },
            {
                "scope": [
                    "keyword.other.template.begin",
                    "keyword.other.template.end"
                ],
                "settings": {
                    "foreground": "#ff5f87"
                }
            },
            {
                "scope": [
                    "keyword.operator.heading.restructuredtext",
                    "keyword.operator.table.row.restructuredtext keyword.operator.table.data.restructuredtext"
                ],
                "settings": {
                    "foreground": "#8e856b"
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
                    "foreground": "#87d787"
                }
            },
            {
                "scope": [
                    "keyword.control.rust",
                    "keyword.operator.misc.rust"
                ],
                "settings": {
                    "foreground": "#ff5f87"
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
                    "foreground": "#E7C664"
                }
            },
            {
                "scope": "markup.raw",
                "settings": {
                    "foreground": "#F39660"
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
                    "foreground": "#9ED072"
                }
            },
            {
                "scope": [
                    "markup.inserted",
                    "markup.inserted punctuation.definition.inserted"
                ],
                "settings": {
                    "foreground": "#9ED072"
                }
            },
            {
                "scope": [
                    "markup.deleted",
                    "markup.deleted punctuation.definition.deleted"
                ],
                "settings": {
                    "foreground": "#ff5f87"
                }
            },
            {
                "scope": [
                    "markup.changed",
                    "markup.changed punctuation.definition.changed"
                ],
                "settings": {
                    "foreground": "#E7C664"
                }
            },
            {
                "scope": [
                    "markup.ignored",
                    "markup.ignored punctuation.definition.ignored"
                ],
                "settings": {
                    "foreground": "#8e856b"
                }
            },
            {
                "scope": "markup.untracked",
                "settings": {
                    "foreground": "#8e856b"
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
                    "foreground": "#8e856b"
                }
            },
            {
                "scope": [
                    "meta.function-call.python",
                    "meta.function-call.arguments.python meta.function-call.python"
                ],
                "settings": {
                    "foreground": "#9ED072"
                }
            },
            {
                "scope": "meta.function-call.python meta.function-call.arguments.python",
                "settings": {
                    "foreground": "#ebdbb2"
                }
            },
            {
                "scope": "meta.instance.constructor",
                "settings": {
                    "foreground": "#9ED072"
                }
            },
            {
                "scope": [
                    "meta.attribute-with-value.class string",
                    "meta.attribute.class.html string"
                ],
                "settings": {
                    "foreground": "#9ED072"
                }
            },
            {
                "scope": [
                    "meta.attribute-with-value.id string",
                    "meta.attribute.id.html string"
                ],
                "settings": {
                    "foreground": "#F39660"
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
                    "foreground": "#ebdbb2"
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
                    "foreground": "#E7C664"
                }
            },
            {
                "scope": "meta.object.member",
                "settings": {
                    "foreground": "#ebdbb2"
                }
            },
            {
                "scope": "meta.property-list.css variable.other",
                "settings": {
                    "foreground": "#F39660"
                }
            },
            {
                "scope": [
                    "entity.name.constant.preprocessor",
                    "meta.preprocessor"
                ],
                "settings": {
                    "foreground": "#B39DF3"
                }
            },
            {
                "scope": "meta.diff.git-diff.header",
                "settings": {
                    "foreground": "#E7C664"
                }
            },
            {
                "scope": "meta.type_params.rust",
                "settings": {
                    "foreground": "#ebdbb2"
                }
            },
            {
                "scope": [
                    "meta.attribute.rust",
                    "variable.language.rust"
                ],
                "settings": {
                    "foreground": "#F39660"
                }
            },
            {
                "scope": "punctuation",
                "settings": {
                    "foreground": "#8e856b"
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
                    "foreground": "#8e856b"
                }
            },
            {
                "scope": "punctuation.definition.group",
                "settings": {
                    "foreground": "#ebdbb2"
                }
            },
            {
                "scope": "punctuation.definition.comment",
                "settings": {
                    "foreground": "#8e856b"
                }
            },
            {
                "scope": [
                    "punctuation.definition.variable",
                    "punctuation.definition.keyword.scss",
                    "punctuation.definition.entity.css"
                ],
                "settings": {
                    "foreground": "#8e856b"
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
                    "foreground": "#F39660"
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
                    "foreground": "#ff5f87"
                }
            },
            {
                "scope": [
                    "meta.paragraph.markdown meta.dummy.line-break",
                    "meta.paragraph.markdown meta.hard-line-break.markdown"
                ],
                "settings": {
                    "background": "#B39DF3"
                }
            },
            {
                "scope": "region.redish",
                "settings": {
                    "foreground": "#ff5f87",
                    "background": "#ff5f8759"
                }
            },
            {
                "scope": "region.orangish",
                "settings": {
                    "foreground": "#F39660",
                    "background": "#F3966059"
                }
            },
            {
                "scope": "region.yellowish",
                "settings": {
                    "foreground": "#E7C664",
                    "background": "#E7C66459"
                }
            },
            {
                "scope": "region.greenish",
                "settings": {
                    "foreground": "#9ED072",
                    "background": "#9ED07259"
                }
            },
            {
                "scope": "region.bluish",
                "settings": {
                    "foreground": "#87d787",
                    "background": "#87d78759"
                }
            },
            {
                "scope": "region.purplish",
                "settings": {
                    "foreground": "#B39DF3",
                    "background": "#B39DF359"
                }
            },
            {
                "scope": "region.pinkish",
                "settings": {
                    "foreground": "#ff5f87",
                    "background": "#ff5f8759"
                }
            },
            {
                "scope": "region.whitish",
                "settings": {
                    "foreground": "#ebdbb2"
                }
            },
            {
                "scope": "source",
                "settings": {
                    "foreground": "#ebdbb2"
                }
            },
            {
                "scope": [
                    "source.scss",
                    "source.sass"
                ],
                "settings": {
                    "foreground": "#ebdbb2"
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
                    "foreground": "#F39660",
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "
        ]
    }
}

module.exports = getTheme