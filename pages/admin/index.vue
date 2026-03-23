<template>
  <div class="min-h-screen bg-slate-900 text-slate-200 p-4 md:p-8">
    
    <div v-if="!isAuthenticated" class="flex flex-col items-center justify-center min-h-[80vh]">
      <div class="bg-slate-800 p-8 rounded-xl border border-slate-700 shadow-2xl w-full max-w-md text-center">
        <div class="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="mdi:lock" class="w-8 h-8 text-purple-400" />
        </div>
        <h2 class="text-2xl font-bold mb-2">Area Terlarang</h2>
        <p class="text-slate-400 mb-6 text-sm">Masukkan kata sandi untuk mengakses CMS Portofolio.</p>
        
        <form @submit.prevent="handleLogin" class="space-y-4">
          <input 
            type="password" 
            v-model="passwordInput" 
            placeholder="Kata Sandi..." 
            class="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
          />
          <p v-if="loginError" class="text-red-400 text-xs text-left">{{ loginError }}</p>
          <button 
            type="submit" 
            class="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
          >
            Buka Kunci
          </button>
        </form>
      </div>
    </div>

    <div v-else class="max-w-5xl mx-auto">
      <div class="flex flex-wrap justify-between items-center mb-10 gap-4">
        <div>
          <h1 class="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Portfolio Manager
          </h1>
          <p class="text-slate-400">Update Proyek, Sertifikat & Testimoni</p>
        </div>
        <div class="flex items-center gap-3">
          <button @click="handleLogout" class="px-4 py-2 bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/30 rounded-lg transition text-sm flex items-center gap-2">
            <Icon name="mdi:lock-outline" /> Kunci
          </button>
          
          <NuxtLink to="/" class="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition text-sm flex items-center gap-2">
            <Icon name="mdi:arrow-left" /> Lihat Portofolio
          </NuxtLink>
        </div>
      </div>

      <div class="mb-20">
        <h2 class="text-2xl font-bold mb-6 text-blue-400 border-b border-slate-700 pb-2">
          Manajemen Proyek
        </h2>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2">
            <form
              @submit.prevent="saveProject"
              class="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl backdrop-blur-sm space-y-6"
            >
              <h3 class="text-xl font-semibold mb-4 flex items-center gap-2">
                <Icon name="mdi:plus-circle" class="text-blue-400" />
                {{ isEditing ? 'Edit Proyek' : 'Tambah Proyek Baru' }}
              </h3>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="space-y-2">
                  <label class="text-xs font-bold uppercase text-slate-500">Judul (ID)</label>
                  <input
                    v-model="form.title.id"
                    class="admin-input"
                    placeholder="Contoh: Sistem Kasir"
                    required
                  />
                </div>
                <div class="space-y-2">
                  <label class="text-xs font-bold uppercase text-slate-500">Title (EN)</label>
                  <input
                    v-model="form.title.en"
                    class="admin-input"
                    placeholder="Ex: Cashier System"
                    required
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div class="space-y-2">
                  <label class="text-xs font-bold uppercase text-slate-400 tracking-wide"
                    >Deskripsi (ID)</label
                  >
                  <textarea
                    v-model="form.description.id"
                    class="admin-input w-full p-3 min-h-[120px] resize-y"
                    placeholder="Jelaskan proyekmu dalam bahasa Indonesia..."
                    required
                  ></textarea>
                </div>

                <div class="space-y-2">
                  <label class="text-xs font-bold uppercase text-slate-400 tracking-wide"
                    >Description (EN)</label
                  >
                  <textarea
                    v-model="form.description.en"
                    class="admin-input w-full p-3 min-h-[120px] resize-y"
                    placeholder="Describe your project in English..."
                    required
                  ></textarea>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div v-for="i in 5" :key="`icon-${i}`" class="space-y-2">
                  <label class="text-xs font-bold uppercase text-slate-500"
                    >Icon Teknologi {{ i }}</label
                  >
                  <div class="relative">
                    <select
                      v-model="form[`mainIcon${i}`]"
                      class="admin-input w-full appearance-none pr-10 cursor-pointer"
                    >
                      <option value="" disabled selected>Pilih Icon {{ i }}...</option>
                      <option value="">-- Kosongkan (Tidak Dipakai) --</option>

                      <optgroup label="Frontend & UI">
                        <option value="mdi:language-html5">HTML5</option>
                        <option value="mdi:language-css3">CSS3</option>
                        <option value="mdi:language-javascript">JavaScript</option>
                        <option value="mdi:vuejs">Vue.js / Nuxt.js</option>
                        <option value="mdi:react">React</option>
                        <option value="mdi:tailwind">Tailwind CSS</option>
                      </optgroup>
                      <optgroup label="Backend & Database">
                        <option value="mdi:nodejs">Node.js</option>
                        <option value="mdi:language-php">PHP / Laravel</option>
                        <option value="mdi:language-python">Python</option>
                        <option value="mdi:database">Database / SQL</option>
                      </optgroup>
                      <optgroup label="Cloud, Mobile & Lainnya">
                        <option value="mdi:aws">AWS</option>
                        <option value="mdi:docker">Docker</option>
                        <option value="mdi:github">GitHub</option>
                        <option value="mdi:api">API</option>
                        <option value="mdi:web">Web Application</option>
                      </optgroup>
                    </select>
                    <div
                      class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400"
                    >
                      <Icon name="mdi:chevron-down" class="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div class="space-y-2">
                  <label class="text-[10px] font-bold uppercase text-slate-400 tracking-wider"
                    >Label {{ i }}</label
                  >
                  <input
                    v-model="form[`iconLabel${i}`]"
                    class="admin-input w-full text-xs py-2"
                    placeholder="Ex: Vue 3"
                  />
                </div>

                <div class="space-y-2">
                  <label class="text-xs font-bold uppercase text-slate-500">GitHub URL</label>
                  <input
                    v-model="form.githubUrl"
                    class="admin-input w-full"
                    placeholder="https://github.com/..."
                  />
                </div>

                <div class="space-y-2">
                  <label class="text-xs font-bold uppercase text-slate-500">Canva Embed URL</label>
                  <input
                    v-model="form.canvaEmbedUrl"
                    class="admin-input w-full"
                    placeholder="https://www.canva.com/design/..."
                  />
                </div>

                <div class="space-y-2">
                  <label class="text-xs font-bold uppercase text-slate-500">Live Website URL</label>
                  <input
                    v-model="form.liveUrl"
                    class="admin-input w-full"
                    placeholder="https://domain-kamu.com"
                  />
                </div>
              </div>

              <div class="space-y-2">
                <label class="text-xs font-bold uppercase text-slate-500"
                  >Tech Stack (Pisahkan dengan koma)</label
                >
                <input
                  v-model="stackInput"
                  class="admin-input"
                  placeholder="Vue.js, Tailwind, Node.js"
                />
              </div>

              <div class="flex gap-3 pt-4">
                <button
                  type="submit"
                  class="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition shadow-lg shadow-blue-900/20"
                >
                  {{ isEditing ? 'Update Proyek' : 'Simpan Proyek' }}
                </button>
                <button
                  v-if="isEditing"
                  @click="resetForm"
                  type="button"
                  class="px-6 bg-slate-700 hover:bg-slate-600 rounded-xl transition"
                >
                  Batal
                </button>
              </div>
            </form>
          </div>

          <div class="space-y-4">
            <h3 class="text-lg font-semibold flex items-center gap-2">
              <Icon name="mdi:format-list-bulleted" class="text-blue-400" />
              Daftar Proyek ({{ projects?.length || 0 }})
            </h3>

            <div class="max-h-[500px] overflow-y-auto space-y-3 pr-2 custom-scrollbar">
              <div
                v-for="item in projects"
                :key="item.id"
                class="group bg-slate-800/30 border border-slate-700 p-4 rounded-xl flex justify-between items-center hover:border-slate-500 transition"
              >
                <div class="flex items-center gap-3">
                  <div
                    class="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-xl"
                  >
                    <Icon :name="item.mainIcon || 'mdi:cube-outline'" />
                  </div>
                  <div>
                    <h3 class="font-medium text-sm">{{ item.title?.id || 'Tanpa Judul' }}</h3>
                    <p class="text-xs text-slate-500">{{ item.stack?.slice(0, 3).join(', ') }}</p>
                  </div>
                </div>

                <div class="flex gap-1 opacity-0 group-hover:opacity-100 transition">
                  <button
                    @click="editProject(item)"
                    class="p-2 hover:bg-blue-500/20 text-blue-400 rounded-md transition"
                  >
                    <Icon name="mdi:pencil" />
                  </button>
                  <button
                    @click="deleteProject(item.id)"
                    class="p-2 hover:bg-red-500/20 text-red-400 rounded-md transition"
                  >
                    <Icon name="mdi:trash-can" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-20">
        <h2 class="text-2xl font-bold mb-6 text-purple-400 border-b border-slate-700 pb-2">
          Manajemen Sertifikat
        </h2>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2">
            <form
              @submit.prevent="saveCertificate"
              class="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl backdrop-blur-sm space-y-6"
            >
              <h3 class="text-xl font-semibold mb-4 flex items-center gap-2">
                <Icon name="mdi:certificate" class="text-purple-400" />
                {{ isEditingCert ? 'Edit Sertifikat' : 'Tambah Sertifikat Baru' }}
              </h3>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="space-y-2">
                  <label class="text-xs font-bold uppercase text-slate-500">Judul (ID)</label>
                  <input
                    v-model="certForm.title.id"
                    placeholder="Contoh: Belajar JavaScript"
                    class="admin-input"
                    required
                  />
                </div>
                <div class="space-y-2">
                  <label class="text-xs font-bold uppercase text-slate-500">Title (EN)</label>
                  <input
                    v-model="certForm.title.en"
                    placeholder="Ex: Learning JavaScript"
                    class="admin-input"
                    required
                  />
                </div>
                <div class="space-y-2">
                  <label class="text-xs font-bold uppercase text-slate-500"
                    >Penerbit (ID & EN)</label
                  >
                  <input
                    v-model="certForm.issuer.id"
                    placeholder="Contoh: Dicoding"
                    class="admin-input"
                    required
                  />
                </div>
                <div class="space-y-2">
                  <label class="text-xs font-bold uppercase text-slate-500">Tanggal</label>
                  <input
                    v-model="certForm.date.id"
                    placeholder="Contoh: Juni 2025"
                    class="admin-input"
                    required
                  />
                </div>

                <div class="space-y-2 col-span-1 md:col-span-2">
                  <label class="text-xs font-bold uppercase text-slate-500"
                    >Upload Gambar Sertifikat</label
                  >
                  <div class="flex items-center gap-3">
                    <input
                      type="file"
                      accept="image/*"
                      @change="handleFileUpload"
                      class="admin-input cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-500/20 file:text-purple-400 hover:file:bg-purple-500/30 w-full"
                      :disabled="isUploading"
                    />

                    <div
                      v-if="certForm.imageUrl"
                      class="w-16 h-12 bg-slate-700 rounded overflow-hidden flex-shrink-0 border border-slate-600"
                    >
                      <img
                        :src="certForm.imageUrl"
                        class="w-full h-full object-cover"
                        alt="Preview"
                      />
                    </div>
                  </div>
                  <p v-if="isUploading" class="text-xs text-blue-400 animate-pulse mt-1">
                    Sedang mengupload gambar...
                  </p>
                </div>

                <div class="space-y-2 col-span-1 md:col-span-2">
                  <label class="text-xs font-bold uppercase text-slate-500"
                    >File Dokumen / Link G-Drive</label
                  >
                  <p class="text-[10px] text-slate-400 mb-2">
                    Pilih salah satu: Upload file PDF/Gambar dari laptop
                    <strong class="text-purple-400">ATAU</strong> masukkan link eksternal.
                  </p>

                  <div
                    class="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-800/30 p-4 rounded-xl border border-slate-700/50"
                  >
                    <div class="space-y-2">
                      <label class="text-[10px] font-bold uppercase text-purple-400"
                        >Opsi 1: Upload File Lokal</label
                      >
                      <div class="flex items-center gap-3">
                        <input
                          type="file"
                          accept=".pdf,image/*"
                          @change="handleCertDocumentUpload"
                          class="admin-input cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-500/20 file:text-purple-400 hover:file:bg-purple-500/30 w-full text-xs"
                          :disabled="isUploadingDoc"
                        />
                      </div>
                      <p v-if="isUploadingDoc" class="text-xs text-purple-400 animate-pulse mt-1">
                        Sedang mengupload dokumen...
                      </p>
                      <p
                        v-if="certForm.documentUrl && certForm.documentUrl.includes('supabase')"
                        class="text-[10px] text-green-400 mt-1"
                      >
                        ✓ File siap didownload.
                      </p>
                    </div>

                    <div class="space-y-2">
                      <label class="text-[10px] font-bold uppercase text-blue-400"
                        >Opsi 2: Link Google Drive</label
                      >
                      <input
                        v-model="certForm.driveUrl"
                        placeholder="https://drive.google.com/..."
                        class="admin-input"
                        :disabled="
                          !!(certForm.documentUrl && certForm.documentUrl.includes('supabase'))
                        "
                      />
                    </div>
                  </div>
                </div>
                <div class="space-y-2">
                  <label class="text-xs font-bold uppercase text-slate-500">Kategori</label>
                  <select v-model="certForm.categoryId" class="admin-input" required>
                    <option v-for="cat in categories" :key="cat.id" :value="cat.id">
                      {{ cat.label.en }}
                    </option>
                  </select>
                </div>
                <div class="space-y-2 col-span-1 md:col-span-2">
                  <label class="text-xs font-bold uppercase text-slate-500"
                    >Skills (Pisahkan koma)</label
                  >
                  <input
                    v-model="certSkillsInput"
                    placeholder="HTML, CSS, JS"
                    class="admin-input"
                    required
                  />
                </div>
              </div>

              <div class="flex gap-3 pt-4">
                <button
                  type="submit"
                  class="flex-1 bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 rounded-xl transition shadow-lg shadow-purple-900/20"
                  :disabled="isUploading"
                >
                  {{ isEditingCert ? 'Update Sertifikat' : 'Simpan Sertifikat' }}
                </button>
                <button
                  v-if="isEditingCert"
                  @click="resetCertForm"
                  type="button"
                  class="px-6 bg-slate-700 hover:bg-slate-600 rounded-xl transition"
                >
                  Batal
                </button>
              </div>
            </form>
          </div>

          <div class="space-y-4">
            <h3 class="text-lg font-semibold flex items-center gap-2">
              <Icon name="mdi:format-list-bulleted" class="text-purple-400" />
              Daftar Sertifikat ({{ certificates?.length || 0 }})
            </h3>

            <div class="max-h-[500px] overflow-y-auto space-y-3 pr-2 custom-scrollbar">
              <div
                v-for="cert in certificates"
                :key="cert.id"
                class="group bg-slate-800/30 border border-slate-700 p-4 rounded-xl flex justify-between items-center hover:border-slate-500 transition"
              >
                <div class="flex items-center gap-3 overflow-hidden">
                  <div
                    class="w-12 h-10 bg-slate-700 rounded overflow-hidden flex-shrink-0 flex items-center justify-center"
                  >
                    <img
                      v-if="cert.imageUrl"
                      :src="cert.imageUrl"
                      class="w-full h-full object-cover opacity-80"
                      alt="cert"
                    />
                    <Icon v-else name="mdi:image-off-outline" class="text-gray-500" />
                  </div>
                  <div class="truncate">
                    <h3 class="font-medium text-sm truncate">
                      {{ cert.title?.id || 'Tanpa Judul' }}
                    </h3>
                    <p class="text-xs text-slate-500">{{ cert.issuer?.id || '-' }}</p>
                  </div>
                </div>

                <div class="flex gap-1 opacity-0 group-hover:opacity-100 transition flex-shrink-0">
                  <button
                    @click="editCertificate(cert)"
                    class="p-2 hover:bg-purple-500/20 text-purple-400 rounded-md transition"
                  >
                    <Icon name="mdi:pencil" />
                  </button>
                  <button
                    @click="deleteCertificate(cert.id)"
                    class="p-2 hover:bg-red-500/20 text-red-400 rounded-md transition"
                  >
                    <Icon name="mdi:trash-can" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-20">
        <h2 class="text-2xl font-bold mb-6 text-green-400 border-b border-slate-700 pb-2">
          Manajemen Testimoni
        </h2>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2">
            <form
              @submit.prevent="saveTestimonial"
              class="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl backdrop-blur-sm space-y-6"
            >
              <h3 class="text-xl font-semibold mb-4 flex items-center gap-2">
                <Icon name="mdi:comment-quote" class="text-green-400" />
                {{ isEditingTesti ? 'Edit Testimoni' : 'Tambah Testimoni Baru' }}
              </h3>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="space-y-2">
                  <label class="text-xs font-bold uppercase text-slate-500">Nama Lengkap</label>
                  <input
                    v-model="testiForm.name.id"
                    placeholder="Nama Klien"
                    class="admin-input"
                    required
                  />
                </div>
                <div class="space-y-2">
                  <label class="text-xs font-bold uppercase text-slate-500"
                    >Jabatan / Perusahaan</label
                  >
                  <input
                    v-model="testiForm.title.id"
                    placeholder="CEO at Perusahaan"
                    class="admin-input"
                    required
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="space-y-2">
                  <label class="text-xs font-bold uppercase text-slate-500">Kutipan (ID)</label>
                  <textarea
                    v-model="testiForm.quote.id"
                    placeholder="Review dalam bahasa Indonesia..."
                    class="admin-input h-24"
                    required
                  ></textarea>
                </div>
                <div class="space-y-2">
                  <label class="text-xs font-bold uppercase text-slate-500">Kutipan (EN)</label>
                  <textarea
                    v-model="testiForm.quote.en"
                    placeholder="Review in English..."
                    class="admin-input h-24"
                    required
                  ></textarea>
                </div>
              </div>

              <div class="space-y-2">
                <label class="text-xs font-bold uppercase text-slate-500">Foto Klien</label>
                <div class="flex items-center gap-3">
                  <input
                    type="file"
                    accept="image/*"
                    @change="handleTestiUpload"
                    class="admin-input cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-500/20 file:text-green-400 hover:file:bg-green-500/30 w-full"
                    :disabled="isUploadingTesti"
                  />

                  <div
                    v-if="testiForm.imageUrl"
                    class="w-12 h-12 bg-slate-700 rounded-full overflow-hidden flex-shrink-0 border border-slate-600 flex items-center justify-center"
                  >
                    <img
                      :src="testiForm.imageUrl"
                      class="w-full h-full object-cover"
                      alt="Preview"
                    />
                  </div>
                </div>
                <p v-if="isUploadingTesti" class="text-xs text-blue-400 animate-pulse mt-1">
                  Sedang mengupload foto...
                </p>
              </div>

              <div class="flex gap-3 pt-4">
                <button
                  type="submit"
                  class="flex-1 bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-xl transition shadow-lg shadow-green-900/20"
                  :disabled="isUploadingTesti"
                >
                  {{ isEditingTesti ? 'Update Testimoni' : 'Simpan Testimoni' }}
                </button>
                <button
                  v-if="isEditingTesti"
                  @click="resetTestiForm"
                  type="button"
                  class="px-6 bg-slate-700 hover:bg-slate-600 rounded-xl transition"
                >
                  Batal
                </button>
              </div>
            </form>
          </div>

          <div class="space-y-4">
            <h3 class="text-lg font-semibold flex items-center gap-2">
              <Icon name="mdi:format-list-bulleted" class="text-green-400" />
              Daftar Testimoni ({{ testimonials?.length || 0 }})
            </h3>

            <div class="max-h-[500px] overflow-y-auto space-y-3 pr-2 custom-scrollbar">
              <div
                v-for="testi in testimonials"
                :key="testi.id"
                class="group bg-slate-800/30 border border-slate-700 p-4 rounded-xl flex justify-between items-center hover:border-slate-500 transition"
              >
                <div class="flex items-center gap-3 overflow-hidden">
                  <div
                    class="w-10 h-10 bg-slate-700 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center"
                  >
                    <img
                      v-if="testi.imageUrl"
                      :src="testi.imageUrl"
                      class="w-full h-full object-cover"
                      alt="foto"
                    />
                    <Icon v-else name="mdi:account" class="text-gray-500" />
                  </div>
                  <div class="truncate">
                    <h3 class="font-medium text-sm truncate">
                      {{ testi.name?.id || 'Tanpa Nama' }}
                    </h3>
                    <p class="text-xs text-slate-500 truncate">{{ testi.title?.id || '-' }}</p>
                  </div>
                </div>

                <div class="flex gap-1 opacity-0 group-hover:opacity-100 transition flex-shrink-0">
                  <button
                    @click="editTestimonial(testi)"
                    class="p-2 hover:bg-green-500/20 text-green-400 rounded-md transition"
                  >
                    <Icon name="mdi:pencil" />
                  </button>
                  <button
                    @click="deleteTestimonial(testi.id)"
                    class="p-2 hover:bg-red-500/20 text-red-400 rounded-md transition"
                  >
                    <Icon name="mdi:trash-can" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-20">
        <h2 class="text-2xl font-bold mb-6 text-rose-400 border-b border-slate-700 pb-2">
          Manajemen Video Intro
        </h2>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2">
            <form
              @submit.prevent="saveVideo"
              class="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl backdrop-blur-sm space-y-6"
            >
              <h3 class="text-xl font-semibold mb-4 flex items-center gap-2">
                <Icon name="mdi:video-vintage" class="text-rose-400" />
                {{ isEditingVideo ? 'Edit Video Intro' : 'Tambah Video Intro Baru' }}
              </h3>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="space-y-2">
                  <label class="text-xs font-bold uppercase text-slate-500">Judul Video (ID)</label>
                  <input
                    v-model="videoForm.title.id"
                    placeholder="Contoh: Perkenalan Diri"
                    class="admin-input"
                    required
                  />
                </div>
                <div class="space-y-2">
                  <label class="text-xs font-bold uppercase text-slate-500">Video Title (EN)</label>
                  <input
                    v-model="videoForm.title.en"
                    placeholder="Ex: Self Introduction"
                    class="admin-input"
                    required
                  />
                </div>
              </div>

              <div class="space-y-2">
                <label class="text-xs font-bold uppercase text-slate-500"
                  >URL Video (YouTube / GDrive)</label
                >
                <input
                  v-model="videoForm.videoUrl"
                  placeholder="https://youtube.com/..."
                  class="admin-input"
                />
                <p class="text-[10px] text-slate-500 mt-1">
                  * Isi dengan link YouTube atau upload file di bawah.
                </p>
              </div>

              <div class="space-y-2">
                <label class="text-xs font-bold uppercase text-slate-500"
                  >Atau Upload File Video (MP4)</label
                >
                <div class="flex items-center gap-3">
                  <input
                    type="file"
                    accept="video/mp4,video/x-m4v,video/*"
                    @change="handleVideoUpload"
                    class="admin-input cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-rose-500/20 file:text-rose-400 hover:file:bg-rose-500/30 w-full"
                    :disabled="isUploadingVideo"
                  />
                </div>
                <p v-if="isUploadingVideo" class="text-xs text-rose-400 animate-pulse mt-1">
                  Sedang mengupload video... (mungkin butuh waktu lama)
                </p>
                <p
                  v-if="videoForm.videoUrl && videoForm.videoUrl.includes('supabase')"
                  class="text-xs text-green-400 mt-1"
                >
                  ✓ File video berhasil diupload.
                </p>
              </div>

              <div class="flex gap-3 pt-4">
                <button
                  type="submit"
                  class="flex-1 bg-rose-600 hover:bg-rose-500 text-white font-bold py-3 rounded-xl transition shadow-lg shadow-rose-900/20"
                  :disabled="isUploadingVideo"
                >
                  {{ isEditingVideo ? 'Update Video' : 'Simpan Video' }}
                </button>
                <button
                  v-if="isEditingVideo"
                  @click="resetVideoForm"
                  type="button"
                  class="px-6 bg-slate-700 hover:bg-slate-600 rounded-xl transition"
                >
                  Batal
                </button>
              </div>
            </form>
          </div>

          <div class="space-y-4">
            <h3 class="text-lg font-semibold flex items-center gap-2">
              <Icon name="mdi:format-list-bulleted" class="text-rose-400" />
              Daftar Video ({{ videos?.length || 0 }})
            </h3>

            <div class="max-h-[500px] overflow-y-auto space-y-3 pr-2 custom-scrollbar">
              <div
                v-for="video in videos"
                :key="video.id"
                class="group bg-slate-800/30 border border-slate-700 p-4 rounded-xl flex justify-between items-center hover:border-slate-500 transition"
              >
                <div class="flex items-center gap-3 overflow-hidden">
                  <div
                    class="w-10 h-10 bg-slate-700 rounded overflow-hidden flex-shrink-0 flex items-center justify-center"
                  >
                    <Icon name="mdi:play-circle-outline" class="text-rose-400 text-2xl" />
                  </div>
                  <div class="truncate">
                    <h3 class="font-medium text-sm truncate">
                      {{ video.title?.id || 'Tanpa Judul' }}
                    </h3>
                    <p class="text-[10px] text-slate-500 truncate mt-1">
                      {{ video.videoUrl ? 'Link Terpasang' : 'Belum ada link' }}
                    </p>
                  </div>
                </div>

                <div class="flex gap-1 opacity-0 group-hover:opacity-100 transition flex-shrink-0">
                  <button
                    @click="editVideo(video)"
                    class="p-2 hover:bg-rose-500/20 text-rose-400 rounded-md transition"
                  >
                    <Icon name="mdi:pencil" />
                  </button>
                  <button
                    @click="deleteVideo(video.id)"
                    class="p-2 hover:bg-red-500/20 text-red-400 rounded-md transition"
                  >
                    <Icon name="mdi:trash-can" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// ==========================================
