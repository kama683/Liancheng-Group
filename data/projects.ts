import type { AppLocale } from "@/i18n/routing";
import type { ProjectFeatured, ProjectIndustry, ProjectsData } from "@/lib/types";

const DEFAULT_EQUIPMENT_SLUGS = ["lpt", "sls", "slnc", "zhlbq"] as const;

interface ProjectMeta {
  slug: string;
  image: string;
  equipmentSlugs: string[];
  equipmentType: "building" | "industrial";
}

const PROJECT_META: ProjectMeta[] = [
  {
    slug: "bird-nest",
    image: "/assets/projects/bird-nest.jpg",
    equipmentSlugs: [...DEFAULT_EQUIPMENT_SLUGS],
    equipmentType: "building",
  },
  {
    slug: "national-theatre",
    image: "/assets/projects/national-theatre.jpg",
    equipmentSlugs: [...DEFAULT_EQUIPMENT_SLUGS],
    equipmentType: "building",
  },
  {
    slug: "pudong-airport",
    image: "/assets/projects/pudong-airport.jpg",
    equipmentSlugs: [...DEFAULT_EQUIPMENT_SLUGS],
    equipmentType: "building",
  },
  {
    slug: "beijing-aquarium",
    image: "/assets/projects/beijing-aquarium.jpg",
    equipmentSlugs: [...DEFAULT_EQUIPMENT_SLUGS],
    equipmentType: "building",
  },
  {
    slug: "tianjin-museum",
    image: "/assets/projects/tianjin-museum.jpg",
    equipmentSlugs: [...DEFAULT_EQUIPMENT_SLUGS],
    equipmentType: "building",
  },
  {
    slug: "qingdao-airport",
    image: "/assets/projects/qingdao-airport.jpg",
    equipmentSlugs: [...DEFAULT_EQUIPMENT_SLUGS],
    equipmentType: "building",
  },
];

type FeaturedText = Pick<
  ProjectFeatured,
  | "name"
  | "industry"
  | "location"
  | "features"
  | "tasks"
  | "equipment"
  | "benefits"
  | "description"
  | "short"
>;

const RELATED_PRODUCTS: Record<AppLocale, string> = {
  ru: "Связанная продукция",
  kk: "Байланысты өнім",
  en: "Related products",
  zh: "相关产品",
};

