// @ts-check
import { defineConfig } from "astro/config"

import tailwindcss from "@tailwindcss/vite"

import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  site: "https://cover2cover-hfdev.netlify.app/",

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      xslURL: "/rss/styles.xsl"
    })
  ]
})