// SISTEM KEAMANAN (LOGIN SESSION & ENV)
// ==========================================
const isAuthenticated = ref(false);
const passwordInput = ref('');
const loginError = ref('');

// Mengambil password dari file .env (Atau 'passwordCadangan123' jika .env kosong)
const config = useRuntimeConfig();
const SECRET_PASSWORD = config.public.adminPassword; 

// Mengecek apakah sebelumnya sudah login (di tab yang sama)
onMounted(() => {
  if (sessionStorage.getItem('admin_unlocked') === 'true') {
    isAuthenticated.value = true;
  }
});

const handleLogin = () => {
  if (passwordInput.value === SECRET_PASSWORD) {
    isAuthenticated.value = true;
    loginError.value = '';
    // Simpan kunci di sessionStorage (Otomatis terhapus jika tab ditutup)
    sessionStorage.setItem('admin_unlocked', 'true');
  } else {
    loginError.value = 'Kata sandi salah! Akses ditolak.';
    passwordInput.value = '';
  }
};

const handleLogout = () => {
  isAuthenticated.value = false;
  sessionStorage.removeItem('admin_unlocked');
};

// ==========================================
// STATE PROYEK
// ==========================================
const { data: projects, refresh: refreshProjects } = await useFetch('/api/projects');
const isEditing = ref(false);
const stackInput = ref('');

