<template>
  <section id="testimonials" ref="target" class="testimonial-section py-20 px-4 transition-all duration-1000 relative overflow-hidden"
           :class="targetIsVisible ? 'opacity-100' : 'opacity-0'"
           style="z-index: 1;">
    
    <div class="background-wrapper">
      <div class="gradient-orbs">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="orb orb-3"></div>
      </div>
      <div class="orbital-grid-pattern"></div>
      <div class="floating-particles">
        <div v-for="i in 20" :key="`particle-${i}`" class="particle" :style="getParticleStyle(i)"></div>
      </div>
    </div>

    <div class="interactive-spotlight" 
         :style="{ transform: `translate3d(${mouseX - 300}px, ${mouseY - 300}px, 0)` }">
    </div>

    <div class="floating-cyber-elements">
      <div class="cyber-element cyber-element-1" :style="{ transform: `translate3d(${mouseX * -0.02}px, ${mouseY * -0.02}px, 0)` }">
        <div class="cyber-spin-slow">
          <Icon name="mdi:format-quote-open" class="w-20 h-20 sm:w-28 sm:h-28 text-blue-500/10" />
        </div>
      </div>
      <div class="cyber-element cyber-element-2" :style="{ transform: `translate3d(${mouseX * 0.03}px, ${mouseY * 0.03}px, 0)` }">
        <div class="cyber-spin-reverse">
          <Icon name="mdi:star-four-points-outline" class="w-24 h-24 sm:w-36 sm:h-36 text-purple-500/10" />
        </div>
      </div>
      <div class="cyber-element cyber-element-3" :style="{ transform: `translate3d(${mouseX * -0.015}px, ${mouseY * -0.015}px, 0)` }">
        <div class="cyber-pulse-slow">
          <Icon name="mdi:message-draw" class="w-16 h-16 sm:w-24 sm:h-24 text-emerald-500/10" />
        </div>
      </div>
    </div>

    <div class="container mx-auto relative z-0">
      <!-- Enhanced title section -->
      <div 
        class="text-center mb-12 transition-all duration-700"
        :class="targetIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-4 testimonial-title enhanced-title">{{ T.testimonials.title[lang] }}</h2>
        <div class="title-underline enhanced-underline"></div>
        
        <!-- Title decoration -->
        <div class="title-decoration" :class="targetIsVisible ? 'active' : ''">
          <div class="decoration-line decoration-line-left"></div>
          <div class="decoration-center">
            <div class="decoration-orb"></div>
          </div>
          <div class="decoration-line decoration-line-right"></div>
        </div>
      </div>

      <!-- Enhanced Slider Testimoni with proper spacing for images -->
      <div class="testimonial-container" :class="targetIsVisible ? 'active' : ''" style="margin-top: 80px;">
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="30"
          :loop="true"
          :pagination="{ clickable: true }"
          :navigation="true"
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
          :breakpoints="{
            '768': { slidesPerView: 2 },
            '1024': { slidesPerView: 3 },
          }"
          class="testimonial-swiper enhanced-swiper"
        >
          <swiper-slide v-for="(testimonial, index) in testimonials" :key="testimonial.id || index" class="slide-with-image-space">
            <div class="testimonial-card enhanced-card group" :style="{ animationDelay: `${index * 0.2}s` }">
              <!-- Enhanced card background effects -->
              <div class="card-bg-gradient"></div>
              <div class="card-floating-elements">
                <div class="floating-orb orb-1"></div>
                <div class="floating-orb orb-2"></div>
                <div class="floating-orb orb-3"></div>
              </div>
              
              <!-- Enhanced foto profil dengan wrapper untuk fixed aspect ratio -->
              <div class="testimonial-img-wrapper enhanced-img-wrapper">
                <div class="img-outer-ring" :class="targetIsVisible ? 'active' : ''"></div>
                <div class="img-inner-glow"></div>
                <img 
                  :src="testimonial.imageUrl" 
                  :alt="testimonial.name[lang]" 
                  class="testimonial-img enhanced-img"
                >
                <div class="img-glow-ring enhanced-glow-ring"></div>
                <!-- Additional image effects -->
                <div class="img-aurora-effect"></div>
                <div class="img-sparkle-container">
                  <div class="sparkle" v-for="s in 6" :key="s" :style="getSparkleStyle(s)"></div>
                </div>
              </div>
              
              <div class="relative pt-16 pb-6 px-6 content-area">
                <!-- Enhanced ikon kutipan dengan animasi -->
                <Icon name="mdi:format-quote-open" class="testimonial-quote-icon enhanced-quote-icon" />
                <Icon name="mdi:format-quote-close" class="testimonial-quote-icon-close" />

                <!-- Quote text with typing effect container -->
                <div class="quote-container">
                  <p class="testimonial-text enhanced-text text-gray-300 italic text-center mb-6 z-10 relative">
                    {{ testimonial.quote[lang] }}
                  </p>
                  <!-- Quote highlight effect -->
                  <div class="quote-highlight"></div>
                </div>
                
                <!-- Enhanced footer -->
                <footer class="testimonial-footer enhanced-footer text-center">
                  <div class="name-container">
                    <p class="font-bold text-white text-lg mb-1 person-name">{{ testimonial.name[lang] }}</p>
                    <div class="name-underline"></div>
                  </div>
                  <p class="text-sm text-blue-400 person-title">{{ testimonial.title[lang] }}</p>
                  
                  <!-- Enhanced rating stars -->
                  <div class="rating-stars enhanced-stars">
                    <Icon name="mdi:star" class="star enhanced-star" v-for="n in 5" :key="n" :style="{ animationDelay: `${n * 0.1}s` }" />
                  </div>
                  
                  <!-- Social proof indicator -->
                  <div class="social-proof-badge">
                    <Icon name="mdi:shield-check" class="w-4 h-4" />
                    <span>Verified Review</span>
                  </div>
                </footer>
              </div>

              <!-- Enhanced hover overlay effect -->
              <div class="card-overlay enhanced-overlay"></div>
              
              <!-- Card border glow -->
              <div class="card-border-glow"></div>
              
              <!-- Holographic effect -->
              <div class="holographic-effect"></div>
            </div>
          </swiper-slide>
        </swiper>
        
        <!-- Enhanced navigation background -->
        <div class="navigation-glow"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useLang } from '~/composables/useLang';
