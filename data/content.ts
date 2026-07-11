import { getCompanyParagraphs } from "@/lib/catalog";
import type { AboutSubpage, FaqItem } from "@/lib/types";

const company = getCompanyParagraphs();

export const aboutStats = [
  { value: "5", label: "промышленных парков" },
  { value: "550 000 м²", label: "производственных площадей" },
  { value: "2000+", label: "комплектов оборудования" },
  { value: "30+", label: "филиалов по Китаю" },
];

export const aboutSubsidiaries = [
  "Shanghai Liancheng Pump Manufacturing",
  "Shanghai Liancheng Motor",
  "Shanghai Liancheng Valve",
  "Shanghai Liancheng Logistics",
  "Shanghai Liancheng General Equipment Engineering",
  "Shanghai Ametek Industrial Equipment",
  "Shanghai Liancheng Suzhou",
];

export const aboutEquipment = [
  "Крупный испытательный центр",
  "Трёхкоординатные измерительные машины",
  "Приборы для измерения динамического и статического равновесия",
  "Лазерные приборы быстрого прототипирования",
  "Многофункциональные дробеструйные машины",
  "Аппараты для аргонодуговой сварки",
  "Крупногабаритные вертикальные токарные станки",
];

export const aboutCertifications = [
  "ISO 09001",
  "ISO 14001",
  "OHSAS 18001",
  "CCC",
  "CQC",
  "CE",
  "MA",
  "SMA",
];

export const aboutAwards = [
  "Инновационное предприятие",
  "Известная торговая марка",
  "Известная торговая марка Шанхая",
  "Известный бренд Китая",
  "Первое национальное предприятие по производству энергосберегающих насосов",
  "Шанхайское высокотехнологичное предприятие",
  "50 лучших частных производственных предприятий Шанхая",
  "100 лучших промышленных предприятий Шанхая",
  "Десять лучших национальных брендов водной отрасли Китая",
];

export const aboutClients = [
  "General Motors",
  "Bayer",
  "Siemens",
  "Volkswagen",
  "Coca-Cola",
];

export const aboutSubpages: AboutSubpage[] = [
  {
    slug: "our-company",
    title: "Наша компания",
    paragraphs: company.slice(0, 4),
  },
  {
    slug: "innovation",
    title: "Инновации",
    paragraphs: company.filter(
      (p) =>
        /инновац|патент|технолог/i.test(p)
    ).slice(0, 3),
  },
  {
    slug: "history",
    title: "История",
    paragraphs: company.slice(0, 2),
  },
  {
    slug: "sustainability",
    title: "Окружающая среда",
    paragraphs: company.filter(
      (p) => /окружающ|водн/i.test(p)
    ).slice(0, 3),
  },
];

export const genericAboutMessage =
  "Информация о Shanghai Liancheng (Group) Co., Ltd. доступна в разделе О компании.";

export function getFaqItems(): FaqItem[] {
  const certText =
    company.find((p) => /ISO|сертификац/i.test(p)) ?? "";
  const serviceText = company.find((p) => /филиалов/i.test(p)) ?? "";

  return [
    {
      question: "Какие категории продукции выпускает Liancheng Group?",
      answer:
        "Насосы, трубопроводная арматура, электрические шкафы управления и оборудование для водоснабжения.",
    },
    {
      question: "В каких отраслях применяется продукция?",
      answer: company[2] ?? "",
    },
    {
      question: "Какие сертификаты имеет компания?",
      answer: certText,
    },
    {
      question: "Есть ли сервисная сеть?",
      answer: serviceText,
    },
  ].filter((item) => item.answer);
}

export function getApplicationsCards() {
  const building = company.find((p) => /строительств/i.test(p));
  const industrial = company.find((p) => /промышленн/i.test(p));

  return [
    { title: "Отрасли применения", text: company[2] ?? "" },
    {
      title: "Строительство зданий",
      text: building ?? company[2] ?? "",
    },
    {
      title: "Промышленные и горнодобывающие предприятия",
      text: industrial ?? company[2] ?? "",
    },
    { title: "Проекты", text: company[7] ?? "" },
  ];
}
