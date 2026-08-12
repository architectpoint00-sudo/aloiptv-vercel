/* ──────────────────────────────────────────────
   AloIPTV — Tüm Site İçeriği
   ────────────────────────────────────────────── */

// ─── Tip Tanımları ───────────────────────────

export interface TrustBadge {
  icon: string
  title: string
  description: string
}

export interface Stat {
  value: string
  label: string
}

export interface Device {
  icon: string
  name: string
  description: string
}

export interface SetupStep {
  step: number
  title: string
  description: string
}

export interface Feature {
  icon: string
  title: string
  description: string
}

export interface ComparisonRow {
  feature: string
  aloiptv: string
  others: string
}

export interface Testimonial {
  name: string
  location: string
  membership: string
  rating: number
  text: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface PricingPackage {
  name: string
  price: number
  originalPrice?: number
  period: string
  discount?: string
  badge?: string
  features: string[]
  devices: string
  isFree?: boolean
}

export interface ChannelCategory {
  name: string
  description: string
  icon: string
}

export interface ChannelGroup {
  title: string
  channels: string[]
}

export interface TeamMember {
  name: string
  role: string
  description: string
}

export interface AboutPageData {
  hikayemiz: string[]
  stats: Stat[]
  values: { title: string; description: string }[]
  team: TeamMember[]
}

export interface BlogPost {
  slug: string
  title: string
  date: string
  readTime: string
  excerpt: string
  content: string[]
}

// ─── Duyuru Mesajları ────────────────────────

export const ANNOUNCEMENT_MESSAGES = [
  '🔥 12 Aylık Pakette %40 İndirim — Sınırlı Süre',
  '⚡ 24 Aylık Pakette %53 İndirim — En İyi Fiyat',
  '🎯 Ücretsiz 24 Saat Test Sunucusu',
]

// ─── Güven Rozetleri ─────────────────────────

export const TRUST_BADGES: TrustBadge[] = [
  {
    icon: '🔒',
    title: 'SSL Güvenli Ödeme',
    description: '256-bit şifreleme ile korunan güvenli ödeme altyapısı',
  },
  {
    icon: '⚡',
    title: 'Anında Aktivasyon',
    description: 'Ödeme sonrası dakikalar içinde hesabınız aktif edilir',
  },
  {
    icon: '🔄',
    title: '7 Gün Para İadesi',
    description: 'Koşulsuz garanti — memnun kalmazsanız paranız iade edilir',
  },
  {
    icon: '🎧',
    title: '7/24 VIP Destek',
    description: 'WhatsApp + Telegram üzerinden kesintisiz teknik destek',
  },
]

// ─── Ana Sayfa İstatistikleri ────────────────

export const STATS: Stat[] = [
  { value: '150K+', label: 'Canlı Kanal' },
  { value: '%99.9', label: 'Uptime Garantisi' },
  { value: '4K HDR', label: 'Ultra Kalite' },
  { value: '⚡', label: 'Anında Aktivasyon' },
]

// ─── Platform Logoları ───────────────────────

export const PLATFORM_LOGOS: string[] = [
  'Netflix',
  'Disney+',
  'Amazon Prime',
  'beIN Sports',
  'Hulu',
  'Apple TV+',
  'HBO Max',
  'Paramount+',
  'beIN Connect',
  'BluTV',
  'Exxen',
  'GAIN',
  'TOD',
  'DAZN',
  'ESPN',
  'Eurosport',
  'Sky Sports',
  'Spotify',
  'YouTube',
  'Crunchyroll',
  'Peacock',
  'Starz',
  'Tabii',
]

// ─── Türk Kanalları ──────────────────────────

export const TURKISH_CHANNELS: string[] = [
  'TRT 1',
  'TRT 2',
  'TRT Haber',
  'TRT Spor',
  'TRT Çocuk',
  'TRT Belgesel',
  'TRT Müzik',
  'Show TV',
  'Star TV',
  'ATV',
  'Kanal D',
  'Fox TV',
  'TV8',
  'TV8,5',
  'Kanal 7',
  'Teve2',
  'Beyaz TV',
  '360',
  'A Haber',
  'A Spor',
  'CNN Türk',
  'Habertürk',
  'Haber Global',
  'NTV',
  'NTV Spor',
  'S Sport',
  'Spor Smart',
  'Nat Geo',
  'Discovery',
  'TLC',
  'Kral TV',
  'Power Türk',
]

// ─── Cihazlar ────────────────────────────────

export const DEVICES: Device[] = [
  {
    icon: '📱',
    name: 'Android',
    description: 'Telefon & Tablet',
  },
  {
    icon: '🍎',
    name: 'iOS',
    description: 'iPhone & iPad',
  },
  {
    icon: '📺',
    name: 'Smart TV',
    description: 'Samsung, LG, Sony',
  },
  {
    icon: '🔥',
    name: 'Fire Stick',
    description: 'Amazon Fire TV',
  },
  {
    icon: '💻',
    name: 'Windows',
    description: 'PC & Laptop',
  },
  {
    icon: '🖥️',
    name: 'Mac',
    description: 'MacBook & iMac',
  },
  {
    icon: '📡',
    name: 'MAG Box',
    description: 'MAG 250/254/322',
  },
  {
    icon: '🎮',
    name: 'Enigma2',
    description: 'Dreambox & VU+',
  },
]

// ─── Kurulum Adımları ────────────────────────

export const SETUP_STEPS: SetupStep[] = [
  {
    step: 1,
    title: 'Paket Seçin',
    description: 'Size en uygun IPTV paketini seçin. Ücretsiz test ile başlayabilirsiniz.',
  },
  {
    step: 2,
    title: 'Ödeme Yapın',
    description: 'Güvenli ödeme altyapımız ile kredi kartı, havale veya kripto ile ödemenizi yapın.',
  },
  {
    step: 3,
    title: 'İzlemeye Başlayın',
    description: 'Hesap bilgileriniz anında iletilir. Kurulum desteği ile dakikalar içinde izlemeye başlayın.',
  },
]

// ─── Özellikler ──────────────────────────────

export const FEATURES: Feature[] = [
  {
    icon: '📺',
    title: '+150.000 Kanal',
    description: 'Türk kanalları dahil dünya genelinden 150.000\'den fazla canlı TV kanalı. Spor, sinema, haber, belgesel ve daha fazlası.',
  },
  {
    icon: '🎬',
    title: 'VOD + Diziler',
    description: '80.000+ film ve dizi arşivi. Netflix, Disney+, Amazon Prime içerikleri tek bir yerde. Sürekli güncellenen kütüphane.',
  },
  {
    icon: '❄️',
    title: 'Anti-Freeze',
    description: 'Gelişmiş Anti-Freeze teknolojisi ile donma ve kesinti sorunu yaşamadan akıcı izleme deneyimi. Özellikle maç günlerinde fark yaratır.',
  },
  {
    icon: '📡',
    title: '4K UHD',
    description: 'Desteklenen kanallarda 4K Ultra HD ve HDR kalitesinde yayın. Kristal netliğinde görüntü, sinema kalitesinde ses.',
  },
  {
    icon: '📋',
    title: 'EPG Rehberi',
    description: 'Elektronik Program Rehberi ile tüm kanalların yayın akışını görüntüleyin. Hangi programın ne zaman başladığını anında öğrenin.',
  },
  {
    icon: '🎧',
    title: '7/24 Destek',
    description: 'WhatsApp ve Telegram üzerinden 7/24 Türkçe teknik destek. Kurulum yardımı, sorun giderme ve hesap yönetimi desteği.',
  },
]

// ─── Hakkımızda Bölümü (Ana Sayfa) ──────────

export const ABOUT_SECTION: string[] = [
  'AloIPTV olarak 2019 yılından bu yana Türkiye\'nin en güvenilir IPTV hizmetini sunmaktayız. Müşteri memnuniyetini ön planda tutarak, en son teknolojiyi kullanarak ve sürekli kendimizi geliştirerek sektörün lider markası olmayı başardık.',
  'Anti-Freeze teknolojimiz sayesinde maç günlerinde bile kesintisiz izleme deneyimi sunuyoruz. Yerel sunucu önbellekleme sistemi ile yüksek talep anlarında dahi stabil yayın kalitesi garanti ediyoruz. 150.000\'den fazla kanalımız ve 80.000\'i aşan film-dizi arşivimiz ile kullanıcılarımıza sınırsız eğlence sunuyoruz.',
  '7/24 WhatsApp ve Telegram üzerinden Türkçe destek ekibimiz her an yanınızda. Kurulum, sorun giderme veya hesap yönetimi — ne ihtiyacınız olursa olsun, dakikalar içinde size yardımcı oluyoruz.',
  'Güvenli ödeme altyapımız, 7 gün koşulsuz iade garantimiz ve şeffaf fiyat politikamız ile sektörde güvenin adresi olmaya devam ediyoruz. AloIPTV — kaliteli IPTV hizmetinin Türkiye\'deki adı.',
]

// ─── Hakkımızda İstatistikleri (Ana Sayfa) ──

export const ABOUT_STATS: Stat[] = [
  { value: '150K+', label: 'CANLI KANAL' },
  { value: '80K+', label: 'FILM & DIZI' },
  { value: '%99.9', label: 'UPTIME' },
  { value: '2019', label: 'YILINDAN BERİ' },
]

// ─── Karşılaştırma Tablosu ──────────────────

export const COMPARISON_TABLE: ComparisonRow[] = [
  {
    feature: 'Kanal Sayısı',
    aloiptv: '150.000+ Kanal',
    others: '5.000 — 20.000 Kanal',
  },
  {
    feature: '4K Ultra HD Stabilite',
    aloiptv: '4K HDR — Tüm kanallarda stabil',
    others: 'Sınırlı 4K — Sık donma',
  },
  {
    feature: 'Anti-Freeze Teknolojisi',
    aloiptv: 'Gelişmiş Anti-Freeze aktif',
    others: 'Anti-Freeze yok',
  },
  {
    feature: 'Sunucu Uptime',
    aloiptv: '%99.9 uptime garantisi',
    others: '%90 — %95 uptime',
  },
  {
    feature: '7/24 VIP Destek',
    aloiptv: 'WhatsApp + Telegram — anında yanıt',
    others: 'E-posta — 24-48 saat bekleme',
  },
  {
    feature: 'EPG Yayın Rehberi',
    aloiptv: 'Tüm kanallarda EPG aktif',
    others: 'Sınırlı veya EPG yok',
  },
]

// ─── Müşteri Yorumları ───────────────────────

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Ahmet Y.',
    location: 'İstanbul',
    membership: '24 Aylık Üye',
    rating: 5,
    text: '2 yıldır kullanıyorum, maç günlerinde bile tek bir donma yaşamadım. Anti-Freeze teknolojisi gerçekten işe yarıyor. Daha önce 3 farklı IPTV servisi denedim, hiçbiri AloIPTV kadar stabil değildi. Özellikle Şampiyonlar Ligi gecelerinde fark çok belirgin. Kesinlikle tavsiye ederim!',
  },
  {
    name: 'Mehmet K.',
    location: 'Ankara',
    membership: '12 Aylık Üye',
    rating: 5,
    text: 'Kurulumu bile uzaktan yaptılar, 5 dakikada her şey hazırdı. WhatsApp\'tan yazdım, anında döndüler. Smart TV\'ye kurulum için TeamViewer ile bağlandılar ve her şeyi ayarladılar. Kanal kalitesi mükemmel, EPG rehberi çok kullanışlı. Fiyat/performans olarak piyasadaki en iyi seçenek.',
  },
  {
    name: 'Selin E.',
    location: 'İzmir',
    membership: '6 Aylık Üye',
    rating: 5,
    text: 'Fiyat/performans açısından en iyisi. 4K kalite gerçekten göz alıcı. Film ve dizi arşivi çok geniş — Netflix, Disney+ ve daha fazlasına ayrı ayrı para vermek yerine hepsini tek yerde buluyorum. Çocuklar için de güvenli kanal seçenekleri var. Aile olarak çok memnunuz.',
  },
]

