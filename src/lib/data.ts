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

export interface AboutPageData {
  hikayemiz: string[]
  stats: Stat[]
  values: { title: string; description: string }[]
}

export interface BlogPost {
  slug: string
  title: string
  date: string
  /** ISO date used for sitemap lastmod and schema dateModified */
  isoDate: string
  readTime: string
  excerpt: string
  content: string[]
  /** Slugs of topically related posts, shown in the "İlgili Yazılar" block */
  related: string[]
  /** ISO date of the last substantive edit (sitemap lastmod + schema dateModified) */
  modifiedIso?: string
  /** Kısa <title> (marka eki dahil 60 karakteri aşmamalı); yoksa title kullanılır */
  metaTitle?: string
}

// ─── Duyuru Mesajları ────────────────────────

export const ANNOUNCEMENT_MESSAGES = [
  '🔥 12 Aylık Pakette %40 İndirim — Sınırlı Süre',
  '⚡ 24 Aylık Pakette %53 İndirim',
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
    description: '7 gün içinde iade talebi — koşullar iade politikası sayfasında',
  },
  {
    icon: '🎧',
    title: '7/24 VIP Destek',
    description: 'WhatsApp üzerinden 7/24 teknik destek',
  },
]

// ─── Ana Sayfa İstatistikleri ────────────────

export const STATS: Stat[] = [
  { value: '150K+', label: 'Canlı Kanal' },
  { value: '80K+', label: 'Film & Dizi' },
  { value: '4K HDR', label: 'Ultra Kalite' },
  { value: '⚡', label: 'Anında Aktivasyon' },
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
    description: '80.000+ film ve dizi arşivi. Yerli ve yabancı yapımlardan oluşan, sürekli güncellenen kütüphane.',
  },
  {
    icon: '❄️',
    title: 'Anti-Freeze',
    description: 'Yerel sunucu önbellekleme kullanan Anti-Freeze teknolojisi, donma ve kesinti sorunlarını azaltmayı hedefler. Maç günleri gibi yoğun saatler için tasarlanmıştır.',
  },
  {
    icon: '📡',
    title: '4K UHD',
    description: 'Desteklenen kanallarda 4K Ultra HD ve HDR kalitesinde yayın. 4K için 25 Mbps ve üzeri internet hızı önerilir.',
  },
  {
    icon: '📋',
    title: 'EPG Rehberi',
    description: 'Elektronik Program Rehberi ile tüm kanalların yayın akışını görüntüleyin. Hangi programın ne zaman başladığını anında öğrenin.',
  },
  {
    icon: '🎧',
    title: '7/24 Destek',
    description: 'WhatsApp üzerinden 7/24 Türkçe teknik destek. Kurulum yardımı, sorun giderme ve hesap yönetimi desteği.',
  },
]

// ─── Hakkımızda Bölümü (Ana Sayfa) ──────────

export const ABOUT_SECTION: string[] = [
  'AloIPTV, canlı TV kanalları, film ve dizi arşivi ile spor yayınlarını tek abonelikte sunan bir IPTV hizmetidir. Paketler, fiyatlar ve koşullar sitede açıkça yer alır.',
  'Anti-Freeze teknolojimizle maç günleri gibi yoğun saatlerde donma ve kesinti sorunlarını azaltmayı hedefliyoruz. Yerel sunucu önbellekleme sistemi ile yüksek talep anlarında stabil yayın sağlamak için çalışıyoruz. 150.000\'den fazla kanal ve 80.000\'i aşan film-dizi arşivinden oluşan geniş bir içerik seçkisi sunuyoruz.',
  'WhatsApp üzerinden 7/24 Türkçe destek hattımız mevcuttur. Kurulum, sorun giderme veya hesap yönetimi — ne ihtiyacınız olursa olsun, dakikalar içinde size yardımcı oluyoruz.',
  'Güvenli ödeme, 7 gün iade seçeneği (koşullar iade politikası sayfasında) ve şeffaf fiyatlandırma ile hizmet veriyoruz.',
]

// ─── Hakkımızda İstatistikleri (Ana Sayfa) ──

