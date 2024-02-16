# Gruvvy Watermelon color theme

A color theme inspired by gruvbox and Watermelons (and maybe some grapes).
Created for Unity and C# but looks good in json and javascript, other language colorization isn't optimized.

![image](https://raw.githubusercontent.com/zacccharv/gruvvyWatermelon/main/imgs/Screenshot_2024-02-10_130235.png)

![image](https://raw.githubusercontent.com/zacccharv/gruvvyWatermelon/main/imgs/Screenshot_2024-02-10_130235.png)

![image](https://raw.githubusercontent.com/zacccharv/gruvvyWatermelon/main/imgs/color_theme_palette.png)

## Recommended Extensions

[TODO-Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree) - A really helpful plugin for keeping track of todos in your code with tons of customization.
Here's my config to go with this theme.

```json
  "todo-tree.general.tags": [
    "// BUG",
    "// HACK",
    "// FIXME",
    "// Todo",
    "// TODO",
    "// Note",
    "// NOTE",
    "note:",
    "note",
    "NOTE",
    "todo",
    "// IMPORTANT"
  ],
  "todo-tree.general.tagGroups": {
    "TODO": [
      "// TODO",
      "// Todo",
    ],
    "NOTE": [
      "// Note",
      "// NOTE"
    ]
  },
  "todo-tree.highlights.customHighlight": {
    " FIXME ": {
      "background": "#ff647d",
      "foreground": "#cfc5f5",
      "icon": "flame",
      "iconColour": "#E34583"
    },
    "// IMPORTANT": {
      "background": "#FFB6EB",
      "icon": "alert-fill"
    },
    "NOTE": {
      "background": "#C3ADFF",
      "icon": "note"
    },
    "TODO": {
      "background": "#81E5B3",
      "icon": "flame"
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

![image](https://raw.githubusercontent.com/zacccharv/gruvvyWatermelon/main/imgs/Screenshot_2024-02-15_193506)

[Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) - a nice way to see errors and hints in the editor, and I integrated it with this theme.
![image](https://raw.githubusercontent.com/zacccharv/gruvvyWatermelon/main/imgs/Screenshot_2024-02-10_131100.png)
![image](https://raw.githubusercontent.com/zacccharv/gruvvyWatermelon/main/imgs/Screenshot_2024-02-10_131339.png)
![image](https://raw.githubusercontent.com/zacccharv/gruvvyWatermelon/main/imgs/Screenshot_2024-02-10_131803.png)
