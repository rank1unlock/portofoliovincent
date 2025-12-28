<template>
  <section id="hero" class="min-h-screen flex items-center justify-center bg-animated-gradient text-white overflow-hidden relative">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Enhanced floating particles with 3D effect -->
      <div class="floating-particles">
        <div class="particle" v-for="i in 60" :key="i" :style="getParticleStyle(i)"></div>
      </div>
      
      <!-- Geometric shapes with better animations -->
      <div class="geometric-shapes">
        <div class="shape shape-triangle"></div>
        <div class="shape shape-circle"></div>
        <div class="shape shape-square"></div>
        <div class="shape shape-hexagon"></div>
        <div class="shape shape-pentagon"></div>
      </div>

      <!-- Enhanced grid overlay with perspective -->
      <div class="grid-overlay"></div>
      
      <!-- Spotlight effect following cursor -->
      <div class="spotlight" ref="spotlight"></div>
    </div>

    <!-- Main content -->
    <div ref="target" class="w-full h-full transition-all duration-300 ease-out relative z-10">
      <!-- Enhanced floating orbs with glow -->
      <div class="floating-orbs">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="orb orb-3"></div>
        <div class="orb orb-4"></div>
      </div>

      <div 
        class="content-wrapper text-center p-8 pt-32 sm:pt-40 transition-all duration-300 ease-out" 
        :style="{ transform: `perspective(1000px) rotateX(${parallax.roll * 5}deg) rotateY(${parallax.tilt * 5}deg)` }"
      >
        <!-- Professional badge -->
        <div class="badge-container">
          <div class="professional-badge">
            <div class="badge-icon">
              <Icon name="mdi:code-tags" class="w-5 h-5" />
            </div>
            <span class="badge-text">{{ T.hero.badge?.[lang] || "Available for Projects" }}</span>
            <div class="badge-pulse"></div>
          </div>
        </div>

        <!-- Enhanced name with better gradient and animation -->
        <div class="name-container mb-8">
          <h1 class="main-title text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
            Vincent Axel Alexander
          </h1>
          
          <!-- Multiple decorative underlines -->
          <div class="title-decorations">
            <div class="title-underline underline-1"></div>
            <div class="title-underline underline-2"></div>
            <div class="title-underline underline-3"></div>
          </div>
        </div>

        <!-- Enhanced role text with better typewriter effect -->
        <div class="role-container mb-8">
          <div class="typewriter-wrapper">
            <div class="typewriter-content">
              <span class="role-prefix">{{ T.hero.role_prefix?.[lang] || "I'm a" }}</span>
              <div class="typewriter-box">
                <span class="typewriter-text" ref="typewriterRef"></span>
                <span class="cursor"></span>
              </div>
            </div>
            <div class="role-glow"></div>
          </div>
        </div>

        <!-- Enhanced slogan with better animation -->
        <div class="slogan-wrapper mb-12">
          <p class="slogan-text text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4" ref="sloganRef">
            {{ T.hero.slogan[lang] }}
          </p>
          <div class="slogan-decoration"></div>
        </div>

        <!-- Enhanced CTA buttons with modern design -->
        <div class="buttons-container flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
          <a 
            href="https://drive.google.com/file/d/1GwNVAClungOGqt-5qXvx9ds8yubuaL-l/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="enhanced-button primary-button group"
            @mouseenter="createRipple"
          >
            <span class="button-bg"></span>
            <span class="button-content">
              <Icon name="mdi:download" class="w-5 h-5 transition-transform group-hover:scale-110 group-hover:rotate-12" />
              <span class="button-text">{{ T.hero.download_cv[lang] }}</span>
            </span>
            <span class="button-shine"></span>
          </a>
          
          <a 
            href="https://www.cake.me/vincent-axel"
            target="_blank" 
            rel="noopener noreferrer" 
            class="enhanced-button secondary-button group"
            @mouseenter="createRipple"
          >
            <span class="button-bg"></span>
            <span class="button-content">
              <Icon name="mdi:eye" class="w-5 h-5 transition-transform group-hover:scale-110" />
              <span class="button-text">{{ T.hero.see_resume[lang] }}</span>
            </span>
            <span class="button-shine"></span>
          </a>
        </div>

        <!-- Social proof indicators -->
        <div class="social-proof">
          <div class="proof-item">
            <div class="proof-number">2+</div>
            <div class="proof-label">{{ T.hero.years_exp?.[lang] || "Years Experience" }}</div>
          </div>
          <div class="proof-divider"></div>
          <div class="proof-item">
            <div class="proof-number">5+</div>
            <div class="proof-label">{{ T.hero.projects?.[lang] || "Projects Completed" }}</div>
          </div>
          <div class="proof-divider"></div>
          <div class="proof-item">
            <div class="proof-number">6+</div>
            <div class="proof-label">{{ T.hero.clients?.[lang] || "Happy Clients" }}</div>
          </div>
        </div>
      </div>

    <!-- Corner decorations -->
      <div class="corner-decorations">
          <div class="corner corner-tl"></div>
          <div class="corner corner-tr"></div>
          <div class="corner corner-bl"></div>
          <div class="corner corner-br"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useParallax } from '@vueuse/core';
