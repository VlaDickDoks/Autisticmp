/* ===== ДАННЫЕ МОДОВ =====
   cat: "add" | "rem"
   badge: "add" | "rem" | "rep"
   tags: массив строк (метки "замена ...")
*/
const MODS_DATA = [
  // ================== ДОБАВЛЕННЫЕ ==================
  {
    cat: 'add',
    title: 'Усложнение / Баланс',
    items: [
      { name: 'Simple Radio', badge: 'add', desc: 'Теперь можно общаться на расстоянии.' },
      { name: 'No Chat', badge: 'add', desc: 'Чат был заменён на общение по радио.' },
      { name: 'No F3', badge: 'add', desc: 'F3 заменён на новый компас: при ношении показываются координаты XYZ. Настраивается в папке <code>config</code>.' },
      { name: 'Vibrative Voice', badge: 'add', desc: 'Варден слышит вас.' },
      { name: 'Skin Restorer', badge: 'add', desc: 'Загрузка любого скина прямо в игре по ссылке.', tags: ['замена CustomSkinLoader'] },
      { name: "YUNG's Better Strongholds", badge: 'add', desc: 'Улучшает баланс хардкора хорошим лутом.', tags: ['замена DnT: stronghold reworked'] },
      { name: 'Backpacked', badge: 'add', desc: 'Новая система с прокачкой рюкзака за опыт, можно иметь несколько рюкзаков.' },
      { name: 'HealingBed', badge: 'add', desc: 'Восстанавливаешь HP пока спишь / фулл хилит HP на утро.' },
      { name: 'Advancement... No More !!!', badge: 'add', desc: 'Ачивки? Нахуя?' },
      { name: 'No Tree Punching', badge: 'add', desc: 'В начале нельзя сломать дерево рукой — придётся крафтить первый инструмент из подручных материалов.' },
      { name: 'Extra Steps', badge: 'add', desc: 'При убийстве животных нельзя сразу получить готовую кожу/шерсть — нужно обработать, дать высохнуть, ещё раз обработать и пизда.' },
      { name: 'Spice of Life: Classic Edition [1.20.1]', badge: 'add', desc: 'Теперь еда надоедает и нужно кушать разную пищу :3' },
      { name: 'Starcatcher', badge: 'add', desc: 'Fisch из роблокс: продавай рыбку, улучшай удочку, получай баффы за лвл ап и иди нахуй уже наконец.' },
      { name: 'Supplementaries', badge: 'add', desc: 'Добавляет уюта и приколов в игру.' },
      { name: 'Variants & Ventures', badge: 'add', desc: 'Небольшое разнообразие у мобов, которые его не получили (зомби edition).' },
      { name: 'Wallfence', badge: 'add', desc: 'Теперь заборы могут соединяться с оградами, а ограды с калитками.' }
    ]
  },
  {
    cat: 'add',
    title: 'Оптимизация / Визуал / Удобство',
    items: [
      { name: '(Sodium) Chloride', badge: 'add', desc: 'Много полезных функций и оптимизации: приближение, чёрные ночи и т.п.', tags: ['замена ZoomIn', 'замена True Darkness'] },
      { name: 'Shulker Box Tooltip', badge: 'add', desc: 'Просмотр шалкера прямо в инвентаре!' },
      { name: 'Eating Animation & Add-on', badge: 'add', desc: 'Анимация поедания многих блюд (не всех).' },
      { name: 'Better Ping Display [Forge/NeoForge]', badge: 'add', desc: 'Пинг показывается в миллисекундах.' },
      { name: 'Skill Tree', badge: 'add', desc: 'Огромное древо с прокачкой навыков — разбавит хардкорную часть игры.' },
      { name: '2d Projectiles', badge: 'add', desc: '2D стрелы вся хуйня вместо 3D.' },
      { name: 'GUI Compass', badge: 'add', desc: 'При ношении в инвентаре показывает координаты на экране.', tags: ['замена F3'] },
      { name: 'Item Borders', badge: 'add', desc: 'Добавляет бортики предметам красивые.' },
      { name: 'Natural Camera', badge: 'add', desc: 'Натуральная камера, прям как в жизни. Конфиг открыт — можно настроить или выключить.' },
      { name: 'Resourcify', badge: 'add', desc: 'Настройка и скачивание текстур-паков прямо в игре!' },
      { name: 'Snow! Real Magic! ⛄', badge: 'add', desc: 'Снежки без крафта лопаты (Ctrl + ЛКМ), красивая текстура снега на заборах, ступеньках, оградах и т.п.' },
      { name: 'The Roads More Travelled [TRMT]', badge: 'add', desc: 'Теперь можно протаптать дорожку.' },
      { name: 'Immersive Hotbar', badge: 'add', desc: 'Маленькие миленькие анимки для инвентаря снизу.' },
      { name: 'Cave Dust Rethinking', badge: 'add', desc: 'Тот же мод на атмосферные партиклы на высоте, но оптимизированный! :3' },
      { name: 'Imprint', badge: 'add', desc: 'Вы оставляете следы при ходьбе по поверхности.' },
      { name: 'Boat Item View', badge: 'add', desc: 'Теперь предметы при езде на лодке не убираются с рук!' },
      { name: 'Epic Death Screen', badge: 'add', desc: 'Более приятный экран смерти.' },
      { name: 'My Totem Doll', badge: 'add', desc: 'Тотемы бессмертия имеют ваши скины при подборе (навайбкожено хахахахаыхыхй).' },
      { name: 'Sounds & More Sounds', badge: 'add', desc: 'Больше новых звуков в игру!' },
      { name: 'GUI Clock', badge: 'add', desc: 'При ношении часов показывает время и дни, прожитые в майне.' }
    ]
  },
  {
    cat: 'add',
    title: 'Содержание / Генерация',
    items: [
      { name: 'Abandoned Cabins', badge: 'add', desc: 'Меньше общества.' },
      { name: 'Abandoned Watchtowers', badge: 'add', desc: 'Меньше общества, ощущение будто вы одни в мире: нет ничего кроме природы и твоих друзей (врагов хз).' },
      { name: '80% → 40% Abandoned Villages Modded', badge: 'add', desc: 'Общество реже встречается (намёк на мою социофобию).' },
      { name: 'Terralith & Add-on (Dynamic Trees - Terralith)', badge: 'add', desc: 'Более живая и хардкорная генерация (1/3).' },
      { name: 'Lithosphere', badge: 'add', desc: 'Более живая и хардкорная генерация (2/3).' },
      { name: 'Tectonic', badge: 'add', desc: 'Более живая и хардкорная генерация (3/3).' },
      { name: "MES — Moog's End Structures", badge: 'add', desc: 'Даже энд живее обычного мира.' },
      { name: 'Towns and Towers', badge: 'add', desc: 'Ещё больше разнообразия в структурах.' },
      { name: 'The Last Castle', badge: 'add', desc: 'Одинокий хорошо (или плохо, не ебу) защищённый замок, который встречается один раз за игру очень далеко.' }
    ]
  },

  // ================== УБРАННЫЕ ==================
  {
    cat: 'rem',
    title: 'Убранные — Жалоба / Читерно',
    items: [
      { name: 'Born in Chaos', badge: 'rem', desc: 'Теперь баланс в пользу хардкора пофикшен.' },
      { name: 'Better Сlimbing', badge: 'rem', desc: 'Позволял очень быстро лазать по лестнице, нахуй упрощение! XD' },
      { name: "L_Ender's Cataclysm", badge: 'rem', desc: 'Лагает сильно и багается.' },
      { name: "MNS — Moog's Nether Structures", badge: 'rem', desc: 'Слишком мало полезных, да хотя бы красивых структур.' },
      { name: "MVS — Moog's Voyager Structures", badge: 'rem', desc: 'Я НЕ БУДУ СМОТРЕТЬ 130+ СТРУКТУР РАДИ 10 БОЛЕЕ МЕНЕЕ! T-T' },
      { name: 'ModernFix', badge: 'rem', desc: 'Багается пиздец часто, сборка запускается не так уж и долго (10 минут).' }
    ]
  },
  {
    cat: 'rem',
    title: 'Убранные — Ненадобность / Не красиво',
    items: [
      { name: 'Better Clouds', badge: 'rem', desc: 'Некрасивые облачка.' },
      { name: 'Blur Forge (Unofficial)', badge: 'rem', desc: 'Багается с Fancy Menu — хотите ставьте, хотите нет.' },
      { name: 'Smooth Boot', badge: 'rem', desc: 'Бесполезен, практически не поменялась производительность, нужен только для старых малоядерных процов.' }
    ]
  },
  {
    cat: 'rem',
    title: 'Убранные — Тематика / Не нравится',
    items: [
      { name: 'Create & Add-ons', badge: 'rem', desc: 'Не вписывается в тематику сборки, прости уж Симен.' },
      { name: 'Dark Doppelganger', badge: 'rem', desc: 'Гавно.' },
      { name: 'Deeper & Darker', badge: 'rem', desc: 'Добавляет пустое измерение и дерьмовые шмотки, гавно :)' }
    ]
  },
  {
    cat: 'rem',
    title: 'Убранные — Заменён / Улучшен',
    items: [
      { name: 'CustomSkinLoader', badge: 'rep', desc: 'Заменён и улучшен.' },
      { name: 'DnT: stronghold reworked', badge: 'rep', desc: 'Заменён и улучшен.' },
      { name: 'ZoomIn', badge: 'rep', desc: 'Заменён и улучшен.' },
      { name: 'True Darkness', badge: 'rep', desc: 'Заменён и улучшен.' },
      { name: 'HerdMentality', badge: 'rep', desc: 'Не работал, заменён и улучшен.' },
      { name: 'Sophisticated Backpacks', badge: 'rep', desc: 'Баланс хуйни, заменён.' },
      { name: 'REI', badge: 'rep', desc: 'Заменён потому что владик еблан, а ещё говно.' }
    ]
  }
];
