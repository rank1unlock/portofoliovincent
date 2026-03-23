<!-- pages/index.vue -->
<template>
  <div class="bg-gray-900">
    <TheNavbar />
    <main>
      <HeroSection />
      <AboutMeSection />
      <GallerySection />
      <ProjectSection />
      <SkillsSection />
      <VideoIntroductionSection />
      <TestimonialSection /> 
      <ContactSection />
    </main>
    <TheFooter />
  </div>
</template>
<script setup>
import { useLang } from '~/composables/useLang';

const { lang } = useLang();

useHead({
  // Judul akan berubah sesuai bahasa yang dipilih
  title: computed(() => lang.value === 'id' 
    ? 'Vincent Axel - Web Developer & IT Specialist' 
    : 'Vincent Axel - Web Developer & IT Specialist'),
  
  meta: [
    { 
      name: 'description', 
      content: computed(() => lang.value === 'id'
        ? 'Portofolio pribadi Vincent Axel Alexander, seorang Web Developer dan IT Specialist berpengalaman dalam Nuxt.js, Laravel, dan manajemen jaringan.'
        : 'Personal portfolio of Vincent Axel Alexander, a Web Developer and IT Specialist experienced in Nuxt.js, Laravel, and network management.')
    }
  ]
})
</script>