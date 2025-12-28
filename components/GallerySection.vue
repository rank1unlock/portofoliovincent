<template>
  <section id="gallery" class="professional-gallery-section">
    <div class="background-wrapper">
      <div class="gradient-orbs">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="orb orb-3"></div>
      </div>
      <div class="grid-pattern"></div>
      <div class="floating-particles">
        <div v-for="i in 20" :key="i" class="particle" :style="getParticleStyle(i)"></div>
      </div>
    </div>

    <div class="container">
      <div class="gallery-header" ref="headerRef">
        <div class="header-badge">
          <component :is="Award" class="w-5 h-5" />
          <span>{{ statistics.total }}+ {{ translations.gallery.badge[currentLang] }}</span>
        </div>
        
        <h2 class="gallery-title">
          <span class="title-line">{{ translations.gallery.title_line1[currentLang] }}</span>
          <span class="title-highlight">{{ translations.gallery.title_line2[currentLang] }}</span>
        </h2>
        
        <p class="gallery-description">
          {{ translations.gallery.description[currentLang] }}
        </p>

        <div class="view-controls">
          <button 
            @click="viewMode = 'carousel'" 
            :class="['view-btn', { active: viewMode === 'carousel' }]"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            {{ translations.gallery.view_carousel[currentLang] }}
          </button>
          <button 
            @click="viewMode = 'grid'" 
            :class="['view-btn', { active: viewMode === 'grid' }]"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
            {{ translations.gallery.view_grid[currentLang] }}
          </button>
        </div>
      </div>

      <div class="stats-bar" ref="statsRef">
        <div v-for="(stat, index) in statsData" :key="index" class="stat-card">
          <div class="stat-icon" :style="{ background: stat.color }">
            <component :is="stat.icon" class="w-6 h-6" />
          </div>
          <div class="stat-content">
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label[currentLang] }}</div>
          </div>
        </div>
      </div>

      <div v-show="viewMode === 'carousel'" class="carousel-container" ref="carouselRef">
        <button @click="prevSlide" class="nav-button nav-prev" :disabled="activeIndex === 0">
          <component :is="ChevronLeft" class="w-6 h-6" />
        </button>
        
        <button @click="nextSlide" class="nav-button nav-next" :disabled="activeIndex === certificates.length - 1">
          <component :is="ChevronRight" class="w-6 h-6" />
        </button>

        <div class="carousel-track-wrapper">
          <div 
            class="carousel-track" 
            :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
          >
            <div 
              v-for="(cert, index) in certificates" 
              :key="cert.id"
              class="carousel-slide"
              @mouseenter="handleMouseEnter(index)"
              @mouseleave="handleMouseLeave"
            >
              <div :class="['certificate-card-pro', { 'is-active': activeIndex === index, 'is-hovered': hoveredCard === index }]">
                <div class="card-header">
                  <div class="cert-badge">
                    <component :is="Award" class="w-4 h-4" />
                    <span>{{ translations.gallery.verified[currentLang] }}</span>
                  </div>
                  <div class="cert-number">#{{ String(index + 1).padStart(2, '0') }}</div>
                </div>

                <div class="image-wrapper">
                  <div class="image-overlay"></div>
                  <img :src="cert.imageUrl" :alt="cert.title[currentLang]" class="cert-image" />
                  <div class="image-shine"></div>
                  
                  <div class="quick-actions">
                    <a :href="cert.driveUrl" target="_blank" rel="noopener noreferrer" class="action-btn">
                      <component :is="Eye" class="w-4 h-4" />
                    </a>
                    <button class="action-btn" @click="showDetails(cert)">
                      <component :is="ExternalLink" class="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div class="card-body">
                  <div class="card-category">{{ cert.category }}</div>
                  
                  <h3 class="card-title">{{ cert.title[currentLang] }}</h3>
                  
                  <div class="card-meta">
                    <div class="meta-item">
                      <component :is="School" class="w-4 h-4" />
                      <span>{{ cert.issuer[currentLang] }}</span>
                    </div>
                    <div class="meta-item">
                      <component :is="Calendar" class="w-4 h-4" />
                      <span>{{ cert.date[currentLang] }}</span>
                    </div>
                  </div>

                  <div class="skills-tags">
                    <span v-for="skill in cert.skills" :key="skill" class="skill-tag">
                      {{ skill }}
                    </span>
                  </div>

                  <a :href="cert.driveUrl" target="_blank" rel="noopener noreferrer" class="primary-button">
                    <component :is="Eye" class="w-4 h-4" />
                    <span>{{ translations.gallery.view_button[currentLang] }}</span>
                    <component :is="ExternalLink" class="w-3 h-3" />
                  </a>
                </div>

                <div class="card-footer">
                  <div class="completion-badge">
                    <component :is="CheckCircle" class="w-4 h-4" />
                    <span>{{ translations.gallery.completed[currentLang] }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-dots">
          <button
            v-for="(cert, index) in certificates"
            :key="`dot-${cert.id}`"
            @click="goToSlide(index)"
            :class="['dot', { active: activeIndex === index }]"
          >
            <span class="dot-tooltip">{{ cert.title[currentLang] }}</span>
          </button>
        </div>
      </div>

      <div v-show="viewMode === 'grid'" class="grid-container">
        <div 
          v-for="(cert, index) in certificates" 
          :key="cert.id"
          class="grid-card"
          @mouseenter="hoveredCard = index"
          @mouseleave="hoveredCard = null"
        >
           <div :class="['certificate-card-grid', { 'is-hovered': hoveredCard === index }]">
            <div class="grid-card-inner">
              <div class="grid-card-front">
                <div class="grid-badge">
                  <component :is="Award" class="w-3 h-3" />
                </div>
                <img :src="cert.imageUrl" :alt="cert.title[currentLang]" class="grid-image" />
                <div class="grid-overlay">
                  <h4>{{ cert.title[currentLang] }}</h4>
                  <p>{{ cert.issuer[currentLang] }}</p>
                </div>
              </div>
            </div>
            
            <div class="grid-info">
              <div class="grid-meta">
                <component :is="Calendar" class="w-3 h-3" />
                <span>{{ cert.date[currentLang] }}</span>
              </div>
              <a :href="cert.driveUrl" target="_blank" rel="noopener noreferrer" class="grid-link">
                <component :is="Eye" class="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="achievement-summary">
        <div class="summary-card">
          <div class="summary-icon">
            <component :is="Trophy" class="w-8 h-8" />
          </div>
          <h3>{{ translations.gallery.achievement1_title[currentLang] }}</h3>
          <p>{{ translations.gallery.achievement1_desc[currentLang] }}</p>
        </div>
        <div class="summary-card">
          <div class="summary-icon">
            <component :is="Target" class="w-8 h-8" />
          </div>
          <h3>{{ translations.gallery.achievement2_title[currentLang] }}</h3>
          <p>{{ translations.gallery.achievement2_desc[currentLang] }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, h, computed } from 'vue';

const { lang: currentLang } = useLang();

// Data Translasi yang kamu berikan
const translations = {
  gallery: {
    title: { id: 'Sertifikat & Pencapaian Saya', en: 'My Certificates & Achievements' },
    title_line1: { id: 'Sertifikat &', en: 'Certificates &' },
    title_line2: { id: 'Pencapaian', en: 'Achievements' },
    description: {
        id: 'Koleksi sertifikasi dan pencapaian yang memvalidasi keahlian teknis dalam pengembangan perangkat lunak',
        en: 'Collection of certifications and achievements validating technical expertise in software development'
    },
    badge: { id: 'Sertifikasi Profesional', en: 'Professional Certifications' },
    date_prefix: { id: 'Diperoleh', en: 'Obtained' },
    view_button: { id: 'Lihat Sertifikat', en: 'View Certificate' },
    view_carousel: { id: 'Carousel', en: 'Carousel' },
    view_grid: { id: 'Grid', en: 'Grid' },
    verified: { id: 'Terverifikasi', en: 'Verified' },
    completed: { id: 'Selesai', en: 'Completed' },
    achievement1_title: { id: 'Terus Berkembang', en: 'Continuous Growth' },
    achievement1_desc: { 
        id: 'Komitmen untuk pembelajaran berkelanjutan dan pengembangan keahlian profesional', 
        en: 'Commitment to continuous learning and professional skill development' 
    },
    achievement2_title: { id: 'Fokus Industri', en: 'Industry Focus' },
    achievement2_desc: { 
        id: 'Sertifikasi yang relevan dengan kebutuhan industri teknologi modern', 
        en: 'Certifications relevant to modern technology industry needs' 
    }
  }
};

// --- FIX ICON HELPER ---
const createIcon = (path) => {
  return {
    render() {
      return h('svg', {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        innerHTML: path
      });
    }
  }
};

// Icon Definitions
const Award = createIcon('<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>');
const Calendar = createIcon('<rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>');
const School = createIcon('<path d="m4 6 8-4 8 4"/><path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"/><path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"/><path d="M18 5v17"/><path d="M6 5v17"/><circle cx="12" cy="9" r="2"/>');
const Eye = createIcon('<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>');
const ExternalLink = createIcon('<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/>');
const CheckCircle = createIcon('<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>');
const ChevronLeft = createIcon('<polyline points="15 18 9 12 15 6"/>');
const ChevronRight = createIcon('<polyline points="9 18 15 12 9 6"/>');
const Trophy = createIcon('<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>');
const Target = createIcon('<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>');

// State
const viewMode = ref('carousel');
const activeIndex = ref(0);
const hoveredCard = ref(null);
const headerRef = ref(null);
const statsRef = ref(null);
const carouselRef = ref(null);

// Statistics
const statistics = {
  total: 8,
  technologies: 5,
  completionRate: 100
};

// Stats Data (Updated untuk support translation pada label)
const statsData = [
  {
    icon: Award,
    value: '8+',
    label: { id: 'Sertifikat', en: 'Certificates' }, // Diupdate jadi object
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    icon: Trophy,
    value: '100%',
    label: { id: 'Completion Rate', en: 'Completion Rate' }, // Diupdate jadi object
    color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    icon: Target,
    value: '5+',
    label: { id: 'Teknologi', en: 'Technologies' }, // Diupdate jadi object
    color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  }
];

// Certificates Data (Sama seperti sebelumnya)
const certificates = ref([
  {
    id: 1,
    title: { id: 'Hak Kekayaan Intelektual', en: 'Intellectual Property Rights' },
    issuer: { id: 'Kementerian Hukum RI', en: 'Ministry of Law RI' },
    date: { id: 'September 2025', en: 'September 2025' },
    imageUrl: '/images/hki.png',
    driveUrl: 'https://drive.google.com/file/d/102hW_VRm3XcgmcmijY-_MJ7ecftktxsO/view?usp=sharing',
    category: 'Legal',
    skills: ['IP Rights', 'Copyright', 'Patent']
  },
  {
    id: 2,
    title: { id: 'Dasar Cloud dan Gen AI AWS', en: 'AWS Cloud and Gen AI Basics' },
    issuer: { id: 'Dicoding Indonesia', en: 'Dicoding Indonesia' },
    date: { id: 'Juni 2025', en: 'June 2025' },
    imageUrl: '/images/ai.png',
    driveUrl: 'https://drive.google.com/file/d/1-5A7Qh7v7nPLfeGzwMjv3KygZ_TkrRok/view?usp=drive_link',
    category: 'Cloud & AI',
    skills: ['AWS', 'Gen AI', 'Cloud']
  },
  {
    id: 3,
    title: { id: 'Belajar Back-End Dengan JavaScript', en: 'Learning Back-End With JavaScript' },
    issuer: { id: 'Dicoding Indonesia', en: 'Dicoding Indonesia' },
    date: { id: 'Juni 2025', en: 'June 2025' },
    imageUrl: '/images/api.png',
    driveUrl: 'https://drive.google.com/file/d/1TE8NSY3KJ-3FpRKy9db-QD0PLPahWB8x/view?usp=drive_link',
    category: 'Backend',
    skills: ['Node.js', 'API', 'JavaScript']
  },
  {
    id: 4,
    title: { id: 'Belajar Dasar Pemrograman JavaScript', en: 'Learning Basic JavaScript Programming' },
    issuer: { id: 'Dicoding Indonesia', en: 'Dicoding Indonesia' },
    date: { id: 'April 2025', en: 'April 2025' },
    imageUrl: '/images/js.png',
    driveUrl: 'https://drive.google.com/file/d/1wAJ1UYPisw38TaS5e-8sdEJCJoZHm1a_/view?usp=drive_link',
    category: 'Programming',
    skills: ['JavaScript', 'ES6', 'DOM']
  },
  {
    id: 5,
    title: { id: 'Belajar Dasar Pemrograman C', en: 'Learning Basic C Programming' },
    issuer: { id: 'Dicoding Indonesia', en: 'Dicoding Indonesia' },
    date: { id: 'Juni 2025', en: 'June 2025' },
    imageUrl: '/images/c.png',
    driveUrl: 'https://drive.google.com/file/d/1LY5nPijDOnHKOjmSu3ADkGAgW9IO1oTR/view?usp=drive_link',
    category: 'Programming',
    skills: ['C', 'Memory', 'Pointer']
  },
  {
    id: 6,
    title: { id: 'Belajar Prinsip Pemrograman SOLID', en: 'Learning SOLID Programming Principles' },
    issuer: { id: 'Dicoding Indonesia', en: 'Dicoding Indonesia' },
    date: { id: 'Juni 2025', en: 'June 2025' },
    imageUrl: '/images/solid.png',
    driveUrl: 'https://drive.google.com/file/d/1LeohQQnvLm672ODk-w2Am3Sl9MsfFlXB/view?usp=drive_link',
    category: 'Best Practice',
    skills: ['SOLID', 'OOP', 'Design']
  },
  {
    id: 7,
    title: { id: 'Belajar Pemrograman Java', en: 'Learning Java Programming' },
    issuer: { id: 'Dicoding Indonesia', en: 'Dicoding Indonesia' },
    date: { id: 'Juni 2025', en: 'June 2025' },
    imageUrl: '/images/java.png',
    driveUrl: 'https://drive.google.com/file/d/1LeohQQnvLm672ODk-w2Am3Sl9MsfFlXB/view?usp=drive_link',
    category: 'Programming',
    skills: ['Java', 'OOP', 'Spring']
  },
  {
    id: 8,
    title: { id: 'Belajar Manajemen Proyek', en: 'Learning Project Management' },
    issuer: { id: 'Dicoding Indonesia', en: 'Dicoding Indonesia' },
    date: { id: 'Juni 2025', en: 'June 2025' },
    imageUrl: '/images/manajemen.png',
    driveUrl: 'https://drive.google.com/file/d/1NJ_gOFHunrFVAi1n4xnO-j8uFU2B6_Dp/view?usp=drive_link',
    category: 'Management',
    skills: ['PM', 'Agile', 'Scrum']
  }
]);

// Methods
const getParticleStyle = (index) => {
  const delay = Math.random() * 5;
  const duration = 10 + Math.random() * 20;
  return {
    left: Math.random() * 100 + '%',
    animationDelay: delay + 's',
    animationDuration: duration + 's',
    width: (3 + Math.random() * 4) + 'px',
    height: (3 + Math.random() * 4) + 'px'
  };
};

const prevSlide = () => {
  if (activeIndex.value > 0) {
    activeIndex.value--;
  }
};

const nextSlide = () => {
  if (activeIndex.value < certificates.value.length - 1) {
    activeIndex.value++;
  }
};

const goToSlide = (index) => {
  activeIndex.value = index;
};

const handleMouseEnter = (index) => {
  hoveredCard.value = index;
};

const handleMouseLeave = () => {
  hoveredCard.value = null;
};

const showDetails = (cert) => {
  console.log('Show details for:', cert);
};

// Intersection Observer
onMounted(() => {
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, observerOptions);

  if (headerRef.value) observer.observe(headerRef.value);
  if (statsRef.value) observer.observe(statsRef.value);
  if (carouselRef.value) observer.observe(carouselRef.value);
});
</script>

