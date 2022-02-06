/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021> <Yurii Andriiko>
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Делай хорошо, только хорошо! А можешь? - Делай лучше!"
 */

"use strict";

/**
 * Отримуємо прайс. Прайс знаходиться за адресою ../data/prices.js
 * Getting pricelist. It's url is ../data/prices.js
 * Получаем прайс. Прайс находится по адресу ../data/prices.js
 */
const priceList = prices;

/**
 * Важливі тумблери!
 * Important toggle switches!
 * Важные тумблеры!
 */
let isUaLanguage = true;
let isRuLanguage = false;
let isEngLanguage = false;

/**
 * Сховище для зберігання всіх вибранних елементів в одному місці
 */
let selectedItems = [];

/**
 * Отримуємо всі вузли, з якими будемо працювати
 * Getting all nodes with which we will work
 * Получаем все узлы, с которыми будем работать
 */
// Список доступних мов
const languageListNode = document.querySelectorAll(
    ".title-container__language-list"
);

// Блок інформаційних повідомлень
const helperNode = document.querySelectorAll(".field__land-plot-help-info");

// Елементи зміни габаритів земельної дялінки
const landPlotEditContainer = document.querySelectorAll(
    ".field__land-plot-container"
);
const landPlotWidth = document.querySelectorAll(".field__land-plot-width");
const landPlotLength = document.querySelectorAll(".field__land-plot-length");
const arrowsContainerNode = document.querySelectorAll(
    ".field__land-plot-show-edit"
);
const editPlotSizesNode = document.querySelectorAll(
    ".field__land-plot-user-edit"
);
const plotWidthInput = document.querySelectorAll(
    ".land-plot-user-edit__plot-width"
);
const plotLengthInput = document.querySelectorAll(
    ".land-plot-user-edit__plot-length"
);
const plotInputErrorMessage = document.querySelectorAll(".field__error");
const $stellaLetteringInfoMessage = document.querySelectorAll(
    ".stella-lettering-info"
);

const filterNode = document.getElementsByClassName(
    "constructor__filter-section"
);

// Елементи, котрі накладуються на земельну ділянку
const $draggableElementsNode = document.querySelectorAll(".draggable-elements");

const landPlotNode = document.querySelectorAll(".field__land");
const $landElements = document.querySelectorAll(".field-elements");

// Вкладки
const elementsNavTabs = document.getElementsByClassName(
    "constructor__elements-nav"
);
const elementsNavTabsValues = document.getElementsByClassName(
    "constructor__elements-container"
);
const elementsValuesSocleNode = document.querySelectorAll(
    ".constructor__elements-values.socle"
);
const $elementsStandsNode = document.querySelectorAll(
    ".constructor__elements-values.stand"
);
const $standContainerNode = document.querySelectorAll(".stand-container");
const infoMessageNode = document.querySelectorAll(
    ".stand-container__info-message"
);
const $standContainer2Node = document.querySelectorAll(".stand-container2");
const infoMessage2Node = document.querySelectorAll(
    ".stand-container__info-message2"
);
const standErrorNode = document.querySelectorAll(".stand__error");
const $monumentError = document.querySelectorAll(".monument__error");
const $monumentErrorLength = document.querySelectorAll(
    ".monument__error-length"
);
const $flowerGardenError = document.querySelectorAll(".flower-garden__error");

const $tileErrorNode = document.querySelectorAll(
    ".elements-container__tile-error"
);

const elementsValuesMonumentsNode = document.querySelectorAll(
    ".constructor__elements-values.monuments"
);
const $elementsValuesFlowerGardensNode = document.querySelectorAll(
    ".constructor__elements-values.flower-garden"
);
const $steleDecorationForm = document.querySelectorAll(".constructor__form");
const $epitaphListNode = document.getElementById("epitaph-list");
const $crossListNode = document.getElementById("cross-list");
const $flowerListNode = document.getElementById("flower-list");
const $candleListNode = document.getElementById("candle-list");
const $vignetteListNode = document.getElementById("vignette-list");

// Калькулятор
const $calculatorSection = document.querySelectorAll(".calculator");
const calculatorLandPlotNode = document.querySelectorAll(
    ".calculator__data-value.land-plot"
);
const $landPlotAreaNode = document.querySelectorAll(
    ".calculator__data-value.land-pot-square"
);
const landPlotPerimeterNode = document.querySelectorAll(
    ".calculator__data-value.land-pot-perimeter"
);
const elementsBordersNode = document.querySelectorAll(
    ".constructor__elements-values.borders"
);
const elementsBeautyNode = document.querySelectorAll(
    ".constructor__elements-values.beauty"
);
const dataContainerCementTotalCostNode = document.querySelectorAll(
    ".calculator__data-container.socle-total-cost"
);
const dataValueCementTotalCostNode = document.querySelectorAll(
    ".calculator__data-value.socle-total-cost"
);
const $totalCostNode = document.querySelectorAll(
    ".calculator__data-container.total-cost"
);
const totalCostTileNode = document.querySelectorAll(
    ".calculator__data-container.tile-total-cost"
);
const $selectStele = document.getElementById("selectStele");

// Модальне вікно вибору тумби для обраної стелли
const $modalWindowChooseStand = document.querySelectorAll(
    ".info-message__choose-stand"
);
const $chooseStandMessage = document.querySelectorAll(
    ".info-message__choose-stand"
);

const $finalInfoMessage = document.querySelectorAll(".save-final-img-info");
const $sendModalWindow = document.querySelectorAll(".send-modal-window");
const $sendOrderForm = document.querySelectorAll(".send-order-form");
const $soclePupError = document.querySelectorAll(".socle-pup-error");
const $landSizePupError = document.querySelectorAll(".land-size-pup-error");

let isFirstStep = true;
let isSecondStep = false;
let isThirdStep = false;
let isFourthStep = false;
let isFifthStep = false;
let isSixthStep = false;
let isSeventhStep = false;
let isEighthStep = false;

const startHelper = () => {
    const infoMessages = [
        {
            id: 0,
            uaMessage:
                "<p>Спочатку радимо вибрати розміри земельної ділянки</p>",
            ruMessage:
                "<p>Сначала рекомендуем выбрать размеры земельного участка</p>",
            engMessage:
                "<p>First, we advise you to choose the size of the land</p>",
        },
        {
            id: 1,
            uaMessage:
                "<p>Якщо розміри ділянки Вас влаштовують, виберіть будь-ласка тумбу (підставку) для стелли</p>",
            ruMessage:
                "<p>Если размеры участка Вас устраивают, выберите пожалуйста тумбу (подставку) для стеллы</p>",
            engMessage:
                "<p>If the size of the land suits you, please choose a pedestal (stand) for the stele</p>",
        },
        {
            id: 2,
            uaMessage: "<p>Тепер Ви можете вибрати стеллу</p>",
            ruMessage: "<p>Теперь Вы можете выбрать стеллу</p>",
            engMessage: "<p>Now you can choose a stele</p>",
        },
        {
            id: 3,
            uaMessage:
                "<p>На макет можна додати максимум 4 стелли. Наразі у Вас є можливість додати елементи оформлення стелли</p>",
            ruMessage:
                "<p>На макет можно добавить максимум 4 стеллы. Теперь у Вас есть возможность добавить элементы оформления стеллы</p>",
            engMessage:
                "<p>You can add a maximum of 4 stella to the mockup. And now you have the opportunity to add elements of the design of the stella</p>",
        },
        {
            id: 4,
            uaMessage:
                "<p>Радимо звернути увагу на оформлення ділянки, вибравши цоколь чи протиусадкові плити</p>",
            ruMessage:
                "<p>Советуем обратить внимание на оформление участка, выбрав цоколь или противоусадочные плиты.</p>",
            engMessage:
                "<p>We advise you to pay attention to the design of the land plot by choosing a socle or anti-shrink plates.</p>",
        },
        {
            id: 5,
            uaMessage: "<p>Тепер Ви можете вибрати плитку та квітник</p>",
            ruMessage: "<p>Теперь Вы можете выбрать плитку и цветник</p>",
            engMessage: "<p>Now you can choose tiles and flower beds</p>",
        },
        {
            id: 6,
            uaMessage:
                "<p>Також зверніть увагу на вкладки Бордюри та Аксесуари</p>",
            ruMessage:
                "<p>Также обратите внимание на вкладки Бордюры и Аксессуары</p>",
            engMessage:
                "<p>Also pay attention to the tabs Borders and Accessories</p>",
        },
        {
            id: 7,
            uaMessage: "<p>Не забудьте зберегти готовий макет!</p>",
            ruMessage: "<p>Не забудьте сохранить готовый макет!</p>",
            engMessage: "<p>Don't forget to save ready mockup</p>",
        },
    ];

    const getHelpMessage = (infoMessages, messageNumber) => {
        infoMessages.forEach(({ id, uaMessage, ruMessage, engMessage }) => {
            if (id === messageNumber && isUaLanguage) {
                helperNode[0].hasChildNodes() &&
                    helperNode[0].removeChild(helperNode[0].children[0]);
                helperNode[0].insertAdjacentHTML("afterbegin", uaMessage);
            }

            if (id === messageNumber && isRuLanguage) {
                helperNode[0].hasChildNodes() &&
                    helperNode[0].removeChild(helperNode[0].children[0]);
                helperNode[0].insertAdjacentHTML("afterbegin", ruMessage);
            }

            if (id === messageNumber && isEngLanguage) {
                helperNode[0].hasChildNodes() &&
                    helperNode[0].removeChild(helperNode[0].children[0]);
                helperNode[0].insertAdjacentHTML("afterbegin", engMessage);
            }
        });
    };

    for (let i = 0; i < selectedItems.length; i++) {
        const { category } = selectedItems[i];

        if (category === "stand") {
            isSecondStep = false;
            isThirdStep = true;
        }

        if (category === "monuments" && !isFifthStep) {
            isThirdStep = false;
            isFourthStep = true;
        }

        if (category === "socle") {
            isFourthStep = false;
            isFifthStep = false;
            isSixthStep = true;
        }

        if (category === "flowerGarden") {
            isSixthStep = false;
            isSeventhStep = true;
        }

        if (category === "flowerGarden") {
            isSixthStep = false;
            isSeventhStep = true;
        }

        if (category === "curbs" || category === "beauty") {
            isSeventhStep = false;
            isEighthStep = true;
        }
    }

    if (isFirstStep) {
        getHelpMessage(infoMessages, 0);

        setTimeout(() => {
            landPlotEditContainer[0].classList.add("focus");
        }, 5000);

        setTimeout(() => {
            landPlotEditContainer[0].classList.remove("focus");
        }, 8000);

        setTimeout(() => {
            isFirstStep = false;
            isSecondStep = true;
            startHelper();
        }, 8000);
    }

    if (isSecondStep) {
        getHelpMessage(infoMessages, 1);
    }

    if (isThirdStep) {
        getHelpMessage(infoMessages, 2);
    }

    if (isFourthStep) {
        getHelpMessage(infoMessages, 3);

        $steleDecorationForm[0].classList.add("focus");

        setTimeout(() => {
            $steleDecorationForm[0].classList.remove("focus");
        }, 3000);
    }

    if (isFifthStep) {
        getHelpMessage(infoMessages, 4);
    }

    if (isSixthStep) {
        getHelpMessage(infoMessages, 5);
    }

    if (isSeventhStep) {
        setTimeout(() => {
            getHelpMessage(infoMessages, 6);
        }, 3000);
    }

    if (isEighthStep) {
        setTimeout(() => {
            getHelpMessage(infoMessages, 7);
        }, 3000);
    }
};

/**
 * Функція для створення повноцінних масивів із HTML вузлів
 * Function to create arrays from HTML nodes
 * Функция для создания полноценных массивов из HTML узлов
 * @param {HTMLnode} HTMLnode
 * @returns Array contains HTML node children
 */
const createArrayFromNode = (HTMLnode) => {
    let result = [];

    result = Array.from(HTMLnode[0].children);

    return result;
};

/**
 * Функція для створення карток елементів у вкладках.
 * Function for creating tabbed items in tabs.
 * Функция для создания карточек элементов во вкладках.
 * @param {Number} selectedTabIndex
 * @param {Array} priceList
 * @returns  Array which contains Nodes of individual element as a strings
 */
const createCardNode = (selectedTabIndex, priceList) => {
    let newCard = [];
    let selectedTab = selectedTabIndex + 1;
    const BASE_IMG_URL = "./img/items/";

    priceList.forEach((el) => {
        for (let key in el) {
            const data = el[key];

            for (let i = 0; i < data.length; i++) {
                const { tabId } = data[i];

                if (tabId === selectedTab) {
                    const {
                        imgUrl,
                        titleUa,
                        siteNameUa,
                        siteNameRu,
                        siteNameEng,
                        price,
                        category,
                    } = data[i];

                    // unshift для того, щоб елементи рендерилися в тому ж порядку, як і в прайсі
                    newCard.unshift(
                        `<div class="constructor__element-container">
                            <img src="./img/icons/close.svg" alt="Приховати елемент" class="field__hide-element-button">
                            <img src="${
                                BASE_IMG_URL + imgUrl
                            }" alt="${titleUa}" class="constructor__element-img" data-category="${category}">
                            <p class="constructor__element-name">
                                <span data-lang="ua" class="active">${siteNameUa}</span>
                                <span data-lang="ru">${siteNameRu}</span>
                                <span data-lang="eng">${siteNameEng}</span>
                            </p>
                            <p class="constructor__element-price">
                                <span class="active">${price} ${
                            category === "beauty" || category === "socle"
                                ? "грн/м2"
                                : "грн/шт"
                        }</span>
                                <span>${price} UAH/pcs</span>
                            </p>
                        </div>`
                    );
                }
            }
        }
    });

    return newCard;
};

/**
 * Функція для отримання поточних розмірів земельної ділянки
 * повертає об'єкт з поточними розмірами
 * Function for getting current land plot sizes
 * returns object which includes current sizes
 * Функция для получения текущих размеров земельного участка
 * возвращает объект с текущими размерами
 * @returns Object { width, length }
 */
const handleLandPlotSizes = () => {
    let width = null;
    let length = null;

    width = landPlotWidth[0].innerText;
    length = landPlotLength[0].innerText;

    return { width, length };
};

/**
 * Функція для обробки повідомлень (інформаційних і про помилки)
 * Function for handle messages (informational and error)
 * Функция для обработки сообщений (информационных и об о шибках)
 * @param {HTMLnode} HTMLnode
 * @param {languageList} Object
 */
const handleInfoAndErrorMessages = (HTMLnode, languageList) => {
    const { isUaLanguage, isRuLanguage, isEngLanguage } = languageList;

    if (isUaLanguage) {
        HTMLnode[0].classList.add("active");
        HTMLnode[0].children[0].classList.add("active");

        setTimeout(() => {
            HTMLnode[0].children[0].classList.remove("active");
            HTMLnode[0].classList.remove("active");
        }, 3000);
    }

    if (isRuLanguage) {
        HTMLnode[0].classList.add("active");
        HTMLnode[0].children[1].classList.add("active");

        setTimeout(() => {
            HTMLnode[0].children[1].classList.remove("active");
            HTMLnode[0].classList.remove("active");
        }, 3000);
    }

    if (isEngLanguage) {
        HTMLnode[0].classList.add("active");
        HTMLnode[0].children[2].classList.add("active");

        setTimeout(() => {
            HTMLnode[0].children[2].classList.remove("active");
            HTMLnode[0].classList.remove("active");
        }, 3000);
    }
};

/**
 * Функція для закриття діалогового вікна вибору тумби
 * Function for closing the dialog window for choosing a stand
 * Функция для закрытия диалогового окна выбора тумбы
 */
const handleHideInfoMessage = () => {
    const $chooseStandMessage = document.querySelectorAll(
        ".info-message__choose-stand"
    );

    if ($chooseStandMessage[0].classList.contains("active")) {
        const standMessageChildrenNodes =
            createArrayFromNode($chooseStandMessage);

        for (let i = 0; i < standMessageChildrenNodes.length; i++) {
            standMessageChildrenNodes[i].classList.contains(
                "stands-choose_wrapper"
            ) &&
                $chooseStandMessage[0].removeChild(
                    standMessageChildrenNodes[i]
                );
        }
        $chooseStandMessage[0].classList.remove("active");
    }
};

/**
 * Фукція проходить по всьому DOM-дереву, шукає data-атрибут "lang"
 * видаляє та додає клас "active" в залежності від вибраної мови
 * The function runs throughout the DOM-tree, looking for the data attribute "lang"
 * removes and adds the "active" class depending on the selected language
 * Фукция проходит по всему DOM-дереву, ищет data-атрибут "lang"
 * удаляет и добавляет класс "active" в зависимости от выбранного языка
 * @param {HTMLNode} parentElement
 * @param {String} language
 */
const setLanguage = (parentElement, language) => {
    const nodeIterator = parentElement.createNodeIterator(
        document,
        NodeFilter.SHOW_ELEMENT,
        null
    );

    let child = null;

    while ((child = nodeIterator.nextNode()) !== null) {
        if (child.dataset.lang) {
            child.classList.contains("active") &&
                child.classList.remove("active");
            child.dataset.lang === language && child.classList.add("active");
        }
    }
};

/**
 * Функція для відображення вибраного елементу в зоні Фільтр
 * приймає об єкт з параметрами для рендеру
 * @param {Object} props
 */
const handleAddFilterNode = (props) => {
    const {
        category,
        selectedItemIndex,
        imgUrl,
        siteNameUa,
        siteNameRu,
        siteNameEng,
    } = props;

    let htmlNodeOnFilter = `<div class="filter-section__item" data-category="${category}" data-item-index="${selectedItemIndex}">
                                <img src="./img/items${imgUrl}" 
                                     alt="${siteNameUa}" 
                                     class="filter-section__item-img"
                                />
                                <p class="filter-section__item-title">
                                    <span data-lang="ua" class="active">${siteNameUa}</span>
                                    <span data-lang="ru">${siteNameRu}</span>
                                    <span data-lang="eng">${siteNameEng}</span>
                                </p>
                                <img src="./img/icons/close.svg" 
                                     alt="Приховати елемент" 
                                     class="field__hide-element-button">
                                </div>`;

    filterNode[0].insertAdjacentHTML("afterbegin", htmlNodeOnFilter);
};

/**
 * Функція отримує індекс Тумби
 * для подальших розрахунків по масштабуванню.
 * The function gets the Stand index
 * for further scaling calculations.
 * Функция получает индекс Тумбы
 * для последующих расчетов по масштабированию.
 * @param {HTMLNode} node
 * @returns Object contains Stand index as a Number in HTML Node and Stelles indexes as Array;
 */
const getStandAndMonumentsIndexes = (node) => {
    let selectedStandIndex = null;
    // let selectedMonumentsIndexes = [];

    const childrenOfStandContainer1 = createArrayFromNode(node);

    for (let i = 0; i < childrenOfStandContainer1.length; i++) {
        if (childrenOfStandContainer1[i].dataset.category === "stand") {
            selectedStandIndex = Number(
                childrenOfStandContainer1[i].dataset.itemIndex
            );
        }
    }

    return {
        selectedStandIndex,
    };
};

/**
 * Функція розраховує дані для масштабування стелл.
 * The function calculates the data for scaling the steles.
 * Функция рассчитывает данные для масштабирования стелл.
 * @param {Array} selectedMonumentsIndexes
 * @param {Number} standLength
 * @returns
 */
const handleMonumentsDataForScaling = (standNode, standLength) => {
    let result = [];
    let monumentData = {};

    // Заходит контейнер для поиска и расчета
    const standContainerChildren = createArrayFromNode(standNode);

    for (let i = 0; i < standContainerChildren.length; i++) {
        if (standContainerChildren[i].dataset.category === "monuments") {
            let monumentIndex = +standContainerChildren[i].dataset.itemIndex;
            const { length, height, titleUa } = getElementData(
                monumentIndex,
                "monuments"
            );

            monumentData["monumentNode"] = standNode[0].children[i];
            monumentData["monumentWidthProportion"] = length / standLength;
            monumentData["monumentHeightProportion"] = height / length;
            monumentData["isDouble"] = titleUa.includes("Подвійний");

            result.push(monumentData);
            monumentData = {};
        }
    }

    return result;
};

const handleStandPositionForDrag = (
    standLength,
    standHeight,
    landplotWidth,
    standNode,
    intViewportWidth
) => {
    const INITIAL_TOP_POSITION_S = 230;
    const MAX_HEIGHT_OF_AREA_S = 89;
    let initialLengthS = ((standLength / landplotWidth) * 100) / 2.1;

    const INITIAL_TOP_POSITION_M = 360;
    const MAX_HEIGHT_OF_AREA_M = 130;
    let initialLengthM = ((standLength / landplotWidth) * 100) / 1.9;

    const INITIAL_TOP_POSITION_L = 390;
    const MAX_HEIGHT_OF_AREA_L = 135;
    let initialLengthL = ((standLength / landplotWidth) * 100) / 2;

    const INITIAL_TOP_POSITION_XL = 360;
    const MAX_HEIGHT_OF_AREA_XL = 180;
    let initialLengthXL = ((standLength / landplotWidth) * 100) / 2;

    const newCoordinates = standNode.getBoundingClientRect();
    const { top, width: standWidthOnConstructor } = newCoordinates;

    if (intViewportWidth < 576) {
        if (top > INITIAL_TOP_POSITION_S) {
            let progress =
                (top - INITIAL_TOP_POSITION_S) / MAX_HEIGHT_OF_AREA_S;
            let newHeight = standHeight * progress + standHeight;
            let newLength = initialLengthS + initialLengthS * (progress / 1.2);
            standNode.style.width = `${newLength}%`;
            standNode.style.height = `${newHeight * 0.6}px`;
        }
    }

    if (intViewportWidth > 576) {
        if (top > INITIAL_TOP_POSITION_M) {
            let progress =
                (top - INITIAL_TOP_POSITION_M) / MAX_HEIGHT_OF_AREA_M;
            let newHeight = standHeight * progress + standHeight;
            let newLength = initialLengthM + initialLengthM * (progress / 1.2);
            standNode.style.width = `${newLength}%`;
            standNode.style.height = `${newHeight * 0.7}px`;
        }
    }

    if (intViewportWidth > 768) {
        if (top > INITIAL_TOP_POSITION_L) {
            let progress =
                (top - INITIAL_TOP_POSITION_L) / MAX_HEIGHT_OF_AREA_L;
            let newHeight = standHeight * progress + standHeight;
            let newLength = initialLengthL + initialLengthL * (progress / 1.2);
            standNode.style.width = `${newLength}%`;
            standNode.style.height = `${newHeight * 0.8}px`;
        }
    }

    if (intViewportWidth > 992) {
        if (top > INITIAL_TOP_POSITION_XL) {
            let progress =
                (top - INITIAL_TOP_POSITION_XL) / MAX_HEIGHT_OF_AREA_XL;
            let newHeight = standHeight * progress + standHeight;
            let newLength =
                initialLengthXL + initialLengthXL * (progress / 1.2);
            standNode.style.width = `${newLength}%`;
            standNode.style.height = `${newHeight * 0.9}px`;
        }
    }

    return { standWidthOnConstructor };
};

/**
 * Функція для пересування елементів - Тумби
 * Function for moving elements - Stands
 * Функция для передвижения элементов - Тумбы.
 */
const standContainer = document.getElementById("stand-container");

let pos1 = 0;
let pos2 = 0;
let pos3 = 0;
let pos4 = 0;

standContainer.addEventListener("mousedown", (e) => {
    e = e || window.event;
    e.preventDefault();

    const { selectedStandIndex } =
        getStandAndMonumentsIndexes($standContainerNode);

    const seletedStandData = getElementData(selectedStandIndex, "stand");
    const { length: standLength, height: standHeight } = seletedStandData;

    let $firstMonument = null;
    let firstMonumentWidthProportion = null;
    let firstMonumentHeightProportion = null;
    let firstMonumentIsDouble = null;

    let $secondMonument = null;
    let secondMonumentWidthProportion = null;
    let secondMonumentHeightProportion = null;

    const monumentData = handleMonumentsDataForScaling(
        $standContainerNode,
        standLength
    );

    if (monumentData.length === 1) {
        const {
            monumentNode,
            monumentWidthProportion,
            monumentHeightProportion,
            isDouble,
        } = monumentData[0];

        $firstMonument = monumentNode;
        firstMonumentWidthProportion = monumentWidthProportion;
        firstMonumentHeightProportion = monumentHeightProportion;
        firstMonumentIsDouble = isDouble;
    }

    if (monumentData.length === 2) {
        const {
            monumentNode: firstMonumentNode,
            monumentWidthProportion: fMonumentWidthProportion,
            monumentHeightProportion: fMonumentHeightProportion,
        } = monumentData[1];

        $firstMonument = firstMonumentNode;
        firstMonumentWidthProportion = fMonumentWidthProportion;
        firstMonumentHeightProportion = fMonumentHeightProportion;

        const {
            monumentNode: secondMonumentNode,
            monumentWidthProportion: sMonumentWidthProportion,
            monumentHeightProportion: sMonumentHeightProportion,
        } = monumentData[0];

        $secondMonument = secondMonumentNode;
        secondMonumentWidthProportion = sMonumentWidthProportion;
        secondMonumentHeightProportion = sMonumentHeightProportion;
    }

    const { width: landplotWidth } = handleLandPlotSizes();
    let intViewportWidth = window.innerWidth;

    const closeDragElement = () => {
        document.onmouseup = null;
        document.onmousemove = null;
    };

    const elementDrag = (e) => {
        e = e || window.event;
        e.preventDefault();

        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        standContainer.style.top = standContainer.offsetTop - pos2 + "px";
        standContainer.style.left = standContainer.offsetLeft - pos1 + "px";

        const { standWidthOnConstructor } = handleStandPositionForDrag(
            standLength,
            standHeight,
            landplotWidth,
            standContainer,
            intViewportWidth
        );

        if ($firstMonument && $secondMonument) {
            const firstMonumentWidthOnStand =
                standWidthOnConstructor * firstMonumentWidthProportion;
            const firstMonumentHeightOnStand =
                firstMonumentWidthOnStand * firstMonumentHeightProportion;
            $firstMonument.style.width = `${firstMonumentWidthOnStand}px`;
            $firstMonument.style.height = `${firstMonumentHeightOnStand}px`;
            $firstMonument.style.top = `${-firstMonumentHeightOnStand + 3}px`;
            const leftPositionOfFirstStella =
                (standWidthOnConstructor / 2 - firstMonumentWidthOnStand) / 2;
            $firstMonument.style.left = `${leftPositionOfFirstStella}px`;

            const secondMonumentWidthOnStand =
                standWidthOnConstructor * secondMonumentWidthProportion;
            const secondMonumentHeightOnStand =
                secondMonumentWidthOnStand * secondMonumentHeightProportion;
            $secondMonument.style.width = `${secondMonumentWidthOnStand}px`;
            $secondMonument.style.height = `${secondMonumentHeightOnStand}px`;
            $secondMonument.style.top = `${-secondMonumentHeightOnStand + 3}px`;
            const leftPositionOfSecondStella =
                leftPositionOfFirstStella * 2 +
                firstMonumentWidthOnStand +
                (standWidthOnConstructor / 2 - secondMonumentWidthOnStand) / 2;
            $secondMonument.style.left = `${leftPositionOfSecondStella}px`;
        } else if ($firstMonument && !firstMonumentIsDouble) {
            const monumentWidthOnStand =
                standWidthOnConstructor * firstMonumentWidthProportion;
            const monumentHeightOnStand =
                monumentWidthOnStand * firstMonumentHeightProportion;
            $firstMonument.style.width = `${monumentWidthOnStand}px`;
            $firstMonument.style.height = `${monumentHeightOnStand}px`;
            $firstMonument.style.top = `${-monumentHeightOnStand + 3}px`;
            $firstMonument.style.left = `${
                standWidthOnConstructor / 2 - monumentWidthOnStand / 2
            }px`;
        } else if ($firstMonument && firstMonumentIsDouble) {
            const monumentWidthOnStand =
                standWidthOnConstructor * firstMonumentWidthProportion;
            const monumentHeightOnStand =
                monumentWidthOnStand * firstMonumentHeightProportion;
            $firstMonument.style.minWidth = `${monumentWidthOnStand}px`;
            $firstMonument.style.height = `${monumentHeightOnStand}px`;
            $firstMonument.style.top = `${-monumentHeightOnStand + 3}px`;
            $firstMonument.style.left = `${
                -(monumentWidthOnStand - standWidthOnConstructor) / 2
            }px`;
        }
    };

    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
});