const FEATURED_TEXT: Record<AppLocale, Record<string, FeaturedText>> = {
  ru: {
    "bird-nest": {
      name: "Пекинский национальный стадион",
      industry: "Строительство",
      location: "Олимпийская зелёная деревня, район Чаоян, Пекин",
      features:
        "Главный стадион Олимпийских игр 2008 года в Пекине, спроектированный как центр международных и внутренних спортивных соревнований.",
      tasks:
        "Обеспечение систем водоснабжения и дренажа для крупного спортивного комплекса с высокой пропускной способностью.",
      equipment: RELATED_PRODUCTS.ru,
      benefits:
        "Надёжное насосное оборудование Bellery обеспечивает стабильную работу инженерных систем объекта мирового уровня.",
      description:
        "Национальный стадион, ласково называемый «Птичье гнездо», расположен в Олимпийской зелёной деревне, районе Чаоян города Пекина. Он был спроектирован как главный стадион Олимпийских игр 2008 года в Пекине. Там проводились олимпийские соревнования по лёгкой атлетике, футболу, гавлоку, метанию штанги и метанию диска. С октября 2008 года, после окончания Олимпиады, он был открыт как туристическая достопримечательность. Теперь это центр международных и внутренних спортивных соревнований и мероприятий по отдыху. В 2022 году здесь прошли церемонии открытия и закрытия Зимних Олимпийских игр.",
      short:
        "Национальный стадион «Птичье гнездо» — главная арена Олимпиады-2008 и Зимних Олимпийских игр 2022 года в Пекине.",
    },
    "national-theatre": {
      name: "Национальный театр",
      industry: "Строительство",
      location: "Пекин, Китай",
      features:
        "Пекинский национальный центр исполнительских искусств в форме яйца, окружённый искусственным озером.",
      tasks:
        "Инженерное обеспечение оперного, концертного и драматического театров общей вместимостью 5452 зрителя.",
      equipment: RELATED_PRODUCTS.ru,
      benefits:
        "Оборудование Bellery обеспечивает надёжную работу систем водоснабжения и дренажа уникального культурного объекта.",
      description:
        "Национальный Большой театр, также известный как Пекинский национальный центр исполнительских искусств, окружён искусственным озером, впечатляющим стеклом и титановым оперным театром в форме яйца, спроектированным французским архитектором Полем Андре. Он вмещает 5452 зрителя в театрах: в центре находится Оперный театр, на востоке — Концертный зал, а на западе — Драматический театр. Купол имеет размеры 212 метров в направлении восток-запад, 144 метра в направлении север-юг и высоту 46 метров. Главный вход находится с северной стороны. Гости попадают в здание, пройдя через коридор, который идёт под озером.",
      short:
        "Национальный Большой театр в Пекине — культурный комплекс с оперным, концертным и драматическим залами.",
    },
    "pudong-airport": {
      name: "Международный аэропорт Пудун",
      industry: "Муниципальная инфраструктура",
      location: "Шанхай, Китай",
      features:
        "Крупнейший международный авиаузел Шанхая с четырьмя параллельными взлётно-посадочными полосами и спутниковым терминалом.",
      tasks:
        "Обеспечение инженерных систем аэропорта пропускной способностью до 80 миллионов пассажиров в год.",
      equipment: RELATED_PRODUCTS.ru,
      benefits:
        "Насосное оборудование Bellery соответствует высоким требованиям к надёжности объектов гражданской авиации.",
      description:
        "Международный аэропорт Пудун — главный международный аэропорт, обслуживающий город Шанхай, Китай. Аэропорт расположен в 30 км (19 милях) к востоку от центра Шанхая. Международный аэропорт Пудун — крупный авиационный узел Китая и служит главным узлом для China Eastern Airlines и Shanghai Airlines. Кроме того, он является хабом для Spring Airlines, Juneyao Airlines и второстепенным хабом для China Southern Airlines. В настоящее время аэропорт PVG имеет четыре параллельные взлётно-посадочные полосы, а недавно был открыт дополнительный спутниковый терминал с ещё двумя взлётно-посадочными полосами. Его строительство обеспечивает аэропорту пропускную способность 80 миллионов пассажиров в год. В 2017 году аэропорт обслужил 70 001 237 пассажиров. Эта цифра делает аэропорт Шанхая вторым по загруженности аэропортом в материковом Китае и позиционирует его как 9-й по загруженности аэропорт в мире. К концу 2016 года аэропорт PVG обслуживал 210 направлений и принимал 104 авиакомпании.",
      short:
        "Международный аэропорт Пудун — главный авиаузел Шанхая и один из крупнейших аэропортов Китая.",
    },
    "beijing-aquarium": {
      name: "Пекинский аквариум",
      industry: "Строительство",
      location: "Пекинский зоопарк, ул. Сицимэнь Вай, Сичэн, Пекин",
      features:
        "Крупнейший и самый передовой внутренний аквариум в Китае площадью 12 гектаров в форме раковины.",
      tasks:
        "Обеспечение циркуляции и подготовки воды для семи тематических залов и океанариума.",
      equipment: RELATED_PRODUCTS.ru,
      benefits:
        "Оборудование Bellery обеспечивает стабильную работу сложных гидротехнических систем аквариума.",
      description:
        "Расположенный в Пекинском зоопарке по адресу № 137, Xizhimen Outer Street, Xicheng District, Пекинский аквариум является крупнейшим и самым передовым внутренним аквариумом в Китае, занимая общую площадь 30 акров (12 гектаров). Он спроектирован в форме раковины с оранжевым и синим в качестве основных цветов, символизирующих таинственное огромное море и бесконечную жизненную силу морской жизни. Пекинский аквариум имеет семь залов: Rainforest Wonder, Bering Proliv, Whale and Dolphin Bay, Chinese Sturgeon Hall, Seabed Travel, Feel Pool и Ocean Theater.",
      short:
        "Пекинский аквариум — крупнейший крытый океанариум Китая с семью тематическими залами.",
    },
    "tianjin-museum": {
      name: "Музей Тяньцзиня",
      industry: "Строительство",
      location: "Площадь Иньхэ, район Хэси, Тяньцзинь",
      features:
        "Крупнейший музей Тяньцзиня площадью около 50 000 кв. метров в архитектурной форме лебедя.",
      tasks:
        "Инженерное обеспечение современного музейного комплекса для хранения и демонстрации культурных реликвий.",
      equipment: RELATED_PRODUCTS.ru,
      benefits:
        "Насосные решения Bellery обеспечивают надёжную работу инженерных систем общественного здания.",
      description:
        "Музей Тяньцзиня — крупнейший музей в Тяньцзине, Китай, в котором представлен целый ряд культурных и исторических реликвий, имеющих значение для Тяньцзиня. Музей находится на площади Иньхэ в районе Хэси города Тяньцзинь и занимает площадь около 50 000 кв. метров. Уникальный архитектурный стиль музея, внешний вид которого напоминает лебедя, расправляющего крылья, означает, что он быстро становится одним из знаковых зданий города. Он построен как большое современное место для сбора, защиты и исследования исторических реликвий, а также как место для образования, отдыха и туризма.",
      short:
        "Музей Тяньцзиня — крупнейший музей города с уникальной архитектурой в форме лебедя.",
    },
    "qingdao-airport": {
      name: "Международный аэропорт Циндао Цзяодун",
      industry: "Муниципальная инфраструктура",
      location: "Цзяодун, Шаньдун, Китай",
      features:
        "Новый международный аэропорт, заменяющий аэропорт Циндао Лютин и ставший крупнейшим в провинции Шаньдун.",
      tasks:
        "Создание инженерной инфраструктуры аэропорта с расчётом на 35 миллионов пассажиров к 2025 году.",
      equipment: RELATED_PRODUCTS.ru,
      benefits:
        "Оборудование Bellery соответствует требованиям крупных транспортных и инфраструктурных объектов.",
      description:
        "Международный аэропорт Циндао Цзяодун — это аэропорт, строящийся для обслуживания города Циндао в провинции Шаньдун, Китай. Он получил одобрение в декабре 2013 года и заменит существующий международный аэропорт Циндао Лютин в качестве главного аэропорта города. Он будет расположен в Цзяодуне, Цзяочжоу, в 39 километрах (24 мили) от центра Циндао. После завершения строительства в 2019 году он станет крупнейшим аэропортом в Шаньдуне. К 2025 году новый аэропорт будет иметь 178 стоянок самолётов и обеспечивать транспортные услуги для 35 миллионов пассажиров и 500 000 тонн грузов в год. К 2045 году ожидается в общей сложности 290 стоянок самолётов, что обеспечит перевозку 55 миллионов пассажиров и одного миллиона тонн грузов.",
      short:
        "Международный аэропорт Циндао Цзяодун — новый главный аэропорт города и крупнейший в Шаньдуне.",
    },
  },
  kk: {
    "bird-nest": {
      name: "Пекин ұлттық стадионы",
      industry: "Құрылыс",
      location: "Олимпиадалық жасыл ауыл, Чаоян ауданы, Пекин",
      features:
        "2008 жылғы Пекин Олимпиада ойындарының басты стадионы, халықаралық және ішкі спорттық жарыстардың орталығы ретінде жобаланған.",
      tasks:
        "Өткізу қабілеті жоғары ірі спорт кешені үшін сумен жабдықтау және дренаж жүйелерін қамтамасыз ету.",
      equipment: RELATED_PRODUCTS.kk,
      benefits:
        "Bellery компаниясының сенімді сорғы жабдығы әлемдік деңгейдегі нысанның инженерлік жүйелерінің тұрақты жұмысын қамтамасыз етеді.",
      description:
        "«Құс ұясы» деп жылы аталатын Ұлттық стадион Пекиннің Чаоян ауданындағы Олимпиадалық жасыл ауылда орналасқан. Ол 2008 жылғы Пекин Олимпиада ойындарының басты стадионы ретінде жобаланды. Онда жеңіл атлетика, футбол және лақтыру түрлері бойынша олимпиада жарыстары өтті. 2008 жылдың қазан айынан бастап, Олимпиада аяқталғаннан кейін, ол туристік көрікті жер ретінде ашылды. Қазір бұл халықаралық және ішкі спорт жарыстары мен демалыс іс-шараларының орталығы. 2022 жылы мұнда Қысқы Олимпиада ойындарының ашылу және жабылу салтанаттары өтті.",
      short:
        "«Құс ұясы» Ұлттық стадионы — Пекиндегі 2008 жылғы Олимпиаданың және 2022 жылғы Қысқы Олимпиада ойындарының басты аренасы.",
    },
    "national-theatre": {
      name: "Ұлттық театр",
      industry: "Құрылыс",
      location: "Пекин, Қытай",
      features:
        "Жасанды көлмен қоршалған, жұмыртқа пішінді Пекин ұлттық өнер орталығы.",
      tasks:
        "Жалпы сыйымдылығы 5452 көрермен болатын опера, концерт және драма театрларын инженерлік қамтамасыз ету.",
      equipment: RELATED_PRODUCTS.kk,
      benefits:
        "Bellery жабдығы бірегей мәдени нысанның сумен жабдықтау және дренаж жүйелерінің сенімді жұмысын қамтамасыз етеді.",
      description:
        "Ұлттық үлкен театр деп те аталатын Ұлттық өнер орталығы жасанды көлмен қоршалған, оны француз сәулетшісі Пол Андреу жобалаған әйнек пен титаннан жасалған әсерлі жұмыртқа тәрізді опера театры әшекейлейді. Ол өз театрларында 5452 көрерменге арналған: ортасында — Опера театры, шығысында — Концерт залы, ал батысында — Драма театры орналасқан. Күмбездің өлшемі шығыс-батыс бағытында 212 метр, солтүстік-оңтүстік бағытында 144 метр, биіктігі 46 метр. Басты кіреберіс солтүстік жағында орналасқан. Қонақтар көл астынан өтетін дәліз арқылы ғимаратқа кіреді.",
      short:
        "Пекиндегі Ұлттық үлкен театры — опера, концерт және драма залдары бар мәдени кешен.",
    },
    "pudong-airport": {
      name: "Пудун халықаралық әуежайы",
      industry: "Муниципалдық инфрақұрылым",
      location: "Шанхай, Қытай",
      features:
        "Шанхайдың төрт параллель ұшу-қону жолағы мен спутниктік терминалы бар ең ірі халықаралық әуе тораптары.",
      tasks:
        "Жылына 80 миллионға дейін жолаушыны қабылдай алатын әуежайдың инженерлік жүйелерін қамтамасыз ету.",
      equipment: RELATED_PRODUCTS.kk,
      benefits:
        "Bellery сорғы жабдығы азаматтық авиация нысандарына қойылатын жоғары сенімділік талаптарына сай келеді.",
      description:
        "Пудун халықаралық әуежайы — Қытайдың Шанхай қаласына қызмет көрсететін басты халықаралық әуежай. Әуежай Шанхай орталығынан шығысқа қарай 30 км (19 миль) жерде орналасқан. Пудун халықаралық әуежайы — Қытайдың ірі әуе тораптарының бірі, China Eastern Airlines және Shanghai Airlines үшін басты торап болып табылады. Сонымен қатар ол Spring Airlines, Juneyao Airlines үшін торап, ал China Southern Airlines үшін қосымша торап қызметін атқарады. Қазіргі уақытта PVG әуежайында төрт параллель ұшу-қону жолағы бар, жақында тағы екі ұшу-қону жолағы бар қосымша спутниктік терминал ашылды. Бұл құрылыс әуежайдың өткізу қабілетін жылына 80 миллион жолаушыға дейін жеткізеді. 2017 жылы әуежай 70 001 237 жолаушыға қызмет көрсетті. Бұл көрсеткіш Шанхай әуежайын құрлықтық Қытайдағы екінші iрі жүктелген әуежай, ал әлем бойынша 9-шы орынға қояды. 2016 жыл соңында PVG әуежайы 210 бағыт бойынша қызмет көрсетіп, 104 әуе компаниясын қабылдады.",
      short:
        "Пудун халықаралық әуежайы — Шанхайдың басты әуе торабы әрі Қытайдың ірі әуежайларының бірі.",
    },
    "beijing-aquarium": {
      name: "Пекин аквариумы",
      industry: "Құрылыс",
      location: "Пекин хайуанаттар бағы, Сицимэнь Вай көшесі, Сичэн, Пекин",
      features:
        "Қытайдағы ең ірі және ең озық жабық аквариум, ауданы 12 гектар, раковина пішінінде.",
      tasks:
        "Жеті тақырыптық зал мен океанариум үшін судың айналымы мен дайындалуын қамтамасыз ету.",
      equipment: RELATED_PRODUCTS.kk,
      benefits:
        "Bellery жабдығы аквариумның күрделі гидротехникалық жүйелерінің тұрақты жұмысын қамтамасыз етеді.",
      description:
        "Пекин хайуанаттар бағында, Сичэн ауданы, Сицимэнь Вай көшесі, 137-үйде орналасқан Пекин аквариумы — Қытайдағы ең ірі және ең озық жабық аквариум, жалпы ауданы 30 акр (12 гектар). Ол теңіздің құпия кеңдігі мен теңіз тіршілігінің шексіз күш-қуатын білдіретін қызғылт сары мен көк түстерді негізгі түс ретінде пайдаланып, раковина пішінінде жобаланған. Пекин аквариумында жеті зал бар: Rainforest Wonder, Берингов бұғазы, Кит және дельфин шығанағы, Қытай осетрі залы, Теңіз түбі саяхаты, Feel Pool және Ocean Theater.",
      short:
        "Пекин аквариумы — Қытайдағы жеті тақырыптық залы бар ең ірі жабық океанариум.",
    },
    "tianjin-museum": {
      name: "Тяньцзинь мұражайы",
      industry: "Құрылыс",
      location: "Иньхэ алаңы, Хэси ауданы, Тяньцзинь",
      features:
        "Ауданы шамамен 50 000 шаршы метр болатын, аққу пішінді сәулет үлгісіндегі Тяньцзиньдің ең ірі мұражайы.",
      tasks:
        "Мәдени жәдігерлерді сақтау және көрсету үшін заманауи мұражай кешенін инженерлік қамтамасыз ету.",
      equipment: RELATED_PRODUCTS.kk,
      benefits:
        "Bellery сорғы шешімдері қоғамдық ғимараттың инженерлік жүйелерінің сенімді жұмысын қамтамасыз етеді.",
      description:
        "Тяньцзинь мұражайы — Қытайдың Тяньцзинь қаласындағы ең ірі мұражай, онда Тяньцзинь үшін маңызды мәдени-тарихи жәдігерлердің кең қатары ұсынылған. Мұражай Тяньцзиньнің Хэси ауданындағы Иньхэ алаңында орналасқан және ауданы шамамен 50 000 шаршы метрді құрайды. Қанаттарын жайған аққуды еске түсіретін мұражайдың бірегей сәулет стилі оны қаланың айрықша ғимараттарының біріне айналдырды. Ол тарихи жәдігерлерді жинау, қорғау және зерттеу үшін ірі заманауи орын, сондай-ақ білім беру, демалыс пен туризм орны ретінде салынды.",
      short:
        "Тяньцзинь мұражайы — аққу пішінді бірегей сәулеті бар қаланың ең ірі мұражайы.",
    },
    "qingdao-airport": {
      name: "Циндао Цзяодун халықаралық әуежайы",
      industry: "Муниципалдық инфрақұрылым",
      location: "Цзяодун, Шаньдун, Қытай",
      features:
        "Циндао Лютин әуежайын алмастырған және Шаньдун провинциясындағы ең ірі әуежайға айналған жаңа халықаралық әуежай.",
      tasks:
        "2025 жылға қарай 35 миллион жолаушыға есептелген әуежайдың инженерлік инфрақұрылымын құру.",
      equipment: RELATED_PRODUCTS.kk,
      benefits:
        "Bellery жабдығы ірі көлік және инфрақұрылым нысандарының талаптарына сай келеді.",
      description:
        "Циндао Цзяодун халықаралық әуежайы — Қытайдың Шаньдун провинциясындағы Циндао қаласына қызмет көрсету үшін салынып жатқан әуежай. Ол 2013 жылдың желтоқсанында бекітілді және қаланың басты әуежайы ретінде қолданыстағы Циндао Лютин халықаралық әуежайын алмастырады. Ол Циндао орталығынан 39 шақырым (24 миль) қашықтықта, Цзяочжоудың Цзяодун ауданында орналасады. 2019 жылы құрылысы аяқталғаннан кейін ол Шаньдундағы ең ірі әуежайға айналды. 2025 жылға қарай жаңа әуежайда 178 ұшақ тұрағы болып, жылына 35 миллион жолаушы мен 500 000 тонна жүкті тасымалдайтын болады. 2045 жылға қарай жалпы 290 ұшақ тұрағы болады деп күтілуде, бұл 55 миллион жолаушы мен бір миллион тонна жүкті тасымалдауды қамтамасыз етеді.",
      short:
        "Циндао Цзяодун халықаралық әуежайы — қаланың жаңа басты әуежайы әрі Шаньдундағы ең ірісі.",
    },
  },
  en: {
    "bird-nest": {
      name: "Beijing National Stadium",
      industry: "Construction",
      location: "Olympic Green, Chaoyang District, Beijing",
      features:
        "The main stadium of the 2008 Beijing Olympic Games, designed as a venue for international and domestic sporting events.",
      tasks:
        "Providing water supply and drainage systems for a large, high-capacity sports complex.",
      equipment: RELATED_PRODUCTS.en,
      benefits:
        "Reliable Bellery pump equipment ensures the stable operation of the engineering systems at this world-class venue.",
      description:
        "The National Stadium, affectionately known as the 'Bird's Nest,' is located in Olympic Green, Chaoyang District, Beijing. It was designed as the main stadium of the 2008 Beijing Olympic Games, hosting Olympic athletics, football, and track and field throwing events. Since October 2008, following the end of the Olympics, it has been open as a tourist attraction. It is now a hub for international and domestic sporting events and leisure activities. In 2022, it hosted the opening and closing ceremonies of the Winter Olympic Games.",
      short:
        "The 'Bird's Nest' National Stadium is the main venue of the 2008 Olympics and the 2022 Winter Olympics in Beijing.",
    },
    "national-theatre": {
      name: "National Theatre",
      industry: "Construction",
      location: "Beijing, China",
      features:
        "Beijing's egg-shaped National Centre for the Performing Arts, surrounded by an artificial lake.",
      tasks:
        "Engineering support for the opera, concert, and drama theatres with a combined capacity of 5,452 seats.",
      equipment: RELATED_PRODUCTS.en,
      benefits:
        "Bellery equipment ensures the reliable operation of the water supply and drainage systems at this unique cultural venue.",
      description:
        "The National Centre for the Performing Arts, also known as the National Grand Theatre, is surrounded by an artificial lake and features an impressive glass-and-titanium, egg-shaped opera house designed by French architect Paul Andreu. It seats 5,452 people across its theatres: the Opera Hall at the centre, the Concert Hall to the east, and the Theatre Hall to the west. The dome measures 212 meters east-west, 144 meters north-south, and 46 meters in height. The main entrance is on the north side, with visitors entering the building through a corridor that passes beneath the lake.",
      short:
        "Beijing's National Grand Theatre is a cultural complex with opera, concert, and drama halls.",
    },
    "pudong-airport": {
      name: "Pudong International Airport",
      industry: "Municipal Infrastructure",
      location: "Shanghai, China",
      features:
        "Shanghai's largest international aviation hub, with four parallel runways and a satellite terminal.",
      tasks:
        "Providing engineering systems for the airport with a capacity of up to 80 million passengers per year.",
      equipment: RELATED_PRODUCTS.en,
      benefits:
        "Bellery pump equipment meets the high reliability requirements of civil aviation facilities.",
      description:
        "Pudong International Airport is the main international airport serving Shanghai, China, located 30 km (19 miles) east of the city centre. It is a major aviation hub in China and serves as the primary hub for China Eastern Airlines and Shanghai Airlines, as well as a hub for Spring Airlines and Juneyao Airlines, and a secondary hub for China Southern Airlines. PVG currently has four parallel runways, and an additional satellite terminal with two more runways has recently opened, bringing the airport's capacity to 80 million passengers per year. In 2017, the airport served 70,001,237 passengers, making it the second-busiest airport in mainland China and the 9th busiest in the world. By the end of 2016, PVG served 210 destinations and hosted 104 airlines.",
      short:
        "Pudong International Airport is Shanghai's main aviation hub and one of China's largest airports.",
    },
    "beijing-aquarium": {
      name: "Beijing Aquarium",
      industry: "Construction",
      location: "Beijing Zoo, Xizhimen Outer Street, Xicheng, Beijing",
      features:
        "China's largest and most advanced indoor aquarium, covering 12 hectares in the shape of a seashell.",
      tasks:
        "Providing water circulation and treatment for seven themed halls and the oceanarium.",
      equipment: RELATED_PRODUCTS.en,
      benefits:
        "Bellery equipment ensures the stable operation of the aquarium's complex hydraulic systems.",
      description:
        "Located within Beijing Zoo at No. 137 Xizhimen Outer Street, Xicheng District, the Beijing Aquarium is China's largest and most advanced indoor aquarium, covering a total area of 30 acres (12 hectares). It is designed in the shape of a seashell, with orange and blue as its primary colours, symbolising the mysterious vastness of the sea and the boundless vitality of marine life. The Beijing Aquarium has seven halls: Rainforest Wonder, Bering Strait, Whale and Dolphin Bay, Chinese Sturgeon Hall, Seabed Travel, Touch Pool, and Ocean Theatre.",
      short:
        "Beijing Aquarium is China's largest indoor oceanarium, featuring seven themed halls.",
    },
    "tianjin-museum": {
      name: "Tianjin Museum",
      industry: "Construction",
      location: "Yinhe Square, Hexi District, Tianjin",
      features:
        "Tianjin's largest museum, covering approximately 50,000 square meters, designed in the architectural shape of a swan.",
      tasks:
        "Engineering support for a modern museum complex for the storage and display of cultural relics.",
      equipment: RELATED_PRODUCTS.en,
      benefits:
        "Bellery pump solutions ensure the reliable operation of the engineering systems in this public building.",
      description:
        "The Tianjin Museum is the largest museum in Tianjin, China, showcasing a wide range of cultural and historical relics significant to the city. The museum is located at Yinhe Square in Hexi District, Tianjin, and covers an area of approximately 50,000 square meters. Its unique architectural style, resembling a swan spreading its wings, has quickly made it one of the city's landmark buildings. It was built as a large, modern venue for collecting, preserving, and researching historical relics, as well as a place for education, leisure, and tourism.",
      short:
        "The Tianjin Museum is the city's largest museum, featuring unique swan-shaped architecture.",
    },
    "qingdao-airport": {
      name: "Qingdao Jiaodong International Airport",
      industry: "Municipal Infrastructure",
      location: "Jiaodong, Shandong, China",
      features:
        "A new international airport replacing Qingdao Liuting Airport, becoming the largest in Shandong Province.",
      tasks:
        "Building the airport's engineering infrastructure designed for 35 million passengers by 2025.",
      equipment: RELATED_PRODUCTS.en,
      benefits:
        "Bellery equipment meets the requirements of major transport and infrastructure facilities.",
      description:
        "Qingdao Jiaodong International Airport is an airport built to serve the city of Qingdao in Shandong Province, China. Approved in December 2013, it replaces the existing Qingdao Liuting International Airport as the city's main airport. It is located in Jiaodong, Jiaozhou, 39 kilometers (24 miles) from central Qingdao. Following its completion in 2019, it became the largest airport in Shandong. By 2025, the new airport will have 178 aircraft stands and provide transport services for 35 million passengers and 500,000 tons of cargo per year. By 2045, a total of 290 aircraft stands is expected, handling 55 million passengers and one million tons of cargo.",
      short:
        "Qingdao Jiaodong International Airport is the city's new main airport and the largest in Shandong.",
    },
  },
  zh: {
    "bird-nest": {
      name: "北京国家体育场",
      industry: "建筑",
      location: "北京市朝阳区奥林匹克公园",
      features: "2008年北京奥运会主体育场,设计定位为国际及国内体育赛事中心。",
      tasks: "为大型高承载力体育设施提供供水与排水系统保障。",
      equipment: RELATED_PRODUCTS.zh,
      benefits:
        "Bellery可靠的水泵设备保障了这一世界级场馆工程系统的稳定运行。",
      description:
        "国家体育场,昵称\"鸟巢\",位于北京市朝阳区奥林匹克公园内。它是2008年北京奥运会的主体育场,承办了田径、足球及各类投掷项目的奥运赛事。2008年10月奥运会结束后,该场馆作为旅游景点对外开放,如今已成为国际及国内体育赛事和休闲活动的中心。2022年,这里举办了冬季奥运会的开闭幕式。",
      short: "\"鸟巢\"国家体育场是2008年奥运会及2022年北京冬奥会的主赛场。",
    },
    "national-theatre": {
      name: "国家大剧院",
      industry: "建筑",
      location: "中国北京",
      features: "北京国家表演艺术中心,呈蛋形设计,四周环绕人工湖。",
      tasks: "为总容纳量5452名观众的歌剧院、音乐厅及话剧场提供工程保障。",
      equipment: RELATED_PRODUCTS.zh,
      benefits: "Bellery设备保障了这一独特文化场馆供水与排水系统的可靠运行。",
      description:
        "国家大剧院,又称国家表演艺术中心,四周环绕人工湖,由法国建筑师保罗·安德鲁设计,呈现出令人惊叹的玻璃钛金属蛋形外观。剧院可容纳5452名观众,中部为歌剧院,东侧为音乐厅,西侧为戏剧场。穹顶东西向长212米,南北向长144米,高46米。主入口位于北侧,观众需经过湖底通道进入场馆。",
      short: "北京国家大剧院是集歌剧院、音乐厅与戏剧场于一体的文化综合体。",
    },
    "pudong-airport": {
      name: "浦东国际机场",
      industry: "市政基础设施",
      location: "中国上海",
      features: "上海最大的国际航空枢纽,拥有四条平行跑道及一座卫星厅。",
      tasks: "为年旅客吞吐量高达8000万人次的机场提供工程系统保障。",
      equipment: RELATED_PRODUCTS.zh,
      benefits: "Bellery水泵设备满足民航设施对可靠性的高标准要求。",
      description:
        "浦东国际机场是服务于中国上海的主要国际机场,位于上海市中心以东30公里(19英里)处。它是中国的重要航空枢纽,也是中国东方航空和上海航空的主要基地,同时也是春秋航空、吉祥航空的枢纽机场以及中国南方航空的次要枢纽。目前浦东机场拥有四条平行跑道,近期新开通的卫星厅又新增两条跑道,使机场年旅客吞吐能力达到8000万人次。2017年,机场旅客吞吐量达70,001,237人次,是中国大陆第二繁忙机场,位列全球第9繁忙机场。截至2016年底,浦东机场通航210个目的地,共有104家航空公司在此运营。",
      short: "浦东国际机场是上海的主要航空枢纽,也是中国最大的机场之一。",
    },
    "beijing-aquarium": {
      name: "北京海洋馆",
      industry: "建筑",
      location: "北京动物园,北京市西城区西直门外大街",
      features: "中国最大、最先进的室内水族馆,占地12公顷,外形呈贝壳状。",
      tasks: "为七大主题展厅及海洋剧场提供水循环与水处理保障。",
      equipment: RELATED_PRODUCTS.zh,
      benefits: "Bellery设备保障了水族馆复杂水利系统的稳定运行。",
      description:
        "北京海洋馆坐落于北京动物园内,地址为西城区西直门外大街137号,是中国最大、最先进的室内水族馆,总占地面积30英亩(12公顷)。场馆呈贝壳造型,以橙色和蓝色为主色调,象征着神秘浩瀚的海洋与生生不息的海洋生命力。北京海洋馆设有七大展区:雨林奇观、白令海峡、鲸豚湾、中华鲟馆、海底漫游、抚摸池及海洋剧场。",
      short: "北京海洋馆是中国最大的室内海洋馆,设有七大主题展区。",
    },
    "tianjin-museum": {
      name: "天津博物馆",
      industry: "建筑",
      location: "天津市河西区银河广场",
      features: "天津最大的博物馆,建筑面积约5万平方米,外形设计为天鹅造型。",
      tasks: "为用于收藏与展示文物的现代化博物馆综合体提供工程保障。",
      equipment: RELATED_PRODUCTS.zh,
      benefits: "Bellery水泵解决方案保障了这一公共建筑工程系统的可靠运行。",
      description:
        "天津博物馆是天津最大的博物馆,馆藏丰富,展示了众多对天津具有重要意义的文化历史文物。博物馆位于天津市河西区银河广场,占地面积约5万平方米。其独特的建筑风格宛如展翅的天鹅,迅速成为这座城市的地标性建筑之一。博物馆建设定位为大型现代化的文物收藏、保护与研究场所,同时也是教育、休闲与旅游的场所。",
      short: "天津博物馆是该市最大的博物馆,拥有独特的天鹅造型建筑。",
    },
    "qingdao-airport": {
      name: "青岛胶东国际机场",
      industry: "市政基础设施",
      location: "中国山东胶东",
      features: "取代青岛流亭机场的新建国际机场,成为山东省最大的机场。",
      tasks: "建设面向2025年3500万旅客吞吐量设计的机场工程基础设施。",
      equipment: RELATED_PRODUCTS.zh,
      benefits: "Bellery设备满足大型交通及基础设施项目的要求。",
      description:
        "青岛胶东国际机场是为服务中国山东省青岛市而建设的机场。该项目于2013年12月获批,将取代现有的青岛流亭国际机场,成为该市的主要机场。机场位于胶州胶东,距青岛市中心39公里(24英里)。2019年建成后,该机场已成为山东省最大的机场。到2025年,新机场将拥有178个机位,年运输能力达3500万人次旅客及50万吨货物。到2045年,预计机位总数将达290个,可运送5500万人次旅客及100万吨货物。",
      short: "青岛胶东国际机场是该市新的主要机场,也是山东省最大的机场。",
    },
  },
};

