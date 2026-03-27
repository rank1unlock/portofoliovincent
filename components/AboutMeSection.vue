<template>
  <section
    id="about"
    ref="target"
    class="section-about py-20 px-4 md:px-8 lg:px-12 overflow-hidden relative"
  >
    <div class="background-container">
      <div class="gradient-orbs">
        <div class="gradient-orb orb-1"></div>
        <div class="gradient-orb orb-2"></div>
        <div class="gradient-orb orb-3"></div>
        <div class="gradient-orb orb-4"></div>
      </div>

      <div class="particles-container">
        <div class="particle" v-for="i in 40" :key="i" :style="getParticleStyle(i)"></div>
      </div>

      <div class="geometric-patterns">
        <div class="pattern pattern-1"></div>
        <div class="pattern pattern-2"></div>
        <div class="pattern pattern-3"></div>
      </div>

      <div class="dynamic-grid"></div>

      <div class="light-beams">
        <div class="beam beam-1"></div>
        <div class="beam beam-2"></div>
        <div class="beam beam-3"></div>
      </div>
    </div>

    <div class="container mx-auto max-w-7xl relative z-10">
      <div class="section-header text-center mb-16">
        <div class="header-decoration">
          <div class="deco-line line-left"></div>
          <div class="header-badge" :class="targetIsVisible ? 'active' : ''">
            <Icon name="mdi:account-circle" class="w-6 h-6" />
          </div>
          <div class="deco-line line-right"></div>
        </div>
        <h2
          class="section-title text-5xl md:text-6xl font-black mb-4"
          :class="targetIsVisible ? 'active' : ''"
        >
          {{ T.about.title[lang] }}
        </h2>
        <p
          class="section-subtitle text-lg text-gray-400 max-w-2xl mx-auto"
          :class="targetIsVisible ? 'active' : ''"
        >
          {{ T.about.subtitle?.[lang] || 'Get to know more about my background and expertise' }}
        </p>
      </div>

      <div class="content-grid grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        <div class="profile-column lg:col-span-1">
          <div class="profile-card" :class="targetIsVisible ? 'active' : ''">
            <div class="profile-image-wrapper">
              <div class="image-decorations">
                <div class="deco-ring ring-1"></div>
                <div class="deco-ring ring-2"></div>
                <div class="deco-ring ring-3"></div>
              </div>

              <div class="image-glow"></div>

              <img
                src="/images/foto.png"
                alt="Vincent Axel Alexander - Professional Portfolio Photo"
                class="profile-image"
                loading="lazy"
              />

              <div class="status-indicator">
                <div class="status-dot"></div>
                <span class="status-text">{{ T.about.status?.[lang] || 'Available' }}</span>
              </div>
            </div>

            <div class="profile-info">
              <h3 class="profile-name">Vincent Axel Alexander</h3>
              <p class="profile-role">{{ T.about.role?.[lang] || 'Full Stack Developer' }}</p>

              <div class="stats-grid">
                <div class="stat-card">
                  <div class="stat-icon">
                    <Icon name="mdi:briefcase" class="w-5 h-5" />
                  </div>
                  <div class="stat-content">
                    <div class="stat-value">2+</div>
                    <div class="stat-label">{{ T.about.years?.[lang] || 'Years' }}</div>
                  </div>
                </div>

                <div class="stat-card">
                  <div class="stat-icon">
                    <Icon name="mdi:check-circle" class="w-5 h-5" />
                  </div>
                  <div class="stat-content">
                    <div class="stat-value">{{ displayProjectCount }}+</div>
                    <div class="stat-label">{{ T.about.projects_label?.[lang] || 'Projects' }}</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="education-section mt-8 pt-8 border-t border-slate-700/50 text-left">
              <h4 class="social-title !text-left !mb-5">{{ T.about.education?.[lang] || (lang === 'en' ? 'Education' : 'Pendidikan') }}</h4>
              
              <div class="space-y-4">
                <div v-for="edu in educations" :key="edu.id" class="relative pl-5 border-l-2 border-slate-700 hover:border-blue-500 transition-colors duration-300">
                  <div class="absolute w-2.5 h-2.5 bg-blue-500 rounded-full -left-[5px] top-1.5 shadow-[0_0_10px_#3b82f6]"></div>
                  
                  <h5 class="text-white font-bold text-[14px] leading-tight">
                    {{ edu.degree?.[lang] }} <span class="text-gray-400 font-normal">in</span> {{ edu.major?.[lang] }}
                  </h5>
                  <p class="text-blue-400 text-[13px] font-medium mt-1">{{ edu.institution }}</p>
                  <p class="text-gray-500 text-[12px] mt-0.5 flex items-center gap-1">
                    <Icon name="mdi:calendar-blank" class="w-3 h-3" />
                    {{ edu.period }}
                  </p>
                  <p v-if="edu.gpa" class="text-yellow-500/90 font-bold text-[12px] flex items-center gap-1 bg-yellow-500/10 px-2 py-0.5 rounded-md border border-yellow-500/20">
                      <Icon name="mdi:star-shooting-outline" class="w-3.5 h-3.5" />
                      GPA: {{ edu.gpa }}
                  </p>
                </div>
                
                <div v-if="!educations || educations.length === 0" class="text-slate-500 text-xs italic">
                  Belum ada data pendidikan.
                </div>
              </div>
            </div>  

            <div class="social-section">
              <h4 class="social-title">{{ T.about.connect?.[lang] || 'Connect With Me' }}</h4>
              <div class="social-grid">
                <a
                  href="https://www.linkedin.com/in/vincent-axel-20b7b1235/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-btn linkedin"
                  aria-label="LinkedIn Profile"
                >
                  <div class="btn-bg"></div>
                  <Icon name="mdi:linkedin" class="social-icon" />
                  <span class="social-label">LinkedIn</span>
                  <div class="btn-shine"></div>
                </a>

                <a
                  href="https://github.com/rank1unlock"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-btn github"
                  aria-label="GitHub Profile"
                >
                  <div class="btn-bg"></div>
                  <Icon name="mdi:github" class="social-icon" />
                  <span class="social-label">GitHub</span>
                  <div class="btn-shine"></div>
                </a>

                <a
                  href="https://www.instagram.com/just_vincent_gs/?next=%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-btn instagram"
                  aria-label="Instagram Profile"
                >
                  <div class="btn-bg"></div>
                  <Icon name="mdi:instagram" class="social-icon" />
                  <span class="social-label">Instagram</span>
                  <div class="btn-shine"></div>
                </a>

                <a
                  href="https://wa.me/6281252850845"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-btn whatsapp"
                  aria-label="WhatsApp Contact"
                >
                  <div class="btn-bg"></div>
                  <Icon name="mdi:whatsapp" class="social-icon" />
                  <span class="social-label">WhatsApp</span>
                  <div class="btn-shine"></div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="content-column lg:col-span-2">
          <div class="content-section description-section" :class="targetIsVisible ? 'active' : ''">
            <div class="section-icon">
              <Icon name="mdi:account-details" class="w-8 h-8" />
            </div>
            <h3 class="content-title">{{ T.about.about_me?.[lang] || 'About Me' }}</h3>
            <p class="content-text">
              {{ T.about.description[lang] }}
            </p>
          </div>

          <div class="content-section experience-section" :class="targetIsVisible ? 'active' : ''">
            <div class="section-icon">
              <Icon name="mdi:briefcase" class="w-8 h-8" />
            </div>
            <h3 class="content-title">
              {{ T.about.short_experience?.[lang] || 'Pengalaman Singkat' }}
            </h3>

            <div class="experience-timeline">
              <div v-for="exp in experiences" :key="exp.id" class="timeline-item">
                <div class="timeline-marker">
                  <div class="marker-dot"></div>
                  <div class="marker-pulse"></div>
                </div>

                <div class="timeline-content">
                  <div
                    class="timeline-card cursor-pointer group"
                    :class="{ expanded: expandedExpId === exp.id }"
                    @click="toggleExp(exp.id)"
                  >
                    <div class="card-header flex items-start gap-4 !mb-0 relative z-10">
                      <div class="company-logo items-center justify-center flex-shrink-0">
                        <Icon name="mdi:office-building" class="w-6 h-6" />
                      </div>
                      <div class="header-info flex-1">
                        <h4 class="job-title text-xl font-bold">{{ exp.title[lang] }}</h4>
                        <p class="company-name text-blue-400">{{ exp.company[lang] }}</p>

                        <div class="job-badge w-fit hidden md:flex mt-3">
                          {{ exp.period[lang] }}
                        </div>
                      </div>

                      <div class="expand-arrow flex items-center gap-3">
                        <div
                          class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center transition-transform duration-300"
                          :class="{ 'rotate-180': expandedExpId === exp.id }"
                        >
                          <Icon name="mdi:chevron-down" class="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                    </div>

                    <div
                      class="grid transition-all duration-300 ease-in-out"
                      :class="
                        expandedExpId === exp.id
                          ? 'grid-rows-[1fr] opacity-100 mt-6 pt-6 border-t border-slate-700/50'
                          : 'grid-rows-[0fr] opacity-0 mt-0 pt-0 border-transparent'
                      "
                    >
                      <div class="overflow-hidden relative z-10">
                        <div class="job-badge md:hidden w-fit mb-4">
                          {{ exp.period[lang] }}
                        </div>

                        <div v-if="exp.points && exp.points.length > 0" class="description-grid grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mt-6">
                          <div v-for="(point, i) in exp.points" :key="`pt-${i}`" class="point-item">
                            <h5 class="text-white font-bold text-[15px] md:text-[16px] block mb-2 leading-tight">
                              {{ point?.title?.[lang] || '' }}
                            </h5>
                            <p class="text-gray-400 text-[14px] md:text-[15px] leading-relaxed block">
                              {{ point?.desc?.[lang] || '' }}
                            </p>
                          </div>
                        </div>

                        <div
                          v-else-if="exp.description && (exp.description.id || exp.description.en)"
                          class="text-gray-400 text-[14px] leading-relaxed"
                        >
                          {{ exp.description[lang] || exp.description.id }}
                        </div>

                        <div
                          v-if="exp.tags && exp.tags.length > 0"
                          class="job-highlights flex flex-wrap gap-2 mt-6"
                        >
                          <span class="highlight-badge" v-for="(tag, i) in exp.tags" :key="i">
                            {{ tag }}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="card-decoration z-0">
                      <div class="deco-corner corner-tl"></div>
                      <div class="deco-corner corner-br"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                v-if="!experiences || experiences.length === 0"
                class="text-slate-500 italic text-sm py-4"
              >
                Belum ada pengalaman kerja yang ditambahkan.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useIntersectionObserver, useTransition, TransitionPresets } from '@vueuse/core'