standContainer.addEventListener("touchstart", (e) => {
    e = e || window.event;
    e.preventDefault();

    const { selectedStandIndex } =
        getStandAndMonumentsIndexes($standContainerNode);

    const seletedStandData = getElementData(selectedStandIndex, "stand");
    const { length: standLength, height: standHeight } = seletedStandData;

    let $firstMonument = null;
    let firstMonumentWidthProportion = null;
    let firstMonumentHeightProportion = null;
    let firstMonumentIsDouble = null;

    let $secondMonument = null;
    let secondMonumentWidthProportion = null;
    let secondMonumentHeightProportion = null;

    const monumentData = handleMonumentsDataForScaling(
        $standContainerNode,
        standLength
    );

    if (monumentData.length === 1) {
        const {
            monumentNode,
            monumentWidthProportion,
            monumentHeightProportion,
            isDouble,
        } = monumentData[0];

        $firstMonument = monumentNode;
        firstMonumentWidthProportion = monumentWidthProportion;
        firstMonumentHeightProportion = monumentHeightProportion;
        firstMonumentIsDouble = isDouble;
    }

    if (monumentData.length === 2) {
        const {
            monumentNode: firstMonumentNode,
            monumentWidthProportion: fMonumentWidthProportion,
            monumentHeightProportion: fMonumentHeightProportion,
        } = monumentData[1];

        $firstMonument = firstMonumentNode;
        firstMonumentWidthProportion = fMonumentWidthProportion;
        firstMonumentHeightProportion = fMonumentHeightProportion;

        const {
            monumentNode: secondMonumentNode,
            monumentWidthProportion: sMonumentWidthProportion,
            monumentHeightProportion: sMonumentHeightProportion,
        } = monumentData[0];

        $secondMonument = secondMonumentNode;
        secondMonumentWidthProportion = sMonumentWidthProportion;
        secondMonumentHeightProportion = sMonumentHeightProportion;
    }

    const { width: landplotWidth } = handleLandPlotSizes();
    let intViewportWidth = window.innerWidth;

    const closeDragElement = () => {
        document.ontouchend = null;
        document.ontouchmove = null;
    };

    const elementDrag = (e) => {
        e = e || window.event;
        // e.preventDefault();

        pos1 = pos3 - e.touches[0].clientX;
        pos2 = pos4 - e.touches[0].clientY;
        pos3 = e.touches[0].clientX;
        pos4 = e.touches[0].clientY;
        standContainer.style.top = standContainer.offsetTop - pos2 + "px";
        standContainer.style.left = standContainer.offsetLeft - pos1 + "px";

        const { standWidthOnConstructor } = handleStandPositionForDrag(
            standLength,
            standHeight,
            landplotWidth,
            standContainer,
            intViewportWidth
        );

        if ($firstMonument && $secondMonument) {
            const firstMonumentWidthOnStand =
                standWidthOnConstructor * firstMonumentWidthProportion;
            const firstMonumentHeightOnStand =
                firstMonumentWidthOnStand * firstMonumentHeightProportion;
            $firstMonument.style.width = `${firstMonumentWidthOnStand}px`;
            $firstMonument.style.height = `${firstMonumentHeightOnStand}px`;
            $firstMonument.style.top = `${-firstMonumentHeightOnStand + 3}px`;
            const leftPositionOfFirstStella =
                (standWidthOnConstructor / 2 - firstMonumentWidthOnStand) / 2;
            $firstMonument.style.left = `${leftPositionOfFirstStella}px`;

            const secondMonumentWidthOnStand =
                standWidthOnConstructor * secondMonumentWidthProportion;
            const secondMonumentHeightOnStand =
                secondMonumentWidthOnStand * secondMonumentHeightProportion;
            $secondMonument.style.width = `${secondMonumentWidthOnStand}px`;
            $secondMonument.style.height = `${secondMonumentHeightOnStand}px`;
            $secondMonument.style.top = `${-secondMonumentHeightOnStand + 3}px`;
            const leftPositionOfSecondStella =
                leftPositionOfFirstStella * 2 +
                firstMonumentWidthOnStand +
                (standWidthOnConstructor / 2 - secondMonumentWidthOnStand) / 2;
            $secondMonument.style.left = `${leftPositionOfSecondStella}px`;
        } else if ($firstMonument && !firstMonumentIsDouble) {
            const monumentWidthOnStand =
                standWidthOnConstructor * firstMonumentWidthProportion;
            const monumentHeightOnStand =
                monumentWidthOnStand * firstMonumentHeightProportion;
            $firstMonument.style.width = `${monumentWidthOnStand}px`;
            $firstMonument.style.height = `${monumentHeightOnStand}px`;
            $firstMonument.style.top = `${-monumentHeightOnStand + 3}px`;
            $firstMonument.style.left = `${
                standWidthOnConstructor / 2 - monumentWidthOnStand / 2
            }px`;
        } else if ($firstMonument && firstMonumentIsDouble) {
            const monumentWidthOnStand =
                standWidthOnConstructor * firstMonumentWidthProportion;
            const monumentHeightOnStand =
                monumentWidthOnStand * firstMonumentHeightProportion;
            $firstMonument.style.minWidth = `${monumentWidthOnStand}px`;
            $firstMonument.style.height = `${monumentHeightOnStand}px`;
            $firstMonument.style.top = `${-monumentHeightOnStand + 3}px`;
            $firstMonument.style.left = `${
                -(monumentWidthOnStand - standWidthOnConstructor) / 2
            }px`;
        }
    };

    pos3 = e.touches[0].clientX;
    pos4 = e.touches[0].clientY;
    document.ontouchend = closeDragElement;
    document.ontouchmove = elementDrag;
});

const standContainer2 = document.getElementById("stand-container2");

let pos1Container2 = 0;
let pos2Container2 = 0;
let pos3Container2 = 0;
let pos4Container2 = 0;

standContainer2.addEventListener("mousedown", (e) => {
    e = e || window.event;
    e.preventDefault();

    const { selectedStandIndex } =
        getStandAndMonumentsIndexes($standContainer2Node);

    const seletedStandData = getElementData(selectedStandIndex, "stand");
    const { length: standLength, height: standHeight } = seletedStandData;

    let $firstMonument = null;
    let firstMonumentWidthProportion = null;
    let firstMonumentHeightProportion = null;
    let firstMonumentIsDouble = null;

    let $secondMonument = null;
    let secondMonumentWidthProportion = null;
    let secondMonumentHeightProportion = null;

    const monumentData = handleMonumentsDataForScaling(
        $standContainer2Node,
        standLength
    );

    if (monumentData.length === 1) {
        const {
            monumentNode,
            monumentWidthProportion,
            monumentHeightProportion,
            isDouble,
        } = monumentData[0];

        $firstMonument = monumentNode;
        firstMonumentWidthProportion = monumentWidthProportion;
        firstMonumentHeightProportion = monumentHeightProportion;
        firstMonumentIsDouble = isDouble;
    }

    if (monumentData.length === 2) {
        const {
            monumentNode: firstMonumentNode,
            monumentWidthProportion: fMonumentWidthProportion,
            monumentHeightProportion: fMonumentHeightProportion,
        } = monumentData[1];

        $firstMonument = firstMonumentNode;
        firstMonumentWidthProportion = fMonumentWidthProportion;
        firstMonumentHeightProportion = fMonumentHeightProportion;

        const {
            monumentNode: secondMonumentNode,
            monumentWidthProportion: sMonumentWidthProportion,
            monumentHeightProportion: sMonumentHeightProportion,
        } = monumentData[0];

        $secondMonument = secondMonumentNode;
        secondMonumentWidthProportion = sMonumentWidthProportion;
        secondMonumentHeightProportion = sMonumentHeightProportion;
    }

    const { width: landplotWidth } = handleLandPlotSizes();
    let intViewportWidth = window.innerWidth;

    const closeDragElement = () => {
        document.onmouseup = null;
        document.onmousemove = null;
    };

    const elementDrag = (e) => {
        e = e || window.event;
        e.preventDefault();

        pos1Container2 = pos3Container2 - e.clientX;
        pos2Container2 = pos4Container2 - e.clientY;
        pos3Container2 = e.clientX;
        pos4Container2 = e.clientY;
        standContainer2.style.top =
            standContainer2.offsetTop - pos2Container2 + "px";
        standContainer2.style.left =
            standContainer2.offsetLeft - pos1Container2 + "px";

        const { standWidthOnConstructor } = handleStandPositionForDrag(
            standLength,
            standHeight,
            landplotWidth,
            standContainer2,
            intViewportWidth
        );

        if ($firstMonument && $secondMonument) {
            const firstMonumentWidthOnStand =
                standWidthOnConstructor * firstMonumentWidthProportion;
            const firstMonumentHeightOnStand =
                firstMonumentWidthOnStand * firstMonumentHeightProportion;
            $firstMonument.style.width = `${firstMonumentWidthOnStand}px`;
            $firstMonument.style.height = `${firstMonumentHeightOnStand}px`;
            $firstMonument.style.top = `${-firstMonumentHeightOnStand + 3}px`;
            const leftPositionOfFirstStella =
                (standWidthOnConstructor / 2 - firstMonumentWidthOnStand) / 2;
            $firstMonument.style.left = `${leftPositionOfFirstStella}px`;

            const secondMonumentWidthOnStand =
                standWidthOnConstructor * secondMonumentWidthProportion;
            const secondMonumentHeightOnStand =
                secondMonumentWidthOnStand * secondMonumentHeightProportion;
            $secondMonument.style.width = `${secondMonumentWidthOnStand}px`;
            $secondMonument.style.height = `${secondMonumentHeightOnStand}px`;
            $secondMonument.style.top = `${-secondMonumentHeightOnStand + 3}px`;
            const leftPositionOfSecondStella =
                leftPositionOfFirstStella * 2 +
                firstMonumentWidthOnStand +
                (standWidthOnConstructor / 2 - secondMonumentWidthOnStand) / 2;
            $secondMonument.style.left = `${leftPositionOfSecondStella}px`;
        } else if ($firstMonument && !firstMonumentIsDouble) {
            const monumentWidthOnStand =
                standWidthOnConstructor * firstMonumentWidthProportion;
            const monumentHeightOnStand =
                monumentWidthOnStand * firstMonumentHeightProportion;
            $firstMonument.style.width = `${monumentWidthOnStand}px`;
            $firstMonument.style.height = `${monumentHeightOnStand}px`;
            $firstMonument.style.top = `${-monumentHeightOnStand + 3}px`;
            $firstMonument.style.left = `${
                standWidthOnConstructor / 2 - monumentWidthOnStand / 2
            }px`;
        } else if ($firstMonument && firstMonumentIsDouble) {
            const monumentWidthOnStand =
                standWidthOnConstructor * firstMonumentWidthProportion;
            const monumentHeightOnStand =
                monumentWidthOnStand * firstMonumentHeightProportion;
            $firstMonument.style.minWidth = `${monumentWidthOnStand}px`;
            $firstMonument.style.height = `${monumentHeightOnStand}px`;
            $firstMonument.style.top = `${-monumentHeightOnStand + 3}px`;
            $firstMonument.style.left = `${
                -(monumentWidthOnStand - standWidthOnConstructor) / 2
            }px`;
        }
    };

    pos3Container2 = e.clientX;
    pos4Container2 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
});

standContainer2.addEventListener("touchstart", (e) => {
    e = e || window.event;
    e.preventDefault();

    const { selectedStandIndex } =
        getStandAndMonumentsIndexes($standContainer2Node);

    const seletedStandData = getElementData(selectedStandIndex, "stand");
    const { length: standLength, height: standHeight } = seletedStandData;

    let $firstMonument = null;
    let firstMonumentWidthProportion = null;
    let firstMonumentHeightProportion = null;
    let firstMonumentIsDouble = null;

    let $secondMonument = null;
    let secondMonumentWidthProportion = null;
    let secondMonumentHeightProportion = null;

    const monumentData = handleMonumentsDataForScaling(
        $standContainer2Node,
        standLength
    );

    if (monumentData.length === 1) {
        const {
            monumentNode,
            monumentWidthProportion,
            monumentHeightProportion,
            isDouble,
        } = monumentData[0];

        $firstMonument = monumentNode;
        firstMonumentWidthProportion = monumentWidthProportion;
        firstMonumentHeightProportion = monumentHeightProportion;
        firstMonumentIsDouble = isDouble;
    }

    if (monumentData.length === 2) {
        const {
            monumentNode: firstMonumentNode,
            monumentWidthProportion: fMonumentWidthProportion,
            monumentHeightProportion: fMonumentHeightProportion,
        } = monumentData[1];

        $firstMonument = firstMonumentNode;
        firstMonumentWidthProportion = fMonumentWidthProportion;
        firstMonumentHeightProportion = fMonumentHeightProportion;

        const {
            monumentNode: secondMonumentNode,
            monumentWidthProportion: sMonumentWidthProportion,
            monumentHeightProportion: sMonumentHeightProportion,
        } = monumentData[0];

        $secondMonument = secondMonumentNode;
        secondMonumentWidthProportion = sMonumentWidthProportion;
        secondMonumentHeightProportion = sMonumentHeightProportion;
    }

    const { width: landplotWidth } = handleLandPlotSizes();
    let intViewportWidth = window.innerWidth;

    const closeDragElement = () => {
        document.ontouchend = null;
        document.ontouchmove = null;
    };

    const elementDrag = (e) => {
        e = e || window.event;
        // e.preventDefault();

        pos1Container2 = pos3Container2 - e.touches[0].clientX;
        pos2Container2 = pos4Container2 - e.touches[0].clientY;
        pos3Container2 = e.touches[0].clientX;
        pos4Container2 = e.touches[0].clientY;
        standContainer2.style.top =
            standContainer2.offsetTop - pos2Container2 + "px";
        standContainer2.style.left =
            standContainer2.offsetLeft - pos1Container2 + "px";

        const { standWidthOnConstructor } = handleStandPositionForDrag(
            standLength,
            standHeight,
            landplotWidth,
            standContainer2,
            intViewportWidth
        );

        if ($firstMonument && $secondMonument) {
            const firstMonumentWidthOnStand =
                standWidthOnConstructor * firstMonumentWidthProportion;
            const firstMonumentHeightOnStand =
                firstMonumentWidthOnStand * firstMonumentHeightProportion;
            $firstMonument.style.width = `${firstMonumentWidthOnStand}px`;
            $firstMonument.style.height = `${firstMonumentHeightOnStand}px`;
            $firstMonument.style.top = `${-firstMonumentHeightOnStand + 3}px`;
            const leftPositionOfFirstStella =
                (standWidthOnConstructor / 2 - firstMonumentWidthOnStand) / 2;
            $firstMonument.style.left = `${leftPositionOfFirstStella}px`;

            const secondMonumentWidthOnStand =
                standWidthOnConstructor * secondMonumentWidthProportion;
            const secondMonumentHeightOnStand =
                secondMonumentWidthOnStand * secondMonumentHeightProportion;
            $secondMonument.style.width = `${secondMonumentWidthOnStand}px`;
            $secondMonument.style.height = `${secondMonumentHeightOnStand}px`;
            $secondMonument.style.top = `${-secondMonumentHeightOnStand + 3}px`;
            const leftPositionOfSecondStella =
                leftPositionOfFirstStella * 2 +
                firstMonumentWidthOnStand +
                (standWidthOnConstructor / 2 - secondMonumentWidthOnStand) / 2;
            $secondMonument.style.left = `${leftPositionOfSecondStella}px`;
        } else if ($firstMonument && !firstMonumentIsDouble) {
            const monumentWidthOnStand =
                standWidthOnConstructor * firstMonumentWidthProportion;
            const monumentHeightOnStand =
                monumentWidthOnStand * firstMonumentHeightProportion;
            $firstMonument.style.width = `${monumentWidthOnStand}px`;
            $firstMonument.style.height = `${monumentHeightOnStand}px`;
            $firstMonument.style.top = `${-monumentHeightOnStand + 3}px`;
            $firstMonument.style.left = `${
                standWidthOnConstructor / 2 - monumentWidthOnStand / 2
            }px`;
        } else if ($firstMonument && firstMonumentIsDouble) {
            const monumentWidthOnStand =
                standWidthOnConstructor * firstMonumentWidthProportion;
            const monumentHeightOnStand =
                monumentWidthOnStand * firstMonumentHeightProportion;
            $firstMonument.style.minWidth = `${monumentWidthOnStand}px`;
            $firstMonument.style.height = `${monumentHeightOnStand}px`;
            $firstMonument.style.top = `${-monumentHeightOnStand + 3}px`;
            $firstMonument.style.left = `${
                -(monumentWidthOnStand - standWidthOnConstructor) / 2
            }px`;
        }
    };

    pos3Container2 = e.touches[0].clientX;
    pos4Container2 = e.touches[0].clientY;
    document.ontouchend = closeDragElement;
    document.ontouchmove = elementDrag;
});

/**
 * Вибір мови
 * Handler of language select
 * Выбор языка
 */
let isHiddenLanguageList = true;

languageListNode[0].addEventListener("click", (e) => {
    e.stopPropagation();

    let userClick = e.target;
    const languageList = createArrayFromNode(languageListNode);

    if (
        (isHiddenLanguageList && languageList.indexOf(userClick) === 0) ||
        (isHiddenLanguageList && languageList.indexOf(userClick) === 1) ||
        (isHiddenLanguageList && languageList.indexOf(userClick) === 2)
    ) {
        languageListNode[0].classList.add("active");
        isHiddenLanguageList = false;

        for (let i = 0; i < languageList.length; i++) {
            languageList[i].classList.add("active");
        }
    } else if (!isHiddenLanguageList && languageList.indexOf(userClick) === 0) {
        languageList[1].classList.remove("active");
        languageList[2].classList.remove("active");
        languageListNode[0].classList.remove("active");

        isHiddenLanguageList = true;
        isUaLanguage = true;
        isRuLanguage = false;
        isEngLanguage = false;
        setLanguage(document, "ua");
        startHelper();
    } else if (!isHiddenLanguageList && languageList.indexOf(userClick) === 1) {
        languageList[0].classList.remove("active");
        languageList[2].classList.remove("active");
        languageListNode[0].classList.remove("active");

        isHiddenLanguageList = true;
        isUaLanguage = false;
        isRuLanguage = true;
        isEngLanguage = false;
        setLanguage(document, "ru");
        startHelper();
    } else if (!isHiddenLanguageList && languageList.indexOf(userClick) === 2) {
        languageList[0].classList.remove("active");
        languageList[1].classList.remove("active");
        languageListNode[0].classList.remove("active");

        isHiddenLanguageList = true;
        isUaLanguage = false;
        isRuLanguage = false;
        isEngLanguage = true;
        setLanguage(document, "eng");
        startHelper();
    } else {
        languageListNode[0].classList.remove("active");
    }
});

/**
 * Блок для роботи з вкладками елементів конструктора (показати / приховати)
 * Handle constructor's Nav Tabs (show / hide)
 * Блок для работы с вкладками элементов конструктора (показать / скрыть)
 */

// Спочатку (при першому завантаженні сторінки) показуємо елементи першої (активної) вкладки
const firstTabElements = createCardNode(0, priceList);
let viewedTabsIndexes = [0];

if (firstTabElements && viewedTabsIndexes.length === 1) {
    firstTabElements.forEach((el) => {
        const firstTabNode = elementsNavTabsValues[0].children[0];
        firstTabNode.insertAdjacentHTML("afterbegin", el);
    });
}

elementsNavTabs[0].addEventListener("click", (e) => {
    e.stopPropagation();

    let userClick = e.target;
    const navTabs = createArrayFromNode(elementsNavTabs);
    let currentActiveTab = 0;
    let selectedNavTabNumber = navTabs.indexOf(userClick.parentNode);
    const navTabsValues = createArrayFromNode(elementsNavTabsValues);

    for (let i = 0; i < navTabs.length; i++) {
        if (navTabs[i].classList.contains("active")) {
            currentActiveTab = navTabs.indexOf(navTabs[i]);
        }
    }

    if (
        selectedNavTabNumber !== -1 &&
        selectedNavTabNumber !== currentActiveTab
    ) {
        navTabs[currentActiveTab].classList.remove("active");
        navTabsValues[currentActiveTab].classList.remove("active");

        navTabs[selectedNavTabNumber].classList.add("active");
        navTabsValues[selectedNavTabNumber].classList.add("active");

        if (!viewedTabsIndexes.includes(selectedNavTabNumber)) {
            viewedTabsIndexes.push(selectedNavTabNumber);
            const tabValues = createCardNode(selectedNavTabNumber, priceList);

            tabValues &&
                tabValues.forEach((el) => {
                    const data =
                        elementsNavTabsValues[0].children[selectedNavTabNumber];
                    data.insertAdjacentHTML("afterbegin", el);
                });

            isUaLanguage && setLanguage(document, "ua");
            isRuLanguage && setLanguage(document, "ru");
            isEngLanguage && setLanguage(document, "eng");
        }
    }
});

/**
 * Показати/приховати поля вводу зміни розмірів ділянки
 * Handle show/hide node which changes land plot sizes
 * Показать/скрыть поля ввода смены размеров участка
 */
let isVisibleEditPlotSizes = false;

const handleChangeLandPlotSizes = () => {
    if (!isVisibleEditPlotSizes) {
        arrowsContainerNode[0].children[0].classList.remove("active");
        arrowsContainerNode[0].children[1].classList.add("active");
        editPlotSizesNode[0].classList.add("active");
        isVisibleEditPlotSizes = true;
    } else {
        arrowsContainerNode[0].children[1].classList.remove("active");
        arrowsContainerNode[0].children[0].classList.add("active");
        editPlotSizesNode[0].classList.remove("active");
        isVisibleEditPlotSizes = false;
    }
};

/**
 * Валідація данних інпутів зміни земельної ділянки
 * тільки числа, максимум 4 знаки, не менше базових габаритів
 * Validation data from inputs edit land plot
 * only numbers, max. 4 chars, but not less than the basic dimensions
 * Валидация данных с инпутов изменения земельного участка
 * только числа, максимум 4 знака, не менее базовых габаритов
 */
const validateEditLandPlotInputs = () => {
    let isValid = false;
    let isNewLandPlotWidth = false;
    let isNewLandPlotLength = false;
    let newLandPlotWidth = null;
    let newLandPlotLength = null;

    newLandPlotWidth = plotWidthInput[0].value.replace(/\D/g, "");
    newLandPlotLength = plotLengthInput[0].value.replace(/\D/g, "");

    if (
        newLandPlotWidth.length > 4 ||
        newLandPlotWidth === "" ||
        newLandPlotWidth < 140
    ) {
        isNewLandPlotWidth = false;
        plotWidthInput[0].classList.add("error");
    } else {
        isNewLandPlotWidth = true;
        plotWidthInput[0].classList.remove("error");
    }

    if (
        newLandPlotLength.length > 4 ||
        newLandPlotLength === "" ||
        newLandPlotLength < 220
    ) {
        isNewLandPlotLength = false;
        plotLengthInput[0].classList.add("error");
    } else {
        isNewLandPlotLength = true;
        plotLengthInput[0].classList.remove("error");
    }

    isNewLandPlotWidth && isNewLandPlotLength
        ? (isValid = true)
        : (isValid = false);

    return { isValid, newLandPlotWidth, newLandPlotLength };
};

/**
 * Функція застосування валідних даних (нові розміри земельної ділянки) в конструктор
 * Submit valid data (new land plot sizes) to constructor
 * Функция применения валидных данных (новые размеры земельного участка) в конструкторе
 */
const handleSubmitLandPlotInputsData = () => {
    const { isValid, newLandPlotLength, newLandPlotWidth } =
        validateEditLandPlotInputs();

    if (isValid) {
        landPlotWidth[0].innerText = newLandPlotWidth;
        landPlotLength[0].innerText = newLandPlotLength;
        calculate();
        plotWidthInput[0].value = "";
        plotLengthInput[0].value = "";
        editPlotSizesNode[0].classList.remove("active");

        // Отримати вже вибрані елементи в конструкторі
        // знайти елементи, котрі залежать від периметру та площі
        let isCurbsSelected = false;
        let curbIndex = null;
        let isSocleSeletced = false;
        let socleIndex = null;
        let isTileSelected = false;
        let tileIndex = null;
        const landElementsChildren = createArrayFromNode($landElements);

        for (let i = 0; i < landElementsChildren.length; i++) {
            if (landElementsChildren[i].dataset.category === "curbs") {
                isCurbsSelected = true;
                curbIndex = +landElementsChildren[i].dataset.itemIndex;
            } else if (landElementsChildren[i].dataset.category === "socle") {
                isSocleSeletced = true;
                socleIndex = +landElementsChildren[i].dataset.itemIndex;
            } else if (landElementsChildren[i].dataset.category === "beauty") {
                isTileSelected = true;
                tileIndex = +landElementsChildren[i].dataset.itemIndex;
            }
        }

        // Вибалити старі дані з зони калькулятора і масиву selectedItems
        let itemsToRemove = getItemsToRemove(
            landElementsChildren,
            $landElements,
            {
                isStand: false,
                isMonument: false,
                isCurb: isCurbsSelected,
                isSocle: isSocleSeletced,
                isBeauty: isTileSelected,
                mustRemoveElementOnConstructor: false,
            }
        );

        handleRemoveCalculatorNode(itemsToRemove);
        handleRemoveItemsFromSelectedItems(itemsToRemove);

        // Замінити значення в калькуляторі де це потрібно
        if (isCurbsSelected) {
            let selectedBorderElement = getElementData(curbIndex, "curbs");
            const { siteNameUa, siteNameRu, siteNameEng, category, price } =
                selectedBorderElement;

            const { totalCurbsCost } = handleCurbsPcsAndCost(curbIndex, price);
            selectedBorderElement["totalElementCost"] = totalCurbsCost;
            selectedItems.push(selectedBorderElement);

            const curbNodeToCalculator = createCalculatorDataNode(
                category,
                curbIndex,
                siteNameUa,
                siteNameRu,
                siteNameEng,
                price
            );

            $totalCostNode[0].insertAdjacentHTML(
                "beforebegin",
                curbNodeToCalculator
            );
        }

        if (isSocleSeletced) {
            let selectedSocleElement = getElementData(socleIndex, "socle");
            const { siteNameUa, siteNameRu, siteNameEng, category, price } =
                selectedSocleElement;

            const totalSocleCost = handleSocleCost(price);
            selectedSocleElement["totalElementCost"] = totalSocleCost;
            selectedItems.push(selectedSocleElement);

            const socleNodeToCalculator = createCalculatorDataNode(
                category,
                socleIndex,
                siteNameUa,
                siteNameRu,
                siteNameEng,
                price
            );

            $totalCostNode[0].insertAdjacentHTML(
                "beforebegin",
                socleNodeToCalculator
            );
        }

        if (isTileSelected) {
            let selectedBeautyElementData = getElementData(tileIndex, "beauty");
            const { siteNameUa, siteNameRu, siteNameEng, category, price } =
                selectedBeautyElementData;

            const totalBeutyElementCost = handleSocleCost(price);
            selectedBeautyElementData["totalElementCost"] =
                totalBeutyElementCost;
            selectedItems.push(selectedBeautyElementData);

            const beautyNodeToCalculator = createCalculatorDataNode(
                category,
                tileIndex,
                siteNameUa,
                siteNameRu,
                siteNameEng,
                price
            );

            $totalCostNode[0].insertAdjacentHTML(
                "beforebegin",
                beautyNodeToCalculator
            );
        }

        calculate();
    } else {
        handleInfoAndErrorMessages(plotInputErrorMessage, {
            isUaLanguage,
            isRuLanguage,
            isEngLanguage,
        });
    }
};

/**
 * Функція розраховує кількість Бордюр і їх загальну вартість.
 * The function calculates the number of curbs and their total cost.
 * Функция рассчитывает количество Бордюр и их общую стоимость.
 * @param {Number} selectedItemIndex
 * @param {Number} price
 * @returns Object contains "totalCurbsPcs" and "totalCurbsCost"
 */
const handleCurbsPcsAndCost = (selectedItemIndex, price) => {
    let totalCurbsPcs = null;
    let totalCurbsCost = null;

    const currentPerimeter = landPlotPerimeterNode[0].innerText;
    const { length } = getElementData(selectedItemIndex, "curbs");
    totalCurbsPcs = Math.ceil((currentPerimeter * 100) / length);
    totalCurbsCost = totalCurbsPcs * price;

    return { totalCurbsPcs, totalCurbsCost };
};

/**
 * Функція розраховує загальну вартість цоколю
 * The function calculates the total cost of the socle
 * Функция рассчитывает общую стоимость цоколя
 * @param {Number} price
 * @returns Numder = socle total cost
 */
const handleSocleCost = (price) => {
    let totalSocleCost = null;

    const currentPerimeter = $landPlotAreaNode[0].innerText;
    totalSocleCost = currentPerimeter * price;

    return totalSocleCost;
};

/**
 * Функція створює HTML вузол в вигляді рядка
 * The function creates an HTML node as a string
 * Функция создает HTML узел в виде строки
 * @param {String} category
 * @param {Number} selectedItemIndex
 * @param {String} siteNameUa
 * @param {String} siteNameRu
 * @param {String} siteNameEng
 * @param {Number} price
 * @returns String contains all needs HTML tags
 */
const createCalculatorDataNode = (
    category,
    selectedItemIndex,
    siteNameUa,
    siteNameRu,
    siteNameEng,
    price,
    id
) => {
    let result = null;

    if (category === "curbs") {
        const { totalCurbsPcs, totalCurbsCost } = handleCurbsPcsAndCost(
            selectedItemIndex,
            price
        );

        result = `<div class="calculator__data-container" 
                        data-category="${category}" 
                        data-item-index="${selectedItemIndex}">
                    <p class="calculator__data-title">
                        <span data-lang="ua" class="active">Бордюр ${siteNameUa}</span>
                        <span data-lang="ru">Бордюр ${siteNameRu}</span>
                        <span data-lang="eng">Curb ${siteNameEng}</span>
                    </p>
                    <p class="calculator__data-value">
                        <span data-lang="ua" class="active">${totalCurbsCost} грн.</span>
                        <span data-lang="ru">${totalCurbsCost} грн.</span>
                        <span data-lang="eng">${totalCurbsCost} UAH</span>
                    </p>
                 </div>`;
    } else if (category === "socle" || category === "beauty") {
        const totalCost = handleSocleCost(price);
        let flag = id === 0 || id === 1;

        result = `<div class="calculator__data-container" 
                        data-category="${category}" 
                        data-item-index="${selectedItemIndex}">
                    <p class="calculator__data-title">
                        <span data-lang="ua" class="active">${siteNameUa}</span>
                        <span data-lang="ru">${siteNameRu}</span>
                        <span data-lang="eng">${siteNameEng}</span>
                    </p>
                    <p class="calculator__data-value">
                        <span data-lang="ua" class="active">${
                            flag ? totalCost : price
                        } грн.</span>
                        <span data-lang="ru">${
                            flag ? totalCost : price
                        } грн.</span>
                        <span data-lang="eng">${
                            flag ? totalCost : price
                        } UAH</span>
                    </p>
                 </div>`;
    } else {
        result = `<div class="calculator__data-container" 
                        data-category="${category}" 
                        data-item-index="${selectedItemIndex}">
                    <p class="calculator__data-title">
                        <span data-lang="ua" class="active">${siteNameUa}</span>
                        <span data-lang="ru">${siteNameRu}</span>
                        <span data-lang="eng">${siteNameEng}</span>
                    </p>
                    <p class="calculator__data-value">
                        <span data-lang="ua" class="active">${price} грн.</span>
                        <span data-lang="ru">${price} грн.</span>
                        <span data-lang="eng">${price} UAH</span>
                    </p>
                 </div>`;
    }

    return result;
};

