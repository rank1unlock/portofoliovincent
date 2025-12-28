<template>
  <section id="skills" ref="target" class="bg-gray-800 py-20 px-4 relative overflow-hidden">
    <!-- Enhanced Background animated elements -->
    <div class="absolute inset-0 pointer-events-none z-0">
      <!-- Existing floating elements with enhanced animations -->
      <div class="skill-float-element bg-blue-500/3 w-80 h-80 rounded-full absolute -top-32 -left-32 animate-skill-float-1"></div>
      <div class="skill-float-element bg-green-500/3 w-64 h-64 rounded-full absolute top-1/4 right-0 animate-skill-float-2"></div>
      <div class="skill-float-element bg-purple-500/3 w-96 h-96 rounded-full absolute -bottom-48 left-1/3 animate-skill-float-3"></div>
      <div class="skill-float-element bg-yellow-500/3 w-56 h-56 rounded-full absolute top-2/3 -right-28 animate-skill-float-4"></div>
      
      <!-- New floating particles -->
      <div class="skill-particles">
        <div class="skill-particle" v-for="i in 30" :key="i" :style="getSkillParticleStyle(i)"></div>
      </div>
      
      <!-- New geometric shapes -->
      <div class="skill-geometric-shapes">
        <div class="skill-shape skill-shape-triangle"></div>
        <div class="skill-shape skill-shape-circle"></div>
        <div class="skill-shape skill-shape-diamond"></div>
        <div class="skill-shape skill-shape-hexagon"></div>
      </div>

      <!-- Enhanced grid overlay -->
      <div class="skill-grid-overlay"></div>
    </div>

    <div class="container mx-auto relative z-10">
      <!-- Enhanced title with more effects -->
      <div class="skill-title-container mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-center animated-gradient-text skill-title-glow skill-title-typing">
          {{ T.skills.title[lang] }}
        </h2>
        <div class="skill-title-underline"></div>
        <div class="skill-title-sparkles">
          <div class="skill-sparkle" v-for="i in 8" :key="i" :style="getSparkleStyle(i)"></div>
        </div>
      </div>
      
      <!-- Enhanced Grid untuk skill teknis dengan progress bar -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div 
          class="bg-gradient-to-br from-gray-900/90 via-gray-850/90 to-gray-800/90 backdrop-blur-sm p-6 rounded-xl shadow-2xl transition-all duration-500 border border-gray-700/50 skill-card-hover skill-card-morph group"
          :class="targetIsVisible ? 'opacity-100 translate-y-0 skill-card-visible' : 'opacity-0 translate-y-10'"
        >
          <h3 class="text-2xl font-semibold text-white mb-6 skill-subtitle-animate skill-subtitle-wave">
            {{ T.skills.frameworks_title[lang] }}
          </h3>
          <div v-for="(skill, index) in skills.frameworks" :key="skill.name" class="mb-5">
            <div class="flex justify-between mb-1 items-center skill-item-animate skill-item-slide" 
                 :style="{ animationDelay: `${index * 0.1}s` }">
              <span class="text-base font-medium text-blue-300 flex items-center gap-2 skill-name-hover skill-name-float">
                <div class="skill-icon-container skill-icon-orbit">
                  <Icon :name="skill.icon" class="w-5 h-5 skill-icon-spin skill-icon-pulse" />
                  <div class="skill-icon-glow"></div>
                </div>
                {{ skill.name }}
                <div class="skill-name-trail"></div>
              </span>
              <span class="text-sm font-medium text-blue-300 skill-percentage skill-percentage-bounce">
                {{ Math.round(animatedNumber * skill.level / 100) }}%
              </span>
            </div>
            <div class="w-full bg-gray-700 rounded-full h-2.5 progress-container skill-progress-container">
              <div class="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out progress-bar skill-progress-glow skill-progress-wave" 
                   :style="{ width: targetIsVisible ? skill.level + '%' : '0%', animationDelay: `${index * 0.2}s` }">
                <div class="progress-shine skill-progress-lightning"></div>
                <div class="skill-progress-particles"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div 
          class="bg-gradient-to-br from-gray-900/90 via-gray-850/90 to-gray-800/90 backdrop-blur-sm p-6 rounded-xl shadow-2xl transition-all duration-500 border border-gray-700/50 skill-card-hover skill-card-morph group"
          :class="targetIsVisible ? 'opacity-100 translate-y-0 skill-card-visible' : 'opacity-0 translate-y-10'"
          :style="{ transitionDelay: '200ms' }"
        >
          <h3 class="text-2xl font-semibold text-white mb-6 skill-subtitle-animate skill-subtitle-wave">
            {{ T.skills.languages_tools_title[lang] }}
          </h3>
          <div v-for="(skill, index) in skills.languagesAndTools" :key="skill.name" class="mb-5">
            <div class="flex justify-between mb-1 items-center skill-item-animate skill-item-slide" 
                 :style="{ animationDelay: `${0.2 + index * 0.1}s` }">
              <span class="text-base font-medium text-green-300 flex items-center gap-2 skill-name-hover skill-name-float">
                <div class="skill-icon-container skill-icon-orbit">
                  <Icon :name="skill.icon" class="w-5 h-5 skill-icon-spin skill-icon-pulse" />
                  <div class="skill-icon-glow"></div>
                </div>
                {{ skill.name }}
                <div class="skill-name-trail"></div>
              </span>
              <span class="text-sm font-medium text-green-300 skill-percentage skill-percentage-bounce">
                {{ Math.round(animatedNumber * skill.level / 100) }}%
              </span>
            </div>
            <div class="w-full bg-gray-700 rounded-full h-2.5 progress-container skill-progress-container">
              <div class="bg-gradient-to-r from-green-500 to-green-600 h-2.5 rounded-full transition-all duration-1000 ease-out progress-bar skill-progress-glow skill-progress-wave" 
                   :style="{ width: targetIsVisible ? skill.level + '%' : '0%', animationDelay: `${0.2 + index * 0.2}s` }">
                <div class="progress-shine skill-progress-lightning"></div>
                <div class="skill-progress-particles"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Enhanced Grid untuk skill lainnya (Enhanced Glass Cards) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          class="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-6 rounded-xl shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:shadow-purple-500/25 border border-gray-700/30 skill-glass-card skill-glass-morph group"
          :class="targetIsVisible ? 'opacity-100 translate-y-0 skill-glass-visible' : 'opacity-0 translate-y-10'"
          :style="{ transitionDelay: '400ms' }"
        >
          <h3 class="text-2xl font-semibold text-white mb-6 border-b-2 border-purple-500/50 pb-3 skill-category-title skill-category-pulse group-hover:border-purple-400/70 transition-colors duration-300">
            {{ T.skills.networking_title[lang] }}
            <div class="skill-category-glow bg-purple-500/20 skill-category-ripple"></div>
          </h3>
          <div class="space-y-4">
            <div v-for="(skill, index) in T.skills.otherSkills.networking" :key="skill.name.id" 
                 class="flex items-center gap-3 text-gray-300 transition-all duration-500 skill-list-item skill-list-float hover:text-white hover:transform hover:translate-x-2"
                 :class="targetIsVisible ? 'opacity-100 translate-x-0 skill-list-visible' : 'opacity-0 -translate-x-5'"
                 :style="{ transitionDelay: `${400 + (index + 1) * 150}ms` }"
            >
                <div class="skill-icon-wrapper skill-icon-magnetic">
                  <Icon :name="skill.icon" class="w-6 h-6 text-purple-400 skill-list-icon skill-list-icon-rotate group-hover:text-purple-300 transition-all duration-300" />
                  <div class="skill-icon-ping bg-purple-400/30 skill-icon-ring"></div>
                  <div class="skill-icon-aurora"></div>
                </div>
                <span class="font-medium skill-text-appear skill-text-typewriter">{{ skill.name[lang] }}</span>
            </div>
          </div>
        </div>

        <div 
          class="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-6 rounded-xl shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:shadow-yellow-500/25 border border-gray-700/30 skill-glass-card skill-glass-morph group"
          :class="targetIsVisible ? 'opacity-100 translate-y-0 skill-glass-visible' : 'opacity-0 translate-y-10'"
          :style="{ transitionDelay: '500ms' }"
        >
          <h3 class="text-2xl font-semibold text-white mb-6 border-b-2 border-yellow-500/50 pb-3 skill-category-title skill-category-pulse group-hover:border-yellow-400/70 transition-colors duration-300">
            {{ T.skills.languages_title[lang] }}
            <div class="skill-category-glow bg-yellow-500/20 skill-category-ripple"></div>
          </h3>
          <div class="space-y-4">
            <div v-for="(skill, index) in T.skills.otherSkills.languages" :key="skill.name.id" 
                 class="flex items-center gap-3 text-gray-300 transition-all duration-500 skill-list-item skill-list-float hover:text-white hover:transform hover:translate-x-2"
                 :class="targetIsVisible ? 'opacity-100 translate-x-0 skill-list-visible' : 'opacity-0 -translate-x-5'"
                 :style="{ transitionDelay: `${500 + (index + 1) * 150}ms` }"
            >
                <div class="skill-icon-wrapper skill-icon-magnetic">
                  <Icon :name="skill.icon" class="w-6 h-6 text-yellow-400 skill-list-icon skill-list-icon-rotate group-hover:text-yellow-300 transition-all duration-300" />
                  <div class="skill-icon-ping bg-yellow-400/30 skill-icon-ring"></div>
                  <div class="skill-icon-aurora"></div>
                </div>
                <span class="font-medium skill-text-appear skill-text-typewriter">{{ skill.name[lang] }}</span>
            </div>
          </div>
        </div>

        <div 
          class="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-6 rounded-xl shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:shadow-red-500/25 border border-gray-700/30 skill-glass-card skill-glass-morph group"
          :class="targetIsVisible ? 'opacity-100 translate-y-0 skill-glass-visible' : 'opacity-0 translate-y-10'"
          :style="{ transitionDelay: '600ms' }"
        >
          <h3 class="text-2xl font-semibold text-white mb-6 border-b-2 border-red-500/50 pb-3 skill-category-title skill-category-pulse group-hover:border-red-400/70 transition-colors duration-300">
            {{ T.skills.soft_skills_title[lang] }}
            <div class="skill-category-glow bg-red-500/20 skill-category-ripple"></div>
          </h3>
          <div class="space-y-4">
            <div v-for="(skill, index) in T.skills.otherSkills.softSkills" :key="skill.name.id" 
                 class="flex items-center gap-3 text-gray-300 transition-all duration-500 skill-list-item skill-list-float hover:text-white hover:transform hover:translate-x-2"
                 :class="targetIsVisible ? 'opacity-100 translate-x-0 skill-list-visible' : 'opacity-0 -translate-x-5'"
                 :style="{ transitionDelay: `${600 + (index + 1) * 150}ms` }"
            >
                <div class="skill-icon-wrapper skill-icon-magnetic">
                  <Icon :name="skill.icon" class="w-6 h-6 text-red-400 skill-list-icon skill-list-icon-rotate group-hover:text-red-300 transition-all duration-300" />
                  <div class="skill-icon-ping bg-red-400/30 skill-icon-ring"></div>
                  <div class="skill-icon-aurora"></div>
                </div>
                <span class="font-medium skill-text-appear skill-text-typewriter">{{ skill.name[lang] }}</span>
            </div>
          </div>
        </div>
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
import { useIntersectionObserver, useTransition } from '@vueuse/core';

