import { defineConfig } from "tsup";


export default defineConfig({
    clean: true,
    entryPoints: ["src/theme/index.ts", "build.ts"],
    format: ["esm", "cjs"],
    dts: { resolve: true },
    minify: false,
    sourcemap: false,
    target: "node16",
    outDir: "dist",
});