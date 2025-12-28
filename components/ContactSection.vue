<template>
  <section id="contact" ref="target" class="bg-gray-900 py-20 px-4 relative overflow-hidden" style="z-index: 1;">
    <!-- Enhanced Background animated elements -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Existing floating elements with enhanced animations -->
      <div class="floating-element bg-blue-500/5 w-72 h-72 rounded-full absolute -top-20 -left-20 animate-float-slow contact-orb-1"></div>
      <div class="floating-element bg-purple-500/5 w-96 h-96 rounded-full absolute -bottom-32 -right-32 animate-float-reverse contact-orb-2"></div>
      <div class="floating-element bg-cyan-500/5 w-48 h-48 rounded-full absolute top-1/2 left-1/4 animate-float-delayed contact-orb-3"></div>
      
      <!-- New floating particles -->
      <div class="contact-particles">
        <div class="contact-particle" v-for="i in 25" :key="i" :style="getContactParticleStyle(i)"></div>
      </div>
      
      <!-- New geometric shapes -->
      <div class="contact-geometric-shapes">
        <div class="contact-shape contact-shape-envelope"></div>
        <div class="contact-shape contact-shape-message"></div>
        <div class="contact-shape contact-shape-phone"></div>
        <div class="contact-shape contact-shape-location"></div>
      </div>

      <!-- Enhanced grid overlay -->
      <div class="contact-grid-overlay"></div>
      
      <!-- Connection lines animation -->
      <div class="contact-connection-lines">
        <svg class="contact-svg-lines" viewBox="0 0 1200 800">
          <path class="contact-line contact-line-1" d="M100,100 Q600,200 1100,150" />
          <path class="contact-line contact-line-2" d="M50,400 Q400,300 800,500" />
          <path class="contact-line contact-line-3" d="M200,600 Q700,400 1000,700" />
        </svg>
      </div>
    </div>

    <div class="container mx-auto relative z-10">
      <!-- Enhanced title section -->
      <div 
        class="text-center mb-12 transition-all duration-700 contact-title-container"
        :class="targetIsVisible ? 'opacity-100 translate-y-0 contact-title-visible' : 'opacity-0 translate-y-5'"
      >
        <div class="contact-title-wrapper">
          <h2 class="text-3xl md:text-4xl font-bold animated-gradient-text pulse-glow contact-title-typing contact-title-enhanced">
            <span class="contact-title-main">{{ T.contact.title[lang] }}</span>
            <div class="contact-title-rainbow-trail"></div>
            <div class="contact-title-glow-orb"></div>
          </h2>
          <div class="contact-title-underline"></div>
          <div class="contact-title-sparkles">
            <div class="contact-sparkle" v-for="i in 6" :key="i" :style="getContactSparkleStyle(i)"></div>
          </div>
        </div>
        <p class="text-gray-400 mt-2 animate-fade-in-up contact-description-wave">{{ T.contact.description[lang] }}</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Enhanced contact info card -->
        <div 
          class="bg-gradient-to-br from-gray-800 via-gray-850 to-gray-900 p-8 rounded-xl shadow-2xl transition-all duration-700 hover:shadow-blue-500/10 hover:shadow-2xl border border-gray-700/50 backdrop-blur-sm card-hover contact-info-morph"
          :class="targetIsVisible ? 'opacity-100 translate-x-0 contact-info-visible' : 'opacity-0 -translate-x-10'"
          :style="{ transitionDelay: '200ms' }"
        >
          <h3 class="text-2xl font-semibold text-white mb-6 animate-slide-in-left contact-info-title">
            {{ T.contact.info_title[lang] }}
            <div class="contact-info-title-glow"></div>
          </h3>
          <div class="space-y-5 contact-items-container">
            <div class="flex items-center gap-4 text-gray-300 hover:text-white transition-all duration-300 contact-item contact-item-enhanced group">
              <div class="icon-bounce contact-icon-orbit">
                <Icon name="mdi:email-outline" class="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300 contact-icon-pulse" />
                <div class="contact-icon-ring bg-blue-400/30"></div>
                <div class="contact-icon-glow"></div>
              </div>
              <a href="mailto:vincentaxel92@gmail.com" class="hover:underline contact-link-animate">
                vincentaxel92@gmail.com
                <div class="contact-link-trail"></div>
              </a>
            </div>
            <div class="flex items-center gap-4 text-gray-300 contact-item contact-item-enhanced group">
              <div class="icon-bounce contact-icon-orbit" style="animation-delay: 0.2s">
                <Icon name="mdi:phone-outline" class="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300 contact-icon-pulse" />
                <div class="contact-icon-ring bg-blue-400/30"></div>
                <div class="contact-icon-glow"></div>
              </div>
              <span class="contact-phone-typewriter">(+62) 813-1635-0886</span>
            </div>
            <div class="flex items-center gap-4 text-gray-300 contact-item contact-item-enhanced group">
              <div class="icon-bounce contact-icon-orbit" style="animation-delay: 0.4s">
                <Icon name="mdi:map-marker-outline" class="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300 contact-icon-pulse" />
                <div class="contact-icon-ring bg-blue-400/30"></div>
                <div class="contact-icon-glow"></div>
              </div>
              <span class="contact-location-reveal">Malang, East Java, Indonesia</span>
            </div>
          </div>
          
          <!-- Enhanced map container -->
          <div class="mt-8 rounded-xl overflow-hidden shadow-inner border border-gray-600/30 map-container contact-map-enhanced">
            <div class="contact-map-overlay"></div>
            <iframe
              class="map-iframe transition-all duration-500 hover:scale-105 contact-map-glow"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.429732297581!2d112.58998577578552!3d-7.954464979259194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78825cdbc27593%3A0xb5b423212a7d557d!2sJl.%20Bukit%20Cemara%20Tidar%2C%20Karangbesuki%2C%20Kec.%20Sukun%2C%20Kota%20Malang%2C%20Jawa%20Timur%2065149!5e0!3m2!1sid!2sid!4v1756786819901!5m2!1sid!2sid"
              width="100%"
              height="250"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div class="contact-map-pulse"></div>
          </div>
        </div>

        <!-- Enhanced form card -->
        <div 
          class="bg-gradient-to-br from-gray-800 via-gray-850 to-gray-900 p-8 rounded-xl shadow-2xl transition-all duration-700 hover:shadow-purple-500/10 hover:shadow-2xl border border-gray-700/50 backdrop-blur-sm card-hover contact-form-morph"
          :class="targetIsVisible ? 'opacity-100 translate-x-0 contact-form-visible' : 'opacity-0 translate-x-10'"
          :style="{ transitionDelay: '400ms' }"
        >
          <form action="https://formspree.io/f/mldwzlpz" method="POST" class="form-animate contact-form-enhanced">
            <div class="space-y-6">
              <!-- Enhanced form fields -->
              <div class="form-field contact-field-morph">
                <label for="name" class="block text-white text-sm font-bold mb-2 contact-label-glow">
                  {{ T.contact.form.full_name[lang] }}
                  <div class="contact-label-underline"></div>
                </label>
                <div class="relative input-container contact-input-enhanced">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-3 icon-float contact-input-icon">
                    <Icon name="mdi:account-outline" class="w-5 h-5 text-gray-400 contact-input-icon-spin" />
                    <div class="contact-input-icon-pulse"></div>
                  </span>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    :placeholder="T.contact.form.your_name_placeholder[lang]" 
                    class="w-full bg-gray-700/80 text-white rounded-lg py-3 pl-10 pr-3 border border-gray-600 focus:border-blue-500 focus:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 hover:bg-gray-600/50 input-glow contact-input-morph"
                    @focus="onInputFocus"
                    @blur="onInputBlur"
                  >
                  <div class="contact-input-wave"></div>
                </div>
              </div>
              
              <div class="form-field contact-field-morph" style="animation-delay: 0.1s">
                <label for="email" class="block text-white text-sm font-bold mb-2 contact-label-glow">
                  {{ T.contact.form.email[lang] }}
                  <div class="contact-label-underline"></div>
                </label>
                <div class="relative input-container contact-input-enhanced">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-3 icon-float contact-input-icon">
                    <Icon name="mdi:email-outline" class="w-5 h-5 text-gray-400 contact-input-icon-spin" />
                    <div class="contact-input-icon-pulse"></div>
                  </span>
                  <input 
                    type="email" 
                    id="email" 
                    name="_replyto"
                    required 
                    :placeholder="T.contact.form.your_email_placeholder[lang]" 
                    class="w-full bg-gray-700/80 text-white rounded-lg py-3 pl-10 pr-3 border border-gray-600 focus:border-blue-500 focus:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 hover:bg-gray-600/50 input-glow contact-input-morph"
                    @focus="onInputFocus"
                    @blur="onInputBlur"
                  >
                  <div class="contact-input-wave"></div>
                </div>
              </div>
              
              <div class="form-field contact-field-morph" style="animation-delay: 0.2s">
                <label for="subject" class="block text-white text-sm font-bold mb-2 contact-label-glow">
                  {{ T.contact.form.subject[lang] }}
                  <div class="contact-label-underline"></div>
                </label>
                <div class="relative input-container contact-input-enhanced">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-3 icon-float contact-input-icon">
                    <Icon name="mdi:pencil-outline" class="w-5 h-5 text-gray-400 contact-input-icon-spin" />
                    <div class="contact-input-icon-pulse"></div>
                  </span>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    required 
                    :placeholder="T.contact.form.subject_placeholder[lang]" 
                    class="w-full bg-gray-700/80 text-white rounded-lg py-3 pl-10 pr-3 border border-gray-600 focus:border-blue-500 focus:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 hover:bg-gray-600/50 input-glow contact-input-morph"
                    @focus="onInputFocus"
                    @blur="onInputBlur"
                  >
                  <div class="contact-input-wave"></div>
                </div>
              </div>
              
              <div class="form-field contact-field-morph" style="animation-delay: 0.3s">
                <label for="message" class="block text-white text-sm font-bold mb-2 contact-label-glow">
                  {{ T.contact.form.message[lang] }}
                  <div class="contact-label-underline"></div>
                </label>
                <div class="relative contact-textarea-enhanced">
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    required 
                    :placeholder="T.contact.form.message_placeholder[lang]" 
                    class="w-full bg-gray-700/80 text-white rounded-lg py-3 px-3 border border-gray-600 focus:border-blue-500 focus:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 hover:bg-gray-600/50 input-glow resize-none contact-textarea-morph"
                    @focus="onInputFocus"
                    @blur="onInputBlur"
                  ></textarea>
                  <div class="contact-textarea-wave"></div>
                  <div class="contact-textarea-sparkles">
                    <div class="contact-textarea-sparkle" v-for="i in 4" :key="i"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Enhanced submit button -->
            <div class="text-right mt-6 contact-button-container">
              <button 
                type="submit" 
                class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-blue-500/25 button-pulse relative overflow-hidden contact-submit-enhanced"
                @mouseenter="onButtonHover"
                @mouseleave="onButtonLeave"
              >
                <span class="relative z-10 contact-button-text">{{ T.contact.form.send_button[lang] }}</span>
                <div class="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 contact-button-shine"></div>
                <div class="contact-button-ripples">
                  <div class="contact-button-ripple" v-for="i in 3" :key="i"></div>
                </div>
                <div class="contact-button-particles">
                  <div class="contact-button-particle" v-for="i in 5" :key="i"></div>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ref } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';