import { translations } from '~/data/translations';
import { useIntersectionObserver } from '@vueuse/core';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Setup untuk bahasa
const { lang } = useLang();
const T = translations;

// Data testimonial
const { data: testimonials } = await useFetch('/api/testimonials');

// Setup untuk animasi masuk (Intersection Observer)
const target = ref(null);
const targetIsVisible = ref(false);
useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      targetIsVisible.value = true;
    }
  }, { threshold: 0.1 }
);

// Setup untuk Swiper
const modules = [Navigation, Pagination, Autoplay];

// ==========================================
// 🚀 OPTIMASI PERFORMA TINGGI (ANTI-LAG)
// ==========================================
const mouseX = ref(0);
const mouseY = ref(0);
let mouseRaf = null;
let isScrolling = false;
let scrollTimeout = null;

const onScrollOptimize = () => {
  isScrolling = true;
  clearTimeout(scrollTimeout);
  
  // Jika user berhenti scroll selama 150ms, aktifkan lagi efek mouse-nya
  scrollTimeout = setTimeout(() => {
    isScrolling = false;
  }, 150);
};

const handleMouseMove = (e) => {
  // 1. Matikan kalkulasi mouse saat user sedang menggeser layar (scroll)
  if (isScrolling) return;
  
  // 2. Matikan kalkulasi mouse di layar HP (lebar < 768px) karena tidak ada kursor
  if (window.innerWidth < 768) return;

  if (mouseRaf) cancelAnimationFrame(mouseRaf);
  mouseRaf = requestAnimationFrame(() => {
    mouseX.value = e.clientX;
    mouseY.value = e.clientY;
  });
};

