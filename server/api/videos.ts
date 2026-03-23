import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient<any>(event);
  const method = event.node.req.method;

  // === MENGAMBIL DATA (GET) ===
  if (method === 'GET') {
    const { data, error } = await client
      .from('videos')
      .select('*')
      .order('id', { ascending: false });

    if (error) {
      throw createError({ statusCode: 500, statusMessage: error.message });
    }
    
    // Perbaikan Error 'never': Kita beritahu TypeScript bahwa 'data' adalah array dari objek apa saja (any[])
    const videoRecords = data as any[];
    
    // Perbaikan Error 'item': Beri tahu bahwa 'item' tipenya adalah 'any'
    return videoRecords ? videoRecords.map((item: any) => ({ id: item.id, ...item.data })) : [];
  }

  // === MENYIMPAN DATA (POST) ===
  if (method === 'POST') {
    // Perbaikan Error 'item implicitly any': Beri tahu bahwa 'body' yang dibaca adalah array of any
    const body = await readBody<any[]>(event);
    
    await client.from('videos').delete().neq('id', 0);
    
    if (body && Array.isArray(body) && body.length > 0) {
      const formattedData = body.map((item: any) => ({
        id: item.id,
        data: item 
      }));

      const { data, error } = await client.from('videos').insert(formattedData);
      
      if (error) {
        throw createError({ statusCode: 500, statusMessage: error.message });
      }
      return data;
    }
    return [];
  }
});