const form = ref({
  id: Date.now(),
  title: { id: '', en: '' },
  description: { id: '', en: '' },
  useIcon: true,
  mainIcon1: '',
  mainIcon2: '',
  mainIcon3: '',
  mainIcon4: '',
  mainIcon5: '',
  iconLabel1: '',
  iconLabel2: '',
  iconLabel3: '',
  iconLabel4: '',
  iconLabel5: '',
  backgroundIcons: ['mdi:code-tags', 'mdi:palette', 'mdi:responsive', 'mdi:star'],
  gradientFrom: 'from-blue-600',
  gradientTo: 'to-purple-600',
  stack: [],
  githubUrl: '',
  canvaEmbedUrl: '',
  liveUrl: '',
  canvaExternalUrl: null,
  canvaTitle: '',
  canvaAuthor: ''
});

const saveProject = async () => {
  form.value.stack = stackInput.value.split(',').map(s => s.trim()).filter(s => s !== '');
  let updatedData = projects.value ? [...projects.value] : [];

  if (isEditing.value) {
    const index = updatedData.findIndex(p => p.id === form.value.id);
    updatedData[index] = { ...form.value };
  } else {
    updatedData.push({ ...form.value, id: Date.now() });
  }

  await $fetch('/api/projects', { method: 'POST', body: updatedData });
  alert('Proyek Berhasil Disimpan!');
  resetForm();
  refreshProjects();
};