onMounted(() => {
  // 3. Gunakan { passive: true } agar script tidak menghambat laju scroll layar
  window.addEventListener('mousemove', handleMouseMove, { passive: true });
  window.addEventListener('scroll', onScrollOptimize, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
  window.removeEventListener('scroll', onScrollOptimize);
  
  // 4. Bersihkan memori saat user pindah halaman agar tidak bocor (Memory Leak)
  if (scrollTimeout) clearTimeout(scrollTimeout);
  if (mouseRaf) cancelAnimationFrame(mouseRaf);
});

// ==========================================
// ANIMASI PARTIKEL & SPARKLE
// ==========================================
const getParticleStyle = (index) => {
  const delay = Math.random() * 5;
  const duration = 10 + Math.random() * 20;
  return {
    left: Math.random() * 100 + '%',
    top: Math.random() * 100 + '%',
    animationDelay: delay + 's',
    animationDuration: duration + 's',
    width: (2 + Math.random() * 3) + 'px',
    height: (2 + Math.random() * 3) + 'px'
  };
};

const getSparkleStyle = (index) => {
  const delay = Math.random() * 3;
  const duration = 2 + Math.random() * 2;
  const size = 2 + Math.random() * 3;
  const angle = (index / 6) * 360;
  const radius = 45 + Math.random() * 15;
  const x = Math.cos(angle * Math.PI / 180) * radius;
  const y = Math.sin(angle * Math.PI / 180) * radius;
  
  return {
    transform: `translate(${x}px, ${y}px)`,
    animationDelay: delay + 's',
    animationDuration: duration + 's',
    width: size + 'px',
    height: size + 'px'
  };
};
</script>

<style lang="postcss" scoped>

/* ===================================
   BACKGROUND & BASE STYLES
   =================================== */
.testimonial-section {
  position: relative;
  min-height: 100vh;
  /* Warna konsisten Deep Navy */
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
  opacity: 0.15;
  animation: project-orb-float 20s ease-in-out infinite;
}

.orb-1 {
  width: 500px; height: 500px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  top: -10%; left: -10%; animation-delay: 0s;
}

.orb-2 {
  width: 400px; height: 400px;
  background: linear-gradient(135deg, #ef4444, #f59e0b);
  bottom: -10%; right: -10%; animation-delay: 5s;
}

.orb-3 {
  width: 300px; height: 300px;
  background: linear-gradient(135deg, #10b981, #06b6d4);
  top: 50%; left: 50%; animation-delay: 10s;
}

@keyframes project-orb-float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -30px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
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
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Particles */
.floating-particles { position: absolute; inset: 0; }
.particle {
  position: absolute;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  animation: project-particle-float linear infinite;
}

@keyframes project-particle-float {
  0% { transform: translateY(0) scale(0); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(-100px) scale(1); opacity: 0; }
}

/* ===================================
   INTERACTIVE ANIMATIONS STYLES
   =================================== */
.interactive-spotlight {
  position: fixed;
  top: 0; left: 0;
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 60%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
  will-change: transform;
}

.floating-cyber-elements {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.cyber-element {
  position: absolute;
  will-change: transform;
  transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.cyber-element-1 { top: 15%; left: 10%; }
.cyber-element-2 { bottom: 20%; right: 10%; }
.cyber-element-3 { top: 60%; right: 25%; }

.cyber-spin-slow { animation: cyber-spin 25s linear infinite; }
.cyber-spin-reverse { animation: cyber-spin 35s linear infinite reverse; }
.cyber-pulse-slow { animation: cyber-pulse 6s ease-in-out infinite; }

@keyframes cyber-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes cyber-pulse {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.1); opacity: 1; }
}

/* Enhanced Title animations */
.enhanced-title {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ef4444, #10b981, #3b82f6);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: enhanced-gradient-flow 4s ease infinite;
  position: relative;
  text-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
}

@keyframes enhanced-gradient-flow {
  0%, 100% {
    background-position: 0% 50%;
  }
  25% {
    background-position: 100% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  75% {
    background-position: 0% 100%;
  }
}

.enhanced-underline {
  width: 120px;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ef4444);
  margin: 0 auto;
  border-radius: 2px;
  transform: scaleX(0);
  animation: enhanced-underline-grow 1.2s ease 0.5s forwards;
  position: relative;
  overflow: hidden;
}

.enhanced-underline::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
  animation: underline-shimmer 2s ease-in-out 1.5s infinite;
}

@keyframes enhanced-underline-grow {
  to {
    transform: scaleX(1);
  }
}

@keyframes underline-shimmer {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

/* Title decoration */
.title-decoration {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  opacity: 0;
  transform: scale(0.5);
  transition: all 1s ease;
}

.title-decoration.active {
  opacity: 1;
  transform: scale(1);
}

.decoration-line {
  height: 1px;
  width: 60px;
  background: linear-gradient(90deg, transparent, #3b82f6, transparent);
  animation: decoration-pulse 3s ease-in-out infinite;
}

.decoration-line-left {
  animation-delay: 0s;
}

.decoration-line-right {
  animation-delay: 1.5s;
}

.decoration-center {
  margin: 0 15px;
  position: relative;
}

.decoration-orb {
  width: 8px;
  height: 8px;
  background: radial-gradient(circle, #8b5cf6, #3b82f6);
  border-radius: 50%;
  animation: orb-pulse 2s ease-in-out infinite;
  box-shadow: 0 0 10px rgba(139, 92, 246, 0.6);
}

@keyframes decoration-pulse {
  0%, 100% {
    opacity: 0.3;
    transform: scaleX(0.5);
  }
  50% {
    opacity: 1;
    transform: scaleX(1);
  }
}

@keyframes orb-pulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(139, 92, 246, 0.6);
  }
  50% {
    transform: scale(1.5);
    box-shadow: 0 0 20px rgba(139, 92, 246, 0.9);
  }
}

/* Enhanced Swiper container */
.testimonial-container {
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s ease;
}

.testimonial-container.active {
  opacity: 1;
  transform: translateY(0);
}

.enhanced-swiper {
  @apply pb-16;
  overflow: visible;
  position: relative;
}

/* PERBAIKAN UTAMA: Swiper slide styling untuk memberikan ruang untuk gambar */
.slide-with-image-space {
  padding-top: 60px !important; /* Memberikan ruang di atas untuk gambar */
  overflow: visible !important; /* Memastikan gambar tidak terpotong */
}

/* Navigation glow effect */
.navigation-glow {
  position: absolute;
  top: 50%;
  left: -20px;
  right: -20px;
  height: 60px;
  background: radial-gradient(ellipse, rgba(59, 130, 246, 0.05), transparent);
  transform: translateY(-50%);
  filter: blur(20px);
  animation: nav-glow-pulse 4s ease-in-out infinite;
  z-index: 0;
}

@keyframes nav-glow-pulse {
  0%, 100% {
    opacity: 0.3;
    transform: translateY(-50%) scale(0.8);
  }
  50% {
    opacity: 0.8;
    transform: translateY(-50%) scale(1.2);
  }
}

/* PERBAIKAN UTAMA: Enhanced Testimonial card animations */
.enhanced-card {
  @apply relative bg-gray-900 rounded-xl transition-all duration-700;
  margin-top: 0; /* Dihilangkan margin-top karena sudah ada padding di slide */
  padding-top: 0; /* Reset padding-top */
  border: 1px solid rgba(75, 85, 99, 0.3);
  backdrop-filter: blur(15px);
  background: linear-gradient(145deg, rgba(20, 20, 20, 0.85), rgba(5, 5, 5, 0.95));
  animation: enhanced-slide-in 1s ease forwards;
  opacity: 0;
  transform: translateY(80px) scale(0.9);
  z-index: 1;
  overflow: visible; /* KUNCI: Mengubah dari hidden ke visible */
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.5), 
    0 0 0 1px rgba(139, 92, 246, 0.1);
}

@keyframes enhanced-slide-in {
  0% {
    opacity: 0;
    transform: translateY(80px) scale(0.9) rotateX(15deg);
  }
  50% {
    opacity: 0.7;
    transform: translateY(20px) scale(0.95) rotateX(5deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1) rotateX(0deg);
  }
}

/* Card background gradient */
.card-bg-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, 
    rgba(59, 130, 246, 0.02) 0%, 
    rgba(139, 92, 246, 0.02) 25%,
    rgba(16, 185, 129, 0.02) 50%,
    rgba(239, 68, 68, 0.02) 75%,
    rgba(245, 158, 11, 0.02) 100%
  );
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.5s ease;
  animation: bg-gradient-shift 8s ease-in-out infinite;
}

