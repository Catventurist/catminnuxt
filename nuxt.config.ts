// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry:false,
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  typescript: {
    shim: false,
    strict: true,
  },
  runtimeConfig: {
    apiSecret: "",
    public: {
      apiBase: "/api",
    },
  },
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@kevinmarrec/nuxt-pwa"
  ],
  pwa: {
    workbox: {
      enabled: false,
    },
  },
});
