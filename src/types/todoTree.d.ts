export type TodoTreeConfig = {
	"general.tags": string[];
	"general.tagGroups": {
		TODO: string[];
		NOTE: string[];
		FIXME: string[];
		IMPORTANT: string[];
	};
	"highlights.defaultHighlight": {
		background: string;
		borderRadius: string;
		fontWeight: string;
		foreground: string;
		icon: string;
		iconColour: string;
		type: string;
	};
	"highlights.customHighlight": {
		TODO: { background: string; icon: string };
		NOTE: { background: string; icon: string };
		FIXME: { background: string; icon: string };
		IMPORTANT: { background: string; icon: string };
	};
};
