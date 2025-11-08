import { ThemeContext, TextmateColors } from "../../types";
import full from "./full";

export default function tokens(ctx: ThemeContext): TextmateColors {
	const { palette } = ctx;
	return [...full(palette)];
}
