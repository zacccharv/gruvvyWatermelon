import type { TextmateColors, ThemeContext } from "@/types";
import tokens from "./tokens";

export const getTokenColors = (ctx: ThemeContext): TextmateColors => {
	return tokens(ctx);
};