import { useLang } from '~/composables/useLang'
import { translations } from '~/data/translations'

const { lang } = useLang()
const T = translations

const target = ref(null)
const targetIsVisible = ref(false)

const { data: experiences } = await useFetch('/api/experiences')
const { data: educations } = await useFetch('/api/educations');

const rawProjectCount = ref(0)
const hasAnimated = ref(false)

const animatedProjectCount = useTransition(rawProjectCount, {
  duration: 2500,
  transition: TransitionPresets.easeOutExpo
})

// Membulatkan angka agar tidak muncul desimal saat animasi berjalan
const displayProjectCount = computed(() => Math.round(animatedProjectCount.value))

// Fungsi mengambil jumlah data dari Supabase
const fetchProjectCount = async () => {
  try {
    const client = useSupabaseClient()
    // Menggunakan { count: 'exact', head: true } agar sangat ringan (hanya hitung baris)
    const { count, error } = await client
      .from('projects')
      .select('*', { count: 'exact', head: true })

    if (!error && count !== null) return count
    return 5 // Fallback jika gagal
  } catch (err) {
    return 5 // Fallback jika error
  }
}

// --- LOGIKA ACCORDION (BUKA/TUTUP PENGALAMAN) ---
// State untuk melacak ID pengalaman mana yang sedang dibuka (Expanded)
const expandedExpId = ref(null)

