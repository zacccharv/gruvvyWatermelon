import { Palette, TodoTreeConfig } from "@/types";

const todoConfiguration = (ctx: Palette): TodoTreeConfig => {
	const { flavor: palette } = ctx;
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
		background: palette.base,
		borderRadius: "0",
		fontWeight: "bold",
		foreground: palette.crust,
		icon: "alert",
		iconColour: palette.pink,
		type: "text",
	};
	const tagColorSettings = {
		TODO: {
			background: palette.mint,
			icon: "info",
		},
		NOTE: {
			background: palette.lavender,
			icon: "note",
		},
		FIXME: {
			background: palette.cherry,
			icon: "flame",
		},
		IMPORTANT: {
			background: palette.rosewater,
			icon: "star",
		},
	};

	return {
		"general.tags": [...generalTags],
		"general.tagGroups": {
			...tagGroupSettings,
		},
		"highlights.defaultHighlight": {
			...defaultTagColorSetting,
		},
		"highlights.customHighlight": {
			...tagColorSettings,
		},
	};
};

export { todoConfiguration };
