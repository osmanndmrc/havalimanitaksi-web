/**
 * KAHRAMANMARAŞ HAVAALANI TAKSİ - MERKEZİ VERİ & SEO YAPILANDIRMASI
 * 
 * İşletme Resmi Adı: "Kahramanmaraş Havaalanı Taksi"
 */

export interface VehicleSpec {
  icon: string;
  title: string;
  value: string;
  desc: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export const siteData = {
  // 1. KURUMSAL VE GENEL BİLGİLER
  brand: {
    name: "Kahramanmaraş Havaalanı Taksi",
    shortName: "KCM Havaalanı Taksi",
    title: "Taksi Karşılama",
    slogan: "Havaalanındaki Tek Resmi Taksi Durağı",
    license: "Kahramanmaraş Havaalanı Resmi Taksi Durağı",
    airportName: "Kahramanmaraş Havaalanı",
    airportIata: "KCM",
    airportIcao: "LTCN",
    legalName: "Kahramanmaraş Havaalanı Taksi Motorlu Taşıyıcılar Kooperatifi",
    yearEstablished: 1998,
  },

  // 2. İLETİŞİM VE ÇAĞRI BİLGİLERİ
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
      "Merhaba Kahramanmaraş Havaalanı Taksi, taksi rezervasyonu ve karşılama hakkında bilgi almak istiyorum.",

    // E-posta
    email: "info@marashavaalanitaksi.com",

    // Çalışma Saatleri
    workingHours: "7/24 Kesintisiz (Tüm Uçuşlar ve Gece İnişleri Dahil)",
    workingHoursSpecification: "Mo-Su 00:00-24:00",
  },

  // 3. KONUM, GOOGLE MAPS & HARİTA VERİLERİ (Geo SEO)
  location: {
    address: "Kahramanmaraş Havaalanı Gelen Yolcu Terminal Çıkışı",
    district: "Dulkadiroğlu",
    city: "Kahramanmaraş",
    province: "Kahramanmaraş",
    postalCode: "46060",
    country: "Türkiye",
    countryCode: "TR",

    // Coğrafi Koordinatlar
    latitude: 37.5386,
    longitude: 36.9744,
    geoRegion: "TR-46",
    geoPlacename: "Kahramanmaraş",

    // Google Place ID
    googlePlaceId: "ChIJ1ZgK6_d9NBER4y9eU-Q3q50",

    // Google Maps Doğrudan Arama / Yol Tarifi Linki
    googleMapsLink:
      "https://maps.google.com/?q=Kahramanmara%C5%9F+Havaalan%C4%B1+Taksi+Dura%C4%9F%C4%B1",

    // Google Maps Harita Gömme (Embed Iframe) URL'si
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12648.562145398246!2d36.9656445!3d37.5386121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152ddfd6eb0a68d5%3A0x9daba4e4535e2fe2!2sKahramanmara%C5%9F%20Havaliman%C4%B1!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str",

    // Terminal mesafesi
    terminalProximity: "Terminal Çıkışına 15 Metre",
  },