const deleteProject = async (id) => {
  if (!confirm('Yakin ingin menghapus proyek ini?')) return;
  const updatedData = projects.value.filter(p => p.id !== id);
  await $fetch('/api/projects', { method: 'POST', body: updatedData });
  refreshProjects();
};

const editProject = (item) => {
  isEditing.value = true;
  form.value = JSON.parse(JSON.stringify(item)); 
  stackInput.value = item.stack ? item.stack.join(', ') : '';
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const resetForm = () => {
  isEditing.value = false;
  stackInput.value = '';
  form.value = {
    id: null, title: { id: '', en: '' }, description: { id: '', en: '' },
    useIcon: true, mainIcon1: '', iconLabel1: '', // Reset lainnya bisa disesuaikan jika perlu
    backgroundIcons: ['mdi:code-tags', 'mdi:palette', 'mdi:responsive', 'mdi:star'],
    gradientFrom: 'from-blue-600', gradientTo: 'to-purple-600',
    stack: [], githubUrl: '', canvaEmbedUrl: '', liveUrl: ''
  };
};

// ==========================================
// STATE SERTIFIKAT
// ==========================================
const categories = [
  { id: 'programming', label: { id: 'Pemrograman', en: 'Programming' } },
  { id: 'backend', label: { id: 'Backend', en: 'Backend' } },
  { id: 'cloud-ai', label: { id: 'Cloud & AI', en: 'Cloud & AI' } },
  { id: 'best-practice', label: { id: 'Best Practice', en: 'Best Practice' } },
  { id: 'management', label: { id: 'Manajemen', en: 'Management' } },
  { id: 'legal', label: { id: 'Legal', en: 'Legal' } },
  { id: 'languages', label: { id: 'Bahasa', en: 'Languages' } },
];

const { data: certificates, refresh: refreshCerts } = await useFetch('/api/certificates');
const isEditingCert = ref(false);
const certSkillsInput = ref('');
const isUploading = ref(false);
const isUploadingDoc = ref(false); 

const certForm = ref({
  id: null,
  title: { id: '', en: '' },
  issuer: { id: '', en: '' },
  date: { id: '', en: '' },
  imageUrl: '',
  driveUrl: '',
  documentUrl: '', 
  categoryId: 'programming',
  skills: []
});

const handleFileUpload = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  isUploading.value = true;
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await $fetch('/api/upload', {
      method: 'POST',
      body: formData
    });
    
    if (response.imageUrl) {
      certForm.value.imageUrl = response.imageUrl;
    }
  } catch (error) {
    console.error('Upload error:', error);
    alert('Gagal mengupload gambar.');
  } finally {
    isUploading.value = false;
  }
};

