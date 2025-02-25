import type { Config } from "tailwindcss";

const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        primary: "#06a449",
      },
      screens: {
        xs: "540px",
      },
    },
  },
};
export default config;