// ─── Ana Sayfa SSS ───────────────────────────

export const HOMEPAGE_FAQ: FaqItem[] = [
  {
    question: 'IPTV nedir?',
    answer: 'IPTV (Internet Protocol Television), internet üzerinden televizyon yayını izlemenizi sağlayan bir teknolojidir. Geleneksel uydu veya kablo TV\'ye ihtiyaç duymadan, internet bağlantınız üzerinden binlerce canlı TV kanalı, film ve dizi izleyebilirsiniz. AloIPTV ile 150.000\'den fazla kanalı 4K kalitede izleyebilirsiniz.',
  },
  {
    question: 'Hangi cihazlarda kullanabilirim?',
    answer: 'AloIPTV; Android telefon ve tablet, iPhone ve iPad, Samsung/LG/Sony Smart TV, Amazon Fire TV Stick, Windows ve Mac bilgisayar, MAG Box ve Enigma2 cihazlarında kullanılabilir. Her cihaz için detaylı kurulum rehberimiz ve uzaktan kurulum desteğimiz mevcuttur.',
  },
  {
    question: 'Ücretsiz test alabilir miyim?',
    answer: 'Evet! 24 saatlik ücretsiz test hesabı sunuyoruz. WhatsApp üzerinden bize yazarak hemen test hesabınızı alabilirsiniz. Test süresince tüm kanalları HD kalitede izleyebilir, hizmetimizi deneyimleyebilirsiniz.',
  },
  {
    question: 'Kurulum zor mu?',
    answer: 'Hayır, kurulum oldukça kolaydır. Ödeme sonrası size gönderilen bilgilerle dakikalar içinde kurulum yapabilirsiniz. Ayrıca WhatsApp üzerinden 7/24 uzaktan kurulum desteği de sunuyoruz — TeamViewer veya AnyDesk ile cihazınıza bağlanıp kurulumu sizin için yapabiliriz.',
  },
  {
    question: 'İade politikanız nedir?',
    answer: '7 gün koşulsuz para iade garantisi sunuyoruz. Satın aldıktan sonra 7 gün içinde herhangi bir sebepten memnun kalmazsanız, WhatsApp üzerinden bize yazmanız yeterli. Hiçbir soru sorulmadan ödemeniz tam olarak iade edilir.',
  },
]