<style scoped>
/* Base Styles */
.professional-gallery-section {
  position: relative;
  min-height: 100vh;
  padding: 5rem 2rem;
  background: #0a0e1a;
  overflow: hidden;
}

/* Background */
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
  opacity: 0.3;
  animation: float-orb 20s ease-in-out infinite;
}

.orb-1 {
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  top: -10%;
  left: -10%;
  animation-delay: 0s;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #f093fb, #f5576c);
  bottom: -10%;
  right: -10%;
  animation-delay: 5s;
}

.orb-3 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  top: 50%;
  left: 50%;
  animation-delay: 10s;
}

@keyframes float-orb {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -30px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}

.grid-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: grid-scroll 20s linear infinite;
}

@keyframes grid-scroll {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

.floating-particles {
  position: absolute;
  inset: 0;
}

.particle {
  position: absolute;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  animation: particle-float linear infinite;
}

@keyframes particle-float {
  0% {
    transform: translateY(100vh) translateX(0) scale(0);
    opacity: 0;
  }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% {
    transform: translateY(-100px) translateX(50px) scale(1);
    opacity: 0;
  }
}

/* Container */
.container {
  position: relative;
  z-index: 1;
  max-width: 1400px;
  margin: 0 auto;
}

/* Header */
.gallery-header {
  text-align: center;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.gallery-header.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.header-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 50px;
  color: #a78bfa;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  animation: badge-pulse 2s ease-in-out infinite;
}

@keyframes badge-pulse {
  0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.4); }
  50% { transform: scale(1.05); box-shadow: 0 0 20px 10px rgba(102, 126, 234, 0); }
}

