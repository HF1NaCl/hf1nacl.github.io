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
      icons: [
        // Nuxt UI internal default icons
        "lucide:arrow-down",
        "lucide:arrow-left",
        "lucide:arrow-right",
        "lucide:arrow-up",
        "lucide:arrow-up-right",
        "lucide:check",
        "lucide:chevron-down",
        "lucide:chevron-left",
        "lucide:chevron-right",
        "lucide:chevron-up",
        "lucide:chevrons-left",
        "lucide:chevrons-right",
        "lucide:circle-alert",
        "lucide:circle-check",
        "lucide:circle-x",
        "lucide:copy",
        "lucide:copy-check",
        "lucide:ellipsis",
        "lucide:eye",
        "lucide:eye-off",
        "lucide:file",
        "lucide:folder",
        "lucide:folder-open",
        "lucide:grip-vertical",
        "lucide:hash",
        "lucide:info",
        "lucide:lightbulb",
        "lucide:loader-circle",
        "lucide:menu",
        "lucide:minus",
        "lucide:monitor",
        "lucide:moon",
        "lucide:panel-left-close",
        "lucide:panel-left-open",
        "lucide:plus",
        "lucide:rotate-ccw",
        "lucide:search",
        "lucide:square",
        "lucide:sun",
        "lucide:triangle-alert",
        "lucide:upload",
        "lucide:x",
        // User code icons
        "lucide:folder-git",
        "lucide:github",
        "lucide:house",
        "lucide:list",
        "lucide:square-play",
        "lucide:square-x",
        "simple-icons:nuxt",
        "cib:php",
        "cib:js",
        "cib:typescript",
        "cib:html5",
        "cib:angular",
        "cib:vue-js",
        "bxl:c-sharp",
      ],
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
