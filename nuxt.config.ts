import {resolve} from 'path';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
  router: {
    base: '/xtinayan.github.io/'
  },
  alias:{
    '@':resolve(__dirname, "/"),
  },
  css:[
    "~/assets/main.scss"
  ],
  postcss:{
    plugins:{
      tailwindcss:{},
      autoprefixer:{},
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxt/content"]
})