type IndustryText = Pick<ProjectIndustry, "title" | "intro" | "items">;

const INDUSTRY_IDS = [
  "construction",
  "energy",
  "water",
  "petrochemical",
  "municipal",
  "industrial",
];

const INDUSTRY_TEXT: Record<AppLocale, Record<string, IndustryText>> = {
  ru: {
    construction: {
      title: "Строительство",
      intro:
        "Строительство зданий является важным элементом градостроительства, в то время как система водоснабжения является важным аспектом в строительстве зданий.",
      items: [
        "Пекинский национальный стадион",
        "Национальный театр",
        "Пекинский аквариум",
        "Музей Тяньцзиня",
      ],
    },
    energy: {
      title: "Энергетика",
      intro:
        "Сегодня компания принимает участие в проектах атомных электростанций «Циншань» и «Лингао», проектах корпорации China Energy, электростанциях «Датан» и «Хуанэн», а также в других проектах атомной энергетики, теплоэнергетики и гидроэнергетики.",
      items: [
        "Атомные электростанции «Циншань» и «Лингао»",
        "Электростанции «Датан» и «Хуанэн»",
        "Qinshan Third Nuclear Power Co.",
        "Таньшаньская электростанция",
        "Электростанция Цзямусы",
      ],
    },
    water: {
      title: "Водоснабжение",
      intro:
        "Сегодня компания принимает участие в проектах водоканалов Гонконга и Макао, ирригационных проектах на р. Хуанхэ «Шаньси Цзямакоу», Шаньси «Сифань», Гуандун «Юн'ань Люду» и Нинся «Янхуан», проекте по охране водных ресурсов р. Хуанхэ «Сяоланди», проекте городской питьевой воды «Ордос», проекте дренажа и ирригации в Анголе и ирригационном проекте Мьянмы.",
      items: [
        "Проект городской питьевой воды «Ордос»",
        "Проект по охране водных ресурсов р. Хуанхэ «Сяоланди»",
        "Ирригационный проект «Шаньси Цзямакоу»",
        "Проекты водоканалов Гонконга и Макао",
      ],
    },
    petrochemical: {
      title: "Нефтехимия",
      intro:
        "Сегодня компания принимает участие в проектах нефтяного месторождения в г. Дацин, химического концерна пров. Шаньси «Саньян», проекте CNOOC по очистке нефти, а также в других проектах нефтяных месторождений, коксохимической, химической промышленности и нефтепереработки.",
      items: [
        "Дацинская нефтегазодобывающая компания",
        "Проект CNOOC по очистке нефти",
        "Химический концерн пров. Шаньси «Саньян»",
        "Sinopec Guangzhou Petrochemical Co.",
      ],
    },
    municipal: {
      title: "Муниципальная инфраструктура",
      intro:
        "Сегодня компания принимает участие в проектах крупных аэропортов, метрополитенов и объектов городской инфраструктуры.",
      items: [
        "Международный аэропорт Пудун",
        "Международный аэропорт Циндао Цзяодун",
        "Столичный аэропорт",
        "Шанхайский международный аэропорт Хунцяо",
        "Аэропорт Тяньхэ в Ухань",
      ],
    },
    industrial: {
      title: "Промышленность",
      intro:
        "Компания Bellery поставляет разнообразные насосы для перекачки жидкости для многих промышленных предприятий.",
      items: ["BaoSteel", "Shougang Group", "Siemens", "Bayer Pharmaceuticals"],
    },
  },
  kk: {
    construction: {
      title: "Құрылыс",
      intro:
        "Ғимарат құрылысы қала құрылысының маңызды элементі болып табылады, ал сумен жабдықтау жүйесі ғимарат құрылысының маңызды аспектісі болып саналады.",
      items: [
        "Пекин ұлттық стадионы",
        "Ұлттық театр",
        "Пекин аквариумы",
        "Тяньцзинь мұражайы",
      ],
    },
    energy: {
      title: "Энергетика",
      intro:
        "Бүгінде компания Циншань және Лингао атом электр станциялары жобаларына, China Energy корпорациясының жобаларына, Датан және Хуанэн электр станцияларына, сондай-ақ басқа да атом энергетикасы, жылу энергетикасы және гидроэнергетика жобаларына қатысады.",
      items: [
        "Циншань және Лингао атом электр станциялары",
        "«Датан» және «Хуанэн» электр станциялары",
        "Qinshan Third Nuclear Power Co.",
        "Таньшань электр станциясы",
        "Цзямусы электр станциясы",
      ],
    },
    water: {
      title: "Сумен жабдықтау",
      intro:
        "Бүгінде компания Гонконг пен Макаодағы су құбыры жобаларына, Хуанхэ өзеніндегі Шаньси Цзямакоу, Шаньси Сифань, Гуандун Юнъань Люду және Нинся Янхуан ирригация жобаларына, Хуанхэ өзенінің «Сяоланди» су ресурстарын қорғау жобасына, «Ордос» қалалық ауыз су жобасына, Анголадағы дренаж және ирригация жобасына, сондай-ақ Мьянмадағы ирригация жобасына қатысады.",
      items: [
        "«Ордос» қалалық ауыз су жобасы",
        "Хуанхэ өзенінің «Сяоланди» су ресурстарын қорғау жобасы",
        "«Шаньси Цзямакоу» ирригация жобасы",
        "Гонконг пен Макао су құбыры жобалары",
      ],
    },
    petrochemical: {
      title: "Мұнай химиясы",
      intro:
        "Бүгінде компания Дацин мұнай кен орны, Шаньси провинциясының «Санъян» химия концерні, CNOOC мұнай тазарту жобасы, сондай-ақ басқа да мұнай кен орындары, коксохимия, химия өнеркәсібі және мұнай өңдеу жобаларына қатысады.",
      items: [
        "Дацин мұнай-газ өндіру компаниясы",
        "CNOOC мұнай тазарту жобасы",
        "Шаньси провинциясының «Санъян» химия концерні",
        "Sinopec Guangzhou Petrochemical Co.",
      ],
    },
    municipal: {
      title: "Муниципалдық инфрақұрылым",
      intro:
        "Бүгінде компания ірі әуежайлар, метрополитендер және қалалық инфрақұрылым нысандарының жобаларына қатысады.",
      items: [
        "Пудун халықаралық әуежайы",
        "Циндао Цзяодун халықаралық әуежайы",
        "Пекин астаналық әуежайы",
        "Шанхай Хунцяо халықаралық әуежайы",
        "Ухандағы Тяньхэ әуежайы",
      ],
    },
    industrial: {
      title: "Өнеркәсіп",
      intro:
        "Bellery компаниясы көптеген өнеркәсіптік кәсіпорындарға сұйықтық айдауға арналған әртүрлі сорғыларды жеткізеді.",
      items: ["BaoSteel", "Shougang Group", "Siemens", "Bayer Pharmaceuticals"],
    },
  },
  en: {
    construction: {
      title: "Construction",
      intro:
        "Building construction is an important element of urban development, while the water supply system is an important aspect of building construction.",
      items: [
        "Beijing National Stadium",
        "National Theatre",
        "Beijing Aquarium",
        "Tianjin Museum",
      ],
    },
    energy: {
      title: "Energy",
      intro:
        "Today the company takes part in the Qinshan and Lingao nuclear power plant projects, China Energy Investment Corporation projects, the Datang and Huaneng power plants, as well as other nuclear, thermal, and hydropower projects.",
      items: [
        "Qinshan and Lingao Nuclear Power Plants",
        "Datang and Huaneng Power Plants",
        "Qinshan Third Nuclear Power Co.",
        "Tangshan Power Plant",
        "Jiamusi Power Plant",
      ],
    },
    water: {
      title: "Water Supply",
      intro:
        "Today the company takes part in water utility projects in Hong Kong and Macau, irrigation projects on the Yellow River such as Shanxi Jiamakou, Shanxi Xifan, Guangdong Yong'an Liudu, and Ningxia Yanhuang, the Xiaolangdi water conservation project on the Yellow River, the Ordos urban drinking water project, a drainage and irrigation project in Angola, and an irrigation project in Myanmar.",
      items: [
        "Ordos Urban Drinking Water Project",
        "Xiaolangdi Yellow River Water Conservation Project",
        "Shanxi Jiamakou Irrigation Project",
        "Hong Kong and Macau Water Utility Projects",
      ],
    },
    petrochemical: {
      title: "Petrochemical",
      intro:
        "Today the company takes part in projects at the Daqing oil field, the Sanyou chemical group in Shanxi Province, the CNOOC oil refining project, and other projects in oil fields, coking, the chemical industry, and oil refining.",
      items: [
        "Daqing Oil & Gas Company",
        "CNOOC Oil Refining Project",
        "Sanyou Chemical Group, Shanxi Province",
        "Sinopec Guangzhou Petrochemical Co.",
      ],
    },
    municipal: {
      title: "Municipal Infrastructure",
      intro:
        "Today the company takes part in projects involving major airports, metro systems, and urban infrastructure facilities.",
      items: [
        "Pudong International Airport",
        "Qingdao Jiaodong International Airport",
        "Beijing Capital Airport",
        "Shanghai Hongqiao International Airport",
        "Wuhan Tianhe Airport",
      ],
    },
    industrial: {
      title: "Industry",
      intro:
        "Bellery supplies a wide range of liquid transfer pumps to many industrial enterprises.",
      items: ["BaoSteel", "Shougang Group", "Siemens", "Bayer Pharmaceuticals"],
    },
  },
  zh: {
    construction: {
      title: "建筑",
      intro:
        "建筑建设是城市发展的重要组成部分,而供水系统则是建筑建设中的重要环节。",
      items: ["北京国家体育场", "国家大剧院", "北京海洋馆", "天津博物馆"],
    },
    energy: {
      title: "能源",
      intro:
        "如今,公司参与秦山及岭澳核电站项目、中国能源集团相关项目、大唐及华能电厂,以及其他核电、火电和水电项目。",
      items: [
        "秦山及岭澳核电站",
        "大唐及华能电厂",
        "Qinshan Third Nuclear Power Co.",
        "唐山电厂",
        "佳木斯电厂",
      ],
    },
    water: {
      title: "供水",
      intro:
        "如今,公司参与香港及澳门供水项目、黄河流域山西贾马口、山西西范、广东永安六都及宁夏杨黄等灌溉工程、黄河小浪底水利枢纽、鄂尔多斯城市饮用水工程,以及安哥拉排灌工程和缅甸灌溉工程。",
      items: [
        "鄂尔多斯城市饮用水工程",
        "黄河小浪底水利枢纽",
        "山西贾马口灌溉工程",
        "香港及澳门供水项目",
      ],
    },
    petrochemical: {
      title: "石油化工",
      intro:
        "如今,公司参与大庆油田、山西三维化工集团及中海油炼油项目,以及其他油田、焦化、化工和炼油相关项目。",
      items: [
        "大庆油气田公司",
        "中海油炼油项目",
        "山西三维化工集团",
        "Sinopec Guangzhou Petrochemical Co.",
      ],
    },
    municipal: {
      title: "市政基础设施",
      intro: "如今,公司参与大型机场、地铁及城市基础设施项目。",
      items: [
        "浦东国际机场",
        "青岛胶东国际机场",
        "首都机场",
        "上海虹桥国际机场",
        "武汉天河机场",
      ],
    },
    industrial: {
      title: "工业",
      intro: "Bellery为众多工业企业提供多样化的液体输送水泵。",
      items: ["BaoSteel", "Shougang Group", "Siemens", "Bayer Pharmaceuticals"],
    },
  },
};

