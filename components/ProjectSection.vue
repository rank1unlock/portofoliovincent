<template>
  <section id="projects" class="professional-projects-section py-20 px-4 overflow-hidden relative">
    <div class="background-wrapper">
      <div class="gradient-orbs">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="orb orb-3"></div>
      </div>

      <div class="orbital-grid-pattern"></div>

      <div class="floating-particles">
        <div
          v-for="i in 15"
          :key="`particle-${i}`"
          class="particle"
          :style="getParticleStyle(i)"
        ></div>
      </div>
    </div>

    <div
      class="interactive-spotlight"
      :style="{ transform: `translate3d(${mouseX - 300}px, ${mouseY - 300}px, 0)` }"
    ></div>

    <div class="cyber-meteors">
      <div class="meteor meteor-1"></div>
      <div class="meteor meteor-2"></div>
      <div class="meteor meteor-3"></div>
    </div>

    <div class="absolute inset-0 overflow-hidden pointer-events-none z-1">
      <div class="floating-tech-symbols">
        <div
          class="tech-symbol"
          v-for="(symbol, index) in techSymbols"
          :key="index"
          :style="getTechSymbolStyle(index)"
          v-text="symbol"
        ></div>
      </div>
    </div>

    <div class="container mx-auto relative z-10">
      <div class="text-center mb-16 relative">
        <h2
          ref="titleRef"
          class="text-4xl md:text-5xl lg:text-6xl font-bold animated-gradient-text enhanced-project-title mb-4"
          @mouseenter="createEnergyBurst"
        >
          {{ T.projects.title[lang] }}
        </h2>

        <div class="title-decorations">
          <div class="title-energy-line left-energy"></div>
          <div class="title-energy-line right-energy"></div>
        </div>

        <div ref="energyContainer" class="energy-container"></div>

        <div class="description-container mt-6">
          <p
            ref="descriptionRef"
            class="text-gray-300 text-lg max-w-3xl mx-auto enhanced-project-description"
          >
            <span class="description-text">{{ T.projects.description[lang] }}</span>
            <span class="matrix-cursor"></span>
          </p>
        </div>
      </div>

      <div class="swiper-container-wrapper relative">
        <div class="enhanced-custom-navigation">
          <button
            class="enhanced-nav-arrow enhanced-nav-prev tech-nav"
            @click="previousSlide"
            aria-label="Previous project"
          >
            <div class="nav-button-inner">
              <Icon name="mdi:chevron-left" class="w-6 h-6" />
            </div>
            <div class="nav-energy-ring"></div>
            <div class="nav-ripple-effect"></div>
          </button>

          <button
            class="enhanced-nav-arrow enhanced-nav-next tech-nav"
            @click="nextSlide"
            aria-label="Next project"
          >
            <div class="nav-button-inner">
              <Icon name="mdi:chevron-right" class="w-6 h-6" />
            </div>
            <div class="nav-energy-ring"></div>
            <div class="nav-ripple-effect"></div>
          </button>
        </div>

        <swiper
          ref="swiperRef"
          :modules="modules"
          :slides-per-view="1"
          :centered-slides="true"
          :space-between="30"
          :loop="true"
          :breakpoints="{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 }
          }"
          :pagination="{ clickable: true, dynamicBullets: true }"
          :navigation="false"
          :autoplay="{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }"
          class="my-project-swiper enhanced-project-swiper"
          @slideChange="onSlideChange"
          @swiper="onSwiper"
        >
          <swiper-slide
            v-for="(project, index) in projects"
            :key="project.id"
            @mouseenter="onProjectHover(index)"
            @mouseleave="onProjectLeave(index)"
          >
            <div
              class="project-card bg-gray-800 rounded-xl overflow-hidden shadow-2xl h-full flex flex-col transform transition-all duration-500"
              :class="{ 'active-project-slide': activeSlideIndex === index }"
            >
              <div
                v-if="project.useIcon"
                :class="[
                  'project-icon-container w-full h-64 bg-gradient-to-br flex items-center justify-center relative overflow-hidden group cursor-pointer',
                  project.gradientFrom,
                  project.gradientTo
                ]"
              >
                <div
                  class="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700"
                >
                  <div class="absolute top-6 left-6 animate-tech-orbit-1">
                    <Icon :name="project.backgroundIcons[0]" class="w-8 h-8 text-white/70" />
                  </div>
                  <div class="absolute top-12 right-12 animate-tech-orbit-2">
                    <Icon :name="project.backgroundIcons[1]" class="w-7 h-7 text-white/65" />
                  </div>
                  <div class="absolute bottom-6 left-12 animate-tech-orbit-3">
                    <Icon :name="project.backgroundIcons[2]" class="w-8 h-8 text-white/70" />
                  </div>
                  <div class="absolute bottom-12 right-6 animate-tech-orbit-4">
                    <Icon :name="project.backgroundIcons[3]" class="w-6 h-6 text-white/60" />
                  </div>

                  <div class="absolute top-1/4 left-1/5 animate-tech-float-1 opacity-25">
                    <div class="w-3 h-3 bg-white/50 rounded-full animate-ping-tech"></div>
                  </div>
                  <div class="absolute top-1/3 right-1/4 animate-tech-float-2 opacity-30">
                    <div class="w-2 h-2 bg-white/45 rounded-full animate-pulse-tech"></div>
                  </div>
                  <div class="absolute bottom-1/3 left-1/3 animate-tech-float-3 opacity-20">
                    <div class="w-4 h-4 bg-white/40 rounded-full animate-bounce-tech"></div>
                  </div>
                </div>

                <div
                  class="relative z-20 text-center transform group-hover:scale-110 transition-all duration-500 ease-out"
                >
                  <div class="absolute inset-0">
                    <div
                      class="absolute -inset-8 bg-white/10 rounded-full blur-3xl animate-tech-glow-outer"
                    ></div>
                    <div
                      class="absolute -inset-4 bg-white/15 rounded-full blur-2xl animate-tech-glow-middle"
                    ></div>
                    <div
                      class="absolute -inset-2 bg-white/20 rounded-full blur-xl animate-tech-glow-inner"
                    ></div>
                  </div>

                  <div class="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-4 z-20">
                    <template
                      v-for="(icon, idx) in [
                        project.mainIcon1,
                        project.mainIcon2,
                        project.mainIcon3,
                        project.mainIcon4,
                        project.mainIcon5
                      ].filter(Boolean)"
                      :key="idx"
                    >
                      <div
                        class="relative animate-tech-levitate"
                        :style="{ animationDelay: `${idx * 0.15}s` }"
                      >
                        <Icon
                          :name="icon"
                          class="relative w-14 h-14 sm:w-20 sm:h-20 text-white drop-shadow-2xl filter brightness-125 contrast-110 transition-all duration-500 hover:scale-125 cursor-pointer"
                        />

                        <div class="absolute inset-0 opacity-15 blur-sm transform translate-y-3">
                          <Icon :name="icon" class="w-14 h-14 sm:w-20 sm:h-20 text-white/50" />
                        </div>
                      </div>
                    </template>
                  </div>

                  <div class="relative">
                    <h4
                      class="text-white text-sm font-bold tracking-widest uppercase animate-tech-fade-in-up transform group-hover:scale-110 transition-all duration-300 drop-shadow-lg"
                    >
                      {{
                        project.iconLabel ||
                        project.iconLabel5 ||
                        project.iconLabel1 ||
                        project.title?.en ||
                        'PORTFOLIO'
                      }}
                    </h4>

                    <div class="flex justify-center items-center mt-4 space-x-3">
                      <div
                        class="w-8 h-0.5 bg-white/80 rounded-full animate-tech-expand-contract"
                      ></div>
                      <div class="w-2 h-2 bg-white/90 rounded-full animate-tech-pulse-core"></div>
                      <div
                        class="w-8 h-0.5 bg-white/80 rounded-full animate-tech-expand-contract"
                      ></div>
                    </div>
                  </div>
                </div>

                <div
                  class="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent opacity-0 group-hover:opacity-100 animate-tech-shimmer"
                ></div>
                <div
                  class="absolute inset-0 rounded-xl border-2 border-white/25 opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                ></div>
              </div>

              <img
                v-else
                :src="project.imageUrl"
                :alt="project.title[lang]"
                class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div
                class="project-card-content p-6 flex flex-col flex-grow relative bg-gradient-to-b from-gray-800 to-gray-900"
              >
                <div class="card-energy-glow"></div>

                <h3 class="project-title text-2xl font-bold text-white mb-3 relative">
                  {{ project.title[lang] }}
                  <div class="title-tech-underline"></div>
                </h3>

                <p
                  class="project-description text-gray-400 mb-4 text-sm flex-grow relative leading-relaxed"
                >
                  {{ project.description[lang] }}
                </p>

                <div class="project-stack mb-5 relative flex flex-wrap gap-2">
                  <span
                    v-for="(tech, techIndex) in project.stack"
                    :key="tech"
                    class="tech-badge inline-block bg-gray-700/80 rounded-full px-3 py-1.5 text-xs font-semibold text-blue-300 backdrop-blur-sm"
                    :style="{ animationDelay: `${techIndex * 0.1}s` }"
                  >
                    {{ tech }}
                  </span>
                </div>

                <div class="project-buttons mt-auto flex flex-wrap gap-2 sm:gap-3">
                  <a
                    v-if="project.githubUrl"
                    :href="project.githubUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="tech-button github-button inline-flex items-center justify-center gap-1 sm:gap-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-3 sm:py-2.5 sm:px-4 rounded-lg transition-all duration-300 relative overflow-hidden flex-1 min-w-[30%] text-xs sm:text-sm"
                  >
                    <Icon name="mdi:github" class="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>GitHub</span>
                    <div class="button-tech-shine"></div>
                  </a>

                  <button
                    v-if="project.canvaEmbedUrl"
                    @click="openModal(project)"
                    class="tech-button canva-button inline-flex items-center justify-center gap-1 sm:gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-3 sm:py-2.5 sm:px-4 rounded-lg transition-all duration-300 relative overflow-hidden flex-1 min-w-[30%] text-xs sm:text-sm"
                  >
                    <Icon name="mdi:presentation-play" class="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{{ lang === 'id' ? 'Presentasi' : 'Presentation' }}</span>
                    <div class="button-tech-shine"></div>
                    <div class="button-energy-ripple"></div>
                  </button>

                  <a
                    v-if="project.liveUrl"
                    :href="project.liveUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="tech-button website-button inline-flex items-center justify-center gap-1 sm:gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-3 sm:py-2.5 sm:px-4 rounded-lg transition-all duration-300 relative overflow-hidden flex-1 min-w-[30%] text-xs sm:text-sm"
                  >
                    <Icon name="mdi:web" class="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Website</span>
                    <div class="button-tech-shine"></div>
                  </a>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>

        <div class="custom-tech-pagination mt-8">
          <button
            v-for="(project, index) in projects"
            :key="`tech-dot-${project.id}`"
            class="tech-pagination-dot"
            :class="{ active: activeSlideIndex === index }"
            @click="goToSlide(index)"
            :aria-label="`Go to project ${index + 1}`"
          >
            <div class="dot-energy-ring"></div>
          </button>
        </div>
      </div>

      <div class="project-statistics-container mt-20">
        <div class="project-stats-grid">
          <div
            class="project-stat-item"
            v-for="(stat, index) in projectStatistics"
            :key="index"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <div class="stat-tech-number" ref="projectStatNumbers">{{ stat.value }}</div>
            <div class="stat-tech-label">{{ stat.label[lang] }}</div>
            <div class="stat-energy-border"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="tech-floating-elements hidden lg:block">
      <div class="left-tech-floating">
        <div class="floating-code-stack">
          <div
            class="code-stack-item"
            v-for="i in 5"
            :key="i"
            :style="{ animationDelay: `${i * 0.4}s` }"
          >
            <div class="code-bracket">&lt;</div>
            <div class="code-slash">/</div>
            <div class="code-bracket">&gt;</div>
          </div>
        </div>
      </div>

      <div class="right-tech-floating">
        <div class="floating-tech-cubes">
          <div class="tech-cube" v-for="i in 4" :key="i" :style="{ animationDelay: `${i * 0.6}s` }">
            <div class="cube-face front"></div>
            <div class="cube-face back"></div>
            <div class="cube-face top"></div>
            <div class="cube-face bottom"></div>
            <div class="cube-face left"></div>
            <div class="cube-face right"></div>
          </div>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="modal-pop">
        <div
          v-if="showModal"
          class="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[100] p-4 sm:p-6"
          @click="closeModal"
        >
          <div
            class="modal-content-wrapper bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl w-full max-w-5xl flex flex-col shadow-[0_0_50px_rgba(139,92,246,0.2)] border border-purple-500/30 overflow-hidden"
            @click.stop
          >
            <div
              class="relative flex justify-between items-center p-4 border-b border-gray-700 bg-gray-900/80 z-10"
            >
              <div
                class="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-50"
              ></div>
              <h3
                class="text-base sm:text-xl font-bold text-white relative z-10 flex items-center gap-2"
              >
                <Icon name="mdi:presentation-play" class="text-purple-400 w-5 h-5 sm:w-6 sm:h-6" />
                {{ selectedProject?.title?.[lang] }}
              </h3>
              <button
                @click="closeModal"
                class="relative z-10 text-gray-400 transition-colors p-2 rounded-lg hover:bg-red-500/20 hover:text-red-400"
              >
                <Icon name="mdi:close" class="w-6 h-6" />
              </button>
            </div>

            <div class="w-full relative bg-black/50" style="padding-top: 56.25%">
              <div class="absolute inset-0 flex items-center justify-center">
                <div
                  class="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-purple-500"
                ></div>
              </div>
              <iframe
                v-if="selectedProject?.canvaEmbedUrl"
                :src="selectedProject.canvaEmbedUrl"
                class="absolute inset-0 w-full h-full border-none z-10"
                allowfullscreen="allowfullscreen"
                allow="fullscreen"
                loading="lazy"
              ></iframe>
            </div>

            <div class="p-3 sm:p-4 border-t border-gray-700 bg-gray-900/80">
              <div
                class="flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left"
              >
                <span class="text-xs sm:text-sm text-gray-400"
                  >Gunakan mode layar penuh (fullscreen) di dalam player untuk pengalaman
                  terbaik.</span
                >
                <a
                  v-if="selectedProject?.canvaExternalUrl"
                  :href="selectedProject.canvaExternalUrl"
                  target="_blank"
                  class="inline-flex items-center gap-2 bg-purple-600/20 hover:bg-purple-600/40 border border-purple-500/50 text-purple-300 hover:text-white text-xs sm:text-sm font-medium py-1.5 px-3 rounded-lg transition-all"
                >
                  <Icon name="mdi:open-in-new" class="w-4 h-4" /> Buka di Canva Asli
                </a>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { useLang } from '~/composables/useLang'
