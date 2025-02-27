// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxthq/studio",
    "nuxt-swiper",
    "@vesp/nuxt-fontawesome"
  ],
  css: [
    "@fontsource/poppins/400.css",
    "@fontsource/poppins/500.css",
    "@fontsource/poppins/600.css",
    "~/assets/css/main.css",
  ],
  content: { 
    contentHead: false,
  },
  postcss: {
    plugins: {
      autoprefixer: {},
      cssnano: {},
      "@tailwindcss/postcss": {},
      "postcss-simple-vars": {},
      "postcss-import": {},
      "postcss-preset-env": {},
    },
  },
  // @ts-ignore
  fontawesome: {
    icons: {
      solid: ["chevron-left", "chevron-right"],
    },
  },
});
