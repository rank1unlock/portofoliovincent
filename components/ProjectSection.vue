<template>
  <section id="projects" class="bg-animated-projects py-20 px-4 overflow-hidden relative">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Floating project icons -->
      <div class="floating-projects">
        <div class="project-icon" v-for="i in 20" :key="i" :style="getProjectIconStyle(i)">
          <div class="project-symbol" :class="getRandomProjectClass()"></div>
        </div>
      </div>
      
      <!-- Technology symbols floating -->
      <div class="floating-tech-symbols">
        <div class="tech-symbol" v-for="(symbol, index) in techSymbols" :key="index" 
             :style="getTechSymbolStyle(index)" v-text="symbol"></div>
      </div>

      <!-- Circuit pattern overlay -->
      <div class="circuit-pattern-overlay"></div>
      
      <!-- Energy pulse lines effect -->
      <div class="energy-pulse-lines">
        <div class="pulse-line" v-for="i in 4" :key="i" :style="getPulseLineStyle(i)"></div>
      </div>
    </div>

    <!-- Main content -->
    <div class="container mx-auto relative z-10">
      <!-- Enhanced title with energy effect -->
      <div class="text-center mb-16 relative">
        <h2 
          ref="titleRef"
          class="text-4xl md:text-5xl lg:text-6xl font-bold animated-gradient-text enhanced-project-title mb-4"
          @mouseenter="createEnergyBurst"
        >
          {{ T.projects.title[lang] }}
        </h2>
        
        <!-- Title decorative elements -->
        <div class="title-decorations">
          <div class="title-energy-line left-energy"></div>
          <div class="title-energy-line right-energy"></div>
          <div class="title-energy-core"></div>
        </div>
        
        <!-- Energy burst container -->
        <div ref="energyContainer" class="energy-container"></div>
        
        <!-- Enhanced description with matrix effect -->
        <div class="description-container mt-6">
          <p 
            ref="descriptionRef"
            class="text-gray-300 text-lg max-w-3xl mx-auto enhanced-project-description"
          >
            <span class="description-text">{{ T.projects.description[lang] }}</span>
            <span class="matrix-cursor"></span>
          </p>
          
          <!-- Description energy field -->
          <div class="description-energy-field"></div>
        </div>
      </div>

      <!-- Enhanced Swiper with project-specific effects -->
      <div class="swiper-container-wrapper relative">
        <!-- Project energy field -->
        <div class="project-energy-field"></div>
        
        <!-- Enhanced Custom navigation -->
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
            pauseOnMouseEnter: true,
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
              <!-- Dynamic image/icon rendering -->
              <div 
                v-if="project.useIcon" 
                :class="['project-icon-container w-full h-64 bg-gradient-to-br flex items-center justify-center relative overflow-hidden group cursor-pointer', project.gradientFrom, project.gradientTo]"
              >
                <!-- Animated background pattern -->
                <div class="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                  <!-- Orbiting background icons -->
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
                  
                  <!-- Floating tech particles -->
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
                
                <!-- Main icon with tech effects -->
                <div class="relative z-20 text-center transform group-hover:scale-110 transition-all duration-500 ease-out">
                  <!-- Glow layers -->
                  <div class="absolute inset-0">
                    <div class="absolute -inset-8 bg-white/10 rounded-full blur-3xl animate-tech-glow-outer"></div>
                    <div class="absolute -inset-4 bg-white/15 rounded-full blur-2xl animate-tech-glow-middle"></div>
                    <div class="absolute -inset-2 bg-white/20 rounded-full blur-xl animate-tech-glow-inner"></div>
                  </div>
                  
                  <!-- Main icon -->
                  <div class="relative animate-tech-levitate">
                    <Icon 
                      :name="project.mainIcon" 
                      class="relative w-28 h-28 text-white mx-auto mb-4 drop-shadow-2xl filter brightness-125 contrast-110 transition-all duration-500 group-hover:scale-110" 
                    />
                    
                    <!-- Tech reflection -->
                    <div class="absolute inset-0 opacity-12 blur-sm transform translate-y-2">
                      <Icon :name="project.mainIcon" class="w-28 h-28 text-white/40 mx-auto" />
                    </div>
                  </div>
                  
                  <!-- Tech label -->
                  <div class="relative">
                    <h4 class="text-white text-sm font-bold tracking-widest uppercase animate-tech-fade-in-up transform group-hover:scale-110 transition-all duration-300 drop-shadow-lg">
                      {{ project.iconLabel }}
                    </h4>
                    
                    <!-- Decorative elements -->
                    <div class="flex justify-center items-center mt-4 space-x-3">
                      <div class="w-8 h-0.5 bg-white/80 rounded-full animate-tech-expand-contract"></div>
                      <div class="w-2 h-2 bg-white/90 rounded-full animate-tech-pulse-core"></div>
                      <div class="w-8 h-0.5 bg-white/80 rounded-full animate-tech-expand-contract"></div>
                    </div>
                  </div>
                </div>
                
                <!-- Tech overlay effects -->
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent opacity-0 group-hover:opacity-100 animate-tech-shimmer"></div>
                <div class="absolute inset-0 rounded-xl border-2 border-white/25 opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
              </div>
              
              <!-- Regular image fallback -->
              <img 
                v-else 
                :src="project.imageUrl" 
                :alt="project.title[lang]" 
                class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              >
              
              <!-- Card content -->
              <div class="project-card-content p-6 flex flex-col flex-grow relative bg-gradient-to-b from-gray-800 to-gray-900">
                <div class="card-energy-glow"></div>
                
                <h3 class="project-title text-2xl font-bold text-white mb-3 relative">
                  {{ project.title[lang] }}
                  <div class="title-tech-underline"></div>
                </h3>
                
                <p class="project-description text-gray-400 mb-4 text-sm flex-grow relative leading-relaxed">
                  {{ project.description[lang] }}
                </p>
                
                <!-- Tech stack -->
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
                
                <!-- Buttons -->
                <div class="project-buttons mt-auto flex justify-between gap-3">
                  <a 
                    :href="project.githubUrl" 
                    target="_blank"
                    rel="noopener noreferrer"
                    class="tech-button github-button inline-flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2.5 px-5 rounded-lg transition-all duration-300 relative overflow-hidden flex-1"
                  >
                    <Icon name="mdi:github" class="w-5 h-5" />
                    <span>GitHub</span>
                    <div class="button-tech-shine"></div>
                  </a>
                  
                  <button 
                    v-if="project.canvaEmbedUrl || project.liveUrl" 
                    @click="openModal(project)"
                    class="tech-button demo-button inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-lg transition-all duration-300 relative overflow-hidden flex-1"
                  >
                    <Icon name="mdi:presentation-play" class="w-5 h-5" />
                    <span>{{ project.canvaEmbedUrl ? (lang === 'id' ? 'Lihat' : 'View') : (lang === 'id' ? 'Demo Langsung' : 'Live Demo') }}</span>
                    <div class="button-tech-shine"></div>
                    <div class="button-energy-ripple"></div>
                  </button>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>

        <!-- Custom tech pagination -->
        <div class="custom-tech-pagination mt-8">
          <button
            v-for="(project, index) in projects" 
            :key="`tech-dot-${project.id}`"
            class="tech-pagination-dot"
            :class="{ 'active': activeSlideIndex === index }"
            @click="goToSlide(index)"
            :aria-label="`Go to project ${index + 1}`"
          >
            <div class="dot-energy-ring"></div>
          </button>
        </div>
      </div>

      <!-- Project statistics -->
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

    <!-- Tech floating elements -->
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
          <div 
            class="tech-cube" 
            v-for="i in 4" 
            :key="i" 
            :style="{ animationDelay: `${i * 0.6}s` }"
          >
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

    <!-- Modal untuk menampilkan presentasi -->
    <Teleport to="body">
      <Transition name="modal">
        <div 
          v-if="showModal" 
          class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          @click="closeModal"
        >
          <div 
            class="bg-gray-800 rounded-2xl w-full max-w-6xl max-h-[90vh] flex flex-col shadow-2xl border border-gray-700"
            @click.stop
          >
            <!-- Header modal -->
            <div class="flex justify-between items-center p-5 border-b border-gray-700 bg-gray-900/50 rounded-t-2xl">
              <h3 class="text-xl font-bold text-white">{{ selectedProject?.title?.[lang] }}</h3>
              <button 
                @click="closeModal"
                class="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-700"
                aria-label="Close modal"
              >
                <Icon name="mdi:close" class="w-6 h-6" />
              </button>
            </div>
            
            <!-- Content modal -->
            <div class="flex-1 p-4 overflow-hidden">
              <!-- Canva Presentation Embed -->
              <div 
                v-if="selectedProject?.canvaEmbedUrl"
                class="w-full h-full rounded-lg overflow-hidden"
                style="position: relative; width: 100%; height: 100%;"
              >
                <iframe 
                  :src="selectedProject.canvaEmbedUrl" 
                  style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none;"
                  allowfullscreen="allowfullscreen" 
                  allow="fullscreen"
                  loading="lazy"
                ></iframe>
              </div>
              
              <!-- Fallback untuk live URL -->
              <div v-else-if="selectedProject?.liveUrl" class="w-full h-full">
                <iframe 
                  :src="selectedProject.liveUrl" 
                  class="w-full h-full border-none rounded-lg"
                  allowfullscreen="allowfullscreen"
                ></iframe>
              </div>
            </div>
            
            <!-- Footer modal -->
            <div 
              v-if="selectedProject?.canvaExternalUrl" 
              class="p-5 border-t border-gray-700 bg-gray-900/50 rounded-b-2xl"
            >
              <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div class="text-sm text-gray-300">
                  <span v-if="selectedProject?.canvaTitle">{{ selectedProject.canvaTitle }}</span>
                  <span v-if="selectedProject?.canvaAuthor" class="text-gray-400"> by {{ selectedProject.canvaAuthor }}</span>
                </div>
                <a 
                  :href="selectedProject.canvaExternalUrl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors group"
                >
                  <Icon name="mdi:open-in-new" class="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Open in Canva</span>
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
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';
import { useLang } from '~/composables/useLang';
import { translations } from '~/data/translations';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Setup untuk bahasa - Component ini full support untuk multi-language (Indonesia & English)
const { lang } = useLang();
const T = translations;
const modules = [Navigation, Pagination, Autoplay];

