import type { TextmateColors, ThemeContext } from "@/types";
import tokens from "./tokens";

export const getTokenColors = (ctx: ThemeContext) =>
	[...tokens(ctx)] as const satisfies TextmateColors;
