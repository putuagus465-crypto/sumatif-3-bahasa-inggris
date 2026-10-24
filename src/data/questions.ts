import { Question } from '../types';

// High quality educational SVG Visual Assets for Bahasa Inggris Kelas 3 SD - Activities at Home
// Bersih tanpa bocoran jawaban agar siswa menjawab murni berdasarkan penguasaan kosakata bahasa Inggris
const SVG_ICONS = {
  // Ilustrasi Ruangan Rumah (Rooms in the House)
  houseRooms: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 220" width="100%" height="100%">
      <rect width="600" height="220" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
      <text x="300" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Rooms in the House (Ruangan di Rumah)</text>
      
      <!-- 1. Bedroom -->
      <g transform="translate(20, 42)">
        <rect width="125" height="150" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
        <text x="62.5" y="32" font-family="sans-serif" font-size="24" text-anchor="middle">🛏️</text>
        <text x="62.5" y="60" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1d4ed8" text-anchor="middle">Bedroom</text>
        <text x="62.5" y="78" font-family="sans-serif" font-size="9.5" fill="#3b82f6" text-anchor="middle">(Kamar Tidur)</text>
        <line x1="12" y1="90" x2="113" y2="90" stroke="#bfdbfe"/>
        <text x="62.5" y="112" font-family="sans-serif" font-size="9" fill="#1e40af" text-anchor="middle">Sleeping &amp;</text>
        <text x="62.5" y="128" font-family="sans-serif" font-size="9" fill="#1e40af" text-anchor="middle">Resting</text>
      </g>

      <!-- 2. Bathroom -->
      <g transform="translate(160, 42)">
        <rect width="125" height="150" rx="10" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
        <text x="62.5" y="32" font-family="sans-serif" font-size="24" text-anchor="middle">🚿</text>
        <text x="62.5" y="60" font-family="sans-serif" font-size="12" font-weight="bold" fill="#15803d" text-anchor="middle">Bathroom</text>
        <text x="62.5" y="78" font-family="sans-serif" font-size="9.5" fill="#22c55e" text-anchor="middle">(Kamar Mandi)</text>
        <line x1="12" y1="90" x2="113" y2="90" stroke="#bbf7d0"/>
        <text x="62.5" y="112" font-family="sans-serif" font-size="9" fill="#14532d" text-anchor="middle">Taking a bath &amp;</text>
        <text x="62.5" y="128" font-family="sans-serif" font-size="9" fill="#14532d" text-anchor="middle">Brushing teeth</text>
      </g>

      <!-- 3. Living Room -->
      <g transform="translate(300, 42)">
        <rect width="125" height="150" rx="10" fill="#fefce8" stroke="#eab308" stroke-width="1.5"/>
        <text x="62.5" y="32" font-family="sans-serif" font-size="24" text-anchor="middle">🛋️</text>
        <text x="62.5" y="60" font-family="sans-serif" font-size="12" font-weight="bold" fill="#854d0e" text-anchor="middle">Living Room</text>
        <text x="62.5" y="78" font-family="sans-serif" font-size="9.5" fill="#a16207" text-anchor="middle">(Ruang Tamu/Keluarga)</text>
        <line x1="12" y1="90" x2="113" y2="90" stroke="#fef08a"/>
        <text x="62.5" y="112" font-family="sans-serif" font-size="9" fill="#713f12" text-anchor="middle">Watching TV &amp;</text>
        <text x="62.5" y="128" font-family="sans-serif" font-size="9" fill="#713f12" text-anchor="middle">Relaxing</text>
      </g>

      <!-- 4. Kitchen -->
      <g transform="translate(440, 42)">
        <rect width="135" height="150" rx="10" fill="#fff7ed" stroke="#f97316" stroke-width="1.5"/>
        <text x="67.5" y="32" font-family="sans-serif" font-size="24" text-anchor="middle">🍳</text>
        <text x="67.5" y="60" font-family="sans-serif" font-size="12" font-weight="bold" fill="#9a3412" text-anchor="middle">Kitchen</text>
        <text x="67.5" y="78" font-family="sans-serif" font-size="9.5" fill="#ea580c" text-anchor="middle">(Dapur Rumah)</text>
        <line x1="12" y1="90" x2="123" y2="90" stroke="#ffedd5"/>
        <text x="67.5" y="112" font-family="sans-serif" font-size="9" fill="#7c2d12" text-anchor="middle">Cooking &amp;</text>
        <text x="67.5" y="128" font-family="sans-serif" font-size="9" fill="#7c2d12" text-anchor="middle">Preparing food</text>
      </g>
    </svg>
  `)}`,

  // Ilustrasi Sapu dan Pengki (Broom and Dustpan)
  broomAndDustpan: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 200" width="100%" height="100%">
      <rect width="460" height="200" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
      <text x="230" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Chore Illustration: Cleaning the Floor</text>
      
      <!-- Sapu (Broom) -->
      <g transform="translate(130, 40)">
        <line x1="20" y1="10" x2="60" y2="105" stroke="#854d0e" stroke-width="7" stroke-linecap="round"/>
        <path d="M 45 100 L 95 115 L 85 145 L 35 130 Z" fill="#eab308" stroke="#ca8a04" stroke-width="1.5"/>
        <line x1="42" y1="135" x2="90" y2="148" stroke="#ca8a04" stroke-width="2"/>
        <line x1="40" y1="140" x2="88" y2="153" stroke="#ca8a04" stroke-width="2"/>
      </g>

      <!-- Pengki (Dustpan) -->
      <g transform="translate(230, 80)">
        <rect x="25" y="10" width="14" height="40" rx="3" fill="#0284c7" stroke="#0369a1"/>
        <path d="M 0 50 L 64 50 L 58 85 L 6 85 Z" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>
        <!-- Dust particles -->
        <circle cx="25" cy="70" r="2.5" fill="#64748b"/>
        <circle cx="35" cy="65" r="2" fill="#64748b"/>
        <circle cx="45" cy="72" r="3" fill="#64748b"/>
      </g>
    </svg>
  `)}`,

  // Ilustrasi Gembor Penyiram Tanaman (Watering Can & Flowers)
  wateringCan: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 200" width="100%" height="100%">
      <rect width="460" height="200" rx="16" fill="#f0fdf4" stroke="#86efac" stroke-width="2"/>
      <text x="230" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#166534" text-anchor="middle">Chore Illustration: Yard &amp; Garden Activity</text>
      
      <!-- Watering can -->
      <g transform="translate(110, 45)">
        <rect x="30" y="30" width="75" height="70" rx="14" fill="#38bdf8" stroke="#0284c7" stroke-width="2"/>
        <path d="M 25 35 C 0 35, 0 85, 28 85" fill="none" stroke="#0284c7" stroke-width="6" stroke-linecap="round"/>
        <path d="M 105 50 L 145 25" fill="none" stroke="#0284c7" stroke-width="7" stroke-linecap="round"/>
        <ellipse cx="148" cy="23" rx="7" ry="12" fill="#0369a1"/>
        <!-- Water droplets -->
        <circle cx="165" cy="40" r="2.5" fill="#0284c7"/>
        <circle cx="175" cy="55" r="2.5" fill="#0284c7"/>
        <circle cx="180" cy="70" r="3" fill="#0284c7"/>
      </g>

      <!-- Potted Flower -->
      <g transform="translate(290, 60)">
        <polygon points="20,50 60,50 52,95 28,95" fill="#ea580c" stroke="#c2410c" stroke-width="2"/>
        <line x1="40" y1="50" x2="40" y2="15" stroke="#15803d" stroke-width="4"/>
        <circle cx="40" cy="15" r="8" fill="#eab308"/>
        <circle cx="40" cy="3" r="6" fill="#ef4444"/>
        <circle cx="40" cy="27" r="6" fill="#ef4444"/>
        <circle cx="28" cy="15" r="6" fill="#ef4444"/>
        <circle cx="52" cy="15" r="6" fill="#ef4444"/>
        <!-- Leaf -->
        <ellipse cx="50" cy="35" rx="10" ry="5" fill="#22c55e" transform="rotate(-20, 50, 35)"/>
      </g>
    </svg>
  `)}`,

  // Ilustrasi Wastafel Cuci Piring (Sink, plates, and sponge)
  washingDishes: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 200" width="100%" height="100%">
      <rect width="460" height="200" rx="16" fill="#eff6ff" stroke="#93c5fd" stroke-width="2"/>
      <text x="230" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">Chore Illustration: Kitchen Sink</text>
      
      <!-- Faucet -->
      <path d="M 170 110 L 170 50 Q 170 30 200 30 L 225 30 L 225 45" fill="none" stroke="#64748b" stroke-width="8" stroke-linecap="round"/>
      <line x1="225" y1="50" x2="225" y2="85" stroke="#38bdf8" stroke-width="3" stroke-dasharray="4,4"/>
      
      <!-- Sink Basin -->
      <rect x="130" y="110" width="200" height="65" rx="10" fill="#ffffff" stroke="#94a3b8" stroke-width="2"/>
      
      <!-- Dirty and clean plates stacked -->
      <ellipse cx="210" cy="130" rx="42" ry="16" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5"/>
      <ellipse cx="210" cy="124" rx="38" ry="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      
      <!-- Sponge and bubbles -->
      <rect x="260" y="132" width="28" height="16" rx="4" fill="#facc15" stroke="#ca8a04"/>
      <circle cx="245" cy="115" r="5" fill="#bae6fd" stroke="#0284c7" stroke-width="0.5"/>
      <circle cx="260" cy="110" r="7" fill="#bae6fd" stroke="#0284c7" stroke-width="0.5"/>
      <circle cx="275" cy="118" r="4" fill="#bae6fd" stroke="#0284c7" stroke-width="0.5"/>
    </svg>
  `)}`,

  // Ilustrasi Kompor dan Panci (Cooking stove & pot)
  cookingStove: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 200" width="100%" height="100%">
      <rect width="460" height="200" rx="16" fill="#fff7ed" stroke="#fed7aa" stroke-width="2"/>
      <text x="230" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#9a3412" text-anchor="middle">Kitchen Activity: Preparing Food</text>
      
      <!-- Table counter -->
      <rect x="90" y="130" width="280" height="45" rx="6" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1.5"/>
      
      <!-- Stove burner -->
      <rect x="160" y="120" width="140" height="15" rx="3" fill="#475569"/>
      
      <!-- Pot with lid -->
      <g transform="translate(180, 50)">
        <!-- Steam waves -->
        <path d="M 30 15 Q 35 5 30 -5" fill="none" stroke="#94a3b8" stroke-width="2"/>
        <path d="M 50 15 Q 55 5 50 -5" fill="none" stroke="#94a3b8" stroke-width="2"/>
        <path d="M 70 15 Q 75 5 70 -5" fill="none" stroke="#94a3b8" stroke-width="2"/>
        
        <!-- Pot body -->
        <rect x="15" y="30" width="70" height="42" rx="6" fill="#e11d48" stroke="#be123c" stroke-width="2"/>
        <!-- Pot handles -->
        <rect x="4" y="42" width="11" height="8" rx="2" fill="#881337"/>
        <rect x="85" y="42" width="11" height="8" rx="2" fill="#881337"/>
        <!-- Lid -->
        <ellipse cx="50" cy="30" rx="36" ry="7" fill="#fb7185" stroke="#be123c" stroke-width="1.5"/>
        <circle cx="50" cy="22" r="4" fill="#881337"/>
      </g>
    </svg>
  `)}`,

  // Ilustrasi Tempat Tidur Rapi (Tidying up the bed)
  neatBed: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 200" width="100%" height="100%">
      <rect width="460" height="200" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
      <text x="230" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Morning Routine in the Bedroom</text>
      
      <!-- Bed Headboard -->
      <rect x="110" y="45" width="240" height="45" rx="8" fill="#854d0e" stroke="#713f12" stroke-width="2"/>
      
      <!-- Bed Base & Mattress -->
      <rect x="120" y="85" width="220" height="65" rx="8" fill="#38bdf8" stroke="#0284c7" stroke-width="2"/>
      
      <!-- Blanket neatly folded -->
      <rect x="180" y="90" width="160" height="60" rx="5" fill="#1e40af" stroke="#1e3a8a" stroke-width="1.5"/>
      
      <!-- Pillow -->
      <rect x="135" y="70" width="60" height="25" rx="6" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="145" y1="82" x2="185" y2="82" stroke="#e2e8f0" stroke-width="1"/>
      
      <!-- Bed legs -->
      <rect x="125" y="150" width="12" height="20" rx="2" fill="#713f12"/>
      <rect x="323" y="150" width="12" height="20" rx="2" fill="#713f12"/>
    </svg>
  `)}`,

  // Ilustrasi Sikat Gigi dan Gelas (Toothbrush and cup)
  toothbrushCup: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 200" width="100%" height="100%">
      <rect width="460" height="200" rx="16" fill="#f0fdf4" stroke="#86efac" stroke-width="2"/>
      <text x="230" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#166534" text-anchor="middle">Personal Hygiene in the Bathroom</text>
      
      <!-- Cup -->
      <g transform="translate(160, 65)">
        <path d="M 10 20 L 15 90 L 65 90 L 70 20 Z" fill="#93c5fd" stroke="#2563eb" stroke-width="2"/>
        <path d="M 68 35 C 85 35, 85 70, 66 70" fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
        
        <!-- Toothbrush inside cup -->
        <g transform="translate(30, -35) rotate(15)">
          <rect x="0" y="0" width="8" height="90" rx="3" fill="#ec4899" stroke="#be185d"/>
          <rect x="-2" y="-12" width="12" height="14" rx="2" fill="#ffffff" stroke="#cbd5e1"/>
          <!-- Bristles -->
          <line x1="0" y1="-8" x2="8" y2="-8" stroke="#38bdf8" stroke-width="2"/>
          <line x1="0" y1="-4" x2="8" y2="-4" stroke="#38bdf8" stroke-width="2"/>
        </g>
      </g>

      <!-- Tube of toothpaste -->
      <g transform="translate(270, 85) rotate(-25)">
        <polygon points="0,0 15,35 0,35" fill="#f59e0b"/>
        <rect x="0" y="10" width="35" height="55" rx="4" fill="#10b981" stroke="#047857" stroke-width="1.5"/>
        <rect x="12" y="65" width="11" height="10" fill="#ffffff" stroke="#94a3b8"/>
      </g>
    </svg>
  `)}`,

  // Ilustrasi Meja Belajar (Desk, book, lamp)
  studyDesk: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 200" width="100%" height="100%">
      <rect width="460" height="200" rx="16" fill="#fefce8" stroke="#fef08a" stroke-width="2"/>
      <text x="230" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#854d0e" text-anchor="middle">Study Area in the House</text>
      
      <!-- Desk Surface -->
      <rect x="80" y="115" width="300" height="18" rx="4" fill="#b45309" stroke="#78350f" stroke-width="1.5"/>
      <rect x="95" y="133" width="14" height="45" fill="#78350f"/>
      <rect x="350" y="133" width="14" height="45" fill="#78350f"/>
      
      <!-- Open Book -->
      <g transform="translate(190, 95)">
        <path d="M 0 16 Q 30 8 40 18 Q 50 8 80 16 L 76 28 Q 50 20 40 28 Q 30 20 4 28 Z" fill="#ffffff" stroke="#64748b" stroke-width="1.5"/>
        <line x1="40" y1="18" x2="40" y2="28" stroke="#64748b" stroke-width="1.5"/>
      </g>

      <!-- Pencil -->
      <rect x="290" y="105" width="35" height="4" rx="1" fill="#f59e0b" transform="rotate(-15, 290, 105)"/>

      <!-- Desk Lamp -->
      <g transform="translate(120, 50)">
        <ellipse cx="25" cy="65" rx="16" ry="5" fill="#64748b"/>
        <path d="M 25 65 Q 10 35 25 15" fill="none" stroke="#475569" stroke-width="3"/>
        <path d="M 20 15 L 45 5 L 40 30 Z" fill="#eab308" stroke="#ca8a04"/>
      </g>
    </svg>
  `)}`,
};