// Fungsi untuk membuka/menutup kotak pengalaman
const toggleExp = (id) => {
  if (expandedExpId.value === id) {
    expandedExpId.value = null // Tutup jika diklik lagi (Accordion collapse)
  } else {
    expandedExpId.value = id // Buka kotak yang diklik (Accordion expand)
  }
}

// --- INTERSECTION OBSERVER ---
useIntersectionObserver(
  target,
  async ([{ isIntersecting }]) => {
    if (isIntersecting) {
      targetIsVisible.value = true

      // Jalankan animasi angka proyek hanya sekali saat section terlihat
      if (!hasAnimated.value) {
        const finalCount = await fetchProjectCount()
        rawProjectCount.value = finalCount
        hasAnimated.value = true
      }
    }
  },
  { threshold: 0.1 }
)

// (Dihapus: Skills, job1Tags statis yang lama karena sudah dinamis)

const getParticleStyle = (index) => {
  const delay = Math.random() * 10
  const duration = 20 + Math.random() * 15
  const size = 2 + Math.random() * 4
  const startX = Math.random() * 100
  const hue = 200 + Math.random() * 80

  return {
    left: startX + '%',
    animationDelay: delay + 's',
    animationDuration: duration + 's',
    width: size + 'px',
    height: size + 'px',
    background: `hsl(${hue}, 70%, 60%)`,
    boxShadow: `0 0 ${size * 3}px hsl(${hue}, 70%, 60%)`
  }
}
</script>

