# Memorial Constructor v.1.0.0

# UA

Он-лайн конструктор погребальної ділянки та пам'ятника.
Реалізований на HTML, CSS та JS, без використання сторонніх бібліотек та фреймворків.
Це означає, що його можна інтегрувати в любу CMS або звичайний лендінг, як звичайну статичну HTML сторінку.

Адаптивна, резинова верстка гарантує корректну роботу на всіх пристроях, від смартфонів до ПК.
Одинакові можливості взаємодії і на сенсорному екрані, і на звичаному ПК.

/_ Основні особливості та можливості конструктора: _/

-   додавання нових елементів. Дані для рендеру і розрахунків беруться з окремого файлу ./data/prices.js;
-   інтерактивні підказки по мірі прогресу, щоб допомогти користувачу зорієнтуватися, хоча все і так очевидно;
-   блок "Фільтр", в якому відображаються всі вибрані елементи. Тут же є можливість вибалити з макету будь-який вибраний елемент;
-   блок "Калькулятор". Автоматично рахує вартість вибраних елементів.
-   можливість зміни користувачем розмірів земельної ділянки. Тут же валідація інпутів (тільки цифри, максимум 4 знаки і не менше базових розмірів);
-   "Тумби" (підставки). Максимум два елемента, сумарна довжина яких не перевищує ширину земельної ділянки. Тумба - елемент, котрий можна переміщувати в конструкторі. Рендер супроводжується інтерактивною підказкою. Не вибравши тумбу, не можна вибрати стеллу (стелла встановлюється на тумбу). Габарити тумби при рендері розраховуються в пропорції до габаритів земельної ділянки. При переміщенні тумби масштабуються;
-   "Стелли" (пам'ятники). Максимум два елементи на одній тумбі, сумарна довжина стелл при цьому повинная бути <= довжині тумби. Стелли переміщуються разом із тумбами. При переміщенні масштабуються. Всі габарити стелл розраховуються в пропорції до тумби, на якій вона "стоїть". Вийняток - подвійні стелли. Подвійна лише одна на тумбі без прив'язки до довжини тумби;
-   "Бордюри". Вибрати можна лише один варіант із доступних.
-   "Цоколь". Вибрати можна лише один варіант із доступних. Не вибравши цоколь, не можна вибрати плитку.
-   "Плитка". Вибрати можна лише один варіант із доступних. Накладується на цоколь.
-   Базові стилі прописані в файлі index.css, динамічні стилі розраховуються і застосовуються у відповідних блоках файлу main.js.
