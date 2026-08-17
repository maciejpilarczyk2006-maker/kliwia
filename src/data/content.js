// ======================================================
// KLIWIA — ZAWARTOŚĆ STRONY
// ======================================================
//
// Ten plik zawiera treści, które mogą być później
// zmieniane bez ingerowania w komponenty strony.
//
// Docelowo tutaj podmienimy:
// - dane salonu
// - teksty
// - linki social media
// - zabiegi
// - ceny
// - zdjęcia
// - adres i mapę
//
// ======================================================


// --------------------
// SALON
// --------------------
import certificate1 from "../assets/images/certificates/certificate-1.jpg";
import certificate2 from "../assets/images/certificates/certificate-2.jpg";
import certificate3 from "../assets/images/certificates/certificate-3.jpg";
import certificate4 from "../assets/images/certificates/certificate-4.jpg";
import certificate5 from "../assets/images/certificates/certificate-5.jpg";
import certificate6 from "../assets/images/certificates/certificate-6.jpg";
import certificate7 from "../assets/images/certificates/certificate-7.jpg";
import certificate8 from "../assets/images/certificates/certificate-8.jpg";

import oczyszczaniewodorowe from "../assets/images/services/oczyszczanie-wodorowe-1.jpg";
import apeel from "../assets/images/services/a-peel.jpg";
import mpeel from "../assets/images/services/m-peel.jpg";
import sushiCeremony from "../assets/images/services/sushi-ceremony.jpg";
import gpeel from "../assets/images/services/g-peel.jpg";
import kosmetyki from "../assets/images/about/purles.png";
import dezynfekcja from "../assets/images/about/dezynfekcja-1.jpg";

export const certificatesSection = {
  eyebrow: "CERTYFIKATY",

  title: "Wiedza, która stoi za każdym zabiegiem.",

  description:
    "Regularnie rozwijam swoje umiejętności i poszerzam wiedzę, aby pracować w oparciu o aktualne standardy, sprawdzone techniki i bezpieczne rozwiązania.",

  certificates: [
    {
      id: 1,
      title: "Biomedica",
      description:
        "Makijaż permanentny ust",
      year: "2018",
      image: certificate1,
    },
    {
      id: 2,
      title: "Biomedica Beauty Academy",
      description:
        "Mikropigmentacja brwi metodą 3D z użyciem kamuflaży",
      year: "2025",
      image: certificate2,
    },
    {
      id: 3,
      title: "Biomedica",
      description:
        "Szkolenie z mikropigmentacji brwi Ombre-Basic",
      year: "2024",
      image: certificate3,
    },
    {
      id: 4,
      title: "Biomedica Beauty Academy",
      description:
        "Pigmentacja kreski dekoracyjnej",
      year: "2020",
      image: certificate4,
    },
    {
      id: 5,
      title: "Hydroderm",
      description:
        "Ukończone szkolenie umożliwiające pracę z urządzeniem Hydroderm Original",
      year: "2022",
      image: certificate5,
    },
    {
      id: 6,
      title: "Este Belle - Akademia Terapii Manualnych",
      description:
        "Ukończenie kursu z zakresu: Masaż Kobido",
      year: "2026",
      image: certificate6,
    },
    {
      id: 7,
      title: "Biomedica",
      description:
        "Szkolenie z mikropigmentacji brwi metodą włosa",
      year: "2028",
      image: certificate7,
    },
    {
      id: 8,
      title: "Victoria Vynn",
      description:
        "Certyfikat potwierdzający udział w Masterclass Victoria Vynn",
      year: "2022",
      image: certificate8,
    },
  ],
};

export const salon = {
  name: "Kliwia",

  phone: "+48 702 476 293",
  phoneHref: "+48702476293",

  email: "kliwiazg.salon@gmail.com",

  address: {
  street: "Kazimierza Lisowskiego 19",
  city: "65-072 Zielona Góra",
  full: "Kazimierza Lisowskiego 19, 65-072 Zielona Góra, Polska",
},
  openingHours: [
    {
      days: "Poniedziałek – Piątek",
      hours: "9:00 – 18:00",
    },
    {
      days: "Sobota i Niedziela",
      hours: "Nieczynne",
    },
  ],
};