import { translations } from '~/data/translations'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Setup untuk bahasa - Component ini full support untuk multi-language (Indonesia & English)
const { lang } = useLang()
const T = translations
const modules = [Navigation, Pagination, Autoplay]

// State
const showModal = ref(false)
const selectedProject = ref(null)
const titleRef = ref(null)
const descriptionRef = ref(null)
const energyContainer = ref(null)
const swiperRef = ref(null)
const projectStatNumbers = ref([])
const activeSlideIndex = ref(0)
const swiperInstance = ref(null)
const mouseX = ref(0)
const mouseY = ref(0)

// PERBAIKAN LAG: Optimasi pelacak mouse
let mouseRaf = null
const handleMouseMove = (e) => {
  if (mouseRaf) cancelAnimationFrame(mouseRaf)
  mouseRaf = requestAnimationFrame(() => {
    mouseX.value = e.clientX
    mouseY.value = e.clientY
  })
}

// Project statistics (Dinamis mengikuti Database Supabase)
const projectStatistics = computed(() => {
  const totalProjects = projects.value ? projects.value.length : 0

  let uniqueTechCount = 0
  if (projects.value) {
    const allTechs = projects.value.flatMap((project) => project.stack || [])
    const uniqueTechs = new Set(allTechs)
    uniqueTechCount = uniqueTechs.size
  }

  return [
    {
      value: `${totalProjects}+`,
      label: { id: 'Proyek Selesai', en: 'Projects Completed' }
    },
    {
      value: `${uniqueTechCount}+`,
      label: { id: 'Teknologi', en: 'Technologies Used' }
    },
    {
      value: '100%',
      label: { id: 'Tingkat Sukses', en: 'Success Rate' }
    }
  ]
})

