import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            blockquote: {
              quotes: "none", // Disable the quote marks that it inserts
            },
          },
        },
      },
    },
  },
};

export default config;
