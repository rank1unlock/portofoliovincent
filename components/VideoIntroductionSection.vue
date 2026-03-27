<template>
  <section
    id="video-introduction"
    ref="sectionTarget"
    class="bg-animated-dark py-20 px-4 relative overflow-hidden"
  >
    <div class="background-wrapper">
      <div class="gradient-orbs">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="orb orb-3"></div>
      </div>
      <div class="orbital-grid-pattern"></div>
      <div class="floating-particles">
        <div
          v-for="i in 20"
          :key="`particle-${i}`"
          class="particle"
          :style="getVideoParticleStyle(i)"
        ></div>
      </div>
    </div>

    <div
      class="interactive-spotlight"
      :style="{ transform: `translate3d(${mouseX - 300}px, ${mouseY - 300}px, 0)` }"
    ></div>

    <div class="floating-cyber-elements">
      <div
        class="cyber-element cyber-element-1"
        :style="{ transform: `translate3d(${mouseX * -0.02}px, ${mouseY * -0.02}px, 0)` }"
      >
        <div class="cyber-spin-slow">
          <Icon
            name="mdi:play-circle-outline"
            class="w-16 h-16 sm:w-24 sm:h-24 text-purple-500/10"
          />
        </div>
      </div>
      <div
        class="cyber-element cyber-element-2"
        :style="{ transform: `translate3d(${mouseX * 0.03}px, ${mouseY * 0.03}px, 0)` }"
      >
        <div class="cyber-spin-reverse">
          <Icon name="mdi:movie-open-outline" class="w-20 h-20 sm:w-32 sm:h-32 text-blue-500/10" />
        </div>
      </div>
      <div
        class="cyber-element cyber-element-3"
        :style="{ transform: `translate3d(${mouseX * -0.015}px, ${mouseY * -0.015}px, 0)` }"
      >
        <div class="cyber-pulse-slow">
          <Icon name="mdi:video-vintage" class="w-14 h-14 sm:w-20 sm:h-20 text-emerald-500/10" />
        </div>
      </div>
    </div>

    <div class="container mx-auto relative z-10">
      <div
        class="flex flex-col md:flex-row items-center justify-between gap-6 mb-16 text-center md:text-left"
      >
        <div class="text-white relative">
          <div class="text-bg-glow"></div>
          <h2
            class="text-3xl md:text-4xl font-bold mb-4 enhanced-gradient-text transition-all duration-700 relative z-2"
          >
            <span class="title-wrapper">Inside My Journey</span>
          </h2>
          <p class="text-gray-300 mb-6 leading-relaxed enhanced-text max-w-xl">
            {{
              activeTab === 'video'
                ? 'Watch my introduction video to get to know me better.'
                : 'Explore some of my cherished memories and activities.'
            }}
          </p>
        </div>

        <div
          class="tab-switcher flex items-center bg-slate-900 border border-slate-700 p-1.5 rounded-full shadow-inner relative overflow-hidden shrink-0 z-20"
        >
          <button
            @click="activeTab = 'video'"
            class="tab-btn w-32 justify-center"
            :class="{ 'text-white': activeTab === 'video' }"
          >
            <Icon name="mdi:video-account" class="w-5 h-5" />
            Video
          </button>
          <button
            @click="activeTab = 'gallery'"
            class="tab-btn w-32 justify-center"
            :class="{ 'text-white': activeTab === 'gallery' }"
          >
            <Icon name="mdi:image-album" class="w-5 h-5" />
            Gallery
          </button>
          <div
            class="active-pill absolute h-[85%] rounded-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all duration-300 ease-out z-[-1]"
            :class="activeTab === 'video' ? 'left-1.5 w-[120px]' : 'left-[132px] w-[120px]'"
          ></div>
        </div>
      </div>

      <div
        v-if="activeTab === 'video'"
        class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-500"
      >
        <div class="text-white relative flex flex-col justify-center h-full">
          <div
            class="signal-visualizer flex items-end gap-1.5 h-14 mb-10 opacity-90 transition-all duration-300"
            :class="{ 'is-playing': videoPlaying }"
          >
            <div class="bar bar-1 bg-blue-500 w-1.5 rounded-t-sm"></div>
            <div class="bar bar-2 bg-purple-500 w-1.5 rounded-t-sm"></div>
            <div class="bar bar-3 bg-blue-400 w-1.5 rounded-t-sm"></div>
            <div class="bar bar-4 bg-emerald-500 w-1.5 rounded-t-sm"></div>
            <div class="bar bar-5 bg-purple-400 w-1.5 rounded-t-sm"></div>
            <div class="flex flex-col ml-4 mb-1">
              <span class="text-[10px] text-blue-400 font-mono tracking-widest uppercase mb-1"
                >System Status</span
              >
              <span class="text-xs text-white font-bold tracking-wider flex items-center gap-2">
                <span
                  class="w-2 h-2 rounded-full"
                  :class="
                    videoPlaying ? 'bg-red-500 animate-pulse' : 'bg-emerald-500 animate-pulse'
                  "
                ></span>
                {{ videoPlaying ? 'VIDEO PLAYING...' : 'READY TO PLAY' }}
              </span>
            </div>
          </div>

          <div class="enhanced-quote-block transition-all duration-700 mb-10">
            <div class="quote-icon">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.953a1 1 0 00.95.69h4.204c.969 0 1.371 1.24.588 1.81l-3.401 2.47a1 1 0 00-.364 1.118l1.286 3.953c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.401 2.47c-.784.57-1.838-.197-1.539-1.118l1.286-3.953a1 1 0 00-.364-1.118L2.98 9.38c-.783-.57-.38-1.81.588-1.81h4.204a1 1 0 00.95-.69l1.286-3.953z"
                />
              </svg>
            </div>
            <p class="italic text-gray-400 quote-text">
              {{
                T.video.quote?.[lang] ||
                'Dedication and continuous learning are the keys to building great products.'
              }}
            </p>
            <div class="quote-line"></div>
          </div>

          <div class="video-stats transition-all duration-700">
            <div class="stats-grid">
              <div class="stat-item">
                <div class="stat-icon">🎬</div>
                <div class="stat-text">Video Intro</div>
              </div>
              <div class="stat-item">
                <div class="stat-icon">🚀</div>
                <div class="stat-text">Professional</div>
              </div>
              <div class="stat-item">
                <div class="stat-icon">✨</div>
                <div class="stat-text">Interactive</div>
              </div>
            </div>
          </div>
        </div>

        <div ref="videoTarget" class="transition-all duration-300 ease-out relative">
          <div class="video-glow-bg"></div>

          <div
            class="enhanced-video-container transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/30 relative z-10"
            :style="{
              transform: `rotateX(${parallax.roll * 8}deg) rotateY(${parallax.tilt * 8}deg)`
            }"
          >
            <div class="video-frame-decoration">
              <div class="frame-corner frame-corner-tl"></div>
              <div class="frame-corner frame-corner-tr"></div>
              <div class="frame-corner frame-corner-bl"></div>
              <div class="frame-corner frame-corner-br"></div>
            </div>

            <div class="video-container">
              <video
                v-if="dynamicVideoData?.videoUrl"
                :key="dynamicVideoData.videoUrl"
                class="w-full rounded-lg relative z-20"
                controls
                preload="metadata"
                @play="onVideoPlay"
                @pause="onVideoPause"
              >
                <source :src="dynamicVideoData.videoUrl" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div
                v-else
                class="w-full aspect-video bg-slate-900 flex flex-col justify-center items-center text-slate-500 rounded-lg border border-slate-700"
              >
                <Icon name="mdi:video-off-outline" class="w-16 h-16 mb-2 opacity-50" />
                <p>Video is coming soon.</p>
              </div>
            </div>

            <div class="video-indicators">
              <div class="indicator indicator-1" :class="{ active: videoPlaying }"></div>
              <div class="indicator indicator-2" :class="{ active: videoPlaying }"></div>
              <div class="indicator indicator-3" :class="{ active: videoPlaying }"></div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-else-if="activeTab === 'gallery'"
        class="transition-all duration-500 animate-fade-in-up"
      >
        <div
          v-if="galleryItems && galleryItems.length > 0"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <div
            v-for="item in galleryItems"
            :key="item.id"
            class="gallery-card group bg-[rgba(20,20,20,0.8)] rounded-xl overflow-hidden border border-[rgba(147,51,234,0.3)] shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-[rgba(147,51,234,0.8)] hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(147,51,234,0.3)] flex flex-col relative z-20 backdrop-blur-md"
          >
            <div class="aspect-[4/3] overflow-hidden relative">
              <img
                :src="item.imageUrl"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                class="absolute top-3 right-3 bg-blue-600/90 backdrop-blur-sm text-white font-black text-xs px-3 py-1 rounded-full shadow-lg border border-blue-400/50"
              >
                {{ item.year }}
              </div>
              <div
                class="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] to-transparent opacity-80"
              ></div>

              <div class="absolute bottom-0 left-0 w-full p-4">
                <h4 class="text-white font-bold text-lg leading-tight">
                  {{ item.description[lang] }}
                </h4>
              </div>
            </div>

            <div class="p-5 flex-1 flex flex-col relative z-20 bg-[#0a0e1a]/80">
              <p
                class="text-[10px] font-bold uppercase text-blue-400 tracking-widest mb-3 flex items-center gap-2"
              >
                <Icon name="mdi:history" class="w-3 h-3" />
                Highlights
              </p>
              <ul class="space-y-2.5 text-gray-300 text-[13px]">
                <li
                  v-for="(point, p) in item.activityPoints[lang]"
                  :key="`p-${p}`"
                  class="flex items-start gap-2.5 group/li"
                >
                  <Icon
                    name="mdi:check-decagram"
                    class="w-4 h-4 text-purple-500 mt-0.5 shrink-0 group-hover/li:text-blue-400 transition-colors"
                  />
                  <span class="leading-relaxed">{{ point }}</span>
                </li>
              </ul>
            </div>

            <div
              class="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-purple-500/50 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity z-30 m-2"
            ></div>
            <div
              class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500/50 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity z-30 m-2"
            ></div>
          </div>
        </div>

        <div
          v-else
          class="text-center py-20 bg-slate-900/30 rounded-2xl border border-slate-800 backdrop-blur-sm"
        >
          <Icon name="mdi:image-album" class="w-16 h-16 text-slate-600 mx-auto mb-4" />
          <p class="text-slate-500 italic">Memory gallery is currently empty.</p>
        </div>
      </div>
    </div>

    <div class="section-transition">
      <div class="transition-wave wave-1"></div>
      <div class="transition-wave wave-2"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useIntersectionObserver, useParallax } from '@vueuse/core'
