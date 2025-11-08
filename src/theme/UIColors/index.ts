import { ThemeContext } from "../../types";
import { workBench } from "./workbench";

const uiCustomization = (ctx: ThemeContext) => {
	return {
		...workBench(ctx),
	};
};

export default uiCustomization;
