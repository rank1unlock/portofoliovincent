<template>
  <div>
    <nav
      ref="navbar"
      class="bg-gray-900/90 backdrop-blur-lg text-white fixed w-full top-0 transition-all duration-500 ease-out border-b border-gray-800/50 navbar-container"
      :class="[
        isScrolled ? 'bg-gray-900/95 shadow-lg shadow-black/20 py-2' : 'py-4',
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0',
      ]"
    >
      <div
        class="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block"
      >
        <div
          class="navbar-float-element bg-blue-500/5 w-64 h-64 rounded-full absolute -top-32 -left-32 animate-navbar-float-1"
        ></div>
        <div
          class="navbar-float-element bg-purple-500/5 w-48 h-48 rounded-full absolute -top-24 -right-24 animate-navbar-float-2"
        ></div>
        <div
          class="navbar-float-element bg-cyan-500/5 w-32 h-32 rounded-full absolute top-0 left-1/2 animate-navbar-float-3"
        ></div>
      </div>

      <div
        class="container mx-auto px-4 flex justify-between items-center relative z-10"
      >
        <div class="brand-container flex-shrink-0">
          <a
            href="#"
            class="text-lg sm:text-xl font-bold brand-logo relative overflow-hidden group"
            style="animation-delay: 0.1s"
          >
            <span class="relative z-10 brand-text">PORTOFOLIO</span>
            <div
              class="brand-glow absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"
            ></div>
            <div
              class="brand-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
            ></div>
          </a>
        </div>

        <ul class="hidden lg:flex space-x-6 xl:space-x-8 nav-links-container">
          <li class="nav-item" style="animation-delay: 0.2s">
            <a
              href="#hero"
              @click="handleNavClick('#hero', $event)"
              class="nav-link"
              ><span class="nav-text">{{ T.navbar.home[lang] }}</span>
              <div class="nav-particle"></div
            ></a>
          </li>
          <li class="nav-item" style="animation-delay: 0.3s">
            <a
              href="#about"
              @click="handleNavClick('#about', $event)"
              class="nav-link"
              ><span class="nav-text">{{ T.navbar.about[lang] }}</span>
              <div class="nav-particle"></div
            ></a>
          </li>
          <li class="nav-item" style="animation-delay: 0.4s">
            <a
              href="#gallery"
              @click="handleNavClick('#gallery', $event)"
              class="nav-link"
              ><span class="nav-text">{{ T.navbar.gallery[lang] }}</span>
              <div class="nav-particle"></div
            ></a>
          </li>
          <li class="nav-item" style="animation-delay: 0.5s">
            <a
              href="#projects"
              @click="handleNavClick('#projects', $event)"
              class="nav-link"
              ><span class="nav-text">{{ T.navbar.projects[lang] }}</span>
              <div class="nav-particle"></div
            ></a>
          </li>
          <li class="nav-item" style="animation-delay: 0.6s">
            <a
              href="#skills"
              @click="handleNavClick('#skills', $event)"
              class="nav-link"
              ><span class="nav-text">{{ T.navbar.skills[lang] }}</span>
              <div class="nav-particle"></div
            ></a>
          </li>
          <li class="nav-item" style="animation-delay: 0.65s">
            <a
              href="#video-introduction"
              @click="handleNavClick('#video-introduction', $event)"
              class="nav-link"
              ><span class="nav-text">{{ T.navbar.video[lang] }}</span>
              <div class="nav-particle"></div
            ></a>
          </li>
          <li class="nav-item" style="animation-delay: 0.7s">
            <a
              href="#testimonials"
              @click="handleNavClick('#testimonials', $event)"
              class="nav-link"
              ><span class="nav-text">{{ T.navbar.testimonials[lang] }}</span>
              <div class="nav-particle"></div
            ></a>
          </li>
          <li class="nav-item" style="animation-delay: 0.8s">
            <a
              href="#contact"
              @click="handleNavClick('#contact', $event)"
              class="nav-link"
              ><span class="nav-text">{{ T.navbar.contact[lang] }}</span>
              <div class="nav-particle"></div
            ></a>
          </li>
        </ul>

        <div
          class="hidden lg:flex items-center gap-4 controls-container"
          style="animation-delay: 0.9s"
        >
          <div class="language-toggle-container relative flex-shrink-0">
            <div class="language-toggle flex relative rounded-full p-1">
              <button
                @click="toggleLang"
                class="language-btn relative z-10 px-3 py-1 text-sm font-semibold transition-all duration-300 rounded-full"
                :class="
                  lang === 'id'
                    ? 'text-blue-400 bg-gray-800/30'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/20'
                "
              >
                ID</button
              ><button
                @click="toggleLang"
                class="language-btn relative z-10 px-3 py-1 text-sm font-semibold transition-all duration-300 rounded-full"
                :class="
                  lang === 'en'
                    ? 'text-blue-400 bg-gray-800/30'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/20'
                "
              >
                EN
              </button>
            </div>
          </div>
          <div
            class="social-divider h-6 w-px bg-gradient-to-b from-transparent via-gray-600 to-transparent"
          ></div>
          <div class="social-links flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/vincent-axel-20b7b1235/"
              aria-label="LinkedIn"
              class="social-link text-gray-400 hover:text-blue-500 group relative"
              style="animation-delay: 1s"
              ><Icon
                name="mdi:linkedin"
                class="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:scale-110" />
              <div
                class="social-ripple absolute inset-0 bg-blue-500/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"
              ></div>
              <div
                class="social-glow absolute inset-0 bg-blue-500/30 rounded-full blur-md scale-0 group-hover:scale-100 transition-transform duration-300"
              ></div
            ></a>
            <a
              href="https://github.com/rank1unlock"
              aria-label="GitHub"
              class="social-link text-gray-400 hover:text-white group relative"
              style="animation-delay: 1.1s"
              ><Icon
                name="mdi:github"
                class="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
              <div
                class="social-ripple absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"
              ></div>
              <div
                class="social-glow absolute inset-0 bg-white/30 rounded-full blur-md scale-0 group-hover:scale-100 transition-transform duration-300"
              ></div></a
            ><a
              href="https://www.instagram.com/vincentaxelalexandergs/?next=%2F"
              aria-label="Instagram"
              class="social-link text-gray-400 hover:text-pink-500 group relative"
              style="animation-delay: 1.2s"
              ><Icon
                name="mdi:instagram"
                class="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:scale-110" />
              <div
                class="social-ripple absolute inset-0 bg-pink-500/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"
              ></div>
              <div
                class="social-glow absolute inset-0 bg-pink-500/30 rounded-full blur-md scale-0 group-hover:scale-100 transition-transform duration-300"
              ></div></a
            ><a
              href="https://wa.me/6281252850845"
              aria-label="WhatsApp"
              class="social-link text-gray-400 hover:text-green-500 group relative"
              style="animation-delay: 1.3s"
              ><Icon
                name="mdi:whatsapp"
                class="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:scale-110" />
              <div
                class="social-ripple absolute inset-0 bg-green-500/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"
              ></div>
              <div
                class="social-glow absolute inset-0 bg-green-500/30 rounded-full blur-md scale-0 group-hover:scale-100 transition-transform duration-300"
              ></div
            ></a>
          </div>
        </div>

        <button
          @click="toggleMobileMenu"
          class="lg:hidden mobile-menu-btn p-2 rounded-lg hover:bg-gray-800/50 transition-colors duration-300 relative"
        >
          <div
            class="hamburger-container w-6 h-6 flex flex-col justify-center items-center"
          >
            <span
              class="hamburger-line block w-5 h-0.5 bg-white mb-1 transition-all duration-300"
              :class="mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''"
            ></span>
            <span
              class="hamburger-line block w-5 h-0.5 bg-white mb-1 transition-all duration-300"
              :class="mobileMenuOpen ? 'opacity-0' : ''"
            ></span>
            <span
              class="hamburger-line block w-5 h-0.5 bg-white transition-all duration-300"
              :class="mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''"
            ></span>
          </div>
        </button>
      </div>
    </nav>

    <transition name="mobile-menu-transition">
      <div
        v-if="mobileMenuOpen"
        class="mobile-menu-overlay fixed inset-0 bg-black/70 backdrop-blur-sm lg:hidden"
        @click.self="closeMobileMenu"
      >
        <div
          class="mobile-menu-container fixed right-0 top-0 h-full w-full max-w-sm bg-gray-900 shadow-2xl flex flex-col pt-20"
        >
          <div
            class="mobile-menu-header flex items-center justify-between p-4 border-b border-gray-800 absolute top-0 left-0 right-0 bg-gray-900"
          >
            <h2 class="text-xl font-bold text-white">Menu</h2>
            <button
              @click="closeMobileMenu"
              class="p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              <Icon name="mdi:close" class="w-6 h-6 text-gray-400" />
            </button>
          </div>

          <div class="mobile-menu-content overflow-y-auto h-full">
            <nav class="p-4">
              <ul class="space-y-2">
                <li
                  v-for="(item, index) in menuItems"
                  :key="item.hash"
                  class="mobile-nav-item"
                >
                  <a
                    :href="item.hash"
                    @click="handleMobileNavClick(item.hash, $event)"
                    class="mobile-nav-link flex items-center justify-between p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-all duration-200 group"
                  >
                    <span
                      class="text-white font-medium group-hover:text-blue-400 transition-colors"
                    >
                      {{ T.navbar[item.key][lang] }}
                    </span>
                    <Icon
                      name="mdi:chevron-right"
                      class="w-5 h-5 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-200"
                    />
                  </a>
                </li>
              </ul>
            </nav>

            <div class="px-4 py-3">
              <p class="text-gray-400 text-sm mb-3">Language / Bahasa</p>
              <div class="flex bg-gray-800/50 rounded-xl p-1">
                <button
                  @click="toggleLang"
                  class="flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                  :class="
                    lang === 'id'
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  "
                >
                  Indonesia
                </button>
                <button
                  @click="toggleLang"
                  class="flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                  :class="
                    lang === 'en'
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  "
                >
                  English
                </button>
              </div>
            </div>

            <div class="px-4 py-3">
              <p class="text-gray-400 text-sm mb-3">Connect</p>
              <div class="grid grid-cols-4 gap-3">
                <a
                  href="https://www.linkedin.com/in/vincent-axel-20b7b1235/"
                  aria-label="LinkedIn"
                  class="mobile-social-btn bg-gray-800/50 hover:bg-blue-600/20 hover:border-blue-500/50 group"
                  ><Icon
                    name="mdi:linkedin"
                    class="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors"
                /></a>
                <a
                  href="https://github.com/rank1unlock"
                  aria-label="GitHub"
                  class="mobile-social-btn bg-gray-800/50 hover:bg-gray-700 hover:border-gray-600 group"
                  ><Icon
                    name="mdi:github"
                    class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                /></a>
                <a
                  href="https://www.instagram.com/vincentaxelalexandergs/?next=%2F"
                  aria-label="Instagram"
                  class="mobile-social-btn bg-gray-800/50 hover:bg-pink-600/20 hover:border-pink-500/50 group"
                  ><Icon
                    name="mdi:instagram"
                    class="w-5 h-5 text-gray-400 group-hover:text-pink-400 transition-colors"
                /></a>
                <a
                  href="https://wa.me/6281316350886"
                  aria-label="WhatsApp"
                  class="mobile-social-btn bg-gray-800/50 hover:bg-green-600/20 hover:border-green-500/50 group"
                  ><Icon
                    name="mdi:whatsapp"
                    class="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors"
                /></a>
              </div>
            </div>

            <div class="px-4 py-6 mt-auto border-t border-gray-800">
              <p class="text-center text-xs text-gray-500">
                © 2024 Vincent Axel Alexander
              </p>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useLang } from "~/composables/useLang";