import { useLang } from '~/composables/useLang';
import { translations } from '~/data/translations';

const { lang } = useLang();
const T = translations;

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

// New functions for enhanced animations
const getContactParticleStyle = (index) => {
  const delay = Math.random() * 6;
  const duration = 10 + Math.random() * 8;
  const size = 1 + Math.random() * 2;
  
  return {
    left: Math.random() * 100 + '%',
    animationDelay: delay + 's',
    animationDuration: duration + 's',
    width: size + 'px',
    height: size + 'px'
  };
};

const getContactSparkleStyle = (index) => {
  const angle = (index / 6) * 360;
  const distance = 50 + Math.random() * 20;
  const delay = index * 0.3;
  
  return {
    transform: `rotate(${angle}deg) translateX(${distance}px)`,
    animationDelay: delay + 's'
  };
};

// Interactive event handlers
const onInputFocus = (event) => {
  const container = event.target.closest('.input-container') || event.target.closest('.contact-textarea-enhanced');
  if (container) {
    container.classList.add('contact-input-focused');
  }
};

const onInputBlur = (event) => {
  const container = event.target.closest('.input-container') || event.target.closest('.contact-textarea-enhanced');
  if (container) {
    container.classList.remove('contact-input-focused');
  }
};

const onButtonHover = (event) => {
  event.target.classList.add('contact-button-hovered');
};

