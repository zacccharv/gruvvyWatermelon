import { ThemeContext, TodoTreeConfig } from "@/types";

const todoConfiguration = (ctx: ThemeContext): TodoTreeConfig => {
	const { colors } = ctx.palette;
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
		background: colors.base,
		borderRadius: "0",
		fontWeight: "bold",
		foreground: colors.crust,
		icon: "alert",
		iconColour: colors.bubblegum,
		type: "text",
	};
	const tagColorSettings = {
		TODO: {
			background: colors.mint,
			icon: "info",
		},
		NOTE: {
			background: colors.lavender,
			icon: "note",
		},
		FIXME: {
			background: colors.cherry,
			icon: "flame",
		},
		IMPORTANT: {
			background: colors.raspberry,
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