@keyframes bg-gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.enhanced-card:hover .card-bg-gradient {
  opacity: 1;
}

/* Floating orbs inside cards */
.card-floating-elements {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  border-radius: inherit;
}

.floating-orb {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent);
  filter: blur(1px);
  animation: orb-float 6s ease-in-out infinite;
}

.orb-1 {
  width: 20px;
  height: 20px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.orb-2 {
  width: 15px;
  height: 15px;
  bottom: 30%;
  right: 15%;
  animation-delay: -2s;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent);
}

.orb-3 {
  width: 12px;
  height: 12px;
  top: 60%;
  left: 80%;
  animation-delay: -4s;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.3), transparent);
}

@keyframes orb-float {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
    opacity: 0.3;
  }
  25% {
    transform: translateY(-10px) translateX(5px);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-15px) translateX(-3px);
    opacity: 1;
  }
  75% {
    transform: translateY(-8px) translateX(8px);
    opacity: 0.5;
  }
}

.enhanced-card:hover {
  transform: translateY(-15px) scale(1.02) !important;
  border-color: rgba(139, 92, 246, 0.6); 
  box-shadow: 
    0 35px 70px rgba(0, 0, 0, 0.6), 
    0 0 40px rgba(139, 92, 246, 0.2),
    0 0 0 1px rgba(139, 92, 246, 0.3);
}

/* PERBAIKAN UTAMA: Enhanced image wrapper - posisi disesuaikan */
.enhanced-img-wrapper {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -55px; 
  width: 100px;
  height: 100px;
  z-index: 10;
  border-radius: 50%; 
}
/* Outer rotating ring - ukuran disesuaikan */
.img-outer-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 130px; /* Diperbesar dari 120px */
  height: 130px; /* Diperbesar dari 120px */
  border: 2px solid transparent;
  border-radius: 50%;
  opacity: 0;
  transition: all 0.8s ease;
  z-index: 0;
}

.img-outer-ring.active {
  opacity: 1;
  background: conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ef4444, #10b981, #f59e0b, #3b82f6);
  animation: enhanced-ring-spin 6s linear infinite;
}

.img-outer-ring::before {
  content: '';
  position: absolute;
  inset: 2px;
  background: #1f2937;
  border-radius: 50%;
}

@keyframes enhanced-ring-spin {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

/* Inner glow effect - ukuran disesuaikan */
.img-inner-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px; /* Diperbesar dari 110px */
  height: 120px; /* Diperbesar dari 110px */
  border-radius: 50%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.2), transparent);
  filter: blur(10px);
  animation: inner-glow-pulse 3s ease-in-out infinite;
  z-index: 1;
}

@keyframes inner-glow-pulse {
  0%, 100% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0.3;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0.8;
  }
}

.enhanced-img {
  width: 100%;
  height: 100%;
  border-radius: 50%; 
  object-fit: cover; 
  object-position: center; 
  background-color: #ffffff; 
  border: 4px solid #1e293b; 
  box-shadow: 
    0 0 0 3px rgba(59, 130, 246, 0.6),
    0 15px 30px rgba(0, 0, 0, 0.5);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 2;
}

.enhanced-card:hover .enhanced-img {
  transform: scale(1.15) rotate(5deg);
  border-radius: 50%; 
  box-shadow: 
    0 0 0 4px rgba(59, 130, 246, 1),
    0 20px 40px rgba(0, 0, 0, 0.5),
    0 0 30px rgba(59, 130, 246, 0.4);
  filter: brightness(1.1) contrast(1.1);
}

