const allProjects = [
  {
    image: "../../images/projects_images/Rekonstruktsiya_PL_750kV_KHAES_Zheshuv/xaec_1.jpg",
    link: "../../pages/projects/project_page_example.html?id=1",
    title:
      "ВИКОНАННЯ КОМПЛЕКСУ РОБІТ З РЕКОНСТРУКЦІЇ ПЛ 750 КВ ХАЕС-ЖЕШУВ З ПЕРЕВОДОМ НА НАПРУГУ 400 КВ ІЗ РЕКОНСТРУКЦІЄЮ ВРП 750 КВ ВП «ХАЕС» ТА ВСТАНОВЛЕННЯМ АТ 750/400 КВ",
    client: "НЕК «Укренерго»",
    contract: "Виконання комплексу робіт з реконструкції ПЛ 750 кВ ХАЕС-Жешув",
    sector: "Електроенергетика",
    region: "Хмельницька область, Україна",
    period: "2022-2023",
    filter: "big_projects",
  },
  {
    image: "../../images/projects_images/PL_110KV_Sonyachna_Artsyza/Artsyzz-Solnechnaya.jpg",
    link: "../../pages/projects/project_page_example.html?id=19",
    title: "ПЛ 110 кВ СЕС «СОНЯЧНА - АРЦИЗ», ПС 110 кВ СОНЯЧНА-АРЦИЗ",
    client: "ДП НЕК «Укренерго»",
    contract:
      "Виконання будівельно-монтажних та пусконалагоджувальних робіт на пристанційному вузлі ПС 110 кВ Сонячна-Арциз",
    sector: "Альтернативна енергетика",
    region: "Україна, Одеська область",
    period: "2011-2012",
    filter: "big_projects",
  },
  {
    image: "../../images/projects_images/PL_110KV_Sonyachna_Kiliya/0822.jpg",
    link: "../../pages/projects/project_page_example.html?id=20 ",
    title: "ПЛ 110 кВ СЕС «СОНЯЧНА - КІЛІЯ», ПС 110 кВ СОНЯЧНА - КІЛІЯ",
    client: "ДП НЕК «Укренерго»",
    contract:
      "Будівельно-монтажні та пусконалагоджувальні роботи на ПЛ 110 кВ СЕС «Сонячна-Кілія» та на пристанційному вузлі ПС 110 кВ Сонячна-Кілія",
    sector: "Альтернативна електроенергетика",
    region: "Україна, Одеська область",
    period: "2011-2014",
  },
  {
    image: "../../images/projects_images/Rekonstruktsiya_PL_220kV_Centrolit_Kominternove/P8100028.JPG",
    link: "../../pages/projects/project_page_example.html?id=22",
    title: "РЕКОНСТРУКЦІЯ ПЛ 220 кВ ЦЕНТРОЛІТ - КОМІНТЕРНОВЕ",
    client: "ДП НЕК «Укренерго»",
    contract: "Роботи з реконструкції ПЛ 220 кВ в прогоні опор 1-99",
    sector: "Електроенергетика",
    region: "Україна, Івано-Франківська обл.",
    period: "2013",
  },
  {
    image:
      "../../images/projects_images/Rekonstruktsiya_PL_330kV_Kryvorizka_TES_Trykhati/PL_330kV_Kryvorizka_TES_Trykhaty.JPG",
    link: "../../pages/projects/project_page_example.html?id=24",
    title: "РЕКОНСТРУКЦІЯ ПЛ 330 кВ КРИВОРІЗЬКА ТЕС - ТРИХАТИ",
    client: "ДП НЕК «Укренерго»",
    contract: "Реконструкція ділянки в прогоні № 74-150, 160-172 з заміною залізобетонних опор на металеві опори",
    sector: "Електроенергетика",
    region: "Україна, Дніпропетровська обл., Миколаївська обл.",
    period: "2012",
  },
  {
    image: "../../images/projects_images/Rekonstruktsiya_PS_750kV_Vinnytska/TS_2.jpg",
    link: "../../pages/projects/project_page_example.html?id=7",
    title: "РЕКОНСТРУКЦІЯ ПС 750 КВ «ВІННИЦЬКА»",
    client: " ПрАТ «НЕК «Укренерго»",
    contract: "  Реконструкція ПС 750 кВ «Вінницька»",
    sector: "Електроенергетика",
    region: "Україна, Вінницька обл.",
    period: "2021-2025",
    filter: "big_projects",
  },
  {
    image: "../../images/projects_images/Tekhnichne_pereosnashchennya_PS_330kV_Novokyivska/02.jpg",
    link: "../../pages/projects/project_page_example.html?id=8",
    title: "ТЕХНІЧНЕ ПЕРЕОСНАЩЕННЯ ПС 330 КВ «НОВОКИЇВСЬКА»",
    client: "ДП НЕК «Укренерго»",
    contract:
      " Технічне переоснащення ПС 330 кВ «Новокиївська». Проєктування, виробництво, постачання, монтаж, випробування, налагодження та введення в експлуатацію згідно контракту на виконання робіт",
    sector: "Електроенергетика",
    region: "Україна, Київська обл.",
    period: "2017-2021",
  },
  {
    image: "../../images/projects_images/Rekonstruktsiya_PL_110kV_Adzhalyk_Berehova/support_type_PB-110-8.jpg",
    link: "../../pages/projects/project_page_example.html?id=9",
    title: "РЕКОНСТРУКЦІЯ ПЛ 110 кВ «АДЖАЛИК-БЕРЕГОВА 1,2»",
    client: " ДП «Морський торговельний порт «Южний»»",
    contract: "Реконструкція ПЛ 110 кВ «АДЖАЛИК-БЕРЕГОВА 1,2».",
    sector: "Електроенергетика",
    region: "Українa, Одеська обл.",
    period: "2018",
  },
  {
    image: "../../images/projects_images/Budivnytstvo_PL_750kV_Rivnenska_AES_PS_750kV_Kyivska/20150409_101711.jpg",
    link: "../../pages/projects/project_page_example.html?id=10",
    title: "БУДІВНИЦТВО ПЛ 750 КВ «РІВНЕНСЬКА АЕС – ПС 750 КВ КИЇВСЬКА»",
    client: "ДП «НЕК «Укренерго»",
    contract: "Будівництво ПЛ 750 кВ «Рівненська АЕС – ПС Київська».",
    sector: "Електроенергетика",
    region: "Україна, Рівненська обл.",
    period: "2013-2015",
    filter: "big_projects",
  },
  {
    image: "../../images/projects_images/Budivnytstvo_KNS_6B_KNS_7A_Odesa/20150622_120946.jpg",
    link: "../../pages/projects/project_page_example.html?id=11",
    title: "БУДІВНИЦТВО КНС 7А та КНС 6Б В М. ОДЕСА",
    client: " КП Агентство програм розвитку Одеси Одеської міськради",
    contract:
      "Проектні, будівельно-монтажні, пусконалагоджувальні роботи, постачання, монтаж та введення в експлуатацію нових насосних станцій",
    sector: "Комунальне господарство",
    region: " Україна, Одеська обл., м.Одеса",
    period: "2015",
  },
  {
    image: "../../images/projects_images/Demontazh_budivel_PS_750kV_Kakhovska/SAM_3010.JPG",
    link: "../../pages/projects/project_page_example.html?id=12",
    title: "ДЕМОНТАЖ БУДІВЕЛЬНИХ СПОРУД НА ПС 750 кВ «КАХОВСЬКА»",
    client: "ДП НЕК «Укренерго» Південна ЕС",
    contract: "Роботи з демонтажу будівель, металоконструкцій та споруд на ПС 750 кВ «Каховська»",
    sector: "Електроенергетика",
    region: "Україна, Херсонська обл.",
    period: "2014",
  },
  {
    image: "../../images/projects_images/Budivnytstvo_PS_750kV_Kakhovska/Kakhovskaya_oktyabr_2016_1.jpg",
    link: "../../pages/projects/project_page_example.html?id=13",
    title: "БУДІВНИЦТВО ПС 750/330 кВ «КАХОВСЬКА»",
    client: "ПрАТ «НЕК «Укренерго»",
    contract:
      " Будівництво ПС 750/330 кВ «Каховська», постачання та монтаж АТ 2 1000 МВА, автоматизованої системи управління технологічними процесами, системи релейного захисту та автоматики, а також спорудження спорідненої інфраструктури.",
    sector: "Електроенергетика",
    region: "Україна, Херсонська область",
    period: "2014-2016",
    filter: "big_projects",
  },
  {
    image: "../../images/projects_images/VRP_110kV_PS_330kV_Usatove_proektuvannya/13photo.JPG",
    link: "../../pages/projects/project_page_example.html?id=15",
    title: "РЕКОНСТРУКЦІЯ ВРП 110 кВ ПС 330 кВ «УСАТОВЕ",
    client: "ДП НЕК «Укренерго»",
    contract:
      " Роботи з розробки робочого проєкту «Реконструкція ВРП 110 кВ ПС 330 кВ «Усатове» для приєднання ПС 110 кВ «Маразліївська»",
    sector: "Електроенергетика",
    region: "Україна, Одеська область",
    period: "2014-2016",
  },
  {
    image: "../../images/projects_images/Rekonstruktsiya_PS_330kV_VRP_110kV_Usatove/3photo.JPG",
    link: "../../pages/projects/project_page_example.html?id=14",
    title: "РЕКОНСТРУКЦІЯ ВРП 110 кВ ПС 330 кВ «УСАТОВЕ»",
    client: "ДП НЕК «Укренерго»",
    contract:
      "В межах проєкту «Роботи з реконструкції ВРП 110 кВ ПС 330 кВ «Усатове» для приєднання ПС 110 кВ «Маразліївська» було замінено все первинне обладнання, яке використало свій технічний ресурс.",
    sector: "Електроенергетика",
    region: "Українa, Одеська обл.",
    period: "2013",
  },
  {
    image: "../../images/projects_images/Rekonstruktsiya_TGV-200_Burshtynska_TES/Vyd_Burshtynskoi_TES.JPG",
    link: "../../pages/projects/project_page_example.html?id=16",
    title: "РЕКОНСТРУКЦІЯ ТУРБОГЕНЕРАТОРА ТГВ – 200 НА ЕНЕРГОБЛОЦІ №5 ДТЕК БУРШТИНСЬКА ТЕС",
    client: " ПАТ «ДТЕК Західенерго»",
    contract:
      "Роботи з реконструкції генератора та його системи тиристорного збудження енергоблоку № 5 ДТЕК Бурштинська ТЕС.                      ",
    sector: "Теплоенергетика",
    region: "Україна, Івано-Франківська обл.",
    period: "2013-2015",
  },
  {
    image: "../../images/projects_images/Rekonstruktsiya_elektrotekhnichnoho_oblad_Burshtynska_TES/VRP_220kV.JPG",
    link: "../../pages/projects/project_page_example.html?id=17",
    title: "РЕКОНСТРУКЦІЯ ЕЛЕКТРОТЕХНІЧНОГО ОБЛАДНАННЯ ЕНЕРГОБЛОКУ №5 ДТЕК БУРШТИНСЬКА ТЕС",
    client: "ПАТ «ДТЕК Західенерго»",
    contract: "Роботи з реконструкції електротехнічного обладнання енергоблоку № 5 ДТЕК Бурштинська ТЕС.    ",
    sector: "Теплоенергетика",
    region: "Україна, Івано-Франківська обл.",
    period: "2013-2015",
  },
  {
    image: "../../images/projects_images/Rekonstruktsiya_PL_330kV_Adzhalyk_Usatove/events.jpg",
    link: "../../pages/projects/project_page_example.html?id=18",
    title: "РЕКОНСТРУКЦІЯ ПЛ 330 кВ АДЖАЛИК - УСАТОВЕ",
    client: "ДП НЕК «Укренерго»",
    contract: "Реконструкція дволанцюгової ділянки ПЛ 330 кВ Аджалик 2 – Усатове / Молдавська ДРЕС – Усатове»",
    sector: "Електроенергетика",
    region: "Україна, Одеська обл.",
    period: "2011-2013",
    filter: "big_projects",
  },

  {
    image: "../../images/projects_images/Rekonstruktsiya_PS_330kV_Usatove/Events_0011.jpg",
    link: "../../pages/projects/project_page_example.html?id=21",
    title: "РЕКОНСТРУКЦІЯ ПС 330 кВ УСАТОВЕ",
    client: "ДП НЕК «Укренерго»",
    contract:
      "Виконання будівельно-монтажних та пусконалагоджувальних робіт з постачання обладнання на ПС 330 кВ «Усатове»",
    sector: "Електроенергетика",
    region: "Українa, Одеська обл.",
    period: "2011-2012",
    filter: "big_projects",
  },
  {
    image: "../../images/projects_images/AVR_PL_330kV_Mykolaivska_Khersonska/AVR_PL_330kV_Mykolaivska_Khersonska.jpg",
    link: "../../pages/projects/project_page_example.html?id=2",
    title: "ВИКОНАННЯ АВР НА ПЛ 330 КВ «МИКОЛАЇВСЬКА-ХЕРСОНСЬКА»",
    client: "ДП НЕК «Укренерго»",
    contract: " Виконання аварійно-відновлювальних робіт на ПЛ 330 кВ «Миколаївська-Херсонська»      ",
    sector: "Електроенергетика",
    region: "Миколаївська обл., Херсонська обл., Україна",
    period: "2022",
  },
  {
    image: "../../images/projects_images/Rekonstruktsiya_PS_220kV_Centrolit/P8100034.JPG",
    link: "../../pages/projects/project_page_example.html?id=23",
    title: "РЕКОНСТРУКЦІЯ ПС 220 кВ ЦЕНТРОЛІТ",
    client: "ДП НЕК «Укренерго»»",
    contract:
      " Роботи з заміни двох масляних вимикачів 110 кВ типу ВМТ-110 на приєднаннях «Більшовик», «Лузанівка» на елегазові вимикачі, заміною трансформаторів току ТС – 110 на ПС 220 кВ «Центроліт» з виконанням будівельно – монтажних, пусконалагоджувальних робіт. ",
    sector: "Електроенергетика",
    region: " Україна, Одеська область",
    period: "2012",
  },
  {
    image: "../../images/projects_images/Rekonstruktsiya_PL_330kV_Moldavska_DRES_Kotovska/Opora_typu_PB-330-7n.JPG",
    link: "../../pages/projects/project_page_example.html?id=25",
    title: "РЕКОНСТРУКЦІЯ ПЛ 330 кВ МОЛДАВСЬКА ДРЕС-КОТОВСЬКА",
    client: "ДП НЕК «Укренерго»",
    contract: "Зменшення анкерного прорізу опор № 382 - 435",
    sector: "Електроенергетика",
    region: "Україна, Одеська область",
    period: "2012",
  },
  {
    image: "../../images/projects_images/Rekonstruktsiya_Energoblok7_Burshtynska_TES/turbine_N7.jpg",
    link: "../../pages/projects/project_page_example.html?id=26",
    title: "РЕКОНСТРУКЦІЯ ЕНЕРГОБЛОКУ № 7 БУРШТИНСЬКОЇ ТЕС",
    client: "ВАТ «Західенерго»",
    contract: " Роботи з реконструкції та технічного переоснащення обладнання енергоблоку № 7",
    sector: "Теплоенергетика",
    region: " Україна, Івано-Франківська область",
    period: "2011",
  },
  {
    image: "../../images/projects_images/Rekonstruktsiya_PL_110kV_Usatove_Centrolit/P8100001.JPG",
    link: "../../pages/projects/project_page_example.html?id=27",
    title: "РЕКОНСТРУКЦІЯ ПЛ 110 кВ УСАТОВЕ-ЦЕНТРОЛІТ",
    client: "ВАТ «Одесаобленерго»",
    contract: "Реконструкція ПЛ 110 кВ Кіровська – Більшовик, Усатове – Кіровська, Усатове –Центроліт",
    sector: "Електроенергетика",
    region: "Українa",
    period: "2010-2011",
  },
  {
    image: "../../images/projects_images/Zamina_Vymykachiv_PS_330kV_Trykhati/PS_330kV_Trykhaty.JPG",
    link: "../../pages/projects/project_page_example.html?id=28",
    title: "ЗАМІНА ВИМИКАЧІВ НА ПС 330 кВ ТРИХАТИ",
    client: "ДП НЕК «Укренерго»",
    contract: "Роботи з заміни чотирьох повітряних вимикачів 330 кВ на елегазові вимикачі",
    sector: "Електроенергетика",
    region: "Україна, Миколаївська область",
    period: "2010-2011",
  },
  {
    image: "../../images/projects_images/Rekonstruktsiya_PS_330kV_VRP_110kV_Usatove/3photo.JPG",
    link: "../../pages/projects/project_page_example.html?id=29",
    title: "РЕКОНСТРУКЦІЯ ПС 330 кВ 1-3 СЕКЦІЙ ВРП 110 кВ УСАТОВЕ",
    client: "ДП НЕК «Укренерго»»",
    contract: "Реконструкція ПС 330 кВ «Усатове» з реконструкцією 1-3 секцій  ВРП 110 кВ",
    sector: "Електроенергетика",
    region: " Україна, Одеська область",
    period: "2011",
  },
  {
    image:
      "../../images/projects_images/Rekonstruktsiya_PL_110kV_Usatove_Chumka/PL_110_Usatove_Chumka_OTEC_Chumka.jpg.JPG",
    link: "../../pages/projects/project_page_example.html?id=30",
    title: "РЕКОНСТРУКЦІЯ ПЛ 110 кВ УСАТОВЕ - ЧУМКА, ОДЕСЬКА ТЕЦ - ЧУМКА",
    client: "ВАТ «Одесаобленерго»",
    contract: "Будівельно-монтажні та пусконалагоджувальні роботи, постачання обладнанн",
    sector: "Електроенергетика",
    region: "Україна, Одеська область",
    period: "2009-2010",
  },
  {
    image: "../../images/projects_images/Demontazh_PL_330kV_Adzhalyk_Usatove/SAM_3028.JPG",
    link: "../../pages/projects/project_page_example.html?id=31",
    title: "ДЕМОНТАЖ ПЛ 330 кВ АДЖАЛИК - УСАТОВЕ",
    client: "ДП НЕК «Укренерго»",
    contract: "Роботи по демонтажу дільниці ПЛ 330 кВ Усатове – Молдавська ДРЕС між опорами №№ 248-238",
    sector: "Електроенергетика",
    region: "Україна, Одеська область",
    period: "2012-2013",
  },
  {
    image: "../../images/projects_images/Kapitalnyi_remont_PL_400kV_Moldavska_DRES_Vulkaneshty/mold_vulkaneshti.JPG",
    link: "../../pages/projects/project_page_example.html?id=32",
    title: "КАПІТАЛЬНИЙ РЕМОНТ ПЛ 400 кВ МОЛДАВСЬКА ДРЕС-ВУЛКАНЕШТИ",
    client: "ІНТЕР РАТ ЄЕС ЗАТ «Молдавська ДРЕС»",
    contract: "Капітальний ремонт ПЛ 400 кВ «Молдавська ДРЕС-Вулканешти»",
    sector: "Електроенергетика",
    region: "Молдова",
    period: "2010-2011",
  },
  {
    image: "../../images/projects_images/Budivnytstvo_Orlivska_VES/Ustanovka_opalubki_anker_klet_fundamenta_VEU.jpg",
    link: "../../pages/projects/project_page_example.html?id=33",
    title: "БУДІВНИЦТВО ОРЛІВСЬКОЇ ВІТРОЕЛЕКТРОСТАНЦІЇ ЗАГАЛЬНОЮ ПОТУЖНІСТЮ 100 МВТ",
    client: "ТОВ «ВЕСТАС ЮКРЕЙН»",
    contract: "Будівництво Орлівської вітрової електростанції",
    sector: "Альтернативна енергетика",
    region: "Україна, Запорізька обл.",
    period: "2018-2019",
    filter: "big_projects",
  },
  {
    image: "../../images/projects_images/Rekonstruktsiya_PS_220_35_10_Berezan/00328.01_06_00_16.Still082.jpg",
    link: "../../pages/projects/project_page_example.html?id=34",
    title: "РЕКОНСТРУКЦІЯ ПС 220/35/10 КВ «БЕРЕЗАНЬ»",
    client: "ДП НЕК «Укренерго»",
    contract: "Реконструкція ПС 220/35/10 кВ",
    sector: "Електроенергетика",
    region: "Україна, Миколаївська область",
    period: "2017-2018",
  },
  {
    image: "../../images/projects_images/Biomasa_Elektrostantsiya_Pereyaslav_Khmelnytskyi/20180503_101443.jpg",
    link: "../../pages/projects/project_page_example.html?id=35",
    title: "ЕЛЕКТРОСТАНЦІЯ НА БІОМАСІ ВСТАНОВЛЕНОЮ ПОТУЖНІСТЮ 5000 КВТ",
    client: " ТОВ «Енергопромислова група «ЮГЭНЕРГОПРОМТРАНС»",
    contract: "Будівництво  електростанції на біомасі",
    sector: "Теплоенергетика",
    region: "Україна, Київська обл.",
    period: "2018",
  },
  {
    image: "../../images/projects_images/Biopalivo_Elektrostantsiya_Koryukivka/lyd_zverhu.jpg",
    link: "../../pages/projects/project_page_example.html?id=36",
    title: "ТЕПЛОВА ЕЛЕКТРОСТАНЦІЯ НА БІОПАЛИВІ (ВІДХОДИ ДЕРЕВИНИ) ЕЛЕКТРИЧНОЮ ПОТУЖНІСТЮ 4000 КВА",
    client: "ТОВ «КЛІАР ЕНЕРДЖІ»",
    contract: "Будівництво  теплової електростанції на біопаливі ",
    sector: "Теплоенергетика",
    region: " Україна, Чернігівська обл.",
    period: "2016",
  },
  {
    image: "../../images/projects_images/Postachannya_ROU_PL_750kV_ZAES_Kakhovska/ORU_750_28.18.jpg",
    link: "../../pages/projects/project_page_example.html?id=37",
    title: "ПОСТАЧАННЯ РОЗ’ЄДНУВАЧІВ НА НАПРУГУ 750 кВ ДЛЯ ПІДКЛЮЧЕННЯ ПЛ 750 кВ «ЗАПОРІЗЬКА АЕС-КАХОВСЬКА»",
    client: "ДП НЕК «Укренерго»",
    contract: "Постачання роз’єднувачів на напругу 750 кВ для підключення ПЛ 750 кВ «Запорізька АЕС-Каховська»",
    sector: "Електроенергетика",
    region: "Україна, Київська обл.",
    period: "2018",
  },
  {
    image: "../../images/news_images/rekonstruktsiya_pl_110kv_starokozache_kanal/1729839991862.jpg",
    link: "../../pages/projects/project_page_example.html?id=38",
    title: "Реконструкція повітряної лінії 110 кВ «Старокозаче – Канал",
    client: "НЕК «Укренерго»",
    contract: "Постачання роз’єднувачів на напругу 750 кВ для підключення ПЛ 750 кВ «Запорізька АЕС-Каховська»",
    sector: "Електроенергетика",
    region: "Україна, Одеська обл.",
    period: "2023",
    filter: "big_projects",
  },
  {
    image: "../../images/projects_images/Rekonstruktsiya_PL_330kV_Adzhalyk_Trykhati/lep_and_sky.JPG",
    link: "../../pages/projects/project_page_example.html?id=3",
    title: "РЕКОНСТРУКЦІЯ ПЛ 330 КВ «АДЖАЛИК – ТРИХАТИ»",
    client: "ПрАТ «НЕК «Укренерго»",
    contract: " Реконструкція ПЛ 330 кВ «Аджалик-Трихати з улаштуванням заходів на ПС 330 кВ «Тилігул»",
    sector: "Електроенергетика",
    region: "Україна",
    period: "2021-2025",
  },
  {
    image:
      "../../images/projects_images/Rekonstruktsiya_PS_330kV_Shepetivka_Kamyanets/shepetivka_ps_330kv_roboty_vykonuyutsya.jpg ",
    link: "../../pages/projects/project_page_example.html?id=4",
    title: "РЕКОНСТРУКЦІЯ ПС 330 КВ «ШЕПЕТІВКА» ТА «КАМ’ЯНЕЦЬ-ПОДІЛЬСЬКА»",
    client: "ПрАТ «НЕК «Укренерго»",
    contract: "Реконструкція ПС 330 кВ «Шепетівка» та «Кам’янець-Подільська»",
    sector: "Електроенергетика",
    region: "Хмельницька обл., Україна",
    period: "2022-2022",
  },
  {
    image: "../../images/projects_images/Budivnytstvo_FES_Inhulets/3_1.jpg",
    link: "../../pages/projects/project_page_example.html?id=5",
    title: "БУДІВНИЦТВО ФОТОГАЛЬВАНІЧНОЇ ЕЛЕКТРОСТАНЦІЇ «ІНГУЛЕЦЬ»",
    client: "ТОВ «Інгулець енерго-2»",
    contract: "Будівництво Фотогальванічної електростанці",
    sector: "​Альтернативна енергетика",
    region: "Україна, Миколаївська обл.",
    period: "2018-2019",
  },
  {
    image: "../../images/projects_images/Budivnytstvo_FES_Inhulets/3_1.jpg",
    link: "../../pages/projects/project_page_example.html?id=6",
    title: "РЕКОНСТРУКЦІЯ ПЛ 150 кВ «ГПП НОВА КАХОВКА-ДУДЧИНО»",
    client: "Реконструкція ПЛ 150 кВ «ГПП Нова Каховка-Дудчино»",
    contract: "Будівництво Фотогальванічної електростанці",
    sector: "Електроенергетика",
    region: "Україна, Херсонська обл.",
    period: "2016-2019",
  },
];