  // 4. GELİŞMİŞ SEO VE SOSYAL MEDYA BİLGİLERİ
  seo: {
    siteUrl: "https://www.marashavaalanitaksi.com",
    title: "Kahramanmaraş Havaalanı Taksi | 7/24 Kesintisiz Resmi Havaalanı Transferi",
    titleTemplate: "%s | Kahramanmaraş Havaalanı Taksi",
    description:
      "Kahramanmaraş Havaalanı (KCM) tek resmi ve lisanslı taksi durağı. Gelen yolcu çıkış kapısında 7/24 hazır taksiler. Onikişubat, Dulkadiroğlu, Türkoğlu, Pazarcık, Elbistan ve şehirlerarası sabit, güvenilir taksi transferi.",
    keywords: [
      "Kahramanmaraş Havaalanı Taksi",
      "Kahramanmaraş Havalimanı Taksi",
      "Maraş Havaalanı Taksi Durağı",
      "KCM Havaalanı Taksi",
      "Kahramanmaraş Havaalanı Transfer",
      "Maraş Taksi",
      "Kahramanmaraş Taksi Numarası",
      "Havaalanı Taksi Çağır",
      "Havalimanı Taksi Çağır",
      "Elbistan Havaalanı Transfer",
      "Türkoğlu Havaalanı Taksi",
      "Dulkadiroğlu Taksi",
      "Onikişubat Havaalanı Taksi",
      "7 24 Havaalanı Taksi Maraş",
    ],
    themeColor: "#facc15",
    // Sitemap için son içerik güncelleme tarihi
    lastUpdated: "2026-10-29",
    // Hero görseli (geçici: tasarım aracından gelen dış link, kendi fotoğrafımızla değiştirilmeli)
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_lBQqkXjDCQ0tWWCLL7gL3SB4SXNvapr5-LBphTub7bTz3yFAybadOinQ9qiHQHiJ_57RjYtVsMCoEPfePa5Qrqn8MCe_IfFkUvVPJq8qh0x6UO6S4MsOcLuw6_1SFHpqnVNRF0LLoQ5ERw5N_w1nAogn4uLmGEtWlfrhoJixLdopVzA6sq3DvsIIuC6fkVs7NTUVhZHnEJJ98g0serWtsL8KaKoObGqXDyAr9pI_4G2JOyOXQclQ",
  },

  // 5. ARAÇ ÖZELLİKLERİ VE KAPASİTE STANDARTLARI (Global Bilgilendirme)
  vehicleSpecs: {
    title: "Araç Özellikleri & Kapasite Standartları",
    subtitle:
      "Havaalanı resmi taksilerimiz yolcularımızın konforu, bagaj güvenliği ve dakik ulaşımı için standart donanımlara sahiptir.",
    passengerCapacity: "Azami 4 Yolcu",
    luggageCapacity: "3-4 Büyük Boy Valiz + El Çantaları",
    specs: [
      {
        icon: "groups",
        title: "Yolcu Kapasitesi",
        value: "4 Kişilik Standart",
        desc: "Yasal taşıma mevzuatına uygun, 4 yetişkin yolcuya kadar ferah oturma alanı.",
      },
      {
        icon: "luggage",
        title: "Bagaj Hacmi",
        value: "3-4 Büyük Valiz",
        desc: "Geniş sedan bagajı; büyük boy valizler, kabin boy çantalar ve bebek arabaları için uygundur.",
      },
      {
        icon: "ac_unit",
        title: "Klima & Havalandırma",
        value: "4 Mevsim İklimlendirme",
        desc: "Yazın serin, kışın sıcacık, düzenli bakımı yapılan hijyenik hava filtreleri.",
      },
      {
        icon: "credit_card",
        title: "Araçta Kartla Ödeme",
        value: "Temassız POS Cihazı",
        desc: "Tüm banka ve kredi kartları ile araç içinde komisyonsuz, güvenli temassız ödeme.",
      },
      {
        icon: "child_care",
        title: "Çocuk / Bebek Koltuğu",
        value: "Önceden Talep Üzerine",
        desc: "Rezervasyon esnasında belirttiğiniz takdirde bebek veya çocuk oto koltuğu hazır bulundurulur.",
      },
      {
        icon: "speed",
        title: "Resmi Taksimetre",
        value: "Onaylı & Mühürlü",
        desc: "Sürpriz fiyat yok; resmi taksimetre uygulanır.",
      },
      {
        icon: "sanitizer",
        title: "Hijyen & Temizlik",
        value: "Düzenli Dezenfekte",
        desc: "Her vardiya öncesi detaylı iç ve dış temizliği yapılan bakımlı araç filosu.",
      },
      {
        icon: "battery_charging_full",
        title: "Yolcu Donanımları",
        value: "Hızlı Telefon Şarjı",
        desc: "Yolculuk esnasında Type-C / Lightning telefon şarj imkanı ve navigasyonlu rota takibi.",
      },
    ] as VehicleSpec[],
  },