/* Enhanced glowing ring around image - ukuran disesuaikan */
.enhanced-glow-ring {
  position: absolute;
  top: -8px; /* Diperbesar dari -6px */
  left: -8px; /* Diperbesar dari -6px */
  right: -8px; /* Diperbesar dari -6px */
  bottom: -8px; /* Diperbesar dari -6px */
  border-radius: 50%;
  background: conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ef4444, #10b981, #f59e0b, #3b82f6);
  background-size: 300% 300%;
  opacity: 0;
  transition: all 0.5s ease;
  animation: enhanced-ring-pulse 3s ease-in-out infinite;
  z-index: 1;
  filter: blur(2px);
}

.enhanced-card:hover .enhanced-glow-ring {
  opacity: 0.8;
  transform: scale(1.15);
  animation: enhanced-ring-pulse 1.5s ease-in-out infinite;
}

@keyframes enhanced-ring-pulse {
  0%, 100% {
    transform: scale(1) rotate(0deg);
    opacity: 0.4;
  }
  33% {
    transform: scale(1.1) rotate(120deg);
    opacity: 0.8;
  }
  66% {
    transform: scale(1.05) rotate(240deg);
    opacity: 0.6;
  }
}

/* Aurora effect around image - ukuran disesuaikan */
.img-aurora-effect {
  position: absolute;
  inset: -20px; /* Diperbesar dari -15px */
  border-radius: 50%;
  background: conic-gradient(
    from 0deg at 50% 50%,
    transparent 0deg,
    rgba(59, 130, 246, 0.1) 60deg,
    rgba(139, 92, 246, 0.1) 120deg,
    rgba(239, 68, 68, 0.1) 180deg,
    rgba(16, 185, 129, 0.1) 240deg,
    rgba(245, 158, 11, 0.1) 300deg,
    transparent 360deg
  );
  opacity: 0;
  animation: aurora-rotate 8s linear infinite;
  filter: blur(2px);
  z-index: 0;
}

.enhanced-card:hover .img-aurora-effect {
  opacity: 1;
  animation: aurora-rotate 4s linear infinite;
}

@keyframes aurora-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Sparkle effects - ukuran disesuaikan */
.img-sparkle-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 140px; /* Diperbesar dari 120px */
  height: 140px; /* Diperbesar dari 120px */
  pointer-events: none;
}

.sparkle {
  position: absolute;
  background: radial-gradient(circle, rgba(255, 255, 255, 1), transparent);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  animation: sparkle-twinkle linear infinite;
  opacity: 0;
}

@keyframes sparkle-twinkle {
  0%, 90%, 100% {
    opacity: 0;
    transform: scale(0);
  }
  5%, 85% {
    opacity: 1;
    transform: scale(1);
  }
  45% {
    opacity: 0.8;
    transform: scale(1.2);
  }
}

/* Enhanced quote icon animations */
.enhanced-quote-icon {
  @apply absolute top-4 left-4 w-20 h-20 text-gray-700/20;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  animation: enhanced-quote-float 4s ease-in-out infinite;
  z-index: 0;
  filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.2));
}

.testimonial-quote-icon-close {
  @apply absolute bottom-4 right-4 w-16 h-16 text-gray-700/15;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  animation: enhanced-quote-float 4s ease-in-out infinite reverse;
  z-index: 0;
  filter: drop-shadow(0 0 8px rgba(139, 92, 246, 0.2));
  animation-delay: -2s;
}

.enhanced-card:hover .enhanced-quote-icon {
  color: rgba(59, 130, 246, 0.3);
  transform: scale(1.2) rotate(-10deg);
  filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.4));
}

.enhanced-card:hover .testimonial-quote-icon-close {
  color: rgba(139, 92, 246, 0.3);
  transform: scale(1.1) rotate(10deg);
  filter: drop-shadow(0 0 15px rgba(139, 92, 246, 0.4));
}

@keyframes enhanced-quote-float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-8px) rotate(2deg);
  }
  50% {
    transform: translateY(-12px) rotate(-1deg);
  }
  75% {
    transform: translateY(-5px) rotate(3deg);
  }
}

/* Quote container with highlight effect */
.quote-container {
  position: relative;
  padding: 10px;
  border-radius: 8px;
}

.quote-highlight {
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.05), transparent);
  border-radius: 8px;
  opacity: 0;
  transition: all 0.4s ease;
  animation: quote-highlight-flow 6s ease-in-out infinite;
}

@keyframes quote-highlight-flow {
  0%, 100% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(100%);
  }
}

.enhanced-card:hover .quote-highlight {
  opacity: 1;
}

/* Enhanced text animations */
.enhanced-text {
  transition: all 0.4s ease;
  line-height: 1.7;
  position: relative;
  z-index: 2;
}