// Modal functions
const openModal = (project) => {
  selectedProject.value = project
  showModal.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  showModal.value = false
  selectedProject.value = null
  document.body.style.overflow = 'auto'
}

// NEW: Particle style helper
const getParticleStyle = (index) => {
  const delay = Math.random() * 5
  const duration = 10 + Math.random() * 20
  return {
    left: Math.random() * 100 + '%',
    top: Math.random() * 100 + '%',
    animationDelay: delay + 's',
    animationDuration: duration + 's',
    width: 2 + Math.random() * 3 + 'px',
    height: 2 + Math.random() * 3 + 'px'
  }
}

const getRandomProjectClass = () => {
  const classes = ['project-code', 'project-gear', 'project-chip', 'project-circuit']
  return classes[Math.floor(Math.random() * classes.length)]
}

const getTechSymbolStyle = (index) => {
  const delay = Math.random() * 12
  const duration = 20 + Math.random() * 15

  return {
    left: Math.random() * 100 + '%',
    animationDelay: delay + 's',
    animationDuration: duration + 's',
    fontSize: 10 + Math.random() * 6 + 'px'
  }
}

const getPulseLineStyle = (index) => {
  return {
    animationDelay: `${index * 1.5}s`,
    animationDuration: '6s',
    left: `${index * 25}%`
  }
}