// State
const showModal = ref(false);
const selectedProject = ref(null);
const titleRef = ref(null);
const descriptionRef = ref(null);
const energyContainer = ref(null);
const swiperRef = ref(null);
const projectStatNumbers = ref([]);
const activeSlideIndex = ref(0);
const swiperInstance = ref(null);

// Tech symbols for floating animation
const techSymbols = ['{', '}', '<>', '</>', 'npm', 'API', '{}', '[]', '()', '=>', '===', '!==', '&&', '||', 'fn', 'var'];

// Project statistics
const projectStatistics = ref([
  { value: '5+', label: { id: 'Projects', en: 'Projects' } },
  { value: '10+', label: { id: 'Technologies', en: 'Technologies' } },
  { value: '100%', label: { id: 'Completion', en: 'Completion' } }
]);

// Modal functions
const openModal = (project) => {
  selectedProject.value = project;
  showModal.value = true;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  showModal.value = false;
  selectedProject.value = null;
  document.body.style.overflow = 'auto';
};

// Animation helper functions
const getProjectIconStyle = (index) => {
  const delay = Math.random() * 10;
  const duration = 15 + Math.random() * 10;
  const size = 12 + Math.random() * 8;
  
  return {
    left: Math.random() * 100 + '%',
    animationDelay: delay + 's',
    animationDuration: duration + 's',
    width: size + 'px',
    height: size + 'px'
  };
};

