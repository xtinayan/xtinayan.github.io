import { resolve } from 'path';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  target: 'static',

  app: {
    head: {
      title: "Chrissy's Space :)",
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', sizes: '32x32' }],
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
    "~/assets/main.scss"
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxt/content",
    "nuxt-aos"],
  components: true
})