// Swiper functions
const onSwiper = (swiper) => {
  swiperInstance.value = swiper
}

const onSlideChange = (swiper) => {
  activeSlideIndex.value = swiper.realIndex
}

const onProjectHover = (index) => {
  // Add hover effects if needed
}

const onProjectLeave = (index) => {
  // Remove hover effects if needed
}

const previousSlide = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slidePrev()
  }
}

const nextSlide = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slideNext()
  }
}

const goToSlide = (index) => {
  if (swiperInstance.value) {
    swiperInstance.value.slideToLoop(index)
  }
}

// Energy burst effect
const createEnergyBurst = (event) => {
  if (!energyContainer.value) return

  const rect = event.target.getBoundingClientRect()
  const containerRect = energyContainer.value.getBoundingClientRect()

  for (let i = 0; i < 12; i++) {
    const energy = document.createElement('div')
    energy.className = 'energy-burst-effect'

    const x = event.clientX - containerRect.left + (Math.random() - 0.5) * 80
    const y = event.clientY - containerRect.top + (Math.random() - 0.5) * 80

    energy.style.left = x + 'px'
    energy.style.top = y + 'px'

    energyContainer.value.appendChild(energy)

    setTimeout(() => {
      if (energy.parentNode) {
        energy.parentNode.removeChild(energy)
      }
    }, 1000)
  }
}

