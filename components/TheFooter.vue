<template>
  <footer ref="target" class="bg-gray-900 border-t border-gray-800 pt-16 pb-6 relative transition-opacity duration-1000"
          :class="targetIsVisible ? 'opacity-100' : 'opacity-0'"
          style="z-index: 10;">
    
    <div class="absolute inset-0 pointer-events-none overflow-hidden" style="z-index: 1;">
      <div class="footer-float-element bg-blue-500/3 w-72 h-72 rounded-full absolute -top-32 -left-32 animate-footer-float-1"></div>
      <div class="footer-float-element bg-purple-500/3 w-96 h-96 rounded-full absolute -bottom-48 -right-48 animate-footer-float-2"></div>
      <div class="footer-float-element bg-cyan-500/3 w-48 h-48 rounded-full absolute top-1/2 left-1/4 animate-footer-float-3"></div>
    </div>

    <div class="absolute -top-6 left-1/2 -translate-x-1/2" style="z-index: 50;">
      <button 
        @click="scrollToTop"
        aria-label="Scroll to top"
        class="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:scale-110 scroll-to-top-btn group relative overflow-hidden"
      >
        <Icon name="mdi:arrow-up" class="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:-translate-y-1" />
        <div class="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
        <div class="absolute inset-0 rounded-full bg-blue-400/30 scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
      </button>
    </div>

    <div class="container mx-auto text-center text-gray-400 relative" style="z-index: 20;">
      
      <h3 class="text-2xl font-bold text-white mb-4 footer-title-animate">
        <span class="inline-block footer-name-glow">Vincent Axel Alexander</span>
      </h3>

      <div class="flex justify-center flex-wrap gap-x-8 gap-y-2 mb-8 text-gray-300">
        <NuxtLink 
          :to="{ path: '/', hash: '#hero' }" 
          class="nav-link footer-nav-item"
          :style="{ animationDelay: '0.1s' }"
        >{{ T.navbar.home[lang] }}</NuxtLink>
        <NuxtLink 
          :to="{ path: '/', hash: '#about' }" 
          class="nav-link footer-nav-item"
          :style="{ animationDelay: '0.2s' }"
        >{{ T.navbar.about[lang] }}</NuxtLink>
        <NuxtLink 
          :to="{ path: '/', hash: '#gallery' }" 
          class="nav-link footer-nav-item"
          :style="{ animationDelay: '0.3s' }"
        >{{ T.navbar.gallery[lang] }}</NuxtLink>
        <NuxtLink 
          :to="{ path: '/', hash: '#projects' }" 
          class="nav-link footer-nav-item"
          :style="{ animationDelay: '0.4s' }"
        >{{ T.navbar.projects[lang] }}</NuxtLink>
        <NuxtLink 
          :to="{ path: '/', hash: '#skills' }" 
          class="nav-link footer-nav-item"
          :style="{ animationDelay: '0.5s' }"
        >{{ T.navbar.skills[lang] }}</NuxtLink>
        <NuxtLink 
          :to="{ path: '/', hash: '#testimonials' }" 
          class="nav-link footer-nav-item"
          :style="{ animationDelay: '0.6s' }"
        >{{ T.navbar.testimonials[lang] }}</NuxtLink>
        <NuxtLink 
          :to="{ path: '/', hash: '#contact' }" 
          class="nav-link footer-nav-item"
          :style="{ animationDelay: '0.7s' }"
        >{{ T.navbar.contact[lang] }}</NuxtLink>
      </div>

      <div class="flex justify-center space-x-6 mb-6 social-links-container">
        <a href="https://www.linkedin.com/in/vincent-axel-20b7b1235/" 
           aria-label="LinkedIn" 
           class="social-link text-gray-400 hover:text-blue-500 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 group relative"
           style="animation-delay: 0.8s">
          <Icon name="mdi:linkedin" class="w-7 h-7 relative z-10" />
          <div class="social-glow bg-blue-500/20"></div>
        </a>
        <a href="https://github.com/rank1unlock" 
           aria-label="GitHub" 
           class="social-link text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 group relative"
           style="animation-delay: 0.9s">
          <Icon name="mdi:github" class="w-7 h-7 relative z-10" />
          <div class="social-glow bg-white/20"></div>
        </a>
        <a href="https://www.instagram.com/vincentaxelalexandergs/?next=%2F" 
           aria-label="Instagram" 
           class="social-link text-gray-400 hover:text-pink-500 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 group relative"
           style="animation-delay: 1s">
          <Icon name="mdi:instagram" class="w-7 h-7 relative z-10" />
          <div class="social-glow bg-pink-500/20"></div>
        </a>
        <a href="https://wa.me/6281252850845" 
           aria-label="WhatsApp" 
           class="social-link text-gray-400 hover:text-green-500 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 group relative"
           style="animation-delay: 1.1s">
          <Icon name="mdi:whatsapp" class="w-7 h-7 relative z-10" />
          <div class="social-glow bg-green-500/20"></div>
        </a>
      </div>
      
      <div class="footer-text-animate">
        <p class="text-sm mb-2 footer-copyright">
          © {{ new Date().getFullYear() }} Vincent Axel Alexander. {{ T.footer.rights_reserved[lang] }}.
        </p>
        <p class="text-xs text-gray-500 footer-tech-stack">
          {{ T.footer.built_with[lang] }} 
          <span class="text-green-400 font-semibold tech-highlight">Nuxt.js</span> & 
          <span class="text-blue-400 font-semibold tech-highlight">Tailwind CSS</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';
import { useLang } from '~/composables/useLang';
import { translations } from '~/data/translations';