export const ELEMEN_BAHASA_INGGRIS = 'Menyimak - Berbicara & Membaca - Memirsa';

export const CP_BAHASA_INGGRIS =
  'Peserta didik mampu memahami dan merespons teks lisan dan visual sederhana, serta menggunakan kosakata tindakan/kegiatan sehari-hari di rumah (activities at home) dalam konteks lingkungan keluarga.';

export const TP_ACTIVITIES_AT_HOME =
  'Peserta didik mampu mengidentifikasi kosakata kegiatan di rumah (activities at home), menghubungkan aktivitas dengan ruangan dan peralatannya, serta memahami instruksi sederhana dan dialog kontekstual tentang kegiatan membantu keluarga di rumah.';

/**
 * 20 Soal Pilihan Ganda Bahasa Inggris - Materi: Activities at Home
 * Komposisi Kesukaran: 75% Mudah (15 Soal) & 25% Sedang (5 Soal)
 * Sesuai instruksi: Tidak ada jawaban yang dibocorkan di dalam naskah soal.
 */
export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // KATEGORI MUDAH (75% = 15 SOAL, NOMOR 1 s.d. 15)
  // Level Kognitif: L1 (Pengetahuan & Pemahaman Kosakata Dasar Activities at Home)
  // =========================================================================

  // Soal 1: Tidying up the bed (Mudah - L1)
  {
    id: 'en-q1',
    originalNumber: 1,
    type: 'pilihan_ganda',
    category: 'Daily Routines at Home',
    elemen: ELEMEN_BAHASA_INGGRIS,
    capaianPembelajaran: CP_BAHASA_INGGRIS,
    tujuanPembelajaran: TP_ACTIVITIES_AT_HOME,
    indikator: 'Disajikan deskripsi kegiatan merapikan bantal dan selimut di pagi hari, siswa dapat menentukan istilah bahasa Inggris yang tepat.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.neatBed,
    imageCaption: 'Illustration of Morning Routine in the Bedroom',
    question: 'Every morning after waking up, Tina always arranges her pillows and folds her blanket neatly. What activity is Tina doing?',
    options: [
      'Tidying up the bed',
      'Washing the car',
      'Cooking lunch',
      'Watering the plants'
    ],
    correctAnswer: 0,
    explanation: 'Kegiatan merapikan bantal dan melipat selimut di kamar tidur pada pagi hari disebut "tidying up the bed" (merapikan tempat tidur).'
  },

  // Soal 2: Sweeping the floor (Mudah - L1)
  {
    id: 'en-q2',
    originalNumber: 2,
    type: 'pilihan_ganda',
    category: 'Cleaning the House',
    elemen: ELEMEN_BAHASA_INGGRIS,
    capaianPembelajaran: CP_BAHASA_INGGRIS,
    tujuanPembelajaran: TP_ACTIVITIES_AT_HOME,
    indikator: 'Disajikan gambar alat kebersihan sapu dan pengki, siswa dapat mengidentifikasi aktivitas membersihkan debu lantai.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.broomAndDustpan,
    imageCaption: 'Household Cleaning Tool: Broom and Dustpan',
    question: 'Look at the picture! Father is using a broom to clean dust from the floor. What is Father doing?',
    options: [
      'Mopping the floor',
      'Sweeping the floor',
      'Washing clothes',
      'Painting the wall'
    ],
    correctAnswer: 1,
    explanation: 'Menggunakan sapu (broom) untuk membersihkan debu dari lantai disebut "sweeping the floor" (menyapu lantai).'
  },

  // Soal 3: Watering the plants (Mudah - L1)
  {
    id: 'en-q3',
    originalNumber: 3,
    type: 'pilihan_ganda',
    category: 'Garden Activities',
    elemen: ELEMEN_BAHASA_INGGRIS,
    capaianPembelajaran: CP_BAHASA_INGGRIS,
    tujuanPembelajaran: TP_ACTIVITIES_AT_HOME,
    indikator: 'Disajikan gambar gembor air dan pot bunga, siswa dapat memilih ungkapan menyiram tanaman di kebun.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.wateringCan,
    imageCaption: 'Garden Tool: Watering Can and Flower Pot',
    question: 'In the afternoon, Budi goes to the front yard with a watering can to take care of the flowers. What is Budi doing?',
    options: [
      'Cutting the grass',
      'Playing football',
      'Watering the plants',
      'Washing the bicycle'
    ],
    correctAnswer: 2,
    explanation: 'Kegiatan menyiram bunga atau tanaman di halaman menggunakan gembor air disebut "watering the plants".'
  },

  // Soal 4: Washing the dishes (Mudah - L1)
  {
    id: 'en-q4',
    originalNumber: 4,
    type: 'pilihan_ganda',
    category: 'Kitchen Activities',
    elemen: ELEMEN_BAHASA_INGGRIS,
    capaianPembelajaran: CP_BAHASA_INGGRIS,
    tujuanPembelajaran: TP_ACTIVITIES_AT_HOME,
    indikator: 'Disajikan gambar wastafel dapur, piring, dan sabun, siswa dapat menentukan aktivitas mencuci piring.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.washingDishes,
    imageCaption: 'Kitchen Area: Plates, Sink, and Sponge',
    question: 'After having lunch, Sinta brings dirty plates, bowls, and spoons to the kitchen sink to clean them with soap. What activity is Sinta doing?',
    options: [
      'Cooking rice',
      'Washing the dishes',
      'Eating snacks',
      'Buying vegetables'
    ],
    correctAnswer: 1,
    explanation: 'Membersihkan piring, mangkuk, dan sendok kotor dengan air dan sabun di wastafel dapur disebut "washing the dishes" (mencuci piring).'
  },

  // Soal 5: Cooking (Mudah - L1)
  {
    id: 'en-q5',
    originalNumber: 5,
    type: 'pilihan_ganda',
    category: 'Kitchen Activities',
    elemen: ELEMEN_BAHASA_INGGRIS,
    capaianPembelajaran: CP_BAHASA_INGGRIS,
    tujuanPembelajaran: TP_ACTIVITIES_AT_HOME,
    indikator: 'Disajikan konteks ibu menyiapkan masakan sup di atas kompor dapur, siswa dapat memilih kata kerja bahasa Inggris yang tepat.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.cookingStove,
    imageCaption: 'Kitchen Stove with Pot for Food Preparation',
    question: 'Mother is in the kitchen with vegetables and a pot on the stove to prepare delicious soup for dinner. What is Mother doing?',
    options: [
      'Cooking',
      'Sleeping',
      'Swimming',
      'Ironing'
    ],
    correctAnswer: 0,
    explanation: 'Aktivitas mengolah dan memasak bahan makanan di dapur menggunakan kompor disebut "cooking" (memasak).'
  },

  // Soal 6: Brushing teeth (Mudah - L1)
  {
    id: 'en-q6',
    originalNumber: 6,
    type: 'pilihan_ganda',
    category: 'Personal Hygiene at Home',
    elemen: ELEMEN_BAHASA_INGGRIS,
    capaianPembelajaran: CP_BAHASA_INGGRIS,
    tujuanPembelajaran: TP_ACTIVITIES_AT_HOME,
    indikator: 'Disajikan gambar sikat gigi dan pasta gigi, siswa dapat menentukan aktivitas menjaga kebersihan gigi.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.toothbrushCup,
    imageCaption: 'Personal Hygiene Items: Toothbrush and Toothpaste',
    question: 'Before going to sleep, Edo goes to the bathroom with a toothbrush and toothpaste. What is Edo doing?',
    options: [
      'Washing his shoes',
      'Brushing his teeth',
      'Cutting his hair',
      'Taking a nap'
    ],
    correctAnswer: 1,
    explanation: 'Membersihkan gigi dengan sikat gigi (toothbrush) dan pasta gigi (toothpaste) disebut "brushing teeth" (menggosok gigi).'
  },

  // Soal 7: Doing homework (Mudah - L1)
  {
    id: 'en-q7',
    originalNumber: 7,
    type: 'pilihan_ganda',
    category: 'Study Activities at Home',
    elemen: ELEMEN_BAHASA_INGGRIS,
    capaianPembelajaran: CP_BAHASA_INGGRIS,
    tujuanPembelajaran: TP_ACTIVITIES_AT_HOME,
    indikator: 'Disajikan situasi siswa mengerjakan tugas sekolah di meja belajar pada malam hari, siswa dapat memilih ungkapan yang benar.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.studyDesk,
    imageCaption: 'Study Desk with Notebook, Pencil, and Lamp',
    question: 'In the evening, Rian sits at his desk with his books and pencil to complete the school assignment from his teacher. What is Rian doing?',
    options: [
      'Doing homework',
      'Playing video games',
      'Watching television',
      'Repairing the bicycle'
    ],
    correctAnswer: 0,
    explanation: 'Menyelesaikan tugas sekolah atau PR yang diberikan guru di rumah disebut "doing homework" (mengerjakan pekerjaan rumah/PR).'
  },

  // Soal 8: Bathroom (Mudah - L1)
  {
    id: 'en-q8',
    originalNumber: 8,
    type: 'pilihan_ganda',
    category: 'Rooms and Activities',
    elemen: ELEMEN_BAHASA_INGGRIS,
    capaianPembelajaran: CP_BAHASA_INGGRIS,
    tujuanPembelajaran: TP_ACTIVITIES_AT_HOME,
    indikator: 'Siswa dapat menentukan nama ruangan tempat mandi dan mencuci muka di rumah.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.houseRooms,
    imageCaption: 'Diagram: Rooms in the House',
    question: 'Where do family members usually go when they want to take a bath, wash their face, and brush their teeth?',
    options: [
      'In the bedroom',
      'In the kitchen',
      'In the bathroom',
      'In the garage'
    ],
    correctAnswer: 2,
    explanation: 'Ruangan tempat mandi, mencuci muka, dan menyikat gigi adalah "bathroom" (kamar mandi).'
  },

  // Soal 9: Watching television (Mudah - L1)
  {
    id: 'en-q9',
    originalNumber: 9,
    type: 'pilihan_ganda',
    category: 'Leisure Activities at Home',
    elemen: ELEMEN_BAHASA_INGGRIS,
    capaianPembelajaran: CP_BAHASA_INGGRIS,
    tujuanPembelajaran: TP_ACTIVITIES_AT_HOME,
    indikator: 'Disajikan situasi santai bersama keluarga menonton film kartun di ruang keluarga, siswa dapat memilih aktivitas yang sesuai.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    question: 'On Sunday afternoon, Ayu and her brother sit together on the sofa in the living room looking at cartoon shows on the screen. What are they doing?',
    options: [
      'Reading newspapers',
      'Watching television',
      'Sleeping in the bedroom',
      'Washing clothes'
    ],
    correctAnswer: 1,
    explanation: 'Duduk di sofa dan melihat tayangan kartun di layar televisi disebut "watching television" (menonton TV).'
  },

  // Soal 10: Waking up (Mudah - L1)
  {
    id: 'en-q10',
    originalNumber: 10,
    type: 'pilihan_ganda',
    category: 'Daily Routines at Home',
    elemen: ELEMEN_BAHASA_INGGRIS,
    capaianPembelajaran: CP_BAHASA_INGGRIS,
    tujuanPembelajaran: TP_ACTIVITIES_AT_HOME,
    indikator: 'Disajikan situasi jam weker berdering di pagi hari, siswa dapat menentukan kegiatan bangun tidur.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    question: 'At six o\'clock in the morning, the alarm clock rings and Dika opens his eyes to start a new day. What does Dika do?',
    options: [
      'Wakes up',
      'Goes to sleep',
      'Has dinner',
      'Cleans the yard'
    ],
    correctAnswer: 0,
    explanation: 'Membuka mata dan mengakhiri tidur saat jam weker berdering di pagi hari disebut "wake up" (bangun tidur).'
  },

  // Soal 11: Mopping the floor (Mudah - L1)
  {
    id: 'en-q11',
    originalNumber: 11,
    type: 'pilihan_ganda',
    category: 'Cleaning the House',
    elemen: ELEMEN_BAHASA_INGGRIS,
    capaianPembelajaran: CP_BAHASA_INGGRIS,
    tujuanPembelajaran: TP_ACTIVITIES_AT_HOME,
    indikator: 'Disajikan konteks membersihkan lantai dengan kain pel basah dan ember, siswa dapat memilih istilah mopping the floor.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    question: 'After the floor is swept, Dayu uses a wet cloth mop and a bucket of water to make the tiles clean and shiny. What activity is Dayu doing?',
    options: [
      'Washing the dishes',
      'Mopping the floor',
      'Tidying up the desk',
      'Cooking eggs'
    ],
    correctAnswer: 1,
    explanation: 'Membersihkan lantai menggunakan kain pel basah dan ember air disebut "mopping the floor" (mengepel lantai).'
  },

  // Soal 12: Bedroom (Mudah - L1)
  {
    id: 'en-q12',
    originalNumber: 12,
    type: 'pilihan_ganda',
    category: 'Rooms and Activities',
    elemen: ELEMEN_BAHASA_INGGRIS,
    capaianPembelajaran: CP_BAHASA_INGGRIS,
    tujuanPembelajaran: TP_ACTIVITIES_AT_HOME,
    indikator: 'Siswa dapat menentukan nama ruangan yang difungsikan untuk tidur dan istirahat.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.houseRooms,
    imageCaption: 'Rooms in the House Overview',
    question: 'Which room in the house is designed specifically for sleeping and resting at night?',
    options: [
      'Kitchen',
      'Bathroom',
      'Bedroom',
      'Dining room'
    ],
    correctAnswer: 2,
    explanation: 'Ruangan khusus di rumah untuk tidur dan beristirahat adalah "bedroom" (kamar tidur).'
  },

  // Soal 13: Having breakfast (Mudah - L1)
  {
    id: 'en-q13',
    originalNumber: 13,
    type: 'pilihan_ganda',
    category: 'Daily Routines at Home',
    elemen: ELEMEN_BAHASA_INGGRIS,
    capaianPembelajaran: CP_BAHASA_INGGRIS,
    tujuanPembelajaran: TP_ACTIVITIES_AT_HOME,
    indikator: 'Disajikan situasi makan pagi sebelum berangkat ke sekolah, siswa dapat memilih istilah having breakfast.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    question: 'Every morning at 06:30 before going to school, Putu sits at the table to eat bread and drink a glass of warm milk. What is Putu doing?',
    options: [
      'Having breakfast',
      'Having dinner',
      'Doing laundry',
      'Washing the bike'
    ],
    correctAnswer: 0,
    explanation: 'Makan pagi sebelum beraktivitas atau berangkat ke sekolah disebut "having breakfast" (sarapan pagi).'
  },

  // Soal 14: Reading a book (Mudah - L1)
  {
    id: 'en-q14',
    originalNumber: 14,
    type: 'pilihan_ganda',
    category: 'Study Activities at Home',
    elemen: ELEMEN_BAHASA_INGGRIS,
    capaianPembelajaran: CP_BAHASA_INGGRIS,
    tujuanPembelajaran: TP_ACTIVITIES_AT_HOME,
    indikator: 'Disajikan kegiatan membuka buku cerita dan membaca halamannya, siswa dapat menentukan frasa reading a book.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.studyDesk,
    imageCaption: 'Reading and Study Corner',
    question: 'Dewi is sitting comfortably in her room holding an interesting storybook and looking at the pages quietly. What is Dewi doing?',
    options: [
      'Reading a book',
      'Singing a song',
      'Washing her face',
      'Running in the yard'
    ],
    correctAnswer: 0,
    explanation: 'Membuka dan membaca halaman buku cerita disebut "reading a book" (membaca buku).'
  },

  // Soal 15: Wash their hands (Mudah - L1)
  {
    id: 'en-q15',
    originalNumber: 15,
    type: 'pilihan_ganda',
    category: 'Personal Hygiene at Home',
    elemen: ELEMEN_BAHASA_INGGRIS,
    capaianPembelajaran: CP_BAHASA_INGGRIS,
    tujuanPembelajaran: TP_ACTIVITIES_AT_HOME,
    indikator: 'Disajikan anjuran mencuci tangan dengan sabun sebelum makan, siswa dapat memilih frasa wash their hands.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    question: 'To stay healthy before eating lunch or dinner at home, what good habit should children do with clean water and soap?',
    options: [
      'Brush their shoes',
      'Wash their hands',
      'Iron their uniforms',
      'Sweep the terrace'
    ],
    correctAnswer: 1,
    explanation: 'Kebiasaan baik membersihkan tangan dengan air mengalir dan sabun sebelum makan disebut "wash their hands" (mencuci tangan).'
  },

  // =========================================================================
  // KATEGORI SEDANG (25% = 5 SOAL, NOMOR 16 s.d. 20)
  // Level Kognitif: L2 (Aplikasi, Melengkapi Dialog, Menyusun Kalimat, dan Konteks)
  // =========================================================================

  // Soal 16: Completing dialogue (Sedang - L2)
  {
    id: 'en-q16',
    originalNumber: 16,
    type: 'pilihan_ganda',
    category: 'Daily Routines & Dialogue',
    elemen: ELEMEN_BAHASA_INGGRIS,
    capaianPembelajaran: CP_BAHASA_INGGRIS,
    tujuanPembelajaran: TP_ACTIVITIES_AT_HOME,
    indikator: 'Disajikan dialog rumpang tentang membersihkan daun kering di halaman, siswa dapat melengkapi dengan kata kerja yang tepat.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    question: 'Read the short conversation below!\nRudi: "What are you doing in the front yard, Kadek?"\nKadek: "I am ... the dry leaves to keep our yard clean and tidy."\n\nWhich word correctly completes Kadek\'s sentence?',
    options: [
      'sweeping',
      'cooking',
      'drinking',
      'sleeping'
    ],
    correctAnswer: 0,
    explanation: 'Konteks membersihkan daun kering di halaman menggunakan sapu taman memerlukan kata kerja "sweeping" (sedang menyapu: "I am sweeping the dry leaves").'
  },

  // Soal 17: Rearranging jumbled words (Sedang - L2)
  {
    id: 'en-q17',
    originalNumber: 17,
    type: 'pilihan_ganda',
    category: 'Sentence Structure',
    elemen: ELEMEN_BAHASA_INGGRIS,
    capaianPembelajaran: CP_BAHASA_INGGRIS,
    tujuanPembelajaran: TP_ACTIVITIES_AT_HOME,
    indikator: 'Disajikan kata-kata acak tentang membantu mencuci piring di dapur, siswa dapat menyusun menjadi kalimat yang benar.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    question: 'Arrange the jumbled words below into a meaningful English sentence!\n[the dishes] - [helps] - [in the kitchen] - [Made] - [wash]\n      1               2                 3                 4           5',
    options: [
      '4 - 2 - 5 - 1 - 3  (Made helps wash the dishes in the kitchen)',
      '1 - 3 - 4 - 2 - 5  (The dishes in the kitchen Made helps wash)',
      '2 - 4 - 1 - 5 - 3  (Helps Made the dishes wash in the kitchen)',
      '3 - 1 - 5 - 4 - 2  (In the kitchen the dishes wash Made helps)'
    ],
    correctAnswer: 0,
    explanation: 'Urutan subjek + predikat + objek + keterangan tempat yang tepat adalah: Made (4) + helps (2) + wash (5) + the dishes (1) + in the kitchen (3).'
  },

  // Soal 18: Identifying mealtime activity (Sedang - L2)
  {
    id: 'en-q18',
    originalNumber: 18,
    type: 'pilihan_ganda',
    category: 'Activity Time and Routine',
    elemen: ELEMEN_BAHASA_INGGRIS,
    capaianPembelajaran: CP_BAHASA_INGGRIS,
    tujuanPembelajaran: TP_ACTIVITIES_AT_HOME,
    indikator: 'Disajikan waktu malam hari (07:00 PM) dan situasi makan bersama keluarga, siswa dapat membedakan having dinner dari waktu makan lainnya.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    question: 'Read the short paragraph!\n"It is 07:00 in the evening. Father, Mother, and Nina are gathered around the dining table eating warm rice, soup, and grilled fish together."\n\nWhat activity is Nina\'s family doing?',
    options: [
      'Having breakfast',
      'Having dinner',
      'Tidying up the bedroom',
      'Watering the flowers'
    ],
    correctAnswer: 1,
    explanation: 'Makan bersama pada malam hari (in the evening) disebut "having dinner" (makan malam), bukan breakfast (sarapan) atau lunch (makan siang).'
  },

  // Soal 19: Chore and tool matching (Sedang - L2)
  {
    id: 'en-q19',
    originalNumber: 19,
    type: 'pilihan_ganda',
    category: 'Rooms & Household Items',
    elemen: ELEMEN_BAHASA_INGGRIS,
    capaianPembelajaran: CP_BAHASA_INGGRIS,
    tujuanPembelajaran: TP_ACTIVITIES_AT_HOME,
    indikator: 'Disajikan empat pasangan pekerjaan rumah dan alat yang digunakan, siswa dapat mengidentifikasi pasangan yang paling tepat.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    question: 'Which of the following pairs correctly matches the household activity with its appropriate tool?',
    options: [
      'Sweeping the floor — Broom and dustpan',
      'Washing clothes — Toothbrush and paste',
      'Watering plants — Frying pan and spatula',
      'Cooking food — Watering can'
    ],
    correctAnswer: 0,
    explanation: 'Pasangan yang paling tepat adalah "Sweeping the floor" (menyapu lantai) yang menggunakan "Broom and dustpan" (sapu dan pengki).'
  },

  // Soal 20: Contextual helping family at home (Sedang - L2)
  {
    id: 'en-q20',
    originalNumber: 20,
    type: 'pilihan_ganda',
    category: 'Helping Family at Home',
    elemen: ELEMEN_BAHASA_INGGRIS,
    capaianPembelajaran: CP_BAHASA_INGGRIS,
    tujuanPembelajaran: TP_ACTIVITIES_AT_HOME,
    indikator: 'Disajikan situasi teras basah karena air hujan, siswa dapat menentukan ungkapan menawarkan bantuan kepada ibu dengan santun.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    question: 'Ketut notices that the floor of the terrace is wet after the rain. He wants to help his mother clean it.\nWhat is the most polite sentence Ketut can say to offer his help?',
    options: [
      '"May I help you mop the floor, Mom?"',
      '"I want to sleep in my bedroom now, Mom."',
      '"Can you buy me a new toy car, Mom?"',
      '"Please cook some snacks for me, Mom."'
    ],
    correctAnswer: 0,
    explanation: 'Ungkapan santun untuk menawarkan bantuan kepada ibu membersihkan lantai teras yang basah adalah "May I help you mop the floor, Mom?" (Bolehkah saya membantu Ibu mengepel lantai?).'
  }
];
