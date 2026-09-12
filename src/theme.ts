export const protelcoThemeTokens = {
  colors: {
    accent: "#d40a0d",
    border: "#f3f0f0",
    content: "#373737",
    field: "#f7f7f7",
    muted: "#a7a7a7",
    page: "#f0f0f0",
    status: "#4fc786",
  },
  gradients: {
    save: "linear-gradient(0deg, #d40a0d, #ea6f04)",
  },
} as const;

export type ProtelcoThemeTokens = typeof protelcoThemeTokens;
