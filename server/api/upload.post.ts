import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig()

    const client = createClient(config.supabaseUrl, config.supabaseKey)

    const formData = await readMultipartFormData(event)
    if (!formData || formData.length === 0) {
      throw createError({ statusCode: 400, statusMessage: 'Data form kosong.' })
    }

    const file = formData.find((item: any) => item.name === 'file')
    if (!file || !file.data) {
      throw createError({ statusCode: 400, statusMessage: 'File tidak ditemukan.' })
    }

    const originalName = file.filename || 'upload.png'
    const ext = originalName.split('.').pop() || 'png'
    const uniqueFilename = `img_${Date.now()}.${ext}`

    const { error } = await client.storage
      .from('portfolio-images')
      .upload(uniqueFilename, file.data, {
        contentType: file.type || 'image/png',
        upsert: true
      })

    if (error) throw error

    const { data: publicUrlData } = client.storage
      .from('portfolio-images')
      .getPublicUrl(uniqueFilename)

    return {
      status: 'success',
      imageUrl: publicUrlData.publicUrl
    }
  } catch (error: any) {
    console.error('=== ERROR UPLOAD SUPABASE ===', error)
    throw createError({
      statusCode: 500,
      statusMessage: `Gagal Upload: ${error.message}`
    })
  }
})