const onButtonLeave = (event) => {
  event.target.classList.remove('contact-button-hovered');
};
</script>

<style scoped>
/* Z-INDEX FIX - Ensure section doesn't interfere with navigation */
section {
  position: relative;
  z-index: 1 !important;
}

/* Background elements stay behind everything */
.absolute.inset-0 {
  z-index: 0;
}

/* Content stays above background but below navigation */
.container.mx-auto.relative {
  z-index: 2;
}

/* Enhanced floating particles */
.contact-particles {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.contact-particle {
  position: absolute;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.6), rgba(139, 92, 246, 0.2));
  border-radius: 50%;
  animation: contact-particle-drift linear infinite;
}

@keyframes contact-particle-drift {
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

/* Enhanced geometric shapes */
.contact-geometric-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
}

.contact-shape {
  position: absolute;
  animation: contact-shape-float 20s ease-in-out infinite;
  opacity: 0.06;
  filter: blur(0.5px);
}

.contact-shape-envelope {
  width: 40px;
  height: 30px;
  background: #3b82f6;
  position: relative;
  top: 20%;
  left: 5%;
  animation-delay: 0s;
}

.contact-shape-envelope::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 15px solid #1d4ed8;
}

.contact-shape-message {
  width: 35px;
  height: 25px;
  background: #10b981;
  border-radius: 8px;
  top: 60%;
  right: 10%;
  animation-delay: -5s;
}

.contact-shape-phone {
  width: 25px;
  height: 40px;
  background: #f59e0b;
  border-radius: 8px;
  bottom: 30%;
  left: 20%;
  animation-delay: -10s;
}

.contact-shape-location {
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 30px solid #ef4444;
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
  top: 40%;
  right: 25%;
  animation-delay: -15s;
}

@keyframes contact-shape-float {
  0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
  25% { transform: translateY(-30px) rotate(45deg) scale(1.1); }
  50% { transform: translateY(-60px) rotate(90deg) scale(0.9); }
  75% { transform: translateY(-30px) rotate(135deg) scale(1.05); }
}

/* Enhanced grid overlay */
.contact-grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(139, 92, 246, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(139, 92, 246, 0.02) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: contact-grid-pulse 20s ease-in-out infinite;
}

