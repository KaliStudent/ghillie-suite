/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#0E0F11",
        gunmetal: "#171A1F",
        slate: "#23262E",
        fog: "#8F9BA8",
        accent: "#77FF91",
        warning: "#FFC857",
        danger: "#FF5C5C",
      },
      boxShadow: {
        xs: "0px 1px 1px rgba(0,0,0,0.25)",
        sm: "0px 2px 6px rgba(0,0,0,0.25)",
        md: "0px 6px 18px rgba(0,0,0,0.35)",
        lg: "0px 12px 32px rgba(0,0,0,0.45)",
      },
      borderRadius: {
        xs: "4px",
        sm: "6px",
        md: "10px",
        lg: "14px",
        xl: "20px",
        "2xl": "24px",
      }
    },
  },
  plugins: [],
}
