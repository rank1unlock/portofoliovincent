// server/api/gallery.get.ts
import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig()
    const client = createClient(config.supabaseUrl, config.supabaseKey)
    
    // Ambil data dari tabel 'gallery'
    const { data, error } = await client.from('gallery').select('data')
    if (error) return []
    
    // Format ulang agar sesuai dengan Vue
    return data.map((item: any) => item.data)
  } catch (err) {
    return []
  }
})