const getElementsInfoFromBothContainers = (props) => {
    const { HTMLnode1, HTMLnode2 } = props;

    let firstContainerChildren = null;
    let isFirstStand = false;
    let firstStandIndex = null;
    let isFirstFlowerGarden = false;
    let firstFlowerGardenIndex = null;
    let isMonumentInFirstContainer = false;
    let sameStelesCountInFirstContainer = null;
    let firstContainerMonuments = [];

    let secondContainerChildren = null;
    let isSecondStand = false;
    let secondStandIndex = null;
    let isSecondFlowerGarden = false;
    let secondFlowerGardenIndex = null;
    let isMonumentInSecondContainer = false;
    let sameStelesCountInSecondContainer = null;
    let secondContainerMonuments = [];

    if (HTMLnode1) {
        firstContainerChildren = createArrayFromNode(HTMLnode1);

        for (let i = 0; i < firstContainerChildren.length; i++) {
            if (firstContainerChildren[i].dataset.category === "stand") {
                isFirstStand = true;
                firstStandIndex = +firstContainerChildren[i].dataset.itemIndex;
            } else if (
                firstContainerChildren[i].dataset.category === "monuments"
            ) {
                firstContainerMonuments.push(
                    +firstContainerChildren[i].dataset.itemIndex
                );
                isMonumentInFirstContainer = true;
            } else if (
                firstContainerChildren[i].dataset.category === "flowerGarden"
            ) {
                isFirstFlowerGarden = true;
                firstFlowerGardenIndex =
                    +firstContainerChildren[i].dataset.itemIndex;
            }
        }

        const [firstMonumentIndex, secondMonumentIndex] =
            firstContainerMonuments;
        firstMonumentIndex === secondMonumentIndex
            ? (sameStelesCountInFirstContainer = 2)
            : (sameStelesCountInFirstContainer = 1);
    }

    if (HTMLnode2) {
        secondContainerChildren = createArrayFromNode(HTMLnode2);

        for (let i = 0; i < secondContainerChildren.length; i++) {
            if (secondContainerChildren[i].dataset.category === "stand") {
                isSecondStand = true;
                secondStandIndex =
                    +secondContainerChildren[i].dataset.itemIndex;
            } else if (
                secondContainerChildren[i].dataset.category === "monuments"
            ) {
                secondContainerMonuments.push(
                    +secondContainerChildren[i].dataset.itemIndex
                );
                isMonumentInSecondContainer = true;
            } else if (
                secondContainerChildren[i].dataset.category === "flowerGarden"
            ) {
                isSecondFlowerGarden = true;
                secondFlowerGardenIndex =
                    +secondContainerChildren[i].dataset.itemIndex;
            }
        }

        const [firstMonumentIndex, secondMonumentIndex] =
            secondContainerMonuments;
        firstMonumentIndex === secondMonumentIndex
            ? (sameStelesCountInSecondContainer = 2)
            : (sameStelesCountInSecondContainer = 1);
    }

    return {
        firstContainerChildren,
        isFirstStand,
        firstStandIndex,
        isFirstFlowerGarden,
        firstFlowerGardenIndex,
        isMonumentInFirstContainer,
        sameStelesCountInFirstContainer,
        firstContainerMonuments,
        secondContainerChildren,
        isSecondStand,
        secondStandIndex,
        isSecondFlowerGarden,
        secondFlowerGardenIndex,
        isMonumentInSecondContainer,
        sameStelesCountInSecondContainer,
        secondContainerMonuments,
    };
};

/**
 * Обробники блоку Фільтр
 * Handlers for Filter section
 * Обработчики зоны Фильтр
 */
filterNode[0].addEventListener("click", (e) => {
    e.stopPropagation();

    let userClick = e.target;
    let selectedItem = null;
    const filterElements = createArrayFromNode(filterNode);
    selectedItem = filterElements.indexOf(userClick.parentNode);

    const {
        firstContainerChildren,
        isFirstStand: isStandInFirstContainer,
        firstStandIndex: standIdInFirstContainer,
        isFirstFlowerGarden: isFlowerGardenInFirstContainer,
        firstFlowerGardenIndex: flowerGardenIndexInFirstContainer,
        isMonumentInFirstContainer,
        sameStelesCountInFirstContainer,
        firstContainerMonuments: monumentsInFirstContainer,
        secondContainerChildren,
        isSecondStand: isStandInSecondContainer,
        secondStandIndex: standIdInSecondContainer,
        isSecondFlowerGarden: isFlowerGardenInSecondContainer,
        secondFlowerGardenIndex: flowerGardenIndexInSecondContainer,
        isMonumentInSecondContainer,
        sameStelesCountInSecondContainer,
        secondContainerMonuments: monumentsInSecondContainer,
    } = getElementsInfoFromBothContainers({
        HTMLnode1: $standContainerNode,
        HTMLnode2: $standContainer2Node,
    });

    const monumentsElements = createArrayFromNode(elementsValuesMonumentsNode);

    if (
        selectedItem !== -1 &&
        filterElements[selectedItem].dataset.category === "stand"
    ) {
        const elementsStands = createArrayFromNode($elementsStandsNode);
        const elementsFlowerGardens = createArrayFromNode(
            $elementsValuesFlowerGardensNode
        );

        if (isStandInFirstContainer && !isStandInSecondContainer) {
            elementsStands[
                +userClick.parentNode.dataset.itemIndex
            ].classList.remove("active");

            // Зняти вибір стелли
            for (let i = 0; i < monumentsElements.length; i++) {
                if (monumentsElements[i].classList.contains("active")) {
                    for (let j = 0; j < monumentsInFirstContainer.length; j++) {
                        monumentsInFirstContainer[j] === i &&
                            monumentsElements[i].classList.remove("active");
                    }
                }
            }

            //Знімаємо вибір квітника, якщо він вибраний
            isFlowerGardenInFirstContainer &&
                elementsFlowerGardens[
                    flowerGardenIndexInFirstContainer
                ].classList.contains("active") &&
                elementsFlowerGardens[
                    flowerGardenIndexInFirstContainer
                ].classList.remove("active");

            // Отримуємо всі елементи, котрі потрібно видалити
            let itemsToRemove = getItemsToRemove(
                firstContainerChildren,
                $standContainerNode,
                {
                    isStand: true,
                    isMonument: true,
                    isFlowerGarden: isFlowerGardenInFirstContainer,
                    mustRemoveElementOnConstructor: true,
                }
            );

            handleRemoveFilterNode(itemsToRemove);
            handleRemoveCalculatorNode(itemsToRemove);
            handleRemoveItemsFromSelectedItems(itemsToRemove);
            calculate();
        } else if (!isStandInFirstContainer && isStandInSecondContainer) {
            elementsStands[
                +userClick.parentNode.dataset.itemIndex
            ].classList.remove("active");

            for (let i = 0; i < monumentsElements.length; i++) {
                if (monumentsElements[i].classList.contains("active")) {
                    for (
                        let j = 0;
                        j < monumentsInSecondContainer.length;
                        j++
                    ) {
                        monumentsInSecondContainer[j] === i &&
                            monumentsElements[i].classList.remove("active");
                    }
                }
            }

            //Знімаємо вибір квітника, якщо він вибраний
            isFlowerGardenInSecondContainer &&
                elementsFlowerGardens[
                    flowerGardenIndexInSecondContainer
                ].classList.contains("active") &&
                elementsFlowerGardens[
                    flowerGardenIndexInSecondContainer
                ].classList.remove("active");

            // Отримуємо всі елементи, котрі потрібно видалити
            let itemsToRemove = getItemsToRemove(
                secondContainerChildren,
                $standContainer2Node,
                {
                    isStand: true,
                    isMonument: true,
                    isFlowerGarden: isFlowerGardenInSecondContainer,
                    mustRemoveElementOnConstructor: true,
                }
            );

            handleRemoveFilterNode(itemsToRemove);
            handleRemoveCalculatorNode(itemsToRemove);
            handleRemoveItemsFromSelectedItems(itemsToRemove);
            calculate();
        } else if (isStandInFirstContainer && isStandInSecondContainer) {
            if (standIdInFirstContainer !== standIdInSecondContainer) {
                elementsStands[
                    +userClick.parentNode.dataset.itemIndex
                ].classList.remove("active");

                if (
                    +userClick.parentNode.dataset.itemIndex ===
                    standIdInFirstContainer
                ) {
                    // Отримуємо всі елементи, котрі потрібно видалити
                    let itemsToRemove = getItemsToRemove(
                        firstContainerChildren,
                        $standContainerNode,
                        {
                            isStand: true,
                            isMonument: true,
                            isFlowerGarden: isFlowerGardenInFirstContainer,
                            mustRemoveElementOnConstructor: true,
                        }
                    );

                    for (let i = 0; i < monumentsElements.length; i++) {
                        if (monumentsElements[i].classList.contains("active")) {
                            for (
                                let j = 0;
                                j < monumentsInFirstContainer.length;
                                j++
                            ) {
                                monumentsInFirstContainer[j] === i &&
                                    monumentsElements[i].classList.remove(
                                        "active"
                                    );
                            }
                        }
                    }

                    if (
                        flowerGardenIndexInFirstContainer !==
                        flowerGardenIndexInSecondContainer
                    ) {
                        elementsFlowerGardens[
                            flowerGardenIndexInFirstContainer
                        ].classList.contains("active") &&
                            elementsFlowerGardens[
                                flowerGardenIndexInFirstContainer
                            ].classList.remove("active");
                    }

                    handleRemoveFilterNode(itemsToRemove);
                    handleRemoveCalculatorNode(itemsToRemove);
                    handleRemoveItemsFromSelectedItems(itemsToRemove);
                    calculate();
                } else if (
                    +userClick.parentNode.dataset.itemIndex ===
                    standIdInSecondContainer
                ) {
                    // Отримуємо всі елементи, котрі потрібно видалити
                    let itemsToRemove = getItemsToRemove(
                        secondContainerChildren,
                        $standContainer2Node,
                        {
                            isStand: true,
                            isMonument: true,
                            isFlowerGarden: isFlowerGardenInSecondContainer,
                            mustRemoveElementOnConstructor: true,
                        }
                    );

                    for (let i = 0; i < monumentsElements.length; i++) {
                        if (monumentsElements[i].classList.contains("active")) {
                            for (
                                let j = 0;
                                j < monumentsInSecondContainer.length;
                                j++
                            ) {
                                monumentsInSecondContainer[j] === i &&
                                    monumentsElements[i].classList.remove(
                                        "active"
                                    );
                            }
                        }
                    }

                    if (
                        flowerGardenIndexInFirstContainer !==
                        flowerGardenIndexInSecondContainer
                    ) {
                        elementsFlowerGardens[
                            flowerGardenIndexInSecondContainer
                        ].classList.contains("active") &&
                            elementsFlowerGardens[
                                flowerGardenIndexInSecondContainer
                            ].classList.remove("active");
                    }

                    handleRemoveFilterNode(itemsToRemove);
                    handleRemoveCalculatorNode(itemsToRemove);
                    handleRemoveItemsFromSelectedItems(itemsToRemove);
                    calculate();
                }
            } else if (standIdInFirstContainer === standIdInSecondContainer) {
                if (
                    flowerGardenIndexInFirstContainer !==
                    flowerGardenIndexInSecondContainer
                ) {
                    isFlowerGardenInFirstContainer &&
                        elementsFlowerGardens[
                            flowerGardenIndexInFirstContainer
                        ].classList.contains("active") &&
                        elementsFlowerGardens[
                            flowerGardenIndexInFirstContainer
                        ].classList.remove("active");
                }

                // Отримуємо всі елементи, котрі потрібно видалити з першого контейнера
                let itemsToRemove = getItemsToRemove(
                    firstContainerChildren,
                    $standContainerNode,
                    {
                        isStand: true,
                        isMonument: true,
                        isFlowerGarden: isFlowerGardenInFirstContainer,
                        mustRemoveElementOnConstructor: true,
                    }
                );

                for (let i = 0; i < monumentsElements.length; i++) {
                    if (monumentsElements[i].classList.contains("active")) {
                        for (
                            let j = 0;
                            j < monumentsInFirstContainer.length;
                            j++
                        ) {
                            monumentsInFirstContainer[j] === i &&
                                monumentsElements[i].classList.remove("active");
                        }
                    }
                }

                handleRemoveFilterNode(itemsToRemove);
                handleRemoveCalculatorNode(itemsToRemove);
                handleRemoveItemsFromSelectedItems(itemsToRemove);
                calculate();
            }
        }
    } else if (
        selectedItem !== -1 &&
        filterElements[selectedItem].dataset.category === "monuments"
    ) {
        if (
            isMonumentInFirstContainer &&
            sameStelesCountInFirstContainer === 1 &&
            !isMonumentInSecondContainer
        ) {
            monumentsElements[
                +userClick.parentNode.dataset.itemIndex
            ].classList.remove("active");

            let itemsToRemove = getItemsToRemove(
                firstContainerChildren,
                $standContainerNode,
                {
                    isStand: false,
                    isMonument: true,
                    mustRemoveElementOnConstructor: true,
                },
                +userClick.parentNode.dataset.itemIndex
            );

            // Перевірити наявність стел на тумбі
            // щоб відцентрувати стеллу, якщо вона ще тут є
            const { firstContainerMonuments, firstStandIndex: standIndex } =
                getElementsInfoFromBothContainers({
                    HTMLnode1: $standContainerNode,
                });
            const [monumentIndexToKeep] = firstContainerMonuments;

            const updatedFirstContainerChildren =
                createArrayFromNode($standContainerNode);

            for (let i = 0; i < updatedFirstContainerChildren.length; i++) {
                updatedFirstContainerChildren[i].dataset.category ===
                    "monuments" &&
                    +updatedFirstContainerChildren[i].dataset.itemIndex ===
                        monumentIndexToKeep &&
                    $standContainerNode[0].removeChild(
                        updatedFirstContainerChildren[i]
                    );
            }

            if (monumentIndexToKeep || monumentIndexToKeep === 0) {
                const { length: standLengthByPriceInFirstContainer } =
                    getElementData(standIndex, "stand");

                const monumentDataForRender = handleSizesForMonument(
                    $standContainerNode,
                    false,
                    monumentIndexToKeep,
                    standLengthByPriceInFirstContainer
                );

                renderMonumentOnConstructor(
                    monumentDataForRender,
                    monumentIndexToKeep,
                    false, // Явно не подвійна стелла
                    $standContainerNode
                );
            }

            handleRemoveFilterNode(itemsToRemove);
            handleRemoveCalculatorNode(itemsToRemove);
            handleRemoveItemsFromSelectedItems(itemsToRemove);

            calculate();
        } else if (
            isMonumentInFirstContainer &&
            sameStelesCountInFirstContainer === 2 &&
            !isMonumentInSecondContainer
        ) {
            let itemsToRemove = getItemsToRemove(
                firstContainerChildren,
                $standContainerNode,
                {
                    isStand: false,
                    isMonument: true,
                    mustRemoveElementOnConstructor: true,
                },
                +userClick.parentNode.dataset.itemIndex
            );

            // Перевірити наявність стел на тумбі
            // щоб відцентрувати стеллу, якщо вона ще тут є
            const { firstContainerMonuments, firstStandIndex: standIndex } =
                getElementsInfoFromBothContainers({
                    HTMLnode1: $standContainerNode,
                });
            const [monumentIndexToKeep] = firstContainerMonuments;

            const updatedFirstContainerChildren =
                createArrayFromNode($standContainerNode);

            for (let i = 0; i < updatedFirstContainerChildren.length; i++) {
                updatedFirstContainerChildren[i].dataset.category ===
                    "monuments" &&
                    +updatedFirstContainerChildren[i].dataset.itemIndex ===
                        monumentIndexToKeep &&
                    $standContainerNode[0].removeChild(
                        updatedFirstContainerChildren[i]
                    );
            }

            if (monumentIndexToKeep || monumentIndexToKeep === 0) {
                const { length: standLengthByPriceInFirstContainer } =
                    getElementData(standIndex, "stand");

                const monumentDataForRender = handleSizesForMonument(
                    $standContainerNode,
                    false,
                    monumentIndexToKeep,
                    standLengthByPriceInFirstContainer
                );

                renderMonumentOnConstructor(
                    monumentDataForRender,
                    monumentIndexToKeep,
                    false, // явно не подвійна стелла
                    $standContainerNode
                );
            }

            handleRemoveFilterNode(itemsToRemove);
            handleRemoveCalculatorNode(itemsToRemove);
            handleRemoveItemsFromSelectedItems(itemsToRemove);
            calculate();
        } else if (
            !isMonumentInFirstContainer &&
            sameStelesCountInSecondContainer === 1 &&
            isMonumentInSecondContainer
        ) {
            monumentsElements[
                +userClick.parentNode.dataset.itemIndex
            ].classList.remove("active");

            let itemsToRemove = getItemsToRemove(
                secondContainerChildren,
                $standContainer2Node,
                {
                    isStand: false,
                    isMonument: true,
                    mustRemoveElementOnConstructor: true,
                },
                +userClick.parentNode.dataset.itemIndex
            );

            // Перевірити наявність стел на тумбі
            // щоб відцентрувати стеллу, якщо вона ще тут є
            const { secondContainerMonuments, secondStandIndex: standIndex } =
                getElementsInfoFromBothContainers({
                    HTMLnode2: $standContainer2Node,
                });
            const [monumentIndexToKeep] = secondContainerMonuments;

            const updatedSecondContainerChildren =
                createArrayFromNode($standContainer2Node);

            for (let i = 0; i < updatedSecondContainerChildren.length; i++) {
                updatedSecondContainerChildren[i].dataset.category ===
                    "monuments" &&
                    +updatedSecondContainerChildren[i].dataset.itemIndex ===
                        monumentIndexToKeep &&
                    $standContainer2Node[0].removeChild(
                        updatedSecondContainerChildren[i]
                    );
            }

            if (monumentIndexToKeep || monumentIndexToKeep === 0) {
                const { length: standLengthByPriceInFirstContainer } =
                    getElementData(standIndex, "stand");

                const monumentDataForRender = handleSizesForMonument(
                    $standContainer2Node,
                    false,
                    monumentIndexToKeep,
                    standLengthByPriceInFirstContainer
                );

                renderMonumentOnConstructor(
                    monumentDataForRender,
                    monumentIndexToKeep,
                    false, // явно не подвійна стелла
                    $standContainer2Node
                );
            }

            handleRemoveFilterNode(itemsToRemove);
            handleRemoveCalculatorNode(itemsToRemove);
            handleRemoveItemsFromSelectedItems(itemsToRemove);

            calculate();
        } else if (
            !isMonumentInFirstContainer &&
            sameStelesCountInSecondContainer === 2 &&
            isMonumentInSecondContainer
        ) {
            let itemsToRemove = getItemsToRemove(
                secondContainerChildren,
                $standContainer2Node,
                {
                    isStand: false,
                    isMonument: true,
                    mustRemoveElementOnConstructor: true,
                },
                +userClick.parentNode.dataset.itemIndex
            );

            // Перевірити наявність стел на тумбі
            // щоб відцентрувати стеллу, якщо вона ще тут є
            const { secondContainerMonuments, secondStandIndex: standIndex } =
                getElementsInfoFromBothContainers({
                    HTMLnode2: $standContainer2Node,
                });
            const [monumentIndexToKeep] = secondContainerMonuments;

            const updatedSecondContainerChildren =
                createArrayFromNode($standContainer2Node);

            for (let i = 0; i < updatedSecondContainerChildren.length; i++) {
                updatedSecondContainerChildren[i].dataset.category ===
                    "monuments" &&
                    +updatedSecondContainerChildren[i].dataset.itemIndex ===
                        monumentIndexToKeep &&
                    $standContainer2Node[0].removeChild(
                        updatedSecondContainerChildren[i]
                    );
            }

            if (monumentIndexToKeep || monumentIndexToKeep === 0) {
                const { length: standLengthByPriceInFirstContainer } =
                    getElementData(standIndex, "stand");

                const monumentDataForRender = handleSizesForMonument(
                    $standContainer2Node,
                    false,
                    monumentIndexToKeep,
                    standLengthByPriceInFirstContainer
                );

                renderMonumentOnConstructor(
                    monumentDataForRender,
                    monumentIndexToKeep,
                    false, // явно не подвійна стелла
                    $standContainer2Node
                );
            }

            handleRemoveFilterNode(itemsToRemove);
            handleRemoveCalculatorNode(itemsToRemove);
            handleRemoveItemsFromSelectedItems(itemsToRemove);
            calculate();
        } else {
            let itemsToRemove = getItemsToRemove(
                secondContainerChildren,
                $standContainer2Node,
                {
                    isStand: false,
                    isMonument: true,
                    mustRemoveElementOnConstructor: true,
                },
                +userClick.parentNode.dataset.itemIndex
            );

            handleRemoveFilterNode(itemsToRemove);
            handleRemoveCalculatorNode(itemsToRemove);
            handleRemoveItemsFromSelectedItems(itemsToRemove);
            calculate();
        }
    } else if (
        selectedItem !== -1 &&
        filterElements[selectedItem].dataset.category === "curbs"
    ) {
        const elementsBorders = createArrayFromNode(elementsBordersNode);

        for (let i = 0; i < elementsBorders.length; i++) {
            elementsBorders[i].classList.contains("active") &&
                elementsBorders[i].classList.remove("active");
        }

        let isSocleSelected = false;

        for (let i = 0; i < selectedItems.length; i++) {
            const { category } = selectedItems[i];
            category === "socle" && (isSocleSelected = true);
        }

        !isSocleSelected &&
            landPlotNode[0].classList.contains("hide") &&
            landPlotNode[0].classList.remove("hide");

        const landElementsChildren = createArrayFromNode($landElements);
        let itemsToRemove = getItemsToRemove(
            landElementsChildren,
            $landElements,
            {
                isStand: false,
                isMonument: false,
                isCurb: true,
                mustRemoveElementOnConstructor: true,
            }
        );

        handleRemoveFilterNode(itemsToRemove);
        handleRemoveCalculatorNode(itemsToRemove);
        handleRemoveItemsFromSelectedItems(itemsToRemove);
        calculate();
    } else if (
        selectedItem !== -1 &&
        filterElements[selectedItem].dataset.category === "socle"
    ) {
        const elementsSocles = createArrayFromNode(elementsValuesSocleNode);

        for (let i = 0; i < elementsSocles.length; i++) {
            elementsSocles[i].classList.contains("active") &&
                elementsSocles[i].classList.remove("active");
        }

        const elementsBeautification = createArrayFromNode(elementsBeautyNode);

        for (let i = 0; i < elementsBeautification.length; i++) {
            elementsBeautification[i].classList.contains("active") &&
                elementsBeautification[i].classList.remove("active");
        }

        const landElementsChildren = createArrayFromNode($landElements);

        let itemsToRemove = getItemsToRemove(
            landElementsChildren,
            $landElements,
            {
                isStand: false,
                isMonument: false,
                isCurb: false,
                isSocle: true,
                isBeauty: true,
                mustRemoveElementOnConstructor: true,
            }
        );

        let isCurbsSelected = false;

        for (let i = 0; i < selectedItems.length; i++) {
            const { category } = selectedItems[i];
            category === "curbs" && (isCurbsSelected = true);
        }

        !isCurbsSelected &&
            landPlotNode[0].classList.contains("hide") &&
            landPlotNode[0].classList.remove("hide");

        handleRemoveFilterNode(itemsToRemove);
        handleRemoveCalculatorNode(itemsToRemove);
        handleRemoveItemsFromSelectedItems(itemsToRemove);
        calculate();
    } else if (
        selectedItem !== -1 &&
        (filterElements[selectedItem].dataset.category === "beauty" ||
            filterElements[selectedItem].dataset.category === "pup" ||
            filterElements[selectedItem].dataset.category === "rubble")
    ) {
        const elementsBeautification = createArrayFromNode(elementsBeautyNode);
        let itemIndexToRemove = +userClick.parentElement.dataset.itemIndex;
        let itemCategoryToRemove = userClick.parentElement.dataset.category;

        elementsBeautification[itemIndexToRemove].classList.contains(
            "active"
        ) &&
            elementsBeautification[itemIndexToRemove].classList.remove(
                "active"
            );

        const landElementsChildren = createArrayFromNode($landElements);
        if (
            itemCategoryToRemove === "pup" ||
            itemCategoryToRemove === "beauty"
        ) {
            let itemsToRemove = getItemsToRemove(
                landElementsChildren,
                $landElements,
                {
                    isStand: false,
                    isMonument: false,
                    isCurb: false,
                    isSocle: false,
                    isBeauty: true,
                    mustRemoveElementOnConstructor: true,
                }
            );

            handleRemoveFilterNode(itemsToRemove);
            handleRemoveCalculatorNode(itemsToRemove);
            handleRemoveItemsFromSelectedItems(itemsToRemove);
            calculate();
        } else if (itemCategoryToRemove === "rubble") {
            let itemsToRemove = getItemsToRemove(
                landElementsChildren,
                $landElements,
                {
                    isStand: false,
                    isMonument: false,
                    isCurb: false,
                    isSocle: false,
                    isBeauty: false,
                    isRubble: true,
                    mustRemoveElementOnConstructor: true,
                }
            );

            handleRemoveFilterNode(itemsToRemove);
            handleRemoveCalculatorNode(itemsToRemove);
            handleRemoveItemsFromSelectedItems(itemsToRemove);
            calculate();
        }
    } else if (
        selectedItem !== -1 &&
        filterElements[selectedItem].dataset.category === "flowerGarden"
    ) {
        const elementsFlowerGardens = createArrayFromNode(
            $elementsValuesFlowerGardensNode
        );
        let selectedFlowerGarden = +userClick.parentElement.dataset.itemIndex;

        if (
            isFlowerGardenInFirstContainer &&
            !isFlowerGardenInSecondContainer
        ) {
            elementsFlowerGardens[selectedFlowerGarden].classList.contains(
                "active"
            ) &&
                elementsFlowerGardens[selectedFlowerGarden].classList.remove(
                    "active"
                );

            let itemsToRemove = getItemsToRemove(
                firstContainerChildren,
                $standContainerNode,
                {
                    isFlowerGarden: isFlowerGardenInFirstContainer,
                    mustRemoveElementOnConstructor: true,
                }
            );

            handleRemoveFilterNode(itemsToRemove);
            handleRemoveCalculatorNode(itemsToRemove);
            handleRemoveItemsFromSelectedItems(itemsToRemove);
            calculate();
        } else if (
            !isFlowerGardenInFirstContainer &&
            isFlowerGardenInSecondContainer
        ) {
            elementsFlowerGardens[selectedFlowerGarden].classList.contains(
                "active"
            ) &&
                elementsFlowerGardens[selectedFlowerGarden].classList.remove(
                    "active"
                );

            let itemsToRemove = getItemsToRemove(
                secondContainerChildren,
                $standContainer2Node,
                {
                    isFlowerGarden: isFlowerGardenInSecondContainer,
                    mustRemoveElementOnConstructor: true,
                }
            );

            handleRemoveFilterNode(itemsToRemove);
            handleRemoveCalculatorNode(itemsToRemove);
            handleRemoveItemsFromSelectedItems(itemsToRemove);
            calculate();
        } else if (
            isFlowerGardenInFirstContainer &&
            isFlowerGardenInSecondContainer
        ) {
            if (
                selectedFlowerGarden === flowerGardenIndexInFirstContainer &&
                flowerGardenIndexInFirstContainer !==
                    flowerGardenIndexInSecondContainer
            ) {
                elementsFlowerGardens[selectedFlowerGarden].classList.contains(
                    "active"
                ) &&
                    elementsFlowerGardens[
                        selectedFlowerGarden
                    ].classList.remove("active");

                let itemsToRemove = getItemsToRemove(
                    firstContainerChildren,
                    $standContainerNode,
                    {
                        isFlowerGarden: isFlowerGardenInFirstContainer,
                        mustRemoveElementOnConstructor: true,
                    }
                );

                handleRemoveFilterNode(itemsToRemove);
                handleRemoveCalculatorNode(itemsToRemove);
                handleRemoveItemsFromSelectedItems(itemsToRemove);
                calculate();
            } else if (
                selectedFlowerGarden === flowerGardenIndexInSecondContainer &&
                flowerGardenIndexInFirstContainer !==
                    flowerGardenIndexInSecondContainer
            ) {
                elementsFlowerGardens[selectedFlowerGarden].classList.contains(
                    "active"
                ) &&
                    elementsFlowerGardens[
                        selectedFlowerGarden
                    ].classList.remove("active");

                let itemsToRemove = getItemsToRemove(
                    secondContainerChildren,
                    $standContainer2Node,
                    {
                        isFlowerGarden: isFlowerGardenInSecondContainer,
                        mustRemoveElementOnConstructor: true,
                    }
                );

                handleRemoveFilterNode(itemsToRemove);
                handleRemoveCalculatorNode(itemsToRemove);
                handleRemoveItemsFromSelectedItems(itemsToRemove);
                calculate();
            } else if (
                flowerGardenIndexInFirstContainer ===
                flowerGardenIndexInSecondContainer
            ) {
                let itemsToRemove = getItemsToRemove(
                    firstContainerChildren,
                    $standContainerNode,
                    {
                        isFlowerGarden: isFlowerGardenInFirstContainer,
                        mustRemoveElementOnConstructor: true,
                    }
                );

                handleRemoveFilterNode(itemsToRemove);
                handleRemoveCalculatorNode(itemsToRemove);
                handleRemoveItemsFromSelectedItems(itemsToRemove);
                calculate();
            }
        }
    }
});

/**
 *
 * @param {Number} selectedElement index of user click
 * @param {String} categoryToSearch name of category from "priceList" file
 * @returns Object
 */
const getElementData = (selectedElement, categoryToSearch) => {
    let selectedElementData = null;
    let filteredElements = [];

    for (let i = 0; i < priceList.length; i++) {
        for (let key in priceList[i]) {
            if (key === categoryToSearch) {
                filteredElements = priceList[i][key].slice();
            }
        }
    }

    for (let i = 0; i < filteredElements.length; i++) {
        for (let key in filteredElements[i]) {
            const { id } = filteredElements[i];
            id === selectedElement &&
                (selectedElementData = filteredElements[i]);
        }
    }

    return selectedElementData;
};

/**
 * Функція розрахунку габаритів тумби для рендеру в конструкторі.
 * Function of calculation of dimensions of a stand container for rendering in the designer.
 * Функция расчета габаритов тумбы для рендера в конструкторе.
 * @param {Object} props
 * @returns Object contains 'widthOfStand' and 'heightOfStand' as a Strings
 */
const handleSizesForStandContainer = (props) => {
    const {
        width: widthOfLandPlot,
        length: standLength,
        height: standHeight,
    } = props;

    let intViewportWidth = window.innerWidth;
    let widthOfStand = null;
    let heightOfStand = null;
    let topOfStand = null;

    if (intViewportWidth < 576) {
        widthOfStand = `${((standLength / widthOfLandPlot) * 100) / 2.1}%`;
        heightOfStand = `${standHeight * 0.6}px`;
        topOfStand = "170px";
    }

    if (intViewportWidth > 576) {
        widthOfStand = `${((standLength / widthOfLandPlot) * 100) / 1.9}%`;
        heightOfStand = `${standHeight * 0.7}px`;
        topOfStand = "305px";
    }

    if (intViewportWidth > 768) {
        widthOfStand = `${((standLength / widthOfLandPlot) * 100) / 2}%`;
        heightOfStand = `${standHeight * 0.8}px`;
        topOfStand = "305px";
    }

    if (intViewportWidth > 992) {
        widthOfStand = `${((standLength / widthOfLandPlot) * 100) / 1.8}%`;
        heightOfStand = `${standHeight * 0.8}px`;
        topOfStand = "345px";
    }

    return { widthOfStand, heightOfStand, topOfStand };
};

