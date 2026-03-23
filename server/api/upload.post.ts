import { serverSupabaseServiceRole } from '#supabase/server'

export default defineEventHandler(async (event) => {
  try {
    // 1. Panggil client Supabase
    const client = serverSupabaseServiceRole(event)
    
    // 2. Baca file dari form
    const formData = await readMultipartFormData(event)
    if (!formData || formData.length === 0) {
      throw createError({ statusCode: 400, statusMessage: 'Data form kosong.' })
    }

    const file = formData.find((item) => item.name === 'file')
    if (!file || !file.data) {
      throw createError({ statusCode: 400, statusMessage: 'File tidak ditemukan.' })
    }

    // 3. Buat nama file unik
    const originalName = file.filename || 'upload.png'
    const ext = originalName.split('.').pop() || 'png'
    const uniqueFilename = `img_${Date.now()}.${ext}`

    // 4. Upload ke Bucket 'portfolio-images' di Supabase
    const { error } = await client.storage
      .from('portfolio-images')
      .upload(uniqueFilename, file.data, {
        contentType: file.type || 'image/png'
      })

    if (error) throw error

    // 5. Dapatkan link URL publik dari gambar yang baru diupload
    const { data: publicUrlData } = client.storage
      .from('portfolio-images')
      .getPublicUrl(uniqueFilename)

    return {
      status: 'success',
      imageUrl: publicUrlData.publicUrl
    }
    
  } catch (error: any) {
    console.error('=== ERROR UPLOAD SUPABASE ===', error)
    throw createError({ statusCode: 500, statusMessage: error.message })
  }
})