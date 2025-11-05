import { Palette, TodoTreeConfig } from "@/types";

const todoConfiguration = (
	ctx: Palette,
	integrateTodoTree: boolean = false
): TodoTreeConfig => {
	const { palette } = ctx;
	const generalTags = [
		"// TODO",
		"/** TODO",
		"# TODO",
		"<!-- TODO",
		"// NOTE",
		"/** NOTE",
		"# NOTE",
		"<!-- NOTE",
		"// FIXME",
		"/** FIXME",
		"# FIXME",
		"<!-- FIXME",
		"// IMPORTANT",
		"/** IMPORTANT",
		"# IMPORTANT",
		"<!-- IMPORTANT",
	];
	const tagGroupSettings = {
		TODO: ["// TODO", "/** TODO", "# TODO", "<!-- TODO"],
		NOTE: ["// NOTE", "/** NOTE", "# NOTE", "<!-- NOTE"],
		FIXME: ["// FIXME", "/** FIXME", "# FIXME", "<!-- FIXME"],
		IMPORTANT: [
			"// IMPORTANT",
			"/** IMPORTANT",
			"# IMPORTANT",
			"<!-- IMPORTANT",
		],
	};
	const defaultTagColorSetting = {
		background: palette.bg_1,
		borderRadius: "0",
		fontWeight: "bold",
		foreground: palette.black,
		icon: "alert",
		iconColour: palette.bright_purple_pink,
		type: "text",
	};
	const tagColorSettings = {
		TODO: {
			background: palette.bright_aqua,
			icon: "info",
		},
		NOTE: {
			background: palette.bright_purple,
			icon: "note",
		},
		FIXME: {
			background: palette.red_pink,
			icon: "flame",
		},
		IMPORTANT: {
			background: palette.bright_red_pink,
			icon: "star",
		},
	};

	return {
		"todo-tree.general.tags": [...generalTags],
		"todo-tree.general.tagGroups": {
			...tagGroupSettings,
		},
		"todo-tree.highlights.defaultHighlight": {
			...defaultTagColorSetting,
		},
		"todo-tree.highlights.customHighlight": {
			...tagColorSettings,
		},
	};
};

export { todoConfiguration };
