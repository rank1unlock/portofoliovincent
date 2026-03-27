// server/api/gallery.post.ts
import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const client = createClient(config.supabaseUrl, config.supabaseKey)
  const body = await readBody(event) // Data array dari Admin

  // 1. Hapus data lama (Replace All)
  await client.from('gallery').delete().neq('id', 0)

  // 2. Masukkan data baru ke tabel
  if (body && Array.isArray(body) && body.length > 0) {
    const insertData = body.map((item: any) => ({ id: item.id, data: item }))
    const { error } = await client.from('gallery').insert(insertData)
    if (error) throw createError({ statusCode: 500, message: `Gagal Simpan Galeri: ${error.message}` })
  }
  return { status: 'success' }
})