/**
 * Функція для видалення вузлів із зони Фільтра.
 * Function for removing nodes from the Filter area.
 * Функция для удаления узлов из зоны Фильтра
 * @param {Array} props
 */
const handleRemoveFilterNode = (props) => {
    let itemsToRemove = props.slice();

    const removeFilterNode = (itemsToRemove) => {
        for (let i = 0; i < itemsToRemove.length; i++) {
            const { category, index } = itemsToRemove[i];

            const itemsInFilterSection = createArrayFromNode(filterNode);

            for (let j = 0; j < itemsInFilterSection.length; j++) {
                if (
                    itemsInFilterSection[j].dataset.category === category &&
                    +itemsInFilterSection[j].dataset.itemIndex === index
                ) {
                    filterNode[0].removeChild(filterNode[0].children[j]);
                    itemsToRemove.splice(itemsToRemove[i], 1);
                    return;
                }
            }
        }
    };

    while (itemsToRemove.length) {
        removeFilterNode(itemsToRemove);
    }
};

/**
 * Функція для видалення вузлів із зони Калькулятора.
 * Function for removing nodes from the Calculator area.
 * Функция для удаления узлов из зоны Калькулятора
 * @param {Array} props
 */
const handleRemoveCalculatorNode = (props) => {
    let itemsToRemove = props.slice();

    const removeCalculatorNode = (itemsToRemove) => {
        for (let i = 0; i < itemsToRemove.length; i++) {
            const { category, index } = itemsToRemove[i];

            const calculatorNodes = createArrayFromNode($calculatorSection);

            for (let j = 0; j < calculatorNodes.length; j++) {
                if (
                    calculatorNodes[j].dataset.category === category &&
                    +calculatorNodes[j].dataset.itemIndex === index
                ) {
                    $calculatorSection[0].removeChild(
                        $calculatorSection[0].children[j]
                    );
                    itemsToRemove.splice(itemsToRemove[i], 1);
                    return;
                }
            }
        }
    };

    while (itemsToRemove.length) {
        removeCalculatorNode(itemsToRemove);
    }
};

/**
 * Функція для видалення елементів із масиву selectedItems.
 * Function for removing elements from the selectedItems array.
 * Функция удаления элементов из массива selectedItems.
 * @param {Array} props
 */
const handleRemoveItemsFromSelectedItems = (props) => {
    let itemsToRemove = props.slice();

    const removeItems = (itemsToRemove) => {
        for (let i = 0; i < itemsToRemove.length; i++) {
            const { category: categoryToFind, index } = itemsToRemove[i];

            for (let j = 0; j < selectedItems.length; j++) {
                const { category, id } = selectedItems[j];

                if (category === categoryToFind && id === index) {
                    itemsToRemove.splice(i, 1);
                    selectedItems.splice(j, 1);
                    return;
                }
            }
        }
    };

    while (itemsToRemove.length) {
        removeItems(itemsToRemove);
    }
};

/**
 * Функція перебирає переданий масив вузлів і повертає елементи для видалення.
 * The function retrieves an array of nodes, sorts it out, and returns items for deletion.
 * Функция перебирает передаваемый массив узлов и возвращает элементы для удаления.
 * @param {Array} arrayOfNodes
 * @param {Node} node
 * @returns Array of items to remove
 */
const getItemsToRemove = (arrayOfNodes, node, categories, selectedItem) => {
    const {
        isStand,
        isMonument,
        isCurb,
        isSocle,
        isBeauty,
        isRubble,
        isFlowerGarden,
        mustRemoveElementOnConstructor,
    } = categories;
    let result = [];
    const createItemData = (arrayOfNodes, category, selectedItem) => {
        if (category === "stand") {
            for (let i = 0; i < arrayOfNodes.length; i++) {
                let obj = {};

                if (arrayOfNodes[i].dataset.category === category) {
                    arrayOfNodes[i].dataset.category &&
                        (obj["category"] = arrayOfNodes[i].dataset.category);
                    arrayOfNodes[i].dataset.itemIndex &&
                        (obj["index"] = +arrayOfNodes[i].dataset.itemIndex);
                    Object.keys(obj).length && result.push(obj);

                    mustRemoveElementOnConstructor &&
                        node[0].removeChild(arrayOfNodes[i]);
                }
            }
        }

        if (category === "monuments" && (selectedItem || selectedItem === 0)) {
            for (let i = 0; i < arrayOfNodes.length; i++) {
                let obj = {};

                if (
                    arrayOfNodes[i].dataset.category === category &&
                    +arrayOfNodes[i].dataset.itemIndex === selectedItem
                ) {
                    arrayOfNodes[i].dataset.category &&
                        (obj["category"] = arrayOfNodes[i].dataset.category);
                    arrayOfNodes[i].dataset.itemIndex &&
                        (obj["index"] = +arrayOfNodes[i].dataset.itemIndex);
                    Object.keys(obj).length && result.push(obj);

                    mustRemoveElementOnConstructor &&
                        node[0].removeChild(arrayOfNodes[i]);
                    return;
                }
            }
        } else if (
            // category === "monuments" ||
            category === "curbs" ||
            category === "socle" ||
            category === "beauty" ||
            category === "pup" ||
            category === "flowerGarden"
        ) {
            for (let i = 0; i < arrayOfNodes.length; i++) {
                let obj = {};

                if (arrayOfNodes[i].dataset.category === category) {
                    arrayOfNodes[i].dataset.category &&
                        (obj["category"] = arrayOfNodes[i].dataset.category);
                    arrayOfNodes[i].dataset.itemIndex &&
                        (obj["index"] = +arrayOfNodes[i].dataset.itemIndex);
                    Object.keys(obj).length && result.push(obj);

                    mustRemoveElementOnConstructor &&
                        node[0].removeChild(arrayOfNodes[i]);
                }
            }
        } else if (category === "rubble") {
            for (let i = 0; i < arrayOfNodes.length; i++) {
                let obj = {};

                if (arrayOfNodes[i].dataset.category === category) {
                    arrayOfNodes[i].dataset.category &&
                        (obj["category"] = arrayOfNodes[i].dataset.category);
                    arrayOfNodes[i].dataset.itemIndex &&
                        (obj["index"] = +arrayOfNodes[i].dataset.itemIndex);
                    Object.keys(obj).length && result.push(obj);

                    mustRemoveElementOnConstructor &&
                        node[0].removeChild(arrayOfNodes[i]);
                }
            }
        }
    };

    if (isStand) {
        createItemData(arrayOfNodes, "stand");
    }

    if (isMonument) {
        createItemData(arrayOfNodes, "monuments", selectedItem);
    }

    if (isCurb) {
        createItemData(arrayOfNodes, "curbs", selectedItem);
    }

    if (isSocle) {
        createItemData(arrayOfNodes, "socle", selectedItem);
    }

    if (isBeauty) {
        createItemData(arrayOfNodes, "beauty", selectedItem);
    }

    if (isBeauty) {
        createItemData(arrayOfNodes, "pup", selectedItem);
    }

    if (isRubble) {
        createItemData(arrayOfNodes, "rubble", selectedItem);
    }

    if (isFlowerGarden) {
        createItemData(arrayOfNodes, "flowerGarden", selectedItem);
    }

    return result;
};

/**
 * Обробник елементів блоку "Тумби"
 * Handler of elements "Stands"
 * Обработчик элементом блока "Тумбы"
 */
$elementsStandsNode[0].addEventListener("click", (e) => {
    let selectedStand = null;
    let userClick = e.target;
    const elementsStands = createArrayFromNode($elementsStandsNode);
    selectedStand = elementsStands.indexOf(userClick.parentNode);
    const { width } = handleLandPlotSizes();

    let userSelectStand = null;
    selectedStand !== -1 &&
        (userSelectStand = getElementData(selectedStand, "stand"));

    const {
        id,
        length,
        height,
        imgUrl,
        imgConstructorUrl,
        siteNameUa,
        siteNameRu,
        siteNameEng,
        category,
        price,
    } = userSelectStand;

    let propsForFilterNode = {};
    propsForFilterNode["category"] = category;
    propsForFilterNode["selectedItemIndex"] = selectedStand;
    propsForFilterNode["imgUrl"] = imgUrl;
    propsForFilterNode["siteNameUa"] = siteNameUa;
    propsForFilterNode["siteNameRu"] = siteNameRu;
    propsForFilterNode["siteNameEng"] = siteNameEng;

    let imgStandOnConstructor = `<img src="./img/items${imgConstructorUrl}" 
                                        alt="${siteNameUa}" 
                                        class="stand-container__stand-img${id}"
                                        data-category="${category}"
                                        data-item-index="${selectedStand}"
                                    />`;

    // Перевіряємо в якому контейнері вже є тумби
    const {
        firstContainerChildren,
        isFirstStand: isStandInFirstContainer,
        firstStandIndex: standIdInFirstContainer,
        isFirstFlowerGarden: isFlowerGardenInFirstContainer,
        firstFlowerGardenIndex: flowerGardenIndexInFirstContainer,
        firstContainerMonuments: monumentsInFirstContainer,
        secondContainerChildren,
        isSecondStand: isStandInSecondContainer,
        secondStandIndex: standIdInSecondContainer,
        isSecondFlowerGarden: isFlowerGardenInSecondContainer,
        secondFlowerGardenIndex: flowerGardenIndexInSecondContainer,
        secondContainerMonuments: monumentsInSecondContainer,
    } = getElementsInfoFromBothContainers({
        HTMLnode1: $standContainerNode,
        HTMLnode2: $standContainer2Node,
    });

    let totalStandsLength = 0;

    if (standIdInFirstContainer) {
        const { length: firstStandLength } = getElementData(
            standIdInFirstContainer,
            "stand"
        );

        totalStandsLength += firstStandLength;
    }

    if (standIdInSecondContainer) {
        const { length: secondStandLength } = getElementData(
            standIdInSecondContainer,
            "stand"
        );
        totalStandsLength += secondStandLength;
    }

    const elementsFlowerGardens = createArrayFromNode(
        $elementsValuesFlowerGardensNode
    );

    selectedStand !== -1 && (totalStandsLength += length);

    if (
        selectedStand !== -1 &&
        userClick.className !== "field__hide-element-button" &&
        !isStandInFirstContainer &&
        !isStandInSecondContainer
    ) {
        selectedItems.push(userSelectStand);
        elementsStands[selectedStand].classList.add("active");
        const { widthOfStand, heightOfStand, topOfStand } =
            handleSizesForStandContainer({
                width,
                length,
                height,
            });

        $standContainerNode[0].insertAdjacentHTML(
            "afterbegin",
            imgStandOnConstructor
        );

        $standContainerNode[0].style.top = `${topOfStand}`;
        $standContainerNode[0].style.width = `${widthOfStand}`;
        $standContainerNode[0].style.height = `${heightOfStand}`;

        handleInfoAndErrorMessages(infoMessageNode, {
            isUaLanguage,
            isRuLanguage,
            isEngLanguage,
        });

        const standNodeToCalculator = createCalculatorDataNode(
            category,
            selectedStand,
            siteNameUa,
            siteNameRu,
            siteNameEng,
            price
        );

        handleAddFilterNode(propsForFilterNode);

        $totalCostNode[0].insertAdjacentHTML(
            "beforebegin",
            standNodeToCalculator
        );

        calculate();
    } else if (
        selectedStand !== -1 &&
        userClick.className !== "field__hide-element-button" &&
        isStandInFirstContainer &&
        totalStandsLength <= width
    ) {
        selectedItems.push(userSelectStand);
        elementsStands[selectedStand].classList.add("active");
        const { widthOfStand, heightOfStand, topOfStand } =
            handleSizesForStandContainer({
                width,
                length,
                height,
            });

        $standContainer2Node[0].insertAdjacentHTML(
            "afterbegin",
            imgStandOnConstructor
        );
        $standContainer2Node[0].style.top = `${topOfStand}`;
        $standContainer2Node[0].style.width = `${widthOfStand}`;
        $standContainer2Node[0].style.height = `${heightOfStand}`;

        handleInfoAndErrorMessages(infoMessage2Node, {
            isUaLanguage,
            isRuLanguage,
            isEngLanguage,
        });

        const standNodeToCalculator = createCalculatorDataNode(
            category,
            selectedStand,
            siteNameUa,
            siteNameRu,
            siteNameEng,
            price
        );

        handleAddFilterNode(propsForFilterNode);

        $totalCostNode[0].insertAdjacentHTML(
            "beforebegin",
            standNodeToCalculator
        );

        calculate();
    } else if (
        selectedStand !== -1 &&
        userClick.className !== "field__hide-element-button" &&
        isStandInSecondContainer &&
        totalStandsLength <= width
    ) {
        selectedItems.push(userSelectStand);
        elementsStands[selectedStand].classList.add("active");
        const { widthOfStand, heightOfStand, topOfStand } =
            handleSizesForStandContainer({
                width,
                length,
                height,
            });

        $standContainerNode[0].insertAdjacentHTML(
            "afterbegin",
            imgStandOnConstructor
        );
        $standContainerNode[0].style.top = `${topOfStand}`;
        $standContainerNode[0].style.width = `${widthOfStand}`;
        $standContainerNode[0].style.height = `${heightOfStand}`;

        handleInfoAndErrorMessages(infoMessageNode, {
            isUaLanguage,
            isRuLanguage,
            isEngLanguage,
        });

        const standNodeToCalculator = createCalculatorDataNode(
            category,
            selectedStand,
            siteNameUa,
            siteNameRu,
            siteNameEng,
            price
        );

        handleAddFilterNode(propsForFilterNode);

        $totalCostNode[0].insertAdjacentHTML(
            "beforebegin",
            standNodeToCalculator
        );

        calculate();
    } else if (
        (selectedStand !== -1 &&
            userClick.className !== "field__hide-element-button" &&
            isStandInSecondContainer &&
            isStandInSecondContainer) ||
        (selectedStand !== -1 &&
            userClick.className !== "field__hide-element-button" &&
            totalStandsLength > width)
    ) {
        handleInfoAndErrorMessages(standErrorNode, {
            isUaLanguage,
            isRuLanguage,
            isEngLanguage,
        });

        totalStandsLength -= length;
    }

    if (
        selectedStand !== -1 &&
        userClick.className === "field__hide-element-button" &&
        isStandInFirstContainer &&
        !isStandInSecondContainer
    ) {
        elementsStands[selectedStand].classList.remove("active");

        const monumentsElements = createArrayFromNode(
            elementsValuesMonumentsNode
        );

        for (let i = 0; i < monumentsElements.length; i++) {
            if (monumentsElements[i].classList.contains("active")) {
                for (let j = 0; j < monumentsInFirstContainer.length; j++) {
                    monumentsInFirstContainer[j] === i &&
                        monumentsElements[i].classList.remove("active");
                }
            }
        }

        isFlowerGardenInFirstContainer &&
            elementsFlowerGardens[
                flowerGardenIndexInFirstContainer
            ].classList.contains("active") &&
            elementsFlowerGardens[
                flowerGardenIndexInFirstContainer
            ].classList.remove("active");

        // Отримуємо всі елементи, котрі потрібно видалити
        let itemsToRemove = getItemsToRemove(
            firstContainerChildren,
            $standContainerNode,
            {
                isStand: true,
                isMonument: true,
                isFlowerGarden: isFlowerGardenInFirstContainer,
                mustRemoveElementOnConstructor: true,
            }
        );

        handleRemoveFilterNode(itemsToRemove);
        handleRemoveCalculatorNode(itemsToRemove);
        handleRemoveItemsFromSelectedItems(itemsToRemove);
        calculate();
    } else if (
        selectedStand !== -1 &&
        userClick.className === "field__hide-element-button" &&
        isStandInSecondContainer &&
        !isStandInFirstContainer
    ) {
        elementsStands[selectedStand].classList.remove("active");

        const monumentsElements = createArrayFromNode(
            elementsValuesMonumentsNode
        );

        for (let i = 0; i < monumentsElements.length; i++) {
            if (monumentsElements[i].classList.contains("active")) {
                for (let j = 0; j < monumentsInSecondContainer.length; j++) {
                    monumentsInSecondContainer[j] === i &&
                        monumentsElements[i].classList.remove("active");
                }
            }
        }

        isFlowerGardenInSecondContainer &&
            elementsFlowerGardens[
                flowerGardenIndexInSecondContainer
            ].classList.contains("active") &&
            elementsFlowerGardens[
                flowerGardenIndexInSecondContainer
            ].classList.remove("active");

        // Отримуємо всі елементи, котрі потрібно видалити
        let itemsToRemove = getItemsToRemove(
            secondContainerChildren,
            $standContainer2Node,
            {
                isStand: true,
                isMonument: true,
                isFlowerGarden: isFlowerGardenInSecondContainer,
                mustRemoveElementOnConstructor: true,
            }
        );

        handleRemoveFilterNode(itemsToRemove);
        handleRemoveCalculatorNode(itemsToRemove);
        handleRemoveItemsFromSelectedItems(itemsToRemove);
        calculate();
    } else if (
        selectedStand !== -1 &&
        userClick.className === "field__hide-element-button" &&
        isStandInSecondContainer &&
        isStandInFirstContainer
    ) {
        if (standIdInFirstContainer !== standIdInSecondContainer) {
            elementsStands[selectedStand].classList.remove("active");

            if (
                flowerGardenIndexInFirstContainer !==
                flowerGardenIndexInSecondContainer
            ) {
                elementsFlowerGardens[
                    flowerGardenIndexInFirstContainer
                ].classList.contains("active") &&
                    elementsFlowerGardens[
                        flowerGardenIndexInFirstContainer
                    ].classList.remove("active");
            }

            if (selectedStand === standIdInFirstContainer) {
                // Отримуємо всі елементи, котрі потрібно видалити
                let itemsToRemove = getItemsToRemove(
                    firstContainerChildren,
                    $standContainerNode,
                    {
                        isStand: true,
                        isMonument: true,
                        isFlowerGarden: isFlowerGardenInFirstContainer,
                        mustRemoveElementOnConstructor: true,
                    }
                );

                const monumentsElements = createArrayFromNode(
                    elementsValuesMonumentsNode
                );

                for (let i = 0; i < monumentsElements.length; i++) {
                    if (monumentsElements[i].classList.contains("active")) {
                        for (
                            let j = 0;
                            j < monumentsInFirstContainer.length;
                            j++
                        ) {
                            monumentsInFirstContainer[j] === i &&
                                monumentsElements[i].classList.remove("active");
                        }
                    }
                }

                handleRemoveFilterNode(itemsToRemove);
                handleRemoveCalculatorNode(itemsToRemove);
                handleRemoveItemsFromSelectedItems(itemsToRemove);
                calculate();
            } else if (selectedStand === standIdInSecondContainer) {
                // Отримуємо всі елементи, котрі потрібно видалити
                let itemsToRemove = getItemsToRemove(
                    secondContainerChildren,
                    $standContainer2Node,
                    {
                        isStand: true,
                        isMonument: true,
                        isFlowerGarden: isFlowerGardenInSecondContainer,
                        mustRemoveElementOnConstructor: true,
                    }
                );

                const monumentsElements = createArrayFromNode(
                    elementsValuesMonumentsNode
                );

                for (let i = 0; i < monumentsElements.length; i++) {
                    if (monumentsElements[i].classList.contains("active")) {
                        for (
                            let j = 0;
                            j < monumentsInSecondContainer.length;
                            j++
                        ) {
                            monumentsInSecondContainer[j] === i &&
                                monumentsElements[i].classList.remove("active");
                        }
                    }
                }

                handleRemoveFilterNode(itemsToRemove);
                handleRemoveCalculatorNode(itemsToRemove);
                handleRemoveItemsFromSelectedItems(itemsToRemove);
                calculate();
            }
        } else if (standIdInFirstContainer === standIdInSecondContainer) {
            if (
                flowerGardenIndexInFirstContainer !==
                flowerGardenIndexInSecondContainer
            ) {
                elementsFlowerGardens[
                    flowerGardenIndexInFirstContainer
                ].classList.contains("active") &&
                    elementsFlowerGardens[
                        flowerGardenIndexInFirstContainer
                    ].classList.remove("active");
            }
            // Отримуємо всі елементи, котрі потрібно видалити з першого контейнера
            let itemsToRemove = getItemsToRemove(
                firstContainerChildren,
                $standContainerNode,
                {
                    isStand: true,
                    isMonument: true,
                    isFlowerGarden: isFlowerGardenInSecondContainer,
                    mustRemoveElementOnConstructor: true,
                }
            );

            const monumentsElements = createArrayFromNode(
                elementsValuesMonumentsNode
            );

            for (let i = 0; i < monumentsElements.length; i++) {
                if (monumentsElements[i].classList.contains("active")) {
                    for (let j = 0; j < monumentsInFirstContainer.length; j++) {
                        monumentsInFirstContainer[j] === i &&
                            monumentsElements[i].classList.remove("active");
                    }
                }
            }

            handleRemoveFilterNode(itemsToRemove);
            handleRemoveCalculatorNode(itemsToRemove);
            handleRemoveItemsFromSelectedItems(itemsToRemove);
            calculate();
        }
    }

    isUaLanguage && setLanguage(document, "ua");
    isRuLanguage && setLanguage(document, "ru");
    isEngLanguage && setLanguage(document, "eng");
});

/**
 * Функція для розрахунку габаритів і положення стели в конструкторі.
 * Function for calculating the dimensions and position of the stelle in the constructor.
 * Функция для расчета габаритов и положения стеллы в конструкторе.
 * @param {HTMLNode} containerNode
 * @param {Boolean} isMonumentInContainer
 * @param {Number} selectedMonument
 * @param {Number} standLength
 * @returns Object contains needed data
 */
const handleSizesForMonument = (
    containerNode,
    isMonumentInContainer,
    selectedMonument,
    standLength
) => {
    let result = [];
    let monumentData = {};

    const { width: initialStandLength } =
        containerNode[0].getBoundingClientRect();

    const calculateFirstMonumentSizes = (monumentIndex) => {
        const {
            length: monumentLengthByPrice,
            height: monumentHeightByPrice,
            imgConstructorUrl,
            titleUa,
            category,
        } = getElementData(monumentIndex, "monuments");

        monumentData["monumentId"] = monumentIndex;
        monumentData[
            "nodeString"
        ] = `<img src="./img/items${imgConstructorUrl}" alt="${titleUa}" class="monument-img${monumentIndex}" data-item-index="${monumentIndex}" data-category="${category}" />`;

        const proportion = monumentLengthByPrice / standLength;
        const monumentWidthOnStand = initialStandLength * proportion;
        monumentData["monumentWidthOnStand"] = monumentWidthOnStand;

        const monumentHeightProportion =
            monumentHeightByPrice / monumentLengthByPrice;
        const monumentHeightOnStand =
            monumentWidthOnStand * monumentHeightProportion;
        monumentData["monumentHeightOnStand"] = monumentHeightOnStand;

        monumentData["monumentTopPosition"] = -monumentHeightOnStand + 3;
        monumentData["monumentLeftPosition1"] =
            initialStandLength / 2 - monumentWidthOnStand / 2;
        monumentData["monumentLeftPosition2"] =
            (initialStandLength / 2 - monumentWidthOnStand) / 2;

        result.push(monumentData);
        monumentData = {};
    };

    // Якщо на тумбі не має жодної стелли
    if (!isMonumentInContainer) {
        calculateFirstMonumentSizes(selectedMonument);
    } else if (isMonumentInContainer) {
        let monumentOnConstructorIndex = null;
        const childNodes = createArrayFromNode(containerNode);

        for (let i = 0; i < childNodes.length; i++) {
            childNodes[i].dataset.category === "monuments" &&
                (monumentOnConstructorIndex = +childNodes[i].dataset.itemIndex);
        }

        calculateFirstMonumentSizes(monumentOnConstructorIndex);

        const {
            length: monumentLengthByPrice,
            height: monumentHeightByPrice,
            imgConstructorUrl,
            titleUa,
            category,
        } = getElementData(selectedMonument, "monuments");

        monumentData["monumentId"] = selectedMonument;
        monumentData[
            "nodeString"
        ] = `<img src="./img/items${imgConstructorUrl}" alt="${titleUa}" class="monument-img${selectedMonument}" data-item-index="${selectedMonument}" data-category="${category}" />`;

        const proportion = monumentLengthByPrice / standLength;
        const monumentWidthOnStand = initialStandLength * proportion;
        monumentData["monumentWidthOnStand"] = monumentWidthOnStand;

        const monumentHeightProportion =
            monumentHeightByPrice / monumentLengthByPrice;
        const monumentHeightOnStand =
            monumentWidthOnStand * monumentHeightProportion;
        monumentData["monumentHeightOnStand"] = monumentHeightOnStand;

        monumentData["monumentTopPosition"] = -monumentHeightOnStand + 3;
        const {
            monumentLeftPosition2: firstMonumentLeftPos,
            monumentWidthOnStand: firstMonumentWidhtOnStand,
        } = result[0];
        monumentData["monumentLeftPosition"] =
            firstMonumentLeftPos * 2 +
            firstMonumentWidhtOnStand +
            (initialStandLength / 2 - monumentWidthOnStand) / 2;

        result.push(monumentData);
    }

    return result;
};

const handleSizesForDoubleMonument = (
    containerNode,
    selectedMonument,
    standLength
) => {
    let result = [];
    let monumentData = {};

    const { width: initialStandLength } =
        containerNode[0].getBoundingClientRect();

    const {
        length: monumentLengthByPrice,
        height: monumentHeightByPrice,
        imgConstructorUrl,
        titleUa,
        category,
    } = getElementData(selectedMonument, "monuments");

    monumentData["monumentId"] = selectedMonument;
    monumentData[
        "nodeString"
    ] = `<img src="./img/items${imgConstructorUrl}" alt="${titleUa}" class="monument-img${selectedMonument}" data-item-index="${selectedMonument}" data-category="${category}" />`;

    const proportion = monumentLengthByPrice / standLength;
    const monumentWidthOnStand = initialStandLength * proportion;
    monumentData["monumentWidthOnStand"] = monumentWidthOnStand;

    const monumentHeightProportion =
        monumentHeightByPrice / monumentLengthByPrice;
    const monumentHeightOnStand =
        monumentWidthOnStand * monumentHeightProportion;
    monumentData["monumentHeightOnStand"] = monumentHeightOnStand;

    monumentData["monumentTopPosition"] = -monumentHeightOnStand + 3;
    monumentData["monumentLeftPosition1"] =
        (monumentWidthOnStand - initialStandLength) / 2;

    result.push(monumentData);
    monumentData = {};

    return result;
};

/**
 * Функція для рендеру стели на тумбі.
 * Function for rendering the stelle on the stand.
 * Функция для рендера стеллы на тумбе.
 * @param {Object} monumentData
 * @param {Boolean} isMonument
 * @param {String} monumentStringNode
 * @param {Number} monumentId
 * @param {HTMLNode} nodeToRender
 */
const renderMonumentOnConstructor = (
    monumentData,
    monumentId,
    isDoubleStele,
    nodeToRender
) => {
    if (monumentData.length === 1 && !isDoubleStele) {
        const {
            monumentWidthOnStand,
            monumentHeightOnStand,
            monumentTopPosition,
            monumentLeftPosition1,
            nodeString,
        } = monumentData[0];

        nodeToRender[0].insertAdjacentHTML("afterbegin", nodeString);

        const $monument1Img = nodeToRender[0].querySelectorAll(
            `.monument-img${monumentId}`
        );

        $monument1Img[0].style.width = `${monumentWidthOnStand}px`;
        $monument1Img[0].style.height = `${monumentHeightOnStand}px`;
        $monument1Img[0].style.top = `${monumentTopPosition}px`;
        $monument1Img[0].style.left = `${monumentLeftPosition1}px`;
        $monument1Img[0].style.position = "absolute";
    }

    if (monumentData.length === 2 && !isDoubleStele) {
        const nodeToRenderChildren = createArrayFromNode(nodeToRender);
        let firstMonumentId = null;

        for (let i = 0; i < nodeToRenderChildren.length; i++) {
            if (nodeToRenderChildren[i].dataset.category === "monuments") {
                firstMonumentId = +nodeToRenderChildren[i].dataset.itemIndex;
                nodeToRender[0].removeChild(nodeToRenderChildren[i]);
            }
        }

        const {
            monumentWidthOnStand: firstMonumentWidthOnStand,
            monumentHeightOnStand: firstMonumentHeightOnStand,
            monumentTopPosition: firstMonumentTopPosition,
            monumentLeftPosition2: firstMonumentLeftPosition2,
            nodeString,
        } = monumentData[0];

        nodeToRender[0].insertAdjacentHTML("afterbegin", nodeString);

        const $monument1Img = nodeToRender[0].querySelectorAll(
            `.monument-img${firstMonumentId}`
        );

        $monument1Img[0].style.width = `${firstMonumentWidthOnStand}px`;
        $monument1Img[0].style.height = `${firstMonumentHeightOnStand}px`;
        $monument1Img[0].style.top = `${firstMonumentTopPosition}px`;
        $monument1Img[0].style.left = `${firstMonumentLeftPosition2}px`;
        $monument1Img[0].style.position = "absolute";

        const {
            monumentWidthOnStand: secondMonumentWidthOnStand,
            monumentHeightOnStand: secondMonumentHeightOnStand,
            monumentTopPosition: secondMonumentTopPosition,
            monumentLeftPosition: secondMonumentLeftPosition,
            nodeString: nodeString2,
        } = monumentData[1];

        nodeToRender[0].insertAdjacentHTML("afterbegin", nodeString2);

        const $monument2Img = nodeToRender[0].querySelectorAll(
            `.monument-img${monumentId}`
        );

        $monument2Img[0].style.width = `${secondMonumentWidthOnStand}px`;
        $monument2Img[0].style.height = `${secondMonumentHeightOnStand}px`;
        $monument2Img[0].style.top = `${secondMonumentTopPosition}px`;
        $monument2Img[0].style.left = `${secondMonumentLeftPosition}px`;
        $monument2Img[0].style.position = "absolute";
    }

    if (isDoubleStele) {
        const {
            monumentWidthOnStand,
            monumentHeightOnStand,
            monumentTopPosition,
            monumentLeftPosition1,
            nodeString,
        } = monumentData[0];

        nodeToRender[0].insertAdjacentHTML("afterbegin", nodeString);

        const $monument1Img = nodeToRender[0].querySelectorAll(
            `.monument-img${monumentId}`
        );

        $monument1Img[0].style.minWidth = `${monumentWidthOnStand}px`;
        $monument1Img[0].style.height = `${monumentHeightOnStand}px`;
        $monument1Img[0].style.top = `${monumentTopPosition}px`;
        $monument1Img[0].style.left = `${-monumentLeftPosition1}px`;
        $monument1Img[0].style.position = "absolute";
    }
};

