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
let isStandHidden = true;
let isSocleHidden = true;
let isTileHidden = true;
let isUaLanguage = true;
let isRuLanguage = false;
let isEngLanguage = false;

let selectedStandsLengths = 0;
let selectedStendsCount = 0;

/**
 * Сховище для зберігання всіх вибранних елементів в одному місці
 */
let seceltedItems = [];

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

const filterNode = document.querySelectorAll(".constructor__filter-section");

// Елементи, котрі накладуються на земельну ділянку
const draggableElementsNode = document.querySelectorAll(".draggable-elements");

const landPlotNode = document.querySelectorAll(".field__land");
const borderElementOnConstructor =
    document.querySelectorAll(".field__border-img");
const socleImgOnConstructor = document.querySelectorAll(".field__socle-img");

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
const tileGraniteBlackImgOnConstructor = document.querySelectorAll(
    ".field__tile-granite-black-img"
);
const tileGraniteGrayImgOnConstructor = document.querySelectorAll(
    ".field__tile-granite-gray-img"
);
const tileGres1ImgOnConstructor = document.querySelectorAll(
    ".field__tile-gres1-img"
);
const tileGres2ImgOnConstructor = document.querySelectorAll(
    ".field__tile-gres2-img"
);
const tileSidewalkImgOnConstructor = document.querySelectorAll(
    ".field__tile-sidewalk-img"
);
const tileSidewalk2ImgOnConstructor = document.querySelectorAll(
    ".field__tile-sidewalk2-img"
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

const tileErrorNode = document.querySelectorAll(
    ".elements-container__tile-error"
);

const elementsValuesMonumentsNode = document.querySelectorAll(
    ".constructor__elements-values.monuments"
);

// Калькулятор
const $calculatorSection = document.querySelectorAll(".calculator");
const calculatorTitleNode = document.querySelectorAll(".calculator__title");
const calculatorDataTitleNode = document.getElementsByClassName(
    "calculator__data-container"
);
const calculatorAttentionNode = document.querySelectorAll(
    ".calculator__attention"
);
const calculatorLandPlotNode = document.querySelectorAll(
    ".calculator__data-value.land-plot"
);
const landPlotAreaNode = document.querySelectorAll(
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
const dataContainerCurbsNode = document.querySelectorAll(
    ".calculator__data-container.curbs"
);
const dataValueCurbsNode = document.querySelectorAll(
    ".calculator__data-value.curbs"
);
const dataContainerCurbsTotalCostNode = document.querySelectorAll(
    ".calculator__data-container.curbs-total-cost"
);
const dataValueCurbsTotalCostNode = document.querySelectorAll(
    ".calculator__data-value.curbs-total-cost"
);
const dataContainerCementTotalCostNode = document.querySelectorAll(
    ".calculator__data-container.socle-total-cost"
);
const dataValueCementTotalCostNode = document.querySelectorAll(
    ".calculator__data-value.socle-total-cost"
);
const dataValueTileTotalCostNode = document.querySelectorAll(
    ".calculator__data-value.tile-total-cost"
);
const $totalCostNode = document.querySelectorAll(
    ".calculator__data-container.total-cost"
);
const totalCostValueNode = document.querySelectorAll(
    ".calculator__data-value.total-cost"
);
const totalCostTileNode = document.querySelectorAll(
    ".calculator__data-container.tile-total-cost"
);

let isFirstStep = true;
let isSecondStep = false;

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
    ];

    if (isFirstStep) {
        infoMessages.forEach(({ id, uaMessage, ruMessage, engMessage }) => {
            if (id === 0 && isUaLanguage) {
                helperNode[0].hasChildNodes() &&
                    helperNode[0].removeChild(helperNode[0].children[0]);
                helperNode[0].insertAdjacentHTML("afterbegin", uaMessage);
            }

            if (id === 0 && isRuLanguage) {
                helperNode[0].hasChildNodes() &&
                    helperNode[0].removeChild(helperNode[0].children[0]);
                helperNode[0].insertAdjacentHTML("afterbegin", ruMessage);
            }

            if (id === 0 && isEngLanguage) {
                helperNode[0].hasChildNodes() &&
                    helperNode[0].removeChild(helperNode[0].children[0]);
                helperNode[0].insertAdjacentHTML("afterbegin", engMessage);
            }
        });

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
        }, 16000);
    }

    if (isSecondStep) {
        infoMessages.forEach(({ id, uaMessage, ruMessage, engMessage }) => {
            if (id === 1 && isUaLanguage) {
                helperNode[0].hasChildNodes() &&
                    helperNode[0].removeChild(helperNode[0].children[0]);
                helperNode[0].insertAdjacentHTML("afterbegin", uaMessage);
            }

            if (id === 1 && isRuLanguage) {
                helperNode[0].hasChildNodes() &&
                    helperNode[0].removeChild(helperNode[0].children[0]);
                helperNode[0].insertAdjacentHTML("afterbegin", ruMessage);
            }

            if (id === 1 && isEngLanguage) {
                helperNode[0].hasChildNodes() &&
                    helperNode[0].removeChild(helperNode[0].children[0]);
                helperNode[0].insertAdjacentHTML("afterbegin", engMessage);
            }
        });
    }

    if (!isStandHidden) {
        infoMessages.forEach(({ id, uaMessage, ruMessage, engMessage }) => {
            if (id === 2 && isUaLanguage) {
                helperNode[0].hasChildNodes() &&
                    helperNode[0].removeChild(helperNode[0].children[0]);
                helperNode[0].insertAdjacentHTML("afterbegin", uaMessage);
            }

            if (id === 2 && isRuLanguage) {
                helperNode[0].hasChildNodes() &&
                    helperNode[0].removeChild(helperNode[0].children[0]);
                helperNode[0].insertAdjacentHTML("afterbegin", ruMessage);
            }

            if (id === 2 && isEngLanguage) {
                helperNode[0].hasChildNodes() &&
                    helperNode[0].removeChild(helperNode[0].children[0]);
                helperNode[0].insertAdjacentHTML("afterbegin", engMessage);
            }
        });
    }
};