const { lang } = useLang();
const T = translations;

const target = ref(null);
const targetIsVisible = ref(false);
useIntersectionObserver(target, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    targetIsVisible.value = true;
  }
});

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
</script>

<style lang="postcss" scoped>
/* Z-INDEX HIERARCHY FIX */
footer {
  position: relative;
  z-index: 10 !important;
  /* Pastikan tidak ada overflow: hidden di sini secara CSS juga */
}

/* Scroll to top button - Highest priority */
.scroll-to-top-btn {
  position: relative;
  z-index: 50 !important;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
  animation: scroll-btn-pulse 3s ease-in-out infinite;
}

@keyframes scroll-btn-pulse {
  0%, 100% { 
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
  }
  50% { 
    box-shadow: 0 6px 25px rgba(59, 130, 246, 0.5);
  }
}

/* Background floating animations */
@keyframes footer-float-1 {
  0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
  25% { transform: translate(15px, -25px) rotate(1deg) scale(1.02); }
  50% { transform: translate(-10px, -15px) rotate(-0.5deg) scale(0.98); }
  75% { transform: translate(-15px, 10px) rotate(0.8deg) scale(1.01); }
}

@keyframes footer-float-2 {
  0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
  30% { transform: translate(-20px, 15px) rotate(-1.5deg) scale(1.03); }
  60% { transform: translate(20px, -20px) rotate(1deg) scale(0.97); }
}

@keyframes footer-float-3 {
  0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
  40% { transform: translate(18px, 22px) rotate(2deg) scale(1.05); }
  80% { transform: translate(-12px, -18px) rotate(-1deg) scale(0.95); }
}

.animate-footer-float-1 { animation: footer-float-1 28s ease-in-out infinite; }
.animate-footer-float-2 { animation: footer-float-2 24s ease-in-out infinite -8s; }
.animate-footer-float-3 { animation: footer-float-3 32s ease-in-out infinite -15s; }

/* Title animations */
.footer-title-animate {
  animation: footer-fade-in-up 0.8s ease-out 0.2s both;
}

.footer-name-glow {
  animation: footer-name-glow 4s ease-in-out infinite;
}

@keyframes footer-name-glow {
  0%, 100% { 
    filter: brightness(1) drop-shadow(0 0 5px rgba(59, 130, 246, 0.2));
  }
  50% { 
    filter: brightness(1.05) drop-shadow(0 0 12px rgba(59, 130, 246, 0.4));
  }
}

@keyframes footer-fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Navigation links */
.nav-link {
  @apply relative hover:text-blue-400 transition-all duration-300 
         after:content-[''] after:absolute after:left-0 after:bottom-0 
         after:h-[2px] after:w-full after:bg-gradient-to-r after:from-blue-400 after:to-purple-400
         after:scale-x-0 hover:after:scale-x-100 
         after:transition-transform after:duration-300 after:origin-center;
  
  position: relative;
  padding: 8px 12px;
  border-radius: 6px;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
  transition: left 0.5s ease;
}

.nav-link:hover::before {
  left: 100%;
}

.footer-nav-item {
  opacity: 0;
  animation: footer-nav-slide-in 0.6s ease-out both;
}

@keyframes footer-nav-slide-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Social links */
.social-links-container {
  animation: footer-fade-in-up 0.8s ease-out 0.6s both;
}

.social-link {
  position: relative;
  padding: 12px;
  border-radius: 50%;
  overflow: hidden;
  opacity: 0;
  animation: footer-social-appear 0.6s ease-out both;
}

@keyframes footer-social-appear {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.8);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.social-glow {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  scale: 0;
  transition: scale 0.3s ease;
}

.social-link:hover .social-glow {
  scale: 1;
}

.social-link:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

/* Footer text animations */
.footer-text-animate {
  animation: footer-fade-in-up 0.8s ease-out 1s both;
}

.footer-copyright {
  position: relative;
  overflow: hidden;
}

.footer-copyright::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  animation: footer-text-shine 3s ease-in-out infinite 2s;
}

@keyframes footer-text-shine {
  0% { left: -100%; }
  100% { left: 100%; }
}

.tech-highlight {
  position: relative;
  transition: all 0.3s ease;
}

.tech-highlight:hover {
  transform: scale(1.05);
  filter: brightness(1.2);
}

.footer-tech-stack {
  opacity: 0.8;
  animation: footer-tech-glow 2s ease-in-out infinite 3s;
}

@keyframes footer-tech-glow {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; }
}

/* Responsive design */
@media (max-width: 768px) {
  .footer-float-element {
    display: none;
  }
  
  .scroll-to-top-btn {
    width: 10px;
    height: 10px;
  }
  
  .social-link:hover {
    transform: scale(1.1) translateY(-2px);
  }
  
  .nav-link {
    padding: 6px 8px;
  }
}

/* Performance optimizations */
.scroll-to-top-btn,
.social-link,
.nav-link {
  will-change: transform;
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .footer-float-element,
  .footer-name-glow,
  .scroll-btn-pulse,
  .footer-text-shine,
  .footer-tech-glow {
    animation: none;
  }
  
  .scroll-to-top-btn,
  .social-link,
  .nav-link {
    transition-duration: 0.1s;
  }
}

/* Enhanced hover states */
.scroll-to-top-btn:active {
  transform: translateY(-1px) scale(0.95);
}

.social-link:active {
  transform: scale(0.95);
}

/* Focus states for accessibility */
.scroll-to-top-btn:focus,
.social-link:focus,
.nav-link:focus {
  outline: 2px solid rgba(59, 130, 246, 0.5);
  outline-offset: 2px;
}
</style>