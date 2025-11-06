# Gruvvy Watermelon Color Theme

A color theme inspired by gruvbox and Watermelons (and maybe some grapes).
Created for Unity and C# with GDScript support currently in development. Other languages may look ok but are untested.

![image](https://raw.githubusercontent.com/zacccharv/gruvvyWatermelon/main/imgs/Screenshot_2024-02-10_130235.png)

![image](https://raw.githubusercontent.com/zacccharv/gruvvyWatermelon/main/imgs/Screenshot_2024-02-10_130235.png)

![image](https://raw.githubusercontent.com/zacccharv/gruvvyWatermelon/main/imgs/color_theme_palette.png)

## Font

I use [Victor Mono](https://rubjo.github.io/victor-mono/) for its cursive italics.

## Recommended Extensions

## [TODO tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)

A really helpful plugin for keeping track of todos in your code with tons of customization.
Here's my config to go with this theme.

```json
  "todo-tree.general.tags": [
        "// TODO",
        "// Todo",
        "# TODO",
        "// Note",
        "<!-- note",
        "// NOTE",
        "# NOTE",
        "// FIXME",
        "<!-- fixme",
        "# FIXME"
  ],
  "todo-tree.general.tagGroups": {
    "TODO": [
        "// TODO",
        "// Todo",
        "# TODO"
      ],
      "NOTE": [
        "// Note",
        "<!-- note",
        "// NOTE",
        "# NOTE"
      ],
      "FIXME": [
        "// FIXME",
        "<!-- fixme",
        "# FIXME"
      ],
      "IMPORTANT": [
        "// IMPORTANT",
        "# IMPORTANT",
        "<!-- IMPORTANT"
    ]
  },
  "todo-tree.highlights.customHighlight": {
    "TODO": {
      "background": "#81E5B3",
      "icon": "flame"
    },
    "NOTE": {
      "background": "#C3ADFF",
      "icon": "note"
    },
    "FIXME": {
      "background": "#ff647d",
      "foreground": "#cfc5f5",
      "icon": "flame",
      "iconColour": "#E34583"
    },
    "IMPORTANT": {
      "background": "#FFB6EB",
      "icon": "alert-fill"
    }
  },
  "todo-tree.highlights.defaultHighlight": {
    "background": "#C3ADFF",
    "borderRadius": "0",
    "fontWeight": "bold",
    "foreground": "#222",
    "icon": "alert",
    "iconColour": "#ffb6eb",
    "type": "text"
  }
```

![image](https://raw.githubusercontent.com/zacccharv/gruvvyWatermelon/main/imgs/Screenshot_2024-02-15_193507.png)

## [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)

A nice way to see errors and hints in the editor, and I integrated it with this theme.
![image](https://raw.githubusercontent.com/zacccharv/gruvvyWatermelon/main/imgs/Screenshot_2024-02-10_131100.png)
![image](https://raw.githubusercontent.com/zacccharv/gruvvyWatermelon/main/imgs/Screenshot_2024-02-10_131339.png)
![image](https://raw.githubusercontent.com/zacccharv/gruvvyWatermelon/main/imgs/Screenshot_2024-02-10_131803.png)

## Todos

- [ ] Explain default settings overrides provided and how they can be toggled on or off
- [ ] Vscode Vim integration?
- [ ] Learn about bundlers
