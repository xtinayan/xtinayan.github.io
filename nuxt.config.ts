import { resolve } from 'path';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/me.png', sizes: '32x32' }],
    },
  },
  router: {
    base: '/xtinayan.github.io/'
  },
  pwa: { icon: { source: '~/static/me.png' }, },
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