const getRandomProjectClass = () => {
  const classes = ['project-code', 'project-gear', 'project-chip', 'project-circuit'];
  return classes[Math.floor(Math.random() * classes.length)];
};

const getTechSymbolStyle = (index) => {
  const delay = Math.random() * 12;
  const duration = 20 + Math.random() * 15;
  
  return {
    left: Math.random() * 100 + '%',
    animationDelay: delay + 's',
    animationDuration: duration + 's',
    fontSize: (10 + Math.random() * 6) + 'px'
  };
};

const getPulseLineStyle = (index) => {
  return {
    animationDelay: `${index * 1.5}s`,
    animationDuration: '6s',
    left: `${index * 25}%`
  };
};

// Swiper functions
const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

const onSlideChange = (swiper) => {
  activeSlideIndex.value = swiper.realIndex;
};

const onProjectHover = (index) => {
  // Add hover effects if needed
};

const onProjectLeave = (index) => {
  // Remove hover effects if needed
};

const previousSlide = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slidePrev();
  }
};

const nextSlide = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slideNext();
  }
};

const goToSlide = (index) => {
  if (swiperInstance.value) {
    swiperInstance.value.slideToLoop(index);
  }
};

// Energy burst effect
const createEnergyBurst = (event) => {
  if (!energyContainer.value) return;
  
  const rect = event.target.getBoundingClientRect();
  const containerRect = energyContainer.value.getBoundingClientRect();
  
  for (let i = 0; i < 12; i++) {
    const energy = document.createElement('div');
    energy.className = 'energy-burst-effect';
    
    const x = event.clientX - containerRect.left + (Math.random() - 0.5) * 80;
    const y = event.clientY - containerRect.top + (Math.random() - 0.5) * 80;
    
    energy.style.left = x + 'px';
    energy.style.top = y + 'px';
    
    energyContainer.value.appendChild(energy);
    
    setTimeout(() => {
      if (energy.parentNode) {
        energy.parentNode.removeChild(energy);
      }
    }, 1000);
  }
};

// Counter animation for project stats
const animateProjectCounters = () => {
  projectStatNumbers.value.forEach((element, index) => {
    if (!element) return;
    
    const stat = projectStatistics.value[index];
    const targetText = stat.value;
    const hasNumber = /\d/.test(targetText);
    
    if (!hasNumber) {
      element.textContent = targetText;
      return;
    }
    
    const targetNum = parseInt(targetText.match(/\d+/)[0]);
    const suffix = targetText.replace(/\d+/, '');
    let current = 0;
    
    const increment = targetNum / 40;
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNum) {
        element.textContent = targetNum + suffix;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current) + suffix;
      }
    }, 60);
  });
};

// Intersection Observer
let observer;

const setupIntersectionObserver = () => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('enhanced-project-title')) {
          entry.target.classList.add('title-visible');
        }
        if (entry.target.classList.contains('project-stats-grid')) {
          animateProjectCounters();
        }
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
  });
  
  if (titleRef.value) observer.observe(titleRef.value);
  
  nextTick(() => {
    const statsGrid = document.querySelector('.project-stats-grid');
    if (statsGrid) observer.observe(statsGrid);
  });
};

onMounted(() => {
  setupIntersectionObserver();
});

onUnmounted(() => {
  document.body.style.overflow = 'auto';
  if (observer) {
    observer.disconnect();
  }
});