startHelper();

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
                        type,
                    } = data[i];

                    // unshift для того, щоб елементи рендерилися в тому ж порядку, як і в прайсі
                    newCard.unshift(
                        `<div class="constructor__element-container">
                            <img src="./img/icons/close.svg" alt="Приховати елемент" class="field__hide-element-button">
                            <img src="${
                                BASE_IMG_URL + imgUrl
                            }" alt="${titleUa}" class="constructor__element-img">
                            <p class="constructor__element-name">
                                <span data-lang="ua" class="active">${siteNameUa}</span>
                                <span data-lang="ru">${siteNameRu}</span>
                                <span data-lang="eng">${siteNameEng}</span>
                            </p>
                            <p class="constructor__element-price">
                                <span class="active">${price} ${
                            type === "tile" || type === "socle"
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
 * Функція для пересування елементів - Тумби
 */
const standContainer = document.getElementById("stand-container");

let pos1 = 0;
let pos2 = 0;
let pos3 = 0;
let pos4 = 0;

standContainer.addEventListener("mousedown", (e) => {
    e = e || window.event;
    e.preventDefault();

    const selectedStandIndex = Number(
        $standContainerNode[0].children[0].dataset.itemIndex
    );
    const seletedStandData = getElementData(selectedStandIndex, "stand");
    const { length: standLength, height } = seletedStandData;

    const { width } = handleLandPlotSizes();
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

        const INITIAL_TOP_POSITION_S = 180;
        const MAX_HEIGHT_OF_AREA_S = 89;
        let initialLengthS = ((standLength / width) * 100) / 2.1;

        const INITIAL_TOP_POSITION_M = 220;
        const MAX_HEIGHT_OF_AREA_M = 130;
        let initialLengthM = ((standLength / width) * 100) / 1.9;

        const INITIAL_TOP_POSITION_L = 270;
        const MAX_HEIGHT_OF_AREA_L = 135;
        let initialLengthL = ((standLength / width) * 100) / 2;

        const INITIAL_TOP_POSITION_XL = 320;
        const MAX_HEIGHT_OF_AREA_XL = 150;
        let initialLengthXL = ((standLength / width) * 100) / 2;

        const newCoordinates = $standContainerNode[0].getBoundingClientRect();
        const { top } = newCoordinates;

        if (intViewportWidth < 576) {
            if (top > INITIAL_TOP_POSITION_S) {
                let progress =
                    (top - INITIAL_TOP_POSITION_S) / MAX_HEIGHT_OF_AREA_S;
                let newHeigth = height * progress + height;
                let newLength =
                    initialLengthS + initialLengthS * (progress / 1.2);
                $standContainerNode[0].style.width = `${newLength}%`;
                $standContainerNode[0].style.height = `${newHeigth * 0.6}px`;
            }
        }

        if (intViewportWidth > 576) {
            if (top > INITIAL_TOP_POSITION_M) {
                let progress =
                    (top - INITIAL_TOP_POSITION_M) / MAX_HEIGHT_OF_AREA_M;
                let newHeigth = height * progress + height;
                let newLength =
                    initialLengthM + initialLengthM * (progress / 1.2);
                $standContainerNode[0].style.width = `${newLength}%`;
                $standContainerNode[0].style.height = `${newHeigth * 0.7}px`;
            }
        }

        if (intViewportWidth > 768) {
            if (top > INITIAL_TOP_POSITION_L) {
                let progress =
                    (top - INITIAL_TOP_POSITION_L) / MAX_HEIGHT_OF_AREA_L;
                let newHeigth = height * progress + height;
                let newLength =
                    initialLengthL + initialLengthL * (progress / 1.2);
                $standContainerNode[0].style.width = `${newLength}%`;
                $standContainerNode[0].style.height = `${newHeigth * 0.6}px`;
            }
        }

        if (intViewportWidth > 992) {
            if (top > INITIAL_TOP_POSITION_XL) {
                let progress =
                    (top - INITIAL_TOP_POSITION_XL) / MAX_HEIGHT_OF_AREA_XL;
                let newHeigth = height * progress + height;
                let newLength =
                    initialLengthXL + initialLengthXL * (progress / 1.2);
                $standContainerNode[0].style.width = `${newLength}%`;
                $standContainerNode[0].style.height = `${newHeigth * 0.8}px`;
            }
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

    const selectedStandIndex = Number(
        $standContainerNode[0].children[0].dataset.itemIndex
    );
    const seletedStandData = getElementData(selectedStandIndex, "stand");
    const { length: standLength, height } = seletedStandData;

    const { width } = handleLandPlotSizes();
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

        const INITIAL_TOP_POSITION_S = 180;
        const MAX_HEIGHT_OF_AREA_S = 89;
        let initialLengthS = ((standLength / width) * 100) / 2.1;

        const INITIAL_TOP_POSITION_M = 220;
        const MAX_HEIGHT_OF_AREA_M = 130;
        let initialLengthM = ((standLength / width) * 100) / 1.9;

        const INITIAL_TOP_POSITION_L = 270;
        const MAX_HEIGHT_OF_AREA_L = 135;
        let initialLengthL = ((standLength / width) * 100) / 2;

        const INITIAL_TOP_POSITION_XL = 320;
        const MAX_HEIGHT_OF_AREA_XL = 150;
        let initialLengthXL = ((standLength / width) * 100) / 2;

        const newCoordinates = $standContainerNode[0].getBoundingClientRect();
        const { top } = newCoordinates;

        if (intViewportWidth < 576) {
            if (top > INITIAL_TOP_POSITION_S) {
                let progress =
                    (top - INITIAL_TOP_POSITION_S) / MAX_HEIGHT_OF_AREA_S;
                let newHeigth = height * progress + height;
                let newLength =
                    initialLengthS + initialLengthS * (progress / 1.2);
                $standContainerNode[0].style.width = `${newLength}%`;
                $standContainerNode[0].style.height = `${newHeigth * 0.6}px`;
            }
        }

        if (intViewportWidth > 576) {
            if (top > INITIAL_TOP_POSITION_M) {
                let progress =
                    (top - INITIAL_TOP_POSITION_M) / MAX_HEIGHT_OF_AREA_M;
                let newHeigth = height * progress + height;
                let newLength =
                    initialLengthM + initialLengthM * (progress / 1.2);
                $standContainerNode[0].style.width = `${newLength}%`;
                $standContainerNode[0].style.height = `${newHeigth * 0.7}px`;
            }
        }

        if (intViewportWidth > 768) {
            if (top > INITIAL_TOP_POSITION_L) {
                let progress =
                    (top - INITIAL_TOP_POSITION_L) / MAX_HEIGHT_OF_AREA_L;
                let newHeigth = height * progress + height;
                let newLength =
                    initialLengthL + initialLengthL * (progress / 1.2);
                $standContainerNode[0].style.width = `${newLength}%`;
                $standContainerNode[0].style.height = `${newHeigth * 0.6}px`;
            }
        }

        if (intViewportWidth > 992) {
            if (top > INITIAL_TOP_POSITION_XL) {
                let progress =
                    (top - INITIAL_TOP_POSITION_XL) / MAX_HEIGHT_OF_AREA_XL;
                let newHeigth = height * progress + height;
                let newLength =
                    initialLengthXL + initialLengthXL * (progress / 1.2);
                $standContainerNode[0].style.width = `${newLength}%`;
                $standContainerNode[0].style.height = `${newHeigth * 0.8}px`;
            }
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

    const { width } = handleLandPlotSizes();
    let intViewportWidth = window.innerWidth;

    const selectedStandIndex = Number(
        $standContainer2Node[0].children[0].dataset.itemIndex
    );
    const seletedStandData = getElementData(selectedStandIndex, "stand");
    const { length: standLength, height } = seletedStandData;

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

        const INITIAL_TOP_POSITION_S = 180;
        const MAX_HEIGHT_OF_AREA_S = 89;
        let initialLengthS = ((standLength / width) * 100) / 2.1;

        const INITIAL_TOP_POSITION_M = 220;
        const MAX_HEIGHT_OF_AREA_M = 130;
        let initialLengthM = ((standLength / width) * 100) / 1.9;

        const INITIAL_TOP_POSITION_L = 270;
        const MAX_HEIGHT_OF_AREA_L = 135;
        let initialLengthL = ((standLength / width) * 100) / 2;

        const INITIAL_TOP_POSITION_XL = 320;
        const MAX_HEIGHT_OF_AREA_XL = 150;
        let initialLengthXL = ((standLength / width) * 100) / 2;

        const newCoordinates = $standContainer2Node[0].getBoundingClientRect();
        const { top } = newCoordinates;

        if (intViewportWidth < 576) {
            if (top > INITIAL_TOP_POSITION_S) {
                let progress =
                    (top - INITIAL_TOP_POSITION_S) / MAX_HEIGHT_OF_AREA_S;
                let newHeigth = height * progress + height;
                let newLength =
                    initialLengthS + initialLengthS * (progress / 1.2);
                $standContainer2Node[0].style.width = `${newLength}%`;
                $standContainer2Node[0].style.height = `${newHeigth * 0.6}px`;
            }
        }

        if (intViewportWidth > 576) {
            if (top > INITIAL_TOP_POSITION_M) {
                let progress =
                    (top - INITIAL_TOP_POSITION_M) / MAX_HEIGHT_OF_AREA_M;
                let newHeigth = height * progress + height;
                let newLength =
                    initialLengthM + initialLengthM * (progress / 1.2);
                $standContainer2Node[0].style.width = `${newLength}%`;
                $standContainer2Node[0].style.height = `${newHeigth * 0.7}px`;
            }
        }

        if (intViewportWidth > 768) {
            if (top > INITIAL_TOP_POSITION_L) {
                let progress =
                    (top - INITIAL_TOP_POSITION_L) / MAX_HEIGHT_OF_AREA_L;
                let newHeigth = height * progress + height;
                let newLength =
                    initialLengthL + initialLengthL * (progress / 1.2);
                $standContainer2Node[0].style.width = `${newLength}%`;
                $standContainer2Node[0].style.height = `${newHeigth * 0.6}px`;
            }
        }

        if (intViewportWidth > 992) {
            if (top > INITIAL_TOP_POSITION_XL) {
                let progress =
                    (top - INITIAL_TOP_POSITION_XL) / MAX_HEIGHT_OF_AREA_XL;
                let newHeigth = height * progress + height;
                let newLength =
                initialLengthXL + initialLengthXL * (progress / 1.2);
                $standContainer2Node[0].style.width = `${newLength}%`;
                $standContainer2Node[0].style.height = `${newHeigth * 0.8}px`;
            }
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

    const { width } = handleLandPlotSizes();
    let intViewportWidth = window.innerWidth;

    const selectedStandIndex = Number(
        $standContainer2Node[0].children[0].dataset.itemIndex
    );
    const seletedStandData = getElementData(selectedStandIndex, "stand");
    const { length: standLength, height } = seletedStandData;

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

            const INITIAL_TOP_POSITION_S = 180;
            const MAX_HEIGHT_OF_AREA_S = 89;
            let initialLengthS = ((standLength / width) * 100) / 2.1;
    
            const INITIAL_TOP_POSITION_M = 220;
            const MAX_HEIGHT_OF_AREA_M = 130;
            let initialLengthM = ((standLength / width) * 100) / 1.9;
    
            const INITIAL_TOP_POSITION_L = 270;
            const MAX_HEIGHT_OF_AREA_L = 135;
            let initialLengthL = ((standLength / width) * 100) / 2;
    
            const INITIAL_TOP_POSITION_XL = 320;
            const MAX_HEIGHT_OF_AREA_XL = 150;
            let initialLengthXL = ((standLength / width) * 100) / 2;
    
            const newCoordinates = $standContainer2Node[0].getBoundingClientRect();
            const { top } = newCoordinates;
    
            if (intViewportWidth < 576) {
                if (top > INITIAL_TOP_POSITION_S) {
                    let progress =
                        (top - INITIAL_TOP_POSITION_S) / MAX_HEIGHT_OF_AREA_S;
                    let newHeigth = height * progress + height;
                    let newLength =
                        initialLengthS + initialLengthS * (progress / 1.2);
                    $standContainer2Node[0].style.width = `${newLength}%`;
                    $standContainer2Node[0].style.height = `${newHeigth * 0.6}px`;
                }
            }
    
            if (intViewportWidth > 576) {
                if (top > INITIAL_TOP_POSITION_M) {
                    let progress =
                        (top - INITIAL_TOP_POSITION_M) / MAX_HEIGHT_OF_AREA_M;
                    let newHeigth = height * progress + height;
                    let newLength =
                        initialLengthM + initialLengthM * (progress / 1.2);
                    $standContainer2Node[0].style.width = `${newLength}%`;
                    $standContainer2Node[0].style.height = `${newHeigth * 0.7}px`;
                }
            }
    
            if (intViewportWidth > 768) {
                if (top > INITIAL_TOP_POSITION_L) {
                    let progress =
                        (top - INITIAL_TOP_POSITION_L) / MAX_HEIGHT_OF_AREA_L;
                    let newHeigth = height * progress + height;
                    let newLength =
                        initialLengthL + initialLengthL * (progress / 1.2);
                    $standContainer2Node[0].style.width = `${newLength}%`;
                    $standContainer2Node[0].style.height = `${newHeigth * 0.6}px`;
                }
            }
    
            if (intViewportWidth > 992) {
                if (top > INITIAL_TOP_POSITION_XL) {
                    let progress =
                        (top - INITIAL_TOP_POSITION_XL) / MAX_HEIGHT_OF_AREA_XL;
                    let newHeigth = height * progress + height;
                    let newLength =
                    initialLengthXL + initialLengthXL * (progress / 1.2);
                    $standContainer2Node[0].style.width = `${newLength}%`;
                    $standContainer2Node[0].style.height = `${newHeigth * 0.8}px`;
                }
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
    const languageList = Array.from(languageListNode[0].children);

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
    const navTabs = Array.from(elementsNavTabs[0].children);
    let currentActiveTab = 0;
    let selectedNavTabNumber = navTabs.indexOf(userClick.parentNode);
    const navTabsValues = Array.from(elementsNavTabsValues[0].children);

    for (let i = 0; i < navTabs.length; i++) {
        if (navTabs[i].classList.contains("active")) {
            currentActiveTab = navTabs.indexOf(navTabs[i]);
        }
    }

    if (selectedNavTabNumber !== currentActiveTab) {
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
    } else {
        handleInfoAndErrorMessages(plotInputErrorMessage, {
            isUaLanguage,
            isRuLanguage,
            isEngLanguage,
        });
    }
};

const createCalculatorDataNode = (
    category,
    selectedItemIndex,
    siteNameUa,
    siteNameRu,
    siteNameEng,
    price
) => {
    let result = `<div class="calculator__data-container" 
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

    return result;
};

