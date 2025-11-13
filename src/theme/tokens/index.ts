import { ThemeContext, TextmateColors } from "../../types";
import full from "./full";

export default function tokens(ctx: ThemeContext) {
	return [...full(ctx)] as const satisfies TextmateColors;
}
