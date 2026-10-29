/**
 * TRANSFER BÖLGELERİ (İlçe ve şehirlerarası sayfaları)
 *
 * Her kayıt /transfer/[slug] altında ayrı bir sayfa üretir.
 * Mesafe ve süreler havaalanından yaklaşık karayolu değerleridir;
 * yayından önce işletme tarafından kontrol edilmelidir.
 */

export interface DistrictFaq {
  q: string;
  a: string;
}

export interface District {
  slug: string;
  name: string;
  /** Ayrılma ekiyle: "Afşin'den", "Gaziantep'ten" */
  fromName: string;
  kind: "ilce" | "sehirlerarasi";
  /** Havaalanından yaklaşık karayolu mesafesi (km) */
  distanceKm: number;
  /** Yaklaşık yolculuk süresi */
  duration: string;
  /** Sayfa açıklaması (meta description, ~150 karakter) */
  metaDescription: string;
  /** Giriş paragrafı */
  intro: string;
  /** Güzergah bilgisi */
  route: string;
  /** Bu bölgeye kimler, ne zaman gidiyor */
  useCase: string;
  /** Sık bırakılan nokta türleri / bilinen yerler */
  dropOffs: string[];
  faqs: DistrictFaq[];
}

export const districts: District[] = [
  {
    slug: "dulkadiroglu",
    name: "Dulkadiroğlu",
    fromName: "Dulkadiroğlu'ndan",
    kind: "ilce",
    distanceKm: 8,
    duration: "10-15 dakika",
    metaDescription:
      "Kahramanmaraş Havaalanı'ndan Dulkadiroğlu'na 7/24 resmi taksi. Terminal çıkışında hazır araç, yaklaşık 10-15 dakikada adresinizdesiniz.",
    intro:
      "Havaalanı Dulkadiroğlu ilçe sınırları içinde yer aldığı için bu güzergah en kısa ve en sık kullanılan transferimizdir. Terminalden çıktığınızda sıradaki taksiye binip birkaç dakika içinde mahallenize ulaşabilirsiniz.",
    route:
      "Havaalanı yolundan şehir merkezi yönüne ilerlenir ve Dulkadiroğlu mahallelerine doğrudan bağlanılır. Trafiğin yoğun olduğu akşam saatlerinde süre birkaç dakika uzayabilir.",
    useCase:
      "Eve dönen yolcular, merkezdeki otellerde konaklayacak misafirler ve hastane ziyaretine gelenler bu güzergahı en çok kullanan yolculardır.",
    dropOffs: ["Konut mahalleleri", "Şehir merkezi otelleri", "Hastaneler", "Resmi kurumlar"],
    faqs: [
      {
        q: "Havaalanından Dulkadiroğlu'na taksi ne kadar sürer?",
        a: "Normal trafikte yaklaşık 10-15 dakika sürer. Ücret, araçtaki resmi taksimetreye göre hesaplanır.",
      },
      {
        q: "Dulkadiroğlu'ndan havaalanına gitmek için ne kadar önce taksi çağırmalıyım?",
        a: "İç hat uçuşları için kalkıştan en az 1,5-2 saat önce havaalanında olmanızı öneririz. Rezervasyonu bir gün önceden veya en geç birkaç saat önce yapmanız yeterlidir.",
      },
    ],
  },
  {
    slug: "onikisubat",
    name: "Onikişubat",
    fromName: "Onikişubat'tan",
    kind: "ilce",
    distanceKm: 12,
    duration: "15-20 dakika",
    metaDescription:
      "Kahramanmaraş Havaalanı - Onikişubat taksi transferi. Terminalde bekleyen resmi taksiler, yaklaşık 15-20 dakikalık yolculuk, 7/24 hizmet.",
    intro:
      "Onikişubat, şehrin batı ve kuzey kesimini kapsayan merkez ilçedir. Havaalanından Onikişubat'taki ev, otel veya kampüs adresinize terminal çıkışından doğrudan taksiyle ulaşabilirsiniz.",
    route:
      "Havaalanından şehir merkezi üzerinden geçilerek Onikişubat'a ulaşılır. Varış noktanıza göre ana bulvarlar veya çevre yolu tercih edilir.",
    useCase:
      "Öğrenciler, üniversite ziyaretine gelen akademisyenler, iş seyahatindeki yolcular ve aile ziyaretine gelenler sık kullanır.",
    dropOffs: ["Üniversite kampüsü", "Konut mahalleleri", "Oteller", "Otogar"],
    faqs: [
      {
        q: "Havaalanından Onikişubat'a taksi var mı?",
        a: "Evet. Tüm tarifeli iniş saatlerinde terminal çıkışında resmi taksilerimiz bekler. Bekleme yapmadan Onikişubat'taki adresinize gidebilirsiniz.",
      },
      {
        q: "Gece inen uçaklar için taksi bulabilir miyim?",
        a: "Durağımız 7/24 çalışır. Gece inişlerinde de terminalde araç bulunur; isterseniz uçuş numaranızla önceden rezervasyon da yapabilirsiniz.",
      },
    ],
  },
  {
    slug: "turkoglu",
    name: "Türkoğlu",
    fromName: "Türkoğlu'ndan",
    kind: "ilce",
    distanceKm: 30,
    duration: "30-35 dakika",
    metaDescription:
      "Kahramanmaraş Havaalanı'ndan Türkoğlu'na taksi. Lojistik ve sanayi bölgesine iş seyahatleri için 7/24 resmi havaalanı taksisi, yaklaşık 30 dakika.",
    intro:
      "Türkoğlu, havaalanının güneybatısında yer alan ve sanayi ile lojistik yatırımlarıyla öne çıkan bir ilçedir. İş seyahatiyle gelen yolcular için terminalden doğrudan transfer sağlıyoruz.",
    route:
      "Havaalanından şehir çıkışına ilerlenir ve Türkoğlu yönündeki ana karayolu kullanılır. Yol büyük ölçüde bölünmüş yoldur ve yolculuk yaklaşık yarım saat sürer.",
    useCase:
      "Lojistik ve sanayi bölgesine giden iş insanları, fabrika ziyaretleri ve ilçeye dönen yolcular bu güzergahı tercih eder.",
    dropOffs: ["Lojistik merkezi", "Organize sanayi bölgesi", "İlçe merkezi"],
    faqs: [
      {
        q: "Havaalanından Türkoğlu'na ne kadar sürede gidilir?",
        a: "Trafik durumuna göre yaklaşık 30-35 dakika sürer.",
      },
      {
        q: "Türkoğlu'ndan havaalanına dönüş için taksi ayarlayabilir miyim?",
        a: "Evet. Uçuş saatinizi ve adresinizi WhatsApp'tan iletin; dönüşünüz için adresinizden alış planlayalım.",
      },
    ],
  },
  {
    slug: "pazarcik",
    name: "Pazarcık",
    fromName: "Pazarcık'tan",
    kind: "ilce",
    distanceKm: 45,
    duration: "40-45 dakika",
    metaDescription:
      "Kahramanmaraş Havaalanı - Pazarcık taksi transferi. Terminal çıkışından 7/24 resmi taksi, yaklaşık 40-45 dakikalık güvenli yolculuk.",
    intro:
      "Pazarcık, havaalanının güneydoğusunda, Gaziantep yolu üzerinde yer alır. Uçaktan iner inmez terminal çıkışındaki resmi taksimize binip Pazarcık'taki adresinize gidebilirsiniz.",
    route:
      "Havaalanından Gaziantep yönündeki karayoluna çıkılarak Pazarcık'a ulaşılır. Yolculuk yaklaşık 40-45 dakika sürer.",
    useCase:
      "Memleketine dönen yolcular, ilçedeki ailesini ziyarete gelenler ve bayram dönemlerinde gurbetten gelen misafirler sık kullanır.",
    dropOffs: ["İlçe merkezi", "Köy ve mahalleler", "Kamu kurumları"],
    faqs: [
      {
        q: "Pazarcık'ın köylerine de gidiyor musunuz?",
        a: "Evet. Pazarcık merkezine ve bağlı köylere transfer sağlıyoruz. Adresinizi rezervasyon sırasında bildirmeniz yeterlidir.",
      },
      {
        q: "Pazarcık'tan havaalanına dönüş için de taksi ayarlayabilir miyim?",
        a: "Evet. Uçuş saatinizi ve adresinizi WhatsApp'tan iletin; dönüşünüz için adresinizden alış planlayalım.",
      },
    ],
  },
  {
    slug: "elbistan",
    name: "Elbistan",
    fromName: "Elbistan'dan",
    kind: "ilce",
    distanceKm: 155,
    duration: "yaklaşık 2 saat",
    metaDescription:
      "Kahramanmaraş Havaalanı'ndan Elbistan'a taksi transferi. Önceden rezervasyonla terminalde karşılama, yaklaşık 2 saatlik konforlu yolculuk.",
    intro:
      "Elbistan, Kahramanmaraş'ın kuzeyindeki en büyük ilçelerden biridir. Uzun mesafe olduğu için bu güzergahta önceden rezervasyon yapmanızı öneriyoruz; uçağınız indiğinde aracınız terminalde hazır olur.",
    route:
      "Havaalanından kuzey yönündeki karayolu izlenerek Elbistan'a ulaşılır. Yol yaklaşık 2 saat sürer; kış aylarında hava ve yol durumuna göre süre uzayabilir.",
    useCase:
      "Memleketine dönen yolcular, enerji ve sanayi tesislerine iş seyahatine gelenler ve kamu görevlileri bu güzergahı kullanır.",
    dropOffs: ["İlçe merkezi", "Enerji ve sanayi tesisleri", "Hastane", "Köy ve beldeler"],
    faqs: [
      {
        q: "Havaalanından Elbistan'a taksi ne kadar sürer?",
        a: "Yol ve hava koşullarına bağlı olarak yaklaşık 2 saat sürer.",
      },
      {
        q: "Elbistan transferi için önceden rezervasyon gerekli mi?",
        a: "Zorunlu değildir ancak uzun mesafe olduğu için önerilir. Uçuş numaranızı iletirseniz rötar durumunu takip eder, aracınızı iniş saatinize göre hazırlarız.",
      },
      {
        q: "Kış aylarında Elbistan yolu açık mı?",
        a: "Yol genellikle açıktır. Yoğun kar yağışı olan günlerde şoförümüz güzergahı ve süreyi önceden sizinle paylaşır.",
      },
    ],
  },
  {
    slug: "afsin",
    name: "Afşin",
    fromName: "Afşin'den",
    kind: "ilce",
    distanceKm: 165,
    duration: "yaklaşık 2 saat 15 dakika",
    metaDescription:
      "Kahramanmaraş Havaalanı - Afşin taksi transferi. Eshab-ı Kehf ziyareti ve ilçe merkezine 7/24 resmi havaalanı taksisi, önceden rezervasyon imkanı.",
    intro:
      "Afşin, Elbistan'ın batısında yer alan ve Eshab-ı Kehf ziyaret alanıyla bilinen bir ilçedir. Havaalanından Afşin'e uzun mesafe transfer için önceden rezervasyonla terminalde karşılama yapıyoruz.",
    route:
      "Havaalanından kuzey yönündeki karayolu üzerinden Elbistan istikametine ilerlenir ve Afşin'e bağlanılır. Yolculuk yaklaşık 2 saat 15 dakika sürer.",
    useCase:
      "Eshab-ı Kehf'i ziyarete gelen misafirler, memleketine dönen yolcular ve bölgedeki enerji tesislerine iş seyahatine gelenler tercih eder.",
    dropOffs: ["İlçe merkezi", "Eshab-ı Kehf ziyaret alanı", "Enerji tesisleri"],
    faqs: [
      {
        q: "Havaalanından doğrudan Eshab-ı Kehf'e gidebilir miyim?",
        a: "Evet. Ziyaret alanına doğrudan transfer yapıyoruz. Dönüş için de aracınızı önceden planlayabilirsiniz.",
      },
      {
        q: "Afşin'e taksi ne kadar sürer?",
        a: "Yol ve hava koşullarına göre yaklaşık 2 saat 15 dakika sürer.",
      },
    ],
  },
  {
    slug: "goksun",
    name: "Göksun",
    fromName: "Göksun'dan",
    kind: "ilce",
    distanceKm: 100,
    duration: "yaklaşık 1 saat 30 dakika",
    metaDescription:
      "Kahramanmaraş Havaalanı'ndan Göksun'a taksi. Yayla ve ilçe merkezi transferleri için 7/24 resmi havaalanı taksisi, yaklaşık 1,5 saat.",
    intro:
      "Göksun, Kahramanmaraş'ın kuzeybatısında, yaylaları ve serin iklimiyle bilinen bir ilçedir. Özellikle yaz aylarında yayla ziyaretleri için havaalanından Göksun'a sık transfer yapıyoruz.",
    route:
      "Havaalanından kuzeybatı yönündeki dağ yolu izlenerek Göksun'a ulaşılır. Yolculuk yaklaşık 1,5 saat sürer; kışın kar ve buzlanma süreyi uzatabilir.",
    useCase:
      "Yaz döneminde yaylaya çıkan aileler, memleketine dönen yolcular ve kamu görevlileri bu güzergahı kullanır.",
    dropOffs: ["İlçe merkezi", "Yaylalar", "Köy ve beldeler"],
    faqs: [
      {
        q: "Göksun yaylalarına da gidiyor musunuz?",
        a: "Evet. Yol durumu uygun olan yayla ve köylere transfer sağlıyoruz. Adresinizi önceden bildirmeniz yeterlidir.",
      },
      {
        q: "Kışın Göksun'a transfer yapılıyor mu?",
        a: "Evet, kış aylarında da transfer yapıyoruz. Yoğun kar yağışında şoförümüz yol durumu ve süre konusunda sizi önceden bilgilendirir.",
      },
    ],
  },
  {
    slug: "andirin",
    name: "Andırın",
    fromName: "Andırın'dan",
    kind: "ilce",
    distanceKm: 80,
    duration: "yaklaşık 1 saat 20 dakika",
    metaDescription:
      "Kahramanmaraş Havaalanı - Andırın taksi transferi. Terminal çıkışından veya önceden rezervasyonla 7/24 resmi taksi, yaklaşık 1 saat 20 dakika.",
    intro:
      "Andırın, Kahramanmaraş'ın batısında, Toros eteklerinde yer alan bir ilçedir. Havaalanından Andırın merkezine ve bağlı köylere transfer hizmeti veriyoruz.",
    route:
      "Havaalanından batı yönündeki karayolu izlenerek Andırın'a ulaşılır. Yolculuk yaklaşık 1 saat 20 dakika sürer.",
    useCase:
      "Memleketine dönen yolcular, aile ziyaretine gelenler ve bayram dönemlerinde gurbetten gelen misafirler kullanır.",
    dropOffs: ["İlçe merkezi", "Köy ve mahalleler"],
    faqs: [
      {
        q: "Havaalanından Andırın'a ne kadar sürede gidilir?",
        a: "Yol koşullarına göre yaklaşık 1 saat 20 dakika sürer.",
      },
      {
        q: "Andırın'dan havaalanına gelmek için taksi çağırabilir miyim?",
        a: "Evet. Uçuş saatinizi ve adresinizi iletmeniz yeterli; aracınızı uçuşunuza yetişecek şekilde planlarız.",
      },
    ],
  },
  {
    slug: "caglayancerit",
    name: "Çağlayancerit",
    fromName: "Çağlayancerit'ten",
    kind: "ilce",
    distanceKm: 70,
    duration: "yaklaşık 1 saat 15 dakika",
    metaDescription:
      "Kahramanmaraş Havaalanı'ndan Çağlayancerit'e taksi. Önceden rezervasyonla terminalde karşılama, 7/24 resmi havaalanı taksisi.",
    intro:
      "Çağlayancerit, Kahramanmaraş'ın doğusunda yer alan bir ilçedir. Havaalanından ilçe merkezine ve köylere önceden rezervasyonla transfer yapıyoruz.",
    route:
      "Havaalanından doğu yönündeki karayolu izlenerek Çağlayancerit'e ulaşılır. Yolculuk yaklaşık 1 saat 15 dakika sürer.",
    useCase:
      "Memleketine dönen yolcular ve aile ziyaretine gelen misafirler bu güzergahı tercih eder.",
    dropOffs: ["İlçe merkezi", "Köy ve mahalleler"],
    faqs: [
      {
        q: "Çağlayancerit'e taksi ne kadar sürer?",
        a: "Yol koşullarına göre yaklaşık 1 saat 15 dakika sürer.",
      },
      {
        q: "Bu güzergah için rezervasyon yapmam gerekiyor mu?",
        a: "Terminalde araç bulabilirsiniz, ancak uzun mesafe olduğu için önceden rezervasyon yapmanızı öneririz.",
      },
    ],
  },
  {
    slug: "ekinozu",
    name: "Ekinözü",
    fromName: "Ekinözü'nden",
    kind: "ilce",
    distanceKm: 170,
    duration: "yaklaşık 2 saat 15 dakika",
    metaDescription:
      "Kahramanmaraş Havaalanı - Ekinözü taksi transferi. Uzun mesafe için önceden rezervasyon, terminalde karşılama ve 7/24 resmi taksi hizmeti.",
    intro:
      "Ekinözü, Elbistan'ın doğusunda yer alan bir ilçedir. Uzun mesafe olduğu için bu güzergahta aracınızı uçuşunuza göre önceden planlıyoruz.",
    route:
      "Havaalanından kuzey yönündeki karayolu ile Elbistan istikametine ilerlenir ve Ekinözü'ne bağlanılır. Yolculuk yaklaşık 2 saat 15 dakika sürer.",
    useCase:
      "Memleketine dönen yolcular ve ilçeye görevli olarak gelen kamu personeli bu güzergahı kullanır.",
    dropOffs: ["İlçe merkezi", "Köy ve beldeler"],
    faqs: [
      {
        q: "Havaalanından Ekinözü'ne taksi ne kadar sürer?",
        a: "Yol ve hava koşullarına göre yaklaşık 2 saat 15 dakika sürer.",
      },
      {
        q: "Uçağım rötar yaparsa ne olur?",
        a: "Uçuş numaranızı ilettiyseniz iniş saatinizi takip ederiz. Rötar nedeniyle bekleme için ek ücret alınmaz.",
      },
    ],
  },
  {
    slug: "nurhak",
    name: "Nurhak",
    fromName: "Nurhak'tan",
    kind: "ilce",
    distanceKm: 120,
    duration: "yaklaşık 1 saat 45 dakika",
    metaDescription:
      "Kahramanmaraş Havaalanı'ndan Nurhak'a taksi transferi. Önceden rezervasyonla terminalde karşılama ve 7/24 resmi havaalanı taksisi.",
    intro:
      "Nurhak, Kahramanmaraş'ın kuzeydoğusunda, dağlık bir bölgede yer alan bir ilçedir. Havaalanından Nurhak'a transfer için önceden rezervasyon yapmanızı öneriyoruz.",
    route:
      "Havaalanından kuzeydoğu yönündeki karayolu izlenerek Nurhak'a ulaşılır. Yolculuk yaklaşık 1 saat 45 dakika sürer; kışın yol koşulları süreyi etkileyebilir.",
    useCase:
      "Memleketine dönen yolcular, aile ziyaretine gelenler ve görevli kamu personeli kullanır.",
    dropOffs: ["İlçe merkezi", "Köy ve beldeler"],
    faqs: [
      {
        q: "Nurhak'a taksi ne kadar sürer?",
        a: "Yol ve hava koşullarına göre yaklaşık 1 saat 45 dakika sürer.",
      },
      {
        q: "Nurhak'tan havaalanına dönüş ayarlayabilir miyim?",
        a: "Evet. Uçuş saatinizi ve adresinizi iletin; dönüşünüz için adresinizden alış planlayalım.",
      },
    ],
  },
  {
    slug: "gaziantep",
    name: "Gaziantep",
    fromName: "Gaziantep'ten",
    kind: "sehirlerarasi",
    distanceKm: 90,
    duration: "yaklaşık 1 saat 15 dakika",
    metaDescription:
      "Kahramanmaraş Havaalanı'ndan Gaziantep'e şehirlerarası taksi transferi. Kapıdan kapıya, önceden rezervasyonla 7/24 güvenli yolculuk.",
    intro:
      "Kahramanmaraş Havaalanı'na inen ve Gaziantep'e geçecek yolcular için kapıdan kapıya şehirlerarası taksi transferi sağlıyoruz. Otobüs aktarması yapmadan doğrudan adresinize ulaşırsınız.",
    route:
      "Havaalanından Pazarcık üzerinden Gaziantep yönündeki karayolu izlenir. Yolculuk varış noktanıza göre yaklaşık 1 saat 15 dakika sürer.",
    useCase:
      "İş seyahatindeki yolcular, Gaziantep'te yaşayan ancak Kahramanmaraş uçuşunu tercih eden misafirler ve aile ziyaretine gelenler kullanır.",
    dropOffs: ["Şehir merkezi ve oteller", "Organize sanayi bölgeleri", "Hastaneler", "Konut adresleri"],
    faqs: [
      {
        q: "Gaziantep transferi ücreti nasıl belirlenir?",
        a: "Şehirlerarası transferlerde ücret bilgisini rezervasyon sırasında önceden paylaşıyoruz. Detay için bize WhatsApp'tan yazabilirsiniz.",
      },
      {
        q: "Gaziantep'ten Kahramanmaraş Havaalanı'na da taksi gönderiyor musunuz?",
        a: "Evet. Uçuş saatinizi ve adresinizi iletirseniz Gaziantep'teki adresinizden alıp havaalanına ulaştırırız.",
      },
    ],
  },
  {
    slug: "adana",
    name: "Adana",
    fromName: "Adana'dan",
    kind: "sehirlerarasi",
    distanceKm: 190,
    duration: "yaklaşık 2 saat 15 dakika",
    metaDescription:
      "Kahramanmaraş Havaalanı - Adana şehirlerarası taksi transferi. Otoyol üzerinden konforlu, kapıdan kapıya ve önceden rezervasyonlu yolculuk.",
    intro:
      "Kahramanmaraş Havaalanı ile Adana arasında kapıdan kapıya şehirlerarası taksi transferi yapıyoruz. Aktarma ve bekleme olmadan doğrudan adresinize gidersiniz.",
    route:
      "Havaalanından Osmaniye yönüne ilerlenir ve otoyol üzerinden Adana'ya ulaşılır. Yolculuk yaklaşık 2 saat 15 dakika sürer.",
    useCase:
      "İş seyahatindeki yolcular, Adana'ya geçecek aileler ve bağlantılı yolculuk yapan misafirler tercih eder.",
    dropOffs: ["Şehir merkezi ve oteller", "Hastaneler", "Konut adresleri"],
    faqs: [
      {
        q: "Adana transferi için ne kadar önce rezervasyon yapmalıyım?",
        a: "En az birkaç saat önceden rezervasyon yapmanızı öneririz. Uçuş numaranızı iletirseniz iniş saatinize göre aracınızı hazırlarız.",
      },
      {
        q: "Adana transferinde ücret önceden belli mi?",
        a: "Evet. Şehirlerarası transferlerde ücret bilgisini rezervasyon sırasında önceden paylaşıyoruz.",
      },
    ],
  },
];

export function getDistrict(slug: string): District | undefined {
  return districts.find((d) => d.slug === slug);
}