// --------------------
// SOCIAL MEDIA
// --------------------

export const socialMedia = {
  instagram: "https://www.instagram.com/salon_kliwia/",
  facebook: "https://www.facebook.com/SalonKosmetycznyKliwia/",
};


// --------------------
// NAVBAR
// --------------------

export const navigation = [
  {
    label: "O mnie",
    href: "#owner",
  },
  {
    label: "Zabiegi",
    href: "#services",
  },
  {
    label: "Kontakt",
    href: "#contact",
  },
];


// --------------------
// HERO
// --------------------

export const hero = {
  eyebrow: "SALON KOSMETYCZNY · ZIELONA GÓRA",

  title: "Znajdź chwilę dla siebie i swojej skóry.",

  description:
    "Stworzyłam miejsce, w którym możesz zadbać o siebie, a jednocześnie oderwać się od codziennych obowiązków, odpocząć i w pełni się zrelaksować.",

  primaryButton: {
    label: "POZNAJ ZABIEGI",
    href: "#services",
  },

  secondaryButton: {
    label: "ZADZWOŃ I UMÓW WIZYTĘ",
    href: "#appointment",
  },
};


// --------------------
// SEKCJA ZABIEGÓW
// --------------------

export const servicesSection = {
  eyebrow: "ZABIEGI",

  title: "Pielęgnacja dopasowana do Ciebie.",

  description:
    "Poznaj zabiegi dostępne w naszym salonie i wybierz pielęgnację odpowiadającą potrzebom Twojej skóry.",
};


// --------------------
// ZABIEGI
// --------------------