// Project Data
const projects = ref([
   {
    id: 1,
    title: T.value.projects.cards.portfolio.title,
    description: T.value.projects.cards.portfolio.description,
    useIcon: true,
    mainIcon: 'mdi:account-circle',
    iconLabel: 'Personal Portfolio',
    backgroundIcons: ['mdi:code-tags', 'mdi:palette', 'mdi:responsive', 'mdi:star'],
    gradientFrom: 'from-purple-600',
    gradientTo: 'to-pink-600',
    stack: ['HTML5','CSS3','JavaScript', 'Vue.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/USERNAMEANDA/NAMA-REPO-PORTO',
    canvaEmbedUrl: 'https://www.canva.com/design/DAGwtGsPouw/d92nGByXw9YGBAWQhw34Rg/view?embed',
    canvaExternalUrl: 'https://www.canva.com/design/DAGwtGsPouw/d92nGByXw9YGBAWQhw34Rg/view?utm_content=DAGwtGsPouw&utm_campaign=designshare&utm_medium=embeds&utm_source=link',
    canvaTitle: 'Presentation - Personal Website Project Showcase',
    canvaAuthor: 'Vincent axel',
    liveUrl: null
  },
  {
    id: 2,
    title: T.value.projects.cards.store_system.title,
    description: T.value.projects.cards.store_system.description,
    useIcon: true,
    mainIcon: 'mdi:food-apple',
    iconLabel: 'Food Ingredients Prediction',
    backgroundIcons: ['mdi:chart-line', 'mdi:brain', 'mdi:database', 'mdi:test-tube'],
    gradientFrom: 'from-green-600',
    gradientTo: 'to-blue-600',
    stack: ['HTML5', 'CSS3','JavaScript', 'PHP', 'MySQL'],
    githubUrl: 'https://github.com/rank1unlock/Projek_Prediksi_Bahan_Pangan',
    canvaEmbedUrl: 'https://www.canva.com/design/DAGwmGb1k5I/n-P6C6ABnJ2mGrQixojssQ/view?embed',
    canvaExternalUrl: 'https://www.canva.com/design/DAGwmGb1k5I/n-P6C6ABnJ2mGrQixojssQ/view?utm_content=DAGwmGb1k5I&utm_campaign=designshare&utm_medium=embeds&utm_source=link',
    canvaTitle: 'Presentation - Website Prediction Project: Food Ingredients',
    canvaAuthor: 'Vincent axel',
    liveUrl: null
  },
  {
    id: 3,
    title: T.value.projects.cards.weather_app.title,
    description: T.value.projects.cards.weather_app.description,
    useIcon: true,
    mainIcon: 'mdi:spa',
    iconLabel: 'Spa Wellness Chatbot',
    backgroundIcons: ['mdi:chat', 'mdi:leaf', 'mdi:heart-pulse', 'mdi:meditation'],
    gradientFrom: 'from-teal-500',
    gradientTo: 'to-cyan-600',
    stack: ['JavaScript', 'HTML5', 'CSS3', 'PHP','MySQL'],
    githubUrl: 'https://github.com/rank1unlock/Chatbot_ci3',
    canvaEmbedUrl: 'https://www.canva.com/design/DAGwrYBhh0Y/54rqMMfUDSlYA_5gaJeTNw/view?embed',
    canvaExternalUrl: 'https://www.canva.com/design/DAGwrYBhh0Y/54rqMMfUDSlYA_5gaJeTNw/view?utm_content=DAGwrYBhh0Y&utm_campaign=designshare&utm_medium=embeds&utm_source=link',
    canvaTitle: 'Presentation - Spa Wellness Chatbot Program',
    canvaAuthor: 'Vincent axel',
    liveUrl: null
  },
  {
    id: 4,
    title: T.value.projects.cards.company_profile.title,
    description: T.value.projects.cards.company_profile.description,
    useIcon: true,
    mainIcon: 'mdi:storefront',
    iconLabel: 'E-commerce Website',
    backgroundIcons: ['mdi:shopping-cart', 'mdi:credit-card', 'mdi:package-variant', 'mdi:trending-up'],
    gradientFrom: 'from-orange-500',
    gradientTo: 'to-red-600',
    stack: ['HTML5', 'CSS3', 'JavaScript','Python','Django'],
    githubUrl: 'https://github.com/rank1unlock/E-Commerce_Program',
    canvaEmbedUrl: 'https://www.canva.com/design/DAGwtNeprNY/IWTSuSwQRdSr4Teu-FM7UQ/view?embed',
    canvaExternalUrl: 'https://www.canva.com/design/DAGwtNeprNY/IWTSuSwQRdSr4Teu-FM7UQ/view?utm_content=DAGwtNeprNY&utm_campaign=designshare&utm_medium=embeds&utm_source=link',
    canvaTitle: 'Presentation - E-commerce Website Project Overview',
    canvaAuthor: 'Vincent axel',
    liveUrl: null
  },
   {
    id: 5,
    title: T.value.projects.cards.chatbot_bert.title,
    description: T.value.projects.cards.chatbot_bert.description,
    useIcon: true,
    mainIcon: 'mdi:chat',
    iconLabel: 'Academic Chatbot',
    backgroundIcons: ['mdi:chat', 'mdi:book-open', 'mdi:brain', 'mdi:test-tube'],
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-indigo-600',
    stack: ['Python', 'BERT Algorithm', 'CodeIgniter', 'MySQL'],
    githubUrl: 'https://github.com/rank1unlock/Chatbot_Akademik',
    canvaEmbedUrl: 'https://www.canva.com/design/DAG8l5BBtvY/view?embed',
    canvaExternalUrl: 'https://www.canva.com/design/DAG8l5BBtvY/bilpJjOm8-R0RkJky4c7gA/view?utm_content=DAG8l5BBtvY&utm_campaign=designshare&utm_medium=embeds&utm_source=link',
    canvaTitle: 'Presentation - Academic Chatbot Project',
    canvaAuthor: 'Vincent Axel',
    liveUrl: null
  },
]);
</script>

<style scoped>
/* ===================================
   BACKGROUND & BASE STYLES
   =================================== */
.bg-animated-projects {
  background: linear-gradient(-45deg, #0f172a, #1e293b, #111827, #1f2937, #374151, #0c1220);
  background-size: 600% 600%;
  animation: project-gradient-move 30s ease-in-out infinite;
  position: relative;
  min-height: 100vh;
}

@keyframes project-gradient-move {
  0%, 100% { background-position: 0% 50%; }
  16.66% { background-position: 100% 25%; }
  33.33% { background-position: 80% 75%; }
  50% { background-position: 20% 100%; }
  66.66% { background-position: 100% 60%; }
  83.33% { background-position: 40% 20%; }
}

/* ===================================
   FLOATING PROJECT ICONS
   =================================== */
.floating-projects {
  position: absolute;
  width: 100%;
  height: 100%;
}

.project-icon {
  position: absolute;
  animation: float-project linear infinite;
}

.project-symbol {
  width: 100%;
  height: 100%;
  border-radius: 3px;
  position: relative;
}

.project-code {
  background: linear-gradient(45deg, rgba(59, 130, 246, 0.4), rgba(139, 92, 246, 0.3));
}

.project-code::before {
  content: '</>';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(255, 255, 255, 0.8);
  font-size: 8px;
  font-family: 'Fira Code', monospace;
}

.project-gear {
  background: linear-gradient(45deg, rgba(34, 197, 94, 0.4), rgba(59, 130, 246, 0.3));
  border-radius: 50%;
}

.project-gear::before {
  content: '⚙';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(255, 255, 255, 0.8);
  font-size: 10px;
}

.project-chip {
  background: linear-gradient(45deg, rgba(168, 85, 247, 0.4), rgba(236, 72, 153, 0.3));
}

.project-chip::before {
  content: '□';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(255, 255, 255, 0.8);
  font-size: 8px;
}

.project-circuit {
  background: linear-gradient(45deg, rgba(245, 158, 11, 0.4), rgba(239, 68, 68, 0.3));
  border-radius: 2px;
}

.project-circuit::before {
  content: '◊';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(255, 255, 255, 0.8);
  font-size: 9px;
}

@keyframes float-project {
  0% {
    transform: translateY(100vh) rotate(0deg) scale(0.8);
    opacity: 0;
  }
  5% {
    opacity: 0.9;
  }
  95% {
    opacity: 0.9;
  }
  100% {
    transform: translateY(-100px) rotate(360deg) scale(1.2);
    opacity: 0;
  }
}

/* ===================================
   FLOATING TECH SYMBOLS
   =================================== */
.floating-tech-symbols {
  position: absolute;
  width: 100%;
  height: 100%;
}

.tech-symbol {
  position: absolute;
  color: rgba(59, 130, 246, 0.5);
  font-family: 'Fira Code', monospace;
  font-weight: 700;
  animation: float-tech-symbol linear infinite;
  text-shadow: 0 0 15px rgba(59, 130, 246, 0.4);
}

@keyframes float-tech-symbol {
  0% {
    transform: translateY(100vh) translateX(0px) rotate(0deg) scale(0.8);
    opacity: 0;
  }
  3% {
    opacity: 1;
  }
  97% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) translateX(80px) rotate(180deg) scale(1.3);
    opacity: 0;
  }
}