// Setup untuk bahasa
const { lang } = useLang();
const T = translations;

// Setup Observer & Number Transition
const target = ref(null);
const targetIsVisible = ref(false);
const numberSource = ref(0);
const animatedNumber = useTransition(numberSource, { duration: 1000 });
useIntersectionObserver(target, ([{ isIntersecting }]) => {
    if (isIntersecting) {
      targetIsVisible.value = true;
      numberSource.value = 100;
    }
  }, { threshold: 0.1 }
);

// Data untuk skill teknis (nama skill biasanya tidak perlu diterjemahkan)
const skills = ref({
  frameworks: [
    { name: 'Nuxt.js', level: 85, icon: 'logos:nuxt-icon' },
    { name: 'Laravel', level: 75, icon: 'logos:laravel' },
    { name: 'CodeIgniter', level: 90, icon: 'logos:codeigniter-icon' },
    { name: 'Django', level: 65, icon: 'logos:django-icon' },
    { name: 'Git', level: 85, icon: 'logos:git-icon' },
    { name: 'GitHub', level: 85, icon: 'logos:github-icon' },
    { name: 'Bootstrap 5', level: 85, icon: 'logos:bootstrap' },
  ],
  languagesAndTools: [
    { name: 'HTML5', level: 98, icon: 'logos:html-5' },
    { name: 'CSS3', level: 95, icon: 'logos:css-3' },
    { name: 'JavaScript', level: 88, icon: 'logos:javascript' },
    { name: 'Vue.js', level: 90, icon: 'logos:vue' },
    { name: 'Node.js', level: 75, icon: 'logos:nodejs-icon' },
    { name: 'PHP', level: 95, icon: 'logos:php' },
    { name: 'Python', level: 70, icon: 'logos:python' },
    { name: 'Java', level: 75, icon: 'logos:java' },
    { name: 'MySQL', level: 90, icon: 'logos:mysql' },
  ],
});