const PROJECTS_PER_PAGE = 6;
let filteredProjects = [];

function getCurrentPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const page = parseInt(urlParams.get("page")) || 1;
  return Math.max(1, page);
}

function getProjectsForPage(page, isBigProjectsPage) {
  if (isBigProjectsPage) {
    return filteredProjects;
  }

  const startIndex = (page - 1) * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;
  return filteredProjects.slice(startIndex, endIndex);
}

function getTotalPages(isBigProjectsPage) {
  return isBigProjectsPage ? 1 : Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
}

function extractYearForSorting(period) {
  if (!period || typeof period !== "string") {
    return 0;
  }

  const cleanPeriod = period.trim().replace(/[^\d\-]/g, "");

  const years = cleanPeriod.match(/\d{4}/g);

  if (!years || years.length === 0) {
    return 0;
  }

  const latestYear = Math.max(...years.map((year) => parseInt(year)));

  return latestYear;
}

function sortProjectsByPeriod(projects) {
  return projects.sort((a, b) => {
    const yearA = extractYearForSorting(a.period);
    const yearB = extractYearForSorting(b.period);

    return yearB - yearA;
  });
}

function renderProjects() {
  const container = document.getElementById("projects_list");
  const template = document.getElementById("project-template");

  if (!container || !template) {
    console.error("Не знайдено контейнер або шаблон для проєктів");
    return;
  }

  const isBigProjectsPage = window.location.pathname.toLowerCase().includes("big_projects");
  const currentPage = getCurrentPage();
  const projectsToRender = getProjectsForPage(currentPage, isBigProjectsPage);

  container.innerHTML = "";

  projectsToRender.forEach((project, index) => {
    const clone = template.content.cloneNode(true);

    try {
      const imageEl = clone.querySelector('[data-template="image"]');
      const linkEl = clone.querySelector('[data-template="link"]');
      const titleEl = clone.querySelector('[data-template="title"]');
      const clientEl = clone.querySelector('[data-template="client"]');
      const contractEl = clone.querySelector('[data-template="contract"]');
      const sectorEl = clone.querySelector('[data-template="sector"]');
      const regionEl = clone.querySelector('[data-template="region"]');
      const periodEl = clone.querySelector('[data-template="period"]');

      if (imageEl) imageEl.src = project.image;
      if (linkEl) linkEl.href = project.link;
      if (titleEl) titleEl.textContent = project.title;
      if (clientEl) clientEl.textContent = project.client;
      if (contractEl) contractEl.textContent = project.contract;
      if (sectorEl) sectorEl.textContent = project.sector;
      if (regionEl) regionEl.textContent = project.region;
      if (periodEl) periodEl.textContent = project.period;

      container.appendChild(clone);
    } catch (error) {
      console.error(`Помилка при рендерингу проєкту №${index + 1}:`, error);
    }
  });

  console.log(`Відображено ${projectsToRender.length} проєктів на сторінці ${currentPage}`);
}