// Counter animation for project stats
const animateProjectCounters = () => {
  projectStatNumbers.value.forEach((element, index) => {
    if (!element) return

    const stat = projectStatistics.value[index]
    const targetText = stat.value
    const hasNumber = /\d/.test(targetText)

    if (!hasNumber) {
      element.textContent = targetText
      return
    }

    const targetNum = parseInt(targetText.match(/\d+/)[0])
    const suffix = targetText.replace(/\d+/, '')
    let current = 0

    const increment = targetNum / 40
    const timer = setInterval(() => {
      current += increment
      if (current >= targetNum) {
        element.textContent = targetNum + suffix
        clearInterval(timer)
      } else {
        element.textContent = Math.floor(current) + suffix
      }
    }, 60)
  })
}

// Intersection Observer
let observer

const setupIntersectionObserver = () => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('enhanced-project-title')) {
            entry.target.classList.add('title-visible')
          }
          if (entry.target.classList.contains('project-stats-grid')) {
            animateProjectCounters()
          }
        }
      })
    },
    {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    }
  )

  if (titleRef.value) observer.observe(titleRef.value)

  nextTick(() => {
    const statsGrid = document.querySelector('.project-stats-grid')
    if (statsGrid) observer.observe(statsGrid)
  })
}

onMounted(() => {
  setupIntersectionObserver()
  window.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  document.body.style.overflow = 'auto'
  if (observer) {
    observer.disconnect()
  }
  window.removeEventListener('mousemove', handleMouseMove)
})

// Project Data

const { data: projects } = await useFetch('/api/projects')
</script>

<style scoped>
/* ===================================
   BACKGROUND & BASE STYLES
   =================================== */
.professional-projects-section {
  position: relative;
  min-height: 100vh;
  background: #0a0e1a;
  overflow: hidden;
}

/* Background Wrapper */
.background-wrapper {
  position: absolute;
  inset: 0;
  z-index: 0;
}

/* Gradient Orbs */
.gradient-orbs {
  position: absolute;
  inset: 0;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.2;
  animation: project-orb-float 20s ease-in-out infinite;
}

.orb-1 {
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  top: -10%;
  left: -10%;
  animation-delay: 0s;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #f093fb, #f5576c);
  bottom: -10%;
  right: -10%;
  animation-delay: 5s;
}

.orb-3 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  top: 50%;
  left: 50%;
  animation-delay: 10s;
}

@keyframes project-orb-float {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

/* Orbital Grid Pattern */
.orbital-grid-pattern {
  position: absolute;
  inset: -100%;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: orbital-rotate 120s linear infinite;
  opacity: 0.5;
}

@keyframes orbital-rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Particles */
.floating-particles {
  position: absolute;
  inset: 0;
}

.particle {
  position: absolute;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  animation: project-particle-float linear infinite;
}

@keyframes project-particle-float {
  0% {
    transform: translateY(0) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) scale(1);
    opacity: 0;
  }
}

/* ===================================
   FLOATING TECH ICONS & SYMBOLS
   =================================== */
.floating-tech-icons,
.floating-tech-symbols {
  position: absolute;
  inset: 0;
}

.flying-icon {
  position: absolute;
  color: #3b82f6;
  opacity: 0.1;
  animation: float-real-icon linear infinite;
  filter: blur(1px);
}