@keyframes contact-grid-pulse {
  0%, 100% { 
    transform: translate(0, 0) scale(1);
    opacity: 0.3;
  }
  50% { 
    transform: translate(30px, 30px) scale(1.05);
    opacity: 0.6;
  }
}

/* Connection lines animation */
.contact-connection-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.contact-svg-lines {
  width: 100%;
  height: 100%;
}

.contact-line {
  fill: none;
  stroke: rgba(59, 130, 246, 0.1);
  stroke-width: 2;
  stroke-dasharray: 5,5;
  animation: contact-line-flow 8s ease-in-out infinite;
}

.contact-line-1 { animation-delay: 0s; }
.contact-line-2 { animation-delay: -2.5s; }
.contact-line-3 { animation-delay: -5s; }

@keyframes contact-line-flow {
  0%, 100% { 
    stroke-dashoffset: 0;
    opacity: 0.1;
  }
  50% { 
    stroke-dashoffset: -20;
    opacity: 0.3;
  }
}

/* Enhanced orb animations */
.contact-orb-1 {
  animation: contact-orb-drift-1 25s ease-in-out infinite;
}

.contact-orb-2 {
  animation: contact-orb-drift-2 20s ease-in-out infinite;
}

.contact-orb-3 {
  animation: contact-orb-drift-3 30s ease-in-out infinite;
}

@keyframes contact-orb-drift-1 {
  0%, 100% { transform: translate(0, 0) scale(1); filter: blur(1px); }
  33% { transform: translate(15px, -20px) scale(1.1); filter: blur(2px); }
  66% { transform: translate(-10px, 10px) scale(0.9); filter: blur(1.5px); }
}

@keyframes contact-orb-drift-2 {
  0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
  50% { transform: translate(-20px, 15px) scale(1.15) rotate(180deg); }
}

@keyframes contact-orb-drift-3 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(25px, -15px) scale(1.2); }
  75% { transform: translate(-15px, 25px) scale(0.8); }
}

/* Enhanced title effects with new rainbow animations */
.contact-title-container {
  position: relative;
}

.contact-title-wrapper {
  position: relative;
  display: inline-block;
}

/* Enhanced contact title with rainbow effects */
.contact-title-enhanced {
position: relative;
  color: gold; /* Always visible white text */
  animation: contact-title-rainbow-text 8s ease-in-out infinite, contact-title-glow-pulse 4s ease-in-out infinite;
  text-shadow: 
    0 0 10px rgba(59, 130, 246, 0.5),
    0 0 20px rgba(139, 92, 246, 0.3),
    0 0 30px rgba(255, 255, 255, 0.1);
}

@keyframes contact-title-rainbow-text {
  0% { 
    color: #ff6b6b;
    text-shadow: 0 0 20px rgba(255, 107, 107, 0.5);
  }
  14% { 
    color: #4ecdc4;
    text-shadow: 0 0 20px rgba(78, 205, 196, 0.5);
  }
  28% { 
    color: #45b7d1;
    text-shadow: 0 0 20px rgba(69, 183, 209, 0.5);
  }
  42% { 
    color: #96ceb4;
    text-shadow: 0 0 20px rgba(150, 206, 180, 0.5);
  }
  57% { 
    color: #feca57;
    text-shadow: 0 0 20px rgba(254, 202, 87, 0.5);
  }
  71% { 
    color: #ff9ff3;
    text-shadow: 0 0 20px rgba(255, 159, 243, 0.5);
  }
  85% { 
    color: #54a0ff;
    text-shadow: 0 0 20px rgba(84, 160, 255, 0.5);
  }
  100% { 
    color: #ff6b6b;
    text-shadow: 0 0 20px rgba(255, 107, 107, 0.5);
  }
}

@supports not (-webkit-background-clip: text) {
  .contact-title-enhanced {
    color: #3b82f6; /* Fallback color for unsupported browsers */
    -webkit-text-fill-color: initial;
    background: none;
  }
}

.contact-title-main {
  position: relative;
  z-index: 2;
  display: inline-block;
  animation: contact-title-wave 3s ease-in-out infinite;
}

.contact-title-rainbow-trail {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 107, 107, 0.3),
    rgba(78, 205, 196, 0.3),
    rgba(69, 183, 209, 0.3),
    rgba(150, 206, 180, 0.3),
    rgba(254, 202, 87, 0.3),
    rgba(255, 159, 243, 0.3),
    rgba(84, 160, 255, 0.3),
    transparent
  );
  background-size: 200% 100%;
  opacity: 0;
  animation: contact-title-trail-flow 6s ease-in-out infinite;
  z-index: 1;
}

.contact-title-glow-orb {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150%;
  height: 150%;
  background: radial-gradient(
    circle,
    rgba(255, 107, 107, 0.15),
    rgba(78, 205, 196, 0.15),
    rgba(69, 183, 209, 0.15),
    transparent
  );
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  animation: contact-title-orb-pulse 5s ease-in-out infinite;
  z-index: 0;
}