import { useLang } from '~/composables/useLang'
import { translations } from '~/data/translations'

const { lang } = useLang()
const T = translations
const sectionTarget = ref(null)
const sectionTargetIsVisible = ref(false)

const videoPlaying = ref(false)

// === STATE TAB SWITCHER ===
const activeTab = ref('video') // Default show video

// === DATA DINAMIS DARI SUPABASE ===
const dynamicVideoData = ref(null)
const { data: galleryItems } = await useFetch('/api/gallery')

// === ANIMASI INTERAKTIF (MOUSE TRACKING & PARALLAX) ===
const mouseX = ref(0)
const mouseY = ref(0)
const videoTarget = ref(null)
const parallax = useParallax(videoTarget)
let mouseRaf = null

const handleMouseMove = (e) => {
  if (mouseRaf) cancelAnimationFrame(mouseRaf)
  mouseRaf = requestAnimationFrame(() => {
    mouseX.value = e.clientX
    mouseY.value = e.clientY
  })
}

useIntersectionObserver(
  sectionTarget,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      sectionTargetIsVisible.value = true
    }
  },
  { threshold: 0.2 }
)

const fetchVideoData = async () => {
  try {
    const client = useSupabaseClient()
    const { data, error } = await client
      .from('videos')
      .select('*')
      .order('id', { ascending: false })
      .limit(1)
      .single()

    if (!error && data && data.data) {
      dynamicVideoData.value = {
        id: data.id,
        ...data.data
      }
    }
  } catch (err) {
    console.error('Gagal mengambil data video:', err)
  }
}

