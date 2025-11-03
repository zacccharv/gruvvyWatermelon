import type { Palette, TextmateColors } from "@/types";
import tokens from "./tokens";

export const getTokenColors = (ctx: Palette): TextmateColors => {
    return tokens(ctx);
};