/* ===================================
   CIRCUIT PATTERN & PULSE LINES
   =================================== */
.circuit-pattern-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px),
    linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
    radial-gradient(circle at 20px 20px, rgba(139, 92, 246, 0.05) 2px, transparent 2px),
    radial-gradient(circle at 80px 80px, rgba(34, 197, 94, 0.04) 2px, transparent 2px);
  background-size: 40px 40px, 40px 40px, 80px 80px, 120px 120px;
  animation: circuit-pattern-move 40s linear infinite;
}

@keyframes circuit-pattern-move {
  0% { transform: translate(0, 0) rotate(0deg); }
  100% { transform: translate(40px, 40px) rotate(360deg); }
}

.energy-pulse-lines {
  position: absolute;
  width: 100%;
  height: 100%;
}

.pulse-line {
  position: absolute;
  width: 3px;
  height: 100%;
  background: linear-gradient(0deg, transparent, rgba(59, 130, 246, 0.8), transparent);
  animation: energy-pulse linear infinite;
  filter: blur(2px);
}

@keyframes energy-pulse {
  0% {
    transform: translateY(100vh) scaleY(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
    transform: translateY(80vh) scaleY(1);
  }
  90% {
    opacity: 1;
    transform: translateY(-20vh) scaleY(1);
  }
  100% {
    transform: translateY(-100vh) scaleY(0);
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
  filter: drop-shadow(0 4px 8px rgba(59, 130, 246, 0.3));
}

.enhanced-project-title.title-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

@keyframes project-title-gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  20% { background-position: 100% 30%; }
  40% { background-position: 80% 80%; }
  60% { background-position: 20% 100%; }
  80% { background-position: 100% 70%; }
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

.title-energy-core {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 80px;
  background: radial-gradient(ellipse, rgba(59, 130, 246, 0.25), rgba(139, 92, 246, 0.1), transparent);
  border-radius: 50%;
  animation: title-energy-core-pulse 5s ease-in-out infinite;
  filter: blur(25px);
}

@keyframes title-energy-core-pulse {
  0%, 100% { 
    transform: translate(-50%, -50%) scale(0.7);
    opacity: 0.4;
  }
  50% { 
    transform: translate(-50%, -50%) scale(1.3);
    opacity: 0.7;
  }
}

/* ===================================
   ENERGY BURST EFFECT
   =================================== */
.energy-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: visible;
}

.energy-burst-effect {
  position: absolute;
  width: 4px;
  height: 4px;
  background: radial-gradient(circle, #fff, #3b82f6, #8b5cf6);
  border-radius: 50%;
  animation: energy-burst 1s ease-out forwards;
  pointer-events: none;
  z-index: 15;
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.8);
}

@keyframes energy-burst {
  0% {
    opacity: 1;
    transform: scale(0) rotate(0deg);
    filter: brightness(3);
  }
  40% {
    opacity: 1;
    transform: scale(1.5) rotate(180deg);
    filter: brightness(2);
  }
  100% {
    opacity: 0;
    transform: scale(0) rotate(360deg) translate(50px, -50px);
    filter: brightness(0.5);
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
  0%, 45% { opacity: 1; }
  46%, 100% { opacity: 0; }
}

.description-energy-field {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85%;
  height: 50px;
  background: radial-gradient(ellipse, rgba(139, 92, 246, 0.15), rgba(59, 130, 246, 0.1), transparent);
  border-radius: 25px;
  animation: description-energy-pulse 7s ease-in-out infinite;
  filter: blur(20px);
}

@keyframes description-energy-pulse {
  0%, 100% { 
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0.3;
  }
  50% { 
    transform: translate(-50%, -50%) scale(1.4);
    opacity: 0.6;
  }
}

/* ===================================
   SWIPER CONTAINER
   =================================== */
.swiper-container-wrapper {
  position: relative;
  padding: 15px 0;
}

.project-energy-field {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95%;
  height: 450px;
  background: radial-gradient(ellipse, rgba(59, 130, 246, 0.08), rgba(139, 92, 246, 0.06), transparent);
  border-radius: 25px;
  animation: project-energy-field-pulse 10s ease-in-out infinite;
  filter: blur(35px);
}

@keyframes project-energy-field-pulse {
  0%, 100% { 
    transform: translate(-50%, -50%) scale(0.85);
    opacity: 0.4;
  }
  50% { 
    transform: translate(-50%, -50%) scale(1.15);
    opacity: 0.7;
  }
}

/* ===================================
   NAVIGATION ARROWS
   =================================== */
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
  mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transform: scale(0.7) rotate(0deg);
  transition: all 0.5s ease;
}

.nav-ripple-effect {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%);
  transform: scale(0);
  transition: transform 0.6s ease;
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

.enhanced-nav-arrow:active .nav-ripple-effect {
  transform: scale(1);
}

.enhanced-nav-arrow:active {
  transform: translateY(-50%) scale(1.05);
}

/* ===================================
   SWIPER SLIDES
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

.enhanced-project-swiper .swiper-slide-next,
.enhanced-project-swiper .swiper-slide-prev {
  opacity: 0.75;
  transform: scale(0.95);
}

/* ===================================
   PROJECT CARD
   =================================== */
.project-card {
  background: linear-gradient(145deg, #1f2937, #111827);
  border: 1px solid rgba(59, 130, 246, 0.15);
  position: relative;
  overflow: hidden;
  transform-origin: center;
  backface-visibility: hidden;
  perspective: 1000px;
  height: 100%;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.6), transparent);
  transform: translateX(-100%);
  transition: transform 1s ease;
}

