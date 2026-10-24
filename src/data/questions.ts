import { Question } from '../types';

// Realistic Photographic Visual Assets for Grade 3 English - Activities at Home
export const REAL_IMAGES = {
  tidyingBed: '/src/assets/images/kid_tidying_bed_1792810702293.jpg',
  sweepingFloor: '/src/assets/images/sweeping_floor_real_1792810701768.jpg',
  wateringPlants: '/src/assets/images/watering_plants_real_1792810702365.jpg',
  washingDishes: '/src/assets/images/washing_dishes_real_1792810718112.jpg',
  cookingKitchen: '/src/assets/images/cooking_kitchen_real_1792810718246.jpg',
  brushingTeeth: '/src/assets/images/brushing_teeth_real_1792810718981.jpg',
};

export const ELEMEN_BAHASA_INGGRIS = 'Menyimak - Berbicara & Membaca - Memirsa';

export const CP_BAHASA_INGGRIS =
  'Peserta didik mampu memahami dan merespons teks visual dan kalimat sederhana tentang kegiatan sehari-hari di rumah (activities at home).';

export const TP_ACTIVITIES_AT_HOME =
  'Peserta didik mampu mengidentifikasi kosakata kegiatan sehari-hari di rumah (activities at home), nama ruangan, serta peralatan rumah tangga secara tepat.';

/**
 * 20 Soal Pilihan Ganda Bahasa Inggris - Materi: Activities at Home
 * Kategori: 100% MUDAH (20 Soal Mudah, Kalimat Pendek, Gambar Realistis)
 * Bersih tanpa membocorkan jawaban di dalam soal.
 */