// ─── Fiyatlandırma Paketleri ─────────────────

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    name: 'Ücretsiz Test',
    price: 0,
    period: '24 Saat',
    features: [
      'Tüm kanallar (HD kalite)',
      'Film ve dizi arşivi',
      'Teknik destek',
    ],
    devices: '1 Cihaz',
    isFree: true,
  },
  {
    name: '1 Aylık Paket',
    price: 249,
    period: '1 Ay',
    features: [
      '+150.000 canlı kanal',
      '80.000+ film ve dizi',
      '4K Ultra HD kalite',
      'Anti-Freeze teknolojisi',
      '7/24 teknik destek',
    ],
    devices: '1 Cihaz',
  },
  {
    name: '3 Aylık Paket',
    price: 649,
    originalPrice: 747,
    period: '3 Ay',
    discount: '%13 İndirim',
    features: [
      '+150.000 canlı kanal',
      '80.000+ film ve dizi',
      '4K Ultra HD kalite',
      'Anti-Freeze teknolojisi',
      '7/24 teknik destek',
      'EPG yayın rehberi',
    ],
    devices: '1 Cihaz',
  },
  {
    name: '6 Aylık Paket',
    price: 1099,
    originalPrice: 1494,
    period: '6 Ay',
    discount: '%26 İndirim',
    features: [
      '+150.000 canlı kanal',
      '80.000+ film ve dizi',
      '4K Ultra HD kalite',
      'Anti-Freeze teknolojisi',
      '7/24 teknik destek',
      'EPG yayın rehberi',
    ],
    devices: '2 Cihaz',
  },
  {
    name: '12 Aylık Paket',
    price: 1799,
    originalPrice: 2988,
    period: '12 Ay',
    discount: '%40 İndirim',
    badge: 'En Popüler',
    features: [
      '+150.000 canlı kanal',
      '80.000+ film ve dizi',
      '4K Ultra HD kalite',
      'Anti-Freeze teknolojisi',
      '7/24 VIP teknik destek',
      'EPG yayın rehberi',
      '1 ay hediye',
    ],
    devices: '2 Cihaz',
  },
  {
    name: '24 Aylık Paket',
    price: 2799,
    originalPrice: 5976,
    period: '24 Ay',
    discount: '%53 İndirim',
    badge: 'Maksimum Tasarruf',
    features: [
      '+150.000 canlı kanal',
      '80.000+ film ve dizi',
      '4K Ultra HD kalite',
      'Anti-Freeze teknolojisi',
      '7/24 VIP teknik destek',
      'EPG yayın rehberi',
      '3 ay hediye',
    ],
    devices: '3 Cihaz',
  },
]

// ─── Kanal Kategorileri (/kanallar/) ─────────

export const CHANNEL_CATEGORIES: ChannelCategory[] = [
  {
    name: 'Spor',
    description: 'Futbol, basketbol, tenis, F1 ve tüm spor dallarından canlı maçlar ve spor kanalları.',
    icon: '⚽',
  },
  {
    name: 'Sinema & Filmler',
    description: 'Hollywood, Türk sineması ve dünya sinemasından binlerce film. Vizyondaki filmler dahil.',
    icon: '🎬',
  },
  {
    name: 'Diziler',
    description: 'Netflix, Disney+, Amazon orijinal dizileri ve tüm Türk dizileri. Sürekli güncellenen arşiv.',
    icon: '📺',
  },
  {
    name: 'Boks/MMA/PPV',
    description: 'UFC, boks maçları ve tüm PPV etkinlikleri canlı olarak. Ek ücret yok.',
    icon: '🥊',
  },
  {
    name: 'NFL/MLB/NBA',
    description: 'Amerikan futbolu, beyzbol ve basketbol — tüm maçlar canlı yayında.',
    icon: '🏈',
  },
  {
    name: '7/24 Canlı TV',
    description: 'Haber, eğlence, belgesel ve yaşam kanalları — 7 gün 24 saat kesintisiz yayın.',
    icon: '📡',
  },
  {
    name: 'Uluslararası',
    description: 'İngilizce, Almanca, Fransızca, Arapça ve daha birçok dilde uluslararası kanal seçenekleri.',
    icon: '🌍',
  },
  {
    name: 'Müzik & Eğlence',
    description: 'Müzik kanalları, eğlence programları ve reality show\'lar. Türkçe ve yabancı.',
    icon: '🎵',
  },
  {
    name: 'Yetişkin İçerik',
    description: 'Yetişkinlere yönelik özel kanal paketi. Ebeveyn kilidi ile güvenli kullanım.',
    icon: '🔞',
  },
]

// ─── Kanal Listeleri (/kanallar/) ────────────

export const CHANNEL_LISTS: ChannelGroup[] = [
  {
    title: 'Türk Kanalları',
    channels: [
      'TRT 1', 'TRT 2', 'TRT Haber', 'TRT Spor', 'TRT Çocuk', 'TRT Belgesel', 'TRT Müzik',
      'Show TV', 'Star TV', 'ATV', 'Kanal D', 'Fox TV', 'TV8', 'TV8,5',
      'Kanal 7', 'Teve2', 'Beyaz TV', '360',
      'A Haber', 'A Spor', 'CNN Türk', 'Habertürk', 'Haber Global',
      'NTV', 'NTV Spor', 'S Sport', 'Spor Smart',
      'Nat Geo', 'Discovery', 'TLC', 'Kral TV', 'Power Türk',
    ],
  },
  {
    title: 'Spor Kanalları',
    channels: [
      'beIN Sports 1', 'beIN Sports 2', 'beIN Sports 3', 'beIN Sports 4',
      'S Sport', 'S Sport 2', 'Spor Smart', 'A Spor', 'TRT Spor', 'TRT Spor 2',
      'ESPN', 'ESPN 2', 'Sky Sports Main Event', 'Sky Sports Premier League',
      'Sky Sports Football', 'Sky Sports F1', 'Eurosport 1', 'Eurosport 2',
      'DAZN 1', 'DAZN 2', 'NBA TV', 'NFL Network', 'MLB Network',
      'Fox Sports 1', 'Fox Sports 2', 'BT Sport 1', 'BT Sport 2', 'BT Sport 3',
      'TNT Sports 1', 'TNT Sports 2',
    ],
  },
  {
    title: 'Sinema & Dizi',
    channels: [
      'Netflix Türkiye', 'Disney+ Türkiye', 'Amazon Prime Video',
      'HBO Max', 'Paramount+', 'Hulu', 'Apple TV+',
      'BluTV', 'Exxen', 'GAIN', 'TOD', 'Tabii',
      'Crunchyroll', 'Peacock', 'Starz',
      'FX', 'AMC', 'Showtime', 'Cinemax',
      'Movie Smart Premium', 'Movie Smart Platin', 'Movie Smart Gold',
      'Sinema TV', 'Sinema TV 1001',
    ],
  },
  {
    title: 'Çocuk Kanalları',
    channels: [
      'TRT Çocuk', 'Cartoon Network', 'Disney Channel', 'Nickelodeon',
      'Nick Jr.', 'Disney Junior', 'Baby TV', 'Minika Go', 'Minika Çocuk',
      'Boomerang', 'Cartoonito', 'PBS Kids', 'CBeebies', 'Da Vinci Kids',
    ],
  },
  {
    title: 'Uluslararası',
    channels: [
      'BBC One', 'BBC Two', 'BBC News', 'ITV', 'Channel 4', 'Sky One',
      'CNN International', 'Fox News', 'MSNBC', 'Al Jazeera English',
      'France 24', 'DW', 'Euronews', 'RT', 'CGTN',
      'ARD', 'ZDF', 'RTL', 'ProSieben', 'SAT.1',
      'TF1', 'France 2', 'France 3', 'M6', 'Canal+',
      'RAI 1', 'RAI 2', 'Mediaset', 'Antenna 3', 'TVE',
      'MBC', 'Rotana Cinema', 'OSN', 'Al Arabiya',
    ],
  },
]

