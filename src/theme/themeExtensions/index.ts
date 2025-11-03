import { type Palette } from "@/types";
import errorLens from "./errorlens";

export default function extensions(ctx: Palette) {
    return {
        ...errorLens(ctx),
    };
}
