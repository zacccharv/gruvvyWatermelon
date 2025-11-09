import { ThemeContext, TextmateColors } from "../../types";
import full from "./full";

export default function tokens(ctx: ThemeContext): TextmateColors {
	return [...full(ctx)];
}
