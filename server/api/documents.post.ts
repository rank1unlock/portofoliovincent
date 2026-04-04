import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const client = createClient(config.supabaseUrl, config.supabaseKey)
  const body = await readBody(event)

  // Kita hanya butuh 1 baris data (id: 1) untuk menyimpan semua link
  const { error } = await client.from('documents').upsert({ id: 1, data: body })
  
  if (error) throw createError({ statusCode: 500, message: error.message })
  return { status: 'success' }
})