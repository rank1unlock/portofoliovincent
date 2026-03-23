// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxtjs/supabase' // <-- Perbaikan nama modul (pakai js)
  ],
  
  supabase: {
    redirect: false // Sangat penting agar halamanmu tidak di-lock
  }, // <-- PERBAIKAN: Tambahan koma di sini sangat penting!
  
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

  runtimeConfig: {
    public: {
      adminPassword: process.env.ADMIN_PASSWORD || 'passwordCadangan123'
    }
  },
  
  compatibilityDate: '2025-05-15',
})