const getVideoParticleStyle = (index) => {
  const delay = Math.random() * 8
  const duration = 12 + Math.random() * 8
  const size = 1.5 + Math.random() * 3
  return {
    left: Math.random() * 100 + '%',
    animationDelay: delay + 's',
    animationDuration: duration + 's',
    width: size + 'px',
    height: size + 'px'
  }
}

const onVideoPlay = () => {
  videoPlaying.value = true
}
const onVideoPause = () => {
  videoPlaying.value = false
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  fetchVideoData()
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<style scoped>
/* ===================================
   BACKGROUND & BASE STYLES
   =================================== */
.bg-animated-dark {
  position: relative;
  min-height: 100vh;
  background: #0a0e1a;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.background-wrapper {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.gradient-orbs {
  position: absolute;
  inset: 0;
}
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
  animation: project-orb-float 20s ease-in-out infinite;
}
.orb-1 {
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, #9333ea, #4f46e5);
  top: -10%;
  left: -10%;
  animation-delay: 0s;
}
.orb-2 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  bottom: -10%;
  right: -10%;
  animation-delay: 5s;
}
.orb-3 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #10b981, #059669);
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

.floating-particles {
  position: absolute;
  inset: 0;
}
.particle {
  position: absolute;
  background: rgba(147, 51, 234, 0.4);
  border-radius: 50%;
  animation: project-particle-float linear infinite;
  box-shadow: 0 0 10px rgba(147, 51, 234, 0.2);
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

.floating-cyber-elements {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}
.cyber-element {
  position: absolute;
  animation: float-cyber-element 20s ease-in-out infinite;
  will-change: transform;
  transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}
.cyber-element-1 {
  top: 15%;
  left: 10%;
}
.cyber-element-2 {
  bottom: 20%;
  right: 10%;
}
.cyber-element-3 {
  top: 60%;
  left: 25%;
}
@keyframes float-cyber-element {
  0%,
  100% {
    transform: translateY(0) rotate(0deg) scale(1);
  }
  33% {
    transform: translateY(-30px) rotate(45deg) scale(1.1);
  }
  66% {
    transform: translateY(15px) rotate(-15deg) scale(0.9);
  }
}

.cyber-spin-slow {
  animation: cyber-spin 25s linear infinite;
}
.cyber-spin-reverse {
  animation: cyber-spin 35s linear infinite reverse;
}
.cyber-pulse-slow {
  animation: cyber-pulse 6s ease-in-out infinite;
}
@keyframes cyber-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes cyber-pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
}