.enhanced-text::before {
  content: '';
  position: absolute;
  inset: -5px;
  background: radial-gradient(ellipse, rgba(59, 130, 246, 0.05), transparent);
  border-radius: 8px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.enhanced-card:hover .enhanced-text {
  color: rgba(229, 231, 235, 1);
  text-shadow: 0 1px 8px rgba(59, 130, 246, 0.2);
  transform: translateZ(10px);
}

.enhanced-card:hover .enhanced-text::before {
  opacity: 1;
}

/* Enhanced footer */
.enhanced-footer {
  opacity: 0;
  transform: translateY(20px);
  animation: enhanced-footer-fade-in 0.8s ease 0.4s forwards;
  position: relative;
}

@keyframes enhanced-footer-fade-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.name-container {
  position: relative;
  display: inline-block;
  margin-bottom: 8px;
}

.person-name {
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
}

.name-underline {
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #60a5fa, #a78bfa);
  transition: width 0.4s ease;
  border-radius: 1px;
}

.enhanced-card:hover .name-underline {
  width: 100%;
}

.enhanced-card:hover .person-name {
  color: #60a5fa;
  text-shadow: 0 0 10px rgba(96, 165, 250, 0.4);
}

.person-title {
  transition: all 0.3s ease;
  position: relative;
}

.enhanced-card:hover .person-title {
  color: #93c5fd;
  transform: translateY(-2px);
}

/* Enhanced star ratings */
.enhanced-stars {
  display: flex;
  justify-content: center;
  gap: 3px;
  margin: 12px 0;
  position: relative;
}

.enhanced-star {
  width: 18px;
  height: 18px;
  color: #fbbf24;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  animation: enhanced-star-twinkle 2s ease-in-out infinite;
  transition: all 0.3s ease;
  cursor: pointer;
}

.enhanced-star::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, rgba(251, 191, 36, 0.6), transparent);
  border-radius: 50%;
  transform: scale(0);
  transition: transform 0.3s ease;
}

.enhanced-star:hover::before {
  transform: scale(2);
}

.enhanced-star:hover {
  transform: scale(1.3) rotate(15deg);
  color: #fcd34d;
  filter: drop-shadow(0 0 10px rgba(252, 211, 77, 0.6));
}

@keyframes enhanced-star-twinkle {
  0%, 100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
  25% {
    opacity: 0.7;
    transform: scale(0.9) rotate(-5deg);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1) rotate(5deg);
  }
  75% {
    opacity: 0.9;
    transform: scale(0.95) rotate(-2deg);
  }
}

/* Social proof badge */
.social-proof-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 12px;
  padding: 4px 8px;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 12px;
  font-size: 0.75rem;
  color: #34d399;
  opacity: 0;
  transform: scale(0.8);
  animation: badge-appear 0.6s ease 0.8s forwards;
  backdrop-filter: blur(5px);
}

@keyframes badge-appear {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.enhanced-card:hover .social-proof-badge {
  background: rgba(16, 185, 129, 0.2);
  border-color: rgba(16, 185, 129, 0.5);
  box-shadow: 0 0 15px rgba(16, 185, 129, 0.3);
}

/* Enhanced card overlay effect */
.enhanced-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, 
    rgba(59, 130, 246, 0.03), 
    rgba(139, 92, 246, 0.03),
    rgba(16, 185, 129, 0.03)
  );
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.enhanced-card:hover .enhanced-overlay {
  opacity: 1;
  animation: overlay-shimmer 2s ease-in-out infinite;
}

@keyframes overlay-shimmer {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Card border glow */
.card-border-glow {
  position: absolute;
  inset: -2px;
  background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ef4444, #10b981, #3b82f6);
  background-size: 300% 300%;
  border-radius: inherit;
  opacity: 0;
  transition: all 0.5s ease;
  animation: border-glow-flow 4s ease-in-out infinite;
  z-index: -1;
  filter: blur(2px);
}

@keyframes border-glow-flow {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.enhanced-card:hover .card-border-glow {
  opacity: 0.6;
  transform: scale(1.02);
}

/* Holographic effect */
.holographic-effect {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    45deg,
    transparent 30%,
    rgba(255, 255, 255, 0.05) 50%,
    transparent 70%
  );
  transform: translateX(-100%) skewX(-15deg);
  transition: transform 0.8s ease;
  border-radius: inherit;
  z-index: 3;
  pointer-events: none;
}

.enhanced-card:hover .holographic-effect {
  transform: translateX(100%) skewX(-15deg);
}

/* Content area enhancements */
.content-area {
  position: relative;
  z-index: 2;
}

.content-area::before {
  content: '';
  position: absolute;
  inset: -10px;
  background: radial-gradient(ellipse, rgba(59, 130, 246, 0.03), transparent);
  border-radius: 12px;
  opacity: 0;
  transition: opacity 0.4s ease;
  animation: content-aura 5s ease-in-out infinite;
}

@keyframes content-aura {
  0%, 100% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1.1);
  }
}

.enhanced-card:hover .content-area::before {
  opacity: 1;
}