  // 6. SIKÇA SORULAN SORULAR
  faqs: [
    {
      q: "Kahramanmaraş Havaalanında her zaman hazır taksi var mı?",
      a: "Evet, tarifeli tüm iç hat iniş saatlerinde resmi durağımızda sırayla araçlarımız beklemektedir. Uçaktan iner inmez taksinize hemen binebilirsiniz.",
    },
    {
      q: "Taksi durağı terminalde tam olarak nerede?",
      a: "Gelen yolcu çıkış kapısından adımınızı attığınız anda tam 15 metre karşınızda, resmi sarı taksi bekleme şeridinde yer almaktayız.",
    },
    {
      q: "Taksi ücret tarifesi nasıl belirlenmektedir?",
      a: "Tüm araçlarımızda resmi taksimetre tarifesi uygulanır. Sürpriz ek maliyet olmadan, şeffaf ve güvenilir taksimetre ile yolculuk yaparsınız. Çevre ilçe veya şehirlerarası transferler hakkında önceden bilgi almak için bize yazabilirsiniz.",
    },
    {
      q: "Uçağım rötar yaparsa ne olur?",
      a: "Önceden rezervasyon yapıp uçuş kodunuzu ilettiyseniz, uçağınızın teker koyduğu ana kadar rötar durumunu sistemden takip ederiz. Bekleme için hiçbir ek ücret alınmaz.",
    },
    {
      q: "Havaalanına gitmek için nasıl taksi çağırırım?",
      a: "Telefonla doğrudan 0344 235 46 46 numarasını arayabilir veya sitemizdeki hızlı rezervasyon formu / WhatsApp üzerinden adres ve saat bilgisi göndererek ön rezervasyon oluşturabilirsiniz. Şoförümüz tam vaktinde kapınızda olur.",
    },
    {
      q: "Araçta kredi kartı ile ödeme yapabilir miyim?",
      a: "Evet. Tüm araçlarımızda temassız POS cihazı bulunur; nakit, banka kartı ve kredi kartı ile ödeme yapabilirsiniz.",
    },
    {
      q: "Bir taksiye kaç kişi ve kaç valiz sığar?",
      a: "Taksilerimiz yasal olarak en fazla 4 yolcu taşır. Bagajda 3-4 büyük boy valiz ile el çantaları rahatlıkla taşınır.",
    },
    {
      q: "Çocuk veya bebek koltuğu talep edebilir miyim?",
      a: "Evet. Rezervasyon sırasında belirtmeniz halinde bebek veya çocuk oto koltuğu hazır bulundurulur.",
    },
    {
      q: "İlçelere ve başka şehirlere transfer yapıyor musunuz?",
      a: "Evet. Havaalanından Kahramanmaraş'ın tüm ilçelerine, ayrıca Gaziantep ve Adana'ya kapıdan kapıya transfer yapıyoruz. Uzun mesafeler için önceden rezervasyon öneririz.",
    },
  ] as FaqItem[],

  // 7. AVANTAJLAR (Neden Biz)
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
      desc: "Sürpriz ek maliyet yok. Şeffaf resmi taksimetre garantisi.",
    },
    {
      icon: "luggage",
      title: "Bagaj Yardımı",
      desc: "Geniş bagajlı sedan ve aileler için ferah bagajlı araç seçenekleri.",
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

  // 8. SAYFA MENÜSÜ (Header, footer ve mobil menüde kullanılır)
  nav: [
    { href: "/rezervasyon", label: "Rezervasyon", icon: "calendar_month" },
    { href: "/transfer", label: "Transfer Bölgeleri", icon: "route" },
    { href: "/havalimani-rehberi", label: "Durak Nerede?", icon: "location_on" },
    { href: "/arac-ozellikleri", label: "Araçlarımız", icon: "directions_car" },
    { href: "/sss", label: "SSS", icon: "help_outline" },
    { href: "/hakkimizda", label: "Hakkımızda", icon: "verified_user" },
    { href: "/iletisim", label: "İletişim", icon: "contact_phone" },
  ],
};