const handleCertDocumentUpload = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  isUploadingDoc.value = true;
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await $fetch('/api/upload', {
      method: 'POST',
      body: formData
    });
    
    if (response.imageUrl) {
      certForm.value.documentUrl = response.imageUrl;
      certForm.value.driveUrl = ''; 
    }
  } catch (error) {
    console.error('Upload document error:', error);
    alert('Gagal mengupload dokumen.');
  } finally {
    isUploadingDoc.value = false;
  }
};

const saveCertificate = async () => {
  const skillArray = certSkillsInput.value.split(',').map(s => s.trim()).filter(s => s !== '');
  let updatedCerts = certificates.value ? [...certificates.value] : [];
  
  const selectedCat = categories.find(c => c.id === certForm.value.categoryId);
  
  const newCert = { 
    ...certForm.value, 
    id: certForm.value.id || Date.now(),
    skills: skillArray,
    categoryLabel: selectedCat ? selectedCat.label : { id: 'Lainnya', en: 'Others' }
  };

  newCert.issuer.en = newCert.issuer.id;
  newCert.date.en = newCert.date.id;

  if (isEditingCert.value) {
    const idx = updatedCerts.findIndex(c => c.id === certForm.value.id);
    updatedCerts[idx] = newCert;
  } else {
    updatedCerts.push(newCert);
  }

  await $fetch('/api/certificates', { method: 'POST', body: updatedCerts });
  alert('Sertifikat Berhasil Disimpan!');
  resetCertForm();
  refreshCerts();
};

