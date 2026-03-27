import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig()
    // Membuat client manual agar key Netlify terbaca sempurna
    const client = createClient(config.supabaseUrl, config.supabaseKey)
    
    // Ambil semua data dari tabel 'experiences'
    const { data, error } = await client.from('experiences').select('data')
    if (error) {
      console.error('Error GET experiences:', error)
      return []
    }
    
    // Format ulang data agar sesuai dengan yang dibaca oleh Vue
    return data.map((item: any) => item.data)
  } catch (err) {
    console.error('Fatal Error experiences.get:', err)
    return []
  }
})