const COMPACT: Record<AppLocale, string[]> = {
  ru: [
    "Столичный аэропорт",
    "Шанхайский международный аэропорт Хунцяо",
    "Международный аэропорт Пудун",
    "Пекинский национальный стадион",
    "Национальный театр",
    "Пекинский аквариум",
    "Музей Тяньцзиня",
    "Международный аэропорт Циндао Цзяодун",
    "Шанхайский сад Луцзяцзуй",
    "Сад Гуандун Цзядуо",
    "Второй дом социального обеспечения в Шанхае",
    "Шанхайский центр Керри",
    "Шанхайский всемирный торговый центр",
    "Международный Большой театр",
    "Проект городской питьевой воды «Ордос»",
    "Проект по охране водных ресурсов р. Хуанхэ «Сяоланди»",
    "Ирригационный проект «Шаньси Цзямакоу»",
    "Проекты водоканалов Гонконга и Макао",
    "Дацинская нефтегазодобывающая компания",
    "BaoSteel",
    "Shougang Group",
    "Siemens",
    "Bayer Pharmaceuticals",
    "Электростанции «Датан» и «Хуанэн»",
    "Qinshan Third Nuclear Power Co.",
    "Таньшаньская электростанция",
    "Электростанция Цзямусы",
    "Sinopec Guangzhou Petrochemical Co.",
    "Аэропорт Тяньхэ в Ухань",
  ],
  kk: [
    "Пекин астаналық әуежайы",
    "Шанхай Хунцяо халықаралық әуежайы",
    "Пудун халықаралық әуежайы",
    "Пекин ұлттық стадионы",
    "Ұлттық театр",
    "Пекин аквариумы",
    "Тяньцзинь мұражайы",
    "Циндао Цзяодун халықаралық әуежайы",
    "Шанхай Луцзяцзуй бағы",
    "Гуандун Цзядуо бағы",
    "Шанхайдағы екінші әлеуметтік қамсыздандыру үйі",
    "Шанхай Керри орталығы",
    "Шанхай дүниежүзілік сауда орталығы",
    "Халықаралық үлкен театр",
    "«Ордос» қалалық ауыз су жобасы",
    "Хуанхэ өзенінің «Сяоланди» су ресурстарын қорғау жобасы",
    "«Шаньси Цзямакоу» ирригация жобасы",
    "Гонконг пен Макао су құбыры жобалары",
    "Дацин мұнай-газ өндіру компаниясы",
    "BaoSteel",
    "Shougang Group",
    "Siemens",
    "Bayer Pharmaceuticals",
    "«Датан» және «Хуанэн» электр станциялары",
    "Qinshan Third Nuclear Power Co.",
    "Таньшань электр станциясы",
    "Цзямусы электр станциясы",
    "Sinopec Guangzhou Petrochemical Co.",
    "Ухандағы Тяньхэ әуежайы",
  ],
  en: [
    "Beijing Capital Airport",
    "Shanghai Hongqiao International Airport",
    "Pudong International Airport",
    "Beijing National Stadium",
    "National Theatre",
    "Beijing Aquarium",
    "Tianjin Museum",
    "Qingdao Jiaodong International Airport",
    "Shanghai Lujiazui Garden",
    "Guangdong Jiaduo Garden",
    "Shanghai No. 2 Social Welfare Home",
    "Shanghai Kerry Centre",
    "Shanghai World Trade Center",
    "International Grand Theatre",
    "Ordos Urban Drinking Water Project",
    "Xiaolangdi Yellow River Water Conservation Project",
    "Shanxi Jiamakou Irrigation Project",
    "Hong Kong and Macau Water Utility Projects",
    "Daqing Oil & Gas Company",
    "BaoSteel",
    "Shougang Group",
    "Siemens",
    "Bayer Pharmaceuticals",
    "Datang and Huaneng Power Plants",
    "Qinshan Third Nuclear Power Co.",
    "Tangshan Power Plant",
    "Jiamusi Power Plant",
    "Sinopec Guangzhou Petrochemical Co.",
    "Wuhan Tianhe Airport",
  ],
  zh: [
    "首都机场",
    "上海虹桥国际机场",
    "浦东国际机场",
    "北京国家体育场",
    "国家大剧院",
    "北京海洋馆",
    "天津博物馆",
    "青岛胶东国际机场",
    "上海陆家嘴花园",
    "广东嘉多花园",
    "上海市第二社会福利院",
    "上海嘉里中心",
    "上海世界贸易中心",
    "国际大剧院",
    "鄂尔多斯城市饮用水工程",
    "黄河小浪底水利枢纽",
    "山西贾马口灌溉工程",
    "香港及澳门供水项目",
    "大庆油气田公司",
    "BaoSteel",
    "Shougang Group",
    "Siemens",
    "Bayer Pharmaceuticals",
    "大唐及华能电厂",
    "Qinshan Third Nuclear Power Co.",
    "唐山电厂",
    "佳木斯电厂",
    "Sinopec Guangzhou Petrochemical Co.",
    "武汉天河机场",
  ],
};

