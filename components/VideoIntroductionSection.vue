<template>
  <section id="video-introduction" ref="sectionTarget" class="bg-animated-dark py-20 px-4 relative overflow-hidden">
    <!-- Enhanced Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Floating video particles -->
      <div class="video-particles">
        <div class="video-particle" v-for="i in 30" :key="i" :style="getVideoParticleStyle(i)"></div>
      </div>
      
      <!-- Geometric video shapes -->
      <div class="video-geometric-shapes">
        <div class="video-shape video-shape-play"></div>
        <div class="video-shape video-shape-pause"></div>
        <div class="video-shape video-shape-stop"></div>
        <div class="video-shape video-shape-circle"></div>
      </div>

      <!-- Enhanced grid pattern -->
      <div class="video-grid-overlay"></div>
      
      <!-- Light rays effect -->
      <div class="light-rays">
        <div class="ray ray-1"></div>
        <div class="ray ray-2"></div>
        <div class="ray ray-3"></div>
      </div>
    </div>

    <!-- Floating video icons -->
    <div class="floating-video-orbs">
      <div class="video-orb video-orb-1"></div>
      <div class="video-orb video-orb-2"></div>
      <div class="video-orb video-orb-3"></div>
    </div>

    <div class="container mx-auto relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <!-- Enhanced Text Section -->
        <div class="text-white relative">
          <!-- Text background glow -->
          <div class="text-bg-glow"></div>
          
          <h2 
            class="text-3xl md:text-4xl font-bold mb-4 enhanced-gradient-text transition-all duration-700 relative z-2"
            :class="sectionTargetIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
          >
            <span class="title-wrapper">
              {{ T.video.title[lang] }}
            </span>
          </h2>
          
          <p 
            class="text-gray-300 mb-6 leading-relaxed transition-all duration-700 enhanced-text"
            :class="sectionTargetIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
            :style="{ transitionDelay: '200ms' }"
          >
            {{ T.video.description[lang] }}
          </p>
          
          <div 
            class="enhanced-quote-block transition-all duration-700"
            :class="sectionTargetIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
            :style="{ transitionDelay: '400ms' }"
          >
            <div class="quote-icon">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.953a1 1 0 00.95.69h4.204c.969 0 1.371 1.24.588 1.81l-3.401 2.47a1 1 0 00-.364 1.118l1.286 3.953c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.401 2.47c-.784.57-1.838-.197-1.539-1.118l1.286-3.953a1 1 0 00-.364-1.118L2.98 9.38c-.783-.57-.38-1.81.588-1.81h4.204a1 1 0 00.95-.69l1.286-3.953z"/>
              </svg>
            </div>
            <p class="italic text-gray-400 quote-text">
              "{{ T.video.quote[lang] }}"
            </p>
            <div class="quote-line"></div>
          </div>

          <!-- Animated stats or features -->
          <div 
            class="video-stats mt-8 transition-all duration-700"
            :class="sectionTargetIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
            :style="{ transitionDelay: '600ms' }"
          >
            <div class="stats-grid">
              <div class="stat-item">
                <div class="stat-icon">🎬</div>
                <div class="stat-text">Video Introduction</div>
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

        <!-- Enhanced Video Section -->
        <div ref="videoTarget" class="transition-all duration-300 ease-out relative">
          <!-- Video glow background -->
          <div class="video-glow-bg"></div>
          
          <div 
            class="enhanced-video-container transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/30 relative z-10"
            :style="{ transform: `rotateX(${parallax.roll * 8}deg) rotateY(${parallax.tilt * 8}deg)` }"
          >
            <!-- Video frame decoration -->
            <div class="video-frame-decoration">
              <div class="frame-corner frame-corner-tl"></div>
              <div class="frame-corner frame-corner-tr"></div>
              <div class="frame-corner frame-corner-bl"></div>
              <div class="frame-corner frame-corner-br"></div>
            </div>

            <!-- Play button overlay (appears on hover) -->
            <div class="play-button-overlay">
              <div class="play-button">
                <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 5v10l8-5-8-5z"/>
                </svg>
              </div>
            </div>

            <!-- Thumbnail and Video Src -->
            <div class="video-container">
              <video 
                class="w-full rounded-lg"
                controls
                preload="metadata"
                poster="/images/thumbnail.png"
                @play="onVideoPlay"
                @pause="onVideoPause"
              >
                <source src="/videos/myintroduction.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            </div>

            <!-- Video loading indicator -->
            <div class="video-loading-indicator" :class="{ 'hidden': videoLoaded }">
              <div class="loading-spinner"></div>
              <p class="loading-text">Loading video...</p>
            </div>
          </div>

          <!-- Video interaction indicators -->
          <div class="video-indicators">
            <div class="indicator indicator-1" :class="{ 'active': videoPlaying }"></div>
            <div class="indicator indicator-2" :class="{ 'active': videoPlaying }"></div>
            <div class="indicator indicator-3" :class="{ 'active': videoPlaying }"></div>
          </div>
        </div>
        
      </div>
    </div>

    <!-- Section transition effects -->
    <div class="section-transition">
      <div class="transition-wave wave-1"></div>
      <div class="transition-wave wave-2"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useIntersectionObserver, useParallax } from '@vueuse/core';