/**
 * Блок Фільтр
 */
filterNode[0].addEventListener("click", (e) => {
    e.stopPropagation();

    let userClick = e.target;
    let selectedItem = null;
    const filterElements = Array.from(filterNode[0].children);
    selectedItem = filterElements.indexOf(userClick.parentNode);

    if (
        selectedItem !== -1 &&
        filterElements[selectedItem].dataset.category === "stand"
    ) {
        let selectedStand = getElementData(selectedItem, "stand");
        const id = filterElements[selectedItem].dataset.itemIndex;

        const firstStandIndex =
            $standContainerNode[0].children[0].dataset.itemIndex;
        const secondStandIndex =
            $standContainer2Node[0].children[0].dataset.itemIndex;

        const { length: standLength } = selectedStand;
        selectedStendsCount -= 1;
        selectedStandsLengths -= standLength * 2;
        selectedStendsCount === 0 && (isStandHidden = true);

        if (firstStandIndex !== secondStandIndex) {
            const standsItems = Array.from($elementsStandsNode[0].children);
            standsItems[id].classList.remove("active");

            const firstImgStandOnConstructor =
                $standContainerNode[0].children[0];
            firstImgStandOnConstructor.dataset.itemIndex === id &&
                $standContainerNode[0].removeChild(firstImgStandOnConstructor);

            const secondImgStandOnConstructor =
                $standContainer2Node[0].children[0];
            secondImgStandOnConstructor.dataset.itemIndex === id &&
                $standContainer2Node[0].removeChild(
                    secondImgStandOnConstructor
                );

            const calculatorNodes = Array.from($calculatorSection[0].children);

            for (let i = 0; i < calculatorNodes.length; i++) {
                if (calculatorNodes[i].dataset.itemIndex === String(id)) {
                    $calculatorSection[0].removeChild(calculatorNodes[i]);
                }
            }

            for (let i = 0; i < seceltedItems.length; i++) {
                const { category, id: standId } = seceltedItems[i];
                category === "stand" &&
                    standId === +id &&
                    seceltedItems.splice(i, 1);
            }

            calculate();

            filterNode[0].removeChild(filterElements[selectedItem]);
        }

        if (firstStandIndex === secondStandIndex) {
            filterNode[0].removeChild(filterElements[selectedItem]);

            for (let i = 0; i < seceltedItems.length; i++) {
                const { category, id: standId } = seceltedItems[i];
                category === "stand" &&
                    standId === +id &&
                    seceltedItems.splice(i, 1);
                continue;
            }

            calculate();

            const secondImgStandOnConstructor =
                $standContainer2Node[0].children[0];
            secondImgStandOnConstructor.dataset.itemIndex === id &&
                $standContainer2Node[0].removeChild(
                    secondImgStandOnConstructor
                );

            const calculatorNodes = Array.from($calculatorSection[0].children);

            for (let i = 0; i < calculatorNodes.length; i++) {
                if (calculatorNodes[i].dataset.itemIndex === String(id)) {
                    $calculatorSection[0].removeChild(calculatorNodes[i]);
                    return;
                }
            }
        }
    }
});

