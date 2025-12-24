import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
	const { colors } = context.palette;

	return [
		{
			name: "C# Signature type",
			scope: "signature.type.csharp",
			settings: {
				foreground: colors.watermelon,
				fontStyle: "italic",
			},
		},
		{
			name: "C# Signature struct types",
			scope: "struct.type.csharp",
			settings: {
				foreground: colors.plum,
			},
		},
		{
			name: "C# Signature method names",
			scope: "method.name.csharpsig",
			settings: {
				foreground: colors.cherry,
				fontStyle: "italic",
			},
		},
		{
			name: "C# Signature field names",
			scope: "field.name.csharpsig",
			settings: {
				foreground: colors.peachpuff,
			},
		},
		{
			name: "C# Signature other object",
			scope: "other.object.csharpsig",
			settings: {
				foreground: colors.raspberry,
			},
		},
		{
			name: "C# Signature other object properties",
			scope: "other.object.property.csharpsig",
			settings: {
				foreground: colors.azalea,
			},
		},
		{
			name: "C# Signature namespace",
			scope: "namespace.csharpsig",
			settings: {
				foreground: colors.cherry,
			},
		},
	];
};
export default tokens;