export const INITIAL_QUESTIONS: Question[] = [
  // Soal 1
  {
    id: 'en-q1',
    originalNumber: 1,
    type: 'pilihan_ganda',
    category: 'Daily Routines',
    elemen: ELEMEN_BAHASA_INGGRIS,
    capaianPembelajaran: CP_BAHASA_INGGRIS,
    tujuanPembelajaran: TP_ACTIVITIES_AT_HOME,
    indikator: 'Siswa dapat mengidentifikasi kegiatan merapikan tempat tidur berdasarkan gambar realistis.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    imageUrl: REAL_IMAGES.tidyingBed,
    imageCaption: 'Activity in the bedroom',
    question: 'Look at the picture! What activity is this?',
    options: [
      'Tidying up the bed',
      'Washing the car',
      'Cooking soup',
      'Watering plants'
    ],
    correctAnswer: 0,
    explanation: 'Merapikan bantal dan selimut di tempat tidur disebut "tidying up the bed".'
  },

  // Soal 2
  {
    id: 'en-q2',
    originalNumber: 2,
    type: 'pilihan_ganda',
    category: 'Cleaning the House',
    elemen: ELEMEN_BAHASA_INGGRIS,
    capaianPembelajaran: CP_BAHASA_INGGRIS,
    tujuanPembelajaran: TP_ACTIVITIES_AT_HOME,
    indikator: 'Siswa dapat menentukan kegiatan menyapu lantai berdasarkan gambar realistis.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    imageUrl: REAL_IMAGES.sweepingFloor,
    imageCaption: 'Cleaning chore at home',
    question: 'Look at the picture! What is she doing?',
    options: [
      'Mopping the floor',
      'Sweeping the floor',
      'Washing clothes',
      'Painting the wall'
    ],
    correctAnswer: 1,
    explanation: 'Membersihkan lantai dengan sapu disebut "sweeping the floor".'
  },

  // Soal 3
  {
    id: 'en-q3',
    originalNumber: 3,
    type: 'pilihan_ganda',
    category: 'Garden Activities',
    elemen: ELEMEN_BAHASA_INGGRIS,
    capaianPembelajaran: CP_BAHASA_INGGRIS,
    tujuanPembelajaran: TP_ACTIVITIES_AT_HOME,
    indikator: 'Siswa dapat menentukan kegiatan menyiram tanaman berdasarkan gambar realistis.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    imageUrl: REAL_IMAGES.wateringPlants,
    imageCaption: 'Garden activity',
    question: 'Look at the picture! What is she doing?',
    options: [
      'Cutting the grass',
      'Playing football',
      'Watering the flowers',
      'Washing the bike'
    ],
    correctAnswer: 2,
    explanation: 'Menyiram bunga atau tanaman di pot disebut "watering the flowers".'
  },

  // Soal 4
  {
    id: 'en-q4',
    originalNumber: 4,
    type: 'pilihan_ganda',
    category: 'Kitchen Activities',
    elemen: ELEMEN_BAHASA_INGGRIS,
    capaianPembelajaran: CP_BAHASA_INGGRIS,
    tujuanPembelajaran: TP_ACTIVITIES_AT_HOME,
    indikator: 'Siswa dapat menentukan kegiatan mencuci piring berdasarkan gambar realistis.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    imageUrl: REAL_IMAGES.washingDishes,
    imageCaption: 'Chore at the kitchen sink',
    question: 'Look at the picture! What is she doing?',
    options: [
      'Cooking rice',
      'Washing the dishes',
      'Eating snacks',
      'Buying food'
    ],
    correctAnswer: 1,
    explanation: 'Mencuci piring di wastafel dapur disebut "washing the dishes".'
  },

  // Soal 5
  {
    id: 'en-q5',
    originalNumber: 5,
    type: 'pilihan_ganda',
    category: 'Kitchen Activities',
    elemen: ELEMEN_BAHASA_INGGRIS,
    capaianPembelajaran: CP_BAHASA_INGGRIS,
    tujuanPembelajaran: TP_ACTIVITIES_AT_HOME,
    indikator: 'Siswa dapat mengidentifikasi kegiatan memasak di dapur berdasarkan gambar realistis.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    imageUrl: REAL_IMAGES.cookingKitchen,
    imageCaption: 'Kitchen activity',
    question: 'Look at the picture! What is mother doing?',
    options: [
      'Cooking',
      'Sleeping',
      'Swimming',
      'Reading'
    ],
    correctAnswer: 0,
    explanation: 'Mengolah masakan di kompor dapur disebut "cooking" (memasak).'
  },

  // Soal 6
  {
    id: 'en-q6',
    originalNumber: 6,
    type: 'pilihan_ganda',
    category: 'Personal Hygiene',
    elemen: ELEMEN_BAHASA_INGGRIS,
    capaianPembelajaran: CP_BAHASA_INGGRIS,
    tujuanPembelajaran: TP_ACTIVITIES_AT_HOME,
    indikator: 'Siswa dapat menentukan kegunaan sikat gigi dan pasta gigi berdasarkan gambar realistis.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    imageUrl: REAL_IMAGES.brushingTeeth,
    imageCaption: 'Hygiene in the bathroom',
    question: 'What do we do with a toothbrush and toothpaste?',
    options: [
      'Wash shoes',
      'Brush our teeth',
      'Cut our hair',
      'Clean the window'
    ],
    correctAnswer: 1,
    explanation: 'Sikat gigi dan pasta gigi digunakan untuk menggosok gigi ("brush our teeth").'
  },

  // Soal 7
  {
    id: 'en-q7',
    originalNumber: 7,
    type: 'pilihan_ganda',
    category: 'Rooms in the House',
    elemen: ELEMEN_BAHASA_INGGRIS,
    capaianPembelajaran: CP_BAHASA_INGGRIS,
    tujuanPembelajaran: TP_ACTIVITIES_AT_HOME,
    indikator: 'Siswa dapat menentukan ruangan untuk tidur di rumah.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    question: 'Where do you sleep at night?',
    options: [
      'Kitchen',
      'Bathroom',
      'Bedroom',
      'Garage'
    ],
    correctAnswer: 2,
    explanation: 'Ruangan untuk tidur di malam hari adalah "bedroom" (kamar tidur).'
  },

  // Soal 8
  {
    id: 'en-q8',
    originalNumber: 8,
    type: 'pilihan_ganda',
    category: 'Rooms in the House',
    elemen: ELEMEN_BAHASA_INGGRIS,
    capaianPembelajaran: CP_BAHASA_INGGRIS,
    tujuanPembelajaran: TP_ACTIVITIES_AT_HOME,
    indikator: 'Siswa dapat menentukan ruangan untuk mandi.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    question: 'Where do you take a bath?',
    options: [
      'In the bedroom',
      'In the kitchen',
      'In the bathroom',
      'In the garden'
    ],
    correctAnswer: 2,
    explanation: 'Ruangan untuk mandi adalah "bathroom" (kamar mandi).'
  },

  // Soal 9
  {
    id: 'en-q9',
    originalNumber: 9,
    type: 'pilihan_ganda',
    category: 'Cleaning the House',
    elemen: ELEMEN_BAHASA_INGGRIS,
    capaianPembelajaran: CP_BAHASA_INGGRIS,
    tujuanPembelajaran: TP_ACTIVITIES_AT_HOME,
    indikator: 'Siswa dapat mengidentifikasi alat yang digunakan untuk menyapu lantai.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    question: 'What do we use to sweep the floor?',
    options: [
      'A broom',
      'A spoon',
      'A pillow',
      'A toothbrush'
    ],
    correctAnswer: 0,
    explanation: 'Alat untuk menyapu lantai adalah "a broom" (sapu).'
  },

  // Soal 10
  {
    id: 'en-q10',
    originalNumber: 10,
    type: 'pilihan_ganda',
    category: 'Daily Routines',
    elemen: ELEMEN_BAHASA_INGGRIS,
    capaianPembelajaran: CP_BAHASA_INGGRIS,
    tujuanPembelajaran: TP_ACTIVITIES_AT_HOME,
    indikator: 'Siswa dapat menentukan kegiatan bangun tidur di pagi hari.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    question: 'What do you do at six o\'clock in the morning?',
    options: [
      'Wake up',
      'Go to sleep',
      'Have dinner',
      'Close the door'
    ],
    correctAnswer: 0,
    explanation: 'Aktivitas di pagi hari jam 6 adalah "wake up" (bangun tidur).'
  },

  // Soal 11
  {
    id: 'en-q11',
    originalNumber: 11,
    type: 'pilihan_ganda',
    category: 'Daily Routines',
    elemen: ELEMEN_BAHASA_INGGRIS,
    capaianPembelajaran: CP_BAHASA_INGGRIS,
    tujuanPembelajaran: TP_ACTIVITIES_AT_HOME,
    indikator: 'Siswa dapat menentukan kegiatan makan pagi (sarapan).',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    question: 'What do we do in the dining room in the morning?',
    options: [
      'Have breakfast',
      'Have dinner',
      'Wash clothes',
      'Iron shirts'
    ],
    correctAnswer: 0,
    explanation: 'Makan pagi di ruang makan disebut "have breakfast" (sarapan).'
  },

  // Soal 12
  {
    id: 'en-q12',
    originalNumber: 12,
    type: 'pilihan_ganda',
    category: 'Cleaning the House',
    elemen: ELEMEN_BAHASA_INGGRIS,
    capaianPembelajaran: CP_BAHASA_INGGRIS,
    tujuanPembelajaran: TP_ACTIVITIES_AT_HOME,
    indikator: 'Siswa dapat menentukan kegiatan mengepel lantai dengan kain pel basah.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    question: 'We use a wet mop to clean the floor. This activity is ...',
    options: [
      'mopping the floor',
      'washing the dishes',
      'cooking rice',
      'tidying up the bed'
    ],
    correctAnswer: 0,
    explanation: 'Membersihkan lantai dengan kain pel disebut "mopping the floor".'
  },

  // Soal 13
  {
    id: 'en-q13',
    originalNumber: 13,
    type: 'pilihan_ganda',
    category: 'Study Activities',
    elemen: ELEMEN_BAHASA_INGGRIS,
    capaianPembelajaran: CP_BAHASA_INGGRIS,
    tujuanPembelajaran: TP_ACTIVITIES_AT_HOME,
    indikator: 'Siswa dapat menentukan kegiatan mengerjakan tugas sekolah di meja belajar.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    question: 'What is Budi doing at his study desk with his pencil and book?',
    options: [
      'Doing homework',
      'Sleeping',
      'Taking a bath',
      'Playing ball'
    ],
    correctAnswer: 0,
    explanation: 'Belajar dan menyelesaikan tugas sekolah di meja belajar disebut "doing homework".'
  },

  // Soal 14
  {
    id: 'en-q14',
    originalNumber: 14,
    type: 'pilihan_ganda',
    category: 'Study Activities',
    elemen: ELEMEN_BAHASA_INGGRIS,
    capaianPembelajaran: CP_BAHASA_INGGRIS,
    tujuanPembelajaran: TP_ACTIVITIES_AT_HOME,
    indikator: 'Siswa dapat mengidentifikasi kegiatan membaca buku cerita.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    question: 'What is Ani doing with her storybook?',
    options: [
      'Reading a book',
      'Singing a song',
      'Washing her face',
      'Running fast'
    ],
    correctAnswer: 0,
    explanation: 'Melihat dan memahami isi buku cerita disebut "reading a book" (membaca buku).'
  },

  // Soal 15
  {
    id: 'en-q15',
    originalNumber: 15,
    type: 'pilihan_ganda',
    category: 'Leisure Activities',
    elemen: ELEMEN_BAHASA_INGGRIS,
    capaianPembelajaran: CP_BAHASA_INGGRIS,
    tujuanPembelajaran: TP_ACTIVITIES_AT_HOME,
    indikator: 'Siswa dapat menentukan kegiatan menonton TV di ruang keluarga.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    question: 'What are they doing on the sofa in front of the TV?',
    options: [
      'Reading newspapers',
      'Watching television',
      'Sleeping in bed',
      'Watering plants'
    ],
    correctAnswer: 1,
    explanation: 'Duduk di sofa dan melihat tayangan TV disebut "watching television".'
  },

  // Soal 16
  {
    id: 'en-q16',
    originalNumber: 16,
    type: 'pilihan_ganda',
    category: 'Personal Hygiene',
    elemen: ELEMEN_BAHASA_INGGRIS,
    capaianPembelajaran: CP_BAHASA_INGGRIS,
    tujuanPembelajaran: TP_ACTIVITIES_AT_HOME,
    indikator: 'Siswa dapat menentukan kebiasaan mencuci tangan dengan sabun sebelum makan.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    question: 'What should we do with soap and water before eating?',
    options: [
      'Brush shoes',
      'Wash our hands',
      'Sweep the floor',
      'Comb our hair'
    ],
    correctAnswer: 1,
    explanation: 'Sebelum makan, kebiasaan baik adalah mencuci tangan ("wash our hands").'
  },

  // Soal 17
  {
    id: 'en-q17',
    originalNumber: 17,
    type: 'pilihan_ganda',
    category: 'Rooms in the House',
    elemen: ELEMEN_BAHASA_INGGRIS,
    capaianPembelajaran: CP_BAHASA_INGGRIS,
    tujuanPembelajaran: TP_ACTIVITIES_AT_HOME,
    indikator: 'Siswa dapat menentukan nama ruangan dapur tempat memasak makanan.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    question: 'Where does mother cook food at home?',
    options: [
      'In the kitchen',
      'In the bathroom',
      'In the bedroom',
      'On the roof'
    ],
    correctAnswer: 0,
    explanation: 'Ruangan tempat memasak makanan adalah "kitchen" (dapur).'
  },

  // Soal 18
  {
    id: 'en-q18',
    originalNumber: 18,
    type: 'pilihan_ganda',
    category: 'Daily Routines',
    elemen: ELEMEN_BAHASA_INGGRIS,
    capaianPembelajaran: CP_BAHASA_INGGRIS,
    tujuanPembelajaran: TP_ACTIVITIES_AT_HOME,
    indikator: 'Siswa dapat menentukan makan malam bersama keluarga.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    question: 'What do we eat with our family at 7:00 in the evening?',
    options: [
      'Breakfast',
      'Dinner',
      'Lunch',
      'Ice cream'
    ],
    correctAnswer: 1,
    explanation: 'Makan pada malam hari pukul 7 disebut "dinner" (makan malam).'
  },

  // Soal 19
  {
    id: 'en-q19',
    originalNumber: 19,
    type: 'pilihan_ganda',
    category: 'Helping Family',
    elemen: ELEMEN_BAHASA_INGGRIS,
    capaianPembelajaran: CP_BAHASA_INGGRIS,
    tujuanPembelajaran: TP_ACTIVITIES_AT_HOME,
    indikator: 'Siswa dapat memilih kebiasaan merapikan mainan setelah bermain.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    question: 'After playing in your room, what should you do with your toys?',
    options: [
      'Tidy up the toys',
      'Throw them away',
      'Leave them dirty',
      'Break the toys'
    ],
    correctAnswer: 0,
    explanation: 'Setelah bermain, kita harus merapikan mainan ("tidy up the toys").'
  },

  // Soal 20
  {
    id: 'en-q20',
    originalNumber: 20,
    type: 'pilihan_ganda',
    category: 'Helping Family',
    elemen: ELEMEN_BAHASA_INGGRIS,
    capaianPembelajaran: CP_BAHASA_INGGRIS,
    tujuanPembelajaran: TP_ACTIVITIES_AT_HOME,
    indikator: 'Siswa dapat memilih ungkapan santun untuk menawarkan bantuan kepada orang tua.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    question: 'When mother is cleaning the house, what can you say to help her?',
    options: [
      '"Can I help you, Mom?"',
      '"I want to sleep, Mom."',
      '"Buy me candy, Mom."',
      '"I am tired, Mom."'
    ],
    correctAnswer: 0,
    explanation: 'Ungkapan sopan menawarkan bantuan kepada ibu adalah "Can I help you, Mom?" (Bolehkah saya membantu Ibu?).'
  }
];