import { useLang } from '~/composables/useLang';
import { translations } from '~/data/translations';

const { lang } = useLang();
const T = translations;

const sectionTarget = ref(null);
const sectionTargetIsVisible = ref(false);
const videoLoaded = ref(false);
const videoPlaying = ref(false);

useIntersectionObserver(
  sectionTarget,
  ([ { isIntersecting } ]) => {
    if (isIntersecting) {
      sectionTargetIsVisible.value = true;
    }
  },
  { threshold: 0.2 }
);

const videoTarget = ref(null);
const parallax = useParallax(videoTarget);

// Video particle animation
const getVideoParticleStyle = (index) => {
  const delay = Math.random() * 8;
  const duration = 12 + Math.random() * 8;
  const size = 1.5 + Math.random() * 3;
  
  return {
    left: Math.random() * 100 + '%',
    animationDelay: delay + 's',
    animationDuration: duration + 's',
    width: size + 'px',
    height: size + 'px'
  };
};

// Video event handlers
const onVideoPlay = () => {
  videoPlaying.value = true;
  videoLoaded.value = true;
};

const onVideoPause = () => {
  videoPlaying.value = false;
};

onMounted(() => {
  // Simulate video loading
  setTimeout(() => {
    videoLoaded.value = true;
  }, 2000);
});
</script>

<style scoped>
/* Enhanced background with video theme */
.bg-animated-dark {
  background: linear-gradient(-45deg, #0f0f23, #1a1a2e, #16213e, #0f3460, #533483);
  background-size: 400% 400%;
  animation: video-gradient-move 25s ease-in-out infinite;
  position: relative;
}

@keyframes video-gradient-move {
  0%, 100% { background-position: 0% 50%; }
  25% { background-position: 100% 50%; }
  50% { background-position: 100% 100%; }
  75% { background-position: 0% 100%; }
}

/* Video particles */
.video-particles {
  position: absolute;
  width: 100%;
  height: 100%;
}

.video-particle {
  position: absolute;
  background: radial-gradient(circle, rgba(147, 51, 234, 0.8), rgba(59, 130, 246, 0.4));
  border-radius: 50%;
  animation: float-video-particle linear infinite;
  filter: blur(0.3px);
}

@keyframes float-video-particle {
  0% {
    transform: translateY(100vh) rotate(0deg) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
    transform: translateY(90vh) rotate(36deg) scale(1);
  }
  90% {
    opacity: 1;
    transform: translateY(10vh) rotate(324deg) scale(1);
  }
  100% {
    transform: translateY(-10vh) rotate(360deg) scale(0);
    opacity: 0;
  }
}

/* Video geometric shapes */
.video-geometric-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
}

.video-shape {
  position: absolute;
  animation: float-video-shape 20s ease-in-out infinite;
  opacity: 0.1;
}

.video-shape-play {
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-left: 35px solid #9333ea;
  top: 20%;
  left: 15%;
  animation-delay: 0s;
}

.video-shape-pause {
  width: 30px;
  height: 40px;
  position: relative;
  top: 70%;
  right: 20%;
  animation-delay: -7s;
}

.video-shape-pause::before,
.video-shape-pause::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 40px;
  background: #3b82f6;
}

.video-shape-pause::before { left: 0; }
.video-shape-pause::after { right: 0; }

.video-shape-stop {
  width: 35px;
  height: 35px;
  background: #ef4444;
  bottom: 25%;
  left: 25%;
  animation-delay: -14s;
}

