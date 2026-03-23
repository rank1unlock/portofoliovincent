import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
  try {

    const config = useRuntimeConfig()
    

    const client = createClient(config.supabaseUrl, config.supabaseKey)
    

    const { data, error } = await client.from('projects').select('data')
    
    if (error) {
      console.error('Error GET projects:', error)
      return []
    }
    

    return data.map((item: any) => item.data)

  } catch (err) {
    console.error('Fatal Error in projects.get:', err)
    return []
  }
})