// ─── Hakkımızda Sayfa Verileri (/hakkimizda/) ─

export const ABOUT_PAGE_DATA: AboutPageData = {
  hikayemiz: [
    'AloIPTV, 2019 yılında Türk izleyicilere en kaliteli ve en güvenilir IPTV hizmetini sunmak amacıyla kuruldu. Kurucularımız, yıllarca IPTV sektöründe yaşanan düşük kalite, sürekli donma sorunları ve yetersiz müşteri desteğinden bıkmış kullanıcılardı. Bu sorunlara kalıcı çözümler sunmak için yola çıktık.',
    'İlk günden itibaren teknolojiye yatırım yapmayı ve müşteri memnuniyetini her şeyin üzerinde tutmayı ilke edindik. Anti-Freeze teknolojimizi geliştirdik, güçlü sunucu altyapımızı kurduk ve 7/24 Türkçe destek ekibimizi oluşturduk. Bugün 7.500\'den fazla aktif kullanıcıya hizmet vermenin gururunu yaşıyoruz.',
    'Sunduğumuz hizmetin kalitesinden o kadar eminiz ki, tüm yeni kullanıcılarımıza 24 saatlik ücretsiz test ve 7 gün koşulsuz para iade garantisi sunuyoruz. Amacımız sadece IPTV hizmeti satmak değil, kullanıcılarımıza gerçek bir izleme deneyimi yaşatmaktır.',
    'Yıllar içinde edindiğimiz tecrübe ve kullanıcı geri bildirimleri ile hizmetimizi sürekli geliştirmeye devam ediyoruz. 150.000\'den fazla kanal, 80.000\'i aşan film ve dizi arşivi, 4K Ultra HD kalite ve %99.9 uptime garantisi ile sektörün en kapsamlı IPTV hizmetini sunuyoruz.',
  ],
  stats: [
    { value: '2019', label: 'Kuruluş Yılı' },
    { value: '7.500+', label: 'Aktif Kullanıcı' },
    { value: '150K+', label: 'Kanal Sayısı' },
    { value: '%99.9', label: 'Uptime Garantisi' },
  ],
  values: [
    {
      title: 'Güvenilirlik',
      description: 'SSL şifreli ödeme, 7 gün iade garantisi ve şeffaf fiyatlandırma ile kullanıcılarımızın güvenini kazandık. Sürpriz ücretlendirme veya gizli koşullar yoktur.',
    },
    {
      title: 'Performans',
      description: 'Anti-Freeze teknolojisi, güçlü sunucu altyapısı ve %99.9 uptime garantisi ile kesintisiz izleme deneyimi. 4K Ultra HD kalitede stabil yayın.',
    },
    {
      title: '7/24 Destek',
      description: 'WhatsApp ve Telegram üzerinden 7 gün 24 saat Türkçe teknik destek. Kurulum yardımı, sorun giderme ve hesap yönetimi — dakikalar içinde yanıt.',
    },
    {
      title: 'Şeffaflık',
      description: 'Fiyatlarımız net ve açıktır. Gizli ücret, otomatik yenileme veya zorunlu sözleşme yoktur. Aboneliğiniz bittiğinde yenileme tamamen sizin tercihinizdir.',
    },
  ],
  team: [
    {
      name: 'Ahmet Yılmaz',
      role: 'Kurucu & CEO',
      description: 'IPTV sektöründe 8 yılı aşkın deneyime sahip. AloIPTV\'nin vizyonunu belirliyor ve şirketin stratejik yönünü yönetiyor. Müşteri memnuniyetini her şeyin üstünde tutar.',
    },
    {
      name: 'Elif Kaya',
      role: 'Teknik Direktör (CTO)',
      description: 'Sunucu altyapısı, Anti-Freeze teknolojisi ve yayın kalitesinden sorumlu. 10 yıllık yazılım mühendisliği tecrübesi ile AloIPTV\'nin teknik omurgasını oluşturuyor.',
    },
    {
      name: 'Mehmet Demir',
      role: 'Müşteri İlişkileri Müdürü',
      description: 'Müşteri destek ekibini yönetiyor ve kullanıcı deneyimini sürekli iyileştiriyor. 7/24 destek sürecinin aksamadan işlemesini sağlıyor.',
    },
  ],
}

// ─── SSS Sayfası Verileri (/sss/) ────────────