// New functions for enhanced animations
const getSkillParticleStyle = (index) => {
  const delay = Math.random() * 8;
  const duration = 12 + Math.random() * 8;
  const size = 1 + Math.random() * 3;
  
  return {
    left: Math.random() * 100 + '%',
    animationDelay: delay + 's',
    animationDuration: duration + 's',
    width: size + 'px',
    height: size + 'px'
  };
};

const getSparkleStyle = (index) => {
  const angle = (index / 8) * 360;
  const distance = 60 + Math.random() * 30;
  const delay = index * 0.2;
  
  return {
    transform: `rotate(${angle}deg) translateX(${distance}px)`,
    animationDelay: delay + 's'
  };
};
</script>

<style scoped>
/* Z-INDEX FIX - Ensure section doesn't interfere with navigation */
section {
  position: relative;
  z-index: 1;
}

/* Enhanced Background floating animations with more variety */
@keyframes skill-float-1 {
  0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1) skew(0deg); }
  25% { transform: translate(20px, -30px) rotate(2deg) scale(1.05) skew(1deg); }
  50% { transform: translate(-10px, -20px) rotate(-1deg) scale(0.95) skew(-1deg); }
  75% { transform: translate(-20px, 10px) rotate(1deg) scale(1.02) skew(0.5deg); }
}

