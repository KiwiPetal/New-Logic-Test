import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      bg: "#fafafa",
      container: "#ffffff",
      black: "#000000",
      active: "#3b82f6",
      transparent: "transparent",
      success: "#15803d",
      error: "#ef4444",
      new: "#22c55e",
    },
    borderRadius: {
      lg: "12px",
      md: "8px",
      sm: "4px",
    },
    fontWeight: {
      DEFAULT: "400",
      bold: "600"
    },
    spacing: {
      lg: "48px",
      DEFAULT: "24px",
      md: "16px",
      sm: "12px",
      xs: "6px",
    },
    screens: {
      fulltables: "600px",
      desktop: "500px",
      tablet: "400px"
    }
  },
  plugins: [],
};
export default config;