/**
 * Обробник елементів блоку "Тумби"
 * Handler of elements "Stands"
 * Обработчик элементом блока "Тумбы"
 */

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

$elementsStandsNode[0].addEventListener("click", (e) => {
    let selectedStand = null;
    let userClick = e.target;
    const elementsStands = Array.from($elementsStandsNode[0].children);
    selectedStand = elementsStands.indexOf(userClick.parentNode);
    const { width } = handleLandPlotSizes();

    let userSelectStand = getElementData(selectedStand, "stand");

    const {
        length: standLength,
        height,
        imgUrl,
        imgConstructorUrl,
        siteNameUa,
        siteNameRu,
        siteNameEng,
        category,
        price,
    } = userSelectStand;
    standLength && (selectedStandsLengths += standLength);

    if (
        selectedStand !== -1 &&
        userClick.className !== "field__hide-element-button" &&
        selectedStendsCount === 0
    ) {
        selectedStendsCount += 1;
        isStandHidden = false;
        startHelper();

        seceltedItems.push(userSelectStand);
        let imgStandOnConstructor = `<img src="./img/items${imgConstructorUrl}" 
                                        alt="${siteNameUa}" 
                                        class="stand-container__stand-img"
                                        data-category="${category}"
                                        data-item-index="${selectedStand}"
                                    />`;
        let imgStandOnFilter = `<div class="filter-section__item" data-category="${category}" data-item-index="${selectedStand}">
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

        elementsStands[selectedStand].classList.add("active");
        $standContainerNode[0].classList.add("active");

        let widthOfStand = null;
        let intViewportWidth = window.innerWidth;

        if (intViewportWidth < 576) {
            widthOfStand = ((standLength / width) * 100) / 2.1;
            $standContainerNode[0].style.height = `${height * 0.6}px`;

        } else if (intViewportWidth > 576) {
            widthOfStand = ((standLength / width) * 100) / 1.9;
            $standContainerNode[0].style.height = `${height * 0.7}px`;

        } else if (intViewportWidth > 768) {
            widthOfStand = ((standLength / width) * 100) / 2;
            $standContainerNode[0].style.height = `${height * 0.6}px`;

        } else if (intViewportWidth > 992) {
            widthOfStand = ((standLength / width) * 100) / 1.8;
            $standContainerNode[0].style.height = `${height * 0.8}px`;
        }

        $standContainerNode[0].style.width = `${widthOfStand}%`;
        $standContainerNode[0].insertAdjacentHTML(
            "afterbegin",
            imgStandOnConstructor
        );

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

        filterNode[0].insertAdjacentHTML("afterbegin", imgStandOnFilter);
        $totalCostNode[0].insertAdjacentHTML(
            "beforebegin",
            standNodeToCalculator
        );

        calculate();
    } else if (
        selectedStand !== -1 &&
        userClick.className !== "field__hide-element-button" &&
        selectedStendsCount === 1 &&
        selectedStandsLengths <= width
    ) {
        selectedStendsCount += 1;
        seceltedItems.push(userSelectStand);

        let imgStandOnConstructor = `<img src="./img/items${imgConstructorUrl}" 
                                        alt="${siteNameUa}" 
                                        class="stand-container__stand-img"
                                        data-category="${category}"
                                        data-item-index="${selectedStand}"
                                    />`;
        let imgStandOnFilter = `<div class="filter-section__item" data-category="${category}" data-item-index="${selectedStand}">
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

        elementsStands[selectedStand].classList.add("active");

        if ($standContainerNode[0].children.length === 2) {
            $standContainer2Node[0].classList.add("active");

            let widthOfStand = null;
            let intViewportWidth = window.innerWidth;

            if (intViewportWidth < 576) {
                widthOfStand = ((standLength / width) * 100) / 2.1;
                $standContainer2Node[0].style.height = `${height * 0.6}px`;

            } else if (intViewportWidth > 576) {
                widthOfStand = ((standLength / width) * 100) / 1.9;
                $standContainer2Node[0].style.height = `${height * 0.7}px`;

            } else if (intViewportWidth > 768) {
                widthOfStand = ((standLength / width) * 100) / 2;
                $standContainer2Node[0].style.height = `${height * 0.6}px`;

            } else if (intViewportWidth > 992) {
                widthOfStand = ((standLength / width) * 100) / 1.8;
                $standContainer2Node[0].style.height = `${height * 0.8}px`;
            }

            $standContainer2Node[0].style.width = `${widthOfStand}%`;
            $standContainer2Node[0].insertAdjacentHTML(
                "afterbegin",
                imgStandOnConstructor
            );

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

            filterNode[0].insertAdjacentHTML("afterbegin", imgStandOnFilter);
            $totalCostNode[0].insertAdjacentHTML(
                "beforebegin",
                standNodeToCalculator
            );
        } else if ($standContainer2Node[0].children.length === 2) {
            $standContainerNode[0].classList.add("active");

            let widthOfStand = null;
            let intViewportWidth = window.innerWidth;

            if (intViewportWidth < 576) {
                widthOfStand = ((standLength / width) * 100) / 2.1;
                $standContainerNode[0].style.height = `${height * 0.6}px`;

            } else if (intViewportWidth > 576) {
                widthOfStand = ((standLength / width) * 100) / 1.9;
                $standContainerNode[0].style.height = `${height * 0.7}px`;

            } else if (intViewportWidth > 768) {
                widthOfStand = ((standLength / width) * 100) / 2;
                $standContainerNode[0].style.height = `${height * 0.6}px`;

            } else if (intViewportWidth > 992) {
                widthOfStand = ((standLength / width) * 100) / 1.8;
                $standContainerNode[0].style.height = `${height * 0.8}px`;
            }

            $standContainerNode[0].style.width = `${widthOfStand}%`;
            $standContainerNode[0].insertAdjacentHTML(
                "afterbegin",
                imgStandOnConstructor
            );

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

            filterNode[0].insertAdjacentHTML("afterbegin", imgStandOnFilter);
            $totalCostNode[0].insertAdjacentHTML(
                "beforebegin",
                standNodeToCalculator
            );
        }

        calculate();
    } else if (
        selectedStand !== -1 &&
        userClick.className !== "field__hide-element-button" &&
        selectedStendsCount === 1 &&
        selectedStandsLengths > width
    ) {
        selectedStandsLengths -= standLength;
        handleInfoAndErrorMessages(standErrorNode, {
            isUaLanguage,
            isRuLanguage,
            isEngLanguage,
        });
    } else if (
        selectedStand !== -1 &&
        userClick.className !== "field__hide-element-button" &&
        selectedStendsCount === 2
    ) {
        selectedStandsLengths -= standLength;
        handleInfoAndErrorMessages(standErrorNode, {
            isUaLanguage,
            isRuLanguage,
            isEngLanguage,
        });
    }

    if (
        selectedStand !== -1 &&
        userClick.className === "field__hide-element-button" &&
        selectedStendsCount === 1
    ) {
        selectedStendsCount -= 1;
        selectedStandsLengths -= standLength * 2;
        isStandHidden = true;
        startHelper();

        elementsStands[selectedStand].classList.remove("active");

        const firstImgStandOnConstructor = $standContainerNode[0].children[0];
        firstImgStandOnConstructor.dataset.itemIndex ===
            String(selectedStand) &&
            $standContainerNode[0].removeChild(firstImgStandOnConstructor);

        const secondImgStandOnConstructor = $standContainer2Node[0].children[0];
        secondImgStandOnConstructor.dataset.itemIndex ===
            String(selectedStand) &&
            $standContainer2Node[0].removeChild(secondImgStandOnConstructor);

        const itemsInFilterSection = Array.from(filterNode[0].children);

        for (let i = 0; i < itemsInFilterSection.length; i++) {
            if (
                itemsInFilterSection[i].dataset.category === "stand" &&
                itemsInFilterSection[i].dataset.itemIndex ===
                    String(selectedStand)
            ) {
                filterNode[0].removeChild(itemsInFilterSection[i]);
            }
        }

        for (let i = 0; i < seceltedItems.length; i++) {
            const { category, id } = seceltedItems[i];
            category === "stand" &&
                id === selectedStand &&
                seceltedItems.splice(i, 1);
        }

        const calculatorNodes = Array.from($calculatorSection[0].children);

        for (let i = 0; i < calculatorNodes.length; i++) {
            if (
                calculatorNodes[i].dataset.itemIndex === String(selectedStand)
            ) {
                $calculatorSection[0].removeChild(calculatorNodes[i]);
            }
        }

        calculate();
    } else if (
        selectedStand !== -1 &&
        userClick.className === "field__hide-element-button" &&
        selectedStendsCount === 2
    ) {
        selectedStandsLengths -= standLength * 2;
        selectedStendsCount -= 1;
        isStandHidden = false;

        const firstStandIndex =
            $standContainerNode[0].children[0].dataset.itemIndex;
        const secondStandIndex =
            $standContainer2Node[0].children[0].dataset.itemIndex;

        if (firstStandIndex !== secondStandIndex) {
            elementsStands[selectedStand].classList.remove("active");

            const firstImgStandOnConstructor =
                $standContainerNode[0].children[0];
            firstImgStandOnConstructor.dataset.itemIndex ===
                String(selectedStand) &&
                $standContainerNode[0].removeChild(firstImgStandOnConstructor);

            const secondImgStandOnConstructor =
                $standContainer2Node[0].children[0];
            secondImgStandOnConstructor.dataset.itemIndex ===
                String(selectedStand) &&
                $standContainer2Node[0].removeChild(
                    secondImgStandOnConstructor
                );

            const itemsInFilterSection = Array.from(filterNode[0].children);

            for (let i = 0; i < itemsInFilterSection.length; i++) {
                if (
                    itemsInFilterSection[i].dataset.category === "stand" &&
                    itemsInFilterSection[i].dataset.itemIndex ===
                        String(selectedStand)
                ) {
                    filterNode[0].removeChild(itemsInFilterSection[i]);
                }
            }

            for (let i = 0; i < seceltedItems.length; i++) {
                const { category, id } = seceltedItems[i];
                category === "stand" &&
                    id === selectedStand &&
                    seceltedItems.splice(i, 1);
            }

            const calculatorNodes = Array.from($calculatorSection[0].children);

            for (let i = 0; i < calculatorNodes.length; i++) {
                if (
                    calculatorNodes[i].dataset.itemIndex ===
                    String(selectedStand)
                ) {
                    $calculatorSection[0].removeChild(calculatorNodes[i]);
                }
            }

            for (let i = 0; i < seceltedItems.length; i++) {
                const { category, id: standId } = seceltedItems[i];
                category === "stand" &&
                    standId === selectedStand &&
                    seceltedItems.splice(i, 1);
            }

            calculate();
        }

        if (firstStandIndex === secondStandIndex) {
            for (let i = 0; i < seceltedItems.length; i++) {
                const { category, id: standId } = seceltedItems[i];
                category === "stand" &&
                    standId === selectedStand &&
                    seceltedItems.splice(i, 1);
                continue;
            }

            calculate();

            const itemsInFilterSection = Array.from(filterNode[0].children);

            const itemToRemove = itemsInFilterSection.findIndex((el) => {
                if (
                    el.dataset.category === "stand" &&
                    el.dataset.itemIndex === String(selectedStand)
                ) {
                    return el;
                }
            });

            filterNode[0].removeChild(filterNode[0].children[itemToRemove]);

            const secondImgStandOnConstructor =
                $standContainer2Node[0].children[0];
            secondImgStandOnConstructor.dataset.itemIndex ===
                String(selectedStand) &&
                $standContainer2Node[0].removeChild(
                    secondImgStandOnConstructor
                );

            const calculatorNodes = Array.from($calculatorSection[0].children);

            for (let i = 0; i < calculatorNodes.length; i++) {
                if (
                    calculatorNodes[i].dataset.itemIndex ===
                    String(selectedStand)
                ) {
                    $calculatorSection[0].removeChild(calculatorNodes[i]);
                    return;
                }
            }

            for (let i = 0; i < itemsInFilterSection.length; i++) {
                if (
                    itemsInFilterSection[i].dataset.category === "stand" &&
                    itemsInFilterSection[i].dataset.itemIndex ===
                        String(selectedStand)
                ) {
                    filterNode[0].removeChild(itemsInFilterSection[i]);
                    return;
                }
            }
        }
    }
});