.gallery-title {
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.title-line {
  display: block;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.title-highlight {
  display: block;
  background: linear-gradient(135deg, #f093fb, #f5576c);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
}

.title-highlight::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 4px;
  background: linear-gradient(90deg, transparent, #f093fb, transparent);
  border-radius: 2px;
}

.gallery-description {
  color: #94a3b8;
  font-size: 1.125rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
}

/* View Controls */
.view-controls {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 2rem;
}

.view-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(148, 163, 184, 0.1);
  border-radius: 12px;
  color: #94a3b8;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.view-btn:hover {
  background: rgba(30, 41, 59, 0.8);
  border-color: rgba(102, 126, 234, 0.3);
  color: #a78bfa;
  transform: translateY(-2px);
}

.view-btn.active {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
  border-color: #667eea;
  color: #a78bfa;
}

/* Statistics Bar */
.stats-bar {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
}

.stats-bar.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(148, 163, 184, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.stat-card:hover {
  transform: translateY(-8px);
  border-color: rgba(102, 126, 234, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.stat-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 16px;
  color: white;
}

.stat-content {
  flex: 1;
}

.stat-value {
  font-size: 2rem;
  font-weight: 900;
  background: linear-gradient(135deg, #fff, #a78bfa);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
  margin-bottom: 0.25rem;
}

.stat-label {
  color: #94a3b8;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Carousel Container */
.carousel-container {
  position: relative;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s;
}

.carousel-container.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Navigation Buttons */
.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(30, 41, 59, 0.8);
  border: 2px solid rgba(102, 126, 234, 0.3);
  border-radius: 50%;
  color: #a78bfa;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  backdrop-filter: blur(10px);
}

.nav-button:hover:not(:disabled) {
  background: rgba(102, 126, 234, 0.2);
  border-color: #667eea;
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.nav-button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.nav-prev {
  left: -28px;
}

.nav-next {
  right: -28px;
}

/* Carousel Track */
.carousel-track-wrapper {
  overflow: hidden;
  border-radius: 24px;
  padding: 2rem 0;
}

.carousel-track {
  display: flex;
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.carousel-slide {
  min-width: 100%;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
}

/* Certificate Card Pro */
.certificate-card-pro {
  position: relative;
  width: 100%;
  max-width: 500px;
  background: rgba(30, 41, 59, 0.6);
  border: 1px solid rgba(148, 163, 184, 0.1);
  border-radius: 24px;
  overflow: hidden;
  backdrop-filter: blur(20px);
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform: scale(0.95);
  opacity: 0.7;
}

.certificate-card-pro.is-active {
  transform: scale(1);
  opacity: 1;
  border-color: rgba(102, 126, 234, 0.3);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(102, 126, 234, 0.1);
}

.certificate-card-pro.is-hovered {
  transform: scale(1.02);
  border-color: rgba(102, 126, 234, 0.5);
}

/* Card Header */
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1.5rem 0;
}

.cert-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(16, 185, 129, 0.2));
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 50px;
  color: #4ade80;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.cert-number {
  font-size: 1.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.3;
}

/* Image Wrapper */
.image-wrapper {
  position: relative;
  height: 280px;
  margin: 1rem 1.5rem;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(15, 23, 42, 0.5);
}

.cert-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.certificate-card-pro.is-hovered .cert-image {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.8) 100%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
}

.certificate-card-pro.is-hovered .image-overlay {
  opacity: 1;
}

.image-shine {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    transparent 0%,
    rgba(255, 255, 255, 0.3) 50%,
    transparent 100%
  );
  transform: translateX(-100%);
  transition: transform 0.8s ease;
}

.certificate-card-pro.is-hovered .image-shine {
  transform: translateX(100%);
}

/* Quick Actions */
.quick-actions {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 1rem;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 10;
}

.certificate-card-pro.is-hovered .quick-actions {
  opacity: 1;
}

.action-btn {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.95);
  border: none;
  border-radius: 50%;
  color: #1e293b;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.action-btn:hover {
  transform: scale(1.15) rotate(10deg);
  background: #667eea;
  color: white;
}

/* Card Body */
.card-body {
  padding: 0 1.5rem 1.5rem;
}

.card-category {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 6px;
  color: #a78bfa;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 1rem;
  line-height: 1.3;
  display: -webkit-box;

  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-meta {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #94a3b8;
  font-size: 0.875rem;
}

.meta-item svg {
  color: #667eea;
  flex-shrink: 0;
}

/* Skills Tags */
.skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.skill-tag {
  padding: 0.375rem 0.75rem;
  background: rgba(15, 23, 42, 0.5);
  border: 1px solid rgba(148, 163, 184, 0.1);
  border-radius: 8px;
  color: #cbd5e1;
  font-size: 0.75rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background: rgba(102, 126, 234, 0.1);
  border-color: rgba(102, 126, 234, 0.3);
  color: #a78bfa;
  transform: translateY(-2px);
}

/* Primary Button */
.primary-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 0.875rem;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
}

.primary-button::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #764ba2, #667eea);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.primary-button:hover::before {
  opacity: 1;
}