.project-card:hover::before {
  transform: translateX(100%);
}

.project-card.active-project-slide {
  border-color: rgba(59, 130, 246, 0.4);
  box-shadow: 
    0 30px 60px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(59, 130, 246, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

/* ===================================
   PROJECT ICON CONTAINER
   =================================== */
.project-icon-container {
  position: relative;
  overflow: hidden;
}

/* ===================================
   TECH ANIMATIONS
   =================================== */
@keyframes tech-orbit-1 {
  0% { transform: rotate(0deg) translateX(18px) rotate(0deg) scale(0.9); }
  50% { transform: rotate(180deg) translateX(22px) rotate(-180deg) scale(1.2); }
  100% { transform: rotate(360deg) translateX(18px) rotate(-360deg) scale(0.9); }
}

@keyframes tech-orbit-2 {
  0% { transform: rotate(0deg) translateX(-15px) rotate(0deg) scale(0.8); }
  50% { transform: rotate(180deg) translateX(-18px) rotate(-180deg) scale(1.1); }
  100% { transform: rotate(360deg) translateX(-15px) rotate(-360deg) scale(0.8); }
}

@keyframes tech-orbit-3 {
  0% { transform: rotate(90deg) translateX(16px) rotate(-90deg) scale(0.9); }
  50% { transform: rotate(270deg) translateX(20px) rotate(-270deg) scale(1.1); }
  100% { transform: rotate(450deg) translateX(16px) rotate(-450deg) scale(0.9); }
}

@keyframes tech-orbit-4 {
  0% { transform: rotate(45deg) translateX(-12px) rotate(-45deg) scale(0.8); }
  50% { transform: rotate(225deg) translateX(-16px) rotate(-225deg) scale(1.05); }
  100% { transform: rotate(405deg) translateX(-12px) rotate(-405deg) scale(0.8); }
}

.animate-tech-orbit-1 { animation: tech-orbit-1 12s ease-in-out infinite; }
.animate-tech-orbit-2 { animation: tech-orbit-2 10s ease-in-out infinite reverse; }
.animate-tech-orbit-3 { animation: tech-orbit-3 14s ease-in-out infinite; }
.animate-tech-orbit-4 { animation: tech-orbit-4 11s ease-in-out infinite reverse; }

@keyframes tech-float-1 {
  0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.25; }
  50% { transform: translateY(-12px) translateX(4px) scale(1.3); opacity: 0.4; }
}

@keyframes tech-float-2 {
  0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); opacity: 0.3; }
  50% { transform: translateY(-8px) rotate(120deg) scale(1.4); opacity: 0.45; }
}