export const ABOUT_STATS: Stat[] = [
  { value: '150K+', label: 'CANLI KANAL' },
  { value: '80K+', label: 'FILM & DIZI' },
  { value: '7 GÜN', label: 'İADE SÜRESİ' },
  { value: '24 Saat', label: 'ÜCRETSİZ TEST' },
]

// ─── Ana Sayfa SSS ───────────────────────────

export const HOMEPAGE_FAQ: FaqItem[] = [
  {
    question: 'IPTV nedir?',
    answer: 'IPTV (Internet Protocol Television), internet üzerinden televizyon yayını izlemenizi sağlayan bir teknolojidir. Geleneksel uydu veya kablo TV\'ye ihtiyaç duymadan, internet bağlantınız üzerinden binlerce canlı TV kanalı, film ve dizi izleyebilirsiniz. AloIPTV ile 150.000\'den fazla kanala erişebilir, desteklenen kanallarda 4K kalitede izleyebilirsiniz.',
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
    answer: '7 gün iade seçeneği sunuyoruz. Satın aldıktan sonra 7 gün içinde memnun kalmazsanız WhatsApp üzerinden bize yazmanız yeterli. İade koşulları ve istisnalar iade politikası sayfamızda yer alır.',
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
    price: 125,
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
    price: 325,
    originalPrice: 374,
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
    price: 550,
    originalPrice: 747,
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
    price: 900,
    originalPrice: 1494,
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
    price: 1400,
    originalPrice: 2988,
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
    description: 'Futbol, basketbol, tenis, F1 ve diğer spor dallarına yönelik canlı spor kanalları.',
    icon: '⚽',
  },
  {
    name: 'Sinema & Filmler',
    description: 'Türk ve yabancı yapımlardan film arşivi ve sinema kanalları.',
    icon: '🎬',
  },
  {
    name: 'Diziler',
    description: 'Yerli ve yabancı diziler. Sürekli güncellenen arşiv.',
    icon: '📺',
  },
  {
    name: 'Dövüş Sporları',
    description: 'Boks, MMA ve diğer dövüş sporlarına yönelik kanallar. Yayınlanan etkinlikler kanal içeriğine göre değişir.',
    icon: '🥊',
  },
  {
    name: 'Amerikan Sporları',
    description: 'Amerikan futbolu, beyzbol ve basketbol gibi Amerikan spor dallarına yönelik kanallar.',
    icon: '🏈',
  },
  {
    name: '7/24 Canlı TV',
    description: 'Haber, eğlence, belgesel ve yaşam kanalları — 7 gün 24 saat canlı yayın akışı.',
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
    channels: ['Ulusal kanallar', 'Haber', 'Spor', 'Belgesel', 'Çocuk', 'Müzik', 'Yaşam ve eğlence'],
  },
  {
    title: 'Spor Kanalları',
    channels: ['Futbol', 'Basketbol', 'Tenis', 'Motor sporları', 'Dövüş sporları', 'Amerikan sporları'],
  },
  {
    title: 'Sinema & Dizi',
    channels: ['Sinema kanalları', 'Dizi kanalları', 'Film arşivi', 'Dizi arşivi', 'Animasyon'],
  },
  {
    title: 'Çocuk Kanalları',
    channels: ['Çizgi film', 'Eğitici içerik', 'Okul öncesi', 'Aile'],
  },
  {
    title: 'Uluslararası',
    channels: ['İngilizce', 'Almanca', 'Fransızca', 'İtalyanca', 'İspanyolca', 'Arapça', 'Uluslararası haber'],
  },
]

// ─── Hakkımızda Sayfa Verileri (/hakkimizda/) ─

