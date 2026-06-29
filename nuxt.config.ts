// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxt/ui"],

  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],
  icon: {
    clientBundle: {
      scan: true,
      includeCustomCollections: true,
    },
  },
  colorMode: {
    preference: "system",
  },

  runtimeConfig: {
    public: {
      githubUsername: process.env.NUXT_PUBLIC_GITHUB_USERNAME,
    },
  },

  routeRules: {
    "/": { prerender: true },
  },

  compatibilityDate: "2025-01-15",

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },

  ssr: true,

  nitro: {
    preset: "github_pages",
  },

  app: {
    baseURL: "/",
  },
});
