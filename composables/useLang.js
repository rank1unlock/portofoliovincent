// composables/useLang.js

/**
 * Composable untuk mengatur state bahasa di seluruh aplikasi.
 * 'id' untuk Bahasa Indonesia, 'en' untuk Bahasa Inggris.
 */
export const useLang = () => {
  // useState adalah cara Nuxt 3 membuat state global yang reaktif.
  // Bahasa defaultnya adalah 'id' (Indonesia).
  const lang = useState('lang', () => 'id');

  // Fungsi untuk mengganti bahasa
  const setLang = (newLang) => {
    if (['id', 'en'].includes(newLang)) {
      lang.value = newLang;
    }
  };

  // Fungsi untuk toggle (berganti) antara 'id' dan 'en'
  const toggleLang = () => {
    lang.value = lang.value === 'id' ? 'en' : 'id';
  };

  // Kembalikan state dan fungsi agar bisa digunakan di komponen lain
  return {
    lang,
    setLang,
    toggleLang
  };
};
