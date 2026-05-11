import { resolve } from 'path';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',

  runtimeConfig: {
    public: {
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL ?? '',
      supabaseAnonKey: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY ?? '',
      journalPassword: process.env.NUXT_PUBLIC_JOURNAL_PASSWORD ?? '',
    },
  },

  app: {
    head: {
      title: "Chrissy's Space :)",
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', sizes: '32x32' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Courier+Prime:wght@400;700&family=DM+Sans:wght@400;500&display=swap' },
      ],
      meta: [
        { name: 'description', content: "Welcome to Chrissy's cozy corner on the internet!" },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    },
  },

  router: {
    base: '/xtinayan.github.io/'
  },

  pwa: { icon: { source: '~/static/me.svg' }, },

  alias: {
    '@': resolve(__dirname, "/"),
  },

  css: [
    "~/assets/main.scss",
    '@fortawesome/fontawesome-free/css/all.min.css'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  routeRules: {
    '/journal': { ssr: false },
    '/journal/**': { ssr: false },
    '/journal-unlock': { ssr: false },
  },

  vite: {
    optimizeDeps: {
      include: ['debug']
    }
  },

  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxtjs/mdc", "@nuxt/image"],
  components: true,
  compatibilityDate: '2026-05-11',
})