/**
 * Функція показує повідомлення для вибору відповідної тумби, при виборі стелли, якщо вибрано дві тумби
 * The function shows a message to select the appropriate Stand, when selecting a stella, if two stand was selected
 * Функция показывает сообщение для выбора подходящей тумбы, при выборе стеллы, если выбраны две тумбы
 * @param {Object} props
 */
const handleAddChooseStandMessageNode = (props) => {
    const { firstStandIndex, secondStandIndex, nodeToRender } = props;

    const {
        id: firstStandId,
        imgUrl: firstStandImgUrl,
        titleUa: firstStandAltName,
        siteNameUa: firstStandSiteNameUa,
        siteNameRu: firstStandSiteNameRu,
        siteNameEng: firstStandSiteNameEng,
    } = getElementData(firstStandIndex, "stand");

    const {
        id: secondStandId,
        imgUrl: secondStandImgUrl,
        titleUa: secondStandAltName,
        siteNameUa: secondStandSiteNameUa,
        siteNameRu: secondStandSiteNameRu,
        siteNameEng: secondStandSiteNameEng,
    } = getElementData(secondStandIndex, "stand");

    let htmlNodeToRender = `<div class="stands-choose_wrapper">
                                <div class="first-stand__choose" data-item-index="${firstStandId}">
                                    <img src="./img/items${firstStandImgUrl}" 
                                        alt="${firstStandAltName}" 
                                        class="info-message__choose-stand__item-img"
                                    />
                                    <span data-lang="ua" class="active">${firstStandSiteNameUa}</span>
                                    <span data-lang="ru">${firstStandSiteNameRu}</span>
                                    <span data-lang="eng">${firstStandSiteNameEng}</span>
                                </div>
                                <div class="second-stand_choose" data-item-index="${secondStandId}">
                                    <img src="./img/items${secondStandImgUrl}" 
                                        alt="${secondStandAltName}" 
                                        class="info-message__choose-stand__item-img" 
                                    />
                                    <span data-lang="ua" class="active">${secondStandSiteNameUa}</span>
                                    <span data-lang="ru">${secondStandSiteNameRu}</span>
                                    <span data-lang="eng">${secondStandSiteNameEng}</span>
                                </div>
                            </div>`;

    if (nodeToRender[0].children.length > 1) {
        const nodeToRenderChildren = createArrayFromNode(nodeToRender);

        for (let i = 0; i < nodeToRenderChildren.length; i++) {
            nodeToRenderChildren[i].classList.contains(
                "stands-choose_wrapper"
            ) && nodeToRender[0].removeChild(nodeToRenderChildren[i]);
        }
    }

    nodeToRender[0].insertAdjacentHTML("beforeend", htmlNodeToRender);
};

/**
 * Обробник елементів блоку "Стелли"
 * Stella block element handler
 * Обработчик элементов блока "Стеллы"
 */
elementsValuesMonumentsNode[0].addEventListener("click", (e) => {
    let userClick = e.target;
    const elementsMonuments = createArrayFromNode(elementsValuesMonumentsNode);
    let selectedMonument = elementsMonuments.indexOf(userClick.parentNode);
    let selectedMonumentData = null;
    selectedMonument !== -1 &&
        (selectedMonumentData = getElementData(selectedMonument, "monuments"));

    const {
        id,
        length: monumentLength,
        imgUrl,
        titleUa,
        siteNameUa,
        siteNameRu,
        siteNameEng,
        category,
        price,
    } = selectedMonumentData;

    let propsForFilterNode = {};
    propsForFilterNode["category"] = category;
    propsForFilterNode["selectedItemIndex"] = selectedMonument;
    propsForFilterNode["imgUrl"] = imgUrl;
    propsForFilterNode["siteNameUa"] = siteNameUa;
    propsForFilterNode["siteNameRu"] = siteNameRu;
    propsForFilterNode["siteNameEng"] = siteNameEng;

    // Перевіряємо в якому контейнері вже є тумби та стелли, їх довжина
    let isStandInFirstContainer = false;
    let isMonumentInFirstContainer = false;
    let standLengthByPriceInFirstContainer = null;
    let firstStandIndex = null;
    let totalMonumentsLengthInFirstContainer = 0;

    let isStandInSecondContainer = false;
    let isMonumentInSecondContainer = false;
    let standLengthByPriceInSecondContainer = null;
    let secondStandIndex = null;
    let totalMonumentsLengthInSecondContainer = 0;

    const firstContainerChildren = createArrayFromNode($standContainerNode);

    if (firstContainerChildren.length) {
        for (let i = 0; i < firstContainerChildren.length; i++) {
            if (firstContainerChildren[i].dataset.category === "stand") {
                isStandInFirstContainer = true;
                firstStandIndex = +firstContainerChildren[i].dataset.itemIndex;
                const { length } = getElementData(firstStandIndex, "stand");
                standLengthByPriceInFirstContainer += length;
            }

            if (firstContainerChildren[i].dataset.category === "monuments") {
                isMonumentInFirstContainer = true;
                let monumentIndex =
                    +firstContainerChildren[i].dataset.itemIndex;

                const { length } = getElementData(monumentIndex, "monuments");
                totalMonumentsLengthInFirstContainer += length;
            }
        }
    }

    const secondContainerChildren = createArrayFromNode($standContainer2Node);

    if (secondContainerChildren.length) {
        for (let i = 0; i < secondContainerChildren.length; i++) {
            if (secondContainerChildren[i].dataset.category === "stand") {
                isStandInSecondContainer = true;
                secondStandIndex =
                    +secondContainerChildren[i].dataset.itemIndex;
                const { length } = getElementData(secondStandIndex, "stand");
                standLengthByPriceInSecondContainer += length;
            }

            if (secondContainerChildren[i].dataset.category === "monuments") {
                isMonumentInSecondContainer = true;
                let monumentIndex =
                    +secondContainerChildren[i].dataset.itemIndex;

                const { length } = getElementData(monumentIndex, "monuments");
                totalMonumentsLengthInSecondContainer += length;
            }
        }
    }

    //Перевіряємо чи це не подвійна стелла
    let isDoubleStele = false;
    isDoubleStele = titleUa.includes("Подвійний");

    // Якщо не вибрана жодна тумба, показуємо помилку вибору стелли
    selectedMonument !== -1 &&
        !isStandInFirstContainer &&
        !isStandInSecondContainer &&
        handleInfoAndErrorMessages($monumentError, {
            isUaLanguage,
            isRuLanguage,
            isEngLanguage,
        });

    // Якщо вибрана тумба лише в першому контейнері
    if (
        selectedMonument !== -1 &&
        userClick.className !== "field__hide-element-button" &&
        isStandInFirstContainer &&
        !isStandInSecondContainer
    ) {
        totalMonumentsLengthInFirstContainer += monumentLength;

        totalMonumentsLengthInFirstContainer >
            standLengthByPriceInFirstContainer &&
            !isDoubleStele &&
            handleInfoAndErrorMessages($monumentErrorLength, {
                isUaLanguage,
                isRuLanguage,
                isEngLanguage,
            });

        if (
            totalMonumentsLengthInFirstContainer <=
                standLengthByPriceInFirstContainer &&
            !isDoubleStele
        ) {
            elementsMonuments[selectedMonument].classList.add("active");
            selectedItems.push(selectedMonumentData);

            const monumentDataForRender = handleSizesForMonument(
                $standContainerNode,
                isMonumentInFirstContainer,
                selectedMonument,
                standLengthByPriceInFirstContainer
            );

            renderMonumentOnConstructor(
                monumentDataForRender,
                id,
                isDoubleStele,
                $standContainerNode
            );

            handleAddFilterNode(propsForFilterNode);

            const monumentNodeToCalculator = createCalculatorDataNode(
                category,
                selectedMonument,
                siteNameUa,
                siteNameRu,
                siteNameEng,
                price
            );

            $totalCostNode[0].insertAdjacentHTML(
                "beforebegin",
                monumentNodeToCalculator
            );

            calculate();
        } else if (isDoubleStele && !isMonumentInFirstContainer) {
            elementsMonuments[selectedMonument].classList.add("active");
            selectedItems.push(selectedMonumentData);

            const monumentDataForRender = handleSizesForDoubleMonument(
                $standContainerNode,
                selectedMonument,
                standLengthByPriceInFirstContainer
            );

            renderMonumentOnConstructor(
                monumentDataForRender,
                id,
                isDoubleStele,
                $standContainerNode
            );

            handleAddFilterNode(propsForFilterNode);

            const monumentNodeToCalculator = createCalculatorDataNode(
                category,
                selectedMonument,
                siteNameUa,
                siteNameRu,
                siteNameEng,
                price
            );

            $totalCostNode[0].insertAdjacentHTML(
                "beforebegin",
                monumentNodeToCalculator
            );

            calculate();
        } else if (isDoubleStele && isMonumentInFirstContainer) {
            handleInfoAndErrorMessages(standErrorNode, {
                isUaLanguage,
                isRuLanguage,
                isEngLanguage,
            });
        }

        // Якщо вибрана тумба лише у другому контейнері
    } else if (
        selectedMonument !== -1 &&
        userClick.className !== "field__hide-element-button" &&
        !isStandInFirstContainer &&
        isStandInSecondContainer
    ) {
        totalMonumentsLengthInSecondContainer += monumentLength;
        totalMonumentsLengthInSecondContainer >
            standLengthByPriceInSecondContainer &&
            !isDoubleStele &&
            handleInfoAndErrorMessages($monumentErrorLength, {
                isUaLanguage,
                isRuLanguage,
                isEngLanguage,
            });

        if (
            totalMonumentsLengthInSecondContainer <=
                standLengthByPriceInSecondContainer &&
            !isDoubleStele
        ) {
            elementsMonuments[selectedMonument].classList.add("active");
            selectedItems.push(selectedMonumentData);

            const monumentDataForRender = handleSizesForMonument(
                $standContainer2Node,
                isMonumentInSecondContainer,
                selectedMonument,
                standLengthByPriceInSecondContainer
            );

            renderMonumentOnConstructor(
                monumentDataForRender,
                id,
                isDoubleStele,
                $standContainer2Node
            );

            handleAddFilterNode(propsForFilterNode);

            const monumentNodeToCalculator = createCalculatorDataNode(
                category,
                selectedMonument,
                siteNameUa,
                siteNameRu,
                siteNameEng,
                price
            );

            $totalCostNode[0].insertAdjacentHTML(
                "beforebegin",
                monumentNodeToCalculator
            );

            calculate();
        } else if (isDoubleStele && !isMonumentInSecondContainer) {
            elementsMonuments[selectedMonument].classList.add("active");
            selectedItems.push(selectedMonumentData);

            const monumentDataForRender = handleSizesForDoubleMonument(
                $standContainer2Node,
                selectedMonument,
                standLengthByPriceInSecondContainer
            );

            renderMonumentOnConstructor(
                monumentDataForRender,
                id,
                isDoubleStele,
                $standContainer2Node
            );

            handleAddFilterNode(propsForFilterNode);

            const monumentNodeToCalculator = createCalculatorDataNode(
                category,
                selectedMonument,
                siteNameUa,
                siteNameRu,
                siteNameEng,
                price
            );

            $totalCostNode[0].insertAdjacentHTML(
                "beforebegin",
                monumentNodeToCalculator
            );

            calculate();
        } else if (isDoubleStele && isMonumentInSecondContainer) {
            handleInfoAndErrorMessages(standErrorNode, {
                isUaLanguage,
                isRuLanguage,
                isEngLanguage,
            });
        }

        // Якщо тумба присутня і в першому і в другому контейнері
    } else if (
        selectedMonument !== -1 &&
        userClick.className !== "field__hide-element-button" &&
        isStandInFirstContainer &&
        isStandInSecondContainer
    ) {
        const { width: landPlotWidth } = handleLandPlotSizes();

        // Показуємо уточнення - до якої тумби добати стеллу
        $chooseStandMessage[0].classList.add("active");

        handleAddChooseStandMessageNode({
            firstStandIndex,
            secondStandIndex,
            nodeToRender: $chooseStandMessage,
        });

        $modalWindowChooseStand[0].addEventListener(
            "click",
            (e) => {
                e.stopPropagation();

                let userClick = e.target;
                // Обрана тумба з першого контейнера
                if (
                    userClick.parentElement.className === "first-stand__choose"
                ) {
                    totalMonumentsLengthInFirstContainer += monumentLength;

                    if (
                        totalMonumentsLengthInFirstContainer >
                            standLengthByPriceInFirstContainer &&
                        !isDoubleStele
                    ) {
                        handleInfoAndErrorMessages($monumentErrorLength, {
                            isUaLanguage,
                            isRuLanguage,
                            isEngLanguage,
                        });
                        handleHideInfoMessage();
                    } else if (
                        totalMonumentsLengthInFirstContainer <=
                            standLengthByPriceInFirstContainer &&
                        !isDoubleStele
                    ) {
                        elementsMonuments[selectedMonument].classList.add(
                            "active"
                        );
                        selectedItems.push(selectedMonumentData);

                        const monumentDataForRender = handleSizesForMonument(
                            $standContainerNode,
                            isMonumentInFirstContainer,
                            selectedMonument,
                            standLengthByPriceInFirstContainer
                        );

                        renderMonumentOnConstructor(
                            monumentDataForRender,
                            id,
                            isDoubleStele,
                            $standContainerNode
                        );

                        handleAddFilterNode(propsForFilterNode);

                        const monumentNodeToCalculator =
                            createCalculatorDataNode(
                                category,
                                selectedMonument,
                                siteNameUa,
                                siteNameRu,
                                siteNameEng,
                                price
                            );

                        $totalCostNode[0].insertAdjacentHTML(
                            "beforebegin",
                            monumentNodeToCalculator
                        );
                        $chooseStandMessage[0].classList.remove("active");

                        calculate();
                    }

                    if (
                        isDoubleStele &&
                        !isMonumentInFirstContainer &&
                        !isMonumentInSecondContainer
                    ) {
                        elementsMonuments[selectedMonument].classList.add(
                            "active"
                        );
                        selectedItems.push(selectedMonumentData);

                        const monumentDataForRender =
                            handleSizesForDoubleMonument(
                                $standContainerNode,
                                selectedMonument,
                                standLengthByPriceInFirstContainer
                            );

                        renderMonumentOnConstructor(
                            monumentDataForRender,
                            id,
                            isDoubleStele,
                            $standContainerNode
                        );

                        handleAddFilterNode(propsForFilterNode);

                        const monumentNodeToCalculator =
                            createCalculatorDataNode(
                                category,
                                selectedMonument,
                                siteNameUa,
                                siteNameRu,
                                siteNameEng,
                                price
                            );

                        $totalCostNode[0].insertAdjacentHTML(
                            "beforebegin",
                            monumentNodeToCalculator
                        );
                        $chooseStandMessage[0].classList.remove("active");

                        calculate();
                    } else if (
                        isDoubleStele &&
                        isMonumentInSecondContainer &&
                        totalMonumentsLengthInFirstContainer +
                            totalMonumentsLengthInSecondContainer <=
                            landPlotWidth
                    ) {
                        elementsMonuments[selectedMonument].classList.add(
                            "active"
                        );
                        selectedItems.push(selectedMonumentData);

                        const monumentDataForRender =
                            handleSizesForDoubleMonument(
                                $standContainerNode,
                                selectedMonument,
                                standLengthByPriceInFirstContainer
                            );

                        renderMonumentOnConstructor(
                            monumentDataForRender,
                            id,
                            isDoubleStele,
                            $standContainerNode
                        );

                        handleAddFilterNode(propsForFilterNode);

                        const monumentNodeToCalculator =
                            createCalculatorDataNode(
                                category,
                                selectedMonument,
                                siteNameUa,
                                siteNameRu,
                                siteNameEng,
                                price
                            );

                        $totalCostNode[0].insertAdjacentHTML(
                            "beforebegin",
                            monumentNodeToCalculator
                        );
                        $chooseStandMessage[0].classList.remove("active");

                        calculate();
                    } else {
                        handleInfoAndErrorMessages(standErrorNode, {
                            isUaLanguage,
                            isRuLanguage,
                            isEngLanguage,
                        });

                        $chooseStandMessage[0].classList.contains("active") &&
                            $chooseStandMessage[0].classList.remove("active");
                    }
                }

                if (
                    userClick.parentElement.className === "second-stand_choose"
                ) {
                    totalMonumentsLengthInSecondContainer += monumentLength;

                    if (
                        totalMonumentsLengthInSecondContainer >
                            standLengthByPriceInSecondContainer &&
                        !isDoubleStele
                    ) {
                        handleInfoAndErrorMessages($monumentErrorLength, {
                            isUaLanguage,
                            isRuLanguage,
                            isEngLanguage,
                        });
                        handleHideInfoMessage();
                    } else if (
                        totalMonumentsLengthInSecondContainer <=
                            standLengthByPriceInSecondContainer &&
                        !isDoubleStele
                    ) {
                        elementsMonuments[selectedMonument].classList.add(
                            "active"
                        );

                        selectedItems.push(selectedMonumentData);

                        const monumentDataForRender = handleSizesForMonument(
                            $standContainer2Node,
                            isMonumentInSecondContainer,
                            selectedMonument,
                            standLengthByPriceInSecondContainer
                        );

                        renderMonumentOnConstructor(
                            monumentDataForRender,
                            id,
                            isDoubleStele,
                            $standContainer2Node
                        );

                        handleAddFilterNode(propsForFilterNode);

                        const monumentNodeToCalculator =
                            createCalculatorDataNode(
                                category,
                                selectedMonument,
                                siteNameUa,
                                siteNameRu,
                                siteNameEng,
                                price
                            );

                        $totalCostNode[0].insertAdjacentHTML(
                            "beforebegin",
                            monumentNodeToCalculator
                        );
                        $chooseStandMessage[0].classList.remove("active");

                        calculate();
                    }

                    if (
                        isDoubleStele &&
                        !isMonumentInFirstContainer &&
                        !isMonumentInSecondContainer
                    ) {
                        elementsMonuments[selectedMonument].classList.add(
                            "active"
                        );
                        selectedItems.push(selectedMonumentData);

                        const monumentDataForRender =
                            handleSizesForDoubleMonument(
                                $standContainer2Node,
                                selectedMonument,
                                standLengthByPriceInSecondContainer
                            );

                        renderMonumentOnConstructor(
                            monumentDataForRender,
                            id,
                            isDoubleStele,
                            $standContainer2Node
                        );

                        handleAddFilterNode(propsForFilterNode);

                        const monumentNodeToCalculator =
                            createCalculatorDataNode(
                                category,
                                selectedMonument,
                                siteNameUa,
                                siteNameRu,
                                siteNameEng,
                                price
                            );

                        $totalCostNode[0].insertAdjacentHTML(
                            "beforebegin",
                            monumentNodeToCalculator
                        );
                        $chooseStandMessage[0].classList.remove("active");

                        calculate();
                    } else if (
                        isDoubleStele &&
                        isMonumentInFirstContainer &&
                        totalMonumentsLengthInFirstContainer +
                            totalMonumentsLengthInSecondContainer <=
                            landPlotWidth
                    ) {
                        elementsMonuments[selectedMonument].classList.add(
                            "active"
                        );
                        selectedItems.push(selectedMonumentData);

                        const monumentDataForRender =
                            handleSizesForDoubleMonument(
                                $standContainer2Node,
                                selectedMonument,
                                standLengthByPriceInSecondContainer
                            );

                        renderMonumentOnConstructor(
                            monumentDataForRender,
                            id,
                            isDoubleStele,
                            $standContainer2Node
                        );

                        handleAddFilterNode(propsForFilterNode);

                        const monumentNodeToCalculator =
                            createCalculatorDataNode(
                                category,
                                selectedMonument,
                                siteNameUa,
                                siteNameRu,
                                siteNameEng,
                                price
                            );

                        $totalCostNode[0].insertAdjacentHTML(
                            "beforebegin",
                            monumentNodeToCalculator
                        );
                        $chooseStandMessage[0].classList.remove("active");

                        calculate();
                    } else {
                        handleInfoAndErrorMessages(standErrorNode, {
                            isUaLanguage,
                            isRuLanguage,
                            isEngLanguage,
                        });

                        $chooseStandMessage[0].classList.contains("active") &&
                            $chooseStandMessage[0].classList.remove("active");
                    }
                }

                isUaLanguage && setLanguage(document, "ua");
                isRuLanguage && setLanguage(document, "ru");
                isEngLanguage && setLanguage(document, "eng");
            },
            { once: true }
        );
    }

    if (
        selectedMonument !== -1 &&
        userClick.className === "field__hide-element-button"
    ) {
        // Знайти в якому контейнері конструктора знаходиться обрана стелла
        let isMonumentInFirstContainer = false;
        let sameStelesCountInFirstContainer = null;
        let isMonumentInSecondContainer = false;
        let sameStelesCountInSecondContainer = null;

        const firstContainerChildren = createArrayFromNode($standContainerNode);

        if (firstContainerChildren.length) {
            for (let i = 0; i < firstContainerChildren.length; i++) {
                if (
                    firstContainerChildren[i].dataset.category ===
                        "monuments" &&
                    +firstContainerChildren[i].dataset.itemIndex ===
                        selectedMonument
                ) {
                    isMonumentInFirstContainer = true;
                    sameStelesCountInFirstContainer += 1;
                }
            }
        }

        const secondContainerChildren =
            createArrayFromNode($standContainer2Node);

        if (secondContainerChildren.length) {
            for (let i = 0; i < secondContainerChildren.length; i++) {
                if (
                    secondContainerChildren[i].dataset.category ===
                        "monuments" &&
                    +secondContainerChildren[i].dataset.itemIndex ===
                        selectedMonument
                ) {
                    isMonumentInSecondContainer = true;
                    sameStelesCountInSecondContainer += 1;
                }
            }
        }

        if (
            isMonumentInFirstContainer &&
            sameStelesCountInFirstContainer === 1 &&
            !isMonumentInSecondContainer
        ) {
            elementsMonuments[selectedMonument].classList.remove("active");

            let itemsToRemove = getItemsToRemove(
                firstContainerChildren,
                $standContainerNode,
                {
                    isStand: false,
                    isMonument: true,
                    mustRemoveElementOnConstructor: true,
                },
                selectedMonument
            );

            // Перевірити наявність стел на тумбі
            // щоб відцентрувати стеллу, якщо вона ще тут є
            const firstContainerChildrenAfterRemove =
                createArrayFromNode($standContainerNode);
            let monumentIndexToKeep = null;
            let standIndex = null;

            if (firstContainerChildrenAfterRemove.length) {
                for (
                    let i = 0;
                    i < firstContainerChildrenAfterRemove.length;
                    i++
                ) {
                    if (
                        firstContainerChildrenAfterRemove[i].dataset
                            .category === "monuments"
                    ) {
                        monumentIndexToKeep =
                            +firstContainerChildrenAfterRemove[i].dataset
                                .itemIndex;
                        $standContainerNode[0].removeChild(
                            firstContainerChildrenAfterRemove[i]
                        );
                    }

                    if (
                        firstContainerChildrenAfterRemove[i].dataset
                            .category === "stand"
                    ) {
                        standIndex =
                            +firstContainerChildrenAfterRemove[i].dataset
                                .itemIndex;
                    }
                }
            }

            if (monumentIndexToKeep || monumentIndexToKeep === 0) {
                const { length: standLengthByPriceInFirstContainer } =
                    getElementData(standIndex, "stand");

                const monumentDataForRender = handleSizesForMonument(
                    $standContainerNode,
                    false,
                    monumentIndexToKeep,
                    standLengthByPriceInFirstContainer
                );

                renderMonumentOnConstructor(
                    monumentDataForRender,
                    monumentIndexToKeep,
                    isDoubleStele,
                    $standContainerNode
                );
            }

            handleRemoveFilterNode(itemsToRemove);
            handleRemoveCalculatorNode(itemsToRemove);
            handleRemoveItemsFromSelectedItems(itemsToRemove);

            calculate();
        } else if (
            isMonumentInFirstContainer &&
            sameStelesCountInFirstContainer === 2 &&
            !isMonumentInSecondContainer
        ) {
            let itemsToRemove = getItemsToRemove(
                firstContainerChildren,
                $standContainerNode,
                {
                    isStand: false,
                    isMonument: true,
                    mustRemoveElementOnConstructor: true,
                },
                selectedMonument
            );

            // Перевірити наявність стел на тумбі
            // щоб відцентрувати стеллу, якщо вона ще тут є
            const firstContainerChildrenAfterRemove =
                createArrayFromNode($standContainerNode);
            let monumentIndexToKeep = null;
            let standIndex = null;

            if (firstContainerChildrenAfterRemove.length) {
                for (
                    let i = 0;
                    i < firstContainerChildrenAfterRemove.length;
                    i++
                ) {
                    if (
                        firstContainerChildrenAfterRemove[i].dataset
                            .category === "monuments"
                    ) {
                        monumentIndexToKeep =
                            +firstContainerChildrenAfterRemove[i].dataset
                                .itemIndex;
                        $standContainerNode[0].removeChild(
                            firstContainerChildrenAfterRemove[i]
                        );
                    }

                    if (
                        firstContainerChildrenAfterRemove[i].dataset
                            .category === "stand"
                    ) {
                        standIndex =
                            +firstContainerChildrenAfterRemove[i].dataset
                                .itemIndex;
                    }
                }
            }

            if (monumentIndexToKeep || monumentIndexToKeep === 0) {
                const { length: standLengthByPriceInFirstContainer } =
                    getElementData(standIndex, "stand");

                const monumentDataForRender = handleSizesForMonument(
                    $standContainerNode,
                    false,
                    monumentIndexToKeep,
                    standLengthByPriceInFirstContainer
                );

                renderMonumentOnConstructor(
                    monumentDataForRender,
                    monumentIndexToKeep,
                    isDoubleStele,
                    $standContainerNode
                );
            }

            handleRemoveFilterNode(itemsToRemove);
            handleRemoveCalculatorNode(itemsToRemove);
            handleRemoveItemsFromSelectedItems(itemsToRemove);
            calculate();
        } else if (
            !isMonumentInFirstContainer &&
            sameStelesCountInSecondContainer === 1 &&
            isMonumentInSecondContainer
        ) {
            elementsMonuments[selectedMonument].classList.remove("active");

            let itemsToRemove = getItemsToRemove(
                secondContainerChildren,
                $standContainer2Node,
                {
                    isStand: false,
                    isMonument: true,
                    mustRemoveElementOnConstructor: true,
                },
                selectedMonument
            );

            // Перевірити наявність стел на тумбі
            // щоб відцентрувати стеллу, якщо вона ще тут є
            const secondContainerChildrenAfterRemove =
                createArrayFromNode($standContainer2Node);
            let monumentIndexToKeep = null;
            let standIndex = null;

            if (secondContainerChildrenAfterRemove.length) {
                for (
                    let i = 0;
                    i < secondContainerChildrenAfterRemove.length;
                    i++
                ) {
                    if (
                        secondContainerChildrenAfterRemove[i].dataset
                            .category === "monuments"
                    ) {
                        monumentIndexToKeep =
                            +secondContainerChildrenAfterRemove[i].dataset
                                .itemIndex;
                        $standContainer2Node[0].removeChild(
                            secondContainerChildrenAfterRemove[i]
                        );
                    }

                    if (
                        secondContainerChildrenAfterRemove[i].dataset
                            .category === "stand"
                    ) {
                        standIndex =
                            +secondContainerChildrenAfterRemove[i].dataset
                                .itemIndex;
                    }
                }
            }

            if (monumentIndexToKeep || monumentIndexToKeep === 0) {
                const { length: standLengthByPriceInFirstContainer } =
                    getElementData(standIndex, "stand");

                const monumentDataForRender = handleSizesForMonument(
                    $standContainer2Node,
                    false,
                    monumentIndexToKeep,
                    standLengthByPriceInFirstContainer
                );

                renderMonumentOnConstructor(
                    monumentDataForRender,
                    monumentIndexToKeep,
                    isDoubleStele,
                    $standContainer2Node
                );
            }

            handleRemoveFilterNode(itemsToRemove);
            handleRemoveCalculatorNode(itemsToRemove);
            handleRemoveItemsFromSelectedItems(itemsToRemove);

            calculate();
        } else if (
            !isMonumentInFirstContainer &&
            sameStelesCountInSecondContainer === 2 &&
            isMonumentInSecondContainer
        ) {
            let itemsToRemove = getItemsToRemove(
                secondContainerChildren,
                $standContainer2Node,
                {
                    isStand: false,
                    isMonument: true,
                    mustRemoveElementOnConstructor: true,
                },
                selectedMonument
            );

            // Перевірити наявність стел на тумбі
            // щоб відцентрувати стеллу, якщо вона ще тут є
            const secondContainerChildrenAfterRemove =
                createArrayFromNode($standContainer2Node);
            let monumentIndexToKeep = null;
            let standIndex = null;

            if (secondContainerChildrenAfterRemove.length) {
                for (
                    let i = 0;
                    i < secondContainerChildrenAfterRemove.length;
                    i++
                ) {
                    if (
                        secondContainerChildrenAfterRemove[i].dataset
                            .category === "monuments"
                    ) {
                        monumentIndexToKeep =
                            +secondContainerChildrenAfterRemove[i].dataset
                                .itemIndex;
                        $standContainer2Node[0].removeChild(
                            secondContainerChildrenAfterRemove[i]
                        );
                    }

                    if (
                        secondContainerChildrenAfterRemove[i].dataset
                            .category === "stand"
                    ) {
                        standIndex =
                            +secondContainerChildrenAfterRemove[i].dataset
                                .itemIndex;
                    }
                }
            }

            if (monumentIndexToKeep || monumentIndexToKeep === 0) {
                const { length: standLengthByPriceInFirstContainer } =
                    getElementData(standIndex, "stand");

                const monumentDataForRender = handleSizesForMonument(
                    $standContainer2Node,
                    false,
                    monumentIndexToKeep,
                    standLengthByPriceInFirstContainer
                );

                renderMonumentOnConstructor(
                    monumentDataForRender,
                    monumentIndexToKeep,
                    isDoubleStele,
                    $standContainer2Node
                );
            }

            handleRemoveFilterNode(itemsToRemove);
            handleRemoveCalculatorNode(itemsToRemove);
            handleRemoveItemsFromSelectedItems(itemsToRemove);
            calculate();
        } else {
            let itemsToRemove = getItemsToRemove(
                secondContainerChildren,
                $standContainer2Node,
                {
                    isStand: false,
                    isMonument: true,
                    mustRemoveElementOnConstructor: true,
                },
                selectedMonument
            );

            handleRemoveFilterNode(itemsToRemove);
            handleRemoveCalculatorNode(itemsToRemove);
            handleRemoveItemsFromSelectedItems(itemsToRemove);
            calculate();
        }
    }

    isUaLanguage && setLanguage(document, "ua");
    isRuLanguage && setLanguage(document, "ru");
    isEngLanguage && setLanguage(document, "eng");
});