@keyframes float-real-icon {
  0% {
    transform: translate3d(0, 100vh, 0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.1;
  }
  90% {
    opacity: 0.1;
  }
  100% {
    transform: translate3d(0, -100px, 0) rotate(360deg);
    opacity: 0;
  }
}

.tech-symbol {
  position: absolute;
  color: rgba(59, 130, 246, 0.4);
  font-family: 'Fira Code', monospace;
  font-weight: 700;
  animation: float-tech-symbol linear infinite;
  text-shadow: 0 0 15px rgba(59, 130, 246, 0.4);
}

@keyframes float-tech-symbol {
  0% {
    transform: translate3d(0, 100vh, 0) rotate(0deg) scale(0.8);
    opacity: 0;
  }
  3% {
    opacity: 1;
  }
  97% {
    opacity: 1;
  }
  100% {
    transform: translate3d(80px, -100px, 0) rotate(180deg) scale(1.3);
    opacity: 0;
  }
}

/* ===================================
   TITLE STYLING
   =================================== */
.enhanced-project-title {
  background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ef4444, #10b981, #f59e0b, #06b6d4);
  background-size: 600% 600%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: project-title-gradient-shift 10s ease-in-out infinite;
  position: relative;
  opacity: 0;
  transform: translateY(60px) scale(0.9);
  transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.enhanced-project-title.title-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

@keyframes project-title-gradient-shift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.title-decorations {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 130%;
  height: 130%;
  pointer-events: none;
}

.title-energy-line {
  position: absolute;
  height: 3px;
  background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), transparent);
  top: 50%;
  transform: translateY(-50%);
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
}

.left-energy {
  left: -80px;
  width: 0;
  animation: energy-line-expand-left 2s ease-out 0.5s forwards;
}

.right-energy {
  right: -80px;
  width: 0;
  animation: energy-line-expand-right 2s ease-out 0.8s forwards;
}

@keyframes energy-line-expand-left {
  to {
    width: 70px;
    opacity: 0.8;
  }
}

@keyframes energy-line-expand-right {
  to {
    width: 70px;
    opacity: 0.8;
  }
}

/* ===================================
   DESCRIPTION STYLING
   =================================== */
.description-container {
  position: relative;
}

.enhanced-project-description {
  position: relative;
  z-index: 1;
  opacity: 0;
  transform: translateY(30px);
  animation: project-description-fade-in 1.5s ease-out 1s forwards;
  color: #cbd5e1;
}

