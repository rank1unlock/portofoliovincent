import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const client = createClient(config.supabaseUrl, config.supabaseKey)
  const body = await readBody(event)

  await client.from('educations').delete().neq('id', 0)

  if (body && Array.isArray(body) && body.length > 0) {
    const insertData = body.map((item: any) => ({ id: item.id, data: item }))
    const { error } = await client.from('educations').insert(insertData)
    if (error) throw createError({ statusCode: 500, message: error.message })
  }
  return { status: 'success' }
})