export const SSS_DATA: { category: string; items: FaqItem[] }[] = [
  {
    category: 'Genel',
    items: [
      {
        question: 'IPTV nedir ve nasıl çalışır?',
        answer: 'IPTV (Internet Protocol Television), internet bağlantınız üzerinden televizyon yayınlarını izlemenizi sağlayan bir teknolojidir. Geleneksel uydu çanağı veya kablo TV altyapısına ihtiyaç duymadan, internet üzerinden canlı TV kanalları, filmler ve dizileri yüksek kalitede izleyebilirsiniz. Tek ihtiyacınız stabil bir internet bağlantısı (minimum 10 Mbps) ve desteklenen bir cihazdır.',
      },
      {
        question: 'Aloiptv nedir ve neden en iyi seçim?',
        answer: 'Aloiptv, 2019\'dan bu yana hizmet veren Türkiye\'nin en güvenilir premium IPTV sağlayıcısıdır. 150.000\'den fazla canlı TV kanalı, 80.000+ film ve dizi arşivi, Anti-Freeze teknolojisi, 4K Ultra HD kalite ve 7/24 Türkçe destek ile rakiplerinden ayrılır. %99.9 uptime garantisi ve 7 gün koşulsuz iade politikası sunuyoruz.',
      },
      {
        question: 'Ücretsiz test nasıl alınır?',
        answer: 'WhatsApp üzerinden bize mesaj göndererek 24 saatlik ücretsiz test hesabı talep edebilirsiniz. Test hesabınız dakikalar içinde oluşturulur ve tüm kanallara HD kalitede erişim sağlar. Test süresince hizmetimizi tam olarak deneyimleyebilir ve karar verebilirsiniz. Herhangi bir ödeme bilgisi veya taahhüt gerekmez.',
      },
      {
        question: 'Bayilik yapabilir miyim?',
        answer: 'Evet! Bayilik programımız ile IPTV satışı yaparak gelir elde edebilirsiniz. Bayilerimize özel toplu indirimli fiyatlar, kendi müşteri paneli ve teknik destek sunuyoruz. Bayilik şartları ve detaylı bilgi için WhatsApp üzerinden bizimle iletişime geçebilirsiniz.',
      },
      {
        question: 'IPTV aboneliği kaç cihazda kullanılır?',
        answer: 'Seçtiğiniz pakete göre 1 ila 3 cihazda aynı anda kullanabilirsiniz. 1-3 aylık paketler 1 cihaz, 6-12 aylık paketler 2 cihaz, 24 aylık paket ise 3 cihaza kadar eş zamanlı kullanım imkanı sunar. Ek cihaz talebi için müşteri desteğimizle iletişime geçebilirsiniz.',
      },
    ],
  },
  {
    category: 'Teknik',
    items: [
      {
        question: 'Hangi cihazlarda kullanabilirim?',
        answer: 'Smart TV (Samsung, LG, Sony, Philips), Android telefon ve tablet, iPhone ve iPad, Windows ve Mac bilgisayar, Amazon Fire TV Stick, MAG Box (MAG 250/254/322), Apple TV ve Enigma2 (Dreambox, VU+) cihazlarında kullanabilirsiniz. Her cihaz için detaylı kurulum rehberimiz ve uzaktan kurulum desteğimiz mevcuttur.',
      },
      {
        question: 'Anti-Freeze teknolojisi nedir?',
        answer: 'Anti-Freeze teknolojimiz, yerel sunucu önbellekleme kullanarak yoğun izlenme saatlerinde bile kesintisiz yayın kalitesi sağlar. Özellikle futbol maçları, boks etkinlikleri ve popüler dizi yayınları sırasında diğer IPTV servislerinde yaşanan donma ve buffer sorunlarını ortadan kaldırır. Minimum 10 Mbps internet hızı yeterlidir.',
      },
      {
        question: 'Kurulum nasıl yapılır?',
        answer: 'Her cihaz için adım adım kurulum rehberimiz mevcuttur. Ödeme sonrası size gönderilen m3u link veya Xtream Codes bilgileri ile dakikalar içinde kurulum yapabilirsiniz. Ayrıca WhatsApp üzerinden 7/24 uzaktan kurulum desteği sunuyoruz — TeamViewer veya AnyDesk ile cihazınıza bağlanıp kurulumu sizin için gerçekleştiriyoruz.',
      },
      {
        question: 'Kaç cihazda aynı anda izleyebilirim?',
        answer: '1-3 aylık paketlerde 1 cihaz, 6-12 aylık paketlerde 2 cihaz, 24 aylık pakette 3 cihazda aynı anda izleyebilirsiniz. Farklı cihazlarda oturum açabilirsiniz ancak eş zamanlı izleme paket limitinize bağlıdır.',
      },
      {
        question: 'EPG (Yayın Rehberi) var mı?',
        answer: 'Evet, tüm kanallarda elektronik program rehberi (EPG) mevcuttur. EPG sayesinde mevcut ve gelecek programları görüntüleyebilir, yayın akışını takip edebilir ve izlemek istediğiniz programları planlayabilirsiniz. EPG, 3 aylık ve üzeri tüm paketlerde standart olarak sunulmaktadır.',
      },
    ],
  },
  {
    category: 'Ödeme & İade',
    items: [
      {
        question: 'Hangi ödeme yöntemleri kabul ediliyor?',
        answer: 'Kredi kartı, banka havalesi/EFT ve kripto para ile ödeme yapabilirsiniz. Tüm ödemeler SSL ile şifrelenmiştir. Kredi kartı ödemelerinde 3D Secure güvenlik protokolü uygulanır. Kripto para ile ödeme seçeneği Bitcoin, Ethereum ve USDT\'yi kapsamaktadır.',
      },
      {
        question: 'Para iadesi nasıl yapılır?',
        answer: 'Satın aldıktan sonra 7 gün içinde memnun kalmazsanız, WhatsApp üzerinden bize yazın. Hiçbir soru sorulmadan ödemeniz iade edilir. İade, ödeme yönteminize göre 1-5 iş günü içinde hesabınıza yansır. Koşulsuz iade garantimiz tüm paketler için geçerlidir.',
      },
      {
        question: 'Otomatik yenileme var mı?',
        answer: 'Hayır, otomatik yenileme yoktur. Paketiniz bittiğinde yenileme tamamen sizin tercihinize bağlıdır. Sürpriz ücretlendirme yapmayız. Paketinizin bitmesine yakın WhatsApp üzerinden bilgilendirme mesajı gönderilir, ancak yenileme kararı tamamen size aittir.',
      },
      {
        question: 'Fatura veya makbuz alabilir miyim?',
        answer: 'Evet, ödeme sonrası e-posta veya WhatsApp üzerinden ödeme onayı ve makbuz gönderilmektedir. Detaylı fatura talebi için müşteri desteğimize başvurabilirsiniz.',
      },
      {
        question: 'İndirim veya kampanya var mı?',
        answer: 'Uzun dönemli paketlerde önemli indirimler sunuyoruz. 3 aylık pakette %13, 6 aylık pakette %26, 12 aylık pakette %40 ve 24 aylık pakette %53 tasarruf edersiniz. Ayrıca 12 aylık pakete 1 ay, 24 aylık pakete 3 ay hediye süre ekliyoruz. Güncel kampanyalar için WhatsApp üzerinden bilgi alabilirsiniz.',
      },
    ],
  },
]

// ─── Gizlilik Politikası (/gizlilik-politikasi/) ─