import { useLang } from '~/composables/useLang';
import { translations } from '~/data/translations';

const { lang } = useLang();
const T = translations;

const target = ref(null);
const parallax = useParallax(target);
const spotlight = ref(null);

const isScrolled = ref(false);
const typewriterRef = ref(null);
const sloganRef = ref(null);

const roles = computed(() => T.value.hero.roles[lang.value] || [
  'Full Stack Developer',
  'Software Engineer', 
  'Web Developer',
  'Database Engineer'
]);

const getParticleStyle = (index) => {
  const delay = Math.random() * 8;
  const duration = 12 + Math.random() * 15;
  const size = 1 + Math.random() * 3;
  const hue = Math.random() * 60 + 200;
  
  return {
    left: Math.random() * 100 + '%',
    animationDelay: delay + 's',
    animationDuration: duration + 's',
    width: size + 'px',
    height: size + 'px',
    background: `hsl(${hue}, 70%, 60%)`,
    boxShadow: `0 0 ${size * 2}px hsl(${hue}, 70%, 60%)`
  };
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 100;
};

const handleMouseMove = (e) => {
  if (!spotlight.value) return;
  
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  
  spotlight.value.style.background = `radial-gradient(circle 600px at ${x}% ${y}%, rgba(59, 130, 246, 0.08), transparent)`;
};

const createRipple = (e) => {
  const button = e.currentTarget;
  const ripple = document.createElement('span');
  ripple.classList.add('button-ripple-effect');
  
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;
  
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  
  button.appendChild(ripple);
  
  setTimeout(() => ripple.remove(), 600);
};

const startTypewriter = () => {
  if (!typewriterRef.value) return;
  
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  const typeSpeed = 80;
  const deleteSpeed = 40;
  const pauseTime = 2500;

  const type = () => {
    const currentRole = roles.value[roleIndex];
    
    if (isDeleting) {
      typewriterRef.value.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      
      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.value.length;
        setTimeout(type, 500);
        return;
      }
      
      setTimeout(type, deleteSpeed);
    } else {
      typewriterRef.value.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      
      if (charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(type, pauseTime);
        return;
      }
      
      setTimeout(type, typeSpeed);
    }
  };

  type();
};

const animateSlogan = () => {
  if (!sloganRef.value) return;
  
  const text = sloganRef.value.textContent;
  sloganRef.value.innerHTML = '';
  
  [...text].forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.className = 'slogan-char';
    span.style.animationDelay = `${index * 0.03}s`;
    sloganRef.value.appendChild(span);
  });
};

onMounted(() => {
  setTimeout(() => {
    startTypewriter();
    animateSlogan();
  }, 800);
  
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('mousemove', handleMouseMove);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('mousemove', handleMouseMove);
});
</script>