const deleteCertificate = async (id) => {
  if (!confirm('Yakin ingin menghapus sertifikat ini?')) return;
  const updatedData = certificates.value.filter(c => c.id !== id);
  await $fetch('/api/certificates', { method: 'POST', body: updatedData });
  refreshCerts();
};

const editCertificate = (cert) => {
  isEditingCert.value = true;
  certForm.value = JSON.parse(JSON.stringify(cert)); 
  certSkillsInput.value = cert.skills ? cert.skills.join(', ') : '';
  window.scrollTo({ top: document.body.scrollHeight / 2, behavior: 'smooth' });
};

const resetCertForm = () => {
  isEditingCert.value = false;
  certSkillsInput.value = '';
  certForm.value = {
    id: null, title: { id: '', en: '' }, issuer: { id: '', en: '' }, date: { id: '', en: '' },
    imageUrl: '', driveUrl: '', documentUrl: '', categoryId: 'programming', skills: []
  };
};

// ==========================================
// STATE TESTIMONI
// ==========================================
const { data: testimonials, refresh: refreshTestimonials } = await useFetch('/api/testimonials');
const isEditingTesti = ref(false);
const isUploadingTesti = ref(false);

const testiForm = ref({
  id: null,
  name: { id: '', en: '' },
  title: { id: '', en: '' },
  quote: { id: '', en: '' },
  imageUrl: ''
});

