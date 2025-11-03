import { Palette } from "@/types";
import { WorkbenchPartial, workBench } from "./UIColors/workbench";

export const getUiColors = (ctx: Palette): WorkbenchPartial => {
    return workBench(ctx);
};