<style scoped>
/* Enhanced animated gradient background */
.bg-animated-gradient {
  background: linear-gradient(-45deg, #0a0f1e, #0f172a, #1e1b4b, #312e81, #1e293b);
  background-size: 400% 400%;
  animation: move-gradient 25s ease-in-out infinite;
  position: relative;
}

@keyframes move-gradient {
  0%, 100% { background-position: 0% 50%; }
  25% { background-position: 100% 50%; }
  50% { background-position: 100% 100%; }
  75% { background-position: 0% 100%; }
}

/* Spotlight effect */
.spotlight {
  position: absolute;
  inset: 0;
  pointer-events: none;
  transition: background 0.3s ease;
  z-index: 2;
}

/* Enhanced particles */
.floating-particles {
  position: absolute;
  width: 100%;
  height: 100%;
}

.particle {
  position: absolute;
  border-radius: 50%;
  animation: float-particle linear infinite;
  filter: blur(1px);
  opacity: 0.6;
}

@keyframes float-particle {
  0% {
    transform: translateY(100vh) rotate(0deg) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 0.6;
    transform: translateY(90vh) rotate(45deg) scale(1);
  }
  90% {
    opacity: 0.6;
    transform: translateY(10vh) rotate(315deg) scale(1);
  }
  100% {
    transform: translateY(-10vh) rotate(360deg) scale(0);
    opacity: 0;
  }
}

/* Enhanced geometric shapes */
.geometric-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  animation: float-shape 25s ease-in-out infinite;
  opacity: 0.12;
  filter: blur(1px);
}

.shape-triangle {
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 60px solid #3b82f6;
  top: 15%;
  left: 8%;
}

.shape-circle {
  width: 80px;
  height: 80px;
  background: #8b5cf6;
  border-radius: 50%;
  top: 55%;
  right: 12%;
  animation-delay: -6s;
}

.shape-square {
  width: 50px;
  height: 50px;
  background: #ef4444;
  transform: rotate(45deg);
  bottom: 25%;
  left: 15%;
  animation-delay: -12s;
}

.shape-hexagon {
  width: 60px;
  height: 34.64px;
  background: #10b981;
  top: 35%;
  right: 20%;
  animation-delay: -18s;
}

.shape-pentagon {
  width: 54px;
  height: 51.42px;
  background: #f59e0b;
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  top: 70%;
  left: 75%;
  animation-delay: -3s;
}

@keyframes float-shape {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  25% {
    transform: translate(30px, -40px) rotate(90deg) scale(1.1);
  }
  50% {
    transform: translate(-20px, -80px) rotate(180deg) scale(0.9);
  }
  75% {
    transform: translate(-40px, -40px) rotate(270deg) scale(1.05);
  }
}

/* Enhanced grid with perspective */
.grid-overlay {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.04) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: grid-move 30s linear infinite;
  transform: perspective(500px) rotateX(60deg);
  transform-origin: center center;
}

@keyframes grid-move {
  0% { background-position: 0 0; }
  100% { background-position: 60px 60px; }
}

/* Enhanced floating orbs */
.floating-orbs {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  animation: float-orb 12s ease-in-out infinite;
  mix-blend-mode: screen;
}

.orb-1 {
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.4), transparent);
  top: 15%;
  left: 10%;
}

.orb-2 {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent);
  top: 55%;
  right: 15%;
  animation-delay: -4s;
}

.orb-3 {
  width: 120px;
  height: 120px;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.3), transparent);
  bottom: 25%;
  left: 20%;
  animation-delay: -8s;
}

.orb-4 {
  width: 180px;
  height: 180px;
  background: radial-gradient(circle, rgba(245, 158, 11, 0.25), transparent);
  top: 40%;
  left: 50%;
  animation-delay: -2s;
}

@keyframes float-orb {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(50px, -60px) scale(1.15);
  }
  66% {
    transform: translate(-30px, -40px) scale(0.9);
  }
}

/* Content wrapper */
.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