@keyframes skill-float-2 {
  0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1) skew(0deg); }
  33% { transform: translate(-15px, 25px) rotate(-2deg) scale(1.03) skew(-1deg); }
  66% { transform: translate(15px, -15px) rotate(1deg) scale(0.97) skew(1deg); }
}

@keyframes skill-float-3 {
  0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1) skew(0deg); }
  40% { transform: translate(25px, 20px) rotate(3deg) scale(1.08) skew(1.5deg); }
  80% { transform: translate(-15px, -25px) rotate(-2deg) scale(0.92) skew(-1.5deg); }
}

@keyframes skill-float-4 {
  0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1) skew(0deg); }
  30% { transform: translate(-20px, -15px) rotate(-1deg) scale(1.04) skew(-0.5deg); }
  60% { transform: translate(20px, 25px) rotate(2deg) scale(0.96) skew(0.5deg); }
}

.animate-skill-float-1 { animation: skill-float-1 25s ease-in-out infinite; }
.animate-skill-float-2 { animation: skill-float-2 20s ease-in-out infinite -5s; }
.animate-skill-float-3 { animation: skill-float-3 30s ease-in-out infinite -10s; }
.animate-skill-float-4 { animation: skill-float-4 22s ease-in-out infinite -7s; }

/* New floating particles */
.skill-particles {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.skill-particle {
  position: absolute;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.6), rgba(59, 130, 246, 0.2));
  border-radius: 50%;
  animation: skill-particle-float linear infinite;
}

@keyframes skill-particle-float {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% {
    transform: translateY(-100px) rotate(360deg);
    opacity: 0;
  }
}

/* New geometric shapes */
.skill-geometric-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
}

.skill-shape {
  position: absolute;
  animation: skill-shape-drift 25s ease-in-out infinite;
  opacity: 0.08;
  filter: blur(1px);
}

.skill-shape-triangle {
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 35px solid #3b82f6;
  top: 15%;
  left: 8%;
  animation-delay: 0s;
}