<style scoped>
/* Base section styling */
.section-about {
  background: linear-gradient(180deg, #0a0f1e 0%, #1a1f35 50%, #0f1419 100%);
  position: relative;
  min-height: 100vh;
}

/* Background container */
.background-container {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

/* Gradient orbs */
.gradient-orbs {
  position: absolute;
  width: 100%;
  height: 100%;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
  animation: float-orb 20s ease-in-out infinite;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, #3b82f6, transparent);
  top: 10%;
  left: 10%;
}

.orb-2 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, #8b5cf6, transparent);
  top: 50%;
  right: 10%;
  animation-delay: -5s;
}

.orb-3 {
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, #10b981, transparent);
  bottom: 20%;
  left: 30%;
  animation-delay: -10s;
}

.orb-4 {
  width: 450px;
  height: 450px;
  background: radial-gradient(circle, #f59e0b, transparent);
  top: 30%;
  left: 50%;
  animation-delay: -15s;
}

@keyframes float-orb {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(50px, -80px) scale(1.1);
  }
  66% {
    transform: translate(-30px, -40px) scale(0.9);
  }
}

/* Particles */
.particles-container {
  position: absolute;
  width: 100%;
  height: 100%;
}

.particle {
  position: absolute;
  border-radius: 50%;
  animation: particle-float linear infinite;
  opacity: 0.6;
}

@keyframes particle-float {
  0% {
    transform: translateY(100vh) rotate(0deg) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 0.6;
  }
  90% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(-100px) rotate(720deg) scale(0);
    opacity: 0;
  }
}

/* Geometric patterns */
.geometric-patterns {
  position: absolute;
  width: 100%;
  height: 100%;
}

.pattern {
  position: absolute;
  opacity: 0.03;
  animation: pattern-rotate 30s linear infinite;
}

.pattern-1 {
  width: 200px;
  height: 200px;
  border: 2px solid #3b82f6;
  top: 20%;
  left: 15%;
  transform: rotate(45deg);
}

.pattern-2 {
  width: 150px;
  height: 150px;
  border: 2px solid #8b5cf6;
  border-radius: 50%;
  top: 60%;
  right: 20%;
  animation-delay: -10s;
}

.pattern-3 {
  width: 180px;
  height: 180px;
  border: 2px solid #10b981;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  bottom: 25%;
  left: 40%;
  animation-delay: -20s;
}

@keyframes pattern-rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Dynamic grid */
.dynamic-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
  background-size: 100px 100px;
  animation: grid-flow 20s linear infinite;
}

@keyframes grid-flow {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100px 100px;
  }
}

/* Light beams */
.light-beams {
  position: absolute;
  width: 100%;
  height: 100%;
}

.beam {
  position: absolute;
  background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.05), transparent);
  animation: beam-sweep 15s ease-in-out infinite;
}

.beam-1 {
  width: 300px;
  height: 2px;
  top: 25%;
  left: -300px;
}

.beam-2 {
  width: 250px;
  height: 2px;
  top: 55%;
  left: -250px;
  animation-delay: -5s;
}

.beam-3 {
  width: 350px;
  height: 2px;
  top: 75%;
  left: -350px;
  animation-delay: -10s;
}

@keyframes beam-sweep {
  to {
    transform: translateX(calc(100vw + 400px));
  }
}

/* Section header */
.section-header {
  opacity: 0;
  transform: translateY(30px);
  animation: header-appear 1s ease-out 0.2s forwards;
}