/* Professional badge */
.badge-container {
  margin-bottom: 2rem;
  animation: badge-appear 1s ease-out 0.3s both;
}

@keyframes badge-appear {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.professional-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 50px;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(59, 130, 246, 0.15);
}

.badge-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border-radius: 50%;
  animation: badge-icon-spin 10s linear infinite;
}

@keyframes badge-icon-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.badge-text {
  font-size: 0.875rem;
  font-weight: 600;
  color: #93c5fd;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.badge-pulse {
  position: absolute;
  inset: -2px;
  border-radius: 50px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  opacity: 0;
  animation: badge-pulse 3s ease-in-out infinite;
  z-index: -1;
}

@keyframes badge-pulse {
  0%, 100% {
    opacity: 0;
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(1.05);
  }
}

/* Enhanced name section */
.name-container {
  position: relative;
  margin-bottom: 2rem;
  animation: name-appear 1s ease-out 0.6s both;
}

@keyframes name-appear {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.main-title {
  background: linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6, #34d399);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-flow 8s ease-in-out infinite;
  position: relative;
  line-height: 1.1;
  text-shadow: 0 0 80px rgba(59, 130, 246, 0.3);
}

@keyframes gradient-flow {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Multiple decorative underlines */
.title-decorations {
  position: relative;
  height: 8px;
  margin-top: 1rem;
}

.title-underline {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 2px;
  border-radius: 2px;
  animation: underline-expand 2s ease-out forwards;
}

.underline-1 {
  width: 0;
  background: linear-gradient(90deg, transparent, #3b82f6, transparent);
  top: 0;
  animation-delay: 1s;
}

.underline-2 {
  width: 0;
  background: linear-gradient(90deg, transparent, #8b5cf6, transparent);
  top: 4px;
  animation-delay: 1.3s;
}

.underline-3 {
  width: 0;
  background: linear-gradient(90deg, transparent, #10b981, transparent);
  top: 8px;
  animation-delay: 1.6s;
}

@keyframes underline-expand {
  to { width: min(600px, 90%); }
}

/* Enhanced role/typewriter section */
.role-container {
  min-height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: role-appear 1s ease-out 1s both;
}

@keyframes role-appear {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.typewriter-wrapper {
  position: relative;
}

.typewriter-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  position: relative;
  z-index: 2;
}

.role-prefix {
  font-size: 1.125rem;
  color: #9ca3af;
  font-weight: 500;
}

.typewriter-box {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 1rem;
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  min-width: 280px;
  justify-content: center;
}

.typewriter-text {
  font-size: 1.25rem;
  color: #60a5fa;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.cursor {
  width: 3px;
  height: 1.5rem;
  background: linear-gradient(180deg, #3b82f6, #8b5cf6);
  display: inline-block;
  animation: blink 1s ease-in-out infinite;
  border-radius: 2px;
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
}

@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

.role-glow {
  position: absolute;
  inset: -20px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.15), transparent);
  filter: blur(30px);
  animation: glow-pulse 3s ease-in-out infinite;
  z-index: 1;
}

@keyframes glow-pulse {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
}

/* Enhanced slogan */
.slogan-wrapper {
  position: relative;
  animation: slogan-appear 1s ease-out 1.4s both;
}

@keyframes slogan-appear {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slogan-text {
  position: relative;
  line-height: 1.8;
  font-style: italic;
}

.slogan-char {
  display: inline-block;
  opacity: 0;
  animation: slogan-char-appear 0.6s ease-out forwards;
  transition: all 0.2s ease;
}

.slogan-char:hover {
  color: #60a5fa;
  transform: translateY(-3px) scale(1.1);
  text-shadow: 0 0 15px rgba(96, 165, 250, 0.6);
}

@keyframes slogan-char-appear {
  from {
    opacity: 0;
    transform: translateY(20px) rotateX(-90deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotateX(0);
  }
}

.slogan-decoration {
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #3b82f6, transparent);
  border-radius: 2px;
  animation: decoration-pulse 3s ease-in-out infinite;
}

@keyframes decoration-pulse {
  0%, 100% { opacity: 0.3; width: 100px; }
  50% { opacity: 0.8; width: 150px; }
}

/* Enhanced buttons */
.buttons-container {
  animation: buttons-appear 1s ease-out 1.8s both;
  position: relative;
}

@keyframes buttons-appear {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.enhanced-button {
  position: relative;
  padding: 1rem 2rem;
  border-radius: 16px;
  font-weight: 700;
  text-decoration: none;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  min-width: 220px;
  border: 2px solid transparent;
  isolation: isolate;
}

.button-bg {
  position: absolute;
  inset: 0;
  transition: all 0.4s ease;
  z-index: -2;
}

.primary-button .button-bg {
  background: linear-gradient(135deg, #3b82f6, #1e40af);
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
}

.secondary-button .button-bg {
  background: rgba(55, 65, 81, 0.6);
  border: 2px solid rgba(59, 130, 246, 0.4);
}

.enhanced-button:hover {
  transform: translateY(-5px) scale(1.02);
}

.primary-button:hover .button-bg {
  background: linear-gradient(135deg, #1e40af, #1e3a8a);
  box-shadow: 0 20px 40px rgba(59, 130, 246, 0.5);
}

.secondary-button:hover .button-bg {
  background: rgba(59, 130, 246, 0.2);
  border-color: #3b82f6;
}

.button-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.button-text {
  transition: all 0.3s ease;
}

.enhanced-button:hover .button-text {
  letter-spacing: 0.05em;
}

.button-shine {
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transform: translateX(-100%) skewX(-15deg);
  transition: transform 0.6s ease;
  z-index: 1;
}

.enhanced-button:hover .button-shine {
  transform: translateX(100%) skewX(-15deg);
}

.button-ripple-effect {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  transform: scale(0);
  animation: ripple-animation 0.6s ease-out;
  pointer-events: none;
}

@keyframes ripple-animation {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

/* Social proof section */
.social-proof {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background: rgba(30, 41, 59, 0.4);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 20px;
  backdrop-filter: blur(20px);
  max-width: 800px;
  margin: 0 auto;
  animation: social-proof-appear 1s ease-out 2.2s both;
}

@keyframes social-proof-appear {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.proof-item {
  text-align: center;
  transition: transform 0.3s ease;
}

.proof-item:hover {
  transform: translateY(-5px);
}

.proof-number {
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #60a5fa, #a78bfa);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
}

.proof-label {
  font-size: 0.875rem;
  color: #9ca3af;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.proof-divider {
  width: 2px;
  height: 40px;
  background: linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.5), transparent);
}

/* Enhanced scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  opacity: 1;
  transition: all 0.5s ease;
  animation: scroll-appear 1s ease-out 2.5s both;
}

@keyframes scroll-appear {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

.scroll-indicator.scroll-hidden {
  opacity: 0;
  transform: translateX(-50%) translateY(20px);
  pointer-events: none;
}

.mouse {
  width: 28px;
  height: 45px;
  border: 3px solid rgba(96, 165, 250, 0.6);
  border-radius: 14px;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
}

.mouse:hover {
  border-color: #60a5fa;
  box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
  transform: scale(1.1);
}

.wheel {
  width: 4px;
  height: 10px;
  background: linear-gradient(180deg, #60a5fa, #3b82f6);
  border-radius: 2px;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll-wheel 2s ease-in-out infinite;
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
}

@keyframes scroll-wheel {
  0%, 20% {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-50%) translateY(18px);
    opacity: 0;
  }
}

.scroll-arrows {
  display: flex;
  flex-direction: column;
  gap: -8px;
}

.scroll-arrows .arrow {
  width: 20px;
  height: 20px;
  color: rgba(96, 165, 250, 0.6);
  animation: arrow-bounce 2s ease-in-out infinite;
}

.scroll-arrows .arrow:nth-child(2) {
  animation-delay: 0.2s;
}

@keyframes arrow-bounce {
  0%, 100% {
    transform: translateY(0);
    opacity: 0.6;
  }
  50% {
    transform: translateY(5px);
    opacity: 1;
  }
}

/* Corner decorations */
.corner-decorations {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 3;
}

.corner {
  position: absolute;
  width: 120px;
  height: 120px;
  border: 2px solid transparent;
  animation: corner-glow 4s ease-in-out infinite;
}

.corner-tl {
  top: 0;
  left: 0;
  border-top-color: rgba(59, 130, 246, 0.3);
  border-left-color: rgba(59, 130, 246, 0.3);
  border-top-left-radius: 20px;
}

.corner-tr {
  top: 0;
  right: 0;
  border-top-color: rgba(139, 92, 246, 0.3);
  border-right-color: rgba(139, 92, 246, 0.3);
  border-top-right-radius: 20px;
  animation-delay: -1s;
}

.corner-bl {
  bottom: 0;
  left: 0;
  border-bottom-color: rgba(16, 185, 129, 0.3);
  border-left-color: rgba(16, 185, 129, 0.3);
  border-bottom-left-radius: 20px;
  animation-delay: -2s;
}

.corner-br {
  bottom: 0;
  right: 0;
  border-bottom-color: rgba(245, 158, 11, 0.3);
  border-right-color: rgba(245, 158, 11, 0.3);
  border-bottom-right-radius: 20px;
  animation-delay: -3s;
}

@keyframes corner-glow {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.8; }
}

/* Responsive Design */
@media (max-width: 768px) {
  .main-title {
    font-size: 2.5rem;
    line-height: 1.2;
  }

  .typewriter-box {
    min-width: 240px;
    padding: 0.4rem 0.8rem;
  }

  .typewriter-text {
    font-size: 1rem;
  }

  .slogan-text {
    font-size: 1rem;
    padding: 0 1.5rem;
  }

  .enhanced-button {
    min-width: 180px;
    padding: 0.875rem 1.5rem;
  }

  .social-proof {
    gap: 1.5rem;
    padding: 1.5rem;
  }

  .proof-number {
    font-size: 1.5rem;
  }

  .proof-divider {
    height: 30px;
  }

  .orb {
    opacity: 0.4;
  }

  .geometric-shapes .shape {
    opacity: 0.08;
  }

  .corner {
    width: 80px;
    height: 80px;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 2rem;
  }

  .professional-badge {
    padding: 0.6rem 1.2rem;
    gap: 0.5rem;
  }

  .badge-icon {
    width: 28px;
    height: 28px;
  }

  .badge-text {
    font-size: 0.75rem;
  }

  .typewriter-content {
    flex-direction: column;
    gap: 0.5rem;
  }

  .typewriter-box {
    min-width: 200px;
  }

  .slogan-text {
    font-size: 0.9rem;
    padding: 0 1rem;
  }

  .enhanced-button {
    min-width: 160px;
    padding: 0.75rem 1.25rem;
    font-size: 0.9rem;
  }

  .social-proof {
    flex-direction: column;
    gap: 1rem;
    padding: 1.25rem;
  }

  .proof-divider {
    width: 60px;
    height: 2px;
  }

  .floating-particles .particle {
    display: none;
  }

  .corner {
    width: 60px;
    height: 60px;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .particle,
  .orb,
  .spotlight {
    display: none;
  }

  .cursor {
    animation: none;
    opacity: 1;
  }

  .main-title {
    background: #60a5fa;
    -webkit-text-fill-color: #60a5fa;
  }
}

/* Focus states */
.enhanced-button:focus-visible {
  outline: 3px solid #3b82f6;
  outline-offset: 4px;
}

/* Performance optimization */
.enhanced-button,
.particle,
.orb,
.main-title,
.typewriter-content {
  will-change: transform, opacity;
  backface-visibility: hidden;
}

/* High contrast mode */
@media (prefers-contrast: high) {
  .main-title {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
  }

  .enhanced-button {
    border-width: 3px;
  }

  .badge {
    border-width: 2px;
  }
}
</style>