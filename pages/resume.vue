<template>
  <div class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 font-sans leading-normal tracking-normal print:bg-white min-h-screen overflow-x-hidden">
    <!-- Enhanced Background decoration with more animations -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none print:hidden">
      <div class="absolute top-20 left-20 w-72 h-72 bg-blue-500/8 rounded-full blur-3xl animate-float-slow"></div>
      <div class="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl animate-float-reverse"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/6 rounded-full blur-3xl animate-pulse-slow"></div>
      <div class="absolute top-1/4 right-1/4 w-48 h-48 bg-pink-500/4 rounded-full blur-2xl animate-drift-diagonal"></div>
      <div class="absolute bottom-1/4 left-1/4 w-56 h-56 bg-indigo-500/4 rounded-full blur-2xl animate-drift-reverse"></div>
    </div>

    <div class="relative z-10 py-6 md:py-12 lg:py-16 px-4 md:px-6">
      <!-- Enhanced Back button -->
      <div class="max-w-5xl mx-auto text-left mb-6 md:mb-8 print:hidden animate-slide-down">
        <NuxtLink to="/#hero" class="group text-sm text-gray-400 hover:text-white transition-all duration-500 inline-flex items-center gap-3 bg-gray-800/60 backdrop-blur-md px-5 py-3 rounded-full border border-gray-700/50 hover:border-blue-500/70 hover:bg-gray-700/60 hover:shadow-xl hover:shadow-blue-500/10">
          <Icon name="mdi:arrow-left" class="group-hover:-translate-x-2 transition-transform duration-500 ease-out" />
          <span class="font-medium">Back to Portfolio</span>
          <div class="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/5 to-purple-600/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </NuxtLink>
      </div>

      <!-- Enhanced Main resume container -->
      <div class="container mx-auto max-w-5xl bg-white rounded-3xl shadow-2xl relative overflow-hidden animate-scale-in">
        <!-- Enhanced Gradient border decoration -->
        <div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/25 to-cyan-500/20 rounded-3xl blur-xl print:hidden animate-gradient-shift"></div>
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 animate-gradient-slide print:hidden"></div>
        
        <div class="relative z-10 p-6 md:p-10 lg:p-12">
          <!-- Enhanced Header section -->
          <header class="text-center md:text-left flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-10 border-b-2 border-gray-100 pb-8 md:pb-12 mb-8 md:mb-12 animate-header-reveal">
            <div class="relative group flex-shrink-0 animate-photo-float">
              <div class="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500 animate-pulse-glow"></div>
              <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-spin-slow"></div>
              <img src="/images/foto.png" 
                   alt="Vincent Axel Alexander Profile Photo" 
                   class="relative w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full object-cover ring-4 ring-offset-4 ring-blue-300/50 group-hover:ring-blue-500/80 group-hover:ring-offset-6 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-2">
            </div>
            
            <div class="flex-1 text-center md:text-left animate-text-reveal">
              <h1 class="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-3 md:mb-4 leading-tight">
              Vincent Axel Alexander
              </h1>
              <p class="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 font-medium mb-4 md:mb-6 leading-relaxed animate-fade-in-stagger">
                <span class="animate-type-writer">Web Developer</span>
                <span class="text-gray-400 mx-2">•</span>
                <span class="animate-type-writer" style="animation-delay: 0.5s">IT Support</span>
                <span class="text-gray-400 mx-2">•</span>
                <span class="animate-type-writer" style="animation-delay: 1s">Network Engineer</span>
                <span class="text-gray-400 mx-2">•</span>
                <span class="animate-type-writer" style="animation-delay: 1.5s">Software Developer</span>
              </p>
              <div class="flex flex-col md:flex-row items-center gap-3 md:gap-4 animate-slide-up" style="animation-delay: 2s">
                <div class="w-24 md:w-32 lg:w-40 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full animate-expand-line"></div>
                <div class="flex items-center gap-2 text-sm md:text-base text-gray-500 animate-bounce-subtle">
                  <Icon name="mdi:map-marker" class="w-4 h-4 animate-pulse-icon" />
                  <span>Based in Malang, Indonesia</span>
                </div>
              </div>
            </div>
          </header>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            <!-- Enhanced Sidebar -->
            <aside class="lg:col-span-1 space-y-6 md:space-y-8 animate-slide-in-left">
              <!-- Enhanced Contact Section -->
              <section class="bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 print:bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100/80 hover:shadow-xl hover:border-blue-200/60 transition-all duration-500 animate-card-rise" style="animation-delay: 0.4s">
                <h2 class="section-title group">
                  <div class="icon-container group-hover:rotate-12 group-hover:scale-110">
                    <Icon name="mdi:account-box-outline" class="w-5 h-5 group-hover:text-blue-700 transition-colors duration-300" />
                  </div>
                  <span class="group-hover:text-blue-700 transition-colors duration-300">Contact Information</span>
                </h2>
                
                <div class="space-y-3 md:space-y-4">
                  <a href="mailto:vincentaxel92@gmail.com" class="contact-item group animate-fade-in-item" style="animation-delay: 0.6s">
                    <div class="icon-wrapper group-hover:scale-125 group-hover:rotate-3 group-hover:shadow-lg">
                      <Icon name="mdi:email-outline" class="w-4 h-4 md:w-5 md:h-5 text-blue-600 group-hover:animate-bounce-tiny" />
                    </div>
                    <span class="contact-text break-all">vincentaxel92@gmail.com</span>
                  </a>
                  
                  <div class="contact-item group animate-fade-in-item" style="animation-delay: 0.7s">
                    <div class="icon-wrapper group-hover:scale-125 group-hover:rotate-3 group-hover:shadow-lg">
                      <Icon name="mdi:phone-outline" class="w-4 h-4 md:w-5 md:h-5 text-green-600 group-hover:animate-ring" />
                    </div>
                    <span class="contact-text">(+62) 813-1635-0886</span>
                  </div>
                  
                  <div class="contact-item group animate-fade-in-item" style="animation-delay: 0.8s">
                    <div class="icon-wrapper group-hover:scale-125 group-hover:rotate-3 group-hover:shadow-lg">
                      <Icon name="mdi:map-marker-outline" class="w-4 h-4 md:w-5 md:h-5 text-red-500 group-hover:animate-pulse-icon" />
                    </div>
                    <span class="contact-text">Malang, East Java, Indonesia</span>
                  </div>
                  
                  <a href="https://github.com/rank1unlock" class="contact-item group animate-fade-in-item" style="animation-delay: 0.9s" target="_blank">
                    <div class="icon-wrapper group-hover:scale-125 group-hover:rotate-3 group-hover:shadow-lg">
                      <Icon name="mdi:github" class="w-4 h-4 md:w-5 md:h-5 text-gray-800 group-hover:animate-spin-once" />
                    </div>
                    <span class="contact-text break-all">github.com/rank1unlock</span>
                  </a>
                </div>
              </section>

              <!-- Enhanced Skills Section -->
              <section class="bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20 print:bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100/80 hover:shadow-xl hover:border-purple-200/60 transition-all duration-500 animate-card-rise" style="animation-delay: 0.6s">
                <h2 class="section-title group">
                  <div class="icon-container group-hover:rotate-12 group-hover:scale-110">
                    <Icon name="mdi:star-cog-outline" class="w-5 h-5 group-hover:text-purple-700 transition-colors duration-300" />
                  </div>
                  <span class="group-hover:text-purple-700 transition-colors duration-300">Technical Skills</span>
                </h2>
                
                <div class="space-y-5 md:space-y-6">
                  <div class="skill-category animate-skill-category" style="animation-delay: 0.8s">
                    <h4 class="skill-category-title">Programming Languages</h4>
                    <div class="skill-tags">
                      <span class="skill-tag bg-blue-100 text-blue-800 hover:bg-blue-200 hover:shadow-lg animate-skill-tag" style="animation-delay: 1s">PHP</span>
                      <br>
                      <span class="skill-tag bg-yellow-100 text-yellow-800 hover:bg-yellow-200 hover:shadow-lg animate-skill-tag" style="animation-delay: 1.1s">JavaScript</span>
                      <br>                      
                      <span class="skill-tag bg-red-100 text-red-800 hover:bg-red-200 hover:shadow-lg animate-skill-tag" style="animation-delay: 1.2s">Java</span>
                      <br>          
                      <span class="skill-tag bg-green-100 text-green-800 hover:bg-green-200 hover:shadow-lg animate-skill-tag" style="animation-delay: 1.3s">SQL</span>
                      <br>
                      <span class="skill-tag bg-orange-100 text-orange-800 hover:bg-orange-200 hover:shadow-lg animate-skill-tag" style="animation-delay: 1.4s">HTML5</span>
                      <br>
                      <span class="skill-tag bg-blue-100 text-blue-800 hover:bg-blue-200 hover:shadow-lg animate-skill-tag" style="animation-delay: 1.5s">CSS3</span>
                      <br>
                      <span class="skill-tag bg-green-100 text-green-800 hover:bg-green-200 hover:shadow-lg animate-skill-tag" style="animation-delay: 1.6s">Vue.js</span>
                    </div>
                  </div>
                  
                  <div class="skill-category animate-skill-category" style="animation-delay: 1.2s">
                    <h4 class="skill-category-title">Frameworks & Tools</h4>
                    <div class="skill-tags">
                      <span class="skill-tag bg-green-100 text-green-800 hover:bg-green-200 hover:shadow-lg animate-skill-tag" style="animation-delay: 1.7s">Nuxt.js</span>
                      <br>
                      <span class="skill-tag bg-red-100 text-red-800 hover:bg-red-200 hover:shadow-lg animate-skill-tag" style="animation-delay: 1.8s">Laravel</span>
                      <br>
                      <span class="skill-tag bg-orange-100 text-orange-800 hover:bg-orange-200 hover:shadow-lg animate-skill-tag" style="animation-delay: 1.9s">CodeIgniter</span>
                      <br>
                      <span class="skill-tag bg-blue-100 text-blue-800 hover:bg-blue-200 hover:shadow-lg animate-skill-tag" style="animation-delay: 2s">Node.js</span>
                      <br>
                      <span class="skill-tag bg-blue-100 text-blue-800 hover:bg-blue-200 hover:shadow-lg animate-skill-tag" style="animation-delay: 2.1s">MySQL</span>
                      <br>
                      <span class="skill-tag bg-gray-100 text-gray-800 hover:bg-gray-200 hover:shadow-lg animate-skill-tag" style="animation-delay: 2.2s">Git</span>
                    </div>
                  </div>
                  
                  <div class="skill-category animate-skill-category" style="animation-delay: 1.6s">
                    <h4 class="skill-category-title">Network & Infrastructure</h4>
                    <div class="skill-tags">
                      <span class="skill-tag bg-purple-100 text-purple-800 hover:bg-purple-200 hover:shadow-lg animate-skill-tag" style="animation-delay: 2.3s">Mikrotik</span>
                      <br>
                      <span class="skill-tag bg-cyan-100 text-cyan-800 hover:bg-cyan-200 hover:shadow-lg animate-skill-tag" style="animation-delay: 2.4s">Network Security</span>
                      <br>
                      <span class="skill-tag bg-indigo-100 text-indigo-800 hover:bg-indigo-200 hover:shadow-lg animate-skill-tag" style="animation-delay: 2.5s">IT Support</span>
                    </div>
                  </div>
                </div>
              </section>

              <!-- Enhanced Languages Section -->
              <section class="bg-gradient-to-br from-slate-50 via-cyan-50/30 to-teal-50/20 print:bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100/80 hover:shadow-xl hover:border-cyan-200/60 transition-all duration-500 animate-card-rise" style="animation-delay: 0.8s">
                <h2 class="section-title group">
                  <div class="icon-container group-hover:rotate-12 group-hover:scale-110">
                    <Icon name="mdi:translate" class="w-5 h-5 group-hover:text-cyan-700 transition-colors duration-300" />
                  </div>
                  <span class="group-hover:text-cyan-700 transition-colors duration-300">Languages</span>
                </h2>
                
                <div class="space-y-4 md:space-y-5">
                  <div class="language-item animate-language-item" style="animation-delay: 1s">
                    <div class="flex items-center justify-between mb-3">
                      <span class="font-bold text-gray-800 text-sm md:text-base">Indonesian</span>
                      <span class="text-xs md:text-sm text-gray-600 bg-green-100 px-2 py-1 rounded-full font-medium">Native</span>
                    </div>
                    <div class="progress-bar group">
                      <div class="progress-fill bg-gradient-to-r from-green-400 to-green-600 animate-progress-100 group-hover:shadow-lg"></div>
                    </div>
                  </div>
                  
                  <div class="language-item animate-language-item" style="animation-delay: 1.2s">
                    <div class="flex items-center justify-between mb-3">
                      <span class="font-bold text-gray-800 text-sm md:text-base">English</span>
                      <span class="text-xs md:text-sm text-gray-600 bg-blue-100 px-2 py-1 rounded-full font-medium">Professional</span>
                    </div>
                    <div class="progress-bar group">
                      <div class="progress-fill bg-gradient-to-r from-blue-400 to-blue-600 animate-progress-85 group-hover:shadow-lg"></div>
                    </div>
                  </div>
                  
                  <div class="language-item animate-language-item" style="animation-delay: 1.4s">
                    <div class="flex items-center justify-between mb-3">
                      <span class="font-bold text-gray-800 text-sm md:text-base">Chinese</span>
                      <span class="text-xs md:text-sm text-gray-600 bg-orange-100 px-2 py-1 rounded-full font-medium">Basic</span>
                    </div>
                    <div class="progress-bar group">
                      <div class="progress-fill bg-gradient-to-r from-orange-400 to-orange-600 animate-progress-40 group-hover:shadow-lg"></div>
                    </div>
                  </div>
                </div>
              </section>
            </aside>

            <!-- Enhanced Main content -->
            <main class="lg:col-span-2 space-y-8 md:space-y-12 animate-slide-in-right">
              <!-- Enhanced Summary Section -->
              <section class="animate-content-reveal" style="animation-delay: 0.3s">
                <h2 class="main-section-title group">
                  <div class="icon-container group-hover:rotate-12 group-hover:scale-110">
                    <Icon name="mdi:text-account" class="w-6 h-6 group-hover:text-blue-700 transition-colors duration-300" />
                  </div>
                  <span class="group-hover:text-blue-700 transition-colors duration-300">Professional Summary</span>
                </h2>
                
                <div class="content-card hover:transform hover:scale-[1.02] animate-float-card">
                  <p class="text-gray-700 leading-relaxed text-base md:text-lg lg:text-xl animate-text-flow">
                    A highly motivated and versatile IT professional with extensive experience in web development, 
                    network engineering, and IT support. Passionate about creating innovative digital solutions and 
                    providing exceptional technical assistance. Proven track record of delivering high-quality projects 
                    and maintaining robust IT infrastructure across diverse environments.
                  </p>
                </div>
              </section>

              <!-- Enhanced Experience Section -->
              <section class="animate-content-reveal" style="animation-delay: 0.5s">
                <h2 class="main-section-title group">
                  <div class="icon-container group-hover:rotate-12 group-hover:scale-110">
                    <Icon name="mdi:briefcase-outline" class="w-6 h-6 group-hover:text-purple-700 transition-colors duration-300" />
                  </div>
                  <span class="group-hover:text-purple-700 transition-colors duration-300">Professional Experience</span>
                </h2>
                
                <div class="space-y-6 md:space-y-8">
                  <!-- Enhanced Job 1 -->
                  <div class="experience-card group hover:transform hover:scale-[1.02] animate-experience-card" style="animation-delay: 0.7s">
                    <div class="experience-header">
                      <div class="flex-1">
                        <h3 class="experience-title group-hover:text-blue-700 transition-colors duration-300">IT Freelancer</h3>
                        <p class="experience-company">Remote Work</p>
                      </div>
                      <div class="experience-period animate-pulse-period">
                        <Icon name="mdi:calendar-outline" class="w-4 h-4 animate-spin-slow" />
                        <span class="font-semibold">2022 - Present</span>
                        <br>
                      </div>
                    </div>
                    
                    <div class="experience-content">
                      <ul class="experience-list">
                        <li class="experience-item animate-list-item hover:transform hover:translate-x-2" style="animation-delay: 0.9s">
                          <Icon name="mdi:check-circle-outline" class="achievement-icon animate-check-bounce" />
                          <span>Developed and maintained websites for various clients using PHP (Laravel, CodeIgniter) and JavaScript (Vue.js, Nuxt.js)</span><br>
                        </li>
                        <li class="experience-item animate-list-item hover:transform hover:translate-x-2" style="animation-delay: 1s">
                          <Icon name="mdi:check-circle-outline" class="achievement-icon animate-check-bounce" />
                          <span>Provided comprehensive IT support, including hardware/software troubleshooting and network setup (Mikrotik)<br></span>
                        </li>
                        <li class="experience-item animate-list-item hover:transform hover:translate-x-2" style="animation-delay: 1.1s">
                          <Icon name="mdi:check-circle-outline" class="achievement-icon animate-check-bounce" />
                          <span>Managed database design, implementation, and optimization for client projects</span>
                        </li>
                        <li class="experience-item animate-list-item hover:transform hover:translate-x-2" style="animation-delay: 1.2s">
                          <Icon name="mdi:check-circle-outline" class="achievement-icon animate-check-bounce" />
                          <span>Successfully completed 15+ web development projects with 100% client satisfaction rate</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <!-- Enhanced Job 2 -->
                  <div class="experience-card group hover:transform hover:scale-[1.02] animate-experience-card" style="animation-delay: 1.3s">
                    <div class="experience-header">
                      <div class="flex-1">
                        <h3 class="experience-title group-hover:text-purple-700 transition-colors duration-300">IT Support & Software Developer</h3>
                        <p class="experience-company">Institute Technology and Business Asia Malang</p>
                      </div>
                      <div class="experience-period animate-pulse-period">
                        <Icon name="mdi:calendar-outline" class="w-4 h-4 animate-spin-slow" />
                        <span class="font-semibold">2024 - Present</span>
                      </div>
                    </div>
                    
                    <div class="experience-content">
                      <ul class="experience-list">
                        <li class="experience-item animate-list-item hover:transform hover:translate-x-2" style="animation-delay: 1.5s">
                          <Icon name="mdi:check-circle-outline" class="achievement-icon animate-check-bounce" />
                          <span>Provided technical assistance and troubleshooting for university staff and computer labs</span>
                        </li>
                        <li class="experience-item animate-list-item hover:transform hover:translate-x-2" style="animation-delay: 1.6s">
                          <Icon name="mdi:check-circle-outline" class="achievement-icon animate-check-bounce" />
                          <span>Contributed to the development of internal software applications to streamline campus operations</span>
                        </li>
                        <li class="experience-item animate-list-item hover:transform hover:translate-x-2" style="animation-delay: 1.7s">
                          <Icon name="mdi:check-circle-outline" class="achievement-icon animate-check-bounce" />
                          <span>Provided technical assistance and troubleshooting network traffic and security for university infrastructure</span>
                        </li>
                        <li class="experience-item animate-list-item hover:transform hover:translate-x-2" style="animation-delay: 1.8s">
                          <Icon name="mdi:check-circle-outline" class="achievement-icon animate-check-bounce" />
                          <span>Reduced system downtime by 40% through proactive maintenance and monitoring</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <!-- Enhanced Education Section -->
              <section class="animate-content-reveal" style="animation-delay: 0.7s">
                <h2 class="main-section-title group">
                  <div class="icon-container group-hover:rotate-12 group-hover:scale-110">
                    <Icon name="mdi:school-outline" class="w-6 h-6 group-hover:text-indigo-700 transition-colors duration-300" />
                  </div>
                  <span class="group-hover:text-indigo-700 transition-colors duration-300">Education</span>
                </h2>
                
                <div class="education-card hover:transform hover:scale-[1.02] animate-education-card" style="animation-delay: 1.9s">
                  <div class="education-header">
                    <div class="flex-1">
                      <h3 class="education-title">Bachelor of Information Technology</h3>
                      <p class="education-institution">Institut Teknologi dan Bisnis Asia Malang</p>
                    </div>
                    <div class="education-period animate-pulse-period">
                      <Icon name="mdi:calendar-outline" class="w-4 h-4 animate-spin-slow" />
                      <span class="font-semibold">2022 - 2026</span>
                    </div>
                  </div>
                  
                  <div class="education-content">
                    <p class="text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg animate-text-flow">
                      Currently pursuing a Bachelor's degree in Information Technology with focus on software development, 
                      network engineering, and database management. Maintaining strong academic performance while 
                      gaining practical experience through internships and freelance projects.
                    </p>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHead } from '#imports';