import { translations } from "~/data/translations";

const { lang, toggleLang } = useLang();
const T = translations;

const navbar = ref(null);
const isScrolled = ref(false);
const isVisible = ref(true);
const mobileMenuOpen = ref(false);
let lastScrollY = 0;

const menuItems = [
  { key: "home", hash: "#hero" },
  { key: "about", hash: "#about" },
  { key: "gallery", hash: "#gallery" },
  { key: "projects", hash: "#projects" },
  { key: "skills", hash: "#skills" },
  { key: "video", hash: "#video-introduction" },
  { key: "testimonials", hash: "#testimonials" },
  { key: "contact", hash: "#contact" },
];

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  isScrolled.value = currentScrollY > 50;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    isVisible.value = false;
  } else {
    isVisible.value = true;
  }

  lastScrollY = currentScrollY;
};

const smoothScrollTo = (targetId) => {
  const targetElement = document.querySelector(targetId);
  if (!targetElement) return;

  const start = window.pageYOffset;
  const targetPosition =
    targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
  const distance = targetPosition - start;
  const duration = Math.min(Math.abs(distance) / 2, 1200);
  let startTime = null;

  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    const ease = easeInOutCubic(progress);
    window.scrollTo(0, start + distance * ease);

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

const handleNavClick = (hash, event) => {
  event.preventDefault();
  smoothScrollTo(hash);
  history.pushState(null, null, hash);
};

const handleMobileNavClick = (hash, event) => {
  event.preventDefault();
  closeMobileMenu();
  setTimeout(() => {
    smoothScrollTo(hash);
    history.pushState(null, null, hash);
  }, 300);
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
  if (mobileMenuOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
  document.body.style.overflow = "";
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });

  setTimeout(() => {
    if (navbar.value) {
      navbar.value.classList.add("navbar-loaded");
    }
  }, 100);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  document.body.style.overflow = "";
});
</script>