/**
 * Обробник елементів блоку "Стелли"
 */
elementsValuesMonumentsNode[0].addEventListener("click", (e) => {
    let userClick = e.target;
    const elementsMonuments = Array.from(
        elementsValuesMonumentsNode[0].children
    );
    let selectedMonument = elementsMonuments.indexOf(userClick.parentNode);
    const filteredMonuments = priceList.filter(({ monuments }) => monuments);
    const { monuments } = filteredMonuments[0];

    monuments.forEach(({ id, titleUa, length, imgConstructorUrl }) => {
        let imgOnConstructor = `<img src="./img/items${imgConstructorUrl}" 
            alt="${titleUa}" 
            class="stand-container__monument-img"/>`;

        if (id === selectedMonument) {
            console.log("Yes");
            $standContainerNode[0].insertAdjacentHTML(
                "afterbegin",
                imgOnConstructor
            );
        }
    });
});

/**
 * Обробник елементів блоку "Бордюри"
 * Handler of elements "Borders"
 * Обработчик элементов блока "Бордюры"
 */
elementsBordersNode[0].addEventListener("click", (e) => {
    e.stopPropagation();

    let isBorderHidden = true;
    let selectedBorder = null;
    let userClick = e.target;
    const elementsBorders = Array.from(elementsBordersNode[0].children);

    if (userClick) {
        selectedBorder = elementsBorders.indexOf(userClick.parentNode);
    }

    if (selectedBorder !== -1) {
        isBorderHidden = false;

        for (let i = 0; i < elementsBorders.length; i++) {
            elementsBorders[i].classList.remove("active");
        }

        elementsBorders[selectedBorder].classList.add("active");
        borderElementOnConstructor[0].classList.add("active");
        dataContainerCurbsNode[0].classList.add("active");
        dataContainerCurbsTotalCostNode[0].classList.add("active");

        calculate({});
    }

    if (
        !isBorderHidden &&
        userClick.className === "field__hide-element-button"
    ) {
        isBorderHidden = true;
        borderElementOnConstructor[0].classList.remove("active");
        elementsBorders[selectedBorder].classList.remove("active");
        dataContainerCurbsNode[0].classList.remove("active");
        dataContainerCurbsTotalCostNode[0].classList.remove("active");
        selectedBorder = null;

        calculate({});
    }
});

