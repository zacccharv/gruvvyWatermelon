import { ThemeContext } from "@/types";
import { WorkbenchPartial, workBench } from "./UIColors/workbench";
import extensions from "./themeExtensions";

export const getUiColors = (ctx: ThemeContext): WorkbenchPartial => {
	return { ...workBench(ctx), ...extensions(ctx) };
};