const handleTestiUpload = async (event) => {
  const file = event.target.files[0];
  if (!file) return;
  isUploadingTesti.value = true;
  
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await $fetch('/api/upload', { method: 'POST', body: formData });
    if (response.imageUrl) testiForm.value.imageUrl = response.imageUrl;
  } catch (error) {
    alert('Gagal mengupload foto.');
  } finally {
    isUploadingTesti.value = false;
  }
};

const saveTestimonial = async () => {
  try {
    let updatedData = testimonials.value ? [...testimonials.value] : [];
    
    testiForm.value.name.en = testiForm.value.name.id;
    testiForm.value.title.en = testiForm.value.title.id;

    const newData = { 
      ...testiForm.value, 
      id: testiForm.value.id || Date.now() 
    };

    if (isEditingTesti.value) {
      const idx = updatedData.findIndex(t => t.id === testiForm.value.id);
      if (idx !== -1) updatedData[idx] = newData;
    } else {
      updatedData.push(newData);
    }

    await $fetch('/api/testimonials', { 
      method: 'POST', 
      body: updatedData 
    });

    alert('Testimoni Berhasil Disimpan!');
    resetTestiForm();
    await refreshTestimonials();

  } catch (error) {
    console.error('Error saat simpan testimoni:', error);
    alert('Gagal menyimpan testimoni! Buka Inspect Element (F12) tab Console untuk melihat error.');
  }
};

