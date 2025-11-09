import { ThemeContext } from "@/types";
import errorLens from "./errorlens";

export default function extensions(ctx: ThemeContext) {
	return {
		...errorLens(ctx),
	};
}