export const serviceCategories = [
  {
    id: "face",
    number: "01",
    name: "Pielęgnacja twarzy",
    description:
      "Zabiegi stworzone z myślą o zdrowym wyglądzie, regeneracji i odpowiednim nawilżeniu skóry.",

    treatments: [
      {
        id: "face-1",
        name: "Oczyszczanie wodorowe twarzy",
        description:
          "Oczyszczanie wodorowe polega na wprowadzaniu w głąb skóry mikroskopijnych cząsteczek aktywnego wodoru za pomocą strumienia wody pod dużym ciśnieniem. Wodór neutralizuje wolne rodniki odpowiedzialne za starzenie, a sam zabieg łączy złuszczanie martwego naskórka. Głębokie doczyszczenie.",
        duration: "60 min",
        price: "250 zł",
        image: oczyszczaniewodorowe,
      },

      {
        id: "face-2",
        name: "Peeling migdałowy Purles",
        description:
          "(Oparty zazwyczaj na kwasie migdałowym o stężeniu 40%), delikatny, ale skuteczny peeling chemiczny. Działa antybakteryjnie, reguluje sebum, rozjaśnia przebarwienia i stymuluje odnowę skóry bez silnego podrażnienia, co pozwala na wykonywanie go przez cały rok. Wskazania i Działanie: Typy cery: tłusta, mieszana, z niedoskonałościami, a także wrażliwa i z naczyńkami. Problemy: trądzik pospolity, zaskórniki, nierówny koloryt, pierwsze oznaki starzenia. Efekty: wygładzenie, oczyszczenie porów, rozjaśnienie plam pigmentacyjnych oraz poprawa jędrności skóry",
        duration: "75 min",
        price: "280 zł",
        image: mpeel,
        imageFit: "contain"
      },

      {
        id: "face-3",
        name: "Zabieg z kwasem glikolowym",
        description: "G-peel 40%. Głęboko złuszczający i regenerujący kwas glikolowy, który ma zdolność docierania aż do warstwy brodawkowatej skóry właściwej. Powoduje zmianę struktury naskórka, stymulując namnażanie nowych komórek i włókien kolagenowych, a także aktywuje procesy naprawy uszkodzeń powstałych z powodu promieniowania UV. Zmniejsza przebarwienia, poprawia kondycję i zwartość skóry. Ponadto minimalizuje drobne blizny i ślady po stanach zapalnych.",
        duration: "60 min",
        price: "000 zł",
        image: gpeel,
        imageFit: "contain"
      },

      {
        id: "face-4",
        name: "Zabieg sushi ceremony Purles",
        description: "Jego głównym celem jest głębokie odżywienie skóry dojrzałej, redukcja zmarszczek oraz rozjaśnienie przebarwień i wyrównanie kolorytu cery. Główne zastosowanie i działanie zabiegu to: Redukcja zmarszczek: Wygładza drobne linie i poprawia napięcie skóry. Walka z przebarwieniami: Rozjaśnia plamy pigmentacyjne i wyrównuje koloryt. Silne antyoksydacje: Chroni komórki przed starzeniem i poprawia mikrokrążenie. Głębokie rozświetlenie: Przywraca zmęczonej cerze zdrowy, promienny wygląd.",
        duration: "60 min",
        price: "000 zł",
        image: sushiCeremony,
        imageFit: "contain"
      },

      {
      id: "face-5",
      name: "A-Peel",
      description:
        "Jest to tzw. peeling bankietowy, idealny dla skóry odwodnionej, zmęczonej i wrażliwej. Działa bardzo łagodnie, głęboko nawilża, poprawia elastyczność naskórka i rozświetla cerę.",
      duration: "45 min",
      price: "180 zł",
      image: apeel,
      imageFit: "contain"
    },

    {
        id: "face-6",
        name: "Zabieg Microbiome Therapy",
        description: "Zabieg dedykowany cerze suchej, wrażliwej, nadreaktywnej. Działanie i efekty: odbudowa mikrobiomu: przywraca prawidłową florę bakteryjną naskórka, wzmocnienie barier: Uszczelnia i reperuje zniszczoną barierę hydrolipidową, głębokie nawilżenie: niweluje uczucie ściągnięcia, suchości i łuszczenia, kojenie podrażnień: błyskawicznie łagodzi zaczerwienienia i stany zapalne, dając uczucie komfortu.",
        duration: "60 min",
        price: "000 zł",
        image: null,
      },
    ],
  },

  {
    id: "specialist",
    number: "02",
    name: "Zabiegi specjalistyczne",
    description:
      "Zaawansowane zabiegi dobierane indywidualnie do potrzeb i aktualnej kondycji skóry.",

    treatments: [
      {
        id: "specialist-1",
        name: "Zabieg Sushi Ceremony Purles",
        description:
          "Opis zabiegu.",
        duration: "60 min",
        price: "300 zł",
        image: null,
      },

      {
        id: "specialist-2",
        name: "Zabieg Microbiome Therapy",
        description: "Zabieg dedykowany cerze suchej, wrażliwej, nadreaktywnej. Działanie i efekty: odbudowa mikrobiomu: przywraca prawidłową florę bakteryjną naskórka, wzmocnienie barier: Uszczelnia i reperuje zniszczoną barierę hydrolipidową, głębokie nawilżenie: niweluje uczucie ściągnięcia, suchości i łuszczenia, kojenie podrażnień: błyskawicznie łagodzi zaczerwienienia i stany zapalne, dając uczucie komfortu.",
        duration: "60 min",
        price: "000 zł",
        image: null,
      },

      {
        id: "specialist-3",
        name: "Masaż Kobido",
        description: "Kobido – naturalny lifting twarzy. Ten wyjątkowy japoński masaż intensywnie pobudza skórę, poprawia jej jędrność i owal twarzy, wygładza drobne zmarszczki oraz pomaga zmniejszyć napięcia mięśniowe. To połączenie skutecznej pielęgnacji z głębokim relaksem.",
        duration: "60 min",
        price: "000 zł",
        image: null,
      },
    ],
  },

  {
    id: "body",
    number: "03",
    name: "Brwi i rzęsy",
    description:
      "Zabiegi podkreślające naturalną oprawę oka i dopasowane do rysów twarzy.",

    treatments: [
      {
        id: "body-1",
        name: "Lifting rzęs",
        description: "Zabieg polegający na trwałym uniesieniu i podkręceniu naturalnych rzęs przy pomocy specjalnych wałeczków silikonowych oraz preparatów zmieniających kształt włosa.",
        duration: "60 min",
        price: "000 zł",
        image: null,
      },

      {
        id: "body-2",
        name: "Nazwa zabiegu",
        description: "Opis zabiegu.",
        duration: "60 min",
        price: "000 zł",
        image: null,
      },

      {
        id: "body-3",
        name: "Nazwa zabiegu",
        description: "Opis zabiegu.",
        duration: "60 min",
        price: "000 zł",
        image: null,
      },
    ],
  },

  {
    id: "brows",
    number: "04",
    name: "Usta",
    description:
      "Zabiegi podkreślające naturalną oprawę oka i dopasowane do rysów twarzy.",

    treatments: [
      {
        id: "brows-1",
        name: "Laminacja brwi",
        description:
          "Zabieg pozwalający uporządkować, wymodelować i optycznie zagęścić brwi.",
        duration: "60 min",
        price: "150 zł",
        image: null,
      },

      {
        id: "brows-2",
        name: "Stylizacja brwi",
        description:
          "Precyzyjne nadanie kształtu brwiom dopasowanego do rysów twarzy.",
        duration: "30 min",
        price: "80 zł",
        image: null,
      },

      {
        id: "brows-3",
        name: "Nazwa zabiegu",
        description: "Opis zabiegu.",
        duration: "45 min",
        price: "000 zł",
        image: null,
      },
    ],
  },

  {
    id: "dlonie-i-paznokcie",
    number: "05",
    name: "Stylizacja paznokci",
    description:
      "Pielęgnacja i stylizacja paznokci z naciskiem na estetykę, komfort i trwały efekt.",

    treatments: [
      {
        id: "hands-1",
        name: "Nazwa zabiegu",
        description: "Opis zabiegu.",
        duration: "60 min",
        price: "000 zł",
      },

      {
        id: "hands-2",
        name: "Nazwa zabiegu",
        description: "Opis zabiegu.",
        duration: "60 min",
        price: "000 zł",
        image: null,
      },
    ],
  },

  {
    id: "relax",
    number: "06",
    name: "Relaks i pielęgnacja",
    description:
      "Zabiegi stworzone z myślą o odprężeniu, regeneracji i chwili tylko dla siebie.",

    treatments: [
      {
        id: "relax-1",
        name: "Nazwa zabiegu",
        description: "Opis zabiegu.",
        duration: "60 min",
        price: "000 zł",
        image: null,
      },

      {
        id: "relax-2",
        name: "Nazwa zabiegu",
        description: "Opis zabiegu.",
        duration: "60 min",
        price: "000 zł",
        image: null,
      },
    ],
  },
];


