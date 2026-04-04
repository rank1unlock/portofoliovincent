import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig()
    const client = createClient(config.supabaseUrl, config.supabaseKey)
    
    const { data, error } = await client.from('documents').select('data').eq('id', 1).single()
    if (error || !data) return null
    
    return data.data
  } catch (err) {
    return null
  }
})