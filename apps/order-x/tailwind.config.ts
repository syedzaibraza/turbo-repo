// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "content" | "presets" | "theme"> = {
  content: ["./app/**/*.tsx", "../../packages/ui/src/**/*.tsx"],
  presets: [sharedConfig],
  theme: {
    extend: {
      colors: {
        primary: "#f7921d",
      },
    },
  },
};

export default config;