.video-shape-circle {
  width: 50px;
  height: 50px;
  border: 4px solid #10b981;
  border-radius: 50%;
  top: 45%;
  right: 30%;
  animation-delay: -3.5s;
}

@keyframes float-video-shape {
  0%, 100% {
    transform: translateY(0px) rotate(0deg) scale(1);
  }
  25% {
    transform: translateY(-25px) rotate(90deg) scale(1.1);
  }
  50% {
    transform: translateY(-50px) rotate(180deg) scale(0.9);
  }
  75% {
    transform: translateY(-25px) rotate(270deg) scale(1.05);
  }
}

/* Enhanced grid overlay */
.video-grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(147, 51, 234, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(147, 51, 234, 0.05) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: video-grid-move 25s linear infinite;
}

@keyframes video-grid-move {
  0% { transform: translate(0, 0); }
  100% { transform: translate(60px, 60px); }
}

/* Light rays effect */
.light-rays {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.ray {
  position: absolute;
  width: 2px;
  height: 100%;
  background: linear-gradient(0deg, transparent, rgba(147, 51, 234, 0.3), transparent);
  animation: ray-move 8s ease-in-out infinite;
}

.ray-1 {
  left: 20%;
  animation-delay: 0s;
  transform: rotate(15deg);
}

.ray-2 {
  left: 50%;
  animation-delay: -2s;
  transform: rotate(-10deg);
}

.ray-3 {
  left: 80%;
  animation-delay: -4s;
  transform: rotate(20deg);
}

@keyframes ray-move {
  0%, 100% {
    opacity: 0;
    transform: scaleY(0) rotate(var(--rotation, 0deg));
  }
  50% {
    opacity: 1;
    transform: scaleY(1) rotate(var(--rotation, 0deg));
  }
}

/* Floating video orbs */
.floating-video-orbs {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.video-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(1px);
  animation: float-video-orb 12s ease-in-out infinite;
}

.video-orb-1 {
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(147, 51, 234, 0.4), rgba(147, 51, 234, 0.1));
  top: 15%;
  left: 10%;
  animation-delay: 0s;
}

.video-orb-2 {
  width: 70px;
  height: 70px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.4), rgba(59, 130, 246, 0.1));
  top: 65%;
  right: 15%;
  animation-delay: -4s;
}

.video-orb-3 {
  width: 85px;
  height: 85px;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.4), rgba(16, 185, 129, 0.1));
  bottom: 25%;
  left: 30%;
  animation-delay: -8s;
}

@keyframes float-video-orb {
  0%, 100% {
    transform: translateY(0px) translateX(0px) scale(1);
    opacity: 0.6;
  }
  33% {
    transform: translateY(-40px) translateX(30px) scale(1.1);
    opacity: 0.8;
  }
  66% {
    transform: translateY(-20px) translateX(-20px) scale(0.9);
    opacity: 0.4;
  }
}

/* Text background glow */
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
  0%, 100% { 
    opacity: 0.3;
    transform: scale(0.9);
  }
  50% { 
    opacity: 0.6;
    transform: scale(1.1);
  }
}

/* Enhanced gradient text */
.enhanced-gradient-text {
  background: linear-gradient(45deg, #9333ea, #3b82f6, #10b981, #f59e0b);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: enhanced-gradient-shift 6s ease-in-out infinite;
  position: relative;
}

.title-wrapper {
  position: relative;
  display: inline-block;
  background: linear-gradient(
    90deg,
    #ffffff 0%,
    #bbbbbb 50%,
    #ffffff 100%
  );
  background-size: 200%;
  background-clip: text;            /* standar */
  -webkit-background-clip: text;    /* prefix untuk Chrome/Safari */
  -webkit-text-fill-color: transparent;
  color: transparent;               /* fallback */
  animation: shine-text 3s linear infinite;
}

/* .title-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  animation: title-shine 3s ease-in-out infinite;
} */


@keyframes title-shine {
  0% { left: -100%; }
  100% { left: 100%; }
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
  0%, 100% { background-position: 0% 50%; }
  25% { background-position: 100% 50%; }
  50% { background-position: 100% 100%; }
  75% { background-position: 0% 100%; }
}

/* Enhanced text */
.enhanced-text {
  position: relative;
}

.enhanced-text::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.1), transparent);
  animation: text-reveal 2s ease-out 0.5s forwards;
  border-radius: 4px;
}