.interactive-spotlight {
  position: fixed;
  top: 0;
  left: 0;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(147, 51, 234, 0.06) 0%, transparent 60%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
  will-change: transform;
}

/* ===================================
   TEXT & COMPONENTS STYLES
   =================================== */
.text-bg-glow {
  position: absolute;
  top: 0;
  left: -50px;
  width: calc(100% + 100px);
  height: 100%;
  background: radial-gradient(ellipse, rgba(147, 51, 234, 0.1), transparent);
  border-radius: 20px;
  filter: blur(30px);
  animation: text-glow-pulse 4s ease-in-out infinite;
}
@keyframes text-glow-pulse {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(0.9);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.1);
  }
}

.enhanced-gradient-text {
  background: linear-gradient(45deg, #9333ea, #3b82f6, #10b981, #f59e0b);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: enhanced-gradient-shift 6s ease-in-out infinite;
}
.title-wrapper {
  position: relative;
  display: inline-block;
  background: linear-gradient(90deg, #ffffff 0%, #bbbbbb 50%, #ffffff 100%);
  background-size: 200%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine-text 3s linear infinite;
}
@keyframes shine-text {
  from {
    background-position: 200% center;
  }
  to {
    background-position: -200% center;
  }
}
@keyframes enhanced-gradient-shift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  25% {
    background-position: 100% 50%;
  }
  50% {
    background-position: 100% 100%;
  }
  75% {
    background-position: 0% 100%;
  }
}

.enhanced-quote-block {
  position: relative;
  padding: 20px 30px 20px 60px;
  background: linear-gradient(145deg, rgba(20, 20, 20, 0.8), rgba(5, 5, 5, 0.95));
  border-radius: 12px;
  border: 1px solid rgba(147, 51, 234, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}
.enhanced-quote-block:hover {
  border-color: rgba(147, 51, 234, 0.6);
  box-shadow: 0 10px 30px rgba(147, 51, 234, 0.2);
  transform: translateY(-2px);
}
.quote-icon {
  position: absolute;
  left: 20px;
  top: 20px;
  color: #9333ea;
  animation: quote-float 3s ease-in-out infinite;
}
@keyframes quote-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}
.quote-line {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #9333ea, #3b82f6);
  animation: quote-line-expand 1.5s ease-out 1s forwards;
  border-radius: 1px;
}
@keyframes quote-line-expand {
  to {
    width: 100%;
  }
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: linear-gradient(145deg, rgba(15, 15, 15, 0.7), rgba(5, 5, 5, 0.9));
  border-radius: 8px;
  border: 1px solid rgba(147, 51, 234, 0.2);
  transition: all 0.3s ease;
}
.stat-item:hover {
  border-color: rgba(147, 51, 234, 0.5);
  transform: translateY(-5px);
}
.stat-icon {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  animation: icon-bounce 2s ease-in-out infinite;
}
.stat-text {
  font-size: 0.9rem;
  color: #cbd5e1;
  font-weight: 500;
}
@keyframes icon-bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-5px);
  }
  60% {
    transform: translateY(-3px);
  }
}