/* Enhanced Swiper Navigation */
:deep(.enhanced-swiper .swiper-button-prev),
:deep(.enhanced-swiper .swiper-button-next) {
  @apply text-blue-400;
  /* Background tombol menjadi Hitam Kaca */
  background: rgba(15, 15, 15, 0.9);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  backdrop-filter: blur(15px);
  border: 2px solid rgba(59, 130, 246, 0.3);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 8px 20px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.05);
  overflow: hidden;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}

/* Posisi spesifik untuk tombol 'prev' (kiri) */
:deep(.enhanced-swiper .swiper-button-prev) {
  left: -25px;
}

/* Posisi spesifik untuk tombol 'next' (kanan) */
:deep(.enhanced-swiper .swiper-button-next) {
  right: -25px;
}

:deep(.enhanced-swiper .swiper-button-prev::before),
:deep(.enhanced-swiper .swiper-button-next::before) {
  content: '';
  position: absolute;
  inset: 0;
  background: conic-gradient(from 0deg, transparent, rgba(59, 130, 246, 0.2), transparent);
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease;
  animation: nav-button-glow 3s ease-in-out infinite;
}

@keyframes nav-button-glow {
  0%, 100% {
    transform: rotate(0deg);
    opacity: 0;
  }
  50% {
    transform: rotate(180deg);
    opacity: 0.5;
  }
}

:deep(.enhanced-swiper .swiper-button-prev:hover),
:deep(.enhanced-swiper .swiper-button-next:hover) {
  background: rgba(59, 130, 246, 0.2);
  border-color: rgba(59, 130, 246, 0.8);
  transform: translateY(-50%) scale(1.15);
  box-shadow: 
    0 15px 35px rgba(0, 0, 0, 0.4),
    0 0 25px rgba(59, 130, 246, 0.4);
}

:deep(.enhanced-swiper .swiper-button-prev:hover::before),
:deep(.enhanced-swiper .swiper-button-next:hover::before) {
  opacity: 1;
  animation: nav-button-glow 1.5s ease-in-out infinite;
}

:deep(.enhanced-swiper .swiper-button-prev::after),
:deep(.enhanced-swiper .swiper-button-next::after) {
  font-size: 20px;
  font-weight: bold;
  transition: all 0.3s ease;
}

:deep(.enhanced-swiper .swiper-button-prev:hover::after),
:deep(.enhanced-swiper .swiper-button-next:hover::after) {
  text-shadow: 0 0 10px rgba(59, 130, 246, 0.6);
}

/* Enhanced Pagination styling */
:deep(.enhanced-swiper .swiper-pagination) {
  bottom: 0px;
  position: relative;
  margin-top: 20px;
}

:deep(.enhanced-swiper .swiper-pagination-bullet) {
  background: rgba(75, 85, 99, 0.6);
  width: 14px;
  height: 14px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  position: relative;
  overflow: hidden;
}

:deep(.enhanced-swiper .swiper-pagination-bullet::before) {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.4), transparent);
  border-radius: 50%;
  transform: scale(0);
  transition: transform 0.3s ease;
}

:deep(.enhanced-swiper .swiper-pagination-bullet-active) {
  @apply bg-blue-400;
  transform: scale(1.4);
  box-shadow: 
    0 0 15px rgba(59, 130, 246, 0.6),
    0 0 0 3px rgba(59, 130, 246, 0.2);
  border-color: rgba(59, 130, 246, 0.8);
}

:deep(.enhanced-swiper .swiper-pagination-bullet-active::before) {
  transform: scale(1.5);
}

:deep(.enhanced-swiper .swiper-pagination-bullet:hover) {
  background: rgba(59, 130, 246, 0.8);
  transform: scale(1.3);
  box-shadow: 0 0 12px rgba(59, 130, 246, 0.5);
  border-color: rgba(59, 130, 246, 0.6);
}

:deep(.enhanced-swiper .swiper-pagination-bullet:hover::before) {
  transform: scale(1.2);
}

/* Card entrance animations */
@keyframes card-entrance {
  0% {
    opacity: 0;
    transform: translateY(100px) rotateX(30deg) scale(0.8);
  }
  40% {
    opacity: 0.8;
    transform: translateY(30px) rotateX(10deg) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotateX(0deg) scale(1);
  }
}

.enhanced-card {
  animation: card-entrance 1.2s ease forwards;
}

