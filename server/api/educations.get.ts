import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig()
    const client = createClient(config.supabaseUrl, config.supabaseKey)
    
    const { data, error } = await client.from('educations').select('data')
    if (error) return []
    
    return data.map((item: any) => item.data)
  } catch (err) {
    return []
  }
})