export const PRIVACY_POLICY: { title: string; content: string[] }[] = [
  {
    title: 'Günlük Dosyaları',
    content: [
      'AloIPTV, çevrimiçi hizmet sağlayıcıların standart prosedürlerini takip eder ve günlük dosyalarını kullanır. Bu dosyalar; ziyaretçilerin internet protokol (IP) adresleri, tarayıcı türü, İnternet Servis Sağlayıcı (ISP), tarih ve saat damgası, yönlendiren/çıkış sayfaları ve muhtemelen tıklama sayısını içerir.',
      'Bu bilgiler kişisel olarak tanımlanabilir herhangi bir bilgiyle bağlantılı değildir. Bilgilerin toplanma amacı; eğilimleri analiz etmek, siteyi yönetmek, kullanıcıların site üzerindeki hareketlerini izlemek ve demografik bilgileri toplamaktır.',
    ],
  },
  {
    title: 'Çerezler',
    content: [
      'Diğer web siteleri gibi AloIPTV da çerezler kullanmaktadır. Bu çerezler; ziyaretçilerin tercihlerini ve ziyaretçinin eriştiği veya ziyaret ettiği web sitesindeki sayfaları içeren bilgileri saklamak için kullanılır. Bu bilgiler, ziyaretçilerin tarayıcı türüne ve/veya diğer bilgilerine göre web sayfası içeriğini özelleştirerek kullanıcılarımızın deneyimini optimize etmek için kullanılmaktadır.',
    ],
  },
  {
    title: 'Üçüncü Taraf Hizmetleri',
    content: [
      'AloIPTV\'nin gizlilik politikasının diğer reklam verenler veya web siteleri için geçerli olmadığını unutmayın. Bu nedenle, daha ayrıntılı bilgi için bu üçüncü taraf reklam sunucularının kendi gizlilik politikalarına başvurmanızı tavsiye ederiz.',
      'Bu üçüncü taraf reklam sunucuları veya reklam ağları, ilgili reklamlarını ve bağlantılarını doğrudan tarayıcınıza gönderen teknolojiler kullanır. Bu gerçekleştiğinde otomatik olarak IP adresinizi alırlar. Reklam kampanyalarının etkinliğini ölçmek ve/veya tarayıcınızda gördüğünüz reklam içeriğini kişiselleştirmek için başka teknolojiler de kullanabilirler.',
      'AloIPTV\'nin bu üçüncü taraf reklam sunucuları tarafından kullanılan çerezlere erişimi veya kontrolü yoktur.',
    ],
  },
  {
    title: 'Çocukların Gizliliği',
    content: [
      'Önceliğimizin bir sonraki kısmı, interneti kullanırken çocuklar için koruma eklemektir. Ebeveynleri ve velileri, çevrimiçi etkinliklerini gözlemlemeye, katılmaya ve/veya izlemeye ve yönlendirmeye teşvik ediyoruz.',
      'AloIPTV, 13 yaşın altındaki çocuklardan bilerek herhangi bir Kişisel Tanımlayıcı Bilgi toplamaz. Çocuğunuzun bu tür bilgileri web sitemizde sağladığını düşünüyorsanız, bizimle derhal iletişime geçmenizi şiddetle tavsiye ederiz ve bu tür bilgileri kayıtlarımızdan derhal kaldırmak için elimizden geleni yapacağız.',
    ],
  },
  {
    title: 'Yalnızca Çevrimiçi',
    content: [
      'Bu gizlilik politikası yalnızca çevrimiçi etkinliklerimiz için geçerlidir ve AloIPTV web sitesinde paylaştıkları ve/veya topladıkları bilgilerle ilgili olarak web sitesi ziyaretçilerimiz için geçerlidir. Bu politika, çevrimdışı olarak veya bu web sitesi dışındaki kanallar aracılığıyla toplanan hiçbir bilgi için geçerli değildir.',
    ],
  },
  {
    title: 'Onay',
    content: [
      'Web sitemizi kullanarak, gizlilik politikamızı kabul etmiş ve şartlarını onaylamış olursunuz.',
    ],
  },
  {
    title: 'İletişim',
    content: [
      'Gizlilik politikamız hakkında herhangi bir sorunuz veya öneriniz varsa, WhatsApp üzerinden bizimle iletişime geçmekten çekinmeyin.',
    ],
  },
]

// ─── İade Politikası (/iade-politikasi/) ─────

export const REFUND_POLICY: { title: string; content: string[] }[] = [
  {
    title: 'Genel İade Politikası',
    content: [
      'AloIPTV olarak müşteri memnuniyetini ön planda tutuyoruz. Hizmetlerimizden memnun kalmamanız durumunda, satın alma tarihinden itibaren 7 gün içinde koşulsuz para iade garantisi sunuyoruz.',
      'İade talebinizi WhatsApp üzerinden bize ileterek hızlı ve sorunsuz bir şekilde iade sürecinizi başlatabilirsiniz.',
    ],
  },
  {
    title: 'İade Koşulları',
    content: [
      '1. İade talebi, satın alma tarihinden itibaren 7 gün içinde yapılmalıdır.',
      '2. İade talebi WhatsApp üzerinden iletilmelidir. Talep alındıktan sonra en geç 24 saat içinde işleme alınır.',
      '3. İade, ödeme yapılan yönteme göre 1-5 iş günü içinde gerçekleştirilir. Kredi kartı iadeleri bankanıza bağlı olarak 1-2 ekstre dönemini bulabilir.',
    ],
  },
  {
    title: 'İade Yapılmayan Durumlar',
    content: [
      '1. 7 günlük iade süresinin aşılmış olması.',
      '2. Hesabın kural ihlali nedeniyle askıya alınmış olması (çoklu yetkisiz cihaz kullanımı, hesap paylaşımı vb.).',
      '3. Ücretsiz test hesapları için iade talebi geçerli değildir.',
      '4. Kullanıcının kendi internet altyapısından kaynaklanan sorunlar iade gerekçesi olarak kabul edilmez. Ancak bu durumda teknik ekibimiz sorunu çözmek için yardımcı olacaktır.',
    ],
  },
  {
    title: 'İade Nasıl Talep Edilir?',
    content: [
      '1. WhatsApp üzerinden destek ekibimize yazın ve iade talebinizi iletin.',
      '2. Hesap bilgilerinizi ve ödeme detaylarınızı paylaşın.',
      '3. Ekibimiz talebinizi inceleyecek ve en kısa sürede iadenizi gerçekleştirecektir.',
    ],
  },
  {
    title: 'İade Süreci',
    content: [
      'İade talebiniz onaylandıktan sonra ödemeniz, ödeme yönteminize göre aşağıdaki sürelerde hesabınıza yansır:',
      'Kredi Kartı: 1-5 iş günü (bankanıza bağlı olarak 1-2 ekstre dönemi)',
      'Banka Havalesi/EFT: 1-3 iş günü',
      'Kripto Para: 24 saat içinde',
    ],
  },
  {
    title: 'İletişim',
    content: [
      'İade süreciniz hakkında sorularınız için 7/24 WhatsApp destek hattımızdan bize ulaşabilirsiniz. Müşteri memnuniyeti bizim önceliğimizdir.',
    ],
  },
]

// ─── Kullanım Şartları (/kullanim-sartlari/) ─

