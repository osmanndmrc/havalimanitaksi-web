/**
 * KAHRAMANMARAŞ HAVALİMANI TAKSİ - MERKEZİ VERİ & SEO YAPILANDIRMASI
 * 
 * Bu dosyadan sitenin tüm iletişim numaralarını, WhatsApp mesajlarını,
 * Google Maps/Place ID ayarlarını, SEO bilgilerini ve içeriklerini
 * tek bir yerden kolayca düzenleyebilirsiniz.
 */

export interface RouteData {
  destination: string;
  badge: string;
  distance: string;
  duration: string;
  description: string;
  queryText: string;
}

export interface FleetItem {
  type: string;
  badge: string;
  capacity: string;
  luggage: string;
  features: string[];
  desc: string;
}

export interface ReviewItem {
  author: string;
  role: string;
  rating: number;
  category: string;
  comment: string;
  date: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export const siteData = {
  // 1. KURUMSAL VE GENEL BİLGİLER
  brand: {
    name: "Kahramanmaraş Havalimanı Taksi",
    shortName: "KCM Havalimanı Taksi",
    title: "Taksi Karşılama",
    slogan: "Havalimanındaki Tek Resmi Taksi Durağı",
    license: "DHMİ & Kahramanmaraş Büyükşehir Belediyesi UKOME Lisanslı",
    airportName: "Kahramanmaraş Havalimanı",
    airportIata: "KCM",
    airportIcao: "LTCN",
    legalName: "Kahramanmaraş Havalimanı Taksi Motorlu Taşıyıcılar Kooperatifi",
    yearEstablished: 1998,
  },

  // 2. İLETİŞİM VE ÇAĞRI BİLGİLERİ (Tek yerden güncelleyin)
  contact: {
    // Sabit Hat / Durak Nöbetçi Telefonu
    phoneLandline: "0344 235 46 46",
    phoneLandlineFormatted: "+90 (344) 235 46 46",
    phoneLandlineTel: "tel:03442354646",

    // Cep / Mobil Rezervasyon Telefonu
    phoneMobile: "0542 000 46 46",
    phoneMobileFormatted: "+90 (542) 000 46 46",
    phoneMobileTel: "tel:05420004646",

    // WhatsApp İletişim Hattı
    whatsappNumber: "905420004646",
    whatsappLink: "https://wa.me/905420004646",
    whatsappDefaultText:
      "Merhaba Kahramanmaraş Havalimanı Taksi, taksi rezervasyonu ve karşılama hakkında bilgi almak istiyorum.",

    // E-posta
    email: "info@marashavalimanitaksi.com",

    // Çalışma Saatleri
    workingHours: "7/24 Kesintisiz (Tüm Tarifeli ve Rötar Uçuşlar Dahil)",
    workingHoursSpecification: "Mo-Su 00:00-24:00",
  },

  // 3. KONUM, GOOGLE MAPS & HARİTA VERİLERİ (Geo SEO)
  location: {
    address: "Kahramanmaraş Havalimanı Gelen Yolcu Terminal Çıkışı",
    district: "Dulkadiroğlu",
    city: "Kahramanmaraş",
    province: "Kahramanmaraş",
    postalCode: "46060",
    country: "Türkiye",
    countryCode: "TR",

    // Coğrafi Koordinatlar (GeoDaddy ve Google Maps için tam terminal koordinatı)
    latitude: 37.5386,
    longitude: 36.9744,
    geoRegion: "TR-46",
    geoPlacename: "Kahramanmaraş",

    // Google Place ID (Google Business Profile ID'nizi buraya girebilirsiniz)
    googlePlaceId: "ChIJ1ZgK6_d9NBER4y9eU-Q3q50",

    // Google Maps Doğrudan Arama / Yol Tarifi Linki
    googleMapsLink:
      "https://maps.google.com/?q=Kahramanmara%C5%9F+Havaliman%C4%B1+Taksi+Dura%C4%9F%C4%B1",

    // Google Maps Harita Gömme (Embed Iframe) URL'si
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12648.562145398246!2d36.9656445!3d37.5386121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152ddfd6eb0a68d5%3A0x9daba4e4535e2fe2!2sKahramanmara%C5%9F%20Havaliman%C4%B1!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str",

    // Terminal mesafesi
    terminalProximity: "Terminal Çıkışına 15 Metre",
  },

  // 4. GELİŞMİŞ SEO VE SOSYAL MEDYA BİLGİLERİ
  seo: {
    siteUrl: "https://www.marashavalimanitaksi.com",
    title: "Kahramanmaraş Havalimanı Taksi | 7/24 Kesintisiz Resmi Havalimanı Transferi",
    titleTemplate: "%s | Kahramanmaraş Havalimanı Resmi Taksi Durağı",
    description:
      "Kahramanmaraş Havalimanı (KCM) tek resmi ve lisanslı taksi durağı. Gelen yolcu çıkış kapısında 7/24 hazır taksiler. Onikişubat, Dulkadiroğlu, Türkoğlu, Pazarcık, Elbistan ve şehirlerarası sabit, güvenilir taksi transferi.",
    keywords: [
      "Kahramanmaraş Havalimanı Taksi",
      "Maraş Havalimanı Taksi Durağı",
      "KCM Havalimanı Taksi",
      "Kahramanmaraş Havalimanı Transfer",
      "Maraş Taksi",
      "Kahramanmaraş Taksi Numarası",
      "Havalimanı Taksi Çağır",
      "Elbistan Havalimanı Transfer",
      "Türkoğlu Havalimanı Taksi",
      "Dulkadiroğlu Taksi",
      "Onikişubat Havalimanı Taksi",
      "7 24 Havalimanı Taksi Maraş",
    ],
    themeColor: "#facc15",
    ogImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_lBQqkXjDCQ0tWWCLL7gL3SB4SXNvapr5-LBphTub7bTz3yFAybadOinQ9qiHQHiJ_57RjYtVsMCoEPfePa5Qrqn8MCe_IfFkUvVPJq8qh0x6UO6S4MsOcLuw6_1SFHpqnVNRF0LLoQ5ERw5N_w1nAogn4uLmGEtWlfrhoJixLdopVzA6sq3DvsIIuC6fkVs7NTUVhZHnEJJ98g0serWtsL8KaKoObGqXDyAr9pI_4G2JOyOXQclQ",
    rating: {
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "284",
    },
  },

  // 5. HİZMET VERİLEN TÜM İLÇE VE BÖLGELER
  regions: [
    "Onikişubat",
    "Dulkadiroğlu",
    "Türkoğlu",
    "Pazarcık",
    "Elbistan",
    "Afşin",
    "Göksun",
    "Andırın",
    "Çağlayancerit",
    "Ekinözü",
    "Nurhak",
    "Gaziantep",
    "Adana",
  ],

  // 6. POPÜLER GÜZERGAHLAR
  routes: [
    {
      destination: "Şehir Merkezi (Trabzon Bulvarı)",
      badge: "Merkez",
      distance: "~8 km",
      duration: "~12 dk",
      description: "Oteller, valilik, çarşı, valilik ve kamu kurumlarına en hızlı ulaşım.",
      queryText: "Şehir merkezi için taksi ayarlamak istiyorum.",
    },
    {
      destination: "Onikişubat (Binevler / Yatılı Bölge)",
      badge: "İlçe",
      distance: "~11 km",
      duration: "~15 dk",
      description: "Boğaziçi, Üniversite, Necip Fazıl Kültür Merkezi ve konut bölgeleri.",
      queryText: "Onikişubat bölgesi için taksi ayarlamak istiyorum.",
    },
    {
      destination: "Dulkadiroğlu (Doğukent / Sanayi)",
      badge: "İlçe",
      distance: "~7 km",
      duration: "~10 dk",
      description: "Sanayi siteleri, Doğukent, Karacasu ve çevre yerleşimler.",
      queryText: "Dulkadiroğlu bölgesi için taksi transferi rica ediyorum.",
    },
    {
      destination: "Türkoğlu İlçesi & Lojistik Köy",
      badge: "Sanayi & Lojistik",
      distance: "~26 km",
      duration: "~25 dk",
      description: "Türkoğlu merkez, organize sanayi ve lojistik merkezine hızlı transfer.",
      queryText: "Türkoğlu için havalimanı taksisi rica ediyorum.",
    },
    {
      destination: "Pazarcık İlçe Merkezi",
      badge: "İlçe Transferi",
      distance: "~44 km",
      duration: "~40 dk",
      description: "Pazarcık merkez ve mahallelerine kapıdan kapıya doğrudan ulaşım.",
      queryText: "Pazarcık transferi için araç ayarlamak istiyorum.",
    },
    {
      destination: "Elbistan & Afşin (VIP Transfer)",
      badge: "Kuzey İlçeler",
      distance: "~150 km",
      duration: "~1 sa 45 dk",
      description: "Geniş bagajlı araçlarla konforlu ve güvenli uzun yol transferi.",
      queryText: "Elbistan/Afşin için transfer ayarlamak istiyorum.",
    },
    {
      destination: "Göksun İlçe Merkezi",
      badge: "İlçe Transferi",
      distance: "~90 km",
      duration: "~1 sa 10 dk",
      description: "Göksun ve tüneller güzergahında kesintisiz yolculuk.",
      queryText: "Göksun transferi için taksi ayarlamak istiyorum.",
    },
    {
      destination: "Gaziantep / Adana / Şehirlerarası",
      badge: "Şehirlerarası VIP",
      distance: "Bölgesel Hat",
      duration: "Konforlu Filo",
      description: "Havalimanından çevre illere kapıdan kapıya özel VIP şoförlü transfer.",
      queryText: "Şehirlerarası transfer hizmeti için bilgi almak istiyorum.",
    },
  ] as RouteData[],

  // 7. ARAÇ FİLOSU
  fleet: [
    {
      type: "Standart Sarı Taksi",
      badge: "En Çok Tercih Edilen",
      capacity: "1 - 4 Kişi",
      luggage: "2 - 3 Büyük Valiz",
      features: ["Dijital Taksimetre", "Temassız POS Cihazı", "Klima", "Telefon Şarjı"],
      desc: "Bireysel yolcular, çiftler ve hafif bagajlı seyahatler için ideal şehir içi ve havalimanı ulaşımı.",
    },
    {
      type: "Geniş Bagajlı Aile Aracı",
      badge: "Aile & Ağır Bagaj",
      capacity: "1 - 4 Kişi",
      luggage: "3 - 4 Büyük Valiz",
      features: ["Ekstra Bagaj Alanı", "Çocuk Koltuğu (Talebe Göre)", "Klima", "Temassız Kart"],
      desc: "Uçaktan birden fazla büyük bavul veya bebek arabasıyla inen aileler için ferah bagajlı konfor.",
    },
    {
      type: "VIP Vito / Minibüs",
      badge: "Grup & VIP Transfer",
      capacity: "5 - 8 Kişi",
      luggage: "6 - 8 Büyük Valiz",
      features: ["Deri Koltuklar", "Geniş Diz Mesafesi", "VIP Şoför Hizmeti", "Şehirlerarası Özel Tahsis"],
      desc: "Grup seyahatleri, heyetler ve Elbistan, Afşin, Göksun gibi çevre ilçelere özel konforlu transfer.",
    },
  ] as FleetItem[],

  // 8. KULLANICI YORUMLARI
  reviews: [
    {
      author: "Ahmet Y.",
      role: "İstanbul Uçuşu Yolcusu",
      rating: 5,
      category: "Gece İnişi",
      comment:
        "“Uçağım gece 01:30'da indi, terminalden çıkar çıkmaz taksim kapıdaydı. Şoför bey çok kibar ve yardımseverdi. Hiç beklemedim.”",
      date: "2025-01-14",
    },
    {
      author: "Merve K.",
      role: "İş İnsanı",
      rating: 5,
      category: "İş Seyahati / İlçe",
      comment:
        "“Elbistan'a gitmem gerekiyordu, önceden WhatsApp'tan görüştük. Tam vaktinde karşıladılar. Çok rahat ve konforlu bir yolculuktu.”",
      date: "2025-02-02",
    },
    {
      author: "Selim T.",
      role: "Aile Yolcusu",
      rating: 5,
      category: "Aile Transferi",
      comment:
        "“Temassız kartla ödeme imkanı ve valizlerimizi yerleştirmedeki nezaketleri çok iyiydi. Kahramanmaraş'ın en kurumsal ve güvenilir durağı.”",
      date: "2025-02-18",
    },
  ] as ReviewItem[],

  // 9. SIKÇA SORULAN SORULAR (FAQPage Schema için)
  faqs: [
    {
      q: "Kahramanmaraş Havalimanında her zaman hazır taksi var mı?",
      a: "Evet, tarifeli tüm iç hat iniş saatlerinde resmi durağımızda sırayla araçlarımız beklemektedir. Uçaktan iner inmez taksinize hemen binebilirsiniz.",
    },
    {
      q: "Taksi durağı terminalde tam olarak nerede?",
      a: "Gelen yolcu çıkış kapısından adımınızı attığınız anda tam 15 metre karşınızda, resmi sarı taksi bekleme şeridinde yer almaktayız.",
    },
    {
      q: "Taksi ücret tarifesi nasıl belirlenmektedir?",
      a: "Tüm araçlarımızda Kahramanmaraş Büyükşehir Belediyesi UKOME resmi taksimetre tarifesi uygulanır. Sürpriz ek maliyet olmadan, şeffaf ve güvenilir taksimetre ile yolculuk yaparsınız. Çevre ilçe veya şehirlerarası transferler hakkında önceden bilgi almak için bize yazabilirsiniz.",
    },
    {
      q: "Uçağım rötar yaparsa ne olur?",
      a: "Önceden rezervasyon yapıp uçuş kodunuzu ilettiyseniz, uçağınızın teker koyduğu ana kadar rötar durumunu sistemden takip ederiz. Bekleme için hiçbir ek ücret alınmaz.",
    },
    {
      q: "Havalimanına gitmek için nasıl taksi çağırırım?",
      a: "Telefonla doğrudan 0344 235 46 46 numarasını arayabilir veya sitemizdeki hızlı rezervasyon formu / WhatsApp üzerinden adres ve saat bilgisi göndererek ön rezervasyon oluşturabilirsiniz. Şoförümüz tam vaktinde kapınızda olur.",
    },
  ] as FaqItem[],

  // 10. AVANTAJLAR (Neden Biz)
  advantages: [
    {
      icon: "verified_user",
      title: "Tek Resmi Durak",
      desc: "Tescilli plakalar, denetimli lisanslı şoförler ve %100 yolcu güvenliği.",
    },
    {
      icon: "flight",
      title: "Uçuş Rötar Takibi",
      desc: "Uçağınız gecikse de taksiniz cezasız olarak terminalde sizi bekler.",
    },
    {
      icon: "price_check",
      title: "Resmi Taksimetre",
      desc: "Sürpriz ek maliyet yok. UKOME onaylı şeffaf taksimetre garantisi.",
    },
    {
      icon: "luggage",
      title: "Bagaj Yardımı",
      desc: "Geniş bagajlı sedan ve kalabalık aileler için VIP Vito araç seçenekleri.",
    },
    {
      icon: "nest_clock_farsight_analog",
      title: "7/24 Kesintisiz Hat",
      desc: "İlk sabah seferinden gece yarısı son uçuşa kadar nöbetçi filo hazır.",
    },
    {
      icon: "credit_card",
      title: "Kartla Araçta Ödeme",
      desc: "Tüm araçlarımızda temassız kredi kartı ve banka kartı POS cihazı mevcuttur.",
    },
  ],
};