const editTestimonial = (testi) => {
  isEditingTesti.value = true;
  testiForm.value = JSON.parse(JSON.stringify(testi));
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
};

const deleteTestimonial = async (id) => {
  if (!confirm('Hapus testimoni ini?')) return;
  const updatedData = testimonials.value.filter(t => t.id !== id);
  await $fetch('/api/testimonials', { method: 'POST', body: updatedData });
  refreshTestimonials();
};

const resetTestiForm = () => {
  isEditingTesti.value = false;
  testiForm.value = { id: null, name: { id: '', en: '' }, title: { id: '', en: '' }, quote: { id: '', en: '' }, imageUrl: '' };
};

// ==========================================
// STATE VIDEO INTRO
// ==========================================
const { data: videos, refresh: refreshVideos } = await useFetch('/api/videos');
const isEditingVideo = ref(false);
const isUploadingVideo = ref(false);

const videoForm = ref({
  id: null,
  title: { id: '', en: '' },
  videoUrl: '' 
});

const handleVideoUpload = async (event) => {
  const file = event.target.files[0];
  if (!file) return;
  isUploadingVideo.value = true;
  
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await $fetch('/api/upload', { method: 'POST', body: formData });
    if (response.imageUrl) {
      videoForm.value.videoUrl = response.imageUrl; 
    }
  } catch (error) {
    alert('Gagal mengupload video. Pastikan ukuran file tidak melebihi limit server.');
  } finally {
    isUploadingVideo.value = false;
  }
};

const saveVideo = async () => {
  try {
    let updatedData = videos.value ? [...videos.value] : [];
    
    const newData = { 
      ...videoForm.value, 
      id: videoForm.value.id || Date.now() 
    };

    if (isEditingVideo.value) {
      const idx = updatedData.findIndex(v => v.id === videoForm.value.id);
      if (idx !== -1) updatedData[idx] = newData;
    } else {
      updatedData.push(newData);
    }

    await $fetch('/api/videos', { 
      method: 'POST', 
      body: updatedData 
    });

    alert('Video Berhasil Disimpan!');
    resetVideoForm();
    await refreshVideos();

  } catch (error) {
    console.error('Error saat simpan video:', error);
    alert('Gagal menyimpan video!');
  }
};

const editVideo = (video) => {
  isEditingVideo.value = true;
  videoForm.value = JSON.parse(JSON.stringify(video));
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
};

const deleteVideo = async (id) => {
  if (!confirm('Hapus video ini?')) return;
  const updatedData = videos.value.filter(v => v.id !== id);
  await $fetch('/api/videos', { method: 'POST', body: updatedData });
  refreshVideos();
};

const resetVideoForm = () => {
  isEditingVideo.value = false;
  videoForm.value = { id: null, title: { id: '', en: '' }, videoUrl: '' };
};

</script>

<style scoped>
.admin-input {
  width: 100%;
  background-color: #0f172a;
  border: 1px solid #334155;
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  color: #e2e8f0;
  transition: all 0.2s;
}

.admin-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 1px #3b82f6;
}

.admin-input::placeholder {
  color: #64748b;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(30, 41, 59, 0.5);
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #475569;
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #64748b;
}
</style>