.skill-shape-circle {
  width: 45px;
  height: 45px;
  background: #10b981;
  border-radius: 50%;
  top: 70%;
  right: 12%;
  animation-delay: -8s;
}

.skill-shape-diamond {
  width: 30px;
  height: 30px;
  background: #ef4444;
  transform: rotate(45deg);
  bottom: 20%;
  left: 15%;
  animation-delay: -15s;
}

.skill-shape-hexagon {
  width: 40px;
  height: 23px;
  background: #f59e0b;
  position: relative;
  top: 50%;
  right: 20%;
  animation-delay: -20s;
}

.skill-shape-hexagon:before,
.skill-shape-hexagon:after {
  content: "";
  position: absolute;
  width: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
}

.skill-shape-hexagon:before {
  bottom: 100%;
  border-bottom: 11.5px solid #f59e0b;
}

.skill-shape-hexagon:after {
  top: 100%;
  border-top: 11.5px solid #f59e0b;
}

@keyframes skill-shape-drift {
  0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
  25% { transform: translateY(-25px) rotate(90deg) scale(1.1); }
  50% { transform: translateY(-50px) rotate(180deg) scale(0.9); }
  75% { transform: translateY(-25px) rotate(270deg) scale(1.05); }
}

/* Enhanced grid overlay */
.skill-grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.02) 1px, transparent 1px);
  background-size: 40px 40px;
  animation: skill-grid-drift 25s linear infinite;
}

@keyframes skill-grid-drift {
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(20px, 20px) scale(1.02); }
  100% { transform: translate(40px, 40px) scale(1); }
}

/* Enhanced title effects */
.skill-title-container {
  position: relative;
  text-align: center;
}

.skill-title-glow {
  animation: skill-title-glow 4s ease-in-out infinite;
}

@keyframes skill-title-glow {
  0%, 100% { 
    filter: brightness(1) drop-shadow(0 0 10px rgba(59, 130, 246, 0.3));
    transform: scale(1);
  }
  50% { 
    filter: brightness(1.05) drop-shadow(0 0 20px rgba(59, 130, 246, 0.5));
    transform: scale(1.02);
  }
}

.skill-title-typing {
  overflow: hidden;
  border-right: 3px solid rgba(59, 130, 246, 0.8);
  white-space: nowrap;
  animation: 
    skill-typing 2s steps(20) 1s both,
    skill-blink 1s ease-in-out infinite 3s;
}

@keyframes skill-typing {
  0% { width: 0; }
  100% { width: 100%; }
}

@keyframes skill-blink {
  0%, 50% { border-color: transparent; }
  51%, 100% { border-color: rgba(59, 130, 246, 0.8); }
}

.skill-title-underline {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ef4444, #10b981);
  background-size: 200% 100%;
  animation: 
    skill-underline-expand 1.5s ease-out 2s forwards,
    skill-underline-flow 3s ease-in-out infinite 3.5s;
  border-radius: 2px;
}

@keyframes skill-underline-expand {
  to { width: 80%; }
}

@keyframes skill-underline-flow {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.skill-title-sparkles {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.skill-sparkle {
  position: absolute;
  width: 6px;
  height: 6px;
  background: radial-gradient(circle, #fff, #3b82f6);
  border-radius: 50%;
  opacity: 0;
  animation: skill-sparkle-twinkle 2s ease-in-out infinite;
}

@keyframes skill-sparkle-twinkle {
  0%, 100% { 
    opacity: 0; 
    transform: scale(0) rotate(0deg); 
  }
  50% { 
    opacity: 1; 
    transform: scale(1) rotate(180deg); 
  }
}

/* Enhanced card animations */
.skill-card-morph {
  position: relative;
  overflow: hidden;
}

.skill-card-morph::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(from 0deg, transparent, rgba(59, 130, 246, 0.1), transparent, rgba(139, 92, 246, 0.1), transparent);
  transform: rotate(0deg);
  opacity: 0;
  transition: all 0.5s ease;
  z-index: 0;
}

.skill-card-morph:hover::before {
  opacity: 1;
  animation: skill-card-rotate 3s linear infinite;
}

@keyframes skill-card-rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.skill-card-visible {
  animation: skill-card-materialize 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes skill-card-materialize {
  0% {
    opacity: 0;
    transform: translateY(50px) rotateX(25deg) scale(0.9);
    filter: blur(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotateX(0) scale(1);
    filter: blur(0px);
  }
}

/* Enhanced subtitle animations */
.skill-subtitle-wave {
  position: relative;
  overflow: hidden;
}

.skill-subtitle-wave::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), transparent);
  animation: skill-wave-slide 2s ease-in-out infinite;
}

@keyframes skill-wave-slide {
  0% { left: -100%; }
  50% { left: 100%; }
  100% { left: 100%; }
}

/* Enhanced skill item animations */
.skill-item-slide {
  position: relative;
}

.skill-item-slide::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background: linear-gradient(90deg, #3b82f6, transparent);
  transition: width 0.5s ease;
}

.skill-item-slide:hover::before {
  width: 100%;
}

/* Enhanced name animations */
.skill-name-float {
  position: relative;
  animation: skill-name-gentle-float 4s ease-in-out infinite;
}

@keyframes skill-name-gentle-float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-2px); }
}