@keyframes text-reveal {
  to { width: 100%; }
}

/* Enhanced quote block */
.enhanced-quote-block {
  position: relative;
  padding: 20px 30px 20px 60px;
  background: rgba(15, 15, 35, 0.6);
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
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.quote-text {
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.6;
  position: relative;
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
  to { width: 100%; }
}

/* Video stats */
.video-stats {
  margin-top: 2rem;
}

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
  background: rgba(15, 15, 35, 0.4);
  border-radius: 8px;
  border: 1px solid rgba(147, 51, 234, 0.2);
  transition: all 0.3s ease;
  animation: stat-appear 0.6s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
}

.stat-item:nth-child(1) { animation-delay: 0.8s; }
.stat-item:nth-child(2) { animation-delay: 1s; }
.stat-item:nth-child(3) { animation-delay: 1.2s; }

.stat-item:hover {
  border-color: rgba(147, 51, 234, 0.5);
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(147, 51, 234, 0.2);
}

@keyframes stat-appear {
  to {
    opacity: 1;
    transform: translateY(0);
  }
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
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-5px); }
  60% { transform: translateY(-3px); }
}

/* Video glow background */
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
  0%, 100% { 
    opacity: 0.3;
    transform: scale(0.8);
  }
  50% { 
    opacity: 0.8;
    transform: scale(1.2);
  }
}

/* Enhanced video container */
.enhanced-video-container {
  position: relative;
  background: linear-gradient(135deg, rgba(15, 15, 35, 0.9), rgba(26, 26, 46, 0.9));
  padding: 20px;
  border-radius: 16px;
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(147, 51, 234, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}

.enhanced-video-container:hover {
  border-color: rgba(147, 51, 234, 0.6);
  box-shadow: 
    0 35px 70px rgba(0, 0, 0, 0.6),
    0 0 30px rgba(147, 51, 234, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

/* Video frame decoration */
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
  opacity: 0;
  animation: corner-appear 1s ease-out 1.5s forwards;
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

@keyframes corner-appear {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Play button overlay */
.play-button-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  opacity: 0;
  transition: all 0.3s ease;
  pointer-events: none;
}

.enhanced-video-container:hover .play-button-overlay {
  opacity: 1;
}

.play-button {
  width: 80px;
  height: 80px;
  background: rgba(147, 51, 234, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  backdrop-filter: blur(10px);
  animation: play-pulse 2s ease-in-out infinite;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

@keyframes play-pulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(147, 51, 234, 0.7);
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 0 0 20px rgba(147, 51, 234, 0);
  }
}

.play-button svg {
  margin-left: 4px;
}

/* Video container */
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.3);
}

.video-container video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
}

.enhanced-video-container:hover .video-container video {
  transform: scale(1.02);
}

/* Video loading indicator */
.video-loading-indicator {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  z-index: 5;
  transition: all 0.3s ease;
}

.video-loading-indicator.hidden {
  opacity: 0;
  pointer-events: none;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(147, 51, 234, 0.3);
  border-radius: 50%;
  border-top-color: #9333ea;
  animation: loading-spin 1s ease-in-out infinite;
  margin-bottom: 1rem;
}

@keyframes loading-spin {
  to { transform: rotate(360deg); }
}

.loading-text {
  font-size: 0.9rem;
  color: #cbd5e1;
}

/* Video indicators */
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
  transition: all 0.3s ease;
  animation: indicator-pulse 2s ease-in-out infinite;
}

.indicator.active {
  background: #9333ea;
  box-shadow: 0 0 15px rgba(147, 51, 234, 0.6);
  transform: scale(1.2);
}

.indicator-1 { animation-delay: 0s; }
.indicator-2 { animation-delay: 0.3s; }
.indicator-3 { animation-delay: 0.6s; }

@keyframes indicator-pulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}

/* Section transition effects */
.section-transition {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  overflow: hidden;
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
  animation-delay: 0s;
  opacity: 0.3;
}

.wave-2 {
  animation-delay: -5s;
  opacity: 0.2;
  width: 250%;
}