/**
 * Обробник елементів блоку "Цоколі"
 * Handler of elements "Socles"
 * Обработчик элементов блока "Цоколи"
 */
elementsValuesSocleNode[0].addEventListener("click", (e) => {
    e.stopPropagation();

    let selectedSocle = null;
    let userClick = e.target;
    const elementsSocles = Array.from(elementsValuesSocleNode[0].children);

    if (userClick) {
        selectedSocle = elementsSocles.indexOf(userClick.parentNode);
    }

    if (selectedSocle !== -1) {
        isSocleHidden = false;

        for (let i = 0; i < elementsSocles.length; i++) {
            elementsSocles[i].classList.remove("active");
        }

        elementsSocles[selectedSocle].classList.add("active");
        socleImgOnConstructor[0].classList.add("active");
        dataContainerCementTotalCostNode[0].classList.add("active");
        dataValueCementTotalCostNode[0].classList.add("active");
        landPlotNode[0].classList.add("hide");

        calculate({});
    }

    if (
        !isSocleHidden &&
        userClick.className === "field__hide-element-button"
    ) {
        isSocleHidden = true;
        socleImgOnConstructor[0].classList.remove("active");
        elementsSocles[selectedSocle].classList.remove("active");
        dataContainerCementTotalCostNode[0].classList.remove("active");
        dataValueCementTotalCostNode[0].classList.remove("active");
        landPlotNode[0].classList.remove("hide");

        // Якщо випадково видалили цоколь, тоді видаляємо і плитку
        const activeTileElement = getActiveElements(elementsBeautyNode);
        const elementsBeautification = Array.from(
            elementsBeautyNode[0].children
        );

        if (activeTileElement || activeTileElement === 0) {
            elementsBeautification[activeTileElement].classList.remove(
                "active"
            );
            tileGraniteBlackImgOnConstructor[0].classList.remove("active");
            tileGraniteGrayImgOnConstructor[0].classList.remove("active");
            tileGres1ImgOnConstructor[0].classList.remove("active");
            tileGres2ImgOnConstructor[0].classList.remove("active");
            tileSidewalkImgOnConstructor[0].classList.remove("active");
            tileSidewalk2ImgOnConstructor[0].classList.remove("active");
            totalCostTileNode[0].classList.remove("active");
        }

        isTileHidden = true;
        selectedSocle = null;

        calculate({});
    }
});