@keyframes contact-title-rainbow {
  0%, 100% { 
    background-position: 0% 50%;
    filter: hue-rotate(0deg) saturate(1.2) brightness(1.1);
  }
  25% { 
    background-position: 50% 100%;
    filter: hue-rotate(90deg) saturate(1.5) brightness(1.3);
  }
  50% { 
    background-position: 100% 50%;
    filter: hue-rotate(180deg) saturate(1.8) brightness(1.2);
  }
  75% { 
    background-position: 50% 0%;
    filter: hue-rotate(270deg) saturate(1.4) brightness(1.4);
  }
}

@keyframes contact-title-glow-pulse {
  0%, 100% { 
    text-shadow: 
      0 0 10px rgba(255, 107, 107, 0.3),
      0 0 20px rgba(78, 205, 196, 0.2),
      0 0 30px rgba(69, 183, 209, 0.1);
  }
  33% { 
    text-shadow: 
      0 0 15px rgba(78, 205, 196, 0.4),
      0 0 25px rgba(69, 183, 209, 0.3),
      0 0 35px rgba(150, 206, 180, 0.2);
  }
  66% { 
    text-shadow: 
      0 0 20px rgba(254, 202, 87, 0.4),
      0 0 30px rgba(255, 159, 243, 0.3),
      0 0 40px rgba(84, 160, 255, 0.2);
  }
}

@keyframes contact-title-wave {
  0%, 100% { 
    transform: translateY(0) rotateX(0deg) scale(1);
  }
  25% { 
    transform: translateY(-3px) rotateX(5deg) scale(1.02);
  }
  50% { 
    transform: translateY(0) rotateX(0deg) scale(1.03);
  }
  75% { 
    transform: translateY(-2px) rotateX(-3deg) scale(1.01);
  }
}

@keyframes contact-title-trail-flow {
  0%, 100% { 
    opacity: 0;
    background-position: -200% 0;
    transform: rotate(0deg);
  }
  50% { 
    opacity: 0.8;
    background-position: 200% 0;
    transform: rotate(1deg);
  }
}

@keyframes contact-title-orb-pulse {
  0%, 100% { 
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }
  50% { 
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.6;
  }
}

.contact-title-typing {
  overflow: hidden;
  border-right: 3px solid rgba(139, 92, 246, 0.8);
  white-space: nowrap;
  animation: 
    contact-typing 2.5s steps(15) 1s both,
    contact-cursor-blink 1s ease-in-out infinite 3.5s;
}

@keyframes contact-typing {
  0% { width: 0; }
  100% { width: 100%; }
}

@keyframes contact-cursor-blink {
  0%, 50% { border-color: transparent; }
  51%, 100% { border-color: rgba(139, 92, 246, 0.8); }
}

.contact-title-visible {
  animation: contact-title-emerge 1s cubic-bezier(0.23, 1, 0.32, 1);
}

@keyframes contact-title-emerge {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
    filter: blur(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

.contact-title-underline {
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ef4444);
  animation: contact-underline-expand 1.2s ease-out 2.5s forwards;
  border-radius: 2px;
}

@keyframes contact-underline-expand {
  to { width: 90%; }
}

.contact-title-sparkles {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.contact-sparkle {
  position: absolute;
  width: 5px;
  height: 5px;
  background: radial-gradient(circle, #fff, #8b5cf6);
  border-radius: 50%;
  opacity: 0;
  animation: contact-sparkle-twinkle 2.5s ease-in-out infinite;
}

@keyframes contact-sparkle-twinkle {
  0%, 100% { 
    opacity: 0; 
    transform: scale(0) rotate(0deg); 
  }
  50% { 
    opacity: 1; 
    transform: scale(1) rotate(180deg); 
  }
}

.contact-description-wave {
  position: relative;
}

.contact-description-wave::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.5), transparent);
  transform: translateX(-100%);
  animation: contact-description-flow 3s ease-in-out infinite 4s;
}

@keyframes contact-description-flow {
  0% { transform: translateX(-100%); }
  50% { transform: translateX(100%); }
  100% { transform: translateX(100%); }
}
/* Enhanced card morphing effects */
.contact-info-morph,
.contact-form-morph {
  position: relative;
  overflow: hidden;
}

.contact-info-morph::before,
.contact-form-morph::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(from 0deg, transparent, rgba(59, 130, 246, 0.08), transparent, rgba(139, 92, 246, 0.08), transparent);
  transform: rotate(0deg);
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: 0;
}

.contact-info-morph:hover::before {
  opacity: 1;
  animation: contact-card-rotate 4s linear infinite;
}

.contact-form-morph:hover::before {
  opacity: 1;
  animation: contact-card-rotate 4s linear infinite reverse;
}

