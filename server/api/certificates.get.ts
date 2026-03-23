import { serverSupabaseServiceRole } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const client = serverSupabaseServiceRole(event)
  
  // Ambil semua data dari tabel 'certificates'
  const { data, error } = await client.from('certificates').select('data')
  
  if (error) {
    console.error('Error GET certificates:', error)
    return []
  }
  
  // Format ulang data agar sesuai dengan yang dibaca oleh Vue
  return data.map((item: any) => item.data)
})