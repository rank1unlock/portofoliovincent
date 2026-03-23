import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const client = createClient(config.supabaseUrl, config.supabaseKey)
  const method = event.node.req.method

  if (method === 'GET') {
    const { data, error } = await client
      .from('videos')
      .select('*')
      .order('id', { ascending: false })
    if (error) throw createError({ statusCode: 500, statusMessage: error.message })

    const videoRecords = data as any[]
    return videoRecords ? videoRecords.map((item: any) => ({ id: item.id, ...item.data })) : []
  }

  if (method === 'POST') {
    const body = await readBody<any[]>(event)
    await client.from('videos').delete().neq('id', 0)

    if (body && Array.isArray(body) && body.length > 0) {
      const formattedData = body.map((item: any) => ({ id: item.id, data: item }))
      const { error } = await client.from('videos').insert(formattedData)
      if (error) throw createError({ statusCode: 500, statusMessage: error.message })
    }
    return { status: 'success' }
  }
})
