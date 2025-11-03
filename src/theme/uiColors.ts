import { Palette } from "@/types";
import { WorkbenchPartial, workBench } from "./UIColors/workbench";
import extensions from "./themeExtensions";

export const getUiColors = (ctx: Palette): WorkbenchPartial => {
    return { ...workBench(ctx), ...extensions(ctx) };
};