/* Tab Switcher */
.tab-btn {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 0.875rem;
  color: #64748b;
  padding: 0.6rem 1rem;
  transition: color 0.3s ease;
  z-index: 2;
}
.tab-btn:focus {
  outline: none;
}

/* Enhanced Video Container 3D */
.video-glow-bg {
  position: absolute;
  top: -50px;
  left: -50px;
  right: -50px;
  bottom: -50px;
  background: radial-gradient(ellipse, rgba(147, 51, 234, 0.2), transparent);
  border-radius: 20px;
  filter: blur(40px);
  animation: video-glow-pulse 5s ease-in-out infinite;
}
@keyframes video-glow-pulse {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(0.8);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.2);
  }
}

.enhanced-video-container {
  background: linear-gradient(135deg, rgba(20, 20, 20, 0.9), rgba(5, 5, 5, 0.95));
  padding: 20px;
  border-radius: 16px;
  border: 1px solid rgba(147, 51, 234, 0.3);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  transform-style: preserve-3d;
  perspective: 1000px;
}
.video-frame-decoration {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 2;
}
.frame-corner {
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid #9333ea;
}
.frame-corner-tl {
  top: 10px;
  left: 10px;
  border-right: none;
  border-bottom: none;
}
.frame-corner-tr {
  top: 10px;
  right: 10px;
  border-left: none;
  border-bottom: none;
}
.frame-corner-bl {
  bottom: 10px;
  left: 10px;
  border-right: none;
  border-top: none;
}
.frame-corner-br {
  bottom: 10px;
  right: 10px;
  border-left: none;
  border-top: none;
}
.video-container {
  position: relative;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.5);
}
.video-container video {
  width: 100%;
  outline: none;
}

/* Indicators */
.video-indicators {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}
.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(147, 51, 234, 0.3);
  animation: indicator-pulse 2s ease-in-out infinite;
}
.indicator.active {
  background: #9333ea;
  box-shadow: 0 0 15px rgba(147, 51, 234, 0.6);
  transform: scale(1.2);
}
@keyframes indicator-pulse {
  0%,
  100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
}

/* Animations */
.animate-fade-in-up {
  animation: fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Section Transitions */
.section-transition {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  overflow: hidden;
  pointer-events: none;
}
.transition-wave {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 200%;
  height: 100px;
  background: linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1));
  border-radius: 100% 100% 0 0;
  transform: translateX(-50%);
  animation: wave-move 10s ease-in-out infinite;
}
.wave-1 {
  opacity: 0.3;
}
.wave-2 {
  animation-delay: -5s;
  opacity: 0.2;
  width: 250%;
}
@keyframes wave-move {
  0%,
  100% {
    transform: translateX(-50%) translateY(0) rotate(0deg);
  }
  50% {
    transform: translateX(-52%) translateY(-5px) rotate(-1deg);
  }
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .enhanced-video-container {
    padding: 15px;
  }
  .active-pill {
    transition: none;
  }
}

/* ===================================
   SIGNAL VISUALIZER ANIMATION
   =================================== */
.signal-visualizer .bar {
  transform-origin: bottom;
  animation: idle-bounce 1.5s infinite ease-in-out alternate;
}
.signal-visualizer.is-playing .bar {
  animation: sound-bounce 0.6s infinite ease-in-out alternate;
}
.bar-1 {
  height: 30%;
  animation-delay: 0.1s;
}
.bar-2 {
  height: 60%;
  animation-delay: 0.3s;
}
.bar-3 {
  height: 40%;
  animation-delay: 0s;
}
.bar-4 {
  height: 80%;
  animation-delay: 0.4s;
}
.bar-5 {
  height: 50%;
  animation-delay: 0.2s;
}

@keyframes idle-bounce {
  0% {
    transform: scaleY(0.4);
  }
  100% {
    transform: scaleY(1);
  }
}
@keyframes sound-bounce {
  0% {
    transform: scaleY(0.2);
  }
  100% {
    transform: scaleY(1.8);
  }
}
</style>
