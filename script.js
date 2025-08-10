const flashcard = document.getElementById('flashcard');
const wordElement = document.getElementById('flashcard-front');
const translationElement = document.getElementById('flashcard-back');
const hafalBtn = document.getElementById('hafal-btn');
const unhafalBtn = document.getElementById('unhafal-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const controlsDiv = document.querySelector('.controls');
const congratulationsModal = document.getElementById('congratulationsModal');
const restartFromModalBtn = document.getElementById('restartFromModal');

const slidebarMenu = document.getElementById('slidebar-menu');
const slidebarTriggerBtn = document.querySelector('.slidebar-trigger');
const doneBtn = document.getElementById('done-btn');
const blurOverlay = document.getElementById('blur-overlay');

const headerTitle = document.getElementById('header-title');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const totalWordsSpan = document.getElementById('total-words');

const initialModal = document.getElementById('initialModal');
const startFromModalBtn = document.getElementById('startFromModal');

const flashcardData = {
    "noun": {
        "sekolah": {
            "L1": [{ word: 'book', translation: 'buku' }, { word: 'pen', translation: 'pulpen' }, { word: 'desk', translation: 'meja' }, { word: 'chair', translation: 'kursi' }, { word: 'teacher', translation: 'guru' }, { word: 'student', translation: 'siswa' }],
            "L2": [{ word: 'library', translation: 'perpustakaan' }, { word: 'blackboard', translation: 'papan tulis' }, { word: 'classroom', translation: 'ruang kelas' }, { word: 'lesson', translation: 'pelajaran' }, { word: 'homework', translation: 'pekerjaan rumah' }, { word: 'notebook', translation: 'buku catatan' }],
            "L3": [{ word: 'ruler', translation: 'penggaris' }, { word: 'exam', translation: 'ujian' }, { word: 'subject', translation: 'mata pelajaran' }, { word: 'timetable', translation: 'jadwal' }, { word: 'campus', translation: 'kampus' }, { word: 'project', translation: 'proyek' }],
            "L4": [{ word: 'laboratory', translation: 'laboratorium' }, { word: 'diploma', translation: 'diploma' }, { word: 'degree', translation: 'gelar' }, { word: 'faculty', translation: 'fakultas' }, { word: 'lecture', translation: 'ceramah' }, { word: 'seminar', translation: 'seminar' }],
            "L5": [{ word: 'curriculum', translation: 'kurikulum' }, { word: 'pedagogy', translation: 'pedagogi' }, { word: 'thesis', translation: 'tesis' }, { word: 'dissertation', translation: 'disertasi' }, { word: 'syllabus', translation: 'silabus' }, { word: 'methodology', translation: 'metodologi' }],
        },
        "rumah": {
            "L1": [{ word: 'bed', translation: 'tempat tidur' }, { word: 'table', translation: 'meja' }, { word: 'chair', translation: 'kursi' }, { word: 'door', translation: 'pintu' }, { word: 'window', translation: 'jendela' }, { word: 'lamp', translation: 'lampu' }],
            "L2": [{ word: 'kitchen', translation: 'dapur' }, { word: 'bedroom', translation: 'kamar tidur' }, { word: 'bathroom', translation: 'kamar mandi' }, { word: 'sofa', translation: 'sofa' }, { word: 'floor', translation: 'lantai' }, { word: 'wall', translation: 'dinding' }],
            "L3": [{ word: 'fridge', translation: 'kulkas' }, { word: 'stove', translation: 'kompor' }, { word: 'cupboard', translation: 'lemari' }, { word: 'mirror', translation: 'cermin' }, { word: 'curtain', translation: 'gorden' }, { word: 'pillow', translation: 'bantal' }],
            "L4": [{ word: 'washing machine', translation: 'mesin cuci' }, { word: 'bookshelf', translation: 'rak buku' }, { word: 'wardrobe', translation: 'lemari pakaian' }, { word: 'ceiling', translation: 'langit-langit' }, { word: 'balcony', translation: 'balkon' }, { word: 'garage', translation: 'garasi' }],
            "L5": [{ word: 'architecture', translation: 'arsitektur' }, { word: 'furnishing', translation: 'perabotan' }, { word: 'ventilation', translation: 'ventilasi' }, { word: 'plumbing', translation: 'saluran air' }, { word: 'renovation', translation: 'renovasi' }, { word: 'appliance', translation: 'peralatan' }],
        },
        "pasar": {
            "L1": [{ word: 'market', translation: 'pasar' }, { word: 'shop', translation: 'toko' }, { word: 'bag', translation: 'tas' }, { word: 'price', translation: 'harga' }, { word: 'money', translation: 'uang' }, { word: 'cashier', translation: 'kasir' }],
            "L2": [{ word: 'basket', translation: 'keranjang' }, { word: 'cart', translation: 'kereta dorong' }, { word: 'bill', translation: 'struk' }, { word: 'coin', translation: 'koin' }, { word: 'note', translation: 'uang kertas' }, { word: 'product', translation: 'produk' }],
            "L3": [{ word: 'receipt', translation: 'kuitansi' }, { word: 'shelf', translation: 'rak' }, { word: 'customer', translation: 'pelanggan' }, { word: 'seller', translation: 'penjual' }, { word: 'queue', translation: 'antrian' }, { word: 'sale', translation: 'diskon' }],
            "L4": [{ word: 'discount', translation: 'diskon' }, { word: 'label', translation: 'label' }, { word: 'barcode', translation: 'kode batang' }, { word: 'counter', translation: 'meja' }, { word: 'aisle', translation: 'lorong' }, { word: 'stock', translation: 'stok' }],
            "L5": [{ word: 'merchandise', translation: 'barang dagangan' }, { word: 'inventory', translation: 'inventaris' }, { word: 'transaction', translation: 'transaksi' }, { word: 'wholesaler', translation: 'pedagang grosir' }, { word: 'retailer', translation: 'pedagang eceran' }, { word: 'vendor', translation: 'penjual' }],
        },
        "liburan": {
            "L1": [{ word: 'beach', translation: 'pantai' }, { word: 'hotel', translation: 'hotel' }, { word: 'map', translation: 'peta' }, { word: 'bag', translation: 'tas' }, { word: 'hat', translation: 'topi' }, { word: 'sun', translation: 'matahari' }],
            "L2": [{ word: 'river', translation: 'sungai' }, { word: 'lake', translation: 'danau' }, { word: 'tent', translation: 'tenda' }, { word: 'boat', translation: 'perahu' }, { word: 'road', translation: 'jalan' }, { word: 'hill', translation: 'bukit' }],
            "L3": [{ word: 'mountain', translation: 'gunung' }, { word: 'guide', translation: 'pemandu' }, { word: 'ticket', translation: 'tiket' }, { word: 'bus', translation: 'bus' }, { word: 'train', translation: 'kereta' }, { word: 'city', translation: 'kota' }],
            "L4": [{ word: 'passport', translation: 'paspor' }, { word: 'luggage', translation: 'koper' }, { word: 'resort', translation: 'resor' }, { word: 'camera', translation: 'kamera' }, { word: 'journey', translation: 'perjalanan' }, { word: 'trip', translation: 'perjalanan' }],
            "L5": [{ word: 'itinerary', translation: 'rencana perjalanan' }, { word: 'accommodation', translation: 'akomodasi' }, { word: 'destination', translation: 'tujuan' }, { word: 'attraction', translation: 'atraksi' }, { word: 'sightseeing', translation: 'wisata' }, { word: 'souvenir', translation: 'suvenir' }],
        },
        "rumahsakit": {
            "L1": [{ word: 'doctor', translation: 'dokter' }, { word: 'nurse', translation: 'perawat' }, { word: 'bed', translation: 'tempat tidur' }, { word: 'pill', translation: 'pil' }, { word: 'hand', translation: 'tangan' }, { word: 'mask', translation: 'masker' }],
            "L2": [{ word: 'patient', translation: 'pasien' }, { word: 'medicine', translation: 'obat' }, { word: 'clinic', translation: 'klinik' }, { word: 'ward', translation: 'bangsal' }, { word: 'room', translation: 'ruangan' }, { word: 'blood', translation: 'darah' }],
            "L3": [{ word: 'disease', translation: 'penyakit' }, { word: 'injury', translation: 'cedera' }, { word: 'illness', translation: 'penyakit' }, { word: 'test', translation: 'tes' }, { word: 'check', translation: 'periksa' }, { word: 'form', translation: 'formulir' }],
            "L4": [{ word: 'operation', translation: 'operasi' }, { word: 'treatment', translation: 'perawatan' }, { word: 'ambulance', translation: 'ambulans' }, { word: 'stretcher', translation: 'tandu' }, { word: 'syringe', translation: 'jarum suntik' }, { word: 'bandage', translation: 'perban' }],
            "L5": [{ word: 'diagnosis', translation: 'diagnosis' }, { word: 'prescription', translation: 'resep' }, { word: 'recovery', translation: 'pemulihan' }, { word: 'rehabilitation', translation: 'rehabilitasi' }, { word: 'consultation', translation: 'konsultasi' }, { word: 'vaccination', translation: 'vaksinasi' }],
        },
        "bepergian": {
            "L1": [{ word: 'bus', translation: 'bus' }, { word: 'car', translation: 'mobil' }, { word: 'road', translation: 'jalan' }, { word: 'map', translation: 'peta' }, { word: 'bag', translation: 'tas' }, { word: 'ticket', translation: 'tiket' }],
            "L2": [{ word: 'train', translation: 'kereta' }, { word: 'plane', translation: 'pesawat' }, { word: 'ship', translation: 'kapal' }, { word: 'taxi', translation: 'taksi' }, { word: 'bike', translation: 'sepeda' }, { word: 'stop', translation: 'berhenti' }],
            "L3": [{ word: 'station', translation: 'stasiun' }, { word: 'airport', translation: 'bandara' }, { word: 'driver', translation: 'supir' }, { word: 'passenger', translation: 'penumpang' }, { word: 'route', translation: 'rute' }, { word: 'seat', translation: 'kursi' }],
            "L4": [{ word: 'luggage', translation: 'koper' }, { word: 'schedule', translation: 'jadwal' }, { word: 'platform', translation: 'peron' }, { word: 'gate', translation: 'gerbang' }, { word: 'highway', translation: 'jalan tol' }, { word: 'journey', translation: 'perjalanan' }],
            "L5": [{ word: 'itinerary', translation: 'rencana perjalanan' }, { word: 'terminal', translation: 'terminal' }, { word: 'navigation', translation: 'navigasi' }, { word: 'destination', translation: 'tujuan' }, { word: 'checkpoint', translation: 'pos pemeriksaan' }, { word: 'transit', translation: 'transit' }],
        },
        "restoran": {
            "L1": [{ word: 'menu', translation: 'menu' }, { word: 'table', translation: 'meja' }, { word: 'chair', translation: 'kursi' }, { word: 'plate', translation: 'piring' }, { word: 'glass', translation: 'gelas' }, { word: 'cup', translation: 'cangkir' }],
            "L2": [{ word: 'fork', translation: 'garpu' }, { word: 'spoon', translation: 'sendok' }, { word: 'knife', translation: 'pisau' }, { word: 'bill', translation: 'tagihan' }, { word: 'food', translation: 'makanan' }, { word: 'drink', translation: 'minuman' }],
            "L3": [{ word: 'waiter', translation: 'pelayan' }, { word: 'waitress', translation: 'pelayan' }, { word: 'chef', translation: 'koki' }, { word: 'dish', translation: 'hidangan' }, { word: 'order', translation: 'pesanan' }, { word: 'tray', translation: 'nampan' }],
            "L4": [{ word: 'counter', translation: 'meja kasir' }, { word: 'kitchen', translation: 'dapur' }, { word: 'customer', translation: 'pelanggan' }, { word: 'reservation', translation: 'reservasi' }, { word: 'tablecloth', translation: 'taplak meja' }, { word: 'napkin', translation: 'serbet' }],
            "L5": [{ word: 'cuisine', translation: 'masakan' }, { word: 'appetizer', translation: 'hidangan pembuka' }, { word: 'main course', translation: 'hidangan utama' }, { word: 'dessert', translation: 'hidangan penutup' }, { word: 'beverage', translation: 'minuman' }, { word: 'hospitality', translation: 'keramahan' }],
        },
    },
    "verb": {
        "sekolah": {
            "L1": [{ word: 'read', translation: 'membaca' }, { word: 'write', translation: 'menulis' }, { word: 'learn', translation: 'belajar' }, { word: 'teach', translation: 'mengajar' }, { word: 'ask', translation: 'bertanya' }, { word: 'answer', translation: 'menjawab' }],
            "L2": [{ word: 'study', translation: 'belajar' }, { word: 'draw', translation: 'menggambar' }, { word: 'erase', translation: 'menghapus' }, { word: 'listen', translation: 'mendengarkan' }, { word: 'speak', translation: 'berbicara' }, { word: 'practice', translation: 'berlatih' }],
            "L3": [{ word: 'explain', translation: 'menjelaskan' }, { word: 'discuss', translation: 'berdiskusi' }, { word: 'review', translation: 'meninjau' }, { word: 'revise', translation: 'merevisi' }, { word: 'check', translation: 'memeriksa' }, { word: 'present', translation: 'mempresentasikan' }],
            "L4": [{ word: 'evaluate', translation: 'mengevaluasi' }, { word: 'analyze', translation: 'menganalisis' }, { word: 'summarize', translation: 'meringkas' }, { word: 'demonstrate', translation: 'mendemonstrasikan' }, { word: 'debate', translation: 'berdebat' }, { word: 'argue', translation: 'berdebat' }],
            "L5": [{ word: 'facilitate', translation: 'memfasilitasi' }, { word: 'coordinate', translation: 'mengkoordinasikan' }, { word: 'implement', translation: 'mengimplementasikan' }, { word: 'assess', translation: 'menilai' }, { word: 'strategize', translation: 'menyusun strategi' }, { word: 'innovate', translation: 'berinovasi' }],
        },
        "rumah": {
            "L1": [{ word: 'eat', translation: 'makan' }, { word: 'drink', translation: 'minum' }, { word: 'cook', translation: 'memasak' }, { word: 'wash', translation: 'mencuci' }, { word: 'sleep', translation: 'tidur' }, { word: 'sit', translation: 'duduk' }],
            "L2": [{ word: 'clean', translation: 'membersihkan' }, { word: 'open', translation: 'membuka' }, { word: 'close', translation: 'menutup' }, { word: 'sweep', translation: 'menyapu' }, { word: 'mop', translation: 'mengepel' }, { word: 'watch', translation: 'menonton' }],
            "L3": [{ word: 'repair', translation: 'memperbaiki' }, { word: 'fix', translation: 'memperbaiki' }, { word: 'fold', translation: 'melipat' }, { word: 'arrange', translation: 'mengatur' }, { word: 'decorate', translation: 'mendekorasi' }, { word: 'store', translation: 'menyimpan' }],
            "L4": [{ word: 'renovate', translation: 'merenovasi' }, { word: 'maintain', translation: 'memelihara' }, { word: 'organize', translation: 'mengorganisir' }, { word: 'replace', translation: 'mengganti' }, { word: 'upgrade', translation: 'meningkatkan' }, { word: 'design', translation: 'mendesain' }],
            "L5": [{ word: 'construct', translation: 'membangun' }, { word: 'assemble', translation: 'merakit' }, { word: 'dismantle', translation: 'membongkar' }, { word: 'refurbish', translation: 'merenovasi' }, { word: 'automate', translation: 'mengotomatisasi' }, { word: 'customize', translation: 'menyesuaikan' }],
        },
        "pasar": {
            "L1": [{ word: 'buy', translation: 'membeli' }, { word: 'sell', translation: 'menjual' }, { word: 'pay', translation: 'membayar' }, { word: 'take', translation: 'mengambil' }, { word: 'get', translation: 'mendapatkan' }, { word: 'go', translation: 'pergi' }],
            "L2": [{ word: 'choose', translation: 'memilih' }, { word: 'pick', translation: 'mengambil' }, { word: 'carry', translation: 'membawa' }, { word: 'give', translation: 'memberi' }, { word: 'shop', translation: 'belanja' }, { word: 'bring', translation: 'membawa' }],
            "L3": [{ word: 'weigh', translation: 'menimbang' }, { word: 'check', translation: 'memeriksa' }, { word: 'spend', translation: 'menghabiskan' }, { word: 'return', translation: 'mengembalikan' }, { word: 'pack', translation: 'mengemas' }, { word: 'offer', translation: 'menawarkan' }],
            "L4": [{ word: 'bargain', translation: 'menawar' }, { word: 'order', translation: 'memesan' }, { word: 'deliver', translation: 'mengirim' }, { word: 'supply', translation: 'menyediakan' }, { word: 'restock', translation: 'mengisi kembali' }, { word: 'manage', translation: 'mengelola' }],
            "L5": [{ word: 'distribute', translation: 'mendistribusikan' }, { word: 'advertise', translation: 'mengiklankan' }, { word: 'promote', translation: 'mempromosikan' }, { word: 'negotiate', translation: 'bernegosiasi' }, { word: 'invest', translation: 'berinvestasi' }, { word: 'import', translation: 'mengimpor' }],
        },
        "liburan": {
            "L1": [{ word: 'go', translation: 'pergi' }, { word: 'come', translation: 'datang' }, { word: 'swim', translation: 'berenang' }, { word: 'walk', translation: 'berjalan' }, { word: 'run', translation: 'berlari' }, { word: 'play', translation: 'bermain' }],
            "L2": [{ word: 'travel', translation: 'bepergian' }, { word: 'visit', translation: 'mengunjungi' }, { word: 'ride', translation: 'mengendarai' }, { word: 'climb', translation: 'mendaki' }, { word: 'hike', translation: 'mendaki' }, { word: 'rest', translation: 'beristirahat' }],
            "L3": [{ word: 'camp', translation: 'berkemah' }, { word: 'fish', translation: 'memancing' }, { word: 'sail', translation: 'berlayar' }, { word: 'explore', translation: 'menjelajah' }, { word: 'tour', translation: 'tur' }, { word: 'stay', translation: 'menginap' }],
            "L4": [{ word: 'pack', translation: 'mengemas' }, { word: 'unpack', translation: 'membongkar' }, { word: 'check', translation: 'memeriksa' }, { word: 'reserve', translation: 'memesan' }, { word: 'book', translation: 'memesan' }, { word: 'plan', translation: 'merencanakan' }],
            "L5": [{ word: 'arrange', translation: 'mengatur' }, { word: 'organize', translation: 'mengorganisir' }, { word: 'schedule', translation: 'menjadwalkan' }, { word: 'document', translation: 'mendokumentasikan' }, { word: 'capture', translation: 'mengambil' }, { word: 'explore', translation: 'menjelajahi' }],
        },
        "rumahsakit": {
            "L1": [{ word: 'see', translation: 'melihat' }, { word: 'help', translation: 'membantu' }, { word: 'go', translation: 'pergi' }, { word: 'take', translation: 'mengambil' }, { word: 'give', translation: 'memberi' }, { word: 'wait', translation: 'menunggu' }],
            "L2": [{ word: 'rest', translation: 'istirahat' }, { word: 'walk', translation: 'berjalan' }, { word: 'call', translation: 'memanggil' }, { word: 'drink', translation: 'minum' }, { word: 'eat', translation: 'makan' }, { word: 'wash', translation: 'mencuci' }],
            "L3": [{ word: 'check', translation: 'memeriksa' }, { word: 'test', translation: 'menguji' }, { word: 'cure', translation: 'menyembuhkan' }, { word: 'heal', translation: 'menyembuhkan' }, { word: 'treat', translation: 'merawat' }, { word: 'admit', translation: 'mengakui' }],
            "L4": [{ word: 'examine', translation: 'memeriksa' }, { word: 'operate', translation: 'mengoperasi' }, { word: 'inject', translation: 'menyuntik' }, { word: 'prescribe', translation: 'meresepkan' }, { word: 'bandage', translation: 'membalut' }, { word: 'transfer', translation: 'memindahkan' }],
            "L5": [{ word: 'diagnose', translation: 'mendiagnosis' }, { word: 'rehabilitate', translation: 'merehabilitasi' }, { word: 'consult', translation: 'berkonsultasi' }, { word: 'recover', translation: 'pulih' }, { word: 'medicate', translation: 'mengobati' }, { word: 'vaccinate', translation: 'memvaksinasi' }],
        },
        "bepergian": {
            "L1": [{ word: 'go', translation: 'pergi' }, { word: 'come', translation: 'datang' }, { word: 'walk', translation: 'berjalan' }, { word: 'run', translation: 'berlari' }, { word: 'ride', translation: 'mengendarai' }, { word: 'wait', translation: 'menunggu' }],
            "L2": [{ word: 'drive', translation: 'mengemudi' }, { word: 'fly', translation: 'terbang' }, { word: 'sail', translation: 'berlayar' }, { word: 'stop', translation: 'berhenti' }, { word: 'turn', translation: 'berbelok' }, { word: 'move', translation: 'bergerak' }],
            "L3": [{ word: 'board', translation: 'naik' }, { word: 'park', translation: 'memarkir' }, { word: 'leave', translation: 'meninggalkan' }, { word: 'arrive', translation: 'tiba' }, { word: 'travel', translation: 'bepergian' }, { word: 'pass', translation: 'melewati' }],
            "L4": [{ word: 'navigate', translation: 'menavigasi' }, { word: 'transport', translation: 'mengangkut' }, { word: 'reserve', translation: 'memesan' }, { word: 'plan', translation: 'merencanakan' }, { word: 'explore', translation: 'menjelajahi' }, { word: 'carry', translation: 'membawa' }],
            "L5": [{ word: 'coordinate', translation: 'mengkoordinasikan' }, { word: 'schedule', translation: 'menjadwalkan' }, { word: 'operate', translation: 'mengoperasikan' }, { word: 'manage', translation: 'mengelola' }, { word: 'monitor', translation: 'memantau' }, { word: 'arrange', translation: 'mengatur' }],
        },
        "restoran": {
            "L1": [{ word: 'eat', translation: 'makan' }, { word: 'drink', translation: 'minum' }, { word: 'sit', translation: 'duduk' }, { word: 'pay', translation: 'membayar' }, { word: 'take', translation: 'mengambil' }, { word: 'get', translation: 'mendapatkan' }],
            "L2": [{ word: 'cook', translation: 'memasak' }, { word: 'serve', translation: 'melayani' }, { word: 'bring', translation: 'membawa' }, { word: 'ask', translation: 'meminta' }, { word: 'order', translation: 'memesan' }, { word: 'clean', translation: 'membersihkan' }],
            "L3": [{ word: 'prepare', translation: 'menyiapkan' }, { word: 'taste', translation: 'mencicipi' }, { word: 'pour', translation: 'menuang' }, { word: 'carry', translation: 'membawa' }, { word: 'deliver', translation: 'mengirim' }, { word: 'arrange', translation: 'mengatur' }],
            "L4": [{ word: 'recommend', translation: 'merekomendasikan' }, { word: 'reserve', translation: 'memesan' }, { word: 'present', translation: 'menyajikan' }, { word: 'garnish', translation: 'menghias' }, { word: 'slice', translation: 'mengiris' }, { word: 'mix', translation: 'mencampur' }],
            "L5": [{ word: 'customize', translation: 'menyesuaikan' }, { word: 'marinate', translation: 'memarinasi' }, { word: 'steam', translation: 'mengukus' }, { word: 'roast', translation: 'memanggang' }, { word: 'bake', translation: 'memanggang' }, { word: 'decorate', translation: 'mendekorasi' }],
        },
    },
    "adjective": {
        "sekolah": {
            "L1": [{ word: 'smart', translation: 'pintar' }, { word: 'clever', translation: 'cerdas' }, { word: 'easy', translation: 'mudah' }, { word: 'hard', translation: 'sulit' }, { word: 'good', translation: 'baik' }, { word: 'bad', translation: 'buruk' }],
            "L2": [{ word: 'strict', translation: 'ketat' }, { word: 'friendly', translation: 'ramah' }, { word: 'noisy', translation: 'berisik' }, { word: 'quiet', translation: 'tenang' }, { word: 'diligent', translation: 'rajin' }, { word: 'lazy', translation: 'malas' }],
            "L3": [{ word: 'helpful', translation: 'membantu' }, { word: 'active', translation: 'aktif' }, { word: 'passive', translation: 'pasif' }, { word: 'tired', translation: 'lelah' }, { word: 'busy', translation: 'sibuk' }, { word: 'prepared', translation: 'siap' }],
            "L4": [{ word: 'creative', translation: 'kreatif' }, { word: 'innovative', translation: 'inovatif' }, { word: 'critical', translation: 'kritis' }, { word: 'logical', translation: 'logis' }, { word: 'organized', translation: 'terorganisir' }, { word: 'consistent', translation: 'konsisten' }],
            "L5": [{ word: 'outstanding', translation: 'luar biasa' }, { word: 'comprehensive', translation: 'komprehensif' }, { word: 'proficient', translation: 'mahir' }, { word: 'exceptional', translation: 'istimewa' }, { word: 'advanced', translation: 'maju' }, { word: 'intellectual', translation: 'intelektual' }],
        },
        "rumah": {
            "L1": [{ word: 'clean', translation: 'bersih' }, { word: 'dirty', translation: 'kotor' }, { word: 'big', translation: 'besar' }, { word: 'small', translation: 'kecil' }, { word: 'bright', translation: 'cerah' }, { word: 'dark', translation: 'gelap' }],
            "L2": [{ word: 'comfortable', translation: 'nyaman' }, { word: 'messy', translation: 'berantakan' }, { word: 'soft', translation: 'lembut' }, { word: 'hard', translation: 'keras' }, { word: 'warm', translation: 'hangat' }, { word: 'cold', translation: 'dingin' }],
            "L3": [{ word: 'spacious', translation: 'luas' }, { word: 'narrow', translation: 'sempit' }, { word: 'cozy', translation: 'nyaman' }, { word: 'dusty', translation: 'berdebu' }, { word: 'tidy', translation: 'rapi' }, { word: 'neat', translation: 'rapi' }],
            "L4": [{ word: 'furnished', translation: 'berperabot' }, { word: 'modern', translation: 'modern' }, { word: 'traditional', translation: 'tradisional' }, { word: 'stylish', translation: 'bergaya' }, { word: 'functional', translation: 'fungsional' }, { word: 'luxurious', translation: 'mewah' }],
            "L5": [{ word: 'ergonomic', translation: 'ergonomis' }, { word: 'sustainable', translation: 'berkelanjutan' }, { word: 'energy-efficient', translation: 'hemat energi' }, { word: 'weatherproof', translation: 'tahan cuaca' }, { word: 'minimalistic', translation: 'minimalis' }, { word: 'durable', translation: 'tahan lama' }],
        },
        "pasar": {
            "L1": [{ word: 'cheap', translation: 'murah' }, { word: 'expensive', translation: 'mahal' }, { word: 'big', translation: 'besar' }, { word: 'small', translation: 'kecil' }, { word: 'new', translation: 'baru' }, { word: 'old', translation: 'lama' }],
            "L2": [{ word: 'fresh', translation: 'segar' }, { word: 'stale', translation: 'basi' }, { word: 'clean', translation: 'bersih' }, { word: 'dirty', translation: 'kotor' }, { word: 'open', translation: 'buka' }, { word: 'closed', translation: 'tutup' }],
            "L3": [{ word: 'busy', translation: 'sibuk' }, { word: 'quiet', translation: 'sepi' }, { word: 'full', translation: 'penuh' }, { word: 'empty', translation: 'kosong' }, { word: 'available', translation: 'tersedia' }, { word: 'popular', translation: 'populer' }],
            "L4": [{ word: 'discounted', translation: 'didiskon' }, { word: 'seasonal', translation: 'musiman' }, { word: 'imported', translation: 'impor' }, { word: 'expired', translation: 'kedaluwarsa' }, { word: 'packaged', translation: 'dikemas' }, { word: 'organic', translation: 'organik' }],
            "L5": [{ word: 'wholesale', translation: 'grosir' }, { word: 'retail', translation: 'eceran' }, { word: 'competitive', translation: 'kompetitif' }, { word: 'profitable', translation: 'menguntungkan' }, { word: 'exclusive', translation: 'eksklusif' }, { word: 'premium', translation: 'premium' }],
        },
        "liburan": {
            "L1": [{ word: 'sunny', translation: 'cerah' }, { word: 'rainy', translation: 'hujan' }, { word: 'hot', translation: 'panas' }, { word: 'cold', translation: 'dingin' }, { word: 'fun', translation: 'menyenangkan' }, { word: 'long', translation: 'panjang' }],
            "L2": [{ word: 'short', translation: 'pendek' }, { word: 'exciting', translation: 'menarik' }, { word: 'busy', translation: 'sibuk' }, { word: 'quiet', translation: 'tenang' }, { word: 'beautiful', translation: 'cantik' }, { word: 'safe', translation: 'aman' }],
            "L3": [{ word: 'dangerous', translation: 'berbahaya' }, { word: 'comfortable', translation: 'nyaman' }, { word: 'relaxing', translation: 'santai' }, { word: 'cheap', translation: 'murah' }, { word: 'expensive', translation: 'mahal' }, { word: 'far', translation: 'jauh' }],
            "L4": [{ word: 'adventurous', translation: 'penuh petualangan' }, { word: 'memorable', translation: 'berkesan' }, { word: 'seasonal', translation: 'musiman' }, { word: 'cultural', translation: 'budaya' }, { word: 'rural', translation: 'pedesaan' }, { word: 'urban', translation: 'perkotaan' }],
            "L5": [{ word: 'exotic', translation: 'eksotis' }, { word: 'historical', translation: 'bersejarah' }, { word: 'breathtaking', translation: 'menakjubkan' }, { word: 'luxurious', translation: 'mewah' }, { word: 'remote', translation: 'terpencil' }, { word: 'scenic', translation: 'pemandangan indah' }],
        },
        "rumahsakit": {
            "L1": [{ word: 'sick', translation: 'sakit' }, { word: 'ill', translation: 'sakit' }, { word: 'well', translation: 'sehat' }, { word: 'weak', translation: 'lemah' }, { word: 'strong', translation: 'kuat' }, { word: 'hot', translation: 'panas' }],
            "L2": [{ word: 'cold', translation: 'dingin' }, { word: 'healthy', translation: 'sehat' }, { word: 'tired', translation: 'lelah' }, { word: 'injured', translation: 'terluka' }, { word: 'careful', translation: 'hati-hati' }, { word: 'better', translation: 'lebih baik' }],
            "L3": [{ word: 'serious', translation: 'serius' }, { word: 'urgent', translation: 'mendesak' }, { word: 'safe', translation: 'aman' }, { word: 'clean', translation: 'bersih' }, { word: 'dirty', translation: 'kotor' }, { word: 'alive', translation: 'hidup' }],
            "L4": [{ word: 'medical', translation: 'medis' }, { word: 'clinical', translation: 'klinis' }, { word: 'surgical', translation: 'bedah' }, { word: 'therapeutic', translation: 'terapeutik' }, { word: 'infected', translation: 'terinfeksi' }, { word: 'sterile', translation: 'steril' }],
            "L5": [{ word: 'chronic', translation: 'kronis' }, { word: 'acute', translation: 'akut' }, { word: 'contagious', translation: 'menular' }, { word: 'life-threatening', translation: 'mengancam jiwa' }, { word: 'recoverable', translation: 'dapat dipulihkan' }, { word: 'incurable', translation: 'tidak dapat disembuhkan' }],
        },
        "bepergian": {
            "L1": [{ word: 'fast', translation: 'cepat' }, { word: 'slow', translation: 'lambat' }, { word: 'near', translation: 'dekat' }, { word: 'far', translation: 'jauh' }, { word: 'long', translation: 'panjang' }, { word: 'short', translation: 'pendek' }],
            "L2": [{ word: 'crowded', translation: 'ramai' }, { word: 'empty', translation: 'kosong' }, { word: 'busy', translation: 'sibuk' }, { word: 'quiet', translation: 'tenang' }, { word: 'safe', translation: 'aman' }, { word: 'dangerous', translation: 'berbahaya' }],
            "L3": [{ word: 'comfortable', translation: 'nyaman' }, { word: 'cheap', translation: 'murah' }, { word: 'expensive', translation: 'mahal' }, { word: 'direct', translation: 'langsung' }, { word: 'indirect', translation: 'tidak langsung' }, { word: 'public', translation: 'umum' }],
            "L4": [{ word: 'private', translation: 'pribadi' }, { word: 'international', translation: 'internasional' }, { word: 'domestic', translation: 'domestik' }, { word: 'rural', translation: 'pedesaan' }, { word: 'urban', translation: 'perkotaan' }],
            "L5": [{ word: 'reliable', translation: 'andal' }, { word: 'sustainable', translation: 'berkelanjutan' }, { word: 'luxurious', translation: 'mewah' }, { word: 'remote', translation: 'terpencil' }, { word: 'accessible', translation: 'dapat diakses' }, { word: 'efficient', translation: 'efisien' }],
        },
        "restoran": {
            "L1": [{ word: 'hot', translation: 'panas' }, { word: 'cold', translation: 'dingin' }, { word: 'sweet', translation: 'manis' }, { word: 'salty', translation: 'asin' }, { word: 'big', translation: 'besar' }, { word: 'small', translation: 'kecil' }],
            "L2": [{ word: 'fresh', translation: 'segar' }, { word: 'spicy', translation: 'pedas' }, { word: 'sour', translation: 'asam' }, { word: 'bitter', translation: 'pahit' }, { word: 'tasty', translation: 'enak' }, { word: 'delicious', translation: 'lezat' }],
            "L3": [{ word: 'clean', translation: 'bersih' }, { word: 'dirty', translation: 'kotor' }, { word: 'busy', translation: 'sibuk' }, { word: 'quiet', translation: 'tenang' }, { word: 'full', translation: 'penuh' }, { word: 'empty', translation: 'kosong' }],
            "L4": [{ word: 'traditional', translation: 'tradisional' }, { word: 'modern', translation: 'modern' }, { word: 'vegetarian', translation: 'vegetarian' }, { word: 'grilled', translation: 'dipanggang' }, { word: 'fried', translation: 'digoreng' }, { word: 'steamed', translation: 'dikukus' }],
            "L5": [{ word: 'gourmet', translation: 'gourmet' }, { word: 'authentic', translation: 'otentik' }, { word: 'exotic', translation: 'eksotis' }, { word: 'organic', translation: 'organik' }, { word: 'savory', translation: 'gurih' }, { word: 'tender', translation: 'empuk' }],
        },
    },
    "adverb": {
        "sekolah": {
            "L1": [{ word: 'quickly', translation: 'dengan cepat' }, { word: 'slowly', translation: 'dengan lambat' }, { word: 'carefully', translation: 'dengan hati-hati' }, { word: 'loudly', translation: 'dengan keras' }, { word: 'silently', translation: 'dengan diam-diam' }, { word: 'well', translation: 'dengan baik' }],
            "L2": [{ word: 'clearly', translation: 'dengan jelas' }, { word: 'neatly', translation: 'dengan rapi' }, { word: 'badly', translation: 'dengan buruk' }, { word: 'properly', translation: 'dengan benar' }, { word: 'politely', translation: 'dengan sopan' }, { word: 'fairly', translation: 'secara adil' }],
            "L3": [{ word: 'actively', translation: 'secara aktif' }, { word: 'passively', translation: 'secara pasif' }, { word: 'regularly', translation: 'secara teratur' }, { word: 'rarely', translation: 'jarang' }, { word: 'always', translation: 'selalu' }, { word: 'often', translation: 'sering' }],
            "L4": [{ word: 'critically', translation: 'secara kritis' }, { word: 'logically', translation: 'secara logis' }, { word: 'creatively', translation: 'secara kreatif' }, { word: 'analytically', translation: 'secara analitis' }, { word: 'precisely', translation: 'secara tepat' }, { word: 'accurately', translation: 'secara akurat' }],
            "L5": [{ word: 'exceptionally', translation: 'luar biasa' }, { word: 'comprehensively', translation: 'secara komprehensif' }, { word: 'consistently', translation: 'secara konsisten' }, { word: 'thoroughly', translation: 'secara menyeluruh' }, { word: 'effectively', translation: 'secara efektif' }, { word: 'efficiently', translation: 'secara efisien' }],
        },
        "rumah": {
            "L1": [{ word: 'daily', translation: 'setiap hari' }, { word: 'often', translation: 'sering' }, { word: 'sometimes', translation: 'kadang-kadang' }, { word: 'rarely', translation: 'jarang' }, { word: 'never', translation: 'tidak pernah' }, { word: 'always', translation: 'selalu' }],
            "L2": [{ word: 'gently', translation: 'dengan lembut' }, { word: 'quickly', translation: 'dengan cepat' }, { word: 'slowly', translation: 'dengan lambat' }, { word: 'carefully', translation: 'dengan hati-hati' }, { word: 'badly', translation: 'dengan buruk' }, { word: 'neatly', translation: 'dengan rapi' }],
            "L3": [{ word: 'regularly', translation: 'secara teratur' }, { word: 'occasionally', translation: 'sesekali' }, { word: 'completely', translation: 'sepenuhnya' }, { word: 'partially', translation: 'sebagian' }, { word: 'equally', translation: 'secara setara' }, { word: 'fairly', translation: 'secara adil' }],
            "L4": [{ word: 'efficiently', translation: 'secara efisien' }, { word: 'effectively', translation: 'secara efektif' }, { word: 'thoroughly', translation: 'secara menyeluruh' }, { word: 'comfortably', translation: 'dengan nyaman' }, { word: 'safely', translation: 'dengan aman' }, { word: 'securely', translation: 'dengan aman' }],
            "L5": [{ word: 'aesthetically', translation: 'secara estetis' }, { word: 'ergonomically', translation: 'secara ergonomis' }, { word: 'systematically', translation: 'secara sistematis' }, { word: 'strategically', translation: 'secara strategis' }, { word: 'intentionally', translation: 'dengan sengaja' }, { word: 'deliberately', translation: 'dengan sengaja' }],
        },
        "pasar": {
            "L1": [{ word: 'quickly', translation: 'dengan cepat' }, { word: 'slowly', translation: 'dengan lambat' }, { word: 'carefully', translation: 'dengan hati-hati' }, { word: 'politely', translation: 'dengan sopan' }, { word: 'badly', translation: 'dengan buruk' }, { word: 'well', translation: 'dengan baik' }],
            "L2": [{ word: 'daily', translation: 'setiap hari' }, { word: 'weekly', translation: 'mingguan' }, { word: 'monthly', translation: 'bulanan' }, { word: 'often', translation: 'sering' }, { word: 'rarely', translation: 'jarang' }, { word: 'sometimes', translation: 'kadang-kadang' }],
            "L3": [{ word: 'fairly', translation: 'secara adil' }, { word: 'equally', translation: 'secara setara' }, { word: 'cheaply', translation: 'dengan murah' }, { word: 'expensively', translation: 'dengan mahal' }, { word: 'closely', translation: 'dengan cermat' }, { word: 'widely', translation: 'secara luas' }],
            "L4": [{ word: 'efficiently', translation: 'secara efisien' }, { word: 'effectively', translation: 'secara efektif' }, { word: 'strategically', translation: 'secara strategis' }, { word: 'temporarily', translation: 'sementara' }, { word: 'permanently', translation: 'secara permanen' }, { word: 'regularly', translation: 'secara teratur' }],
            "L5": [{ word: 'aggressively', translation: 'secara agresif' }, { word: 'competitively', translation: 'secara kompetitif' }, { word: 'deliberately', translation: 'dengan sengaja' }, { word: 'internationally', translation: 'secara internasional' }, { word: 'locally', translation: 'secara lokal' }, { word: 'globally', translation: 'secara global' }],
        },
        "liburan": {
            "L1": [{ word: 'happily', translation: 'dengan gembira' }, { word: 'quickly', translation: 'dengan cepat' }, { word: 'slowly', translation: 'dengan lambat' }, { word: 'early', translation: 'awal' }, { word: 'late', translation: 'terlambat' }, { word: 'well', translation: 'dengan baik' }],
            "L2": [{ word: 'safely', translation: 'dengan aman' }, { word: 'carefully', translation: 'dengan hati-hati' }, { word: 'politely', translation: 'dengan sopan' }, { word: 'loudly', translation: 'dengan keras' }, { word: 'silently', translation: 'dengan diam-diam' }, { word: 'often', translation: 'sering' }],
            "L3": [{ word: 'rarely', translation: 'jarang' }, { word: 'daily', translation: 'setiap hari' }, { word: 'weekly', translation: 'mingguan' }, { word: 'monthly', translation: 'bulanan' }, { word: 'annually', translation: 'tahunan' }, { word: 'regularly', translation: 'secara teratur' }],
            "L4": [{ word: 'comfortably', translation: 'dengan nyaman' }, { word: 'peacefully', translation: 'dengan damai' }, { word: 'pleasantly', translation: 'dengan menyenangkan' }, { word: 'temporarily', translation: 'sementara' }, { word: 'permanently', translation: 'secara permanen' }, { word: 'efficiently', translation: 'secara efisien' }],
            "L5": [{ word: 'adventurously', translation: 'secara petualang' }, { word: 'memorably', translation: 'secara berkesan' }, { word: 'historically', translation: 'secara historis' }, { word: 'culturally', translation: 'secara budaya' }, { word: 'scenically', translation: 'secara indah' }, { word: 'exotically', translation: 'secara eksotis' }],
        },
        "rumahsakit": {
            "L1": [{ word: 'quickly', translation: 'dengan cepat' }, { word: 'slowly', translation: 'dengan lambat' }, { word: 'gently', translation: 'dengan lembut' }, { word: 'carefully', translation: 'dengan hati-hati' }, { word: 'badly', translation: 'dengan buruk' }, { word: 'well', translation: 'dengan baik' }],
            "L2": [{ word: 'safely', translation: 'dengan aman' }, { word: 'calmly', translation: 'dengan tenang' }, { word: 'loudly', translation: 'dengan keras' }, { word: 'silently', translation: 'dengan diam-diam' }, { word: 'fairly', translation: 'secara adil' }, { word: 'equally', translation: 'secara setara' }],
            "L3": [{ word: 'regularly', translation: 'secara teratur' }, { word: 'rarely', translation: 'jarang' }, { word: 'always', translation: 'selalu' }, { word: 'often', translation: 'sering' }, { word: 'never', translation: 'tidak pernah' }, { word: 'sometimes', translation: 'kadang-kadang' }],
            "L4": [{ word: 'medically', translation: 'secara medis' }, { word: 'clinically', translation: 'secara klinis' }, { word: 'surgically', translation: 'secara bedah' }, { word: 'therapeutically', translation: 'secara terapeutik' }, { word: 'efficiently', translation: 'secara efisien' }, { word: 'effectively', translation: 'secara efektif' }],
            "L5": [{ word: 'urgently', translation: 'secara mendesak' }, { word: 'critically', translation: 'secara kritis' }, { word: 'severely', translation: 'secara parah' }, { word: 'progressively', translation: 'secara progresif' }, { word: 'terminally', translation: 'secara terminal' }, { word: 'chronically', translation: 'secara kronis' }],
        },
        "bepergian": {
            "L1": [{ word: 'quickly', translation: 'dengan cepat' }, { word: 'slowly', translation: 'dengan lambat' }, { word: 'early', translation: 'awal' }, { word: 'late', translation: 'terlambat' }, { word: 'near', translation: 'dekat' }, { word: 'far', translation: 'jauh' }],
            "L2": [{ word: 'safely', translation: 'dengan aman' }, { word: 'carefully', translation: 'dengan hati-hati' }, { word: 'politely', translation: 'dengan sopan' }, { word: 'loudly', translation: 'dengan keras' }, { word: 'quietly', translation: 'dengan tenang' }, { word: 'often', translation: 'sering' }],
            "L3": [{ word: 'rarely', translation: 'jarang' }, { word: 'daily', translation: 'setiap hari' }, { word: 'weekly', translation: 'mingguan' }, { word: 'monthly', translation: 'bulanan' }, { word: 'annually', translation: 'tahunan' }, { word: 'regularly', translation: 'secara teratur' }],
            "L4": [{ word: 'efficiently', translation: 'secara efisien' }, { word: 'effectively', translation: 'secara efektif' }, { word: 'temporarily', translation: 'sementara' }, { word: 'permanently', translation: 'secara permanen' }, { word: 'comfortably', translation: 'dengan nyaman' }, { word: 'smoothly', translation: 'dengan lancar' }],
            "L5": [{ word: 'internationally', translation: 'secara internasional' }, { word: 'domestically', translation: 'secara domestik' }, { word: 'strategically', translation: 'secara strategis' }, { word: 'logistically', translation: 'secara logistik' }, { word: 'consistently', translation: 'secara konsisten' }, { word: 'constantly', translation: 'secara konstan' }],
        },
        "restoran": {
            "L1": [{ word: 'quickly', translation: 'dengan cepat' }, { word: 'slowly', translation: 'dengan lambat' }, { word: 'politely', translation: 'dengan sopan' }, { word: 'loudly', translation: 'dengan keras' }, { word: 'quietly', translation: 'dengan tenang' }, { word: 'happily', translation: 'dengan gembira' }],
            "L2": [{ word: 'carefully', translation: 'dengan hati-hati' }, { word: 'neatly', translation: 'dengan rapi' }, { word: 'badly', translation: 'dengan buruk' }, { word: 'well', translation: 'dengan baik' }, { word: 'nicely', translation: 'dengan baik' }, { word: 'gently', translation: 'dengan lembut' }],
            "L3": [{ word: 'regularly', translation: 'secara teratur' }, { word: 'rarely', translation: 'jarang' }, { word: 'often', translation: 'sering' }, { word: 'always', translation: 'selalu' }, { word: 'sometimes', translation: 'kadang-kadang' }, { word: 'never', translation: 'tidak pernah' }],
            "L4": [{ word: 'efficiently', translation: 'secara efisien' }, { word: 'effectively', translation: 'secara efektif' }, { word: 'tastefully', translation: 'secara berkelas' }, { word: 'beautifully', translation: 'dengan indah' }, { word: 'pleasantly', translation: 'dengan menyenangkan' }, { word: 'skillfully', translation: 'dengan terampil' }],
            "L5": [{ word: 'expertly', translation: 'secara ahli' }, { word: 'professionally', translation: 'secara profesional' }, { word: 'creatively', translation: 'secara kreatif' }, { word: 'flawlessly', translation: 'tanpa cacat' }, { word: 'consistently', translation: 'secara konsisten' }, { word: 'elegantly', translation: 'secara elegan' }],
        },
    },
    "preposition": {
        "sekolah": {
            "L1": [{ word: 'in', translation: 'di dalam' }, { word: 'on', translation: 'di atas' }, { word: 'at', translation: 'di' }, { word: 'under', translation: 'di bawah' }, { word: 'behind', translation: 'di belakang' }, { word: 'near', translation: 'dekat' }],
            "L2": [{ word: 'above', translation: 'di atas' }, { word: 'below', translation: 'di bawah' }, { word: 'beside', translation: 'di samping' }, { word: 'between', translation: 'di antara' }, { word: 'around', translation: 'di sekitar' }, { word: 'across', translation: 'di seberang' }],
            "L3": [{ word: 'beyond', translation: 'di luar' }, { word: 'within', translation: 'di dalam' }, { word: 'without', translation: 'tanpa' }, { word: 'into', translation: 'ke dalam' }, { word: 'onto', translation: 'ke atas' }, { word: 'upon', translation: 'di atas' }],
            "L4": [{ word: 'throughout', translation: 'sepanjang' }, { word: 'against', translation: 'melawan' }, { word: 'among', translation: 'di antara' }, { word: 'along', translation: 'sepanjang' }, { word: 'inside', translation: 'di dalam' }, { word: 'outside', translation: 'di luar' }],
            "L5": [{ word: 'despite', translation: 'meskipun' }, { word: 'towards', translation: 'menuju' }, { word: 'underneath', translation: 'di bawah' }, { word: 'alongside', translation: 'di samping' }, { word: 'concerning', translation: 'mengenai' }, { word: 'regarding', translation: 'mengenai' }],
        },
        "rumah": {
            "L1": [{ word: 'inside', translation: 'di dalam' }, { word: 'outside', translation: 'di luar' }, { word: 'near', translation: 'dekat' }, { word: 'far', translation: 'jauh' }, { word: 'above', translation: 'di atas' }, { word: 'below', translation: 'di bawah' }],
            "L2": [{ word: 'behind', translation: 'di belakang' }, { word: 'in front of', translation: 'di depan' }, { word: 'between', translation: 'di antara' }, { word: 'on top of', translation: 'di atas' }, { word: 'under', translation: 'di bawah' }, { word: 'over', translation: 'di atas' }],
            "L3": [{ word: 'across from', translation: 'di seberang' }, { word: 'along', translation: 'sepanjang' }, { word: 'through', translation: 'melalui' }, { word: 'past', translation: 'melewati' }, { word: 'next to', translation: 'di samping' }, { word: 'opposite', translation: 'berlawanan' }],
            "L4": [{ word: 'throughout', translation: 'sepanjang' }, { word: 'within', translation: 'di dalam' }, { word: 'beyond', translation: 'di luar' }, { word: 'around', translation: 'di sekitar' }, { word: 'toward', translation: 'menuju' }, { word: 'against', translation: 'melawan' }],
            "L5": [{ word: 'concerning', translation: 'mengenai' }, { word: 'regarding', translation: 'mengenai' }, { word: 'alongside', translation: 'di samping' }, { word: 'underneath', translation: 'di bawah' }, { word: 'despite', translation: 'meskipun' }, { word: 'via', translation: 'melalui' }],
        },
        "pasar": {
            "L1": [{ word: 'in', translation: 'di dalam' }, { word: 'at', translation: 'di' }, { word: 'on', translation: 'di atas' }, { word: 'for', translation: 'untuk' }, { word: 'with', translation: 'dengan' }, { word: 'from', translation: 'dari' }],
            "L2": [{ word: 'near', translation: 'dekat' }, { word: 'next to', translation: 'di samping' }, { word: 'opposite', translation: 'berlawanan' }, { word: 'behind', translation: 'di belakang' }, { word: 'in front of', translation: 'di depan' }, { word: 'across', translation: 'di seberang' }],
            "L3": [{ word: 'between', translation: 'di antara' }, { word: 'among', translation: 'di antara' }, { word: 'along', translation: 'sepanjang' }, { word: 'through', translation: 'melalui' }, { word: 'past', translation: 'melewati' }, { word: 'toward', translation: 'menuju' }],
            "L4": [{ word: 'against', translation: 'melawan' }, { word: 'upon', translation: 'di atas' }, { word: 'into', translation: 'ke dalam' }, { word: 'onto', translation: 'ke atas' }, { word: 'within', translation: 'di dalam' }, { word: 'beyond', translation: 'di luar' }],
            "L5": [{ word: 'concerning', translation: 'mengenai' }, { word: 'regarding', translation: 'mengenai' }, { word: 'despite', translation: 'meskipun' }, { word: 'alongside', translation: 'di samping' }, { word: 'underneath', translation: 'di bawah' }, { word: 'via', translation: 'melalui' }],
        },
        "liburan": {
            "L1": [{ word: 'to', translation: 'ke' }, { word: 'from', translation: 'dari' }, { word: 'on', translation: 'di' }, { word: 'in', translation: 'di' }, { word: 'at', translation: 'di' }, { word: 'for', translation: 'untuk' }],
            "L2": [{ word: 'near', translation: 'dekat' }, { word: 'beside', translation: 'di samping' }, { word: 'behind', translation: 'di belakang' }, { word: 'in front of', translation: 'di depan' }, { word: 'opposite', translation: 'berlawanan' }, { word: 'across', translation: 'di seberang' }],
            "L3": [{ word: 'over', translation: 'di atas' }, { word: 'under', translation: 'di bawah' }, { word: 'around', translation: 'di sekitar' }, { word: 'through', translation: 'melalui' }, { word: 'past', translation: 'melewati' }, { word: 'toward', translation: 'menuju' }],
            "L4": [{ word: 'beyond', translation: 'di luar' }, { word: 'within', translation: 'di dalam' }, { word: 'along', translation: 'sepanjang' }, { word: 'among', translation: 'di antara' }, { word: 'against', translation: 'melawan' }, { word: 'upon', translation: 'di atas' }],
            "L5": [{ word: 'concerning', translation: 'mengenai' }, { word: 'regarding', translation: 'mengenai' }, { word: 'alongside', translation: 'di samping' }, { word: 'underneath', translation: 'di bawah' }, { word: 'despite', translation: 'meskipun' }, { word: 'via', translation: 'melalui' }],
        },
        "rumahsakit": {
            "L1": [{ word: 'in', translation: 'di dalam' }, { word: 'at', translation: 'di' }, { word: 'on', translation: 'di atas' }, { word: 'for', translation: 'untuk' }, { word: 'with', translation: 'dengan' }, { word: 'by', translation: 'oleh' }],
            "L2": [{ word: 'inside', translation: 'di dalam' }, { word: 'outside', translation: 'di luar' }, { word: 'near', translation: 'dekat' }, { word: 'far', translation: 'jauh' }, { word: 'above', translation: 'di atas' }, { word: 'below', translation: 'di bawah' }],
            "L3": [{ word: 'between', translation: 'di antara' }, { word: 'among', translation: 'di antara' }, { word: 'along', translation: 'sepanjang' }, { word: 'through', translation: 'melalui' }, { word: 'past', translation: 'melewati' }, { word: 'toward', translation: 'menuju' }],
            "L4": [{ word: 'beyond', translation: 'di luar' }, { word: 'within', translation: 'di dalam' }, { word: 'against', translation: 'melawan' }, { word: 'upon', translation: 'di atas' }, { word: 'across', translation: 'di seberang' }, { word: 'around', translation: 'di sekitar' }],
            "L5": [{ word: 'despite', translation: 'meskipun' }, { word: 'concerning', translation: 'mengenai' }, { word: 'regarding', translation: 'mengenai' }, { word: 'alongside', translation: 'di samping' }, { word: 'underneath', translation: 'di bawah' }, { word: 'via', translation: 'melalui' }],
        },
        "bepergian": {
            "L1": [{ word: 'to', translation: 'ke' }, { word: 'from', translation: 'dari' }, { word: 'at', translation: 'di' }, { word: 'on', translation: 'di atas' }, { word: 'in', translation: 'di dalam' }, { word: 'for', translation: 'untuk' }],
            "L2": [{ word: 'near', translation: 'dekat' }, { word: 'beside', translation: 'di samping' }, { word: 'behind', translation: 'di belakang' }, { word: 'in front of', translation: 'di depan' }, { word: 'opposite', translation: 'berlawanan' }, { word: 'across', translation: 'di seberang' }],
            "L3": [{ word: 'over', translation: 'di atas' }, { word: 'under', translation: 'di bawah' }, { word: 'around', translation: 'di sekitar' }, { word: 'through', translation: 'melalui' }, { word: 'past', translation: 'melewati' }, { word: 'toward', translation: 'menuju' }],
            "L4": [{ word: 'beyond', translation: 'di luar' }, { word: 'within', translation: 'di dalam' }, { word: 'along', translation: 'sepanjang' }, { word: 'among', translation: 'di antara' }, { word: 'against', translation: 'melawan' }, { word: 'upon', translation: 'di atas' }],
            "L5": [{ word: 'concerning', translation: 'mengenai' }, { word: 'regarding', translation: 'mengenai' }, { word: 'alongside', translation: 'di samping' }, { word: 'underneath', translation: 'di bawah' }, { word: 'despite', translation: 'meskipun' }, { word: 'via', translation: 'melalui' }],
        },
        "restoran": {
            "L1": [{ word: 'on', translation: 'di atas' }, { word: 'at', translation: 'di' }, { word: 'in', translation: 'di dalam' }, { word: 'with', translation: 'dengan' }, { word: 'for', translation: 'untuk' }, { word: 'from', translation: 'dari' }],
            "L2": [{ word: 'near', translation: 'dekat' }, { word: 'beside', translation: 'di samping' }, { word: 'behind', translation: 'di belakang' }, { word: 'in front of', translation: 'di depan' }, { word: 'opposite', translation: 'berlawanan' }, { word: 'across', translation: 'di seberang' }],
            "L3": [{ word: 'over', translation: 'di atas' }, { word: 'under', translation: 'di bawah' }, { word: 'around', translation: 'di sekitar' }, { word: 'through', translation: 'melalui' }, { word: 'past', translation: 'melewati' }, { word: 'toward', translation: 'menuju' }],
            "L4": [{ word: 'beyond', translation: 'di luar' }, { word: 'within', translation: 'di dalam' }, { word: 'along', translation: 'sepanjang' }, { word: 'among', translation: 'di antara' }, { word: 'against', translation: 'melawan' }, { word: 'upon', translation: 'di atas' }],
            "L5": [{ word: 'concerning', translation: 'mengenai' }, { word: 'regarding', translation: 'mengenai' }, { word: 'alongside', translation: 'di samping' }, { word: 'underneath', translation: 'di bawah' }, { word: 'despite', translation: 'meskipun' }, { word: 'via', translation: 'melalui' }],
        },
    },
};

// Mengambil data awal
let currentCategoryKey = 'noun';
let currentSituationKey = 'sekolah';
let currentLevelKey = 'L1';
let originalFlashcards = [];
let currentFlashcards = [];
let currentIndex = 0;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function updateProgress() {
    const totalWords = originalFlashcards.length;
    const learnedWords = totalWords - currentFlashcards.length;
    const progressPercentage = totalWords > 0 ? (learnedWords / totalWords) * 100 : 0;
    
    progressBar.style.width = `${progressPercentage}%`;
    progressText.textContent = `${learnedWords} / ${totalWords} selesai`;
}

function updateCategoryHeader(categoryKey, situationKey, levelKey) {
    document.querySelectorAll('.level-btn').forEach(btn => btn.classList.remove('active'));

    const activeBtn = document.querySelector(`.category-item[data-category="${categoryKey}"] .level-btn[data-situation="${situationKey}"][data-level="${levelKey}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }

    const categoryTitle = categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1);
    const situationLabel = activeBtn.closest('.level-item-container').querySelector('.situation-label').textContent;

    totalWordsSpan.textContent = ``;

    slidebarTriggerBtn.textContent = `${categoryTitle} (${situationLabel} - ${levelKey})`;
}

function updateCard() {
    if (currentFlashcards.length === 0) {
        flashcard.style.display = 'none';
        controlsDiv.style.display = 'none';
        congratulationsModal.classList.add('show');
    } else {
        const card = currentFlashcards[currentIndex];
        wordElement.textContent = card.word;
        translationElement.textContent = card.translation;
        flashcard.classList.remove('is-flipped');
        flashcard.style.display = 'block';
        controlsDiv.style.display = 'flex';
        congratulationsModal.classList.remove('show');
    }
    updateProgress();
}

function loadCategory(categoryKey, situationKey, levelKey) {
    currentCategoryKey = categoryKey;
    currentSituationKey = situationKey;
    currentLevelKey = levelKey;

    if (flashcardData[categoryKey] && flashcardData[categoryKey][situationKey] && flashcardData[categoryKey][situationKey][levelKey]) {
        originalFlashcards = [...flashcardData[categoryKey][situationKey][levelKey]];
        currentFlashcards = [...originalFlashcards];
        currentIndex = 0;
    } else {
        originalFlashcards = [];
        currentFlashcards = [];
        currentIndex = 0;
    }

    updateCategoryHeader(categoryKey, situationKey, levelKey);
    updateCard();
    closeSlidebar();
}

function openSlidebar() {
    slidebarMenu.classList.add('show');
    blurOverlay.classList.add('show');
}

function closeSlidebar() {
    slidebarMenu.classList.remove('show');
    blurOverlay.classList.remove('show');
}

flashcard.addEventListener('click', () => {
    if (currentFlashcards.length > 0) {
        flashcard.classList.toggle('is-flipped');
    }
});

hafalBtn.addEventListener('click', () => {
    if (currentFlashcards.length > 0) {
        currentFlashcards.splice(currentIndex, 1);
        if (currentIndex >= currentFlashcards.length) {
            currentIndex = 0;
        }
        updateCard();
    }
});

unhafalBtn.addEventListener('click', () => {
    if (currentFlashcards.length > 0) {
        currentIndex = (currentIndex + 1) % currentFlashcards.length;
        updateCard();
    }
});

shuffleBtn.addEventListener('click', () => {
    if (currentFlashcards.length > 1) {
        currentFlashcards = shuffleArray(currentFlashcards);
        currentIndex = 0;
        updateCard();
    }
});

restartFromModalBtn.addEventListener('click', () => {
    congratulationsModal.classList.remove('show');
    loadCategory(currentCategoryKey, currentSituationKey, currentLevelKey);
});

// Event listener untuk tombol trigger slidebar
slidebarTriggerBtn.addEventListener('click', () => {
    openSlidebar();
});

// Event listener untuk tombol "Selesai" di dalam slidebar
doneBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closeSlidebar();
});

// Event listener untuk tombol level di dalam slidebar
document.querySelectorAll('.level-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const levelKey = btn.dataset.level;
        const situationKey = btn.dataset.situation;
        const categoryItem = btn.closest('.category-item');
        const categoryKey = categoryItem ? categoryItem.dataset.category : null;

        if (categoryKey && situationKey && levelKey) {
            loadCategory(categoryKey, situationKey, levelKey);
        }
    });
});

// === PERBAIKAN DI SINI ===
document.addEventListener('DOMContentLoaded', () => {
    initialModal.classList.add('show');
});

startFromModalBtn.addEventListener('click', () => {
    initialModal.classList.remove('show');
    loadCategory('noun', 'sekolah', 'L1');
});
