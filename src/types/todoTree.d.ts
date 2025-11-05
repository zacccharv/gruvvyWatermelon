export type TodoTreeConfig = {
	"todo-tree.general.tags": string[];
	"todo-tree.general.tagGroups": {
		TODO: string[];
		NOTE: string[];
		FIXME: string[];
		IMPORTANT: string[];
	};
	"todo-tree.highlights.defaultHighlight": {
		background: string;
		borderRadius: string;
		fontWeight: string;
		foreground: string;
		icon: string;
		iconColour: string;
		type: string;
	};
	"todo-tree.highlights.customHighlight": {
		TODO: { background: string; icon: string };
		NOTE: { background: string; icon: string };
		FIXME: { background: string; icon: string };
		IMPORTANT: { background: string; icon: string };
	};
};
