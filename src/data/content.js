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

export const salon = {
  name: "Kliwia",

  phone: "+48 000 000 000",
  phoneHref: "+48000000000",

  email: "kontakt@kliwia.pl",

  address: {
    street: "ul. Przykładowa 10",
    city: "65-000 Zielona Góra",
    full: "ul. Przykładowa 10, 65-000 Zielona Góra",
  },

  openingHours: [
    {
      days: "Poniedziałek – Piątek",
      hours: "9:00 – 18:00",
    },
    {
      days: "Sobota",
      hours: "9:00 – 14:00",
    },
    {
      days: "Niedziela",
      hours: "Nieczynne",
    },
  ],
};


// --------------------
// SOCIAL MEDIA
// --------------------

export const socialMedia = {
  instagram: "",
  facebook: "",
};


// --------------------
// NAVBAR
// --------------------

export const navigation = [
  {
    label: "O salonie",
    href: "#about",
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

  title: "Pielęgnacja, którą poczujesz. Efekty, które zobaczysz.",

  description:
    "Profesjonalne zabiegi kosmetyczne dopasowane do potrzeb Twojej skóry, wykonywane z troską o każdy detal.",

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
// O SALONIE
// --------------------

export const about = {
  eyebrow: "O KLIWII",

  title: "Piękno zaczyna się od dobrej pielęgnacji.",

  description:
    "Kliwia to miejsce stworzone z myślą o świadomej pielęgnacji, komforcie i naturalnym pięknie. Każdy zabieg dobieramy indywidualnie, zwracając uwagę na potrzeby skóry oraz oczekiwany efekt.",

  secondParagraph:
    "Łączymy profesjonalne podejście ze spokojną atmosferą, aby każda wizyta była nie tylko zabiegiem, ale również chwilą przeznaczoną wyłącznie dla Ciebie.",
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
  // Podmienimy po otrzymaniu prawdziwego adresu.
  googleMapsUrl: "",

  appleMapsUrl: "",

  // Kod iframe Google Maps dodamy później.
  embedUrl: "",
};


// --------------------
// FOOTER
// --------------------

export const footer = {
  description:
    "Profesjonalna pielęgnacja i kosmetologia w Zielonej Górze.",

  copyright: "© 2026 Kliwia. Wszelkie prawa zastrzeżone.",
};