/* Responsive enhancements */
@media (max-width: 768px) {
  /* =========================================================
     HARDCORE OPTIMIZATION UNTUK MOBILE (MEMBUNUH SEMUA LAG)
     ========================================================= */
  
  /* Sembunyikan SEMUA elemen dekorasi yang memberatkan GPU HP */
  .particles-container,
  .sparkles-container,
  .spotlight-effect,
  .background-decorations,
  .floating-particles,
  .gradient-orbs,
  .orbital-grid-pattern,
  .floating-cyber-elements,
  .interactive-spotlight,
  .card-floating-elements,
  .bg-shape,
  .flowing-particles,
  .cosmic-dust,
  .light-rays,
  .img-outer-ring,
  .img-inner-glow,
  .enhanced-glow-ring,
  .img-aurora-effect,
  .img-sparkle-container {
    display: none !important;
  }

  /* Kurangi kualitas kaca buram (backdrop-filter memakan RAM sangat besar di HP) */
  .enhanced-card {
    backdrop-filter: none !important;
    background: rgba(20, 20, 20, 0.95) !important; /* Gunakan warna solid sedikit transparan sebagai gantinya */
    margin-top: 0;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4) !important;
  }

  /* Hilangkan efek animasi saat card di-hover karena HP menggunakan layar sentuh */
  .enhanced-card:hover {
    transform: none !important;
    border-color: rgba(75, 85, 99, 0.3) !important;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4) !important;
  }

  .enhanced-card:hover .enhanced-img {
    transform: none !important;
    filter: none !important;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.6) !important;
  }

  .enhanced-card:hover .enhanced-quote-icon,
  .enhanced-card:hover .testimonial-quote-icon-close {
    transform: none !important;
  }

  /* Sesuaikan ukuran gambar untuk HP */
  .enhanced-img-wrapper {
    width: 75px !important;
    height: 75px !important;
    top: -40px !important;
  }
  
  .enhanced-quote-icon {
    width: 45px !important;
    height: 45px !important;
    top: 10px !important;
    left: 10px !important;
    animation: none !important; /* Matikan animasi melayang */
  }
  
  .testimonial-quote-icon-close {
    width: 35px !important;
    height: 35px !important;
    bottom: 10px !important;
    right: 10px !important;
    animation: none !important;
  }
  
  .enhanced-star {
    width: 14px !important;
    height: 14px !important;
    animation: none !important; /* Matikan kerlip bintang di HP */
  }
  
  .social-proof-badge {
    font-size: 0.65rem !important;
    padding: 2px 6px !important;
    animation: none !important;
    backdrop-filter: none !important;
  }
  
  .testimonial-container {
    margin-top: 50px !important;
  }
  
  .slide-with-image-space {
    padding-top: 40px !important;
  }
}

@media (max-width: 480px) {
  .animated-grid {
    background-size: 40px 40px;
  }
  
  .enhanced-card {
    margin-top: 0; /* Reset margin untuk very small screens */
  }
  
  .flowing-particles .flow-particle,
  .cosmic-dust .dust-particle {
    display: none;
  }
  
  .light-rays {
    opacity: 0.3;
  }
  
  .card-floating-elements {
    display: none;
  }
  
  .enhanced-img-wrapper {
    width: 70px;
    height: 70px;
    top: -45px;
  }
  
  .img-outer-ring {
    width: 90px;
    height: 90px;
  }
  
  .img-inner-glow {
    width: 80px;
    height: 80px;
  }
  
  .img-sparkle-container {
    width: 100px;
    height: 100px;
  }
}

/* Accessibility and performance improvements */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .flowing-particles,
  .light-rays,
  .animated-grid,
  .cosmic-dust {
    display: none;
  }
  
  .img-outer-ring.active {
    animation: none;
  }
  
  .bg-shape {
    animation: none;
  }
  
  .card-floating-elements {
    display: none;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .enhanced-card {
    border-width: 2px;
    border-color: rgba(59, 130, 246, 0.8);
  }
  
  .enhanced-title {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
  }
  
  .enhanced-star {
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.8));
  }
}

/* Focus states for accessibility */
.enhanced-card:focus-within {
  outline: 3px solid #3b82f6;
  outline-offset: 3px;
}

:deep(.swiper-button-prev:focus-visible),
:deep(.swiper-button-next:focus-visible) {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

:deep(.swiper-pagination-bullet:focus-visible) {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* GPU acceleration for smooth performance */
.enhanced-card,
.enhanced-img,
.bg-shape,
.flow-particle,
.dust-particle,
.floating-orb,
.enhanced-star {
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform;
}

/* Advanced hover effects for the entire section */
.testimonial-container:hover .flow-particle {
  animation-duration: 15s;
}

.testimonial-container:hover .bg-shape {
  animation-duration: 8s;
}

.testimonial-container:hover .dust-particle {
  animation-duration: 8s;
}

/* =========================================================
   HARDWARE ACCELERATION (MENGHINDARI DROP FRAME/LAG)
   ========================================================= */

/* Paksa browser hanya me-render komponen ini saat sudah masuk ke dalam layar */
.testimonial-section {
  content-visibility: auto;
  contain-intrinsic-size: 800px;
}

/* Kunci elemen bergerak ke dalam layer GPU terpisah */
.enhanced-card,
.enhanced-img,
.enhanced-swiper,
.enhanced-text,
.quote-highlight {
  will-change: transform, opacity;
  transform: translateZ(0);
  -webkit-transform: translate3d(0, 0, 0); /* Khusus Safari/iOS */
  backface-visibility: hidden;
  perspective: 1000px;
}

/* Jika ada animasi background, pindahkan ke opacity */
.card-bg-gradient {
  will-change: opacity;
}
</style>