/**
 * Обробник елементів блоку "Благоустрій"
 * Handler of elements "Beautification"
 * Обработчик элементов блока "Благоустройство"
 */
elementsBeautyNode[0].addEventListener("click", (e) => {
    e.stopPropagation();

    let userClick = e.target;
    let selectedBeautyElement = null;
    const elementsBeautification = Array.from(elementsBeautyNode[0].children);
    const beautyElements = [];

    priceList.forEach((el) => {
        if (el.beauty) {
            const { beauty } = el;

            for (let i = 0; i < beauty.length; i++) {
                // unshift для того, щоб елементи рендерилися в тому ж порядку, як і в прайсі
                beautyElements.unshift(beauty[i]);
            }
        }
    });

    if (userClick) {
        selectedBeautyElement = elementsBeautification.indexOf(
            userClick.parentNode
        );
    }

    if (selectedBeautyElement !== -1) {
        beautyElements.forEach((el, i) => {
            const { type } = el;

            if (
                i === selectedBeautyElement &&
                type === "tile" &&
                isSocleHidden
            ) {
                handleInfoAndErrorMessages(tileErrorNode, {
                    isUaLanguage,
                    isRuLanguage,
                    isEngLanguage,
                });
            }

            if (
                i === selectedBeautyElement &&
                type === "tile" &&
                !isSocleHidden &&
                userClick.className !== "field__hide-element-button"
            ) {
                for (let i = 0; i < elementsBeautification.length; i++) {
                    elementsBeautification[i].classList.remove("active");
                }

                elementsBeautification[selectedBeautyElement].classList.add(
                    "active"
                );

                if (selectedBeautyElement === 0) {
                    tileGraniteBlackImgOnConstructor[0].classList.add("active");

                    tileGraniteGrayImgOnConstructor[0].classList.remove(
                        "active"
                    );
                    tileGres1ImgOnConstructor[0].classList.remove("active");
                    tileGres2ImgOnConstructor[0].classList.remove("active");
                    tileSidewalkImgOnConstructor[0].classList.remove("active");
                    tileSidewalk2ImgOnConstructor[0].classList.remove("active");
                } else if (selectedBeautyElement === 1) {
                    tileGraniteGrayImgOnConstructor[0].classList.add("active");

                    tileGraniteBlackImgOnConstructor[0].classList.remove(
                        "active"
                    );
                    tileGres1ImgOnConstructor[0].classList.remove("active");
                    tileGres2ImgOnConstructor[0].classList.remove("active");
                    tileSidewalkImgOnConstructor[0].classList.remove("active");
                    tileSidewalk2ImgOnConstructor[0].classList.remove("active");
                } else if (selectedBeautyElement === 2) {
                    tileGres1ImgOnConstructor[0].classList.add("active");

                    tileGraniteBlackImgOnConstructor[0].classList.remove(
                        "active"
                    );
                    tileGraniteGrayImgOnConstructor[0].classList.remove(
                        "active"
                    );
                    tileGres2ImgOnConstructor[0].classList.remove("active");
                    tileSidewalkImgOnConstructor[0].classList.remove("active");
                    tileSidewalk2ImgOnConstructor[0].classList.remove("active");
                } else if (selectedBeautyElement === 3) {
                    tileGres2ImgOnConstructor[0].classList.add("active");

                    tileGraniteBlackImgOnConstructor[0].classList.remove(
                        "active"
                    );
                    tileGraniteGrayImgOnConstructor[0].classList.remove(
                        "active"
                    );
                    tileGres1ImgOnConstructor[0].classList.remove("active");
                    tileSidewalkImgOnConstructor[0].classList.remove("active");
                    tileSidewalk2ImgOnConstructor[0].classList.remove("active");
                } else if (selectedBeautyElement === 4) {
                    tileSidewalkImgOnConstructor[0].classList.add("active");

                    tileGraniteBlackImgOnConstructor[0].classList.remove(
                        "active"
                    );
                    tileGraniteGrayImgOnConstructor[0].classList.remove(
                        "active"
                    );
                    tileGres1ImgOnConstructor[0].classList.remove("active");
                    tileGres2ImgOnConstructor[0].classList.remove("active");
                    tileSidewalk2ImgOnConstructor[0].classList.remove("active");
                } else if (selectedBeautyElement === 5) {
                    tileSidewalk2ImgOnConstructor[0].classList.add("active");

                    tileGraniteBlackImgOnConstructor[0].classList.remove(
                        "active"
                    );
                    tileGraniteGrayImgOnConstructor[0].classList.remove(
                        "active"
                    );
                    tileGres1ImgOnConstructor[0].classList.remove("active");
                    tileGres2ImgOnConstructor[0].classList.remove("active");
                    tileSidewalkImgOnConstructor[0].classList.remove("active");
                }

                totalCostTileNode[0].classList.add("active");
                isTileHidden = false;

                calculate({});
            }
        });
    }

    if (!isTileHidden && userClick.className === "field__hide-element-button") {
        const activeTileElement = getActiveElements(elementsBeautyNode);
        elementsBeautification[activeTileElement].classList.remove("active");
        tileGraniteBlackImgOnConstructor[0].classList.remove("active");
        tileGraniteGrayImgOnConstructor[0].classList.remove("active");
        tileGres1ImgOnConstructor[0].classList.remove("active");
        tileGres2ImgOnConstructor[0].classList.remove("active");
        tileSidewalkImgOnConstructor[0].classList.remove("active");
        tileSidewalk2ImgOnConstructor[0].classList.remove("active");

        elementsBeautification[selectedBeautyElement].classList.remove(
            "active"
        );
        totalCostTileNode[0].classList.remove("active");
        // landPlotNode[0].classList.remove("hide");
        isTileHidden = true;

        calculate({});
    }
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

/**
 * Блок калькулятора
 */

/**
 * Функція для отримання активного елементу вкладки.
 * Function to get the active tab item.
 * Функция для получения активного элемента вкладки
 * @param {HTML_Node} node
 * @returns Array which contains indexes of node elements with class 'active'
 */
const getActiveElements = (node) => {
    let activeElement = [];
    const elements = Array.from(node[0].children);

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].classList.contains("active")) {
            activeElement.push(i);
        }
    }

    return activeElement;
};

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
    landPlotAreaNode[0].innerText = area;

    // Рахуємо загальну вартість
    if (seceltedItems.length) {
        const totalCostNode =
            '<p class="calculator__data-value total-cost">[price]</p>';
        $totalCostNode[0].classList.add("active");

        let totalCost = 0;

        for (let i = 0; i < seceltedItems.length; i++) {
            let { price } = seceltedItems[i];
            totalCost += price;
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
};

calculate();