@keyframes project-description-fade-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.matrix-cursor {
  display: inline-block;
  width: 2px;
  height: 1.2em;
  background: linear-gradient(45deg, #3b82f6, #8b5cf6);
  margin-left: 3px;
  animation: matrix-cursor-blink 1.5s ease-in-out infinite;
  box-shadow: 0 0 8px rgba(59, 130, 246, 0.6);
}

@keyframes matrix-cursor-blink {
  0%,
  45% {
    opacity: 1;
  }
  46%,
  100% {
    opacity: 0;
  }
}

/* ===================================
   SWIPER CONTAINER & NAVIGATION
   =================================== */
.swiper-container-wrapper {
  position: relative;
  padding: 15px 0;
}

.enhanced-custom-navigation {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 25;
  pointer-events: none;
}

.enhanced-nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  background: rgba(17, 24, 39, 0.95);
  border: 2px solid rgba(59, 130, 246, 0.4);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3b82f6;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  pointer-events: auto;
  backdrop-filter: blur(20px);
  animation: enhanced-nav-appear 1s ease-out forwards;
  overflow: hidden;
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.enhanced-nav-prev {
  left: 20px;
  animation-delay: 1.5s;
  opacity: 0;
}
.enhanced-nav-next {
  right: 20px;
  animation-delay: 1.8s;
  opacity: 0;
}

@keyframes enhanced-nav-appear {
  to {
    opacity: 1;
  }
}

.nav-button-inner {
  position: relative;
  z-index: 3;
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-energy-ring {
  position: absolute;
  inset: -8px;
  border: 3px solid transparent;
  border-radius: 50%;
  background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ef4444) border-box;
  mask:
    linear-gradient(#fff 0 0) padding-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transform: scale(0.7) rotate(0deg);
  transition: all 0.5s ease;
}

.enhanced-nav-arrow:hover {
  transform: translateY(-50%) scale(1.15);
  background: rgba(59, 130, 246, 0.25);
  border-color: #3b82f6;
  box-shadow:
    0 20px 40px rgba(59, 130, 246, 0.4),
    0 0 30px rgba(59, 130, 246, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.enhanced-nav-arrow:hover .nav-button-inner {
  transform: scale(1.1);
}
.enhanced-nav-arrow:hover .nav-energy-ring {
  opacity: 1;
  transform: scale(1) rotate(180deg);
}

/* ===================================
   SWIPER SLIDES & CARD
   =================================== */
.enhanced-project-swiper {
  padding: 30px 0 60px;
  overflow: visible;
}

.enhanced-project-swiper .swiper-slide {
  opacity: 0.6;
  transform: scale(0.9);
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.enhanced-project-swiper .swiper-slide-active {
  opacity: 1;
  transform: scale(1);
  z-index: 10;
}

.project-card {
  background: linear-gradient(145deg, rgba(30, 41, 59, 0.6), rgba(15, 23, 42, 0.8));
  border: 1px solid rgba(59, 130, 246, 0.2);
  position: relative;
  overflow: hidden;
  transform-origin: center;
  height: 100%;
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  backdrop-filter: blur(15px);
}

.project-card:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: rgba(59, 130, 246, 0.6);
  box-shadow:
    0 30px 60px rgba(0, 0, 0, 0.4),
    0 0 40px rgba(59, 130, 246, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  z-index: 10;
}

/* ===================================
   NEW BUTTONS & MODAL POP ANIMATION
   =================================== */
.canva-button:hover {
  background: rgba(147, 51, 234, 0.9);
  border-color: #a855f7;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(147, 51, 234, 0.4);
}

.website-button:hover {
  background: rgba(37, 99, 235, 0.9);
  border-color: #3b82f6;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(37, 99, 235, 0.4);
}

/* Animasi Pop-up Modal yang Elegan */
.modal-pop-enter-active,
.modal-pop-leave-active {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.modal-pop-enter-from,
.modal-pop-leave-to {
  opacity: 0;
}
.modal-pop-enter-active .modal-content-wrapper,
.modal-pop-leave-active .modal-content-wrapper {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.modal-pop-enter-from .modal-content-wrapper,
.modal-pop-leave-to .modal-content-wrapper {
  transform: scale(0.8) translateY(30px);
  opacity: 0;
}

/* ===================================
   CARD CONTENT, BADGES & BUTTONS
   =================================== */
.project-card-content {
  position: relative;
  backdrop-filter: blur(10px);
}

.project-title {
  position: relative;
  transition: all 0.4s ease;
}

.title-tech-underline {
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ef4444);
  transition: width 0.6s ease;
  border-radius: 2px;
}

.project-card:hover .title-tech-underline {
  width: 100%;
}
.project-card:hover .project-description {
  color: #9ca3af;
}

.tech-badge {
  position: relative;
  border: 1px solid rgba(59, 130, 246, 0.3);
  transition: all 0.3s ease;
}

.tech-badge:hover {
  background: rgba(59, 130, 246, 0.2);
  border-color: #3b82f6;
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.tech-button {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(59, 130, 246, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.github-button:hover {
  background: rgba(75, 85, 99, 0.8);
  border-color: rgba(156, 163, 175, 0.5);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.demo-button:hover {
  background: rgba(59, 130, 246, 0.9);
  border-color: #3b82f6;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
}

/* ===================================
   PAGINATION
   =================================== */
.custom-tech-pagination {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.tech-pagination-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: rgba(55, 65, 81, 0.6);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  border: 2px solid transparent;
}

.tech-pagination-dot.active {
  background: #3b82f6;
  transform: scale(1.4);
  box-shadow: 0 0 25px rgba(59, 130, 246, 0.5);
  border-color: rgba(139, 92, 246, 0.6);
}

/* ===================================
   PROJECT STATISTICS (YANG SEMPAT HILANG)
   =================================== */
.project-statistics-container {
  opacity: 0;
  transform: translateY(60px);
  animation: stats-appear 1s ease-out 0.5s forwards;
}

@keyframes stats-appear {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.project-stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  max-width: 900px;
  margin: 0 auto;
  padding: 40px;
  background: rgba(15, 23, 42, 0.6);
  border-radius: 25px;
  border: 1px solid rgba(59, 130, 246, 0.2);
  backdrop-filter: blur(20px);
  position: relative;
}

.project-stat-item {
  text-align: center;
  padding: 30px;
  border-radius: 20px;
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(59, 130, 246, 0.15);
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
  animation: stat-item-appear 0.8s ease-out forwards;
}

@keyframes stat-item-appear {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.project-stat-item:hover {
  transform: translateY(-15px) scale(1.05);
  background: rgba(59, 130, 246, 0.15);
  border-color: rgba(59, 130, 246, 0.5);
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.3),
    0 0 30px rgba(59, 130, 246, 0.2);
}

.stat-tech-number {
  font-size: 3.5rem;
  font-weight: 900;
  background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ef4444);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 15px;
  line-height: 1;
}

.stat-tech-label {
  color: #9ca3af;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1rem;
  transition: color 0.4s ease;
}

.project-stat-item:hover .stat-tech-label {
  color: #60a5fa;
}

.stat-energy-border {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ef4444, #10b981);
  transform: translateX(-100%);
  transition: transform 1s ease;
}

.project-stat-item:hover .stat-energy-border {
  transform: translateX(100%);
}

/* ===================================
   FLOATING ELEMENTS & CUBES
   =================================== */
.left-tech-floating {
  position: absolute;
  left: 60px;
  top: 25%;
}
.right-tech-floating {
  position: absolute;
  right: 60px;
  bottom: 25%;
}

.floating-code-stack {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.code-stack-item {
  width: 80px;
  height: 60px;
  background: rgba(31, 41, 55, 0.5);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  animation: code-stack-float 8s ease-in-out infinite;
  font-family: 'Fira Code', monospace;
  font-weight: bold;
}
.code-bracket {
  color: rgba(139, 92, 246, 0.8);
}
.code-slash {
  color: rgba(34, 197, 94, 0.8);
}

@keyframes code-stack-float {
  0%,
  100% {
    transform: translateX(-120px) translateY(0px);
    opacity: 0;
  }
  20%,
  80% {
    transform: translateX(0px) translateY(-20px);
    opacity: 0.7;
  }
  50% {
    transform: translateX(0px) translateY(-40px);
    opacity: 0.9;
  }
}

.floating-tech-cubes {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.tech-cube {
  width: 40px;
  height: 40px;
  position: relative;
  transform-style: preserve-3d;
  animation: tech-cube-float 10s ease-in-out infinite;
}
.cube-face {
  position: absolute;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(59, 130, 246, 0.4);
  background: rgba(31, 41, 55, 0.6);
}
.front {
  transform: rotateY(0deg) translateZ(20px);
}
.back {
  transform: rotateY(180deg) translateZ(20px);
}
.right {
  transform: rotateY(90deg) translateZ(20px);
}
.left {
  transform: rotateY(-90deg) translateZ(20px);
}
.top {
  transform: rotateX(90deg) translateZ(20px);
}
.bottom {
  transform: rotateX(-90deg) translateZ(20px);
}

@keyframes tech-cube-float {
  0%,
  100% {
    transform: translateX(120px) translateY(0px) rotateX(0deg) rotateY(0deg);
    opacity: 0;
  }
  25%,
  75% {
    transform: translateX(0px) translateY(-25px) rotateX(45deg) rotateY(45deg);
    opacity: 0.6;
  }
  50% {
    transform: translateX(0px) translateY(-50px) rotateX(90deg) rotateY(90deg);
    opacity: 0.8;
  }
}

/* ===================================
   MODAL TRANSITIONS
   =================================== */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-active > div,
.modal-leave-active > div {
  transition: all 0.3s ease;
}
.modal-enter-from > div,
.modal-leave-to > div {
  transform: scale(0.9) translateY(30px);
  opacity: 0;
}

/* ===================================
   RESPONSIVE DESIGN
   =================================== */
@media (max-width: 1024px) {
  .enhanced-nav-arrow {
    width: 50px;
    height: 50px;
  }
  .enhanced-nav-prev {
    left: 10px;
  }
  .enhanced-nav-next {
    right: 10px;
  }
}

@media (max-width: 768px) {
  .enhanced-project-title {
    font-size: 2.5rem;
  }
  .enhanced-nav-arrow {
    width: 45px;
    height: 45px;
  }
  .project-stats-grid {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 30px 20px;
  }
  .stat-tech-number {
    font-size: 3rem;
  }
}

@media (max-width: 480px) {
  .enhanced-project-title {
    font-size: 2rem;
  }
  .enhanced-nav-arrow {
    display: none;
  }
  .stat-tech-number {
    font-size: 2.5rem;
  }
  .project-card-content {
    padding: 1.25rem;
  }
  .tech-badge {
    font-size: 0.7rem;
    padding: 0.25rem 0.625rem;
  }
}

/* ===================================
   ACCESSIBILITY & PERFORMANCE
   =================================== */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  .orbital-grid-pattern,
  .floating-tech-symbols,
  .tech-floating-elements {
    display: none;
  }
}

.professional-projects-section,
.background-wrapper,
.gradient-orbs,
.orb,
.orbital-grid-pattern,
.project-card,
.enhanced-nav-arrow,
.project-stat-item,
.flying-icon,
.tech-symbol {
  will-change: transform, opacity;
  backface-visibility: hidden;
  perspective: 1000px;
}

.enhanced-project-swiper :deep(.swiper-pagination),
.enhanced-project-swiper :deep(.swiper-button-next),
.enhanced-project-swiper :deep(.swiper-button-prev) {
  display: none;
}
</style>