// --------------------
// UMÓW WIZYTĘ
// --------------------

export const appointment = {
  eyebrow: "UMÓW WIZYTĘ",

  title: "Znajdź chwilę dla siebie.",

  description:
    "Zadzwoń do salonu w celu umówienia wizyty. Chętnie pomożemy dobrać odpowiedni zabieg oraz dogodny termin.",

  buttonLabel: "ZADZWOŃ DO SALONU",
};


// --------------------
// KONTAKT
// --------------------

export const contactSection = {
  eyebrow: "KONTAKT",

  title: "Odwiedź Kliwię.",

  description:
    "Skontaktuj się z nami lub wyznacz trasę bezpośrednio do salonu.",

  directionsButton: "WYZNACZ TRASĘ",
};


// --------------------
// MAPY
// --------------------

export const maps = {
  googleMapsUrl:
    "https://www.google.com/maps/place//data=!4m2!3m1!1s0x470613e950832e4f:0xfaa4dcba682f6f39?sa=X&ved=1t:8290&ictx=111",

  appleMapsUrl:
    "https://maps.apple.com/?q=Kazimierza+Lisowskiego+19,+65-072+Zielona+Góra,+Polska",

  embedUrl:
    "https://www.google.com/maps?q=Kazimierza+Lisowskiego+19,+65-072+Zielona+Góra,+Polska&output=embed",
};