@keyframes tech-float-3 {
  0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.2; }
  50% { transform: translateY(-15px) translateX(6px) rotate(60deg); opacity: 0.35; }
}

.animate-tech-float-1 { animation: tech-float-1 6s ease-in-out infinite; }
.animate-tech-float-2 { animation: tech-float-2 7s ease-in-out infinite; }
.animate-tech-float-3 { animation: tech-float-3 8s ease-in-out infinite; }

@keyframes tech-levitate {
  0%, 100% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-6px) scale(1.03); }
}

@keyframes tech-glow-outer {
  0%, 100% { transform: scale(1); opacity: 0.1; }
  50% { transform: scale(1.2); opacity: 0.2; }
}

@keyframes tech-glow-middle {
  0%, 100% { transform: scale(1); opacity: 0.15; }
  50% { transform: scale(1.15); opacity: 0.25; }
}

@keyframes tech-glow-inner {
  0%, 100% { transform: scale(1); opacity: 0.2; }
  50% { transform: scale(1.1); opacity: 0.3; }
}

@keyframes tech-fade-in-up {
  0% { opacity: 0; transform: translateY(12px); }
  100% { opacity: 1; transform: translateY(0px); }
}

@keyframes tech-expand-contract {
  0%, 100% { width: 2rem; opacity: 0.8; }
  50% { width: 2.5rem; opacity: 1; }
}

@keyframes tech-pulse-core {
  0%, 100% { opacity: 0.9; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.3); }
}

@keyframes tech-shimmer {
  0% { transform: translateX(-100%); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateX(100%); opacity: 0; }
}

@keyframes bounce-tech {
  0%, 100% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-8px) scale(1.15); }
}

@keyframes pulse-tech {
  0%, 100% { transform: scale(0.9); }
  50% { transform: scale(1.2); }
}

@keyframes ping-tech {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.3); opacity: 0.7; }
}

.animate-tech-levitate { animation: tech-levitate 5s ease-in-out infinite; }
.animate-tech-glow-outer { animation: tech-glow-outer 4s ease-in-out infinite; }
.animate-tech-glow-middle { animation: tech-glow-middle 4s ease-in-out infinite; }
.animate-tech-glow-inner { animation: tech-glow-inner 4s ease-in-out infinite; }
.animate-tech-fade-in-up { animation: tech-fade-in-up 1s ease-out; }
.animate-tech-expand-contract { animation: tech-expand-contract 4s ease-in-out infinite; }
.animate-tech-pulse-core { animation: tech-pulse-core 3s ease-in-out infinite; }
.animate-tech-shimmer { animation: tech-shimmer 4s ease-in-out infinite; }
.animate-bounce-tech { animation: bounce-tech 4s ease-in-out infinite; }
.animate-pulse-tech { animation: pulse-tech 4s ease-in-out infinite; }
.animate-ping-tech { animation: ping-tech 3s ease-in-out infinite; }

/* ===================================
   CARD CONTENT
   =================================== */
.project-card-content {
  position: relative;
  backdrop-filter: blur(10px);
}

.card-energy-glow {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  height: 80px;
  background: radial-gradient(ellipse, rgba(59, 130, 246, 0.12), transparent);
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.6s ease;
  filter: blur(20px);
  pointer-events: none;
}