<style lang="postcss" scoped>
/* Main navbar container */
.navbar-container {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

/* Background floating animations - Desktop only */
@keyframes navbar-float-1 {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  25% {
    transform: translate(10px, -8px) rotate(0.5deg) scale(1.02);
  }
  50% {
    transform: translate(-8px, -5px) rotate(-0.3deg) scale(0.98);
  }
  75% {
    transform: translate(-10px, 8px) rotate(0.4deg) scale(1.01);
  }
}

@keyframes navbar-float-2 {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  33% {
    transform: translate(-12px, 10px) rotate(-0.8deg) scale(1.04);
  }
  66% {
    transform: translate(12px, -12px) rotate(0.5deg) scale(0.96);
  }
}

@keyframes navbar-float-3 {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  40% {
    transform: translate(11px, 9px) rotate(1deg) scale(1.05);
  }
  80% {
    transform: translate(-9px, -11px) rotate(-0.5deg) scale(0.95);
  }
}

.animate-navbar-float-1 {
  animation: navbar-float-1 20s ease-in-out infinite;
}
.animate-navbar-float-2 {
  animation: navbar-float-2 18s ease-in-out infinite -4s;
}
.animate-navbar-float-3 {
  animation: navbar-float-3 22s ease-in-out infinite -8s;
}

/* Brand logo animations */
.brand-container {
  opacity: 0;
  animation: navbar-slide-in-left 0.6s ease-out 0.1s both;
}

.brand-container,
.mobile-menu-btn {
  z-index: 10002;
}

@keyframes navbar-slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.brand-text {
  background: linear-gradient(45deg, #fff, #3b82f6, #8b5cf6);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: brand-gradient-shift 3s ease-in-out infinite;
}

@keyframes brand-gradient-shift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Navigation links */
.nav-links-container {
  opacity: 0;
  animation: navbar-fade-in-up 0.6s ease-out 0.2s both;
}

@keyframes navbar-fade-in-up {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.nav-item {
  opacity: 0;
  animation: navbar-nav-slide-in 0.5s ease-out both;
}

@keyframes navbar-nav-slide-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.nav-link {
  @apply relative px-3 py-2 rounded-lg transition-all duration-300 group overflow-hidden;
  position: relative;
}

.nav-text {
  @apply relative z-10 transition-colors duration-300 font-medium text-sm;
}

.nav-link::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    45deg,
    rgba(59, 130, 246, 0.1),
    rgba(139, 92, 246, 0.1)
  );
  border-radius: 8px;
  scale: 0;
  transition: scale 0.3s ease;
}

.nav-link:hover::before {
  scale: 1;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after {
  width: 80%;
}

.nav-link:hover .nav-text {
  @apply text-blue-400;
}

/* Mobile Menu Transitions */
.mobile-menu-transition-enter-active,
.mobile-menu-transition-leave-active {
  transition: opacity 0.3s ease;
}

.mobile-menu-transition-enter-from,
.mobile-menu-transition-leave-to {
  opacity: 0;
}

.mobile-menu-transition-enter-active .mobile-menu-container {
  transition: transform 0.3s ease;
}

.mobile-menu-transition-enter-from .mobile-menu-container {
  transform: translateX(100%);
}

.mobile-menu-transition-enter-to .mobile-menu-container {
  transform: translateX(0);
}

.mobile-menu-transition-leave-active .mobile-menu-container {
  transition: transform 0.3s ease;
}

.mobile-menu-transition-leave-to .mobile-menu-container {
  transform: translateX(100%);
}

/* Mobile Menu Styles */
.mobile-menu-overlay {
  z-index: 99;
}

.mobile-menu-container {
  z-index: 100;
}

.mobile-menu-content {
  scrollbar-width: thin;
  scrollbar-color: rgba(107, 114, 128, 0.5) transparent;
}

.mobile-menu-content::-webkit-scrollbar {
  width: 6px;
}

.mobile-menu-content::-webkit-scrollbar-track {
  background: transparent;
}

.mobile-menu-content::-webkit-scrollbar-thumb {
  background-color: rgba(107, 114, 128, 0.5);
  border-radius: 3px;
}

.mobile-nav-item {
  animation: mobile-nav-slide-in 0.3s ease-out both;
}

@keyframes mobile-nav-slide-in {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.mobile-nav-item:nth-child(1) {
  animation-delay: 0.05s;
}
.mobile-nav-item:nth-child(2) {
  animation-delay: 0.1s;
}
.mobile-nav-item:nth-child(3) {
  animation-delay: 0.15s;
}
.mobile-nav-item:nth-child(4) {
  animation-delay: 0.2s;
}
.mobile-nav-item:nth-child(5) {
  animation-delay: 0.25s;
}
.mobile-nav-item:nth-child(6) {
  animation-delay: 0.3s;
}
.mobile-nav-item:nth-child(7) {
  animation-delay: 0.35s;
}
.mobile-nav-item:nth-child(8) {
  animation-delay: 0.4s;
}

.mobile-social-btn {
  @apply p-3 rounded-xl border border-gray-700/50 transition-all duration-200 flex items-center justify-center;
}

/* Controls container */
.controls-container {
  opacity: 0;
  animation: navbar-slide-in-right 0.6s ease-out 0.3s both;
}

@keyframes navbar-slide-in-right {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Social links animations */
.social-link {
  position: relative;
  padding: 6px;
  border-radius: 50%;
  transition: all 0.3s ease;
  opacity: 0;
  animation: navbar-social-pop-in 0.4s ease-out both;
}

@keyframes navbar-social-pop-in {
  0% {
    opacity: 0;
    transform: scale(0.7) rotate(-90deg);
  }
  70% {
    transform: scale(1.05) rotate(-10deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

/* Hamburger animation */
.hamburger-line {
  transform-origin: center;
}

/* Focus states */
.nav-link:focus,
.social-link:focus,
.mobile-menu-btn:focus,
.mobile-nav-link:focus,
.mobile-social-btn:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
}

/* Performance optimizations */
.nav-link,
.social-link,
.brand-logo,
.language-btn {
  will-change: transform;
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .navbar-float-element,
  .brand-text,
  .nav-particle {
    animation: none;
  }

  .nav-link,
  .social-link,
  .brand-logo,
  .language-btn {
    transition-duration: 0.1s;
  }
}

/* Responsive adjustments */
@media (max-width: 1280px) {
  .nav-text {
    @apply text-sm;
  }

  .nav-link {
    @apply px-2;
  }
}

@media (max-width: 1024px) {
  /* Hide desktop elements on tablet and mobile */
  .nav-links-container,
  .controls-container {
    display: none !important;
  }
}

@media (max-width: 640px) {
  /* Adjust mobile menu for smaller screens */
  .mobile-menu-container {
    max-width: 100%;
    width: 100%;
  }

  .mobile-nav-link {
    @apply p-3;
  }

  .mobile-nav-link span {
    @apply text-base;
  }
}

@media (max-width: 480px) {
  /* Extra small screens */
  .brand-text {
    @apply text-base;
  }

  .mobile-menu-header h2 {
    @apply text-lg;
  }

  .mobile-social-btn {
    @apply p-2;
  }

  .mobile-social-btn svg {
    @apply w-4 h-4;
  }
}

/* Additional hover effects for desktop */
@media (hover: hover) {
  .nav-link:hover {
    transform: translateY(-2px);
  }

  .social-link:hover {
    transform: translateY(-2px);
  }

  .mobile-nav-link:hover {
    transform: translateX(4px);
  }

  .mobile-social-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
}

/* Dark mode enhancements */
.navbar-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

/* Ensure mobile menu is properly positioned */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.mobile-menu-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
}

/* Smooth animations for all interactive elements */
* {
  -webkit-tap-highlight-color: transparent;
}

button,
a {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Additional mobile menu styling */
.mobile-menu-header {
  position: sticky;
  top: 0;
  background: rgb(17 24 39);
  z-index: 10;
}

.mobile-nav-link {
  border: 1px solid transparent;
}

.mobile-nav-link:hover {
  border-color: rgba(59, 130, 246, 0.3);
}

/* Language toggle improvements */
.language-toggle-container button {
  position: relative;
  overflow: hidden;
}

.language-toggle-container button::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(59, 130, 246, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.3s, height 0.3s;
}

.language-toggle-container button:active::before {
  width: 100px;
  height: 100px;
}

/* Mobile social buttons grid layout */
.mobile-social-btn {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Ensure proper z-index stacking */
.navbar-container {
  z-index: 1000;
}

.mobile-menu-overlay {
  z-index: 999;
}

.mobile-menu-container {
  z-index: 10001;
}

/* Prevent scroll when menu is open */
body.menu-open {
  overflow: hidden;
  position: fixed;
  width: 100%;
}

/* Add subtle shadow to mobile menu */
.mobile-menu-container {
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.5);
}

/* Improve text readability */
.mobile-nav-link span,
.mobile-menu-header h2 {
  letter-spacing: 0.025em;
}

/* Add active state for mobile nav links */
.mobile-nav-link:active {
  @apply bg-gray-700;
  transform: scale(0.98);
}

/* Ensure icons are properly sized */
.Icon,
[class*="mdi:"] {
  display: inline-block;
  vertical-align: middle;
}

/* Final styling touches */
.mobile-menu-content {
  padding-bottom: env(safe-area-inset-bottom);
}

.mobile-menu-header {
  padding-top: env(safe-area-inset-top);
}

/* Animation for menu items */
@keyframes slideInFromRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.mobile-nav-item {
  animation: slideInFromRight 0.3s ease-out both;
}

/* Overlay background pattern */
.mobile-menu-overlay::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(
      circle at 20% 50%,
      rgba(59, 130, 246, 0.05) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 80%,
      rgba(139, 92, 246, 0.05) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 40% 20%,
      rgba(34, 211, 238, 0.05) 0%,
      transparent 50%
    );
  pointer-events: none;
}

/* Mobile menu footer sticky positioning */
.mobile-menu-content > div:last-child {
  margin-top: auto;
  position: sticky;
  bottom: 0;
  background: rgb(17 24 39);
}
</style>
