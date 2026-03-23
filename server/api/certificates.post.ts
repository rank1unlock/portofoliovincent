import { serverSupabaseServiceRole } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const client = serverSupabaseServiceRole(event)
  const body = await readBody(event) // Data dari form Admin

  // 1. Hapus semua data lama (karena kita akan replace semua)
  await client.from('certificates').delete().neq('id', 0)

  // 2. Masukkan data baru ke tabel
  if (body && body.length > 0) {
    // Format datanya: kolom id diisi ID, kolom data diisi JSON
    const insertData = body.map((item: any) => ({ 
      id: item.id, 
      data: item 
    }))
    
    const { error } = await client.from('certificates').insert(insertData)
    if (error) throw createError({ statusCode: 500, message: error.message })
  }

  return { status: 'success' }
})