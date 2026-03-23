import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const client = createClient(config.supabaseUrl, config.supabaseKey)
  
  const { data, error } = await client.from('testimonials').select('data')
  if (error) return []
  return data.map((item: any) => item.data)
})