@keyframes header-appear {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.header-decoration {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.deco-line {
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #3b82f6);
  border-radius: 1px;
}

.line-right {
  background: linear-gradient(90deg, #3b82f6, transparent);
}

.header-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: rgba(59, 130, 246, 0.1);
  border: 2px solid rgba(59, 130, 246, 0.3);
  border-radius: 50%;
  color: #60a5fa;
  transform: scale(0);
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.header-badge.active {
  transform: scale(1);
  animation: badge-pulse 3s ease-in-out infinite;
}

@keyframes badge-pulse {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);
  }
  50% {
    box-shadow: 0 0 0 20px rgba(59, 130, 246, 0);
  }
}

.section-title {
  background: linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease;
}

.section-title.active {
  opacity: 1;
  transform: translateY(0);
  animation: gradient-flow 5s ease infinite;
}

@keyframes gradient-flow {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.section-subtitle {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease 0.2s;
}

.section-subtitle.active {
  opacity: 1;
  transform: translateY(0);
}

/* Profile card */
.profile-card {
  background: rgba(30, 41, 59, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 24px;
  padding: 2rem;
  opacity: 0;
  transform: translateX(-50px);
  transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
}

.profile-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05));
  opacity: 0;
  transition: opacity 0.5s ease;
}

.profile-card:hover::before {
  opacity: 1;
}

.profile-card.active {
  opacity: 1;
  transform: translateX(0);
}

/* Profile image wrapper */
.profile-image-wrapper {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto 2rem;
}

.image-decorations {
  position: absolute;
  inset: 0;
}

.deco-ring {
  position: absolute;
  inset: 0;
  border: 2px solid transparent;
  border-radius: 50%;
  animation: ring-spin 8s linear infinite;
}

.ring-1 {
  border-top-color: #3b82f6;
  border-right-color: #3b82f6;
  animation-duration: 8s;
}

.ring-2 {
  border-bottom-color: #8b5cf6;
  border-left-color: #8b5cf6;
  animation-duration: 10s;
  animation-direction: reverse;
}

.ring-3 {
  border-top-color: #10b981;
  border-bottom-color: #10b981;
  animation-duration: 12s;
  transform: rotate(45deg);
}

@keyframes ring-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.image-glow {
  position: absolute;
  inset: -20px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent);
  filter: blur(30px);
  animation: glow-pulse 3s ease-in-out infinite;
}

@keyframes glow-pulse {
  0%,
  100% {
    opacity: 0.5;
    transform: scale(0.9);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
}

.profile-image {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(59, 130, 246, 0.5);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 2;
}

.profile-image:hover {
  transform: scale(1.05);
  border-color: #60a5fa;
  box-shadow: 0 30px 80px rgba(59, 130, 246, 0.4);
}

/* Status indicator */
.status-indicator {
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(16, 185, 129, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(16, 185, 129, 0.5);
  border-radius: 20px;
  padding: 0.5rem 1rem;
  z-index: 3;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  animation: status-blink 2s ease-in-out infinite;
  box-shadow: 0 0 10px #10b981;
}

@keyframes status-blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}

.status-text {
  font-size: 0.75rem;
  color: #6ee7b7;
  font-weight: 600;
}

/* Profile info */
.profile-info {
  text-align: center;
  margin-bottom: 2rem;
}

.profile-name {
  font-size: 1.5rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 0.5rem;
}

.profile-role {
  font-size: 1rem;
  color: #60a5fa;
  margin-bottom: 1.5rem;
}

/* Stats grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1.5rem;
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(55, 65, 81, 0.5);
  border: 1px solid rgba(75, 85, 99, 0.3);
  border-radius: 12px;
  padding: 1rem;
  transition: all 0.3s ease;
}

.stat-card:hover {
  background: rgba(59, 130, 246, 0.1);
  border-color: rgba(59, 130, 246, 0.5);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
}

.stat-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border-radius: 10px;
  color: white;
}

.stat-content {
  flex: 1;
}

.stat-value {
  font-size: 1.25rem;
  font-weight: 800;
  color: #fff;
  line-height: 1;
}

.stat-label {
  font-size: 0.75rem;
  color: #9ca3af;
  margin-top: 0.25rem;
}

/* Social section */
.social-section {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(75, 85, 99, 0.3);
}

.social-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
  text-align: center;
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

.social-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1rem;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  text-decoration: none;
  border: 1px solid transparent;
}