/**
 * Обробник елементів блоку "Квітники"
 * Flower garden block element handler
 * Обработчик элементов блока "Цветники"
 */
$elementsValuesFlowerGardensNode[0].addEventListener("click", (e) => {
    e.stopPropagation();

    let userClick = e.target;
    const elementsFlowerGardens = createArrayFromNode(
        $elementsValuesFlowerGardensNode
    );
    let selectedFlowerGarden = elementsFlowerGardens.indexOf(
        userClick.parentNode
    );

    if (
        selectedFlowerGarden !== -1 &&
        userClick.className !== "field__hide-element-button"
    ) {
        let isStandInFirstContainer = false;
        let firstStandIndex = null;
        let isFlowerGardenInFirstContainer = false;
        let isStandInSecondContainer = false;
        let secondStandIndex = null;
        let isFlowerGardenInSecondContainer = false;

        const firstContainerChildren = createArrayFromNode($standContainerNode);

        if (firstContainerChildren.length) {
            for (let i = 0; i < firstContainerChildren.length; i++) {
                if (firstContainerChildren[i].dataset.category === "stand") {
                    isStandInFirstContainer = true;
                    firstStandIndex =
                        +firstContainerChildren[i].dataset.itemIndex;
                }

                if (
                    firstContainerChildren[i].dataset.category ===
                    "flowerGarden"
                ) {
                    isFlowerGardenInFirstContainer = true;
                }
            }
        }

        const secondContainerChildren =
            createArrayFromNode($standContainer2Node);

        if (secondContainerChildren.length) {
            for (let i = 0; i < secondContainerChildren.length; i++) {
                if (secondContainerChildren[i].dataset.category === "stand") {
                    isStandInSecondContainer = true;
                    secondStandIndex =
                        +secondContainerChildren[i].dataset.itemIndex;
                }

                if (
                    secondContainerChildren[i].dataset.category ===
                    "flowerGarden"
                ) {
                    isFlowerGardenInSecondContainer = true;
                }
            }
        }

        !isStandInFirstContainer &&
            !isStandInSecondContainer &&
            handleInfoAndErrorMessages($monumentError, {
                isUaLanguage,
                isRuLanguage,
                isEngLanguage,
            });

        const selectedFlowerGardenData = getElementData(
            selectedFlowerGarden,
            "flowerGarden"
        );

        const {
            id,
            imgUrl,
            imgConstructorUrl,
            siteNameUa,
            siteNameRu,
            siteNameEng,
            category,
            price,
        } = selectedFlowerGardenData;

        let propsForFilterNode = {};
        propsForFilterNode["category"] = category;
        propsForFilterNode["selectedItemIndex"] = selectedFlowerGarden;
        propsForFilterNode["imgUrl"] = imgUrl;
        propsForFilterNode["siteNameUa"] = siteNameUa;
        propsForFilterNode["siteNameRu"] = siteNameRu;
        propsForFilterNode["siteNameEng"] = siteNameEng;

        let constructorNodeString =
            '<img src="./img/items[URL]" class="flower-garden__img" data-item-index="[INDEX]" data-category="[value]" />';

        if (
            isStandInFirstContainer &&
            !isFlowerGardenInFirstContainer &&
            !isStandInSecondContainer
        ) {
            elementsFlowerGardens[selectedFlowerGarden].classList.add("active");
            selectedItems.push(selectedFlowerGardenData);

            const constructorNode = constructorNodeString
                .slice()
                .replace(/\[URL\]/g, imgConstructorUrl)
                .replace(/\[INDEX\]/g, id)
                .replace(/\[value\]/g, category);

            $standContainerNode[0].insertAdjacentHTML(
                "beforeend",
                constructorNode
            );

            handleAddFilterNode(propsForFilterNode);

            const flowerGardenNodeToCalculator = createCalculatorDataNode(
                category,
                selectedFlowerGarden,
                siteNameUa,
                siteNameRu,
                siteNameEng,
                price
            );

            $totalCostNode[0].insertAdjacentHTML(
                "beforebegin",
                flowerGardenNodeToCalculator
            );

            calculate();
        } else if (
            isStandInFirstContainer &&
            isFlowerGardenInFirstContainer &&
            !isStandInSecondContainer
        ) {
            for (let i = 0; i < elementsFlowerGardens.length; i++) {
                if (elementsFlowerGardens[i].classList.contains("active")) {
                    elementsFlowerGardens[i].classList.remove("active");

                    let itemsToRemove = getItemsToRemove(
                        firstContainerChildren,
                        $standContainerNode,
                        {
                            isFlowerGarden: true,
                            mustRemoveElementOnConstructor: true,
                        }
                    );

                    handleRemoveFilterNode(itemsToRemove);
                    handleRemoveCalculatorNode(itemsToRemove);
                    handleRemoveItemsFromSelectedItems(itemsToRemove);
                    calculate();
                }
            }

            elementsFlowerGardens[selectedFlowerGarden].classList.add("active");
            selectedItems.push(selectedFlowerGardenData);

            const constructorNode = constructorNodeString
                .slice()
                .replace(/\[URL\]/g, imgConstructorUrl)
                .replace(/\[INDEX\]/g, id)
                .replace(/\[value\]/g, category);

            $standContainerNode[0].insertAdjacentHTML(
                "beforeend",
                constructorNode
            );

            handleAddFilterNode(propsForFilterNode);

            const flowerGardenNodeToCalculator = createCalculatorDataNode(
                category,
                selectedFlowerGarden,
                siteNameUa,
                siteNameRu,
                siteNameEng,
                price
            );

            $totalCostNode[0].insertAdjacentHTML(
                "beforebegin",
                flowerGardenNodeToCalculator
            );

            calculate();
        } else if (
            !isStandInFirstContainer &&
            isStandInSecondContainer &&
            !isFlowerGardenInSecondContainer
        ) {
            elementsFlowerGardens[selectedFlowerGarden].classList.add("active");
            selectedItems.push(selectedFlowerGardenData);

            const constructorNode = constructorNodeString
                .slice()
                .replace(/\[URL\]/g, imgConstructorUrl)
                .replace(/\[INDEX\]/g, id)
                .replace(/\[value\]/g, category);

            $standContainer2Node[0].insertAdjacentHTML(
                "beforeend",
                constructorNode
            );

            handleAddFilterNode(propsForFilterNode);

            const flowerGardenNodeToCalculator = createCalculatorDataNode(
                category,
                selectedFlowerGarden,
                siteNameUa,
                siteNameRu,
                siteNameEng,
                price
            );

            $totalCostNode[0].insertAdjacentHTML(
                "beforebegin",
                flowerGardenNodeToCalculator
            );

            calculate();
        } else if (
            !isStandInFirstContainer &&
            isStandInSecondContainer &&
            isFlowerGardenInSecondContainer
        ) {
            for (let i = 0; i < elementsFlowerGardens.length; i++) {
                if (elementsFlowerGardens[i].classList.contains("active")) {
                    elementsFlowerGardens[i].classList.remove("active");

                    let itemsToRemove = getItemsToRemove(
                        secondContainerChildren,
                        $standContainer2Node,
                        {
                            isFlowerGarden: true,
                            mustRemoveElementOnConstructor: true,
                        }
                    );

                    handleRemoveFilterNode(itemsToRemove);
                    handleRemoveCalculatorNode(itemsToRemove);
                    handleRemoveItemsFromSelectedItems(itemsToRemove);
                    calculate();
                }
            }

            elementsFlowerGardens[selectedFlowerGarden].classList.add("active");
            selectedItems.push(selectedFlowerGardenData);

            const constructorNode = constructorNodeString
                .slice()
                .replace(/\[URL\]/g, imgConstructorUrl)
                .replace(/\[INDEX\]/g, id)
                .replace(/\[value\]/g, category);

            $standContainer2Node[0].insertAdjacentHTML(
                "beforeend",
                constructorNode
            );

            handleAddFilterNode(propsForFilterNode);

            const flowerGardenNodeToCalculator = createCalculatorDataNode(
                category,
                selectedFlowerGarden,
                siteNameUa,
                siteNameRu,
                siteNameEng,
                price
            );

            $totalCostNode[0].insertAdjacentHTML(
                "beforebegin",
                flowerGardenNodeToCalculator
            );

            calculate();
        } else if (isStandInFirstContainer && isStandInSecondContainer) {
            $chooseStandMessage[0].classList.add("active");

            handleAddChooseStandMessageNode({
                firstStandIndex,
                secondStandIndex,
                nodeToRender: $chooseStandMessage,
            });

            $chooseStandMessage[0].addEventListener(
                "click",
                (e) => {
                    e.stopPropagation();

                    let userClick = e.target;
                    // Обрана тумба з першого контейнера
                    if (
                        userClick.parentElement.className ===
                        "first-stand__choose"
                    ) {
                        if (!isFlowerGardenInFirstContainer) {
                            elementsFlowerGardens[
                                selectedFlowerGarden
                            ].classList.add("active");
                            selectedItems.push(selectedFlowerGardenData);

                            const constructorNode = constructorNodeString
                                .slice()
                                .replace(/\[URL\]/g, imgConstructorUrl)
                                .replace(/\[INDEX\]/g, id)
                                .replace(/\[value\]/g, category);

                            $standContainerNode[0].insertAdjacentHTML(
                                "beforeend",
                                constructorNode
                            );

                            handleAddFilterNode(propsForFilterNode);

                            const flowerGardenNodeToCalculator =
                                createCalculatorDataNode(
                                    category,
                                    selectedFlowerGarden,
                                    siteNameUa,
                                    siteNameRu,
                                    siteNameEng,
                                    price
                                );

                            $totalCostNode[0].insertAdjacentHTML(
                                "beforebegin",
                                flowerGardenNodeToCalculator
                            );

                            $chooseStandMessage[0].classList.remove("active");

                            calculate();
                        } else if (isFlowerGardenInFirstContainer) {
                            handleInfoAndErrorMessages($flowerGardenError, {
                                isUaLanguage,
                                isRuLanguage,
                                isEngLanguage,
                            });

                            $chooseStandMessage[0].classList.remove("active");
                        }
                    } else if (
                        userClick.parentElement.className ===
                        "second-stand_choose"
                    ) {
                        if (!isFlowerGardenInSecondContainer) {
                            elementsFlowerGardens[
                                selectedFlowerGarden
                            ].classList.add("active");
                            selectedItems.push(selectedFlowerGardenData);

                            const constructorNode = constructorNodeString
                                .slice()
                                .replace(/\[URL\]/g, imgConstructorUrl)
                                .replace(/\[INDEX\]/g, id)
                                .replace(/\[value\]/g, category);

                            $standContainer2Node[0].insertAdjacentHTML(
                                "beforeend",
                                constructorNode
                            );

                            handleAddFilterNode(propsForFilterNode);

                            const flowerGardenNodeToCalculator =
                                createCalculatorDataNode(
                                    category,
                                    selectedFlowerGarden,
                                    siteNameUa,
                                    siteNameRu,
                                    siteNameEng,
                                    price
                                );

                            $totalCostNode[0].insertAdjacentHTML(
                                "beforebegin",
                                flowerGardenNodeToCalculator
                            );

                            $chooseStandMessage[0].classList.remove("active");

                            calculate();
                        } else if (isFlowerGardenInSecondContainer) {
                            handleInfoAndErrorMessages($flowerGardenError, {
                                isUaLanguage,
                                isRuLanguage,
                                isEngLanguage,
                            });

                            $chooseStandMessage[0].classList.remove("active");
                        }
                    }
                },
                { once: true }
            );
        }
    } else if (
        selectedFlowerGarden !== -1 &&
        userClick.className === "field__hide-element-button"
    ) {
        let isFlowerGardenInFirstContainer = false;
        let flowerGardenIndexInFirstContainer = null;
        let isFlowerGardenInSecondContainer = false;
        let flowerGardenIndexInSecondContainer = null;

        const firstContainerChildren = createArrayFromNode($standContainerNode);

        if (firstContainerChildren.length) {
            for (let i = 0; i < firstContainerChildren.length; i++) {
                if (
                    firstContainerChildren[i].dataset.category ===
                    "flowerGarden"
                ) {
                    isFlowerGardenInFirstContainer = true;
                    flowerGardenIndexInFirstContainer =
                        +firstContainerChildren[i].dataset.itemIndex;
                }
            }
        }

        const secondContainerChildren =
            createArrayFromNode($standContainer2Node);

        if (secondContainerChildren.length) {
            for (let i = 0; i < secondContainerChildren.length; i++) {
                if (
                    secondContainerChildren[i].dataset.category ===
                    "flowerGarden"
                ) {
                    isFlowerGardenInSecondContainer = true;
                    flowerGardenIndexInSecondContainer =
                        +secondContainerChildren[i].dataset.itemIndex;
                }
            }
        }

        if (
            isFlowerGardenInFirstContainer &&
            !isFlowerGardenInSecondContainer
        ) {
            elementsFlowerGardens[selectedFlowerGarden].classList.remove(
                "active"
            );

            let itemsToRemove = getItemsToRemove(
                firstContainerChildren,
                $standContainerNode,
                {
                    isFlowerGarden: true,
                    mustRemoveElementOnConstructor: true,
                }
            );

            handleRemoveFilterNode(itemsToRemove);
            handleRemoveCalculatorNode(itemsToRemove);
            handleRemoveItemsFromSelectedItems(itemsToRemove);
            calculate();
        } else if (
            !isFlowerGardenInFirstContainer &&
            isFlowerGardenInSecondContainer
        ) {
            elementsFlowerGardens[selectedFlowerGarden].classList.remove(
                "active"
            );

            let itemsToRemove = getItemsToRemove(
                secondContainerChildren,
                $standContainer2Node,
                {
                    isFlowerGarden: true,
                    mustRemoveElementOnConstructor: true,
                }
            );

            handleRemoveFilterNode(itemsToRemove);
            handleRemoveCalculatorNode(itemsToRemove);
            handleRemoveItemsFromSelectedItems(itemsToRemove);
            calculate();
        } else if (
            isFlowerGardenInFirstContainer &&
            isFlowerGardenInSecondContainer
        ) {
            if (
                flowerGardenIndexInFirstContainer ===
                flowerGardenIndexInSecondContainer
            ) {
                let itemsToRemove = getItemsToRemove(
                    firstContainerChildren,
                    $standContainerNode,
                    {
                        isFlowerGarden: true,
                        mustRemoveElementOnConstructor: true,
                    }
                );

                handleRemoveFilterNode(itemsToRemove);
                handleRemoveCalculatorNode(itemsToRemove);
                handleRemoveItemsFromSelectedItems(itemsToRemove);
                calculate();
            } else if (
                flowerGardenIndexInFirstContainer !==
                    flowerGardenIndexInSecondContainer &&
                selectedFlowerGarden === flowerGardenIndexInFirstContainer
            ) {
                elementsFlowerGardens[selectedFlowerGarden].classList.remove(
                    "active"
                );

                let itemsToRemove = getItemsToRemove(
                    firstContainerChildren,
                    $standContainerNode,
                    {
                        isFlowerGarden: true,
                        mustRemoveElementOnConstructor: true,
                    }
                );

                handleRemoveFilterNode(itemsToRemove);
                handleRemoveCalculatorNode(itemsToRemove);
                handleRemoveItemsFromSelectedItems(itemsToRemove);
                calculate();
            } else if (
                flowerGardenIndexInFirstContainer !==
                    flowerGardenIndexInSecondContainer &&
                selectedFlowerGarden === flowerGardenIndexInSecondContainer
            ) {
                elementsFlowerGardens[selectedFlowerGarden].classList.remove(
                    "active"
                );

                let itemsToRemove = getItemsToRemove(
                    secondContainerChildren,
                    $standContainer2Node,
                    {
                        isFlowerGarden: true,
                        mustRemoveElementOnConstructor: true,
                    }
                );

                handleRemoveFilterNode(itemsToRemove);
                handleRemoveCalculatorNode(itemsToRemove);
                handleRemoveItemsFromSelectedItems(itemsToRemove);
                calculate();
            }
        }
    }
});

/**
 * Блок для обробки елементів оформлення стелли
 * Section for handle stele design elements
 * Блок для обработки элементов оформления стеллы
 */

/**
 * Функція перевіряє чи є дані в інпуті, для того щоб задати стилі лейблу
 * The function checks if there is data in the input in order to set the label styles
 * Функция проверяет есть ли данные в инпуте, для того чтобы задать стили лейблу
 */
const hasInputValue = () => {
    const inputs = $steleDecorationForm[0].getElementsByTagName("input");
    const sendFormInputs = $sendOrderForm[0].getElementsByTagName("input");

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value && inputs[i].value !== "") {
            inputs[i].classList.add("has-value");
        }

        if (!inputs[i].value || inputs[i].value === "") {
            inputs[i].classList.contains("has-value") &&
                inputs[i].classList.remove("has-value");
        }
    }

    for (let i = 0; i < sendFormInputs.length; i++) {
        if (sendFormInputs[i].value && sendFormInputs[i].value !== "") {
            sendFormInputs[i].classList.add("has-value");
        }

        if (!sendFormInputs[i].value || sendFormInputs[i].value === "") {
            sendFormInputs[i].classList.contains("has-value") &&
                sendFormInputs[i].classList.remove("has-value");
        }
    }
};

/**
 * Функція дістає дані з інпутів форми для декорації стелли
 * The function receives data from the form to decorate the stele.
 * Функция извлекает данные из инпутов формы для декорации стеллы.
 * @param {Object} props
 * @returns Object contains data as { steleSurname, steleName, steleSecondName, steleDates }
 */
const getSteleFormInputsData = (props) => {
    const {
        steleSurnameNode,
        steleNameNode,
        steleSecondNameNode,
        steleDatesNode,
    } = props;

    let checkedGender = null;
    let steleSurname = null;
    let steleName = null;
    let steleSecondName = null;
    let steleDates = null;

    // Отримуємо вибрану стать (вибрану радіокнопку)
    checkedGender = document.querySelector(
        'input[name="gender"]:checked'
    )?.value;

    // Знімаємо вибір з радіокнопок,
    // щоб не дублювати зображення обраної статі при вводі/зміні інших інпутів
    const genderInputs = document.querySelectorAll('input[name="gender"]');
    for (let i = 0; i < genderInputs.length; i++) {
        genderInputs[i].checked && (genderInputs[i].checked = false);
    }

    const $steleSurnameInput = document.getElementById(steleSurnameNode);
    steleSurname = $steleSurnameInput.value;
    $steleSurnameInput.value = "";

    const $steleNameInput = document.getElementById(steleNameNode);
    steleName = $steleNameInput.value;
    $steleNameInput.value = "";

    const $steleSecondNameInput = document.getElementById(steleSecondNameNode);
    steleSecondName = $steleSecondNameInput.value;
    $steleSecondNameInput.value = "";

    const $steleDatesInput = document.getElementById(steleDatesNode);
    steleDates = $steleDatesInput.value;
    $steleDatesInput.value = "";

    hasInputValue();

    return {
        checkedGender,
        steleSurname,
        steleName,
        steleSecondName,
        steleDates,
    };
};

/**
 * Функція для створення вузлів написів для стелли
 * Function for creating lettering nodes for the stele
 * Функция для создания узлов надписей для стеллы
 * @param {Object} props
 * @returns
 */
const createLetteringsForSteles = (props) => {
    const {
        checkedGender,
        steleSurname,
        steleName,
        steleSecondName,
        steleDates,
        steleEpitaph,
        steleCross,
        steleFlower,
        steleCandle,
        steleVingette,
    } = props;

    let letteringStellaGenderImg = null;
    let letteringStellaSurname = null;
    let letteringStellaName = null;
    let letteringStellaSecondName = null;
    let letteringStellaDates = null;
    let letteringStellaEpitaph = null;
    let letteringStellaCross = null;
    let letteringStellaFlower = null;
    let letteringStellaCandle = null;
    let letteringStellaVengette = null;

    let letteringString = `<div class="stella-lettering" data-stella-lettering="prefix" data-listener="false">
                                <p class="stella-lettering__data">value</p>
                                <img src="./img/icons/close.svg" class="stella-lettering__remove" />

                                <div class='resizer top-left'></div>
                                <div class='resizer top-right'></div>
                                <div class='resizer bottom-left'></div>
                                <div class='resizer bottom-right'></div>
                           </div>`;

    checkedGender === "male" &&
        (letteringStellaGenderImg = letteringString
            .slice()
            .replace(
                "value",
                '<img src="./img/icons/man.png" class="stella-lettering__gender" />'
            )
            .replace("prefix", "gender"));

    checkedGender === "female" &&
        (letteringStellaGenderImg = letteringString
            .slice()
            .replace(
                "value",
                '<img src="./img/icons/woman.png" class="stella-lettering__gender" />'
            )
            .replace("prefix", "gender"));

    steleSurname &&
        (letteringStellaSurname = letteringString
            .slice()
            .replace("value", steleSurname)
            .replace("prefix", "surname"));

    steleName &&
        (letteringStellaName = letteringString
            .slice()
            .replace("value", steleName)
            .replace("prefix", "name"));

    steleSecondName &&
        (letteringStellaSecondName = letteringString
            .slice()
            .replace("value", steleSecondName)
            .replace("prefix", "secondname"));

    steleDates &&
        (letteringStellaDates = letteringString
            .slice()
            .replace("value", steleDates)
            .replace("prefix", "dates"));

    steleEpitaph &&
        (letteringStellaEpitaph = letteringString
            .slice()
            .replace(
                "value",
                `<img src="./img/items${steleEpitaph}" class="stella-lettering__epitaph" />`
            )
            .replace("prefix", "epitaph"));

    steleCross &&
        (letteringStellaCross = letteringString
            .slice()
            .replace(
                "value",
                `<img src="./img/items${steleCross}" class="stella-lettering__epitaph" />`
            )
            .replace("prefix", "epitaph"));

    steleFlower &&
        (letteringStellaFlower = letteringString
            .slice()
            .replace(
                "value",
                `<img src="./img/items${steleFlower}" class="stella-lettering__epitaph" />`
            )
            .replace("prefix", "epitaph"));

    steleCandle &&
        (letteringStellaCandle = letteringString
            .slice()
            .replace(
                "value",
                `<img src="./img/items${steleCandle}" class="stella-lettering__epitaph" />`
            )
            .replace("prefix", "epitaph"));

    steleVingette &&
        (letteringStellaVengette = letteringString
            .slice()
            .replace(
                "value",
                `<img src="./img/items${steleVingette}" class="stella-lettering__epitaph" />`
            )
            .replace("prefix", "epitaph"));

    return {
        letteringStellaGenderImg,
        letteringStellaSurname,
        letteringStellaName,
        letteringStellaSecondName,
        letteringStellaDates,
        letteringStellaEpitaph,
        letteringStellaCross,
        letteringStellaFlower,
        letteringStellaCandle,
        letteringStellaVengette,
    };
};

/**
 * Функція для рендеру написів для стелли в конструкторі
 * Function for rendering letterings for the stella in the constructor
 * Функция для рендер надписей для стеллы в конструкторе
 * @param {Object} props
 */
const renderStellaLettering = (props) => {
    const {
        letteringStellaGenderImg,
        letteringStellaSurname,
        letteringStellaName,
        letteringStellaSecondName,
        letteringStellaDates,
        letteringStellaEpitaph,
        letteringStellaCross,
        letteringStellaFlower,
        letteringStellaCandle,
        letteringStellaVengette,
        node,
    } = props;

    letteringStellaGenderImg &&
        node[0].insertAdjacentHTML("afterbegin", letteringStellaGenderImg);

    letteringStellaSurname &&
        node[0].insertAdjacentHTML("afterbegin", letteringStellaSurname);

    letteringStellaName &&
        node[0].insertAdjacentHTML("afterbegin", letteringStellaName);

    letteringStellaSecondName &&
        node[0].insertAdjacentHTML("afterbegin", letteringStellaSecondName);

    letteringStellaDates &&
        node[0].insertAdjacentHTML("afterbegin", letteringStellaDates);

    letteringStellaEpitaph &&
        node[0].insertAdjacentHTML("afterbegin", letteringStellaEpitaph);

    letteringStellaCross &&
        node[0].insertAdjacentHTML("afterbegin", letteringStellaCross);

    letteringStellaFlower &&
        node[0].insertAdjacentHTML("afterbegin", letteringStellaFlower);

    letteringStellaCandle &&
        node[0].insertAdjacentHTML("afterbegin", letteringStellaCandle);

    letteringStellaVengette &&
        node[0].insertAdjacentHTML("afterbegin", letteringStellaVengette);
};

let letteringPos1 = 0;
let letteringPos2 = 0;
let letteringPos3 = 0;
let letteringPos4 = 0;

let letteringTouchPos1 = null;
let letteringTouchPos2 = null;
let letteringTouchPos3 = null;
let letteringTouchPos4 = null;

/**
 * Функція для переміщення написів стелли (за допомогою миші)
 * Function to move the letterings of the stele (using the mouse)
 * Функция для перемещения надписей стеллы (при помощи мыши)
 * @param {Event} e
 * @param {HTMLNode} currentIterableElement
 */
const handleDragLetterings = (e, currentIterableElement) => {
    e = e || window.event;
    e.preventDefault();

    const closeDragElement = () => {
        document.onmouseup = null;
        document.onmousemove = null;
    };

    const elementMouseDrag = (e) => {
        e = e || window.event;
        e.preventDefault();

        letteringPos1 = letteringPos3 - e.clientX;
        letteringPos2 = letteringPos4 - e.clientY;
        letteringPos3 = e.clientX;
        letteringPos4 = e.clientY;

        currentIterableElement.style.top =
            currentIterableElement.offsetTop - letteringPos2 + "px";
        currentIterableElement.style.left =
            currentIterableElement.offsetLeft - letteringPos1 + "px";
    };

    letteringPos3 = e.clientX;
    letteringPos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementMouseDrag;
};

/**
 * Функція для переміщення написів стелли (для сенсорного екрану)
 * Function to move the letterings of the stele (for touchscreen)
 * Функция для перемещения надписей стеллы (для сенсорного экрана)
 * @param {Event} e
 * @param {HTMLNode} currentIterableElement
 */
const handleTouchDragLetterings = (e, currentIterableElement) => {
    e = e || window.event;
    // e.preventDefault();

    const closeDragElement = () => {
        document.ontouchend = null;
        document.ontouchmove = null;
    };

    const elementDrag = (e) => {
        e = e || window.event;
        // e.preventDefault();

        letteringTouchPos1 = letteringTouchPos3 - e.touches[0].clientX;
        letteringTouchPos2 = letteringTouchPos4 - e.touches[0].clientY;
        letteringTouchPos3 = e.touches[0].clientX;
        letteringTouchPos4 = e.touches[0].clientY;
        currentIterableElement.style.top =
            currentIterableElement.offsetTop - letteringTouchPos2 + "px";
        currentIterableElement.style.left =
            currentIterableElement.offsetLeft - letteringTouchPos1 + "px";
    };

    letteringTouchPos3 = e.touches[0].clientX;
    letteringTouchPos4 = e.touches.clientY;
    document.ontouchend = closeDragElement;
    document.ontouchmove = elementDrag;
};

/**
 * Функція для зміни розмірів написів стелли
 * Function for resizing stele letterings
 * Функция для изменения размеров надписей стеллы
 * @param {HTMLNode} node
 * @param {Event} e
 */
const makeResizableElement = (node, e) => {
    let startElementWidth = 0;
    let startElementHeight = 0;
    let clientX = 0;
    let clientY = 0;
    let startMouseX = 0;
    let startMouseY = 0;
    let elementForScale = null;

    const children = Array.from(node.children);

    for (let i = 0; i < children.length; i++) {
        const currentResizer = children[i];

        currentResizer.className === "stella-lettering__data" &&
            (elementForScale = currentResizer);

        if (currentResizer.className.includes("resizer")) {
            currentResizer.addEventListener("mousedown", function (e) {
                e.preventDefault();

                startElementWidth = parseFloat(
                    getComputedStyle(node, null)
                        .getPropertyValue("width")
                        .replace("px", "")
                );
                startElementHeight = parseFloat(
                    getComputedStyle(node, null)
                        .getPropertyValue("height")
                        .replace("px", "")
                );
                clientX = node.getBoundingClientRect().left;
                clientY = node.getBoundingClientRect().top;
                startMouseX = e.clientX;
                startMouseY = e.clientY;

                document.addEventListener("mousemove", resize);
                document.addEventListener("mouseup", stopResize);
            });
        }

        function resize(e) {
            if (currentResizer.classList.contains("bottom-right")) {
                const width = startElementWidth + (e.clientX - startMouseX);
                const height = startElementHeight + (e.clientY - startMouseY);
                node.style.width = width + "px";
                node.style.height = height + "px";
                const scaleIndex = width - startElementWidth;
                elementForScale.style.transform = `scale(${100 + scaleIndex}%)`;
            } else if (currentResizer.classList.contains("bottom-left")) {
                const width = startElementWidth - (e.clientX - startMouseX);
                const height = startElementHeight + (e.clientY - startMouseY);
                node.style.height = height + "px";
                node.style.width = width + "px";
                const scaleIndex = width - startElementWidth;
                elementForScale.style.transform = `scale(${100 + scaleIndex}%)`;
            } else if (currentResizer.classList.contains("top-right")) {
                const width = startElementWidth + (e.pageX - startMouseX);
                const height = startElementHeight - (e.pageY - startMouseY);
                node.style.width = width + "px";
                node.style.height = height + "px";
                const scaleIndex = width - startElementWidth;
                elementForScale.style.transform = `scale(${100 + scaleIndex}%)`;
            } else if (currentResizer.classList.contains("top-left")) {
                const width = startElementWidth - (e.pageX - startMouseX);
                const height = startElementHeight - (e.pageY - startMouseY);
                node.style.width = width + "px";
                node.style.height = height + "px";
                const scaleIndex = width - startElementWidth;
                elementForScale.style.transform = `scale(${100 + scaleIndex}%)`;
            }
        }

        function stopResize() {
            document.removeEventListener("mousemove", resize);
        }
    }
};

