// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//         "primary-label": "#8E8E8E",
//       },
//     },
//   },

//   plugins: [require("daisyui")],
// };
// export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-label": "#8E8E8E",
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        marquee: "marquee 20s linear infinite", // Thêm animation
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-10px) scale(1.05)" },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" }, // Start from right
          "100%": { transform: "translateX(-100%)" }, // End at left
        },
      },
    },
  },
  plugins: [require("daisyui")],
};

export default config;