useHead({
  title: 'Professional Resume | Vincent Axel Alexander - Web Developer & IT Specialist',
  meta: [
    { 
      name: 'description', 
      content: 'Professional resume of Vincent Axel Alexander - experienced Web Developer, IT Support specialist, and Network Engineer. View detailed work experience, technical skills, and educational background.' 
    },
    {
      name: 'keywords',
      content: 'Vincent Axel Alexander, Web Developer, IT Support, Network Engineer, PHP, JavaScript, Vue.js, Laravel, Resume, CV'
    },
    {
      property: 'og:title',
      content: 'Vincent Axel Alexander - Professional Resume'
    },
    {
      property: 'og:description',
      content: 'Professional resume showcasing expertise in web development, IT support, and network engineering.'
    }
  ]
});
</script>

<style lang="postcss" scoped>
/* CSS Variables */
:root {
  --tw-ring-inset: ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59, 130, 246, 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
}

*, ::before, ::after {
  --tw-ring-inset: ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59, 130, 246, 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
}

/* Enhanced Base Animations */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-left {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in-right {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-down {
  from {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

@keyframes float-reverse {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(20px) rotate(-180deg);
  }
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
}

@keyframes drift-diagonal {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(20px, -20px) rotate(90deg);
  }
  50% {
    transform: translate(-20px, -40px) rotate(180deg);
  }
  75% {
    transform: translate(-40px, 20px) rotate(270deg);
  }
}

@keyframes drift-reverse {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(-20px, 20px) rotate(-90deg);
  }
  50% {
    transform: translate(20px, 40px) rotate(-180deg);
  }
  75% {
    transform: translate(40px, -20px) rotate(-270deg);
  }
}

@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes gradient-slide {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

@keyframes header-reveal {
  from {
    opacity: 0;
    transform: translateY(50px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes photo-float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
}

@keyframes text-reveal {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes gradient-text {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes fade-in-stagger {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes type-writer {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes expand-line {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes bounce-subtle {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
}

@keyframes pulse-icon {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.1);
  }
}

@keyframes slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-in-right {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes card-rise {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes fade-in-item {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce-tiny {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2px);
  }
}

@keyframes ring {
  0%, 100% {
    transform: rotate(0deg);
  }
  10%, 30% {
    transform: rotate(-3deg);
  }
  20% {
    transform: rotate(3deg);
  }
}

@keyframes spin-once {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes skill-category {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes skill-tag {
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes language-item {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes progress-100 {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

@keyframes progress-85 {
  from {
    width: 0%;
  }
  to {
    width: 85%;
  }
}

@keyframes progress-40 {
  from {
    width: 0%;
  }
  to {
    width: 40%;
  }
}

@keyframes content-reveal {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float-card {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
}

@keyframes text-flow {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes experience-card {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes list-item {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes check-bounce {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

@keyframes pulse-period {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

@keyframes education-card {
  from {
    opacity: 0;
    transform: translateY(25px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes pulse-glow {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.05);
  }
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Enhanced Component Classes */
.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animate-float-reverse {
  animation: float-reverse 10s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 6s ease-in-out infinite;
}

.animate-drift-diagonal {
  animation: drift-diagonal 12s ease-in-out infinite;
}

.animate-drift-reverse {
  animation: drift-reverse 14s ease-in-out infinite;
}

.animate-slide-down {
  animation: slide-down 0.8s ease-out;
}

.animate-scale-in {
  animation: scale-in 1s ease-out;
}

.animate-gradient-shift {
  background-size: 200% 200%;
  animation: gradient-shift 8s ease infinite;
}

.animate-gradient-slide {
  background-size: 200% 100%;
  animation: gradient-slide 3s linear infinite;
}

.animate-header-reveal {
  animation: header-reveal 1.2s ease-out;
}

.animate-photo-float {
  animation: photo-float 4s ease-in-out infinite;
}

.animate-text-reveal {
  animation: text-reveal 1s ease-out 0.3s both;
}

.animate-gradient-text {
  background-size: 200% 200%;
  animation: gradient-text 4s ease-in-out infinite;
}

.animate-fade-in-stagger {
  animation: fade-in-stagger 0.6s ease-out both;
}

.animate-type-writer {
  animation: type-writer 0.8s ease-out both;
}

.animate-expand-line {
  animation: expand-line 2s ease-out both;
}

.animate-bounce-subtle {
  animation: bounce-subtle 2s ease-in-out infinite;
}

.animate-pulse-icon {
  animation: pulse-icon 2s ease-in-out infinite;
}

.animate-slide-in-left {
  animation: slide-in-left 1s ease-out;
}

.animate-slide-in-right {
  animation: slide-in-right 1s ease-out;
}

.animate-card-rise {
  animation: card-rise 0.8s ease-out both;
}

.animate-fade-in-item {
  animation: fade-in-item 0.6s ease-out both;
}

.animate-bounce-tiny {
  animation: bounce-tiny 0.6s ease-in-out;
}

.animate-ring {
  animation: ring 0.8s ease-in-out;
}

.animate-spin-once {
  animation: spin-once 0.6s ease-in-out;
}

.animate-skill-category {
  animation: skill-category 0.8s ease-out both;
}

.animate-skill-tag {
  animation: skill-tag 0.6s ease-out both;
}

.animate-language-item {
  animation: language-item 0.8s ease-out both;
}

.animate-progress-100 {
  animation: progress-100 2s ease-out both;
}

.animate-progress-85 {
  animation: progress-85 2s ease-out both;
}

.animate-progress-40 {
  animation: progress-40 2s ease-out both;
}

.animate-content-reveal {
  animation: content-reveal 1s ease-out both;
}

.animate-float-card {
  animation: float-card 6s ease-in-out infinite;
}

.animate-text-flow {
  animation: text-flow 1s ease-out both;
}

.animate-experience-card {
  animation: experience-card 0.9s ease-out both;
}

.animate-list-item {
  animation: list-item 0.7s ease-out both;
}

.animate-check-bounce {
  animation: check-bounce 0.8s ease-in-out;
}

.animate-pulse-period {
  animation: pulse-period 3s ease-in-out infinite;
}

.animate-education-card {
  animation: education-card 0.9s ease-out both;
}

.animate-pulse-glow {
  animation: pulse-glow 4s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

/* Enhanced Component Styling */
.section-title {
  @apply text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3 cursor-default;
}

.icon-container {
  @apply w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg transition-all duration-300;
}

.contact-item {
  @apply flex items-center gap-3 md:gap-4 text-gray-700 hover:text-gray-900 transition-all duration-300 cursor-pointer p-2 rounded-lg hover:bg-gray-50/80;
}

.icon-wrapper {
  @apply w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-300;
}

.contact-text {
  @apply text-sm md:text-base font-medium;
}

.skill-category-title {
  @apply font-bold text-gray-800 mb-3 text-sm md:text-base;
}

.skill-tags {
  @apply flex flex-wrap gap-2;
}

.skill-tag {
  @apply px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold cursor-default transition-all duration-300 transform hover:scale-105;
}

.progress-bar {
  @apply w-full bg-gray-200 rounded-full h-2 md:h-3 overflow-hidden;
}

.progress-fill {
  @apply h-full rounded-full transition-all duration-300;
}

.main-section-title {
  @apply text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 md:mb-8 flex items-center gap-4 cursor-default;
}

.content-card {
  @apply bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 print:bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100/80 hover:shadow-xl transition-all duration-500;
}

.experience-card {
  @apply bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/20 print:bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100/80 hover:shadow-xl hover:border-purple-200/60 transition-all duration-500;
}

.experience-header {
  @apply flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4 mb-4 md:mb-6;
}

.experience-title {
  @apply text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-1 md:mb-2 transition-colors duration-300;
}

.experience-company {
  @apply text-sm md:text-base lg:text-lg text-gray-600 font-medium;
}

.experience-period {
  @apply flex items-center gap-2 text-xs md:text-sm text-gray-500 bg-gray-100 px-3 py-2 rounded-full font-medium;
}

.experience-content {
  @apply mt-4 md:mt-6;
}

.experience-list {
  @apply space-y-3 md:space-y-4;
}

.experience-item {
  @apply flex items-start gap-3 md:gap-4 text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg transition-all duration-300;
}

.achievement-icon {
  @apply w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0 mt-0.5 transition-all duration-300;
}

.education-card {
  @apply bg-gradient-to-br from-gray-50 via-indigo-50/30 to-blue-50/20 print:bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100/80 hover:shadow-xl hover:border-indigo-200/60 transition-all duration-500;
}

.education-header {
  @apply flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4 mb-4 md:mb-6;
}

.education-title {
  @apply text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-1 md:mb-2;
}

.education-institution {
  @apply text-sm md:text-base lg:text-lg text-gray-600 font-medium;
}

.education-period {
  @apply flex items-center gap-2 text-xs md:text-sm text-gray-500 bg-gray-100 px-3 py-2 rounded-full font-medium;
}

.education-content {
  @apply mt-4 md:mt-6;
}

.language-item {
  @apply p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300;
}

/* Enhanced Hover Effects - Fixed Syntax */
.group:hover .icon-container {
  transform: rotate(12deg) scale(1.1);
}

.group:hover .section-title span {
  color: rgb(29 78 216);
}

.group:hover .main-section-title span {
  color: rgb(29 78 216);
}

.back-button:hover {
  border-color: rgba(59, 130, 246, 0.7);
  background-color: rgba(55, 65, 81, 0.6);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.1);
}

.back-button:hover .back-arrow {
  transform: translateX(-0.5rem);
}

.back-button:hover .back-gradient {
  opacity: 1;
}

.photo-container:hover {
  transform: scale(1.1) rotate(2deg);
  --tw-ring-color: rgba(59, 130, 246, 0.8);
  --tw-ring-offset-width: 6px;
}

.photo-container:hover .photo-ring {
  --tw-ring-color: rgba(59, 130, 246, 0.8);
  --tw-ring-offset-width: 6px;
}

.icon-wrapper:hover {
  transform: scale(1.25) rotate(3deg);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.contact-item:hover .icon-wrapper {
  transform: scale(1.25) rotate(3deg);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.experience-item:hover {
  transform: translateX(0.5rem);
}

.experience-item:hover .achievement-icon {
  animation: check-bounce 0.8s ease-in-out;
}

.content-card:hover {
  transform: scale(1.02);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.experience-card:hover {
  transform: scale(1.02);
  border-color: rgba(147, 51, 234, 0.6);
}

.education-card:hover {
  transform: scale(1.02);
  border-color: rgba(79, 70, 229, 0.6);
}

.skill-tag:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.progress-bar:hover .progress-fill {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.language-item:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

/* Utility Classes */
.duration-300 {
  transition-duration: 300ms;
}

.duration-500 {
  transition-duration: 500ms;
}

.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}

.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transform {
  transform: translateZ(0);
}

/* Print Styles */
@media print {
  .print\:bg-white {
    background-color: white !important;
  }
  
  .print\:hidden {
    display: none !important;
  }
  
  * {
    animation: none !important;
    transition: none !important;
  }
  
  .shadow-lg, .shadow-xl, .shadow-2xl {
    box-shadow: none !important;
  }
}

/* Enhanced Responsive Design */
@media (max-width: 768px) {
  .animate-gradient-text {
    font-size: 2rem;
    line-height: 1.2;
  }
  
  .skill-tags {
    gap: 0.5rem;
  }
  
  .experience-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .education-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .back-button:hover {
    transform: none;
  }
  
  .photo-container:hover {
    transform: scale(1.05);
  }
  
  .content-card:hover,
  .experience-card:hover,
  .education-card:hover {
    transform: scale(1.01);
  }
}

/* Base Utility Classes */
.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.fixed {
  position: fixed;
}

.inset-0 {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.z-10 {
  z-index: 10;
}

.min-h-screen {
  min-height: 100vh;
}

.flex {
  display: flex;
}

.flex-1 {
  flex: 1 1 0%;
}

.flex-col {
  flex-direction: column;
}

.flex-row {
  flex-direction: row;
}

.flex-shrink-0 {
  flex-shrink: 0;
}

.items-center {
  align-items: center;
}

.items-start {
  align-items: flex-start;
}

.justify-between {
  justify-content: space-between;
}

.gap-2 {
  gap: 0.5rem;
}

.gap-3 {
  gap: 0.75rem;
}

.gap-4 {
  gap: 1rem;
}

.gap-6 {
  gap: 1.5rem;
}

.gap-8 {
  gap: 2rem;
}

.gap-10 {
  gap: 2.5rem;
}

.gap-12 {
  gap: 3rem;
}

.space-y-3 > :not([hidden]) ~ :not([hidden]) {
  margin-top: 0.75rem;
}

.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  margin-top: 1rem;
}

.space-y-5 > :not([hidden]) ~ :not([hidden]) {
  margin-top: 1.25rem;
}

.space-y-6 > :not([hidden]) ~ :not([hidden]) {
  margin-top: 1.5rem;
}

.space-y-8 > :not([hidden]) ~ :not([hidden]) {
  margin-top: 2rem;
}

.space-y-12 > :not([hidden]) ~ :not([hidden]) {
  margin-top: 3rem;
}

/* Typography */
.font-medium {
  font-weight: 500;
}

.font-semibold {
  font-weight: 600;
}

.font-bold {
  font-weight: 700;
}

.font-black {
  font-weight: 900;
}

.leading-tight {
  line-height: 1.25;
}

.leading-relaxed {
  line-height: 1.625;
}

.tracking-normal {
  letter-spacing: 0em;
}

/* Border Radius */
.rounded-full {
  border-radius: 9999px;
}

.rounded-xl {
  border-radius: 0.75rem;
}

.rounded-2xl {
  border-radius: 1rem;
}

.rounded-3xl {
  border-radius: 1.5rem;
}

.rounded-lg {
  border-radius: 0.5rem;
}

/* Shadows */
.shadow-sm {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.shadow-md {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Layout Utilities */
.grid {
  display: grid;
}

.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.container {
  width: 100%;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.max-w-5xl {
  max-width: 64rem;
}

/* Overflow */
.overflow-x-hidden {
  overflow-x: hidden;
}

.overflow-hidden {
  overflow: hidden;
}

/* Pointer Events */
.pointer-events-none {
  pointer-events: none;
}

/* Cursor */
.cursor-default {
  cursor: default;
}

.cursor-pointer {
  cursor: pointer;
}

/* Text utilities */
.text-transparent {
  color: transparent;
}

.bg-clip-text {
  background-clip: text;
  -webkit-background-clip: text;
}

.break-all {
  word-break: break-all;
  overflow-wrap: anywhere;
}

/* Object fit */
.object-cover {
  object-fit: cover;
}

/* Backdrop blur */
.backdrop-blur-md {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* Gradient backgrounds */
.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}

.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

/* Ring utilities */
.ring-4 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.ring-offset-4 {
  --tw-ring-offset-width: 4px;
}

/* Responsive Grid */
@media (min-width: 1024px) {
  .lg\:col-span-1 {
    grid-column: span 1 / span 1;
  }
  
  .lg\:col-span-2 {
    grid-column: span 2 / span 2;
  }
  
  .lg\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

/* Responsive spacing */
@media (min-width: 768px) {
  .md\:gap-4 {
    gap: 1rem;
  }
  
  .md\:gap-6 {
    gap: 1.5rem;
  }
  
  .md\:gap-8 {
    gap: 2rem;
  }
  
  .md\:gap-10 {
    gap: 2.5rem;
  }
  
  .md\:gap-12 {
    gap: 3rem;
  }
  
  .md\:space-y-4 > :not([hidden]) ~ :not([hidden]) {
    margin-top: 1rem;
  }
  
  .md\:space-y-5 > :not([hidden]) ~ :not([hidden]) {
    margin-top: 1.25rem;
  }
  
  .md\:space-y-6 > :not([hidden]) ~ :not([hidden]) {
    margin-top: 1.5rem;
  }
  
  .md\:space-y-8 > :not([hidden]) ~ :not([hidden]) {
    margin-top: 2rem;
  }
  
  .md\:space-y-12 > :not([hidden]) ~ :not([hidden]) {
    margin-top: 3rem;
  }
}

@media (min-width: 1024px) {
  .lg\:gap-10 {
    gap: 2.5rem;
  }
  
  .lg\:gap-12 {
    gap: 3rem;
  }
  
  .lg\:space-y-6 > :not([hidden]) ~ :not([hidden]) {
    margin-top: 1.5rem;
  }
}

/* Performance optimizations */
.gpu-accelerated {
  transform: translateZ(0);
  will-change: transform;
}

/* Smooth animations */
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Additional hover effects for specific elements */
.contact-item:hover {
  background-color: rgba(249, 250, 251, 0.8);
}

.section-title:hover {
  color: rgb(29 78 216);
}

.main-section-title:hover {
  color: rgb(29 78 216);
}

/* Icon specific animations */
.achievement-icon:hover {
  animation: check-bounce 0.8s ease-in-out;
}

/* Blur utilities */
.blur-xl {
  filter: blur(24px);
}

.blur-3xl {
  filter: blur(64px);
}

.blur-2xl {
  filter: blur(40px);
}

.blur-lg {
  filter: blur(16px);
}

/* Additional spacing */
.py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.py-12 {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.py-16 {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.p-6 {
  padding: 1.5rem;
}

.p-8 {
  padding: 2rem;
}

.p-10 {
  padding: 2.5rem;
}

.p-12 {
  padding: 3rem;
}

.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

/* Margins */
.mb-3 {
  margin-bottom: 0.75rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.mb-8 {
  margin-bottom: 2rem;
}

.mb-12 {
  margin-bottom: 3rem;
}

.mt-4 {
  margin-top: 1rem;
}

.mt-6 {
  margin-top: 1.5rem;
}

.mb-1 {
  margin-bottom: 0.25rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.mt-0\.5 {
  margin-top: 0.125rem;
}

/* Width and Height */
.w-4 {
  width: 1rem;
}

.w-5 {
  width: 1.25rem;
}

.w-6 {
  width: 1.5rem;
}

.w-8 {
  width: 2rem;
}

.w-10 {
  width: 2.5rem;
}

.w-24 {
  width: 6rem;
}

.w-32 {
  width: 8rem;
}

.w-40 {
  width: 10rem;
}

.w-44 {
  width: 11rem;
}

.w-48 {
  width: 12rem;
}

.w-56 {
  width: 14rem;
}

.w-64 {
  width: 16rem;
}

.w-72 {
  width: 18rem;
}

.w-96 {
  width: 24rem;
}

.w-full {
  width: 100%;
}

.h-1 {
  height: 0.25rem;
}

.h-2 {
  height: 0.5rem;
}

.h-3 {
  height: 0.75rem;
}

.h-4 {
  height: 1rem;
}

.h-5 {
  height: 1.25rem;
}

.h-6 {
  height: 1.5rem;
}

.h-8 {
  height: 2rem;
}

.h-10 {
  height: 2.5rem;
}

.h-32 {
  height: 8rem;
}

.h-40 {
  height: 10rem;
}

.h-44 {
  height: 11rem;
}

.h-48 {
  height: 12rem;
}

.h-56 {
  height: 14rem;
}

.h-64 {
  height: 16rem;
}

.h-72 {
  height: 18rem;
}

.h-96 {
  height: 24rem;
}

.h-full {
  height: 100%;
}

/* Text sizes */
.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}

.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}

.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}

.text-6xl {
  font-size: 3.75rem;
  line-height: 1;
}

.text-7xl {
  font-size: 4.5rem;
  line-height: 1;
}

/* Borders */
.border {
  border-width: 1px;
}

.border-b-2 {
  border-bottom-width: 2px;
}

.border-gray-100 {
  border-color: rgb(243 244 246);
}

.border-gray-700 {
  border-color: rgb(55 65 81);
}

/* Text center */
.text-center {
  text-align: center;
}

.text-left {
  text-align: left;
}

/* Display */
.inline-flex {
  display: inline-flex;
}

/* Transform utilities */
.transform {
  transform: translateZ(0);
}

.-translate-x-1\/2 {
  transform: translateX(-50%);
}

.-translate-y-1\/2 {
  transform: translateY(-50%);
}

/* Top/Bottom/Left/Right positioning */
.top-0 {
  top: 0;
}

.top-20 {
  top: 5rem;
}

.top-1\/2 {
  top: 50%;
}

.top-1\/4 {
  top: 25%;
}

.bottom-20 {
  bottom: 5rem;
}

.bottom-1\/4 {
  bottom: 25%;
}

.left-20 {
  left: 5rem;
}

.left-1\/2 {
  left: 50%;
}

.left-1\/4 {
  left: 25%;
}

.right-20 {
  right: 5rem;
}

.right-1\/4 {
  right: 25%;
}

/* Responsive Design */
@media (min-width: 768px) {
  .md\:text-left {
    text-align: left;
  }
  
  .md\:flex-row {
    flex-direction: row;
  }
  
  .md\:items-start {
    align-items: flex-start;
  }
  
  .md\:justify-between {
    justify-content: space-between;
  }
  
  .md\:w-32 {
    width: 8rem;
  }
  
  .md\:w-40 {
    width: 10rem;
  }
  
  .md\:h-40 {
    height: 10rem;
  }
  
  .md\:w-10 {
    width: 2.5rem;
  }
  
  .md\:h-10 {
    height: 2.5rem;
  }
  
  .md\:w-5 {
    width: 1.25rem;
  }
  
  .md\:h-5 {
    height: 1.25rem;
  }
  
  .md\:text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }
  
  .md\:text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
  
  .md\:text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
  
  .md\:text-3xl {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
  
  .md\:text-4xl {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
  
  .md\:text-base {
    font-size: 1rem;
    line-height: 1.5rem;
  }
  
  .md\:text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  
  .md\:p-8 {
    padding: 2rem;
  }
  
  .md\:p-10 {
    padding: 2.5rem;
  }
  
  .md\:px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .md\:px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  
  .md\:py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  
  .md\:mb-2 {
    margin-bottom: 0.5rem;
  }
  
  .md\:mb-4 {
    margin-bottom: 1rem;
  }
  
  .md\:mb-6 {
    margin-bottom: 1.5rem;
  }
  
  .md\:mb-8 {
    margin-bottom: 2rem;
  }
  
  .md\:mb-12 {
    margin-bottom: 3rem;
  }
  
  .md\:pb-12 {
    padding-bottom: 3rem;
  }
  
  .md\:py-12 {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}

@media (min-width: 1024px) {
  .lg\:text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
  
  .lg\:text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }
  
  .lg\:text-3xl {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
  
  .lg\:text-4xl {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
  
  .lg\:text-6xl {
    font-size: 3.75rem;
    line-height: 1;
  }
  
  .lg\:text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
  
  .lg\:w-40 {
    width: 10rem;
  }
  
  .lg\:w-44 {
    width: 11rem;
  }
  
  .lg\:h-44 {
    height: 11rem;
  }
  
  .lg\:p-12 {
    padding: 3rem;
  }
  
  .lg\:py-16 {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
}

@media (min-width: 1280px) {
  .xl\:text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }
  
  .xl\:text-7xl {
    font-size: 4.5rem;
    line-height: 1;
  }
}

/* Enhanced animation effects for icons and interactions */
.animate-bounce-tiny:hover {
  animation: bounce-tiny 0.6s ease-in-out;
}

.animate-ring:hover {
  animation: ring 0.8s ease-in-out;
}

.animate-pulse-icon:hover {
  animation: pulse-icon 2s ease-in-out infinite;
}

.animate-spin-once:hover {
  animation: spin-once 0.6s ease-in-out;
}

/* Final enhancement classes and closing tag */
.text-white {
  color: rgb(255 255 255);
}
</style>

.text-gray-400 {
  color: rgb(156 163 175);
}

.text-gray-500 {
  color: rgb(107 114 128);
}

.text-gray-600 {
  color: rgb(75 85 99);
}

.text-gray-700 {
  color: rgb(55 65 81);
}

.text-gray-800 {
  color: rgb(31 41 55);
}

.text-gray-900 {
  color: rgb(17 24 39);
}

.text-blue-600 {
  color: rgb(37 99 235);
}

.text-blue-700 {
  color: rgb(29 78 216);
}

.text-blue-800 {
  color: rgb(30 64 175);
}

.text-green-600 {
  color: rgb(22 163 74);
}

.text-red-500 {
  color: rgb(239 68 68);
}

.text-purple-700 {
  color: rgb(126 34 206);
}

.text-purple-800 {
  color: rgb(107 33 168);
}

.text-cyan-700 {
  color: rgb(14 116 144);
}

.text-cyan-800 {
  color: rgb(21 94 117);
}

.text-indigo-700 {
  color: rgb(67 56 202);
}

.text-indigo-800 {
  color: rgb(55 48 163);
}

.text-yellow-800 {
  color: rgb(133 77 14);
}

.text-red-800 {
  color: rgb(153 27 27);
}

.text-green-800 {
  color: rgb(22 101 52);
}

.text-orange-800 {
  color: rgb(154 52 18);
}

/* Background colors */
.bg-white {
  background-color: rgb(255 255 255);
}

.bg-gray-100 {
  background-color: rgb(243 244 246);
}

.bg-gray-800 {
  background-color: rgb(31 41 55);
}

.bg-blue-100 {
  background-color: rgb(219 234 254);
}

.bg-blue-200 {
  background-color: rgb(191 219 254);
}

.bg-purple-100 {
  background-color: rgb(243 232 255);
}

.bg-purple-200 {
  background-color: rgb(221 214 254);
}

.bg-cyan-100 {
  background-color: rgb(207 250 254);
}

.bg-cyan-200 {
  background-color: rgb(165 243 252);
}

.bg-green-100 {
  background-color: rgb(220 252 231);
}

.bg-green-200 {
  background-color: rgb(187 247 208);
}

.bg-yellow-100 {
  background-color: rgb(254 249 195);
}

.bg-yellow-200 {
  background-color: rgb(254 240 138);
}

.bg-red-100 {
  background-color: rgb(254 226 226);
}

.bg-red-200 {
  background-color: rgb(254 202 202);
}

.bg-orange-100 {
  background-color: rgb(255 237 213);
}

.bg-orange-200 {
  background-color: rgb(254 215 170);
}

.bg-indigo-100 {
  background-color: rgb(224 231 255);
}

.bg-indigo-200 {
  background-color: rgb(199 210 254);
}

.bg-gray-700 {
  background-color: rgb(55 65 81);
}

/* Opacity */
.opacity-0 {
  opacity: 0;
}

.opacity-100 {
  opacity: 1;
}

/* Final fixes for specific classes used in HTML */
.font-sans {
  font-family: ui-sans-serif, system-ui, sans-serif;
}

.leading-normal {
  line-height: 1.5;
}

.pb-8 {
  padding-bottom: 2rem;
}

.inline-flex {
  display: inline-flex;
}