.project-card:hover .card-energy-glow {
  opacity: 1;
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

.project-description {
  transition: all 0.4s ease;
}

.project-card:hover .project-description {
  color: #9ca3af;
}

/* ===================================
   TECH BADGES
   =================================== */
.tech-badge {
  position: relative;
  border: 1px solid rgba(59, 130, 246, 0.3);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(10px);
  animation: tech-badge-appear 0.5s ease-out forwards;
}

@keyframes tech-badge-appear {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.tech-badge:hover {
  background: rgba(59, 130, 246, 0.2);
  border-color: #3b82f6;
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

/* ===================================
   BUTTONS
   =================================== */
.tech-button {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(59, 130, 246, 0.3);
  backdrop-filter: blur(10px);
  transform: translateY(0);
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.button-tech-shine {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transform: translateX(-100%);
  transition: transform 0.8s ease;
}

.tech-button:hover .button-tech-shine {
  transform: translateX(100%);
}

.button-energy-ripple {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%);
  transform: scale(0);
  transition: transform 0.8s ease;
  border-radius: inherit;
}

.tech-button:active .button-energy-ripple {
  transform: scale(1);
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
  overflow: hidden;
}

.dot-energy-ring {
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ef4444);
  opacity: 0;
  transition: all 0.4s ease;
  z-index: -1;
  animation: dot-energy-rotate 3s linear infinite paused;
}

.tech-pagination-dot:hover {
  background: rgba(59, 130, 246, 0.7);
  transform: scale(1.3);
  border-color: rgba(59, 130, 246, 0.4);
}

.tech-pagination-dot:hover .dot-energy-ring {
  opacity: 0.6;
  animation-play-state: running;
}

.tech-pagination-dot.active {
  background: #3b82f6;
  transform: scale(1.4);
  box-shadow: 0 0 25px rgba(59, 130, 246, 0.5);
  border-color: rgba(139, 92, 246, 0.6);
}

.tech-pagination-dot.active .dot-energy-ring {
  opacity: 0.8;
  animation-play-state: running;
}

@keyframes dot-energy-rotate {
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.1); }
  100% { transform: rotate(360deg) scale(1); }
}

/* ===================================
   PROJECT STATISTICS
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
  background: rgba(17, 24, 39, 0.4);
  border-radius: 25px;
  border: 1px solid rgba(59, 130, 246, 0.15);
  backdrop-filter: blur(15px);
  position: relative;
}

.project-stats-grid::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, rgba(59, 130, 246, 0.08), rgba(139, 92, 246, 0.08));
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.6s ease;
}

.project-stats-grid:hover::before {
  opacity: 1;
}

.project-stat-item {
  text-align: center;
  padding: 30px;
  border-radius: 20px;
  background: rgba(31, 41, 55, 0.4);
  border: 1px solid rgba(59, 130, 246, 0.15);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
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

.project-stat-item:hover {
  transform: translateY(-15px) scale(1.05);
  background: rgba(59, 130, 246, 0.12);
  border-color: rgba(59, 130, 246, 0.4);
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.25),
    0 0 40px rgba(59, 130, 246, 0.15);
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
  text-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
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

/* ===================================
   FLOATING ELEMENTS
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
  color: rgba(59, 130, 246, 0.8);
  font-weight: bold;
}

.code-bracket {
  font-size: 14px;
  color: rgba(139, 92, 246, 0.8);
}

.code-slash {
  font-size: 16px;
  color: rgba(34, 197, 94, 0.8);
}

@keyframes code-stack-float {
  0%, 100% {
    transform: translateX(-120px) translateY(0px);
    opacity: 0;
  }
  20%, 80% {
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

.front { transform: rotateY(0deg) translateZ(20px); }
.back { transform: rotateY(180deg) translateZ(20px); }
.right { transform: rotateY(90deg) translateZ(20px); }
.left { transform: rotateY(-90deg) translateZ(20px); }
.top { transform: rotateX(90deg) translateZ(20px); }
.bottom { transform: rotateX(-90deg) translateZ(20px); }

@keyframes tech-cube-float {
  0%, 100% {
    transform: translateX(120px) translateY(0px) rotateX(0deg) rotateY(0deg);
    opacity: 0;
  }
  25%, 75% {
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
  .bg-animated-projects {
    padding: 60px 1rem 40px;
  }
  
  .enhanced-project-title {
    font-size: 2.5rem;
  }
  
  .title-energy-line {
    display: none;
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
  
  .project-energy-field {
    height: 350px;
  }
  
  .floating-projects .project-icon,
  .floating-tech-symbols .tech-symbol {
    opacity: 0.3;
  }
}

@media (max-width: 480px) {
  .enhanced-project-title {
    font-size: 2rem;
  }
  
  .enhanced-nav-arrow {
    display: none;
  }
  
  .floating-projects,
  .floating-tech-symbols,
  .energy-pulse-lines {
    opacity: 0.5;
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
   ACCESSIBILITY
   =================================== */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .floating-projects,
  .floating-tech-symbols,
  .energy-pulse-lines,
  .tech-floating-elements {
    display: none;
  }
  
  .matrix-cursor {
    animation: none;
    opacity: 1;
  }
}

.enhanced-nav-arrow:focus-visible,
.tech-pagination-dot:focus-visible,
.tech-button:focus-visible {
  outline: 3px solid #3b82f6;
  outline-offset: 3px;
}

/* ===================================
   PERFORMANCE OPTIMIZATION
   =================================== */
.project-card,
.enhanced-nav-arrow,
.project-stat-item,
.energy-burst-effect {
  will-change: transform, opacity;
  backface-visibility: hidden;
  perspective: 1000px;
}

.enhanced-project-title,
.enhanced-project-description,
.project-card,
.swiper-container-wrapper {
  transform: translateZ(0);
}

/* ===================================
   SWIPER PAGINATION OVERRIDE
   =================================== */
.enhanced-project-swiper :deep(.swiper-pagination) {
  display: none;
}

.enhanced-project-swiper :deep(.swiper-button-next),
.enhanced-project-swiper :deep(.swiper-button-prev) {
  display: none;
}
</style>