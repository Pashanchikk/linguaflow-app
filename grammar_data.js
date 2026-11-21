// Полная база уроков грамматики LinguaFlow (уровни A1, A2, B1, B2, C1)
window.GRAMMAR_DATA = [
    // ==========================================
    // УРОВЕНЬ A1 (BEGINNER / ELEMENTARY)
    // ==========================================
    {
        id: "gram-a1-1",
        title: "1. Глагол To Be (am / is / are) и структура предложения",
        level: "A1",
        is_premium: false,
        formula: "I am  |  He / She / It is  |  You / We / They are",
        explanation: "В русском языке мы говорим «Я студент» или «Она дома», опуская глагол «есть». В английском языке <b>в каждом предложении обязан быть глагол</b>. Когда действия нет (описываем имя, профессию, возраст, состояние или местоположение), используется глагол <b>to be</b>.<br><br><b>Формы в настоящем времени:</b><br>• <b>I am (I'm)</b> — Я есть<br>• <b>He / She / It is (He's / She's / It's)</b> — Он / Она / Оно есть<br>• <b>We / You / They are (We're / You're / They're)</b> — Мы / Вы / Они есть<br><br><b>Отрицание:</b> добавляем <b>not</b> после глагола (<i>I'm not, isn't, aren't</i>).<br><b>Вопрос:</b> выносим <i>Am / Is / Are</i> на первое место перед подлежащим.<br><br>⚠️ <b>Частая ошибка:</b> Нельзя говорить <i>«She is agree»</i> или <i>«I am work»</i>. Если есть обычный глагол действия (work, live, like), <b>am/is/are не нужны</b>!",
        examples: [
            { en: "I am a software engineer, and my brother is a designer.", ru: "Я инженер-программист, а мой брат — дизайнер." },
            { en: "They are not at the office today; they are at home.", ru: "Их нет сегодня в офисе; они дома." },
            { en: "Are you ready for the English lesson?", ru: "Ты готов к уроку английского?" },
            { en: "Is it cold outside right now?", ru: "На улице сейчас холодно?" }
        ],
        exercises: [
            { question: "My parents ___ in London this week.", options: ["am", "is", "are"], correct: 2, hint: "My parents = они (they), поэтому используем форму are." },
            { question: "___ your sister a doctor?", options: ["Am", "Is", "Are"], correct: 1, hint: "Your sister = она (she), в вопросе ставим Is на первое место." },
            { question: "I ___ tired, I just want to sleep.", options: ["am", "is", "are"], correct: 0, hint: "С местоимением I всегда используется am." }
        ]
    },
    {
        id: "gram-a1-2",
        title: "2. Present Simple: Регулярные действия, факты и привычки",
        level: "A1",
        is_premium: false,
        formula: "(+) I/You/We/They + V1  |  He/She/It + V1-s(-es)   |   (?) Do / Does + S + V1?",
        explanation: "<b>Present Simple</b> — главное время для описания вашей повседневной жизни: привычек, расписаний, предпочтений и общеизвестных истин.<br><br><b>Правило окончания -s / -es:</b><br>Если действие совершает <b>He, She или It</b> (он, она, оно, друг, компания, кот), к глаголу добавляется <b>-s</b> (<i>works, plays</i>) или <b>-es</b> после шипящих и -o (<i>watches, goes, studies</i>).<br><br><b>Вопросы и отрицания:</b><br>• Для <i>I, you, we, they</i> помощник — <b>do / don't</b>.<br>• Для <i>he, she, it</i> помощник — <b>does / doesn't</b> (при этом окончание <b>-s</b> у основного глагола исчезает: <i>Does she work?</i>).<br><br><b>Слова-маркеры:</b> <i>always (всегда), usually (обычно), often (часто), sometimes (иногда), rarely (редко), never (никогда), every day (каждый день)</i>.",
        examples: [
            { en: "She speaks three languages fluently and reads books every evening.", ru: "Она бегло говорит на трёх языках и читает книги каждый вечер." },
            { en: "We do not (don't) drink coffee after 6 PM.", ru: "Мы не пьём кофе после 6 вечера." },
            { en: "Does your friend live near the city center?", ru: "Твой друг живёт рядом с центром города?" },
            { en: "The train leaves at 8:30 every morning.", ru: "Поезд отправляется в 8:30 каждое утро (расписание)." }
        ],
        exercises: [
            { question: "Mark usually ___ to work by car.", options: ["go", "goes", "going"], correct: 1, hint: "Mark = he (3-е лицо ед. ч.), к глаголу go добавляем -es." },
            { question: "Where ___ they live?", options: ["does", "are", "do"], correct: 2, hint: "Для местоимения they в вопросе нужен вспомогательный глагол do." },
            { question: "My cat ___ like swimming at all.", options: ["don't", "doesn't", "isn't"], correct: 1, hint: "My cat = it, есть глагол действия like, поэтому отрицание строится через doesn't." }
        ]
    },
    {
        id: "gram-a1-3",
        title: "3. Present Continuous: Действие прямо сейчас и планы",
        level: "A1",
        is_premium: false,
        formula: "am / is / are + V-ing   |   Now, at the moment, Look!",
        explanation: "<b>Present Continuous</b> (настоящее длительное) показывает процесс, который происходит <b>прямо в секунду речи</b>, либо временный проект вокруг настоящего момента.<br><br><b>Как строится:</b><br>Берём нужную форму <b>to be (am/is/are)</b> + основной глагол с окончанием <b>-ing</b>.<br>• <i>work → working</i><br>• <i>write → writing</i> (немая -e убирается)<br>• <i>run → running</i> (краткая гласная + согласная удваиваются)<br><br>⚠️ <b>Глаголы состояния (Stative Verbs):</b><br>Глаголы чувств, мыслей и владения <b>НЕ используются в Continuous</b>: <i>know (знать), want (хотеть), like (нравиться), love (любить), understand (понимать), need (нуждаться), have (иметь в значении владеть)</i>. Говорим: <i>I want water now</i> (а не <i>I am wanting</i>).",
        examples: [
            { en: "Look! It is raining heavily outside.", ru: "Смотри! На улице сейчас идёт сильный дождь." },
            { en: "I am currently learning English to get a better job.", ru: "В данный период я учу английский, чтобы получить работу получше." },
            { en: "Why are you wearing a coat? It is warm today!", ru: "Почему ты в пальто? Сегодня же тепло!" },
            { en: "I understand this grammar rule very well now.", ru: "Я сейчас очень хорошо понимаю это правило (глагол состояния — без -ing)." }
        ],
        exercises: [
            { question: "Be quiet! The baby ___ right now.", options: ["sleeps", "is sleeping", "sleeping"], correct: 1, hint: "Right now — действие в момент речи: is + sleeping." },
            { question: "I ___ coffee right now, I prefer tea.", options: ["am not wanting", "don't want", "not want"], correct: 1, hint: "Want — глагол состояния, он не используется с -ing, берём Present Simple." },
            { question: "What ___ you ___ at the moment?", options: ["do / do", "are / doing", "is / doing"], correct: 1, hint: "С местоимением you в Continuous используется are + V-ing." }
        ]
    },
    {
        id: "gram-a1-4",
        title: "4. Артикли (a / an / the) и множественное число существительных",
        level: "A1",
        is_premium: false,
        formula: "a / an (любой один)  |  the (конкретный)  |  -s / -es (множ. число)",
        explanation: "В английском языке перед исчисляемым существительным в единственном числе почти всегда стоит «определитель» (артикль или местоимение).<br><br><b>1. Неопределённый артикль a / an («один из многих, любой, впервые упомянутый»):</b><br>• <b>a</b> — перед согласным <b>звуком</b>: <i>a book, a university [juː...]</i>.<br>• <b>an</b> — перед гласным <b>звуком</b>: <i>an apple, an hour [aʊər]</i> (буква h не читается!).<br><br><b>2. Определённый артикль the («тот самый, известный обоим, единственный в мире»):</b><br>• Когда предмет уже упоминали: <i>I bought a phone. <b>The</b> phone is great.</i><br>• Уникальные объекты: <i>the sun, the moon, the internet</i>.<br><br><b>3. Множественное число:</b><br>Обычно добавляем <b>-s / -es</b> (<i>car → cars, box → boxes, city → cities</i>).<br><b>Важные исключения:</b> <i>man → men, woman → women, child → children, person → people, foot → feet, tooth → teeth</i>.",
        examples: [
            { en: "I have an idea! Let's watch a movie tonight.", ru: "У меня есть идея! Давай посмотрим какой-нибудь фильм сегодня вечером." },
            { en: "Please close the door when you leave the room.", ru: "Пожалуйста, закрой (эту конкретную) дверь, когда выйдешь из комнаты." },
            { en: "There are many people and two children in the park.", ru: "В парке много людей и двое детей (исключения множественного числа)." }
        ],
        exercises: [
            { question: "She wants to become ___ engineer.", options: ["a", "an", "the"], correct: 1, hint: "Слово engineer начинается с гласного звука [e], и это профессия (одна из) — ставим an." },
            { question: "Look at ___ moon! It is so bright tonight.", options: ["a", "an", "the"], correct: 2, hint: "Луна — единственный в своём роде объект, всегда используется the." },
            { question: "Three ___ are waiting near the entrance.", options: ["person", "persons", "people"], correct: 2, hint: "Множественное число от person в живом английском — people." }
        ]
    },
    {
        id: "gram-a1-5",
        title: "5. Конструкция There is / There are и предлоги (in / on / at)",
        level: "A1",
        is_premium: false,
        formula: "There is + ед.ч.  |  There are + мн.ч.   |   Time: at 5 PM, on Monday, in May",
        explanation: "<b>1. Конструкция There is / There are («где-то что-то находится/имеется»):</b><br>Используется, когда мы сообщаем о наличии предмета в конкретном месте. Переводить такое предложение лучше <b>с конца</b> (с места):<br>• <i>There is a laptop on the desk.</i> — На столе (находится) ноутбук.<br>• <i>There are two cafes near my house.</i> — Рядом с моим домом есть два кафе.<br><br><b>2. Пирамида предлогов времени (in / on / at):</b><br>• <b>AT</b> (точная точка): <i>at 7 o'clock, at night, at the weekend</i>.<br>• <b>ON</b> (дни и даты): <i>on Monday, on my birthday, on May 15th</i>.<br>• <b>IN</b> (длинные периоды и время суток): <i>in 2026, in summer, in July, in the morning / evening</i>.",
        examples: [
            { en: "There is a great coffee shop on the corner of this street.", ru: "На углу этой улицы есть отличная кофейня." },
            { en: "Are there any questions about this grammar topic?", ru: "Есть ли какие-нибудь вопросы по этой теме грамматики?" },
            { en: "Our meeting starts at 10 AM on Friday.", ru: "Наша встреча начинается в 10 утра в пятницу." }
        ],
        exercises: [
            { question: "___ three bedrooms in their new apartment.", options: ["There is", "There are", "They are"], correct: 1, hint: "Three bedrooms — множественное число, сообщаем о наличии в месте: There are." },
            { question: "I usually wake up ___ 7:30 ___ the morning.", options: ["in / at", "at / in", "on / in"], correct: 1, hint: "С точным временем используем at (at 7:30), со временем суток — in (in the morning)." },
            { question: "We are going to the cinema ___ Saturday.", options: ["in", "at", "on"], correct: 2, hint: "С днями недели всегда используется предлог on." }
        ]
    },

    // ==========================================
    // УРОВЕНЬ A2 (PRE-INTERMEDIATE)
    // ==========================================
    {
        id: "gram-a2-1",
        title: "6. Past Simple: Правильные и неправильные глаголы + Was/Were",
        level: "A2",
        is_premium: false,
        formula: "(+) S + V2 / V-ed  |  (-) S + didn't + V1  |  (?) Did + S + V1?",
        explanation: "<b>Past Simple</b> описывает завершённые действия в прошлом. Нам важен сам факт события или точное время (<i>yesterday, last week, two years ago, in 2020</i>).<br><br><b>1. Глагол to be в прошлом:</b><br>• <b>was</b> (для I, he, she, it) / <b>were</b> (для you, we, they). Помощник <i>did</i> с ними <b>не используется</b>: <i>Were you at home? I wasn't tired.</i><br><br><b>2. Обычные глаголы (V2):</b><br>• <b>Правильные:</b> добавляем окончание <b>-ed</b> (<i>worked, played, studied</i>).<br>• <b>Неправильные (2-я колонка таблицы):</b> <i>go → went, see → saw, buy → bought, take → took, make → made, come → came, speak → spoke</i>.<br><br>⚠️ <b>Главная ловушка:</b> В вопросах и отрицаниях появляется <b>did / didn't</b>, который «забирает» прошедшее время на себя, поэтому основной глагол возвращается в 1-ю форму: <i>Did you <b>go</b>?</i> (НЕ <i>Did you went?</i>).",
        examples: [
            { en: "We bought plane tickets yesterday and flew to Rome.", ru: "Вчера мы купили билеты на самолёт и полетели в Рим." },
            { en: "She didn't go to the party because she was very busy.", ru: "Она не пошла на вечеринку, потому что была очень занята." },
            { en: "What time did you wake up this morning?", ru: "Во сколько ты проснулся сегодня утром?" }
        ],
        exercises: [
            { question: "Where ___ you ___ your keys yesterday?", options: ["did / found", "did / find", "were / find"], correct: 1, hint: "После did основной глагол всегда ставится в первую форму (find)." },
            { question: "They ___ very happy when they heard the news.", options: ["did", "was", "were"], correct: 2, hint: "Happy — прилагательное (нет действия), для they берём were." },
            { question: "My brother ___ a new laptop last month.", options: ["buyed", "bought", "has bought"], correct: 1, hint: "Last month — маркер Past Simple, buy — неправильный глагол (bought)." }
        ]
    },
    {
        id: "gram-a2-2",
        title: "7. Выражение будущего: Will vs Going to vs Present Continuous",
        level: "A2",
        is_premium: false,
        formula: "will + V1 (спонтанно)  |  am/is/are going to + V1 (план)  |  am/is/are + V-ing (договорённость)",
        explanation: "В английском языке выбор формы будущего времени зависит от того, <b>насколько заранее вы приняли решение</b>:<br><br><b>1. Future Simple (will + V1) — решение в секунду речи, обещания, прогнозы без фактов:</b><br>• Зазвонил телефон: <i>I'll answer it!</i> (Я отвечу! — решил прямо сейчас).<br>• <i>I think it will rain tomorrow.</i> (Мне кажется, завтра пойдёт дождь).<br><br><b>2. To be going to + V1 — намерение и план, продуманный заранее, либо очевидный прогноз по фактам:</b><br>• <i>I'm going to start a new course next week.</i> (Я собираюсь начать курс — уже решил).<br>• На небе чёрные тучи: <i>Look at those clouds! It's going to rain.</i><br><br><b>3. Present Continuous — твёрдая договорённость (куплены билеты, назначена встреча):</b><br>• <i>We are flying to Paris on Friday at 6 PM.</i>",
        examples: [
            { en: "Oh, we are out of milk! — Don't worry, I will buy some on my way home.", ru: "Ой, у нас закончилось молоко! — Не переживай, я куплю по дороге домой (спонтанное решение)." },
            { en: "I am going to save money this year to buy a car.", ru: "В этом году я собираюсь копить деньги, чтобы купить машину (намерение)." },
            { en: "We are meeting the client at 3 PM tomorrow.", ru: "Мы встречаемся с клиентом завтра в 3 дня (назначенная встреча)." }
        ],
        exercises: [
            { question: "It's cold in here. — I ___ close the window.", options: ["am going to", "will", "am closing"], correct: 1, hint: "Решение принято спонтанно в момент речи — используем will." },
            { question: "Look at that driver! He ___ crash into the wall!", options: ["will", "is going to", "crashes"], correct: 1, hint: "Очевидный прогноз по видимым признакам прямо сейчас — going to." },
            { question: "I already bought the tickets. I ___ to Berlin tomorrow.", options: ["am flying", "will fly", "fly"], correct: 0, hint: "Билеты уже куплены (твёрдая договорённость) — используем Present Continuous." }
        ]
    },
    {
        id: "gram-a2-3",
        title: "8. Степени сравнения прилагательных и конструкции as...as",
        level: "A2",
        is_premium: false,
        formula: "Короткие: -er / the -est  |  Длинные: more / the most  |  as + adj + as",
        explanation: "Чтобы сравнить два объекта или выделить один лучший из группы, используем степени сравнения:<br><br><b>1. Односложные и короткие прилагательные (1–2 слога):</b><br>• Сравнительная (+ <b>than</b>): <i>fast → fast<b>er</b> than, big → bigg<b>er</b> than, easy → easi<b>er</b> than</i>.<br>• Превосходная (обязательно артикль <b>the</b>): <i><b>the</b> fast<b>est</b>, <b>the</b> bigg<b>est</b>, <b>the</b> easi<b>est</b></i>.<br><br><b>2. Длинные прилагательные (2+ слога: expensive, interesting, comfortable):</b><br>• Сравнительная: <i><b>more</b> expensive than</i>.<br>• Превосходная: <i><b>the most</b> expensive</i>.<br><br><b>3. Важные исключения (заучить!):</b><br>• <i>good → better → the best</i><br>• <i>bad → worse → the worst</i><br>• <i>far → farther/further → the farthest/furthest</i><br><br><b>4. Равное сравнение:</b> <i>as + прилагательное + as</i> («такой же ..., как и ...»): <i>This phone is <b>as fast as</b> my laptop.</i>",
        examples: [
            { en: "Learning English with music is much more interesting than memorizing boring lists.", ru: "Учить английский с музыкой намного интереснее, чем зубрить скучные списки." },
            { en: "Today is the coldest day of the entire winter.", ru: "Сегодня самый холодный день за всю зиму." },
            { en: "Your new apartment is as spacious as mine, and the view is even better!", ru: "Твоя новая квартира такая же просторная, как моя, а вид даже лучше!" }
        ],
        exercises: [
            { question: "This task is ___ than the previous one.", options: ["more easy", "easier", "the easiest"], correct: 1, hint: "Easy заканчивается на -y, в сравнительной степени перед than превращается в easier." },
            { question: "That was ___ movie I have ever seen!", options: ["the worse", "worst", "the worst"], correct: 2, hint: "Превосходная степень от исключения bad — always the worst." },
            { question: "Hotel A is not ___ expensive ___ Hotel B.", options: ["so / than", "as / as", "more / as"], correct: 1, hint: "Для сравнения равных/неравных качеств используется парная конструкция as ... as." }
        ]
    },
    {
        id: "gram-a2-4",
        title: "9. Модальные глаголы: Can, Could, Must, Have to, Should",
        level: "A2",
        is_premium: false,
        formula: "Modal + V1 (без to и без -s)   |   mustn't (запрет) ≠ don't have to (не обязательно)",
        explanation: "Модальные глаголы выражают не само действие, а <b>отношение к нему</b> (способность, обязанность, совет, разрешение). После них глагол всегда идёт в начальной форме без частицы <i>to</i> (кроме <i>have to</i>).<br><br><b>1. Can / Could:</b> умение, возможность, вежливая просьба (<i>I can swim. Could you help me?</i>).<br><b>2. Should / Shouldn't:</b> мягкий совет («тебе следует»): <i>You should get more sleep.</i><br><b>3. Must vs Have to (важная разница!):</b><br>• <b>Must</b> — личное внутреннее убеждение или строгий закон: <i>I must call my mom today.</i><br>• <b>Have to</b> — вынужденная необходимость из-за обстоятельств или правил (меняется по временам: <i>has to, had to, will have to</i>): <i>I have to wear a uniform at work.</i><br><br>⚠️ <b>Критическая разница в отрицании:</b><br>• <b>mustn't</b> = <b>СТРОГО ЗАПРЕЩЕНО</b> (<i>You mustn't smoke here</i>).<br>• <b>don't have to</b> = <b>НЕТ НЕОБХОДИМОСТИ</b>, можно не делать (<i>You don't have to wake up early on Sunday</i>).",
        examples: [
            { en: "You look exhausted; you should take a few days off.", ru: "Ты выглядишь измотанным; тебе стоит взять пару выходных." },
            { en: "Tomorrow is a holiday, so we don't have to go to the office.", ru: "Завтра праздник, поэтому нам не нужно идти в офис." },
            { en: "Passengers mustn't open the doors while the train is moving.", ru: "Пассажирам строго запрещено открывать двери во время движения поезда." }
        ],
        exercises: [
            { question: "It's Sunday tomorrow, so I ___ wake up at 6 AM.", options: ["mustn't", "don't have to", "shouldn't to"], correct: 1, hint: "Никто не запрещает вставать в 6 утра, просто в этом нет необходимости — don't have to." },
            { question: "You ___ touch that wire! It's extremely dangerous.", options: ["don't have to", "mustn't", "couldn't"], correct: 1, hint: "Прямой запрет из-за опасности — mustn't." },
            { question: "She ___ speak French when she was ten.", options: ["can", "could", "should"], correct: 1, hint: "Способность в прошлом (when she was ten) выражается через could." }
        ]
    },

    // ==========================================
    // УРОВЕНЬ B1 (INTERMEDIATE)
    // ==========================================
    {
        id: "gram-b1-1",
        title: "10. Present Perfect vs Past Simple: Результат сейчас или факт в прошлом",
        level: "B1",
        is_premium: false,
        formula: "have / has + V3 (результат/опыт)   vs   V2 (точное время в прошлом)",
        explanation: "Это главный барьер уровня B1. В русском оба времени переводятся прошедшим («я сделал»), но в английском логика разная:<br><br><b>1. Present Perfect (have / has + V3) — мостик из прошлого в СЕЙЧАС:</b><br>• <b>Видимый результат сейчас:</b> <i>I have lost my keys</i> (Я потерял ключи — и прямо сейчас стою перед закрытой дверью).<br>• <b>Жизненный опыт (когда-либо до сегодня):</b> <i>Have you ever been to Japan? I have never tried surfing.</i><br>• <b>Незавершённый период времени:</b> <i>today, this week, this year, recently, just, already, yet</i>.<br>• <b>Действие началось в прошлом и длится до сих пор:</b> <i>I have lived here <b>for</b> 5 years / <b>since</b> 2021.</i><br><br><b>2. Past Simple (V2) — дверь в прошлое закрыта:</b><br>• Указано конкретное время или подразумевается законченный отрезок: <i>yesterday, 2 hours ago, last summer, in 2019, when I was a child</i>.",
        examples: [
            { en: "I have already sent the report, so you can check your inbox.", ru: "Я уже отправил отчёт, так что можешь проверить почту (результат актуален сейчас)." },
            { en: "I sent the report two hours ago.", ru: "Я отправил отчёт два часа назад (указано точное время в прошлом — Past Simple)." },
            { en: "How long have you known your best friend?", ru: "Как давно ты знаешь своего лучшего друга? (знаете до сих пор — Present Perfect)." }
        ],
        exercises: [
            { question: "We ___ in this company since 2022.", options: ["worked", "have worked", "are working"], correct: 1, hint: "Маркер since 2022 показывает, что действие началось в 2022 и продолжается до сих пор — Present Perfect." },
            { question: "When ___ you ___ your first car?", options: ["have / bought", "did / buy", "have / buy"], correct: 1, hint: "Вопрос When...? всегда спрашивает о конкретном моменте в прошлом — нужен Past Simple." },
            { question: "She hasn't finished her presentation ___.", options: ["already", "just", "yet"], correct: 2, hint: "В отрицаниях и вопросах Present Perfect в конце предложения ставится yet («ещё не»)." }
        ]
    },
    {
        id: "gram-b1-2",
        title: "11. Past Continuous & Past Perfect: Фон событий и предпрошедшее",
        level: "B1",
        is_premium: true,
        formula: "was/were + V-ing (процесс в прошлом)  |  had + V3 (прошлое до прошлого)",
        explanation: "Чтобы красиво рассказывать истории на уровне B1, нужно уметь выстраивать хронологию:<br><br><b>1. Past Continuous (was / were + V-ing):</b><br>• Длительный процесс в конкретную секунду прошлого: <i>At 8 PM yesterday, I was watching a movie.</i><br>• <b>Фон, который прервало короткое действие (Past Simple):</b> <i>I <b>was walking</b> down the street when it suddenly <b>started</b> to rain.</i><br><br><b>2. Past Perfect (had + V3) — «прошлое до прошлого»:</b><br>• Используется, когда в прошлом произошло два события, и нам нужно подчеркнуть, что <b>одно случилось раньше другого</b>.<br>• <i>When I arrived at the station, the train <b>had already left</b>.</i> (Сначала поезд ушёл — had left, а потом я приехал — arrived).",
        examples: [
            { en: "While I was cooking dinner, my phone rang three times.", ru: "Пока я готовил ужин (длительный фон), мой телефон зазвонил три раза (короткое действие)." },
            { en: "She realized that she had left her passport at home.", ru: "Она осознала (Past Simple), что забыла паспорт дома ещё раньше (Past Perfect)." },
            { en: "By the time the meeting started, everyone had read the document.", ru: "К тому моменту как началась встреча, все уже прочитали документ." }
        ],
        exercises: [
            { question: "By the time we got to the cinema, the film ___ already ___.", options: ["has / started", "had / started", "was / starting"], correct: 1, hint: "Фильм начался раньше, чем мы пришли в кинотеатр — предпрошедшее Past Perfect (had + V3)." },
            { question: "I ___ a shower when the lights went out.", options: ["took", "had taken", "was taking"], correct: 2, hint: "Длительный процесс в прошлом был прерван внезапным отключением света — Past Continuous." },
            { question: "He was tired because he ___ well the night before.", options: ["hadn't slept", "didn't sleep", "wasn't sleeping"], correct: 0, hint: "Причина усталости в прошлом произошла ещё раньше (ночью до этого) — Past Perfect." }
        ]
    },
    {
        id: "gram-b1-3",
        title: "12. First & Second Conditionals: Реальные и воображаемые условия",
        level: "B1",
        is_premium: true,
        formula: "1st: If + Present Simple, will + V1   |   2nd: If + Past Simple, would + V1",
        explanation: "Условные предложения состоят из двух частей: условие (с <b>if</b>) и результат.<br><br><b>1. First Conditional (Реальное условие в будущем, вероятность 50–99%):</b><br>• <b>Схема:</b> <i>If + Present Simple, will + V1</i>.<br>• ⚠️ <b>Золотое правило:</b> После <b>if / when / as soon as</b> будущее время <b>will НЕ ставится</b>, даже если по-русски мы говорим в будущем! <i>If it <b>rains</b> tomorrow, I will stay home.</i><br><br><b>2. Second Conditional (Нереальная / воображаемая ситуация сейчас или в будущем):</b><br>• <b>Схема:</b> <i>If + Past Simple, would + V1</i>.<br>• Используем для мечтаний и советов: <i>If I <b>were</b> you, I <b>would accept</b> this offer.</i> (На твоём месте я бы принял это предложение — в формальном стиле для всех лиц после if предпочтительно <b>were</b>).",
        examples: [
            { en: "If you finish your work early, we will go for a walk.", ru: "Если ты закончишь работу пораньше, мы пойдём гулять (реальный план)." },
            { en: "If I spoke fluent Spanish, I would move to Madrid for a year.", ru: "Если бы я свободно говорил по-испански, я бы переехал в Мадрид на год (воображаемая ситуация)." },
            { en: "If I were you, I wouldn't buy that expensive phone right now.", ru: "На твоём месте я бы не покупал этот дорогой телефон прямо сейчас." }
        ],
        exercises: [
            { question: "If she ___ enough time tomorrow, she will join us.", options: ["will have", "has", "had"], correct: 1, hint: "После if в First Conditional не ставим will — используем Present Simple (has)." },
            { question: "What would you do if you ___ a wallet full of cash?", options: ["find", "will find", "found"], correct: 2, hint: "В главной части стоит would you do — это Second Conditional, после if нужен Past Simple (found)." },
            { question: "If I ___ you, I would apologize immediately.", options: ["am", "were", "will be"], correct: 1, hint: "Устойчивая формула совета во втором типе условных предложений: If I were you." }
        ]
    },
    {
        id: "gram-b1-4",
        title: "13. Passive Voice (Страдательный залог) в основных временах",
        level: "B1",
        is_premium: true,
        formula: "to be (в нужном времени) + V3   |   by (кем сделано)",
        explanation: "В активном залоге подлежащее само делает действие (<i>Apple makes iPhones</i>). В <b>Passive Voice</b> мы ставим на первое место <b>объект, над которым совершают действие</b>, когда исполнитель неизвестен, очевиден или не важен.<br><br><b>Универсальная формула:</b> берём глагол <b>to be</b> в нужном времени + <b>3-я форма смыслового глагола (V3 / -ed)</b>:<br>• <b>Present Simple Passive:</b> <i>am / is / are + V3</i> → <i>English <b>is spoken</b> all over the world.</i><br>• <b>Past Simple Passive:</b> <i>was / were + V3</i> → <i>This bridge <b>was built</b> in 1890.</i><br>• <b>Future Simple Passive:</b> <i>will be + V3</i> → <i>The package <b>will be delivered</b> tomorrow.</i><br>• <b>Present Perfect Passive:</b> <i>have / has been + V3</i> → <i>The problem <b>has been solved</b>.</i><br><br>Если нужно указать исполнителя действия, добавляем предлог <b>by</b>: <i>Hamlet was written <b>by</b> Shakespeare.</i>",
        examples: [
            { en: "Millions of cups of coffee are consumed every single morning.", ru: "Миллионы чашек кофе выпиваются каждое утро (Present Simple Passive)." },
            { en: "Our website was redesigned by a talented team last month.", ru: "Наш сайт был обновлён талантливой командой в прошлом месяце (Past Simple Passive)." },
            { en: "All orders will be shipped within 24 hours.", ru: "Все заказы будут отправлены в течение 24 часов (Future Simple Passive)." }
        ],
        exercises: [
            { question: "This famous novel ___ by George Orwell in 1949.", options: ["wrote", "was written", "is written"], correct: 1, hint: "Роман был написан в 1949 году — прошедшее время в страдательном залоге (was + V3)." },
            { question: "The results of the test ___ tomorrow afternoon.", options: ["will announce", "will be announced", "are announced"], correct: 1, hint: "Результаты объявят (над ними совершат действие) завтра — Future Simple Passive." },
            { question: "A lot of money ___ on advertising every year.", options: ["spends", "is spent", "are spent"], correct: 1, hint: "Money в английском неисчисляемое (ед. число), тратится каждый год — is spent." }
        ]
    },

    // ==========================================
    // УРОВЕНЬ B2 (UPPER-INTERMEDIATE)
    // ==========================================
    {
        id: "gram-b2-1",
        title: "14. Third & Mixed Conditionals: Сожаления о прошлом и смешанные условия",
        level: "B2",
        is_premium: true,
        formula: "3rd: If + had + V3, would have + V3   |   Mixed: If + had + V3, would + V1 (now)",
        explanation: "На уровне B2 мы учимся выражать сожаления о прошлом, которое уже невозможно изменить, а также связывать прошлое с настоящим:<br><br><b>1. Third Conditional (Нереальное прошлое — 100% гипотеза):</b><br>• <b>Схема:</b> <i>If + had + V3 (Past Perfect), would have + V3</i>.<br>• Используем для критики, анализа ошибок и сожалений: <i>If I <b>had known</b> about the traffic, I <b>would have left</b> earlier.</i> (Если бы я знал о пробках вчера, я бы выехал раньше — но я не знал и опоздал).<br><br><b>2. Mixed Conditional (Смешанный тип: Прошлое условие → Результат СЕЙЧАС):</b><br>• <b>Схема:</b> <i>If + had + V3, would + V1 (now)</i>.<br>• Показывает, как решение в прошлом влияет на текущую реальность: <i>If I <b>had taken</b> that job in London, I <b>would live</b> in the UK now.</i> (Если бы я тогда принял ту работу, я бы сейчас жил в Британии).",
        examples: [
            { en: "If we had booked the hotel earlier, we would have saved a lot of money.", ru: "Если бы мы забронировали отель раньше, мы бы сэкономили кучу денег (но поезд уже ушёл)." },
            { en: "She wouldn't have missed the flight if her alarm had gone off.", ru: "Она бы не опоздала на рейс, если бы сработал её будильник." },
            { en: "If he had studied medicine at university, he would be a doctor today.", ru: "Если бы он изучал медицину в университете, сегодня он был бы врачом (Mixed Conditional)." }
        ],
        exercises: [
            { question: "If I ___ you were in hospital, I would have visited you.", options: ["knew", "had known", "would know"], correct: 1, hint: "Нереальное условие в прошлом (Third Conditional): после if ставим Past Perfect (had known)." },
            { question: "They ___ the game if they had practiced harder.", options: ["would win", "had won", "would have won"], correct: 2, hint: "Результат нереального прошлого действия: would have + V3 (would have won)." },
            { question: "If I had invested in Bitcoin in 2012, I ___ a millionaire now.", options: ["would be", "would have been", "am"], correct: 0, hint: "Mixed Conditional: условие в прошлом (had invested), а результат сейчас (now) — would be." }
        ]
    },
    {
        id: "gram-b2-2",
        title: "15. Reported Speech (Косвенная речь и согласование времён)",
        level: "B2",
        is_premium: true,
        formula: "Present → Past  |  Past / Pres. Perfect → Past Perfect  |  will → would",
        explanation: "Когда мы передаём чужие слова в прошлом (<i>He said that..., She told me that...</i>), в английском работает правило <b>сдвига времён на шаг назад (Backshift)</b>:<br><br><b>1. Таблица сдвига времён:</b><br>• <i>Present Simple (am/work) → Past Simple (was/worked)</i><br>• <i>Present Continuous (is working) → Past Continuous (was working)</i><br>• <i>Past Simple / Present Perfect → Past Perfect (had worked)</i><br>• <i>will → would</i>  |  <i>can → could</i>  |  <i>must → had to</i><br><br><b>2. Разница между SAY и TELL:</b><br>• <b>say</b> (без адресата или с предлогом <i>to</i>): <i>He <b>said</b> (to me) that he was busy.</i><br>• <b>tell</b> (обязательно указываем, <b>кому</b> сказали, без предлога <i>to</i>): <i>He <b>told me</b> that he was busy.</i><br><br><b>3. Сдвиг указателей времени и места:</b> <i>now → then, today → that day, tomorrow → the next day, yesterday → the day before, here → there</i>.",
        examples: [
            { en: "Direct: 'I am working on a new project.' → Reported: She said she was working on a new project.", ru: "Прямая речь → Косвенная: Она сказала, что работает над новым проектом." },
            { en: "He told me that he had already finished the report the day before.", ru: "Он сказал мне, что уже закончил отчёт накануне." },
            { en: "She asked me where I lived and whether I liked my job.", ru: "Она спросила меня, где я живу и нравится ли мне моя работа (в косвенном вопросе порядок слов прямой!)." }
        ],
        exercises: [
            { question: "Tom ___ me that he would call back later.", options: ["said", "told", "spoke"], correct: 1, hint: "После глагола сразу идёт адресат (me) без предлога to — используем told." },
            { question: "'I will help you.' → She promised that she ___ me.", options: ["will help", "helped", "would help"], correct: 2, hint: "При согласовании времён в прошлом will превращается в would." },
            { question: "He asked me what time ___.", options: ["did the train leave", "the train left", "does the train leave"], correct: 1, hint: "В косвенном вопросе порядок слов прямой (подлежащее + сказуемое), вспомогательный did не нужен." }
        ]
    },
    {
        id: "gram-b2-3",
        title: "16. Gerund (-ing) vs Infinitive (to + V1) и глаголы со сменой смысла",
        level: "B2",
        is_premium: true,
        formula: "enjoy / avoid / mind + V-ing   |   decide / plan / promise + to V1",
        explanation: "Когда в предложении идут два глагола подряд, второй принимает форму либо <b>герундия (V-ing)</b>, либо <b>инфинитива (to + V1)</b>:<br><br><b>1. Только Герундий (-ing):</b> <i>enjoy, avoid, mind, finish, suggest, keep, give up, look forward to</i>.<br>• <i>I enjoy learning languages. Would you mind opening the window?</i><br><br><b>2. Только Инфинитив (to + V1):</b> <i>decide, plan, hope, promise, refuse, afford, manage, agree</i>.<br>• <i>We decided to launch the project next month.</i><br><br>⚠️ <b>Глаголы, меняющие смысл (супер-важно для B2!):</b><br>• <b>STOP:</b> <i>stop smoking</i> (бросить привычку курить) vs <i>stop <b>to</b> smoke</i> (остановиться по дороге, чтобы покурить).<br>• <b>REMEMBER / FORGET:</b> <i>I remember locking the door</i> (помню факт из прошлого, как закрывал) vs <i>Remember <b>to</b> lock the door</i> (не забудь закрыть дверь в будущем).<br>• <b>TRY:</b> <i>try restarting the app</i> (попробовать как эксперимент) vs <i>try <b>to</b> lift a heavy box</i> (приложить усилие, постараться).",
        examples: [
            { en: "I look forward to hearing from you soon.", ru: "С нетерпением жду от вас вестей (после фразы look forward to всегда идёт -ing!)." },
            { en: "He stopped drinking coffee because it affected his sleep.", ru: "Он перестал пить кофе (бросил привычку), потому что это влияло на его сон." },
            { en: "On our way to the airport, we stopped to buy some water.", ru: "По дороге в аэропорт мы остановились, чтобы купить воды (цель остановки)." }
        ],
        exercises: [
            { question: "She avoided ___ directly at him during the meeting.", options: ["to look", "looking", "look"], correct: 1, hint: "После глагола avoid (избегать) всегда используется герундий (-ing)." },
            { question: "Don't forget ___ your passport before leaving for the airport!", options: ["taking", "to take", "take"], correct: 1, hint: "Речь о будущем действии, о котором нельзя забыть — forget + to + V1." },
            { question: "I'm really looking forward to ___ you next week.", options: ["meet", "meeting", "met"], correct: 1, hint: "В выражении look forward to частица to является предлогом, поэтому нужен герундий (meeting)." }
        ]
    },

    // ==========================================
    // УРОВЕНЬ C1 (ADVANCED)
    // ==========================================
    {
        id: "gram-c1-1",
        title: "17. Inversion & Past Modals of Deduction: Эмфатическая инверсия и выводы",
        level: "C1",
        is_premium: true,
        formula: "Not only / Never / Seldom + aux + S + V   |   must / can't / might + have + V3",
        explanation: "На уровне C1 речь становится выразительной и точной благодаря двум мощным инструментам:<br><br><b>1. Эмфатическая инверсия (Inversion for Emphasis):</b><br>Когда мы выносим отрицательное или ограничительное наречие в самое начало предложения для усиления, порядок слов становится <b>вопросительным</b> (вспомогательный глагол перед подлежащим):<br>• <i><b>Not only did</b> she win the competition, <b>but</b> she also broke the world record.</i><br>• <i><b>Never before have</b> I seen such a breathtaking view.</i><br>• <i><b>Hardly had</b> I arrived <b>when</b> the meeting started.</i><br><br><b>2. Модальные глаголы логического вывода в прошлом (Past Modals of Deduction):</b><br>• <b>must have + V3</b> (99% уверенности, что это было): <i>The streets are wet — it <b>must have rained</b> last night.</i><br>• <b>can't / couldn't have + V3</b> (99% уверенности, что этого НЕ могло быть): <i>You <b>can't have seen</b> John yesterday — he is in Tokyo!</i><br>• <b>might / could have + V3</b> (возможно, 50/50): <i>She isn't answering; she <b>might have left</b> her phone in the car.</i>",
        examples: [
            { en: "Not only does this method save time, but it also improves long-term memory.", ru: "Этот метод не только экономит время, но и улучшает долговременную память." },
            { en: "Seldom have we witnessed such dedication from a young team.", ru: "Редко нам доводилось видеть такую самоотдачу от молодой команды." },
            { en: "You can't have finished the entire book already — it has 800 pages!", ru: "Не может быть, чтобы ты уже дочитал всю книгу — в ней 800 страниц!" }
        ],
        exercises: [
            { question: "Not only ___ the deadline, but he also delivered exceptional quality.", options: ["he met", "did he meet", "he did meet"], correct: 1, hint: "После Not only в начале предложения требуется инверсия (вопросительный порядок слов: did he meet)." },
            { question: "Look at her smiling face! She ___ the job interview.", options: ["must have passed", "can't have passed", "must pass"], correct: 0, hint: "Высокая уверенность в свершившемся факте прошлого по видимым признакам — must have + V3." },
            { question: "Never before ___ such a complex challenge.", options: ["I have faced", "have I faced", "I faced"], correct: 1, hint: "Отрицательное наречие Never before в начале фразы требует инверсии: have I faced." }
        ]
    }
];
