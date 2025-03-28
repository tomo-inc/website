import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";

import react from "@astrojs/react";

const ENV_MATRIX = {
  development: {
    site: "http://localhost:3000",
    assetsPrefix: undefined
  },
  test: {
    site: "https://preview.tomo.inc",
    assetsPrefix: "https://preview.tomo.services"
  },
  production: {
    site: "https://tomo.inc",
    assetsPrefix: "https://tomo.services"
  }
};

const env = process.env.NODE_ENV || 'development';
const { site, assetsPrefix } = ENV_MATRIX[env];

// https://astro.build/config
export default defineConfig({
  site,
  base: '/',
  build: {
    assetsPrefix,
  },
  devToolbar: {
    enabled: false,
  },
  server: { host: true },
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    react({ include: ["**/react/*"] }),
  ],
});