.skill-name-trail {
  position: absolute;
  top: 50%;
  right: -10px;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, rgba(59, 130, 246, 0.6), transparent);
  transform: translateY(-50%);
  transition: width 0.3s ease;
}

.skill-name-hover:hover .skill-name-trail {
  width: 20px;
  animation: skill-trail-sparkle 0.5s ease;
}

@keyframes skill-trail-sparkle {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; transform: translateY(-50%) scale(1.2); }
}

/* Enhanced icon animations */
.skill-icon-orbit {
  position: relative;
}

.skill-icon-orbit::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30px;
  height: 30px;
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all 0.3s ease;
}

.skill-name-hover:hover .skill-icon-orbit::before {
  opacity: 1;
  animation: skill-orbit-pulse 1s ease-in-out infinite;
}

@keyframes skill-orbit-pulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); }
  50% { transform: translate(-50%, -50%) scale(1.2); }
}

.skill-icon-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent);
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.3s ease;
}

.skill-name-hover:hover .skill-icon-glow {
  transform: translate(-50%, -50%) scale(2);
  animation: skill-icon-glow-pulse 0.8s ease-out;
}

@keyframes skill-icon-glow-pulse {
  0% { transform: translate(-50%, -50%) scale(0); opacity: 0.8; }
  100% { transform: translate(-50%, -50%) scale(3); opacity: 0; }
}

.skill-icon-pulse {
  animation: skill-icon-heartbeat 2s ease-in-out infinite;
}

@keyframes skill-icon-heartbeat {
  0%, 100% { transform: scale(1); }
  14% { transform: scale(1.1); }
  28% { transform: scale(1); }
  42% { transform: scale(1.1); }
  70% { transform: scale(1); }
}

/* Enhanced percentage animations */
.skill-percentage-bounce {
  animation: skill-percentage-dance 3s ease-in-out infinite;
}

@keyframes skill-percentage-dance {
  0%, 100% { transform: scale(1) rotate(0deg); }
  25% { transform: scale(1.05) rotate(1deg); }
  50% { transform: scale(1.1) rotate(0deg); }
  75% { transform: scale(1.05) rotate(-1deg); }
}

/* Enhanced progress bar effects */
.skill-progress-container {
  position: relative;
  overflow: visible;
}

.skill-progress-container::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3));
  border-radius: 8px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.skill-progress-container:hover::before {
  opacity: 1;
  animation: skill-progress-aura 2s ease-in-out infinite;
}

@keyframes skill-progress-aura {
  0%, 100% { transform: scale(1); filter: blur(2px); }
  50% { transform: scale(1.02); filter: blur(4px); }
}

.skill-progress-wave {
  position: relative;
  overflow: hidden;
}

.skill-progress-wave::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transform: translateX(-100%);
  animation: skill-progress-wave-flow 3s ease-in-out infinite 1s;
}

@keyframes skill-progress-wave-flow {
  0% { transform: translateX(-100%); }
  50% { transform: translateX(100%); }
  100% { transform: translateX(100%); }
}

.skill-progress-lightning {
  position: relative;
}

