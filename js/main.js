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
let isSocleHidden = true;
let isTileHidden = true;
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

const filterNode = document.getElementsByClassName(
    "constructor__filter-section"
);

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
const $monumentError = document.querySelectorAll(".monument__error");
const $monumentErrorLength = document.querySelectorAll(
    ".monument__error-length"
);

const tileErrorNode = document.querySelectorAll(
    ".elements-container__tile-error"
);

const elementsValuesMonumentsNode = document.querySelectorAll(
    ".constructor__elements-values.monuments"
);

// Калькулятор
const $calculatorSection = document.querySelectorAll(".calculator");
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
const $totalCostNode = document.querySelectorAll(
    ".calculator__data-container.total-cost"
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

    // if (isFirstStep) {
    //     infoMessages.forEach(({ id, uaMessage, ruMessage, engMessage }) => {
    //         if (id === 0 && isUaLanguage) {
    //             helperNode[0].hasChildNodes() &&
    //                 helperNode[0].removeChild(helperNode[0].children[0]);
    //             helperNode[0].insertAdjacentHTML("afterbegin", uaMessage);
    //         }

    //         if (id === 0 && isRuLanguage) {
    //             helperNode[0].hasChildNodes() &&
    //                 helperNode[0].removeChild(helperNode[0].children[0]);
    //             helperNode[0].insertAdjacentHTML("afterbegin", ruMessage);
    //         }

    //         if (id === 0 && isEngLanguage) {
    //             helperNode[0].hasChildNodes() &&
    //                 helperNode[0].removeChild(helperNode[0].children[0]);
    //             helperNode[0].insertAdjacentHTML("afterbegin", engMessage);
    //         }
    //     });

    //     setTimeout(() => {
    //         landPlotEditContainer[0].classList.add("focus");
    //     }, 5000);

    //     setTimeout(() => {
    //         landPlotEditContainer[0].classList.remove("focus");
    //     }, 8000);

    //     setTimeout(() => {
    //         isFirstStep = false;
    //         isSecondStep = true;
    //         startHelper();
    //     }, 16000);
    // }

    // if (isSecondStep) {
    //     infoMessages.forEach(({ id, uaMessage, ruMessage, engMessage }) => {
    //         if (id === 1 && isUaLanguage) {
    //             helperNode[0].hasChildNodes() &&
    //                 helperNode[0].removeChild(helperNode[0].children[0]);
    //             helperNode[0].insertAdjacentHTML("afterbegin", uaMessage);
    //         }

    //         if (id === 1 && isRuLanguage) {
    //             helperNode[0].hasChildNodes() &&
    //                 helperNode[0].removeChild(helperNode[0].children[0]);
    //             helperNode[0].insertAdjacentHTML("afterbegin", ruMessage);
    //         }

    //         if (id === 1 && isEngLanguage) {
    //             helperNode[0].hasChildNodes() &&
    //                 helperNode[0].removeChild(helperNode[0].children[0]);
    //             helperNode[0].insertAdjacentHTML("afterbegin", engMessage);
    //         }
    //     });
    // }

    // if (!isStandHidden) {
    //     infoMessages.forEach(({ id, uaMessage, ruMessage, engMessage }) => {
    //         if (id === 2 && isUaLanguage) {
    //             helperNode[0].hasChildNodes() &&
    //                 helperNode[0].removeChild(helperNode[0].children[0]);
    //             helperNode[0].insertAdjacentHTML("afterbegin", uaMessage);
    //         }

    //         if (id === 2 && isRuLanguage) {
    //             helperNode[0].hasChildNodes() &&
    //                 helperNode[0].removeChild(helperNode[0].children[0]);
    //             helperNode[0].insertAdjacentHTML("afterbegin", ruMessage);
    //         }

    //         if (id === 2 && isEngLanguage) {
    //             helperNode[0].hasChildNodes() &&
    //                 helperNode[0].removeChild(helperNode[0].children[0]);
    //             helperNode[0].insertAdjacentHTML("afterbegin", engMessage);
    //         }
    //     });
    // }
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
 * Функція для закриття діалогового вікна вибору тумби
 * Function for closing the dialog window for choosing a stand
 * Функция для закрытия диалогового окна выбора тумбы
 */
const handleHideInfoMessage = () => {
    const $chooseStandMessage = document.querySelectorAll(
        ".info-message__choose-stand"
    );

    if ($chooseStandMessage[0].classList.contains("active")) {
        const standMessageChildrenNodes = Array.from(
            $chooseStandMessage[0].children
        );

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

    const childrenOfStandContainer1 = Array.from(node[0].children);

    for (let i = 0; i < childrenOfStandContainer1.length; i++) {
        if (childrenOfStandContainer1[i].dataset.category === "stand") {
            selectedStandIndex = Number(
                childrenOfStandContainer1[i].dataset.itemIndex
            );
        }

        // if (childrenOfStandContainer1[i].dataset.category === "monuments") {
        //     selectedMonumentsIndexes.push(
        //         Number(childrenOfStandContainer1[i].dataset.itemIndex)
        //     );
        // }
    }

    return {
        selectedStandIndex,
        // selectedMonumentsIndexes
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
    const standContainerChildren = Array.from(standNode[0].children);

    for (let i = 0; i < standContainerChildren.length; i++) {
        if (standContainerChildren[i].dataset.category === "monuments") {
            let monumentIndex = +standContainerChildren[i].dataset.itemIndex;
            const { length, height } = getElementData(
                monumentIndex,
                "monuments"
            );

            monumentData["monumentNode"] = standNode[0].children[i];
            monumentData["monumentWidthProportion"] = length / standLength;
            monumentData["monumentHeightProportion"] = height / length;

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
        } = monumentData[0];

        $firstMonument = monumentNode;
        firstMonumentWidthProportion = monumentWidthProportion;
        firstMonumentHeightProportion = monumentHeightProportion;
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
        } else if ($firstMonument) {
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
        } = monumentData[0];

        $firstMonument = monumentNode;
        firstMonumentWidthProportion = monumentWidthProportion;
        firstMonumentHeightProportion = monumentHeightProportion;
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
        } else if ($firstMonument) {
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
        } = monumentData[0];

        $firstMonument = monumentNode;
        firstMonumentWidthProportion = monumentWidthProportion;
        firstMonumentHeightProportion = monumentHeightProportion;
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
        } else if ($firstMonument) {
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
        } = monumentData[0];

        $firstMonument = monumentNode;
        firstMonumentWidthProportion = monumentWidthProportion;
        firstMonumentHeightProportion = monumentHeightProportion;
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
        } else if ($firstMonument) {
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

        const { length: standLength } = selectedStand;
        selectedStandsLengths -= standLength * 2;
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

            const itemsInFilterSection = Array.from(filterNode[0].children);

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

            const calculatorNodes = Array.from($calculatorSection[0].children);

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
    const { isStand, isMonument } = categories;
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

                    node[0].removeChild(arrayOfNodes[i]);
                    return;
                }
            }
        } else if (category === "monuments") {
            for (let i = 0; i < arrayOfNodes.length; i++) {
                let obj = {};

                if (arrayOfNodes[i].dataset.category === category) {
                    arrayOfNodes[i].dataset.category &&
                        (obj["category"] = arrayOfNodes[i].dataset.category);
                    arrayOfNodes[i].dataset.itemIndex &&
                        (obj["index"] = +arrayOfNodes[i].dataset.itemIndex);
                    Object.keys(obj).length && result.push(obj);

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
    const elementsStands = Array.from($elementsStandsNode[0].children);
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
    let isStandInFirstContainer = false;
    let standIdInFirstContainer = null;
    let isStandInSecondContainer = false;
    let standIdInSecondContainer = null;
    let totalStandsLength = 0;
    let monumentsInFirstContainer = [];
    let monumentsInSecondContainer = [];

    const firstContainerChildren = Array.from($standContainerNode[0].children);

    if (firstContainerChildren.length) {
        for (let i = 0; i < firstContainerChildren.length; i++) {
            if (firstContainerChildren[i].dataset.category === "stand") {
                isStandInFirstContainer = true;
                let standIndex = +firstContainerChildren[i].dataset.itemIndex;
                standIdInFirstContainer = standIndex;

                const { length } = getElementData(standIndex, "stand");
                totalStandsLength += length;
            }

            if (firstContainerChildren[i].dataset.category === "monuments") {
                monumentsInFirstContainer.push(
                    +firstContainerChildren[i].dataset.itemIndex
                );
            }
        }
    }

    const secondContainerChildren = Array.from(
        $standContainer2Node[0].children
    );

    if (secondContainerChildren.length) {
        for (let i = 0; i < secondContainerChildren.length; i++) {
            if (secondContainerChildren[i].dataset.category === "stand") {
                isStandInSecondContainer = true;
                let standIndex = +secondContainerChildren[i].dataset.itemIndex;
                standIdInSecondContainer = standIndex;

                const { length } = getElementData(standIndex, "stand");
                totalStandsLength += length;
            }

            if (secondContainerChildren[i].dataset.category === "monuments") {
                monumentsInSecondContainer.push(
                    +secondContainerChildren[i].dataset.itemIndex
                );
            }
        }
    }

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
        startHelper();
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
        startHelper();
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
        startHelper();
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

        const monumentsElements = Array.from(
            elementsValuesMonumentsNode[0].children
        );

        for (let i = 0; i < monumentsElements.length; i++) {
            if (monumentsElements[i].classList.contains("active")) {
                for (let j = 0; j < monumentsInFirstContainer.length; j++) {
                    monumentsInFirstContainer[j] === i &&
                        monumentsElements[i].classList.remove("active");
                }
            }
        }

        // Отримуємо всі елементи, котрі потрібно видалити
        let itemsToRemove = getItemsToRemove(
            firstContainerChildren,
            $standContainerNode,
            { isStand: true, isMonument: true }
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

        const monumentsElements = Array.from(
            elementsValuesMonumentsNode[0].children
        );

        for (let i = 0; i < monumentsElements.length; i++) {
            if (monumentsElements[i].classList.contains("active")) {
                for (let j = 0; j < monumentsInSecondContainer.length; j++) {
                    monumentsInSecondContainer[j] === i &&
                        monumentsElements[i].classList.remove("active");
                }
            }
        }

        // Отримуємо всі елементи, котрі потрібно видалити
        let itemsToRemove = getItemsToRemove(
            secondContainerChildren,
            $standContainer2Node,
            { isStand: true, isMonument: true }
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

            if (selectedStand === standIdInFirstContainer) {
                // Отримуємо всі елементи, котрі потрібно видалити
                let itemsToRemove = getItemsToRemove(
                    firstContainerChildren,
                    $standContainerNode,
                    { isStand: true, isMonument: true }
                );

                const monumentsElements = Array.from(
                    elementsValuesMonumentsNode[0].children
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
                    { isStand: true, isMonument: true }
                );

                const monumentsElements = Array.from(
                    elementsValuesMonumentsNode[0].children
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
            // Отримуємо всі елементи, котрі потрібно видалити з першого контейнера
            let itemsToRemove = getItemsToRemove(
                firstContainerChildren,
                $standContainerNode,
                { isStand: true, isMonument: true }
            );

            const monumentsElements = Array.from(
                elementsValuesMonumentsNode[0].children
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
        const childNodes = Array.from(containerNode[0].children);

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
    nodeToRender
) => {
    if (monumentData.length === 1) {
        const {
            monumentWidthOnStand,
            monumentHeightOnStand,
            monumentTopPosition,
            monumentLeftPosition1,
            nodeString,
        } = monumentData[0];

        nodeToRender[0].insertAdjacentHTML("afterbegin", nodeString);

        const $monument1Img = document.querySelectorAll(
            `.monument-img${monumentId}`
        );

        $monument1Img[0].style.width = `${monumentWidthOnStand}px`;
        $monument1Img[0].style.height = `${monumentHeightOnStand}px`;
        $monument1Img[0].style.top = `${monumentTopPosition}px`;
        $monument1Img[0].style.left = `${monumentLeftPosition1}px`;
        $monument1Img[0].style.position = "absolute";
    }

    if (monumentData.length === 2) {
        const nodeToRenderChildren = Array.from(nodeToRender[0].children);
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

        const $monument1Img = document.querySelectorAll(
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

        const $monument2Img = document.querySelectorAll(
            `.monument-img${monumentId}`
        );

        $monument2Img[0].style.width = `${secondMonumentWidthOnStand}px`;
        $monument2Img[0].style.height = `${secondMonumentHeightOnStand}px`;
        $monument2Img[0].style.top = `${secondMonumentTopPosition}px`;
        $monument2Img[0].style.left = `${secondMonumentLeftPosition}px`;
        $monument2Img[0].style.position = "absolute";
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
        const nodeToRenderChildren = Array.from(nodeToRender[0].children);

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
    const elementsMonuments = Array.from(
        elementsValuesMonumentsNode[0].children
    );
    let selectedMonument = elementsMonuments.indexOf(userClick.parentNode);
    let selectedMonumentData = null;
    selectedMonument !== -1 &&
        (selectedMonumentData = getElementData(selectedMonument, "monuments"));

    const {
        id,
        length: monumentLength,
        imgUrl,
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

    const firstContainerChildren = Array.from($standContainerNode[0].children);

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

    const secondContainerChildren = Array.from(
        $standContainer2Node[0].children
    );

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
            handleInfoAndErrorMessages($monumentErrorLength, {
                isUaLanguage,
                isRuLanguage,
                isEngLanguage,
            });

        if (
            totalMonumentsLengthInFirstContainer <=
            standLengthByPriceInFirstContainer
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
            handleInfoAndErrorMessages($monumentErrorLength, {
                isUaLanguage,
                isRuLanguage,
                isEngLanguage,
            });

        if (
            totalMonumentsLengthInSecondContainer <=
            standLengthByPriceInSecondContainer
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
        }
        // Якщо тумба присутня і в першому і в другому контейнері
    } else if (
        selectedMonument !== -1 &&
        userClick.className !== "field__hide-element-button" &&
        isStandInFirstContainer &&
        isStandInSecondContainer
    ) {
        // Показуємо уточнення - до якої тумби добати стеллу
        const $chooseStandMessage = document.querySelectorAll(
            ".info-message__choose-stand"
        );

        $chooseStandMessage[0].classList.add("active");

        handleAddChooseStandMessageNode({
            firstStandIndex,
            secondStandIndex,
            nodeToRender: $chooseStandMessage,
        });

        // Модальне вікно вибору тумби для обраної стелли
        const $modalWindowChooseStand = document.querySelectorAll(
            ".info-message__choose-stand"
        );

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
                        standLengthByPriceInFirstContainer
                    ) {
                        handleInfoAndErrorMessages($monumentErrorLength, {
                            isUaLanguage,
                            isRuLanguage,
                            isEngLanguage,
                        });
                        handleHideInfoMessage();
                    } else if (
                        totalMonumentsLengthInFirstContainer <=
                        standLengthByPriceInFirstContainer
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
                        $modalWindowChooseStand[0].removeEventListener(
                            "click",
                            e
                        ) && console.log("Done");

                        calculate();
                    }
                } else if (
                    userClick.parentElement.className === "second-stand_choose"
                ) {
                    totalMonumentsLengthInSecondContainer += monumentLength;

                    if (
                        totalMonumentsLengthInSecondContainer >
                        standLengthByPriceInSecondContainer
                    ) {
                        handleInfoAndErrorMessages($monumentErrorLength, {
                            isUaLanguage,
                            isRuLanguage,
                            isEngLanguage,
                        });
                        handleHideInfoMessage();
                    } else if (
                        totalMonumentsLengthInSecondContainer <=
                        standLengthByPriceInSecondContainer
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
                }
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

        const firstContainerChildren = Array.from(
            $standContainerNode[0].children
        );

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

        const secondContainerChildren = Array.from(
            $standContainer2Node[0].children
        );

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
                { isStand: false, isMonument: true },
                selectedMonument
            );

            // Перевірити наявність стел на тумбі
            // щоб відцентрувати стеллу, якщо вона ще тут є
            const firstContainerChildrenAfterRemove = Array.from(
                $standContainerNode[0].children
            );
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
                { isStand: false, isMonument: true },
                selectedMonument
            );

            // Перевірити наявність стел на тумбі
            // щоб відцентрувати стеллу, якщо вона ще тут є
            const firstContainerChildrenAfterRemove = Array.from(
                $standContainerNode[0].children
            );
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
                    $standContainerNode
                );
            }

            handleRemoveFilterNode(itemsToRemove);
            handleRemoveCalculatorNode(itemsToRemove);
            handleRemoveItemsFromSelectedItems(itemsToRemove);
            calculate();
        }
    }
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
    if (selectedItems.length) {
        const totalCostNode =
            '<p class="calculator__data-value total-cost">[price]</p>';
        $totalCostNode[0].classList.add("active");

        let totalCost = 0;

        for (let i = 0; i < selectedItems.length; i++) {
            let { price } = selectedItems[i];
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