function renderPagination() {
  const paginationContainer = document.getElementById("projects_pages");
  if (!paginationContainer) {
    console.error("Не знайдено контейнер для пагінації");
    return;
  }

  const isBigProjectsPage = window.location.pathname.includes("big_projects.html");
  if (isBigProjectsPage) {
    paginationContainer.innerHTML = "";
    console.log("Пагінація вимкнена для сторінки великих проєктів");
    return;
  }

  const currentPage = getCurrentPage();
  const totalPages = getTotalPages(false);

  paginationContainer.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const pageLink = document.createElement("a");
    pageLink.className = "page_selector";
    pageLink.textContent = i;

    const currentUrl = new URL(window.location);
    currentUrl.searchParams.set("page", i);
    pageLink.href = currentUrl.toString();

    if (i === currentPage) {
      pageLink.style.backgroundColor = "#002e4e";
      pageLink.style.color = "white";
    }

    paginationContainer.appendChild(pageLink);
  }

  console.log(`Створено ${totalPages} сторінок пагінації`);
}

function updateFilters() {
  const filterLinks = document.querySelectorAll(".filter");
  const currentPage = getCurrentPage();

  filterLinks.forEach((link) => {
    const url = new URL(link.href);
    if (currentPage > 1) {
      url.searchParams.set("page", currentPage);
      link.href = url.toString();
    }
  });
}

function goToPage(pageNumber) {
  const url = new URL(window.location);
  url.searchParams.set("page", pageNumber);
  window.location.href = url.toString();
}

document.addEventListener("DOMContentLoaded", () => {
  const isBigProjectsPage = window.location.pathname.includes("big_projects.html");

  const projectsToFilter = isBigProjectsPage ? allProjects.filter((p) => p.filter === "big_projects") : allProjects;

  filteredProjects = sortProjectsByPeriod(projectsToFilter);

  console.log(`Загальна кількість проєктів: ${filteredProjects.length}`);
  console.log(`Активна сторінка: ${getCurrentPage()}`);
  console.log("Проєкти відсортовано за періодом (від нових до старих)");

  renderProjects();
  renderPagination();
  updateFilters();
});
