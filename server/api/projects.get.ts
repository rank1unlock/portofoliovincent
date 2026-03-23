import { serverSupabaseServiceRole } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const client = serverSupabaseServiceRole(event)
  
  // Ambil semua data dari tabel 'projects'
  const { data, error } = await client.from('projects').select('data')
  
  if (error) {
    console.error('Error GET projects:', error)
    return []
  }
  
  // Format ulang data agar sesuai dengan yang dibaca oleh Vue
  return data.map((item: any) => item.data)
})