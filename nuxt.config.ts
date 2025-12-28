// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon'
  ], 
  css: [ 
    '@/assets/css/main.css',
  ],
    app: {
    head: {
      htmlAttrs: {
        // Anda bisa mengatur bahasa default di sini jika mau
        // lang: 'id' 
      },
    }
  },
  compatibilityDate: '2025-05-15',
})