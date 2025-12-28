<template>
  <section id="testimonials" ref="target" class="bg-gray-800 py-20 px-4 transition-all duration-1000 relative overflow-hidden"
           :class="targetIsVisible ? 'opacity-100' : 'opacity-0'"
           style="z-index: 1;">
    
    <!-- Enhanced Background animated elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Original background shapes with enhanced animations -->
      <div class="testimonial-bg-shapes">
        <div class="bg-shape bg-shape-1"></div>
        <div class="bg-shape bg-shape-2"></div>
        <div class="bg-shape bg-shape-3"></div>
        <!-- Additional new shapes -->
        <div class="bg-shape bg-shape-4"></div>
        <div class="bg-shape bg-shape-5"></div>
        <div class="bg-shape bg-shape-6"></div>
      </div>
      
      <!-- Animated grid background -->
      <div class="animated-grid"></div>
      
      <!-- Flowing particles -->
      <div class="flowing-particles">
        <div class="flow-particle" v-for="i in 25" :key="i" :style="getFlowParticleStyle(i)"></div>
      </div>
      
      <!-- Light rays -->
      <div class="light-rays">
        <div class="ray ray-1"></div>
        <div class="ray ray-2"></div>
        <div class="ray ray-3"></div>
        <div class="ray ray-4"></div>
      </div>
      
      <!-- Cosmic dust effect -->
      <div class="cosmic-dust">
        <div class="dust-particle" v-for="i in 40" :key="i" :style="getDustParticleStyle(i)"></div>
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
          <swiper-slide v-for="(testimonial, index) in T.testimonials.list" :key="index" class="slide-with-image-space">
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
import { ref } from 'vue';
// Impor untuk bahasa
import { useLang } from '~/composables/useLang';
import { translations } from '~/data/translations';
// Impor untuk animasi
import { useIntersectionObserver } from '@vueuse/core';
// Impor Swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Setup untuk bahasa
const { lang } = useLang();
const T = translations;

// Setup untuk animasi
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

// Particle style generators (inspired by AboutmeSection)
const getFlowParticleStyle = (index) => {
  const delay = Math.random() * 15;
  const duration = 20 + Math.random() * 15;
  const size = 1 + Math.random() * 4;
  const startX = Math.random() * 100;
  
  return {
    left: startX + '%',
    animationDelay: delay + 's',
    animationDuration: duration + 's',
    width: size + 'px',
    height: size + 'px'
  };
};

const getDustParticleStyle = (index) => {
  const delay = Math.random() * 8;
  const duration = 12 + Math.random() * 8;
  const size = 0.5 + Math.random() * 2;
  const startX = Math.random() * 100;
  const startY = Math.random() * 100;
  
  return {
    left: startX + '%',
    top: startY + '%',
    animationDelay: delay + 's',
    animationDuration: duration + 's',
    width: size + 'px',
    height: size + 'px'
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
/* Enhanced Background animated elements */
.testimonial-bg-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
}

.bg-shape {
  position: absolute;
  background: linear-gradient(45deg, rgba(59, 130, 246, 0.08), rgba(139, 92, 246, 0.08));
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: morphFloat 12s ease-in-out infinite;
  filter: blur(0.5px);
  will-change: transform;
}

.bg-shape-1 {
  width: 200px;
  height: 200px;
  top: 10%;
  left: 5%;
  animation-delay: 0s;
}

.bg-shape-2 {
  width: 150px;
  height: 150px;
  top: 70%;
  right: 10%;
  animation-delay: -4s;
}

.bg-shape-3 {
  width: 180px;
  height: 180px;
  top: 40%;
  left: 80%;
  animation-delay: -8s;
}

/* New additional shapes */
.bg-shape-4 {
  width: 120px;
  height: 120px;
  top: 20%;
  right: 25%;
  animation-delay: -2s;
  background: linear-gradient(45deg, rgba(16, 185, 129, 0.06), rgba(245, 158, 11, 0.06));
}

.bg-shape-5 {
  width: 160px;
  height: 160px;
  bottom: 25%;
  left: 35%;
  animation-delay: -6s;
  background: linear-gradient(45deg, rgba(239, 68, 68, 0.06), rgba(168, 85, 247, 0.06));
}

.bg-shape-6 {
  width: 140px;
  height: 140px;
  top: 55%;
  left: 15%;
  animation-delay: -10s;
  background: linear-gradient(45deg, rgba(245, 158, 11, 0.06), rgba(59, 130, 246, 0.06));
}

@keyframes morphFloat {
  0%, 100% {
    transform: translateY(0px) rotate(0deg) scale(1);
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
  25% {
    transform: translateY(-30px) rotate(90deg) scale(1.1);
    border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
  }
  50% {
    transform: translateY(-50px) rotate(180deg) scale(0.9);
    border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
  }
  75% {
    transform: translateY(-30px) rotate(270deg) scale(1.1);
    border-radius: 30% 70% 70% 30% / 70% 30% 30% 70%;
  }
}

/* Animated grid background */
.animated-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.02) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: grid-flow 10s ease-in-out infinite;
}

