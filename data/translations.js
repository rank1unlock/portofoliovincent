// data/translations.js
import { ref } from 'vue';

export const translations = ref({
   // Teks untuk Navbar
  navbar: {
    home: { id: 'Beranda', en: 'Home' },
    about: { id: 'Tentang', en: 'About' },
    gallery: { id: 'Galeri', en: 'Gallery' },
    projects: { id: 'Proyek', en: 'Projects' },
    skills: { id: 'Keahlian', en: 'Skills' },
    video: { id: 'Video Perkenalan', en: 'Video Introduction' },
    testimonials: { id: 'Testimoni', en: 'Testimonials' }, 
    contact: { id: 'Kontak', en: 'Contact' },
  },


  // Teks untuk Hero Section
  hero: {
    roles: {
      id: ["Full-Stack Developer", "Database Developer", "Software Developer", "IT Support", "Network Engineer"],
      en: ["Full-Stack Developer", "Database Developer", "Software Developer", "IT Support", "Network Engineer"]
    },
    slogan: { 
        id: '"Waktu adalah segalanya, efisiensi adalah kunci."',
        en: `"Break the limits, where efficiency drives every move."`
    },
    download_cv: { id: 'Unduh CV', en: 'Download CV' },
    see_resume: { id: 'Lihat Resume Online', en: 'See Online Resume' },
  },


  // Teks untuk About Me Section
  about: {
    title: { id: 'Tentang Saya', en: 'About Me' },
    description: {
      id: 'Saya adalah seorang pengembang teknologi yang antusias dengan keahlian di berbagai bidang mulai dari pengembangan web hingga dukungan IT. Saya percaya pada solusi yang efisien dan selalu mencari cara untuk mengoptimalkan proses kerja dan teknologi.',
      en: 'I am an enthusiastic technology developer with expertise in various fields, from web development to IT support. I believe in efficient solutions and am always looking for ways to optimize work processes and technology.'
    },
    main_skills: { id: 'Skill Utama', en: 'Main Skills' },
    experience: { id: 'Pengalaman Singkat', en: 'Brief Experience' },
    job1_title: { id: 'IT Support & Software Developer', en: 'IT Support & Software Developer' },
    job1_place: { id: 'Institut Teknologi Dan Bisnis Asia Malang (2024 - Sekarang)', en: 'Institute Technology and Business Asia Malang (2024 - Present)' },
    job1_desc: {
      id: 'Memberikan dukungan teknis untuk lingkungan kampus dan berpartisipasi dalam pengembangan perangkat lunak serta Jaringan Internet internal.',
      en: 'Providing technical support for the campus environment and participating in the development of internal software and Internet networks.'
    },
    job2_title: { id: 'IT Freelancer', en: 'IT Freelancer' },
    job2_place: { id: 'Remote (2022 - Sekarang)', en: 'Remote (2022 - Present)' },
    job2_desc: {
        id: 'Mengerjakan berbagai proyek IT termasuk pembuatan website, setup jaringan, Pembuatan Program Desktop dan perbaikan software/hardware untuk berbagai klien.',
        en: 'Working on various IT projects including website creation, network setup, Desktop Program creation, and software/hardware repair for various clients.'
    }
  },
  // Teks untuk Gallery Section
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
},
  // Teks untuk Project Section
  projects: {
    title: { id: 'Proyek Terbaru Saya', en: 'My Recent Projects' },
    description: {
        id: 'Beberapa proyek yang pernah saya kerjakan, baik proyek pribadi maupun untuk keperluan studi.',
        en: 'Some of the projects I have worked on, both personal and for study purposes.'
    },
    // live_demo_button: { id: 'Demo Langsung', en: 'Live Demo' },
    cards: {
        portfolio: {
            title: { id: 'Website Portofolio', en: 'Portfolio Website' },
            description: {  id: 'Sebuah portofolio pribadi yang dibangun dari awal untuk menampilkan proyek, skill, dan pengalaman saya menggunakan Nuxt.js.', 
                            en: 'A personal portfolio built from scratch to showcase my projects, skills, and experience using Nuxt.js.'}
        },
        store_system: {
            title: { id: 'Sistem Prediksi Bahan Pangan', en: 'Food Stock Prediction System' },
            description: { id: 'Sistem informasi berbasis web menggunakan CodeIgniter dan MySQL untuk memprediksi kebutuhan bahan pangan dengan metode Triple Exponential Smoothing, disimulasikan dengan Particle Swarm Optimization (PSO).', 
                          en: 'A web-based information system using CodeIgniter and MySQL to forecast food supply using Triple Exponential Smoothing, simulated with Particle Swarm Optimization (PSO).'}
        },
        weather_app: {
            title: { id: 'Aplikasi Chatbot', en: 'Chatbot Application' },
            description: { id: 'Aplikasi Chatbot dengan mengangkat Tema Layanan & Produk Spa.', 
                           en: 'A Chatbot Application For Spa Service and Products.' }
        },
        company_profile: {
            title: { id: 'Toko Online', en: 'E-Shop' },
            description: { id: 'Pengembangan aplikasi e-commerce menggunakan Django dengan fitur katalog produk, keranjang belanja, manajemen pengguna, dan checkout. Fokus pada backend yang efisien dan tampilan yang responsif.', 
                           en: 'Developed an e-commerce application using Django, featuring product catalog, shopping cart, user management, and checkout. Focused on efficient backend and responsive design.'}
        },
        chatbot_bert: {
            title: { id: 'Chatbot Akademik', en: 'Academic Chatbot' },
            description: { id: 'Pengembangan aplikasi chatbot akademik menggunakan Algoritma BERT, Python, Framework Code Igniter, dan MySQL Database untuk membantu mahasiswa dalam menjawab pertanyaan akademik.', 
                           en: 'Developed an academic chatbot using BERT Algorithm, Python, Codeigniter, and MySQL Database to assist students in answering academic questions.'}
        },
    }
  },
  // Teks untuk Skills Section
  skills: {
    title: { id: 'Keahlian & Pengalaman Saya', en: 'My Skills & Expertise' },
    frameworks_title: { id: 'Framework & Supporting Tools', en: 'Framework & Alat Pendukung' },
    languages_tools_title: { id: 'Bahasa & Alat', en: 'Languages & Tools' },
    networking_title: { id: 'Jaringan & Pemeliharaan', en: 'Networking & Maintenance' },
    languages_title: { id: 'Bahasa', en: 'Languages' },
    soft_skills_title: { id: 'Keahlian Interpersonal', en: 'Soft Skills' },
    otherSkills: {
        networking: [
            { name: { id: 'Winbox (Mikrotik)', en: 'Winbox (Mikrotik)' }, icon: 'mdi:router-wireless' },
            { name: { id: 'Pemeliharaan Perangkat Lunak', en: 'Software Maintenance' }, icon: 'mdi:cog' },
            { name: { id: 'Pemeliharaan Perangkat Keras', en: 'Hardware Maintenance' }, icon: 'mdi:desktop-tower-monitor' },
        ],
        languages: [
            { name: { id: 'Indonesia (Asli)', en: 'Indonesia (Native)' }, icon: 'emojione-v1:flag-for-indonesia' },
            { name: { id: 'Inggris (Profesional)', en: 'English (Professional)' }, icon: 'emojione-v1:flag-for-united-kingdom' },
            { name: { id: 'Mandarin (Dasar)', en: 'Chinese (Basic)' }, icon: 'emojione-v1:flag-for-china' },
        ],
        softSkills: [
            { name: { id: 'Pemecahan Masalah', en: 'Problem Solving' }, icon: 'mdi:lightbulb-on-outline' },
            { name: { id: 'Mengetik Cepat', en: 'Fast Typing' }, icon: 'mdi:keyboard-outline' },
            { name: { id: 'Kolaborasi Tim', en: 'Team Collaboration' }, icon: 'mdi:account-group-outline' },
            { name: { id: 'Kemampuan Beradaptasi', en: 'Adaptability' }, icon: 'mdi:sync-alert' },
        ],
    }
  },
  // Teks untuk Video Introduction Section
video: {
  title: { 
    id: 'Sekilas Tentang Semangat Saya', 
    en: 'A Glimpse Into My Passion' 
  },
  description: { 
    id: 'Dalam video singkat ini, saya akan berbagi sedikit tentang biodata saya, keterampilan teknis (skills) yang saya miliki, serta soft skills yang membantu saya dalam bekerja dan berkolaborasi dengan orang lain.', 
    en: 'In this short video, I will briefly share my background, the technical skills I have, and the soft skills that help me work effectively and collaborate with others.' 
  },
  quote: { 
    id: '"Saya percaya bahwa teknologi terbaik adalah yang mampu memecahkan masalah nyata dan membuat hidup lebih mudah. Itulah yang mendorong saya setiap hari."', 
    en: '"I believe the best technology is that which solves real problems and makes life easier. That\'s what drives me every day."' 
  }
},


  // Teks untuk testimonial section
testimonials: {
    title: { id: 'Apa Kata Mereka', en: 'What They Say' }
},

  testimonials: {
    title: { id: 'Apa Kata Mereka', en: 'What They Say' },
    list: [
      {
        name: { id: 'Lilis Widayanti, S.Pd, M.Pd', en: 'Lilis Widayanti, S.Pd, M.Pd' },
        title: { id: 'Dosen Matematika', en: 'Mathematics Lecturer' },
        quote: { 
            id: 'Vincent adalah developer yang sangat efisien dan terampil. Dia memberikan hasil di luar ekspektasi saya dan sangat menyenangkan untuk diajak bekerja sama.',
            en: 'Vincent is an incredibly efficient and skilled developer. He delivered results beyond my expectations and was a pleasure to work with.'
        },
        imageUrl: '/images/bulilis.png'
      },
      {
        name: { id: 'Abd. Hadi, S.Kom, M.Kom', en: 'Abd. Hadi, S.Kom, M.Kom' },
        title: { id: 'Dosen Informatika', en: 'Computer Science Lecturer' },
        quote: { 
            id: 'Kemampuan memecahkan masalahnya luar biasa. Vincent berhasil menyelesaikan proyek dosen yang kompleks di bidang pengembangan web full stack menggunakan CodeIgniter, dengan pendekatan yang tenang, logis, dan metodis.',
            en: 'His problem-solving skills are outstanding. Vincent successfully completed a complex faculty project in full-stack web development using CodeIgniter with a calm, logical, and methodical approach.'
        },
        imageUrl: '/images/pakhadi.png'
      },
      {
        name: { id: 'Desi Anggraini', en: 'Desi Anggraini' },
        title: { id: 'Klien Freelance', en: 'Freelance Client' },
        quote: { 
            id: 'Bekerja dengan Vincent pada prototipe awal kami adalah sebuah terobosan. Kemampuan full-stacknya sangat mengesankan.',
            en: 'Working with Vincent on our initial prototype was a game-changer. His full-stack capabilities are impressive.'
        },
        imageUrl: '/images/girl1.png'
      },
      {
        name: { id: 'Teguh Santoso', en: 'Teguh Santoso' },
        title: { id: 'Klien Freelance', en: 'Freelance Client' },
        quote: { 
            id: 'Dia adalah orang yang saya tuju untuk tugas apa pun yang berhubungan dengan IT. Andal, cepat, dan selalu memberikan hasil berkualitas tinggi.',
            en: 'He is my go-to person for any IT-related tasks. Reliable, fast, and always delivers high-quality work.'
        },
        imageUrl: '/images/teguh.png'
      }
    ]
},

// Teks untuk Contact Section
  contact: {
      title: { id: 'Hubungi Saya', en: 'Get In Touch' },
      description: {
          id: 'Punya pertanyaan atau ingin bekerja sama? Mari terhubung.',
          en: 'Have a question or want to work together? Let\'s connect.'
      },
      info_title: { id: 'Informasi Kontak', en: 'Contact Information' },
      form: {
          full_name: { id: 'Nama Lengkap', en: 'Full Name' },
          email: { id: 'Alamat Email', en: 'Email Address' },
          subject: { id: 'Subjek', en: 'Subject' },
          message: { id: 'Pesan', en: 'Message' },
          your_name_placeholder: { id: 'Nama Anda', en: 'Your Name' },
          your_email_placeholder: { id: 'email.anda@contoh.com', en: 'your.email@example.com' },
          subject_placeholder: { id: 'Tentang apa ini?', en: 'What is this about?' },
          message_placeholder: { id: 'Pesan Anda di sini...', en: 'Your message here...' },
          send_button: { id: 'Kirim Pesan', en: 'Send Message' }
      }
  },

  // Teks untuk Footer
  footer: {
      rights_reserved: { id: 'Hak Cipta Dilindungi', en: 'All Rights Reserved' },
      built_with: { id: 'Dibuat dengan', en: 'Built with' }
  }
});