const HERO_INTRO: Record<AppLocale, string> = {
  ru: "Сегодня компания принимает участие в проектах строительства, водоснабжения и энергетики — от атомной и теплоэнергетики до нефтяной, химической и горнодобывающей промышленности. Продукция Bellery широко используется в коммунальном хозяйстве, охране водных ресурсов, строительстве, противопожарной защите и электроэнергетике. Компания реализует большое количество локальных и зарубежных типовых проектов; оборудование применяется в проектах всемирно известных компаний в Китае.",
  kk: "Бүгінде компания құрылыс, сумен жабдықтау және энергетика саласындағы жобаларға — атом және жылу энергетикасынан бастап мұнай, химия және тау-кен өнеркәсібіне дейін қатысады. Bellery өнімі коммуналдық шаруашылықта, су ресурстарын қорғауда, құрылыста, өртке қарсы қорғанышта және электр энергетикасында кеңінен қолданылады. Компания жергілікті және шетелдік үлгілі жобалардың үлкен санын жүзеге асырады; жабдық Қытайдағы әлемге әйгілі компаниялардың жобаларында қолданылады.",
  en: "Today the company takes part in construction, water supply, and energy projects — from nuclear and thermal power to the oil, chemical, and mining industries. Bellery products are widely used in public utilities, water resource protection, construction, fire protection, and power engineering. The company carries out a large number of typical local and international projects; its equipment is used in the projects of world-renowned companies in China.",
  zh: "如今,公司参与建筑、供水及能源领域的众多项目——涵盖核电、火电,乃至石油、化工和采矿等行业。Bellery产品广泛应用于市政公用事业、水资源保护、建筑、消防及电力等领域。公司实施了大量国内外典型项目,其设备被应用于众多世界知名企业在华的项目中。",
};

export function getProjectsData(locale: AppLocale): ProjectsData {
  const textByLocale = FEATURED_TEXT[locale] ?? FEATURED_TEXT.ru;
  const industryTextByLocale = INDUSTRY_TEXT[locale] ?? INDUSTRY_TEXT.ru;

  const featured: ProjectFeatured[] = PROJECT_META.map((meta) => ({
    ...meta,
    ...(textByLocale[meta.slug] ?? FEATURED_TEXT.ru[meta.slug]),
  }));

  const industries: ProjectIndustry[] = INDUSTRY_IDS.map((id) => ({
    id,
    ...(industryTextByLocale[id] ?? INDUSTRY_TEXT.ru[id]),
  }));

  return {
    heroIntro: HERO_INTRO[locale] ?? HERO_INTRO.ru,
    compact: COMPACT[locale] ?? COMPACT.ru,
    featured,
    industries,
  };
}

export function getProjectBySlug(slug: string, locale: AppLocale = "ru") {
  return getProjectsData(locale).featured.find((p) => p.slug === slug);
}

export function getProjectSlugs(): string[] {
  return PROJECT_META.map((m) => m.slug);
}
