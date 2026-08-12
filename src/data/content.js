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
      year: "2025",
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
      year: "2022",
      image: certificate7,
    },
    {
      id: 8,
      title: "Nazwa certyfikatu 8",
      description:
        "Krótki opis szkolenia lub zakresu zdobytych umiejętności.",
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

        name: "Zabieg intensywnie nawilżający",

        description:
          "Kompleksowa pielęgnacja przeznaczona dla skóry suchej i odwodnionej. Zabieg pomaga przywrócić komfort, miękkość oraz zdrowy wygląd skóry.",

        duration: "60 min",

        price: "250 zł",

        image: null,
      },

      {
        id: "face-2",

        name: "Oczyszczanie twarzy",

        description:
          "Zabieg wspierający dokładne oczyszczenie skóry oraz poprawę jej wyglądu i kondycji.",

        duration: "75 min",

        price: "280 zł",

        image: null,
      },
    ],
  },

  {
    id: "specialist",

    number: "02",

    name: "Zabiegi specjalistyczne",

    description:
      "Profesjonalne zabiegi dobierane indywidualnie do potrzeb i aktualnej kondycji skóry.",

    treatments: [
      {
        id: "specialist-1",

        name: "Zabieg regenerujący",

        description:
          "Intensywna pielęgnacja wspierająca regenerację skóry i poprawę jej ogólnej kondycji.",

        duration: "60 min",

        price: "300 zł",

        image: null,
      },

      {
        id: "specialist-2",

        name: "Zabieg odżywczy",

        description:
          "Pielęgnacja dla skóry wymagającej odżywienia, wygładzenia i odzyskania naturalnego blasku.",

        duration: "60 min",

        price: "270 zł",

        image: null,
      },
    ],
  },

  {
    id: "brows",

    number: "03",

    name: "Brwi i rzęsy",

    description:
      "Subtelne podkreślenie naturalnej oprawy oka dopasowane do urody i oczekiwanego efektu.",

    treatments: [
      {
        id: "brows-1",

        name: "Laminacja brwi",

        description:
          "Zabieg pozwalający uporządkować, wymodelować i optycznie zagęścić naturalne brwi.",

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