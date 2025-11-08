import { ThemeContext } from "@/types";
import errorLens from "./errorlens";

export default function extensions(ctx: ThemeContext) {
	const { palette } = ctx;

	return {
		...errorLens(palette),
	};
}