export const ABOUT_PAGE_DATA: AboutPageData = {
  hikayemiz: [
    'AloIPTV, canlı TV kanalları, film ve dizi arşivi ile spor yayınlarını tek abonelikte sunan bir IPTV hizmetidir. İnternet bağlantısı olan desteklenen cihazlarda izlenebilir; uydu çanağı veya kablo altyapısı gerekmez.',
    'Hizmetin merkezinde Anti-Freeze teknolojisi bulunur. Yerel sunucu önbellekleme kullanan bu yapı, maç günleri gibi yoğun saatlerde donma ve kesinti sorunlarını azaltmayı hedefler. Desteklenen kanallarda 4K Ultra HD yayın sunulur.',
    'Hizmeti satın almadan değerlendirebilmeniz için 24 saatlik ücretsiz test ve 7 gün iade seçeneği sunuyoruz (koşullar iade politikası sayfasında yer alır). Kurulum ve teknik sorularınız için WhatsApp üzerinden 7/24 Türkçe destek verilir.',
    'Sitemizde 150.000\'den fazla kanal, 80.000\'i aşan film ve dizi arşivi sunduğumuzu belirtiyoruz; paketler ve fiyatlar fiyatlar sayfasında açıkça yer alır.',
  ],
  stats: [
    { value: '24 Saat', label: 'Ücretsiz Test' },
    { value: '150K+', label: 'Kanal Sayısı' },
    { value: '80K+', label: 'Film & Dizi' },
    { value: '7 Gün', label: 'İade Süresi' },
  ],
  values: [
    {
      title: 'Güvenilirlik',
      description: 'SSL şifreli ödeme, 7 gün iade seçeneği ve şeffaf fiyatlandırma ile güven vermeyi hedefliyoruz. Fiyatlar sitede açıktır; otomatik yenileme yoktur.',
    },
    {
      title: 'Performans',
      description: 'Anti-Freeze teknolojisi ve sunucu altyapısı ile akıcı bir izleme deneyimi hedefliyoruz. Desteklenen kanallarda 4K Ultra HD yayın.',
    },
    {
      title: '7/24 Destek',
      description: 'WhatsApp üzerinden 7 gün 24 saat Türkçe teknik destek. Kurulum yardımı, sorun giderme ve hesap yönetimi desteği.',
    },
    {
      title: 'Şeffaflık',
      description: 'Fiyatlarımız net ve açıktır. Gizli ücret, otomatik yenileme veya zorunlu sözleşme yoktur. Aboneliğiniz bittiğinde yenileme tamamen sizin tercihinizdir.',
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
        question: 'AloIPTV nedir?',
        answer: 'AloIPTV, canlı TV kanalları, film ve dizi arşivi sunan bir IPTV hizmetidir. 150.000\'den fazla canlı TV kanalı, 80.000+ film ve dizi arşivi, Anti-Freeze teknolojisi, 4K Ultra HD kalite ve 7/24 Türkçe destek sunar. 7 gün iade seçeneği sunulur; koşullar iade politikası sayfasında yer alır.',
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
        answer: 'Anti-Freeze teknolojimiz, yerel sunucu önbellekleme kullanarak yoğun izlenme saatlerinde yayın kalitesini korumaya yardımcı olur. Özellikle futbol maçları, boks etkinlikleri ve popüler dizi yayınları sırasında donma ve buffer sorunlarını azaltmayı hedefler. Minimum 10 Mbps internet hızı yeterlidir.',
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
        answer: 'Satın aldıktan sonra 7 gün içinde memnun kalmazsanız WhatsApp üzerinden bize yazın. İade, ödeme yönteminize göre 1-5 iş günü içinde hesabınıza yansır. İade koşulları ve istisnalar iade politikası sayfamızda yer alır.',
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
      'AloIPTV olarak müşteri memnuniyetini ön planda tutuyoruz. Hizmetlerimizden memnun kalmamanız durumunda, satın alma tarihinden itibaren 7 gün içinde para iadesi talep edebilirsiniz.',
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
    title: 'Hizmet Kapsamı',
    content: [
      'Planlı bakım çalışmaları önceden duyurulur ve genellikle gece saatlerinde (02:00-06:00 arası) gerçekleştirilir.',
      'Hizmetimiz "olduğu gibi" sunulmaktadır. İnternet bağlantınızın kalitesi, cihazınızın uyumluluğu ve yerel ağ sorunlarından kaynaklanan performans düşüşlerinden AloIPTV sorumlu tutulamaz.',
      '7 gün para iadesi, iade politikası sayfasındaki koşullara tabidir.',
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
// İçerik src/lib/blog-posts.ts dosyasındadır.
export { BLOG_POSTS } from './blog-posts'