.skill-progress-lightning::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
  transform: translateX(-100%) skewX(-20deg);
  animation: skill-lightning-strike 2s ease-in-out infinite 2s;
}

@keyframes skill-lightning-strike {
  0% { transform: translateX(-100%) skewX(-20deg); opacity: 0; }
  10% { opacity: 1; }
  20% { transform: translateX(100%) skewX(-20deg); opacity: 1; }
  21% { opacity: 0; }
  100% { transform: translateX(100%) skewX(-20deg); opacity: 0; }
}

.skill-progress-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.skill-progress-particles::before,
.skill-progress-particles::after {
  content: '';
  position: absolute;
  width: 3px;
  height: 3px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  animation: skill-particle-dance 4s ease-in-out infinite;
}

.skill-progress-particles::before {
  top: 20%;
  left: 30%;
  animation-delay: 0s;
}

.skill-progress-particles::after {
  top: 60%;
  left: 70%;
  animation-delay: 2s;
}

@keyframes skill-particle-dance {
  0%, 100% { transform: translate(0, 0) scale(0); opacity: 0; }
  50% { transform: translate(10px, -5px) scale(1); opacity: 1; }
}

/* Enhanced glass card effects */
.skill-glass-morph {
  position: relative;
  backdrop-filter: blur(20px);
}

.skill-glass-morph::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.skill-glass-morph:hover::before {
  opacity: 1;
}

.skill-glass-visible {
  animation: skill-glass-emerge 1s cubic-bezier(0.23, 1, 0.32, 1);
}