@keyframes contact-card-rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.contact-info-visible,
.contact-form-visible {
  animation: contact-card-materialize 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes contact-card-materialize {
  0% {
    opacity: 0;
    transform: translateX(-20px) rotateY(-15deg) scale(0.95);
    filter: blur(8px);
  }
  100% {
    opacity: 1;
    transform: translateX(0) rotateY(0) scale(1);
    filter: blur(0);
  }
}

/* Enhanced info title effects */
.contact-info-title {
  position: relative;
}

.contact-info-title-glow {
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  animation: contact-info-title-expand 1s ease-out 1s forwards;
  border-radius: 1px;
}

@keyframes contact-info-title-expand {
  to { width: 100%; }
}

/* Enhanced contact items */
.contact-items-container {
  position: relative;
}

.contact-item-enhanced {
  position: relative;
  padding: 12px;
  margin: -12px;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}

.contact-item-enhanced:hover {
  background: rgba(59, 130, 246, 0.05);
  backdrop-filter: blur(10px);
  transform: translateX(8px) scale(1.02);
}

.contact-item-enhanced::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 0;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border-radius: 12px 0 0 12px;
  transition: width 0.3s ease;
}

.contact-item-enhanced:hover::before {
  width: 4px;
}

/* Enhanced icon effects */
.contact-icon-orbit {
  position: relative;
}

.contact-icon-orbit::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all 0.3s ease;
}

.contact-item-enhanced:hover .contact-icon-orbit::before {
  opacity: 1;
  animation: contact-orbit-spin 2s linear infinite;
}

@keyframes contact-orbit-spin {
  0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
  50% { transform: translate(-50%, -50%) rotate(180deg) scale(1.1); }
  100% { transform: translate(-50%, -50%) rotate(360deg) scale(1); }
}

.contact-icon-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120%;
  height: 120%;
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.4s ease;
}

.contact-item-enhanced:hover .contact-icon-ring {
  transform: translate(-50%, -50%) scale(1);
  animation: contact-ring-pulse 1.2s ease-out;
}

@keyframes contact-ring-pulse {
  0% { transform: translate(-50%, -50%) scale(0); opacity: 0.8; }
  100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
}

.contact-icon-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.4), transparent);
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.3s ease;
}

.contact-item-enhanced:hover .contact-icon-glow {
  transform: translate(-50%, -50%) scale(2);
  animation: contact-glow-pulse 0.8s ease-out;
}

@keyframes contact-glow-pulse {
  0% { transform: translate(-50%, -50%) scale(0); opacity: 0.6; }
  100% { transform: translate(-50%, -50%) scale(3); opacity: 0; }
}

.contact-icon-pulse {
  animation: contact-icon-heartbeat 2.5s ease-in-out infinite;
}

@keyframes contact-icon-heartbeat {
  0%, 100% { transform: scale(1); }
  20% { transform: scale(1.1); }
  40% { transform: scale(1); }
  60% { transform: scale(1.1); }
  80% { transform: scale(1); }
}

/* Enhanced link animations */
.contact-link-animate {
  position: relative;
  transition: all 0.3s ease;
}

.contact-link-trail {
  position: absolute;
  top: 50%;
  right: -15px;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, rgba(59, 130, 246, 0.8), transparent);
  transform: translateY(-50%);
  transition: width 0.4s ease;
}

.contact-link-animate:hover .contact-link-trail {
  width: 25px;
  animation: contact-trail-glow 0.6s ease;
}

@keyframes contact-trail-glow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; transform: translateY(-50%) scale(1.3); }
}

/* Text reveal animations */
.contact-phone-typewriter {
  overflow: hidden;
  display: inline-block;
  animation: contact-phone-reveal 2s ease-out 2s both;
}

@keyframes contact-phone-reveal {
  0% { width: 0; }
  100% { width: 100%; }
}

.contact-location-reveal {
  position: relative;
  overflow: hidden;
}

.contact-location-reveal::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: translateX(-100%);
  animation: contact-location-shimmer 2s ease-in-out infinite 3s;
}

@keyframes contact-location-shimmer {
  0% { transform: translateX(-100%); }
  50% { transform: translateX(100%); }
  100% { transform: translateX(100%); }
}

/* Enhanced map effects */
.contact-map-enhanced {
  position: relative;
}

.contact-map-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(59, 130, 246, 0.1), transparent, rgba(139, 92, 246, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 2;
  pointer-events: none;
}

.contact-map-enhanced:hover .contact-map-overlay {
  opacity: 1;
}

.contact-map-glow {
  transition: all 0.5s ease;
}

.contact-map-enhanced:hover .contact-map-glow {
  filter: invert(1) hue-rotate(180deg) brightness(.9) contrast(1.3);
  box-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
}

.contact-map-pulse {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  background: rgba(59, 130, 246, 0.6);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  animation: contact-map-pulse-anim 3s ease-in-out infinite 1s;
}

@keyframes contact-map-pulse-anim {
  0%, 70%, 100% { 
    transform: translate(-50%, -50%) scale(0); 
    opacity: 0; 
  }
  35% { 
    transform: translate(-50%, -50%) scale(1); 
    opacity: 0.8; 
  }
}

/* Enhanced form effects */
.contact-form-enhanced {
  position: relative;
}

.contact-field-morph {
  position: relative;
  transition: all 0.3s ease;
}

