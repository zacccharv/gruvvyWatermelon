import { Palette, TextmateColors } from "../../types";
import full from "./full";

export default function tokens(ctx: Palette): TextmateColors {
    return [...full(ctx)];
}