.primary-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
}

.primary-button span,
.primary-button svg {
  position: relative;
  z-index: 1;
}

/* Card Footer */
.card-footer {
  padding: 1rem 1.5rem;
  border-top: 1px solid rgba(148, 163, 184, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.completion-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #4ade80;
  font-size: 0.875rem;
  font-weight: 600;
}

/* Carousel Dots */
.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2rem;
}

.dot {
  position: relative;
  width: 12px;
  height: 12px;
  padding: 0;
  background: rgba(148, 163, 184, 0.3);
  border: 2px solid transparent;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.dot:hover {
  background: rgba(102, 126, 234, 0.5);
  transform: scale(1.3);
}

.dot.active {
  background: #667eea;
  border-color: rgba(102, 126, 234, 0.3);
  transform: scale(1.3);
  box-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
}

.dot-tooltip {
  position: absolute;
  bottom: 150%;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem 1rem;
  background: rgba(15, 23, 42, 0.95);
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 8px;
  color: #fff;
  font-size: 0.75rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(10px);
}

.dot:hover .dot-tooltip {
  opacity: 1;
}

/* Grid Container */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.grid-card {
  position: relative;
}

.certificate-card-grid {
  background: rgba(30, 41, 59, 0.6);
  border: 1px solid rgba(148, 163, 184, 0.1);
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(20px);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.certificate-card-grid.is-hovered {
  transform: translateY(-10px);
  border-color: rgba(102, 126, 234, 0.3);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
}

.grid-card-inner {
  position: relative;
  height: 250px;
}

.grid-card-front {
  position: relative;
  width: 100%;
  height: 100%;
}

.grid-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(34, 197, 94, 0.2);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 50%;
  color: #4ade80;
  backdrop-filter: blur(10px);
}

.grid-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.certificate-card-grid.is-hovered .grid-image {
  transform: scale(1.1);
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0.9) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.certificate-card-grid.is-hovered .grid-overlay {
  opacity: 1;
}

.grid-overlay h4 {
  color: white;
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.grid-overlay p {
  color: #cbd5e1;
  font-size: 0.875rem;
}

.grid-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-top: 1px solid rgba(148, 163, 184, 0.1);
}

.grid-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #94a3b8;
  font-size: 0.875rem;
}