const makeResizableElementByTouch = (node, e) => {
    let startElementWidth = 0;
    let startElementHeight = 0;
    let clientX = 0;
    let clientY = 0;
    let startMouseX = 0;
    let startMouseY = 0;
    let elementForScale = null;

    const children = Array.from(node.children);

    for (let i = 0; i < children.length; i++) {
        const currentResizer = children[i];

        currentResizer.className === "stella-lettering__data" &&
            (elementForScale = currentResizer);

        if (currentResizer.className.includes("resizer")) {
            currentResizer.addEventListener("touchstart", function (e) {
                e.preventDefault();

                startElementWidth = parseFloat(
                    getComputedStyle(node, null)
                        .getPropertyValue("width")
                        .replace("px", "")
                );
                startElementHeight = parseFloat(
                    getComputedStyle(node, null)
                        .getPropertyValue("height")
                        .replace("px", "")
                );
                clientX = node.getBoundingClientRect().left;
                clientY = node.getBoundingClientRect().top;
                startMouseX = e.touches[0].clientX;
                startMouseY = e.touches[0].clientY;

                document.addEventListener("touchmove", resize);
                document.addEventListener("touchend", stopResize);
            });
        }

        function resize(e) {
            if (currentResizer.classList.contains("bottom-right")) {
                const width =
                    startElementWidth + (e.touches[0].clientX - startMouseX);
                const height =
                    startElementHeight + (e.touches[0].clientY - startMouseY);
                node.style.width = width + "px";
                node.style.height = height + "px";
                const scaleIndex = width - startElementWidth;
                elementForScale.style.transform = `scale(${100 + scaleIndex}%)`;
            } else if (currentResizer.classList.contains("bottom-left")) {
                const width =
                    startElementWidth - (e.touches[0].clientX - startMouseX);
                const height =
                    startElementHeight + (e.touches[0].clientY - startMouseY);
                node.style.height = height + "px";
                node.style.width = width + "px";
                const scaleIndex = width - startElementWidth;
                elementForScale.style.transform = `scale(${100 + scaleIndex}%)`;
            } else if (currentResizer.classList.contains("top-right")) {
                const width =
                    startElementWidth + (e.touches[0].pageX - startMouseX);
                const height =
                    startElementHeight - (e.touches[0].pageY - startMouseY);
                node.style.width = width + "px";
                node.style.height = height + "px";
                const scaleIndex = width - startElementWidth;
                elementForScale.style.transform = `scale(${100 + scaleIndex}%)`;
            } else if (currentResizer.classList.contains("top-left")) {
                const width =
                    startElementWidth - (e.touches[0].pageX - startMouseX);
                const height =
                    startElementHeight - (e.touches[0].pageY - startMouseY);
                node.style.width = width + "px";
                node.style.height = height + "px";
                const scaleIndex = width - startElementWidth;
                elementForScale.style.transform = `scale(${100 + scaleIndex}%)`;
            }
        }

        function stopResize() {
            document.removeEventListener("touchmove", resize);
        }
    }
};

/**
 * Функція для обробки події Submit -
 * дістає дані з інпутів, генерує та рендерить відповідні вузли, вішає на них прослуховувачі
 * Function to handle the Submit event -
 * receives data from inputs, creates and renders the nodes, add listeners on them
 * Функция для обработки события Submit -
 * получает данные из инпутов, генерирует и рендерит соответствующие узлы, вешает на них слушатели
 * @param {Event} e
 */
const handleSubmitSteleForm = (e) => {
    e.preventDefault();

    // Дістаємо дані із заповнених інпутів
    const {
        checkedGender,
        steleSurname,
        steleName,
        steleSecondName,
        steleDates,
    } = getSteleFormInputsData({
        steleSurnameNode: "steleSurname",
        steleNameNode: "steleName",
        steleSecondNameNode: "steleSecondName",
        steleDatesNode: "steleDates",
    });

    // Генеруємо дані для відображення на стеллі
    const {
        letteringStellaGenderImg,
        letteringStellaSurname,
        letteringStellaName,
        letteringStellaSecondName,
        letteringStellaDates,
    } = createLetteringsForSteles({
        checkedGender,
        steleSurname,
        steleName,
        steleSecondName,
        steleDates,
    });

    // Рендеримо надписи введені користувачем
    renderStellaLettering({
        letteringStellaGenderImg,
        letteringStellaSurname,
        letteringStellaName,
        letteringStellaSecondName,
        letteringStellaDates,
        node: $draggableElementsNode,
    });

    const draggableElementsChildren = createArrayFromNode(
        $draggableElementsNode
    );

    for (let i = 0; i < draggableElementsChildren.length; i++) {
        if (
            draggableElementsChildren[i].dataset.stellaLettering === "gender" ||
            draggableElementsChildren[i].dataset.stellaLettering ===
                "surname" ||
            draggableElementsChildren[i].dataset.stellaLettering === "name" ||
            draggableElementsChildren[i].dataset.stellaLettering ===
                "secondname" ||
            draggableElementsChildren[i].dataset.stellaLettering === "dates"
        ) {
            if (draggableElementsChildren[i].dataset.listener === "true") {
                draggableElementsChildren[i].removeEventListener(
                    "mousedown",
                    handleDragLetterings
                );
                draggableElementsChildren[i].removeEventListener(
                    "touchstart",
                    handleTouchDragLetterings
                );
                draggableElementsChildren[i].dataset.listener = "false";
            } else if (
                draggableElementsChildren[i].dataset.listener === "false"
            ) {
                draggableElementsChildren[i].addEventListener("mousedown", () =>
                    handleDragLetterings(e, draggableElementsChildren[i])
                );
                draggableElementsChildren[i].addEventListener(
                    "touchstart",
                    (e) =>
                        handleTouchDragLetterings(
                            e,
                            draggableElementsChildren[i]
                        )
                );

                // На посмотреть, - "Надо ли выделять элементы при рендере"?
                draggableElementsChildren[i].classList.add("focus");

                setTimeout(() => {
                    draggableElementsChildren[i].classList.contains("focus") &&
                        draggableElementsChildren[i].classList.remove("focus");
                }, 2000);
                draggableElementsChildren[i].dataset.listener = "true";
            }
        }
    }

    handleInfoAndErrorMessages($stellaLetteringInfoMessage, {
        isUaLanguage,
        isRuLanguage,
        isEngLanguage,
    });

    isFifthStep = true;
    startHelper();
};

$steleDecorationForm[0].onsubmit = handleSubmitSteleForm;

$draggableElementsNode[0].addEventListener("click", (e) => {
    e.stopPropagation();

    let userClickVariant1 = e.target;
    let userClickVariant2 = e.target.parentElement;
    let userClickVariant3 = e.target.parentElement.parentElement;

    if (userClickVariant1.className === "stella-lettering") {
        userClickVariant1.classList.add("active");
        makeResizableElement(userClickVariant1, e);
        makeResizableElementByTouch(userClickVariant1, e);
    } else if (
        userClickVariant1.className === "stella-lettering active" &&
        e.target.className !== "stella-lettering__remove" &&
        !e.target.classList.contains("resizer")
    ) {
        userClickVariant1.classList.remove("active");
    } else if (userClickVariant2.className === "stella-lettering") {
        userClickVariant2.classList.add("active");
        makeResizableElement(userClickVariant2, e);
        makeResizableElementByTouch(userClickVariant2, e);
    } else if (
        userClickVariant2.className === "stella-lettering active" &&
        e.target.className !== "stella-lettering__remove" &&
        !e.target.classList.contains("resizer")
    ) {
        userClickVariant2.classList.remove("active");
    } else if (userClickVariant3.className === "stella-lettering") {
        userClickVariant3.classList.add("active");
        makeResizableElement(userClickVariant3, e);
        makeResizableElementByTouch(userClickVariant3, e);
    } else if (
        userClickVariant3.className === "stella-lettering active" &&
        e.target.className !== "stella-lettering__remove" &&
        !e.target.classList.contains("resizer")
    ) {
        userClickVariant3.classList.remove("active");
    } else if (e.target.className === "stella-lettering__remove") {
        const draggableElementsChildren = createArrayFromNode(
            $draggableElementsNode
        );
        let itemToRemove = draggableElementsChildren.indexOf(
            e.target.parentNode
        );
        itemToRemove !== -1 &&
            $draggableElementsNode[0].removeChild(
                $draggableElementsNode[0].children[itemToRemove]
            );
    }
});

$draggableElementsNode[0].addEventListener("touchstart", (e) => {
    e.stopPropagation();

    if (e.target.className === "stella-lettering__remove") {
        const draggableElementsChildren = createArrayFromNode(
            $draggableElementsNode
        );
        let itemToRemove = draggableElementsChildren.indexOf(
            e.target.parentNode
        );
        itemToRemove !== -1 &&
            $draggableElementsNode[0].removeChild(
                $draggableElementsNode[0].children[itemToRemove]
            );
    }
});

const createDecorationList = (props) => {
    const { listName } = props;

    const listItem = `<li class="${listName}-item">
            <img src="./img/items[url]" alt="altName" class="${listName}-list__item-img" data-category="[category]" data-item-index="[index]" />
        </li>`;

    if (listName === "epitaph") {
        const epitaphList = Array.from($epitaphListNode.children);

        if (epitaphList.length === 1) {
            const epitaphData = prices
                .filter((el) => el.epitaph)
                .map((el) => el.epitaph)[0];

            for (let i = 0; i < epitaphData.length; i++) {
                const { id, category, imgUrl, titleUa } = epitaphData[i];

                const itemNodeToRender = listItem
                    .slice()
                    .replace(/\[url\]/g, `${imgUrl}`)
                    .replace("altName", `${titleUa}`)
                    .replace(/\[category\]/g, `${category}`)
                    .replace(/\[index\]/g, `${id}`);

                $epitaphListNode.insertAdjacentHTML(
                    "beforeend",
                    itemNodeToRender
                );
            }
        }
    } else if (listName === "cross") {
        const crossList = Array.from($crossListNode.children);

        if (crossList.length === 1) {
            const crosshData = prices
                .filter((el) => el.cross)
                .map((el) => el.cross)[0];

            for (let i = 0; i < crosshData.length; i++) {
                const { id, category, imgUrl, titleUa } = crosshData[i];

                const itemNodeToRender = listItem
                    .slice()
                    .replace(/\[url\]/g, `${imgUrl}`)
                    .replace("altName", `${titleUa}`)
                    .replace(/\[category\]/g, `${category}`)
                    .replace(/\[index\]/g, `${id}`);

                $crossListNode.insertAdjacentHTML(
                    "beforeend",
                    itemNodeToRender
                );
            }
        }
    } else if (listName === "flower") {
        const flowerList = Array.from($flowerListNode.children);

        if (flowerList.length === 1) {
            const flowerData = prices
                .filter((el) => el.flower)
                .map((el) => el.flower)[0];

            for (let i = 0; i < flowerData.length; i++) {
                const { id, category, imgUrl, titleUa } = flowerData[i];

                const itemNodeToRender = listItem
                    .slice()
                    .replace(/\[url\]/g, `${imgUrl}`)
                    .replace("altName", `${titleUa}`)
                    .replace(/\[category\]/g, `${category}`)
                    .replace(/\[index\]/g, `${id}`);

                $flowerListNode.insertAdjacentHTML(
                    "beforeend",
                    itemNodeToRender
                );
            }
        }
    } else if (listName === "candle") {
        const candleList = Array.from($candleListNode.children);

        if (candleList.length === 1) {
            const candleData = prices
                .filter((el) => el.candle)
                .map((el) => el.candle)[0];

            for (let i = 0; i < candleData.length; i++) {
                const { id, category, imgUrl, titleUa } = candleData[i];

                const itemNodeToRender = listItem
                    .slice()
                    .replace(/\[url\]/g, `${imgUrl}`)
                    .replace("altName", `${titleUa}`)
                    .replace(/\[category\]/g, `${category}`)
                    .replace(/\[index\]/g, `${id}`);

                $candleListNode.insertAdjacentHTML(
                    "beforeend",
                    itemNodeToRender
                );
            }
        }
    } else if (listName === "vignette") {
        const vignetteList = Array.from($vignetteListNode.children);

        if (vignetteList.length === 1) {
            const vignetteData = prices
                .filter((el) => el.vignette)
                .map((el) => el.vignette)[0];

            for (let i = 0; i < vignetteData.length; i++) {
                const { id, category, imgUrl, titleUa } = vignetteData[i];

                const itemNodeToRender = listItem
                    .slice()
                    .replace(/\[url\]/g, `${imgUrl}`)
                    .replace("altName", `${titleUa}`)
                    .replace(/\[category\]/g, `${category}`)
                    .replace(/\[index\]/g, `${id}`);

                $vignetteListNode.insertAdjacentHTML(
                    "beforeend",
                    itemNodeToRender
                );
            }
        }
    }
};

const handleList = (props) => {
    const { flag, node, imgArrowDown, imgArrowUp } = props;

    const FIRST_LISTS_ITEMS = [
        {
            arrowImgClass: ".epitaph-list__arrow-down",
            firstItemClass: ".epitaph-item",
        },
        {
            arrowImgClass: ".cross-list__arrow-down",
            firstItemClass: ".cross-item",
        },
        {
            arrowImgClass: ".flower-list__arrow-down",
            firstItemClass: ".flower-item",
        },
        {
            arrowImgClass: ".candle-list__arrow-down",
            firstItemClass: ".candle-item",
        },
        {
            arrowImgClass: ".vignette-list__arrow-down",
            firstItemClass: ".vignette-item",
        },
    ];

    let activeArrowPosition = null;

    if (!flag) {
        const nodeChildren = Array.from(node.children);

        for (let i = 0; i < nodeChildren.length; i++) {
            nodeChildren[i].classList.contains("active")
                ? nodeChildren[i].classList.remove("active")
                : nodeChildren[i].classList.add("active");
        }

        const $listArrowDown = document.querySelectorAll(`${imgArrowDown}`);
        $listArrowDown[0].classList.contains("active") &&
            $listArrowDown[0].classList.remove("active");

        const $listArrowUp = document.querySelectorAll(`${imgArrowUp}`);
        !$listArrowUp[0].classList.contains("active") &&
            $listArrowUp[0].classList.add("active");

        // !INFO! Наполнение данных списков = png изображения
        // под ними (списками) просвечиваются стрелки (черный фон их не скрывает)
        // Задача = скрыть стрелки под активным (открытым) листом

        for (let i = 0; i < FIRST_LISTS_ITEMS.length; i++) {
            const { arrowImgClass } = FIRST_LISTS_ITEMS[i];

            if (arrowImgClass !== imgArrowDown) {
                continue;
            } else if (arrowImgClass === imgArrowDown) {
                activeArrowPosition = i;
            }
        }

        for (let i = activeArrowPosition; i < FIRST_LISTS_ITEMS.length; i++) {
            if (i + 1 < FIRST_LISTS_ITEMS.length) {
                const { firstItemClass } = FIRST_LISTS_ITEMS[i + 1];
                const $arrowElement = document.querySelectorAll(
                    `${firstItemClass}`
                );
                $arrowElement[0].style.display = "none";
            }
        }
    } else if (flag) {
        const nodeChildren = Array.from(node.children);

        for (let i = 0; i < nodeChildren.length; i++) {
            nodeChildren[i].classList.contains("active")
                ? nodeChildren[i].classList.remove("active")
                : nodeChildren[i].classList.add("active");
        }

        const $listArrowUp = document.querySelectorAll(`${imgArrowUp}`);
        $listArrowUp[0].classList.contains("active") &&
            $listArrowUp[0].classList.remove("active");

        const $listArrowDown = document.querySelectorAll(`${imgArrowDown}`);
        !$listArrowDown[0].classList.contains("active") &&
            $listArrowDown[0].classList.add("active");

        // !INFO! Наполнение данных списков = png изображения
        // под ними (списками) просвечиваются стрелки (черный фон их не скрывает)
        // Задача = скрыть стрелки под активным (открытым) листом
        // let activeArrowPosition = null;

        for (let i = 0; i < FIRST_LISTS_ITEMS.length; i++) {
            const { arrowImgClass } = FIRST_LISTS_ITEMS[i];

            if (arrowImgClass !== imgArrowDown) {
                continue;
            } else if (arrowImgClass === imgArrowDown) {
                activeArrowPosition = i;
            }
        }

        for (let i = activeArrowPosition; i < FIRST_LISTS_ITEMS.length; i++) {
            if (i + 1 < FIRST_LISTS_ITEMS.length) {
                const { firstItemClass } = FIRST_LISTS_ITEMS[i + 1];
                const $arrowElement = document.querySelectorAll(
                    `${firstItemClass}`
                );
                $arrowElement[0].style.display = "flex";
            }
        }
    }
};

const handleSteleDecorationLists = (e) => {
    e.stopPropagation();

    let userClickVariant1 = e.target;
    let userClickVariant2 = e.target.parentElement;

    if (
        userClickVariant1.className === "epitaph-item" ||
        userClickVariant2.className === "epitaph-item"
    ) {
        createDecorationList({
            listName: "epitaph",
        });

        handleList({
            flag: false,
            node: $epitaphListNode,
            imgArrowDown: ".epitaph-list__arrow-down",
            imgArrowUp: ".epitaph-list__arrow-up",
        });
    } else if (
        userClickVariant1.className === "epitaph-item active" ||
        userClickVariant2.className === "epitaph-item active"
    ) {
        handleList({
            flag: true,
            node: $epitaphListNode,
            imgArrowDown: ".epitaph-list__arrow-down",
            imgArrowUp: ".epitaph-list__arrow-up",
        });

        const epitaphListUpd = Array.from($epitaphListNode.children);

        if (
            epitaphListUpd.indexOf(userClickVariant2) !== -1 &&
            epitaphListUpd.indexOf(userClickVariant2) !== 0
        ) {
            let indexOfSelectedEpitaph =
                epitaphListUpd.indexOf(userClickVariant2);

            const { imgUrl } = getElementData(
                indexOfSelectedEpitaph - 1,
                "epitaph"
            );

            if (imgUrl) {
                const { letteringStellaEpitaph } = createLetteringsForSteles({
                    steleEpitaph: imgUrl,
                });

                renderStellaLettering({
                    letteringStellaEpitaph,
                    node: $draggableElementsNode,
                });

                $draggableElementsNode[0].children[0].addEventListener(
                    "mousedown",
                    (e) =>
                        handleDragLetterings(
                            e,
                            $draggableElementsNode[0].children[0]
                        )
                );

                $draggableElementsNode[0].children[0].addEventListener(
                    "touchstart",
                    (e) =>
                        handleTouchDragLetterings(
                            e,
                            $draggableElementsNode[0].children[0]
                        )
                );
            }
        }
    }

    if (
        userClickVariant1.className === "cross-item" ||
        userClickVariant2.className === "cross-item"
    ) {
        createDecorationList({
            listName: "cross",
        });

        handleList({
            flag: false,
            node: $crossListNode,
            imgArrowDown: ".cross-list__arrow-down",
            imgArrowUp: ".cross-list__arrow-up",
        });
    } else if (
        userClickVariant1.className === "cross-item active" ||
        userClickVariant2.className === "cross-item active"
    ) {
        handleList({
            flag: true,
            node: $crossListNode,
            imgArrowDown: ".cross-list__arrow-down",
            imgArrowUp: ".cross-list__arrow-up",
        });

        const crossListUpd = Array.from($crossListNode.children);

        if (
            crossListUpd.indexOf(userClickVariant2) !== -1 &&
            crossListUpd.indexOf(userClickVariant2) !== 0
        ) {
            let indexOfSelectedCross = crossListUpd.indexOf(userClickVariant2);

            const { imgUrl } = getElementData(
                indexOfSelectedCross - 1,
                "cross"
            );

            if (imgUrl) {
                const { letteringStellaCross } = createLetteringsForSteles({
                    steleCross: imgUrl,
                });

                renderStellaLettering({
                    letteringStellaCross,
                    node: $draggableElementsNode,
                });

                $draggableElementsNode[0].children[0].addEventListener(
                    "mousedown",
                    (e) =>
                        handleDragLetterings(
                            e,
                            $draggableElementsNode[0].children[0]
                        )
                );

                $draggableElementsNode[0].children[0].addEventListener(
                    "touchstart",
                    (e) =>
                        handleTouchDragLetterings(
                            e,
                            $draggableElementsNode[0].children[0]
                        )
                );
            }
        }
    }

    if (
        userClickVariant1.className === "flower-item" ||
        userClickVariant2.className === "flower-item"
    ) {
        createDecorationList({
            listName: "flower",
        });

        handleList({
            flag: false,
            node: $flowerListNode,
            imgArrowDown: ".flower-list__arrow-down",
            imgArrowUp: ".flower-list__arrow-up",
        });
    } else if (
        userClickVariant1.className === "flower-item active" ||
        userClickVariant2.className === "flower-item active"
    ) {
        handleList({
            flag: true,
            node: $flowerListNode,
            imgArrowDown: ".flower-list__arrow-down",
            imgArrowUp: ".flower-list__arrow-up",
        });

        const flowerListUpd = Array.from($flowerListNode.children);

        if (
            flowerListUpd.indexOf(userClickVariant2) !== -1 &&
            flowerListUpd.indexOf(userClickVariant2) !== 0
        ) {
            let indexOfSelectedFlower =
                flowerListUpd.indexOf(userClickVariant2);

            const { imgUrl } = getElementData(
                indexOfSelectedFlower - 1,
                "flower"
            );

            if (imgUrl) {
                const { letteringStellaFlower } = createLetteringsForSteles({
                    steleFlower: imgUrl,
                });

                renderStellaLettering({
                    letteringStellaFlower,
                    node: $draggableElementsNode,
                });

                $draggableElementsNode[0].children[0].addEventListener(
                    "mousedown",
                    (e) =>
                        handleDragLetterings(
                            e,
                            $draggableElementsNode[0].children[0]
                        )
                );

                $draggableElementsNode[0].children[0].addEventListener(
                    "touchstart",
                    (e) =>
                        handleTouchDragLetterings(
                            e,
                            $draggableElementsNode[0].children[0]
                        )
                );
            }
        }
    }

    if (
        userClickVariant1.className === "candle-item" ||
        userClickVariant2.className === "candle-item"
    ) {
        createDecorationList({
            listName: "candle",
        });

        handleList({
            flag: false,
            node: $candleListNode,
            imgArrowDown: ".candle-list__arrow-down",
            imgArrowUp: ".candle-list__arrow-up",
        });
    } else if (
        userClickVariant1.className === "candle-item active" ||
        userClickVariant2.className === "candle-item active"
    ) {
        handleList({
            flag: true,
            node: $candleListNode,
            imgArrowDown: ".candle-list__arrow-down",
            imgArrowUp: ".candle-list__arrow-up",
        });

        const candleListUpd = Array.from($candleListNode.children);

        if (
            candleListUpd.indexOf(userClickVariant2) !== -1 &&
            candleListUpd.indexOf(userClickVariant2) !== 0
        ) {
            let indexOfSelectedCandle =
                candleListUpd.indexOf(userClickVariant2);

            const { imgUrl } = getElementData(
                indexOfSelectedCandle - 1,
                "candle"
            );

            if (imgUrl) {
                const { letteringStellaCandle } = createLetteringsForSteles({
                    steleCandle: imgUrl,
                });

                renderStellaLettering({
                    letteringStellaCandle,
                    node: $draggableElementsNode,
                });

                $draggableElementsNode[0].children[0].addEventListener(
                    "mousedown",
                    (e) =>
                        handleDragLetterings(
                            e,
                            $draggableElementsNode[0].children[0]
                        )
                );

                $draggableElementsNode[0].children[0].addEventListener(
                    "touchstart",
                    (e) =>
                        handleTouchDragLetterings(
                            e,
                            $draggableElementsNode[0].children[0]
                        )
                );
            }
        }
    }

    if (
        userClickVariant1.className === "vignette-item" ||
        userClickVariant2.className === "vignette-item"
    ) {
        createDecorationList({
            listName: "vignette",
        });

        handleList({
            flag: false,
            node: $vignetteListNode,
            imgArrowDown: ".vignette-list__arrow-down",
            imgArrowUp: ".vignette-list__arrow-up",
        });
    } else if (
        userClickVariant1.className === "vignette-item active" ||
        userClickVariant2.className === "vignette-item active"
    ) {
        handleList({
            flag: true,
            node: $vignetteListNode,
            imgArrowDown: ".vignette-list__arrow-down",
            imgArrowUp: ".vignette-list__arrow-up",
        });

        const vignetteListUpd = Array.from($vignetteListNode.children);

        if (
            vignetteListUpd.indexOf(userClickVariant2) !== -1 &&
            vignetteListUpd.indexOf(userClickVariant2) !== 0
        ) {
            let indexOfSelectedVingette =
                vignetteListUpd.indexOf(userClickVariant2);

            const { imgUrl } = getElementData(
                indexOfSelectedVingette - 1,
                "vignette"
            );

            if (imgUrl) {
                const { letteringStellaVengette } = createLetteringsForSteles({
                    steleVingette: imgUrl,
                });

                renderStellaLettering({
                    letteringStellaVengette,
                    node: $draggableElementsNode,
                });

                $draggableElementsNode[0].children[0].addEventListener(
                    "mousedown",
                    (e) =>
                        handleDragLetterings(
                            e,
                            $draggableElementsNode[0].children[0]
                        )
                );

                $draggableElementsNode[0].children[0].addEventListener(
                    "touchstart",
                    (e) =>
                        handleTouchDragLetterings(
                            e,
                            $draggableElementsNode[0].children[0]
                        )
                );
            }
        }
    }
};

$steleDecorationForm[0].addEventListener("click", (e) => {
    handleSteleDecorationLists(e);
});

/**
 * Обробник елементів блоку "Бордюри"
 * Handler of elements "Borders"
 * Обработчик элементов блока "Бордюры"
 */
elementsBordersNode[0].addEventListener("click", (e) => {
    e.stopPropagation();

    let userClick = e.target;
    const elementsBorders = createArrayFromNode(elementsBordersNode);
    let selectedBorder = elementsBorders.indexOf(userClick.parentNode);
    const landElementsChildren = createArrayFromNode($landElements);

    if (
        selectedBorder !== -1 &&
        userClick.className !== "field__hide-element-button"
    ) {
        !landPlotNode[0].classList.contains("hide") &&
            landPlotNode[0].classList.add("hide");

        for (let i = 0; i < elementsBorders.length; i++) {
            if (elementsBorders[i].classList.contains("active")) {
                elementsBorders[i].classList.remove("active");

                let itemsToRemove = getItemsToRemove(
                    landElementsChildren,
                    $landElements,
                    {
                        isStand: false,
                        isMonument: false,
                        isCurb: true,
                        mustRemoveElementOnConstructor: true,
                    }
                );

                handleRemoveFilterNode(itemsToRemove);
                handleRemoveCalculatorNode(itemsToRemove);
                handleRemoveItemsFromSelectedItems(itemsToRemove);
                calculate();
            }
        }

        elementsBorders[selectedBorder].classList.add("active");

        let selectedBorderElement = getElementData(selectedBorder, "curbs");
        const {
            imgUrl,
            imgConstructorUrl,
            siteNameUa,
            siteNameRu,
            siteNameEng,
            category,
            price,
        } = selectedBorderElement;

        const { totalCurbsCost } = handleCurbsPcsAndCost(selectedBorder, price);
        selectedBorderElement["totalElementCost"] = totalCurbsCost;
        selectedItems.push(selectedBorderElement);

        let propsForFilterNode = {};
        propsForFilterNode["category"] = category;
        propsForFilterNode["selectedItemIndex"] = selectedBorder;
        propsForFilterNode["imgUrl"] = imgUrl;
        propsForFilterNode["siteNameUa"] = siteNameUa;
        propsForFilterNode["siteNameRu"] = siteNameRu;
        propsForFilterNode["siteNameEng"] = siteNameEng;

        let imgBorderOnConstructor = `<img src="./img/items${imgConstructorUrl}" 
                                        alt="${siteNameUa}" 
                                        class="field__land-border-img"
                                        data-category="${category}"
                                        data-item-index="${selectedBorder}"
                                    />`;

        $landElements[0].insertAdjacentHTML(
            "afterbegin",
            imgBorderOnConstructor
        );

        const curbNodeToCalculator = createCalculatorDataNode(
            category,
            selectedBorder,
            siteNameUa,
            siteNameRu,
            siteNameEng,
            price
        );

        handleAddFilterNode(propsForFilterNode);

        $totalCostNode[0].insertAdjacentHTML(
            "beforebegin",
            curbNodeToCalculator
        );

        calculate();
    } else if (
        selectedBorder !== -1 &&
        userClick.className === "field__hide-element-button"
    ) {
        elementsBorders[selectedBorder].classList.remove("active");

        let isSocleSelected = false;

        for (let i = 0; i < selectedItems.length; i++) {
            const { category } = selectedItems[i];
            category === "socle" && (isSocleSelected = true);
        }

        !isSocleSelected &&
            landPlotNode[0].classList.contains("hide") &&
            landPlotNode[0].classList.remove("hide");

        let itemsToRemove = getItemsToRemove(
            landElementsChildren,
            $landElements,
            {
                isStand: false,
                isMonument: false,
                isCurb: true,
                mustRemoveElementOnConstructor: true,
            }
        );

        handleRemoveFilterNode(itemsToRemove);
        handleRemoveCalculatorNode(itemsToRemove);
        handleRemoveItemsFromSelectedItems(itemsToRemove);
        calculate();
    }

    isUaLanguage && setLanguage(document, "ua");
    isRuLanguage && setLanguage(document, "ru");
    isEngLanguage && setLanguage(document, "eng");
});

/**
 * Обробник елементів блоку "Цоколі"
 * Handler of elements "Socles"
 * Обработчик элементов блока "Цоколи"
 */