@keyframes skill-glass-emerge {
  0% {
    opacity: 0;
    transform: translateY(40px) rotateX(20deg) scale(0.95);
    filter: blur(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotateX(0) scale(1);
    filter: blur(0);
  }
}

/* Enhanced category title effects */
.skill-category-pulse {
  position: relative;
}

.skill-category-ripple {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  transform: scaleX(0);
  transition: transform 0.3s ease;
  transform-origin: left;
}

.skill-glass-card:hover .skill-category-ripple {
  transform: scaleX(1);
  animation: skill-ripple-effect 0.6s ease-out;
}

@keyframes skill-ripple-effect {
  0% { transform: scaleX(0) scaleY(1); }
  50% { transform: scaleX(1) scaleY(1.2); }
  100% { transform: scaleX(1) scaleY(1); }
}

/* Enhanced list item effects */
.skill-list-float {
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}

.skill-list-visible {
  animation: skill-list-slide-in 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

@keyframes skill-list-slide-in {
  0% {
    opacity: 0;
    transform: translateX(-30px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

/* Enhanced icon wrapper effects */
.skill-icon-magnetic {
  position: relative;
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}

.skill-list-item:hover .skill-icon-magnetic {
  transform: scale(1.2) rotate(5deg);
}

.skill-list-icon-rotate {
  transition: all 0.3s ease;
}

.skill-list-item:hover .skill-list-icon-rotate {
  transform: rotate(360deg) scale(1.1);
}

.skill-icon-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120%;
  height: 120%;
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.4s ease;
}

.skill-list-item:hover .skill-icon-ring {
  transform: translate(-50%, -50%) scale(1);
  animation: skill-ring-expand 1s ease-out;
}

@keyframes skill-ring-expand {
  0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
  100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
}

.skill-icon-aurora {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: conic-gradient(from 0deg, transparent, rgba(59, 130, 246, 0.3), transparent, rgba(139, 92, 246, 0.3), transparent);
  border-radius: 50%;
  opacity: 0;
  animation: skill-aurora-spin 3s linear infinite;
  transition: opacity 0.3s ease;
}

.skill-list-item:hover .skill-icon-aurora {
  opacity: 1;
}

@keyframes skill-aurora-spin {
  0% { transform: rotate(0deg) scale(0.8); }
  100% { transform: rotate(360deg) scale(0.8); }
}

/* Enhanced text effects */
.skill-text-typewriter {
  position: relative;
  overflow: hidden;
}

.skill-text-typewriter::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 2px;
  height: 100%;
  background: rgba(59, 130, 246, 0.8);
  opacity: 0;
  animation: skill-text-cursor 1s ease-in-out infinite;
  transition: opacity 0.3s ease;
}

.skill-list-item:hover .skill-text-typewriter::after {
  opacity: 1;
}

@keyframes skill-text-cursor {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Card hover effects */
.skill-card-hover {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.skill-card-hover:hover {
  transform: translateY(-8px) scale(1.02) rotateX(5deg);
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.25), 
    0 0 30px rgba(59, 130, 246, 0.1),
    0 0 60px rgba(59, 130, 246, 0.05);
}

/* Glass card effects */
.skill-glass-card {
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.skill-glass-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s ease;
  z-index: 1;
}

.skill-glass-card:hover::before {
  left: 100%;
}

.skill-glass-card:hover {
  transform: translateY(-12px) scale(1.02);
  backdrop-filter: blur(25px);
}

/* Subtitle animations */
.skill-subtitle-animate {
  animation: skill-slide-in 0.8s ease-out 0.3s both;
}

@keyframes skill-slide-in {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Skill item animations */
.skill-item-animate {
  animation: skill-fade-in 0.6s ease-out both;
}

@keyframes skill-fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Icon animations */
.skill-icon-container {
  position: relative;
  display: inline-block;
}

.skill-icon-spin {
  transition: transform 0.3s ease;
}

.skill-name-hover:hover .skill-icon-spin {
  transform: rotate(360deg) scale(1.1);
}

/* Progress bar enhancements */
.progress-container {
  position: relative;
  overflow: hidden;
}

.progress-bar {
  position: relative;
  overflow: hidden;
}

.progress-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  animation: progress-shine 2s ease-in-out infinite 1s;
}

@keyframes progress-shine {
  0% { left: -100%; }
  100% { left: 100%; }
}

.skill-progress-glow {
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
}

/* Percentage counter animation */
.skill-percentage {
  animation: skill-counter-pop 0.5s ease-out;
}

@keyframes skill-counter-pop {
  0% { transform: scale(0.8); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

/* Category title effects */
.skill-category-title {
  position: relative;
  overflow: hidden;
}

.skill-category-glow {
  position: absolute;
  bottom: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  transition: left 0.5s ease;
}

.skill-glass-card:hover .skill-category-glow {
  left: 0;
}

/* Icon wrapper for list items */
.skill-icon-wrapper {
  position: relative;
  display: inline-block;
}

.skill-list-icon {
  transition: all 0.3s ease;
  z-index: 2;
}

.skill-icon-ping {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: skill-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
  opacity: 0;
}

@keyframes skill-ping {
  75%, 100% {
    transform: translate(-50%, -50%) scale(2);
    opacity: 0;
  }
}

.skill-list-item:hover .skill-icon-ping {
  opacity: 1;
}

/* List item hover effects */
.skill-list-item {
  position: relative;
  padding: 8px;
  margin: -8px;
  border-radius: 8px;
  cursor: default;
}

.skill-list-item:hover {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
}

/* Text appear animation */
.skill-text-appear {
  position: relative;
  overflow: hidden;
}

.skill-text-appear::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.skill-list-item:hover .skill-text-appear::after {
  left: 100%;
}

/* Performance optimizations */
.skill-card-hover,
.skill-glass-card,
.progress-bar,
.skill-icon-spin {
  will-change: transform;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .skill-float-element,
  .skill-particle,
  .skill-shape {
    opacity: 0.5;
    animation-duration: 15s;
  }
  
  .skill-card-hover:hover {
    transform: translateY(-4px) scale(1.01);
  }
  
  .skill-glass-card:hover {
    transform: translateY(-6px) scale(1.01);
  }
  
  .skill-title-typing {
    white-space: normal;
    border-right: none;
    animation: none;
  }
}

@media (max-width: 480px) {
  .skill-particles,
  .skill-geometric-shapes {
    display: none;
  }
  
  .skill-sparkle {
    display: none;
  }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  .skill-float-element,
  .skill-particle,
  .skill-shape,
  .skill-title-glow,
  .progress-shine,
  .skill-icon-ping,
  .skill-sparkle {
    animation: none;
  }
  
  .skill-icon-spin,
  .skill-list-icon-rotate {
    transition: none;
  }
  
  .skill-title-typing {
    animation: none;
    border-right: none;
  }
}
</style>