export const TERMS_OF_USE: { title: string; content: string[] }[] = [
  {
    title: 'Hesap Kurulumu',
    content: [
      'AloIPTV hizmetinden yararlanmak için WhatsApp üzerinden sipariş vermeniz ve ödemenizi tamamlamanız gerekmektedir. Ödeme onayı sonrası hesap bilgileriniz (kullanıcı adı, şifre ve sunucu bilgileri) WhatsApp üzerinden iletilecektir.',
      'Hesap bilgileriniz kişiseldir ve üçüncü kişilerle paylaşılmamalıdır. Hesabınızın güvenliğinden siz sorumlusunuz. Yetkisiz erişim veya hesap paylaşımı tespit edilmesi durumunda hesabınız askıya alınabilir.',
    ],
  },
  {
    title: 'Hizmet Kullanımı',
    content: [
      'AloIPTV hizmeti yalnızca kişisel kullanım amaçlıdır. Hizmeti ticari amaçla kullanmak (kafeler, oteller, halka açık mekanlar vb.) bayilik anlaşması gerektirir.',
      'Hizmetimizi yeniden satmak, dağıtmak veya paylaşmak kesinlikle yasaktır. Bu tür faaliyetler tespit edildiğinde hesap kalıcı olarak kapatılır ve iade yapılmaz.',
      'Paketinize dahil olan cihaz sayısından fazla cihazda eş zamanlı kullanım tespit edildiğinde hesabınız geçici olarak askıya alınabilir.',
    ],
  },
  {
    title: 'Ödeme ve Abonelik',
    content: [
      'Tüm fiyatlar Türk Lirası (TL) cinsindendir ve KDV dahildir. Ödeme seçenekleri: kredi kartı, banka havalesi/EFT ve kripto para.',
      'Otomatik yenileme sistemi kullanılmamaktadır. Aboneliğiniz süresi dolduğunda otomatik olarak sona erer ve yenileme tamamen sizin tercihinize bağlıdır.',
      'Fiyatlarımız piyasa koşullarına göre değişebilir. Mevcut aboneliğiniz süresince fiyat değişikliğinden etkilenmezsiniz.',
    ],
  },
  {
    title: 'Hizmet Garantisi',
    content: [
      'AloIPTV, %99.9 uptime garantisi sunar. Planlı bakım çalışmaları önceden duyurulur ve genellikle gece saatlerinde (02:00-06:00 arası) gerçekleştirilir.',
      'Hizmetimiz "olduğu gibi" sunulmaktadır. İnternet bağlantınızın kalitesi, cihazınızın uyumluluğu ve yerel ağ sorunlarından kaynaklanan performans düşüşlerinden AloIPTV sorumlu tutulamaz.',
      '7 gün koşulsuz para iade garantisi, hizmet kalitemize olan güvenimizin göstergesidir.',
    ],
  },
  {
    title: 'İçerik ve Sorumluluk Reddi',
    content: [
      'AloIPTV, sunulan içeriklerin telif hakkı, doğruluğu veya uygunluğu konusunda herhangi bir garanti vermez. İçerikler üçüncü taraf kaynaklardan sağlanmaktadır.',
      'Kullanıcılar, hizmeti kendi ülkelerinin yasalarına uygun şekilde kullanmakla yükümlüdür. Hizmetin yasadışı amaçlarla kullanılmasından AloIPTV sorumlu tutulamaz.',
      'Yayın içerikleri ve kanal listesi önceden haber verilmeksizin değişebilir. AloIPTV, herhangi bir kanalı veya içeriği kaldırma hakkını saklı tutar.',
    ],
  },
  {
    title: 'Hesap Askıya Alma ve Fesih',
    content: [
      'AloIPTV, aşağıdaki durumlarda hesabınızı askıya alma veya kalıcı olarak kapatma hakkını saklı tutar:',
      'Hesap bilgilerinin üçüncü kişilerle paylaşılması veya yeniden satışı.',
      'İzin verilen cihaz sayısının üzerinde eş zamanlı kullanım.',
      'Hizmetin ticari amaçla izinsiz kullanılması.',
      'Bu kullanım şartlarının herhangi bir maddesinin ihlal edilmesi.',
      'Askıya alınan hesaplar için iade yapılıp yapılmayacağı, ihlalin niteliğine göre değerlendirilir.',
    ],
  },
  {
    title: 'Değişiklikler',
    content: [
      'AloIPTV, bu kullanım şartlarını herhangi bir zamanda güncelleme hakkını saklı tutar. Güncellemeler web sitesinde yayınlandığı anda yürürlüğe girer.',
      'Hizmetimizi kullanmaya devam etmeniz, güncellenmiş şartları kabul ettiğiniz anlamına gelir. Önemli değişiklikler için WhatsApp üzerinden bilgilendirme yapılacaktır.',
    ],
  },
  {
    title: 'İletişim',
    content: [
      'Kullanım şartlarımız hakkında sorularınız için 7/24 WhatsApp destek hattımızdan bize ulaşabilirsiniz.',
    ],
  },
]