@keyframes grid-flow {
  0%, 100% { 
    opacity: 0.2;
    transform: translate(0, 0) rotate(0deg);
  }
  25% { 
    opacity: 0.4;
    transform: translate(15px, 10px) rotate(1deg);
  }
  50% { 
    opacity: 0.6;
    transform: translate(25px, 20px) rotate(-1deg);
  }
  75% { 
    opacity: 0.4;
    transform: translate(10px, 15px) rotate(0.5deg);
  }
}

/* Flowing particles */
.flowing-particles {
  position: absolute;
  width: 100%;
  height: 100%;
}

.flow-particle {
  position: absolute;
  background: linear-gradient(45deg, rgba(59, 130, 246, 0.4), rgba(139, 92, 246, 0.4));
  border-radius: 50%;
  animation: flow-testimonial linear infinite;
  filter: blur(0.8px);
}

@keyframes flow-testimonial {
  0% {
    transform: translateX(-100px) translateY(120vh) scale(0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
    transform: translateX(-50px) translateY(100vh) scale(1) rotate(45deg);
  }
  90% {
    opacity: 1;
    transform: translateX(150px) translateY(-20vh) scale(1) rotate(405deg);
  }
  100% {
    transform: translateX(200px) translateY(-40vh) scale(0) rotate(450deg);
    opacity: 0;
  }
}

/* Cosmic dust effect */
.cosmic-dust {
  position: absolute;
  width: 100%;
  height: 100%;
}

.dust-particle {
  position: absolute;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.6), transparent);
  border-radius: 50%;
  animation: dust-float linear infinite;
  filter: blur(0.3px);
}

@keyframes dust-float {
  0%, 100% {
    transform: translate(0, 0) scale(0.5);
    opacity: 0.2;
  }
  25% {
    transform: translate(10px, -15px) scale(1);
    opacity: 0.8;
  }
  50% {
    transform: translate(-5px, -25px) scale(1.2);
    opacity: 1;
  }
  75% {
    transform: translate(15px, -20px) scale(0.8);
    opacity: 0.6;
  }
}

/* Light rays */
.light-rays {
  position: absolute;
  width: 100%;
  height: 100%;
}

.ray {
  position: absolute;
  background: linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.04), transparent);
  animation: ray-testimonial 15s ease-in-out infinite;
}

.ray-1 {
  width: 2px;
  height: 100%;
  left: 15%;
  animation-delay: 0s;
  transform-origin: top;
}

.ray-2 {
  width: 100%;
  height: 2px;
  top: 25%;
  animation-delay: -5s;
  transform-origin: left;
}

.ray-3 {
  width: 2px;
  height: 100%;
  right: 20%;
  animation-delay: -10s;
  transform-origin: bottom;
}