.contact-field-morph:hover {
  transform: translateY(-2px);
}

/* Enhanced label effects */
.contact-label-glow {
  position: relative;
  transition: all 0.3s ease;
}

.contact-label-underline {
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  transition: width 0.3s ease;
}

.contact-field-morph:hover .contact-label-underline,
.contact-field-morph:focus-within .contact-label-underline {
  width: 100%;
}

/* Enhanced input effects */
.contact-input-enhanced {
  position: relative;
}

.contact-input-icon {
  position: relative;
  z-index: 2;
}

.contact-input-icon-spin {
  transition: transform 0.3s ease;
}

.contact-input-enhanced:hover .contact-input-icon-spin,
.contact-input-focused .contact-input-icon-spin {
  transform: rotate(360deg) scale(1.1);
}

.contact-input-icon-pulse {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120%;
  height: 120%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent);
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.3s ease;
}

.contact-input-enhanced:hover .contact-input-icon-pulse,
.contact-input-focused .contact-input-icon-pulse {
  transform: translate(-50%, -50%) scale(1);
}

.contact-input-morph {
  position: relative;
  overflow: hidden;
}

.contact-input-wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ef4444);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.contact-input-morph:focus + .contact-input-wave,
.contact-input-focused .contact-input-wave {
  transform: translateX(0);
  animation: contact-input-wave-flow 2s ease-in-out infinite;
}

@keyframes contact-input-wave-flow {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Enhanced textarea effects */
.contact-textarea-enhanced {
  position: relative;
}

.contact-textarea-morph {
  position: relative;
  overflow: hidden;
}

.contact-textarea-wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ef4444);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.contact-textarea-morph:focus + .contact-textarea-wave,
.contact-textarea-enhanced.contact-input-focused .contact-textarea-wave {
  transform: translateX(0);
  animation: contact-textarea-wave-flow 3s ease-in-out infinite;
}

@keyframes contact-textarea-wave-flow {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.contact-textarea-sparkles {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 60px;
  height: 60px;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.contact-textarea-enhanced.contact-input-focused .contact-textarea-sparkles {
  opacity: 1;
}

.contact-textarea-sparkle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: radial-gradient(circle, #fff, #8b5cf6);
  border-radius: 50%;
  animation: contact-textarea-sparkle-dance 2s ease-in-out infinite;
}

.contact-textarea-sparkle:nth-child(1) { top: 0; left: 0; animation-delay: 0s; }
.contact-textarea-sparkle:nth-child(2) { top: 0; right: 0; animation-delay: 0.5s; }
.contact-textarea-sparkle:nth-child(3) { bottom: 0; left: 0; animation-delay: 1s; }
.contact-textarea-sparkle:nth-child(4) { bottom: 0; right: 0; animation-delay: 1.5s; }

@keyframes contact-textarea-sparkle-dance {
  0%, 100% { 
    opacity: 0; 
    transform: scale(0) rotate(0deg); 
  }
  50% { 
    opacity: 1; 
    transform: scale(1) rotate(180deg); 
  }
}

/* Enhanced button effects */
.contact-submit-enhanced {
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}

.contact-submit-enhanced::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.6s ease;
}

.contact-submit-enhanced:hover::before {
  left: 100%;
}

.contact-button-text {
  transition: all 0.3s ease;
}

.contact-submit-enhanced.contact-button-hovered .contact-button-text {
  transform: scale(1.05);
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

.contact-button-shine {
  transition: all 0.3s ease;
}

.contact-button-ripples {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.contact-button-ripple {
  position: absolute;
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  opacity: 0;
  animation: contact-button-ripple-expand 2s ease-out infinite;
}

.contact-button-ripple:nth-child(1) { 
  top: 20%; 
  left: 30%; 
  animation-delay: 0s; 
}
.contact-button-ripple:nth-child(2) { 
  top: 60%; 
  left: 70%; 
  animation-delay: 0.7s; 
}
.contact-button-ripple:nth-child(3) { 
  top: 40%; 
  left: 50%; 
  animation-delay: 1.4s; 
}

@keyframes contact-button-ripple-expand {
  0% { 
    transform: scale(0); 
    opacity: 0.8; 
  }
  50% { 
    opacity: 0.4; 
  }
  100% { 
    transform: scale(3); 
    opacity: 0; 
  }
}

.contact-button-particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.contact-button-particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  opacity: 0;
}

.contact-submit-enhanced.contact-button-hovered .contact-button-particle {
  animation: contact-button-particle-burst 1s ease-out;
}

.contact-button-particle:nth-child(1) { 
  top: 10%; 
  left: 20%; 
  animation-delay: 0s; 
}
.contact-button-particle:nth-child(2) { 
  top: 80%; 
  left: 80%; 
  animation-delay: 0.2s; 
}
.contact-button-particle:nth-child(3) { 
  top: 30%; 
  left: 60%; 
  animation-delay: 0.4s; 
}
.contact-button-particle:nth-child(4) { 
  top: 70%; 
  left: 40%; 
  animation-delay: 0.6s; 
}
.contact-button-particle:nth-child(5) { 
  top: 50%; 
  left: 10%; 
  animation-delay: 0.8s; 
}

@keyframes contact-button-particle-burst {
  0% { 
    transform: scale(0) translate(0, 0); 
    opacity: 0; 
  }
  50% { 
    opacity: 1; 
  }
  100% { 
    transform: scale(1) translate(20px, -20px); 
    opacity: 0; 
  }
}

/* Existing map styling */
.map-iframe {
  filter: invert(1) hue-rotate(180deg) brightness(.8) contrast(1.2);
}

/* Floating background elements */
.floating-element {
  animation-duration: 20s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

@keyframes float-slow {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(10px, -15px) rotate(1deg); }
  50% { transform: translate(-5px, -10px) rotate(-0.5deg); }
  75% { transform: translate(-10px, 5px) rotate(0.5deg); }
}

@keyframes float-reverse {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(-15px, 10px) rotate(-1deg); }
  50% { transform: translate(10px, 15px) rotate(0.5deg); }
  75% { transform: translate(5px, -5px) rotate(-0.5deg); }
}

@keyframes float-delayed {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(8px, -12px) scale(1.05); }
  66% { transform: translate(-8px, 8px) scale(0.95); }
}