// ─── Blog Yazıları ───────────────────────────

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'akilli-tvde-iptv-kurulumu',
    title: 'Akıllı TV\'de IPTV Nasıl Kurulur? — 2026 Kurulum Rehberi',
    date: '10 Temmuz 2026',
    readTime: '6 dk okuma',
    excerpt: 'Samsung, LG ve Sony akıllı TV\'lerde IPTV kurulumunu adım adım anlattığımız kapsamlı rehber. Hem yeni başlayanlar hem de deneyimli kullanıcılar için.',
    content: [
      'Akıllı TV\'nizde IPTV izlemek hiç bu kadar kolay olmamıştı. Bu rehberde Samsung, LG ve Sony akıllı TV\'lerde IPTV kurulumunu adım adım anlatıyoruz. İster ilk kez IPTV kullanıyor olun, ister mevcut kurulumunuzu güncellemek isteyin, bu rehber tam size göre.',

      'IPTV Nedir ve Neden Akıllı TV\'de Kullanmalısınız?',

      'IPTV (Internet Protocol Television), internet bağlantınız üzerinden binlerce TV kanalı, film ve dizi izlemenizi sağlayan bir teknolojidir. Geleneksel uydu veya kablo TV\'nin aksine, IPTV ile 150.000\'den fazla kanala erişebilir, 4K Ultra HD kalitede içerik izleyebilir ve geniş bir VOD (isteğe bağlı video) arşivinden yararlanabilirsiniz.',

      'Akıllı TV\'ler, büyük ekranları ve dahili internet bağlantıları sayesinde IPTV izlemek için en ideal cihazlardır. Ek bir cihaz satın almanıza gerek kalmadan, TV\'nizin uygulama mağazasından bir IPTV uygulaması indirerek dakikalar içinde kurulumu tamamlayabilirsiniz.',

      'Kurulum Öncesi Gereksinimler',

      'Kuruluma başlamadan önce şu gereksinimleri karşıladığınızdan emin olun: Stabil bir internet bağlantısı (minimum 10 Mbps — 4K için 25 Mbps önerilir), AloIPTV aboneliği veya ücretsiz test hesabı, Smart TV\'nizin Wi-Fi veya ethernet ile internete bağlı olması.',

      'Samsung Smart TV Kurulumu',

      'Samsung TV\'lerde kurulum oldukça basittir. Ana menüden "Apps" veya "Uygulamalar" bölümüne gidin. Arama çubuğuna "IPTV Smarters" veya "Smart IPTV" yazın. Uygulamayı indirip yükleyin. Uygulamayı açın ve AloIPTV\'den gelen Xtream Codes bilgilerinizi girin: sunucu adresi (URL), kullanıcı adı ve şifre. Bilgileri kaydedip bağlan butonuna tıklayın. Birkaç saniye içinde kanal listeniz yüklenecek ve izlemeye başlayabileceksiniz.',

      'LG Smart TV Kurulumu (webOS)',

      'LG TV\'lerde LG Content Store\'u açın. "IPTV Smarters" uygulamasını arayıp yükleyin. Uygulamayı açtıktan sonra "Xtream Codes API" seçeneğini seçin. AloIPTV hesap bilgilerinizi girin ve kaydedip bağlanın. LG TV\'lerde alternatif olarak "SS IPTV" uygulaması da kullanılabilir.',

      'Sony Smart TV Kurulumu (Android TV)',

      'Sony TV\'ler Android TV işletim sistemi kullandığı için Google Play Store\'a erişiminiz vardır. Play Store\'dan "TiviMate" veya "IPTV Smarters Pro" uygulamasını indirin. Uygulamayı açın, "Playlist Ekle" seçeneğine tıklayın. AloIPTV\'den gelen M3U linkini veya Xtream Codes bilgilerini girin. Kanal listesi yüklendikten sonra izlemeye başlayabilirsiniz.',

      'Sorun Giderme ve İpuçları',

      'Kanal listesi yüklenmiyorsa internet bağlantınızı kontrol edin. Donma sorunu yaşıyorsanız kablolu ethernet bağlantısını deneyin — Wi-Fi\'den daha stabil performans sunar. EPG (yayın rehberi) görünmüyorsa uygulama ayarlarından EPG kaynağını kontrol edin. Herhangi bir sorunla karşılaşırsanız AloIPTV 7/24 WhatsApp destek hattından yardım alabilirsiniz. Uzaktan kurulum desteği ile TeamViewer veya AnyDesk aracılığıyla cihazınıza bağlanıp kurulumu sizin için yapabiliriz.',

      'AloIPTV ile Fark Yaratın',

      'AloIPTV\'nin Anti-Freeze teknolojisi sayesinde akıllı TV\'nizde kesintisiz izleme keyfi yaşayabilirsiniz. 150.000+ kanal, 80.000+ film ve dizi, 4K Ultra HD kalite ve 7/24 Türkçe destek ile televizyon izleme deneyiminizi bir üst seviyeye taşıyın. Henüz üye değilseniz ücretsiz 24 saatlik test hesabımızı deneyin!',
    ],
  },
  {
    slug: 'iptv-vs-kablo-tv-karsilastirma',
    title: 'IPTV vs Kablo TV — 2026 Karşılaştırma Rehberi',
    date: '9 Temmuz 2026',
    readTime: '6 dk okuma',
    excerpt: 'IPTV ve geleneksel kablo TV arasındaki farkları detaylı olarak karşılaştırıyoruz. Hangisi daha avantajlı? Fiyat, kalite, içerik çeşitliliği ve daha fazlası.',
    content: [
      'Televizyon izleme alışkanlıkları son yıllarda büyük bir dönüşüm geçirdi. Geleneksel kablo TV abonelikleri yerini internet tabanlı çözümlere bırakıyor. Peki IPTV mi yoksa kablo TV mi tercih etmelisiniz? Bu kapsamlı karşılaştırma rehberinde her iki seçeneği detaylı olarak inceliyoruz.',

      'IPTV ve Kablo TV Nedir?',

      'Kablo TV, koaksiyel kablo veya fiber optik altyapı üzerinden analog veya dijital televizyon sinyalleri ileten geleneksel bir yayın teknolojisidir. Türkiye\'de Türksat Kablo TV, Digitürk ve D-Smart gibi sağlayıcılar bu hizmeti sunmaktadır.',

      'IPTV ise internet protokolü üzerinden televizyon yayını sunan modern bir teknolojidir. İnternet bağlantınız üzerinden canlı TV, film, dizi ve daha fazlasını izlemenizi sağlar. AloIPTV gibi premium IPTV sağlayıcıları, geleneksel TV\'nin sunduğundan çok daha fazla içerik ve özellik sunmaktadır.',

      'İçerik Karşılaştırması',

      'Kablo TV, genellikle 200-500 kanal arasında bir seçenek sunar. Paketinize göre bazı kanallar ek ücretlidir. Spor paketleri, sinema paketleri ve uluslararası kanallar ayrı faturalandırılır.',

      'IPTV ile durum çok farklıdır. AloIPTV örneğinde, tek bir abonelikle 150.000\'den fazla canlı TV kanalına, 80.000+ film ve dizi arşivine erişebilirsiniz. Üstelik Netflix, Disney+, Amazon Prime, beIN Sports, BluTV, Exxen gibi platformların içerikleri de dahildir. Ek ücret ödemenize gerek yoktur.',

      'Görüntü ve Ses Kalitesi',

      'Modern kablo TV hizmetleri HD ve bazı kanallarda Full HD kalite sunmaktadır. Ancak 4K içerik seçenekleri oldukça sınırlıdır ve genellikle ek donanım gerektirir.',

      'IPTV teknolojisi, desteklenen kanallarda 4K Ultra HD ve HDR kalitede yayın sunabilmektedir. AloIPTV\'nin güçlü sunucu altyapısı ve Anti-Freeze teknolojisi sayesinde yüksek kaliteli yayınlar donma veya buffer olmadan izlenebilmektedir.',

      'Fiyat Karşılaştırması',

      'Kablo TV abonelikleri Türkiye\'de aylık 200-600 TL arasında değişmektedir. Spor paketleri, sinema paketleri ve ek kanallar dahil edildiğinde bu rakam aylık 800 TL\'yi aşabilmektedir.',

      'AloIPTV\'de ise en popüler 12 aylık paket aylık sadece 150 TL\'ye denk gelmektedir (1.799 TL / 12 ay). Bu fiyata 150.000+ kanal, 80.000+ film ve dizi, 4K Ultra HD kalite, Anti-Freeze teknolojisi ve 7/24 destek dahildir. Kablo TV ile karşılaştırıldığında %70\'e varan tasarruf sağlanmaktadır.',

      'Cihaz Uyumluluğu ve Esneklik',

      'Kablo TV, genellikle set-top box (alıcı) gerektiren ve evinize sabit olan bir hizmettir. Evden ayrıldığınızda içeriklerinize erişiminiz sınırlıdır.',

      'IPTV ise internet bağlantısı olan her yerden ve birçok farklı cihazdan erişilebilir. Smart TV, telefon, tablet, bilgisayar, Fire Stick, MAG Box — seçim sizin. Evde, işte veya seyahatte içeriklerinize kesintisiz erişebilirsiniz.',

      'Kurulum ve Kullanım Kolaylığı',

      'Kablo TV kurulumu genellikle teknisyen randevusu gerektirir ve birkaç gün sürebilir. Ayrıca kablo çekimi ve set-top box montajı gibi fiziksel işlemler söz konusudur.',

      'IPTV kurulumu ise dakikalar içinde tamamlanır. AloIPTV\'de ödeme yaptıktan sonra hesap bilgileriniz anında iletilir. Uygulamayı indirin, bilgilerinizi girin ve izlemeye başlayın. Üstelik 7/24 WhatsApp desteği ve uzaktan kurulum yardımı mevcuttur.',

      'Sonuç: Hangisini Seçmelisiniz?',

      'İçerik çeşitliliği, fiyat/performans oranı, görüntü kalitesi, cihaz esnekliği ve kurulum kolaylığı açısından IPTV, geleneksel kablo TV\'ye göre açık bir üstünlük sağlamaktadır. AloIPTV ile 150.000+ kanal, 4K Ultra HD kalite, Anti-Freeze teknolojisi ve 7/24 Türkçe desteğe kablo TV\'nin çok altında bir fiyatla sahip olabilirsiniz.',

      'Henüz karar veremediyseniz, AloIPTV\'nin 24 saatlik ücretsiz test hesabını deneyerek farkı kendiniz görün. 7 gün koşulsuz para iade garantimiz ile risksiz bir şekilde başlayabilirsiniz.',
    ],
  },
]
