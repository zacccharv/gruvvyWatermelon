import { type Palette } from "../../types";
import { workBench } from "./workbench";

const uiCustomization = (ctx: Palette) => {
    return {
        ...workBench(ctx),
    };
};

export default uiCustomization;