.ray-4 {
  width: 100%;
  height: 2px;
  bottom: 35%;
  animation-delay: -7.5s;
  transform-origin: right;
}

@keyframes ray-testimonial {
  0%, 100% {
    opacity: 0;
    transform: scale(0.5) rotate(0deg);
  }
  20% {
    opacity: 0.3;
    transform: scale(1) rotate(2deg);
  }
  50% {
    opacity: 1;
    transform: scale(1.5) rotate(-2deg);
  }
  80% {
    opacity: 0.3;
    transform: scale(1) rotate(1deg);
  }
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
  background: linear-gradient(145deg, rgba(31, 41, 55, 0.85), rgba(55, 65, 81, 0.65));
  animation: enhanced-slide-in 1s ease forwards;
  opacity: 0;
  transform: translateY(80px) scale(0.9);
  z-index: 1;
  overflow: visible; /* KUNCI: Mengubah dari hidden ke visible */
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(59, 130, 246, 0.1);
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
  border-color: rgba(59, 130, 246, 0.6);
  box-shadow: 
    0 35px 70px rgba(0, 0, 0, 0.4),
    0 0 40px rgba(59, 130, 246, 0.2),
    0 0 0 1px rgba(59, 130, 246, 0.3);
}

/* PERBAIKAN UTAMA: Enhanced image wrapper - posisi disesuaikan */
.enhanced-img-wrapper {
  @apply absolute left-1/2 -translate-x-1/2;
  top: -60px; /* Disesuaikan dari -50px ke -60px untuk memberikan lebih banyak ruang */
  width: 100px;
  height: 100px;
  position: relative;
  z-index: 10; /* Menambahkan z-index tinggi untuk memastikan gambar tampil di atas */
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
  @apply w-full h-full rounded-full object-cover border-4 border-gray-800;
  box-shadow: 
    0 0 0 4px rgba(59, 130, 246, 0.5),
    0 15px 30px rgba(0, 0, 0, 0.4);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 2;
}

.enhanced-card:hover .enhanced-img {
  transform: scale(1.2) rotate(8deg);
  box-shadow: 
    0 0 0 4px rgba(59, 130, 246, 1),
    0 20px 40px rgba(0, 0, 0, 0.5),
    0 0 30px rgba(59, 130, 246, 0.4);
  filter: brightness(1.15) contrast(1.1) saturate(1.2);
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
  background: rgba(31, 41, 55, 0.9);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  backdrop-filter: blur(15px);
  border: 2px solid rgba(59, 130, 246, 0.3);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 8px 20px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(75, 85, 99, 0.2);
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
  .bg-shape-4,
  .bg-shape-5,
  .bg-shape-6 {
    display: none;
  }
  
  .flowing-particles {
    opacity: 0.7;
  }
  
  .light-rays {
    opacity: 0.5;
  }
  
  .enhanced-img-wrapper {
    width: 80px;
    height: 80px;
    top: -50px; /* Disesuaikan untuk mobile */
  }
  
  .img-outer-ring {
    width: 110px; /* Disesuaikan untuk mobile */
    height: 110px;
  }
  
  .img-inner-glow {
    width: 100px; /* Disesuaikan untuk mobile */
    height: 100px;
  }
  
  .enhanced-quote-icon {
    @apply w-16 h-16;
  }
  
  .testimonial-quote-icon-close {
    @apply w-12 h-12;
  }
  
  .enhanced-star {
    width: 16px;
    height: 16px;
  }
  
  .social-proof-badge {
    font-size: 0.7rem;
    padding: 3px 6px;
  }
  
  /* Mobile spacing adjustment */
  .testimonial-container {
    margin-top: 60px !important;
  }
  
  .slide-with-image-space {
    padding-top: 50px !important;
  }
  
  .content-area {
    padding-top: 4rem !important; /* 64px - lebih besar untuk mobile */
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
</style>