// --------------------
// FOOTER
// --------------------

export const footer = {
  description:
    "Profesjonalna pielęgnacja i kosmetologia w Zielonej Górze.",

  copyright: "© 2026 Kliwia. Wszelkie prawa zastrzeżone.",
};
// --------------------
// O MNIE / WŁAŚCICIELKA
// --------------------

export const ownerSection = {
  eyebrow: "O MNIE",

  title: "Piękno to harmonia ciała i duszy.",

  intro:
    "Nazywam się Sylwia Dziewulak i jestem właścicielką salonu Kliwia. Kosmetyka jest nie tylko moją pracą, ale przede wszystkim prawdziwą pasją. Każdą osobę traktuję indywidualnie, dbając o jej komfort, dobre samopoczucie i piękne efekty zabiegów.",

  features: [
    {
      id: 1,
      title: "Doświadczenie",
      text:
        "Gabinet Kosmetyczny Kliwia prowadzę już od 20 lat, stale rozwijając swoje umiejętności i poszerzając wiedzę.",
    },
    {
      id: 2,
      title: "Indywidualne podejście",
      text:
        "Każda osoba jest wyjątkowa, dlatego zabiegi dobieram indywidualnie do potrzeb skóry i oczekiwanego efektu.",
    },
    {
      id: 3,
      title: "Jakość i bezpieczeństwo",
      text:
        "Pracuję na sprawdzonych produktach i urządzeniach, dbając o wysokie standardy higieny i komfort podczas wizyty.",
    },
  ],

  closing:
    "W Kliwii zadbam nie tylko o Twój wygląd, ale również o dobre samopoczucie i chwilę relaksu, której naprawdę potrzebujesz.",

  button: {
    label: "DOWIEDZ SIĘ WIĘCEJ O ZABIEGACH",
    href: "#services",
  },
};
export const safetyQuality = {
  eyebrow: "BEZPIECZEŃSTWO I JAKOŚĆ",

  title:
    "Dbałość o każdy szczegół — od higieny po pielęgnację.",

  description:
    "Wszystko o higienie i jakości w salonie Kliwia.",

  items: [
    {
      id: "safety",
      number: "01",
      label: "HIGIENA I BEZPIECZEŃSTWO",
      title: "Bezpieczeństwo przede wszystkim.",
      description:
        "W salonie kosmetycznym Kliwia bezpieczeństwo naszych Klientek jest najważniejsze.",
      points: [
        "Wszystkie narzędzia są starannie dezynfekowane i sterylizowane zgodnie z obowiązującymi procedurami, a stanowiska pracy regularnie odkażane.",
        "Podczas zabiegów używamy jednorazowych pilniczków, aby zapewnić najwyższy poziom higieny i bezpieczeństwa.",
        "U nas możesz czuć się pięknie, komfortowo i bezpiecznie!",
      ],
      image: dezynfekcja,
      imageAlt: "Higiena i bezpieczeństwo w salonie Kliwia",
      placeholder: "ZDJĘCIE / HIGIENA",
    },

    {
      id: "cosmetics",
      number: "02",
      label: "KOSMETYKI",
      title: "Kosmetyki dobrane z myślą o efektach.",
      description:
        "Purles to francuska marka profesjonalnych dermokosmetyków, która łączy innowacyjną biotechnologię z naturalnymi składnikami roślinnymi.",
      points: [
        "Formuły kosmetyków są projektowane jako bezpieczna alternatywa dla zabiegów medycyny estetycznej, łącząc skuteczność z pielęgnacją.",
        "Receptury przed trafieniem do sprzedaży są weryfikowane pod kątem skuteczności w profesjonalnych gabinetach kosmetologii.",
      ],
      image: kosmetyki,
      imageFit: "contain",
      imageAlt: "Kosmetyki używane w salonie Kliwia",
      placeholder: "ZDJĘCIE / KOSMETYKI",
    },
  ],

  bottomText:
    "Profesjonalna pielęgnacja zaczyna się od jakości, bezpieczeństwa i świadomego wyboru produktów.",
};