.grid-meta svg {
  color: #667eea;
}

.grid-link {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  color: white;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.grid-link:hover {
  transform: scale(1.1) rotate(10deg);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
}

/* Achievement Summary */
.achievement-summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}

.summary-card {
  padding: 2.5rem;
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(148, 163, 184, 0.1);
  border-radius: 24px;
  text-align: center;
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.summary-card:hover {
  transform: translateY(-8px);
  border-color: rgba(102, 126, 234, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.summary-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  border: 2px solid rgba(102, 126, 234, 0.3);
  border-radius: 20px;
  color: #a78bfa;
}

.summary-card h3 {
  font-size: 1.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
}

.summary-card p {
  color: #94a3b8;
  font-size: 1rem;
  line-height: 1.6;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .nav-prev {
    left: 10px;
  }
  
  .nav-next {
    right: 10px;
  }
  
  .carousel-slide {
    padding: 0 1rem;
  }
}

@media (max-width: 768px) {
  .professional-gallery-section {
    padding: 3rem 1rem;
  }
  
  .gallery-title {
    font-size: 2.5rem;
  }
  
  .stats-bar {
    grid-template-columns: 1fr;
  }
  
  .nav-button {
    width: 40px;
    height: 40px;
  }
  
  .nav-prev {
    left: 5px;
  }
  
  .nav-next {
    right: 5px;
  }
  
  .image-wrapper {
    height: 220px;
  }
  
  .card-title {
    font-size: 1.25rem;
  }
  
  .grid-container {
    grid-template-columns: 1fr;
  }
  
  .achievement-summary {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .gallery-title {
    font-size: 2rem;
  }
  
  .header-badge {
    font-size: 0.75rem;
    padding: 0.375rem 1rem;
  }
  
  .view-controls {
    flex-direction: column;
    width: 100%;
  }
  
  .view-btn {
    width: 100%;
    justify-content: center;
  }
  
  .certificate-card-pro {
    max-width: 100%;
  }
  
  .image-wrapper {
    height: 180px;
    margin: 1rem;
  }
  
  .card-body {
    padding: 0 1rem 1rem;
  }
  
  .orb {
    opacity: 0.1;
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
}

/* Focus Visible */
.nav-button:focus-visible,
.view-btn:focus-visible,
.dot:focus-visible,
.primary-button:focus-visible {
  outline: 2px solid #667eea;
  outline-offset: 2px;
}
</style>