elementsValuesSocleNode[0].addEventListener("click", (e) => {
    e.stopPropagation();

    let userClick = e.target;
    const elementsSocles = createArrayFromNode(elementsValuesSocleNode);
    let selectedSocle = elementsSocles.indexOf(userClick.parentNode);
    const landElementsChildren = createArrayFromNode($landElements);

    if (
        selectedSocle !== -1 &&
        userClick.className !== "field__hide-element-button"
    ) {
        for (let i = 0; i < elementsSocles.length; i++) {
            if (elementsSocles[i].classList.contains("active")) {
                elementsSocles[i].classList.remove("active");

                let itemsToRemove = getItemsToRemove(
                    landElementsChildren,
                    $landElements,
                    {
                        isStand: false,
                        isMonument: false,
                        isCurb: false,
                        isSocle: true,
                        mustRemoveElementOnConstructor: true,
                    }
                );

                landPlotNode[0].classList.contains("hide") &&
                    landPlotNode[0].classList.remove("hide");

                handleRemoveFilterNode(itemsToRemove);
                handleRemoveCalculatorNode(itemsToRemove);
                handleRemoveItemsFromSelectedItems(itemsToRemove);
                calculate();
            }
        }

        elementsSocles[selectedSocle].classList.add("active");

        let selectedSocleElement = getElementData(selectedSocle, "socle");
        const {
            id,
            imgUrl,
            imgConstructorUrl,
            siteNameUa,
            siteNameRu,
            siteNameEng,
            category,
            price,
        } = selectedSocleElement;

        const totalSocleCost = handleSocleCost(price);
        let flag = id === 0 || id === 1;

        flag
            ? (selectedSocleElement["totalElementCost"] = totalSocleCost)
            : (selectedSocleElement["totalElementCost"] = price);
        selectedItems.push(selectedSocleElement);

        let propsForFilterNode = {};
        propsForFilterNode["category"] = category;
        propsForFilterNode["selectedItemIndex"] = selectedSocle;
        propsForFilterNode["imgUrl"] = imgUrl;
        propsForFilterNode["siteNameUa"] = siteNameUa;
        propsForFilterNode["siteNameRu"] = siteNameRu;
        propsForFilterNode["siteNameEng"] = siteNameEng;

        let imgSocleOnConstructor = `<img src="./img/items${imgConstructorUrl}" 
                                        alt="${siteNameUa}" 
                                        class="field__land-socle-img"
                                        data-category="${category}"
                                        data-item-index="${selectedSocle}"
                                    />`;

        $landElements[0].insertAdjacentHTML(
            "afterbegin",
            imgSocleOnConstructor
        );

        landPlotNode[0].classList.add("hide");

        const socleNodeToCalculator = createCalculatorDataNode(
            category,
            selectedSocle,
            siteNameUa,
            siteNameRu,
            siteNameEng,
            price,
            id
        );

        handleAddFilterNode(propsForFilterNode);

        $totalCostNode[0].insertAdjacentHTML(
            "beforebegin",
            socleNodeToCalculator
        );

        calculate();
    } else if (
        selectedSocle !== -1 &&
        userClick.className === "field__hide-element-button"
    ) {
        elementsSocles[selectedSocle].classList.remove("active");
        const elementsBeautification = createArrayFromNode(elementsBeautyNode);

        for (let i = 0; i < elementsBeautification.length; i++) {
            elementsBeautification[i].classList.contains("active") &&
                elementsBeautification[i].classList.remove("active");
        }

        let itemsToRemove = getItemsToRemove(
            landElementsChildren,
            $landElements,
            {
                isStand: false,
                isMonument: false,
                isCurb: false,
                isSocle: true,
                isBeauty: true,
                mustRemoveElementOnConstructor: true,
            }
        );

        let isCurbsSelected = false;

        for (let i = 0; i < selectedItems.length; i++) {
            const { category } = selectedItems[i];
            category === "curbs" && (isCurbsSelected = true);
        }

        !isCurbsSelected &&
            landPlotNode[0].classList.contains("hide") &&
            landPlotNode[0].classList.remove("hide");

        handleRemoveFilterNode(itemsToRemove);
        handleRemoveCalculatorNode(itemsToRemove);
        handleRemoveItemsFromSelectedItems(itemsToRemove);

        calculate();
    }

    isUaLanguage && setLanguage(document, "ua");
    isRuLanguage && setLanguage(document, "ru");
    isEngLanguage && setLanguage(document, "eng");
});

/**
 * Обробник елементів блоку "Благоустрій"
 * Handler of elements "Beautification"
 * Обработчик элементов блока "Благоустройство"
 */
elementsBeautyNode[0].addEventListener("click", (e) => {
    e.stopPropagation();

    let userClick = e.target;
    const elementsBeautification = createArrayFromNode(elementsBeautyNode);
    let selectedBeautyElement = elementsBeautification.indexOf(
        userClick.parentNode
    );
    const landElementsChildren = createArrayFromNode($landElements);

    let isTileSelected = userClick?.dataset?.category === "beauty";
    let isPupSelected = userClick?.dataset?.category === "pup";
    let isRubbleSelected = userClick?.dataset?.category === "rubble";

    if (
        selectedBeautyElement !== -1 &&
        userClick.className !== "field__hide-element-button"
    ) {
        let isSocleSelected = false;
        let isCurbsSelected = false;

        for (let i = 0; i < landElementsChildren.length; i++) {
            landElementsChildren[i].dataset.category === "socle" &&
                (isSocleSelected = true);

            landElementsChildren[i].dataset.category === "curbs" &&
                (isCurbsSelected = true);
        }

        if (isTileSelected || isPupSelected) {
            for (let i = 0; i < elementsBeautification.length; i++) {
                if (
                    elementsBeautification[i].classList.contains("active") &&
                    (elementsBeautification[i].children[1].dataset.category ===
                        "beauty" ||
                        elementsBeautification[i].children[1].dataset
                            .category === "pup")
                ) {
                    elementsBeautification[i].classList.remove("active");

                    let itemsToRemove = getItemsToRemove(
                        landElementsChildren,
                        $landElements,
                        {
                            isStand: false,
                            isMonument: false,
                            isCurb: false,
                            isSocle: false,
                            isBeauty: true,
                            mustRemoveElementOnConstructor: true,
                        }
                    );

                    handleRemoveFilterNode(itemsToRemove);
                    handleRemoveCalculatorNode(itemsToRemove);
                    handleRemoveItemsFromSelectedItems(itemsToRemove);
                    calculate();
                }
            }
        } else if (isRubbleSelected) {
            for (let i = 0; i < elementsBeautification.length; i++) {
                if (
                    elementsBeautification[i].classList.contains("active") &&
                    elementsBeautification[i].children[1].dataset.category ===
                        "rubble"
                ) {
                    elementsBeautification[i].classList.remove("active");
                    let itemsToRemove = getItemsToRemove(
                        landElementsChildren,
                        $landElements,
                        {
                            isStand: false,
                            isMonument: false,
                            isCurb: false,
                            isSocle: false,
                            isBeauty: false,
                            isRubble: true,
                            mustRemoveElementOnConstructor: true,
                        },
                        selectedBeautyElement
                    );
                    handleRemoveFilterNode(itemsToRemove);
                    handleRemoveCalculatorNode(itemsToRemove);
                    handleRemoveItemsFromSelectedItems(itemsToRemove);
                    calculate();
                }
            }
        }

        //TODO: Не выбран цоколь = нельзя класть плитку, можно ПУП и можно щебень
        if (!isSocleSelected && isTileSelected) {
            handleInfoAndErrorMessages($tileErrorNode, {
                isUaLanguage,
                isRuLanguage,
                isEngLanguage,
            });

            // Выбран цоколь = можно класть плитку, нельзя ПУП и нельзя щебень
        } else if (isSocleSelected && isTileSelected) {
            elementsBeautification[selectedBeautyElement].classList.add(
                "active"
            );

            let selectedBeautyElementData = getElementData(
                selectedBeautyElement,
                "beauty"
            );
            const {
                imgUrl,
                imgConstructorUrl,
                siteNameUa,
                siteNameRu,
                siteNameEng,
                category,
                price,
            } = selectedBeautyElementData;

            const totalBeutyElementCost = handleSocleCost(price);

            selectedBeautyElementData["totalElementCost"] =
                totalBeutyElementCost;
            selectedItems.push(selectedBeautyElementData);

            let propsForFilterNode = {};
            propsForFilterNode["category"] = category;
            propsForFilterNode["selectedItemIndex"] = selectedBeautyElement;
            propsForFilterNode["imgUrl"] = imgUrl;
            propsForFilterNode["siteNameUa"] = siteNameUa;
            propsForFilterNode["siteNameRu"] = siteNameRu;
            propsForFilterNode["siteNameEng"] = siteNameEng;

            let imgBeautyOnConstructor = `<img src="./img/items${imgConstructorUrl}" 
                                        alt="${siteNameUa}" 
                                        class="field__land-beauty-img"
                                        data-category="${category}"
                                        data-item-index="${selectedBeautyElement}"
                                    />`;

            $landElements[0].insertAdjacentHTML(
                "afterbegin",
                imgBeautyOnConstructor
            );

            const beautyNodeToCalculator = createCalculatorDataNode(
                category,
                selectedBeautyElement,
                siteNameUa,
                siteNameRu,
                siteNameEng,
                price
            );

            handleAddFilterNode(propsForFilterNode);

            $totalCostNode[0].insertAdjacentHTML(
                "beforebegin",
                beautyNodeToCalculator
            );

            calculate();
        } else if (isSocleSelected && isPupSelected) {
            handleInfoAndErrorMessages($soclePupError, {
                isUaLanguage,
                isRuLanguage,
                isEngLanguage,
            });
        } else if (!isSocleSelected && !isTileSelected && isPupSelected) {
            let selectedBeautyElementData = getElementData(
                selectedBeautyElement,
                "beauty"
            );

            const {
                imgUrl,
                imgConstructorUrl,
                siteNameUa,
                siteNameRu,
                siteNameEng,
                category,
                type,
                price,
            } = selectedBeautyElementData;

            // Получить актуальные данные земельного участка
            const { width: landPlotWidth, length: landPlotHeight } =
                handleLandPlotSizes();

            let pupWidth = null;

            type === "single"
                ? (pupWidth = (120 / landPlotWidth) * 93)
                : (pupWidth = (180 / landPlotWidth) * 93);

            // Если ширина ПУП меньше = 100% ширины участка, только тогда мы ее отрисовываем
            if (pupWidth <= 100) {
                elementsBeautification[selectedBeautyElement].classList.add(
                    "active"
                );

                selectedItems.push(selectedBeautyElementData);

                let propsForFilterNode = {};
                propsForFilterNode["category"] = category;
                propsForFilterNode["selectedItemIndex"] = selectedBeautyElement;
                propsForFilterNode["imgUrl"] = imgUrl;
                propsForFilterNode["siteNameUa"] = siteNameUa;
                propsForFilterNode["siteNameRu"] = siteNameRu;
                propsForFilterNode["siteNameEng"] = siteNameEng;

                let imgBeautyOnConstructor = `<img src="./img/items${imgConstructorUrl}" 
                                        alt="${siteNameUa}" 
                                        class="field__land-beauty-img"
                                        data-category="${category}"
                                        data-item-index="${selectedBeautyElement}"
                                    />`;

                $landElements[0].insertAdjacentHTML(
                    "afterbegin",
                    imgBeautyOnConstructor
                );

                const beautyNodeToCalculator = createCalculatorDataNode(
                    category,
                    selectedBeautyElement,
                    siteNameUa,
                    siteNameRu,
                    siteNameEng,
                    price
                );

                handleAddFilterNode(propsForFilterNode);

                $totalCostNode[0].insertAdjacentHTML(
                    "beforebegin",
                    beautyNodeToCalculator
                );

                const windowWidth = window.innerWidth;

                // Найти ПУП и задать ей стили
                const updLandElements = Array.from($landElements[0].children);

                for (let i = 0; i < updLandElements.length; i++) {
                    // !ВАЖНО! Ширина одинарной ПУП = 120см (2 секции по 60 см)
                    // Ширина двойной = 180 см (3 секции), высота в обеих вариантах = 200 см
                    if (
                        updLandElements[i].dataset.category === "pup" &&
                        !isCurbsSelected
                    ) {
                        updLandElements[i].style.top = "50%";
                        updLandElements[i].style.left = "50%";
                        updLandElements[i].style.zIndex = "15";

                        if (windowWidth < 576) {
                            const BASE_PUP_HEIGHT = 93;
                            let pupHeight =
                                (200 / landPlotHeight) * BASE_PUP_HEIGHT;
                            updLandElements[i].style.width = `${pupWidth}%`;
                            updLandElements[i].style.height = `${pupHeight}px`;
                            updLandElements[i].style.transform =
                                "translate(-50%, -50%)";
                        } else if (windowWidth > 576 && windowWidth < 768) {
                            const BASE_PUP_HEIGHT = 130;
                            let pupHeight =
                                (200 / landPlotHeight) * BASE_PUP_HEIGHT;
                            updLandElements[i].style.width = `${pupWidth}%`;
                            updLandElements[i].style.height = `${pupHeight}px`;
                            updLandElements[i].style.transform =
                                "translate(-50%, -50%)";
                        } else if (windowWidth > 768 && windowWidth < 992) {
                            const BASE_PUP_HEIGHT = 135;
                            let pupHeight =
                                (200 / landPlotHeight) * BASE_PUP_HEIGHT;
                            updLandElements[i].style.width = `${pupWidth}%`;
                            updLandElements[i].style.height = `${pupHeight}px`;
                            updLandElements[i].style.transform =
                                "translate(-50%, -50%)";
                        } else if (windowWidth > 992) {
                            const BASE_PUP_HEIGHT = 180;
                            let pupHeight =
                                (200 / landPlotHeight) * BASE_PUP_HEIGHT;

                            updLandElements[i].style.width = `${pupWidth}%`;
                            updLandElements[i].style.height = `${pupHeight}px`;
                            updLandElements[i].style.transform =
                                "translate(-50%, -50%)";
                        }
                    } else if (
                        updLandElements[i].dataset.category === "pup" &&
                        isCurbsSelected
                    ) {
                        updLandElements[i].style.top = "50%";
                        updLandElements[i].style.left = "50%";

                        if (windowWidth < 576) {
                            const BASE_PUP_HEIGHT = 73;
                            let pupHeight =
                                (200 / landPlotHeight) * BASE_PUP_HEIGHT;
                            updLandElements[i].style.width = `${pupWidth}%`;
                            updLandElements[i].style.height = `${pupHeight}px`;
                            updLandElements[i].style.transform =
                                "translate(-50%, -56%)";
                        } else if (windowWidth > 576 && windowWidth < 768) {
                            const BASE_PUP_HEIGHT = 110;
                            let pupHeight =
                                (200 / landPlotHeight) * BASE_PUP_HEIGHT;
                            updLandElements[i].style.width = `${pupWidth}%`;
                            updLandElements[i].style.height = `${pupHeight}px`;
                            updLandElements[i].style.transform =
                                "translate(-50%, -56%)";
                        } else if (windowWidth > 768 && windowWidth < 992) {
                            const BASE_PUP_HEIGHT = 115;
                            let pupHeight =
                                (200 / landPlotHeight) * BASE_PUP_HEIGHT;
                            updLandElements[i].style.width = `${pupWidth}%`;
                            updLandElements[i].style.height = `${pupHeight}px`;
                            updLandElements[i].style.transform =
                                "translate(-50%, -56%)";
                        } else if (windowWidth > 992) {
                            const BASE_PUP_HEIGHT = 160;
                            let pupHeight =
                                (200 / landPlotHeight) * BASE_PUP_HEIGHT;

                            updLandElements[i].style.width = `${pupWidth}%`;
                            updLandElements[i].style.height = `${pupHeight}px`;
                            updLandElements[i].style.transform =
                                "translate(-50%, -56%)";
                        }
                    }
                }

                calculate();
            } else if (pupWidth > 100) {
                handleInfoAndErrorMessages($landSizePupError, {
                    isUaLanguage,
                    isRuLanguage,
                    isEngLanguage,
                });
            }
        } else if (!isSocleSelected && !isTileSelected && isRubbleSelected) {
            elementsBeautification[selectedBeautyElement].classList.add(
                "active"
            );

            let selectedBeautyElementData = getElementData(
                selectedBeautyElement,
                "beauty"
            );

            const {
                imgUrl,
                imgConstructorUrl,
                siteNameUa,
                siteNameRu,
                siteNameEng,
                category,
                price,
            } = selectedBeautyElementData;

            // Получаем актуальные размеры участка
            const { width, length } = handleLandPlotSizes();
            let area = (width * length) / 10000;

            // Получаем тип ПУП, для расчета ее площади
            let pupType = null;
            let rubbleNeed = null; // м2
            let rubbleCost = null;
            const PUP_SINGLE_AREA = 2.4; // м2
            const PUP_DOUBLE_AREA = 3.6; // м2

            for (let i = 0; i < selectedItems.length; i++) {
                const { category, type } = selectedItems[i];

                category === "pup" && (pupType = type);
            }

            pupType === "single" && (rubbleNeed = area - PUP_SINGLE_AREA);
            pupType === "double" && (rubbleNeed = area - PUP_DOUBLE_AREA);
            rubbleCost = rubbleNeed * price;

            selectedBeautyElementData.price = rubbleCost;
            selectedItems.push(selectedBeautyElementData);

            let propsForFilterNode = {};
            propsForFilterNode["category"] = category;
            propsForFilterNode["selectedItemIndex"] = selectedBeautyElement;
            propsForFilterNode["imgUrl"] = imgUrl;
            propsForFilterNode["siteNameUa"] = siteNameUa;
            propsForFilterNode["siteNameRu"] = siteNameRu;
            propsForFilterNode["siteNameEng"] = siteNameEng;

            let imgBeautyOnConstructor = `<img src="./img/items${imgConstructorUrl}"
                                        alt="${siteNameUa}"
                                        class="field__land-beauty-img"
                                        data-category="${category}"
                                        data-item-index="${selectedBeautyElement}"
                                    />`;

            $landElements[0].insertAdjacentHTML(
                "afterbegin",
                imgBeautyOnConstructor
            );

            const beautyNodeToCalculator = createCalculatorDataNode(
                category,
                selectedBeautyElement,
                siteNameUa,
                siteNameRu,
                siteNameEng,
                parseFloat(rubbleCost.toFixed(2))
            );

            handleAddFilterNode(propsForFilterNode);

            $totalCostNode[0].insertAdjacentHTML(
                "beforebegin",
                beautyNodeToCalculator
            );

            const updLandElements = Array.from($landElements[0].children);

            for (let i = 0; i < updLandElements.length; i++) {
                if (updLandElements[i].dataset.category === "rubble") {
                    updLandElements[i].style.width = "100%";
                    updLandElements[i].style.left = "0";
                    updLandElements[i].style.bottom = "0";
                    updLandElements[i].style.height = "182px";
                }
            }

            calculate();
        }
    } else if (
        selectedBeautyElement !== -1 &&
        userClick.className === "field__hide-element-button"
    ) {
        elementsBeautification[selectedBeautyElement].classList.remove(
            "active"
        );

        const selectedNode = userClick.parentNode;
        const selectedNodeChildren = Array.from(selectedNode.children);
        let itemCategoryToRemove = null;

        for (let i = 0; i < selectedNodeChildren.length; i++) {
            selectedNodeChildren[i].dataset.category &&
                (itemCategoryToRemove =
                    selectedNodeChildren[i].dataset.category);
        }

        if (
            itemCategoryToRemove === "pup" ||
            itemCategoryToRemove === "beauty"
        ) {
            let itemsToRemove = getItemsToRemove(
                landElementsChildren,
                $landElements,
                {
                    isStand: false,
                    isMonument: false,
                    isCurb: false,
                    isSocle: false,
                    isBeauty: true,
                    mustRemoveElementOnConstructor: true,
                }
            );

            handleRemoveFilterNode(itemsToRemove);
            handleRemoveCalculatorNode(itemsToRemove);
            handleRemoveItemsFromSelectedItems(itemsToRemove);
            calculate();
        } else if (itemCategoryToRemove === "rubble") {
            let itemsToRemove = getItemsToRemove(
                landElementsChildren,
                $landElements,
                {
                    isStand: false,
                    isMonument: false,
                    isCurb: false,
                    isSocle: false,
                    isBeauty: false,
                    isRubble: true,
                    mustRemoveElementOnConstructor: true,
                }
            );

            handleRemoveFilterNode(itemsToRemove);
            handleRemoveCalculatorNode(itemsToRemove);
            handleRemoveItemsFromSelectedItems(itemsToRemove);
            calculate();
        }
    }

    isUaLanguage && setLanguage(document, "ua");
    isRuLanguage && setLanguage(document, "ru");
    isEngLanguage && setLanguage(document, "eng");
});

/**
 * Функція відміни введення нових даних в конструктор
 */
const handleCancelEditPlotInputsData = () => {
    plotWidthInput[0].value = "";
    plotWidthInput[0].classList.contains("error") &&
        plotWidthInput[0].classList.remove("error");

    plotLengthInput[0].value = "";
    plotLengthInput[0].classList.contains("error") &&
        plotLengthInput[0].classList.remove("error");

    editPlotSizesNode[0].classList.remove("active");

    arrowsContainerNode[0].children[1].classList.remove("active");
    arrowsContainerNode[0].children[0].classList.add("active");
};

const handleSendWindow = () => {
    !$sendModalWindow[0].classList.contains("active")
        ? $sendModalWindow[0].classList.add("active")
        : $sendModalWindow[0].classList.remove("active");
};

const sendOrder = (e) => {
    e.preventDefault();

    let data = {};
    let order = [];

    const userName = document.getElementById("userName").value;
    const userPhone = document.getElementById("userPhone").value;
    const userEmail = document.getElementById("userEmail").value;

    data["userName"] = userName;
    data["userPhone"] = userPhone;
    data["userEmail"] = userEmail;

    for (let i = 0; i < selectedItems.length; i++) {
        let item = {};
        const { titleUa, price } = selectedItems[i];
        item["titleUa"] = titleUa;
        item["price"] = price;
        order.push(item);
    }

    data["order"] = order;

    const { width, length } = handleLandPlotSizes();
    data["landPlotSizes"] = `${width} x ${length} см`;

    let perimeter = 2 * (width / 100 + length / 100);
    data["perimeter"] = `${perimeter} м`;

    let area = (width * length) / 10000;
    data["area"] = `${area} м2`;

    let result = JSON.stringify(data); // Зібрані для відправки дані в форматі JSON
    console.log("[result]", result);

    handleSendWindow();

    return result;
};

$sendOrderForm[0].onsubmit = sendOrder;

/**
 * Блок калькулятора
 */
const calculate = () => {
    const { width, length } = handleLandPlotSizes();

    calculatorLandPlotNode[0].innerText = `${width} x ${length}`;

    // Рахуємо периметр. Calculate perimeter. Считаем периметр
    let perimeter = null;
    perimeter = 2 * (width / 100 + length / 100);
    landPlotPerimeterNode[0].innerText = perimeter;

    // Рахуємо площу. Calculate area. Считаем площадь
    let area = null;
    area = (width * length) / 10000;
    $landPlotAreaNode[0].innerText = area;

    // Рахуємо загальну вартість
    if (selectedItems.length) {
        const totalCostNode =
            '<p class="calculator__data-value total-cost">[price]</p>';
        $totalCostNode[0].classList.add("active");

        let totalCost = 0;

        for (let i = 0; i < selectedItems.length; i++) {
            let { price, category, totalElementCost } = selectedItems[i];

            if (
                category !== "curbs" &&
                category !== "socle" &&
                category !== "beauty"
            ) {
                totalCost += price;
            } else {
                totalCost += totalElementCost;
            }
        }

        $totalCostNode[0].children.length === 2 &&
            $totalCostNode[0].removeChild($totalCostNode[0].children[1]);

        $totalCostNode[0].insertAdjacentHTML(
            "beforeend",
            totalCostNode.replace(/\[price\]/g, totalCost)
        );
    } else {
        $totalCostNode[0].children.length === 2 &&
            $totalCostNode[0].removeChild($totalCostNode[0].children[1]);
        $totalCostNode[0].classList.remove("active");
    }

    startHelper();
};

const hideMockupImg = () => {
    const $mockupCanvas = document.querySelectorAll(".mockup-canvas");
    document.body.removeChild($mockupCanvas[0]);

    const $constructorField = document.querySelectorAll(".constructor__field");
    const $mockupData = document.querySelectorAll(".mockup-data");
    $constructorField[0].removeChild($mockupData[0]);
};

const createDataNodesForFinalMockup = () => {
    let dataList = document.createElement("ul");

    dataList.setAttribute("class", "mockup-data");

    const { width, length } = handleLandPlotSizes();

    const perimeter = 2 * (width / 100 + length / 100);
    const dataItemPerimeter = document.createElement("li");
    dataItemPerimeter.setAttribute("class", "mockup-data__item");
    const paragraphTitle = document.createElement("p");
    paragraphTitle.setAttribute("class", "mockup-data__item-title");
    const paragraphValue = document.createElement("p");
    paragraphValue.setAttribute("class", "mockup-data__item-value");
    isUaLanguage && (paragraphTitle.innerText = "Периметр, м = ");
    isUaLanguage && (paragraphValue.innerText = perimeter);
    isRuLanguage && (paragraphTitle.innerText = "Периметр, м = ");
    isRuLanguage && (paragraphValue.innerText = perimeter);
    isEngLanguage && (paragraphTitle.innerText = "Perimeter, m = ");
    isEngLanguage && (paragraphValue.innerText = perimeter);
    dataItemPerimeter.appendChild(paragraphTitle);
    dataItemPerimeter.appendChild(paragraphValue);
    dataList.appendChild(dataItemPerimeter);

    const area = (width * length) / 10000;
    const dataItemArea = document.createElement("li");
    dataItemArea.setAttribute("class", "mockup-data__item");
    const paragraphTitleArea = document.createElement("p");
    paragraphTitleArea.setAttribute("class", "mockup-data__item-title");
    const paragraphValueArea = document.createElement("p");
    paragraphValueArea.setAttribute("class", "mockup-data__item-value");
    isUaLanguage && (paragraphTitleArea.innerText = "Площа, м2 = ");
    isUaLanguage && (paragraphValueArea.innerText = area);
    isRuLanguage && (paragraphTitleArea.innerText = "Площадь, м2 = ");
    isRuLanguage && (paragraphValueArea.innerText = area);
    isEngLanguage && (paragraphTitleArea.innerText = "Area, m2 = ");
    isEngLanguage && (paragraphValueArea.innerText = area);
    dataItemArea.appendChild(paragraphTitleArea);
    dataItemArea.appendChild(paragraphValueArea);
    dataList.appendChild(dataItemArea);

    let totalCost = null;

    for (let i = 0; i < selectedItems.length; i++) {
        const { siteNameUa, siteNameRu, siteNameEng, price, length, category } =
            selectedItems[i];
        const dataItem = document.createElement("li");
        dataItem.setAttribute("class", "mockup-data__item");
        const paragraphTitle = document.createElement("p");
        paragraphTitle.setAttribute("class", "mockup-data__item-title");
        const paragraphValue = document.createElement("p");
        paragraphValue.setAttribute("class", "mockup-data__item-value");

        if (category === "curbs") {
            const totalCurbsCost =
                Math.ceil((perimeter * 100) / length) * price;
            totalCost += totalCurbsCost;

            isUaLanguage && (paragraphTitle.innerText = `Бордюр ${siteNameUa}`);
            isUaLanguage &&
                (paragraphValue.innerText = `${totalCurbsCost} грн.`);
            isRuLanguage && (paragraphTitle.innerText = `Бордюр ${siteNameRu}`);
            isRuLanguage &&
                (paragraphValue.innerText = `${totalCurbsCost} грн.`);
            isEngLanguage && (paragraphTitle.innerText = `Curb ${siteNameEng}`);
            isEngLanguage &&
                (paragraphValue.innerText = `${totalCurbsCost} грн.`);
            dataItem.appendChild(paragraphTitle);
            dataItem.appendChild(paragraphValue);
            dataList.appendChild(dataItem);
        } else if (category === "socle" || category === "beauty") {
            const totalSocleCost = area * price;
            totalCost += totalSocleCost;

            isUaLanguage && (paragraphTitle.innerText = siteNameUa);
            isUaLanguage &&
                (paragraphValue.innerText = `${totalSocleCost} грн.`);
            isRuLanguage && (paragraphTitle.innerText = siteNameRu);
            isRuLanguage &&
                (paragraphValue.innerText = `${totalSocleCost} грн.`);
            isEngLanguage && (paragraphTitle.innerText = siteNameEng);
            isEngLanguage &&
                (paragraphValue.innerText = `${totalSocleCost} грн.`);
            dataItem.appendChild(paragraphTitle);
            dataItem.appendChild(paragraphValue);
            dataList.appendChild(dataItem);
        } else {
            totalCost += price;

            isUaLanguage && (paragraphTitle.innerText = siteNameUa);
            isUaLanguage && (paragraphValue.innerText = `${price} грн.`);
            isRuLanguage && (paragraphTitle.innerText = siteNameRu);
            isRuLanguage && (paragraphValue.innerText = `${price} грн.`);
            isEngLanguage && (paragraphTitle.innerText = siteNameEng);
            isEngLanguage && (paragraphValue.innerText = `${price} грн.`);
            dataItem.appendChild(paragraphTitle);
            dataItem.appendChild(paragraphValue);
            dataList.appendChild(dataItem);
        }
    }

    const dataItemTotalCost = document.createElement("li");
    dataItemTotalCost.setAttribute("class", "mockup-data__item");
    const paragraphTitleTotalCost = document.createElement("p");
    paragraphTitleTotalCost.setAttribute("class", "mockup-data__item-title");
    const paragraphValueTotalCost = document.createElement("p");
    paragraphValueTotalCost.setAttribute("class", "mockup-data__item-value");
    isUaLanguage && (paragraphTitleTotalCost.innerText = "Загальная вартість ");
    isUaLanguage && (paragraphValueTotalCost.innerText = `${totalCost} грн.`);
    isRuLanguage && (paragraphTitleTotalCost.innerText = "Общая стоимость ");
    isRuLanguage && (paragraphValueTotalCost.innerText = `${totalCost} грн.`);
    isEngLanguage && (paragraphTitleTotalCost.innerText = "Total cost ");
    isEngLanguage && (paragraphValueTotalCost.innerText = `${totalCost} грн.`);
    dataItemTotalCost.appendChild(paragraphTitleTotalCost);
    dataItemTotalCost.appendChild(paragraphValueTotalCost);
    dataList.appendChild(dataItemTotalCost);

    return dataList;
};

const createShotNode = () => {
    const div = document.createElement("div");
    div.setAttribute("class", "mockup-canvas");

    const img = document.createElement("img");
    img.setAttribute("src", "./img/icons/close.svg");
    img.setAttribute("alt", "Закрити макет");
    img.setAttribute("class", "mockup-canvas_close-button active");
    img.setAttribute("onclick", "hideMockupImg()");

    div.appendChild(img);
    document.body.appendChild(div);

    const dataToRender = createDataNodesForFinalMockup();
    const $constructorField = document.querySelectorAll(".constructor__field");
    $constructorField[0].appendChild(dataToRender);
};

const takeshot = () => {
    createShotNode();
    const $mockup = document.querySelectorAll(".constructor__field");

    html2canvas($mockup[0]).then(function (canvas) {
        document.querySelectorAll(".mockup-canvas")[0].appendChild(canvas);
    });

    handleInfoAndErrorMessages($finalInfoMessage, {
        isUaLanguage,
        isRuLanguage,
        isEngLanguage,
    });
};

calculate();