.btn-bg {
  position: absolute;
  inset: 0;
  background: rgba(55, 65, 81, 0.5);
  transition: all 0.4s ease;
  z-index: 0;
}

.social-icon {
  width: 20px;
  height: 20px;
  position: relative;
  z-index: 2;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.social-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #e5e7eb;
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
}

.btn-shine {
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: translateX(-100%) skewX(-15deg);
  transition: transform 0.6s ease;
  z-index: 1;
}

.social-btn:hover .btn-shine {
  transform: translateX(100%) skewX(-15deg);
}

.social-btn:hover .social-icon {
  transform: scale(1.2) rotate(10deg);
}

.social-btn.linkedin:hover .btn-bg {
  background: linear-gradient(135deg, #0077b5, #005885);
}

.social-btn.linkedin:hover {
  border-color: #0077b5;
  box-shadow: 0 10px 30px rgba(0, 119, 181, 0.4);
  transform: translateY(-3px);
}

.social-btn.github:hover .btn-bg {
  background: linear-gradient(135deg, #333, #000);
}

.social-btn.github:hover {
  border-color: #333;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  transform: translateY(-3px);
}

.social-btn.instagram:hover .btn-bg {
  background: linear-gradient(135deg, #e4405f, #833ab4, #fcaf45);
}

.social-btn.instagram:hover {
  border-color: #e4405f;
  box-shadow: 0 10px 30px rgba(228, 64, 95, 0.4);
  transform: translateY(-3px);
}

.social-btn.whatsapp:hover .btn-bg {
  background: linear-gradient(135deg, #25d366, #128c7e);
}

.social-btn.whatsapp:hover {
  border-color: #25d366;
  box-shadow: 0 10px 30px rgba(37, 211, 102, 0.4);
  transform: translateY(-3px);
}

/* Content sections */
.content-section {
  background: rgba(30, 41, 59, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.content-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #3b82f6, transparent);
  transform: scaleX(0);
  transition: transform 0.8s ease;
}

.content-section.active {
  opacity: 1;
  transform: translateY(0);
}

.content-section.active::before {
  transform: scaleX(1);
}

.description-section.active {
  transition-delay: 0.2s;
}

.experience-section.active {
  transition-delay: 0.4s;
}

.section-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border-radius: 12px;
  color: white;
  margin-bottom: 1rem;
  animation: icon-float 3s ease-in-out infinite;
}

@keyframes icon-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.content-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
}

.content-title::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 50%;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  border-radius: 2px;
  animation: title-line-extend 1s ease-out forwards;
}

@keyframes title-line-extend {
  from {
    width: 0;
  }
  to {
    width: 50%;
  }
}

.content-text {
  font-size: 1rem;
  line-height: 1.8;
  color: #d1d5db;
  position: relative;
  padding-left: 1.5rem;
}

.content-text::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, #3b82f6, #8b5cf6);
  border-radius: 2px;
}

/* Experience timeline */
.experience-timeline {
  position: relative;
  padding-left: 2rem;
}

.experience-timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, #3b82f6, #8b5cf6, #10b981);
  border-radius: 1px;
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-marker {
  position: absolute;
  left: -2.5rem;
  top: 0;
}

.marker-dot {
  width: 16px;
  height: 16px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border: 3px solid rgba(30, 41, 59, 0.8);
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
  animation: marker-pulse 2s ease-in-out infinite;
}

@keyframes marker-pulse {
  0%,
  100% {
    transform: scale(1);
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
  }
  50% {
    transform: scale(1.2);
    box-shadow: 0 0 30px rgba(59, 130, 246, 0.9);
  }
}

.marker-pulse {
  position: absolute;
  inset: -8px;
  border: 2px solid rgba(59, 130, 246, 0.5);
  border-radius: 50%;
  animation: pulse-expand 2s ease-out infinite;
}

@keyframes pulse-expand {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

.timeline-card {
  position: relative;
  background: rgba(55, 65, 81, 0.5);
  border: 1px solid rgba(75, 85, 99, 0.3);
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.timeline-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.timeline-card:hover::before {
  opacity: 1;
}

/* INTERAKTIF (Accordion Expanded) */
.timeline-card.expanded {
  background: rgba(30, 41, 59, 0.9);
  border-color: rgba(59, 130, 246, 0.8);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  transform: scale(1.02);
}

.card-header {
  position: relative;
  z-index: 2;
}

.company-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border-radius: 12px;
  color: white;
  flex-shrink: 0;
}

.header-info {
  flex: 1;
}

.job-title {
  color: #fff;
  margin-bottom: 0.25rem;
  transition: color 0.3s ease;
}

.timeline-card:hover .job-title,
.timeline-card.expanded .job-title {
  color: #60a5fa;
}

.company-name {
  font-size: 0.875rem;
  font-weight: 500;
}

.job-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: rgba(59, 130, 246, 0.2);
  border: 1px solid rgba(59, 130, 246, 0.4);
  border-radius: 20px;
  font-size: 0.75rem;
  color: #93c5fd;
  font-weight: 600;
  white-space: nowrap;
}

/* Poin-poin Deskripsi */
.description-grid {
  will-change: max-height, opacity;
  position: relative;
  z-index: 2;
}

.job-points-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.point-item {
  position: relative;
}

.point-item span {
  flex: 1;
}

.job-highlights {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
}

.highlight-badge {
  display: inline-flex;
  padding: 0.375rem 0.75rem;
  background: rgba(55, 65, 81, 0.8);
  border: 1px solid rgba(75, 85, 99, 0.5);
  border-radius: 8px;
  font-size: 0.75rem;
  color: #9ca3af;
  font-weight: 500;
  transition: all 0.3s ease;
}

.highlight-badge:hover {
  background: rgba(59, 130, 246, 0.2);
  border-color: rgba(59, 130, 246, 0.5);
  color: #60a5fa;
  transform: translateY(-2px);
}

.card-decoration {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.deco-corner {
  position: absolute;
  width: 30px;
  height: 30px;
  border: 2px solid rgba(59, 130, 246, 0.3);
  transition: all 0.3s ease;
}

.corner-tl {
  top: 10px;
  left: 10px;
  border-bottom: none;
  border-right: none;
  border-top-left-radius: 8px;
}

.corner-br {
  bottom: 10px;
  right: 10px;
  border-top: none;
  border-left: none;
  border-bottom-right-radius: 8px;
}

.timeline-card:hover .deco-corner,
.timeline-card.expanded .deco-corner {
  border-color: rgba(59, 130, 246, 0.8);
  transform: scale(1.1);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .content-grid {
    grid-template-columns: 1fr;
  }

  .profile-column {
    max-width: 500px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2.5rem;
  }

  .profile-card {
    padding: 1.5rem;
  }

  .profile-image-wrapper {
    width: 160px;
    height: 160px;
  }

  .social-grid {
    grid-template-columns: 1fr;
  }

  .content-section {
    padding: 1.5rem;
  }

  .content-title {
    font-size: 1.5rem;
  }

  .experience-timeline {
    padding-left: 1.5rem;
  }

  .timeline-marker {
    left: -2rem;
  }

  .timeline-card {
    padding: 1.25rem;
  }

  .card-header {
    flex-wrap: wrap;
    gap: 0.75rem !important; /* Force gap fix for mobile */
  }

  .job-badge {
    justify-content: center;
    font-size: 0.7rem;
    padding: 0.4rem 0.8rem;
  }

  .job-title {
    font-size: 1.1rem;
  }

  .description-grid {
    gap: 1.5rem;
  }

  .job-points-list {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 2rem;
  }

  .header-badge {
    width: 40px;
    height: 40px;
  }

  .deco-line {
    width: 40px;
  }

  .profile-image-wrapper {
    width: 140px;
    height: 140px;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .content-text {
    padding-left: 1rem;
  }

  .timeline-card {
    padding: 1rem;
  }

  .gradient-orb {
    opacity: 0.08;
  }

  .particles-container .particle {
    display: none;
  }
}

/* Accessibility & Performance */
@media (prefers-reduced-motion: reduce) {
  *,
  ::before,
  ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  .gradient-orb,
  .particles-container,
  .light-beams,
  .geometric-patterns {
    display: none;
  }
  .deco-ring {
    animation: none;
  }
}

.gradient-orb,
.particle,
.profile-image,
.social-btn,
.timeline-card,
.deco-corner,
.skill-progress {
  will-change: transform, opacity;
  transform: translateZ(0);
}
</style>
