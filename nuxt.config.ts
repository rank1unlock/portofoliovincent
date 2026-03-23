export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxtjs/supabase' 
  ],
  
  supabase: {
    redirect: false 
  },
  
  css: [ 
    '@/assets/css/main.css',
  ],
  
  app: {
    head: {
      htmlAttrs: {
      },
    }
  },

  runtimeConfig: {
    adminPassword: process.env.ADMIN_PASSWORD || 'passwordCadangan123',
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY,
    public: {
    }
  },
  
  compatibilityDate: '2025-05-15',
})