@keyframes wave-move {
  0%, 100% {
    transform: translateX(-50%) translateY(0) rotate(0deg);
  }
  25% {
    transform: translateX(-48%) translateY(-10px) rotate(1deg);
  }
  50% {
    transform: translateX(-52%) translateY(-5px) rotate(-1deg);
  }
  75% {
    transform: translateX(-49%) translateY(-8px) rotate(0.5deg);
  }
}

/* Responsive design */
@media (max-width: 1024px) {
  .stats-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.8rem;
  }
  
  .stat-item {
    padding: 0.8rem;
  }
  
  .video-shape {
    opacity: 0.08;
  }
  
  .floating-video-orbs .video-orb {
    opacity: 0.4;
  }
}

@media (max-width: 768px) {
  .enhanced-gradient-text {
    font-size: 2rem;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
  
  .enhanced-video-container {
    padding: 15px;
  }
  
  .play-button {
    width: 60px;
    height: 60px;
  }
  
  .play-button svg {
    width: 24px;
    height: 24px;
  }
  
  .video-particles .video-particle {
    display: none;
  }
  
  .floating-video-orbs .video-orb {
    display: none;
  }
  
  .text-bg-glow {
    display: none;
  }
  
  .video-glow-bg {
    opacity: 0.5;
  }
}

@media (max-width: 480px) {
  .enhanced-gradient-text {
    font-size: 1.8rem;
  }
  
  .enhanced-quote-block {
    padding: 15px 20px 15px 45px;
  }
  
  .quote-icon {
    left: 15px;
    top: 15px;
  }
  
  .enhanced-video-container {
    padding: 10px;
  }
  
  .frame-corner {
    width: 15px;
    height: 15px;
  }
  
  .video-geometric-shapes .video-shape {
    display: none;
  }
  
  .light-rays .ray {
    display: none;
  }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .video-particle,
  .floating-video-orbs,
  .light-rays,
  .video-geometric-shapes {
    display: none;
  }
  
  .enhanced-video-container:hover {
    transform: none;
  }
  
  .play-button {
    animation: none;
  }
  
  .indicator {
    animation: none;
  }
}

/* Dark mode optimizations */
@media (prefers-color-scheme: light) {
  .bg-animated-dark {
    background: linear-gradient(-45deg, #0f0f23, #1a1a2e, #16213e, #0f3460, #533483);
  }
  
  .enhanced-gradient-text {
    -webkit-text-fill-color: transparent;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .enhanced-video-container {
    border-width: 2px;
  }
  
  .enhanced-quote-block {
    border-width: 2px;
  }
  
  .stat-item {
    border-width: 2px;
  }
  
  .indicator.active {
    border: 2px solid #ffffff;
  }
}

/* Performance optimizations */
.enhanced-video-container,
.video-particle,
.video-orb,
.indicator,
.play-button {
  will-change: transform, opacity;
  backface-visibility: hidden;
  perspective: 1000px;
}

.enhanced-gradient-text,
.enhanced-video-container,
.stat-item {
  transform: translateZ(0);
}

/* Focus states for accessibility */
.enhanced-video-container:focus-visible {
  outline: 2px solid #9333ea;
  outline-offset: 2px;
}

.stat-item:focus-visible {
  outline: 2px solid #9333ea;
  outline-offset: 2px;
}

/* Video controls styling */
.video-container video::-webkit-media-controls-panel {
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
}

.video-container video::-webkit-media-controls-play-button,
.video-container video::-webkit-media-controls-volume-slider {
  filter: brightness(1.2) saturate(1.2);
}

/* Loading state enhancements */
.video-loading-indicator .loading-spinner::after {
  content: '';
  position: absolute;
  inset: 8px;
  border: 2px solid transparent;
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: loading-spin 1.5s ease-in-out infinite reverse;
}

/* Hover interactions */
.enhanced-video-container:hover .frame-corner {
  border-color: #3b82f6;
  transform: scale(1.2);
  transition: all 0.3s ease;
}

.enhanced-video-container:hover .video-indicators .indicator {
  transform: scale(1.1);
  opacity: 0.8;
}

/* Text selection styling */
::selection {
  background: rgba(147, 51, 234, 0.3);
  color: white;
}

::-moz-selection {
  background: rgba(147, 51, 234, 0.3);
  color: white;
}

/* Scrollbar styling for webkit browsers */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(15, 15, 35, 0.5);
}

::-webkit-scrollbar-thumb {
  background: rgba(147, 51, 234, 0.6);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(147, 51, 234, 0.8);
}
</style>