.animate-float-slow { animation-name: float-slow; }
.animate-float-reverse { animation-name: float-reverse; }
.animate-float-delayed { 
  animation-name: float-delayed; 
  animation-delay: -10s;
}

/* Gradient text with pulse effect */
.pulse-glow {
  animation: pulse-glow 3s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% { filter: brightness(1) drop-shadow(0 0 5px rgba(59, 130, 246, 0.3)); }
  50% { filter: brightness(1.1) drop-shadow(0 0 15px rgba(59, 130, 246, 0.5)); }
}

/* Card hover effects */
.card-hover {
  transition: all 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(59, 130, 246, 0.1);
}

/* Contact item animations */
.contact-item {
  opacity: 0;
  animation: slide-in-left 0.6s ease-out forwards;
}

.contact-item:nth-child(1) { animation-delay: 0.6s; }
.contact-item:nth-child(2) { animation-delay: 0.8s; }
.contact-item:nth-child(3) { animation-delay: 1s; }

@keyframes slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Icon bounce animation */
.icon-bounce {
  animation: icon-bounce 2s ease-in-out infinite;
}

@keyframes icon-bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-3px); }
  60% { transform: translateY(-2px); }
}

/* Form field animations */
.form-field {
  opacity: 0;
  animation: fade-in-up 0.6s ease-out forwards;
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Input glow effect */
.input-glow:focus {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1), 0 0 10px rgba(59, 130, 246, 0.2);
}

/* Icon float animation */
.icon-float {
  animation: icon-float 3s ease-in-out infinite;
}

@keyframes icon-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
}

/* Button pulse animation */
.button-pulse {
  animation: button-pulse 2s ease-in-out infinite;
}

@keyframes button-pulse {
  0%, 100% { box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3); }
  50% { box-shadow: 0 4px 25px rgba(59, 130, 246, 0.5); }
}

/* Map container hover effect */
.map-container {
  overflow: hidden;
}

.map-container:hover .map-iframe {
  transform: scale(1.02);
}

/* Fade in up animation for description */
.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out 0.3s both;
}

/* Slide in left for heading */
.animate-slide-in-left {
  animation: slide-in-left 0.8s ease-out 0.4s both;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .floating-element,
  .contact-particle,
  .contact-shape {
    opacity: 0.5;
    animation-duration: 15s;
  }
  
  .card-hover:hover {
    transform: translateY(-2px);
  }
  
  .contact-title-typing {
    white-space: normal;
    border-right: none;
    animation: none;
  }
  
  .contact-item-enhanced:hover {
    transform: translateX(4px) scale(1.01);
  }
}

@media (max-width: 480px) {
  .contact-particles,
  .contact-geometric-shapes,
  .contact-connection-lines {
    display: none;
  }
  
  .contact-sparkle,
  .contact-textarea-sparkles {
    display: none;
  }
}

/* Performance optimizations */
.contact-submit-enhanced,
.contact-input-morph,
.contact-textarea-morph,
.contact-icon-pulse,
.contact-map-glow {
  will-change: transform, opacity;
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  .contact-particle,
  .contact-shape,
  .contact-orb-1,
  .contact-orb-2,
  .contact-orb-3,
  .contact-sparkle,
  .contact-button-ripple,
  .contact-button-particle,
  .contact-title-enhanced,
  .contact-title-main,
  .contact-title-rainbow-trail,
  .contact-title-glow-orb {
    animation: none;
  }
  
  .contact-title-typing {
    animation: none;
    border-right: none;
  }
  
  .contact-icon-spin,
  .contact-input-icon-spin {
    transition: none;
  }
}

/* Loading state for better UX */
.form-animate {
  animation: form-fade-in 0.8s ease-out 0.6s both;
}

@keyframes form-fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>