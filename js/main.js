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
 * Отримуємо всі вузли, з якими будемо працювати
 * Getting all nodes with which we will work
 * Получаем все узлы, с которыми будем работать
 */
// Заголовок сторінки
const pageTitlesNode = document.querySelectorAll(".title-container__titles");

// Список доступних мов
const languageListNode = document.querySelectorAll(
    ".title-container__language-list"
);

// Елементи зміни габаритів земельної дялінки
const landPlotTitleNode = document.querySelectorAll(".field__land-plot-title");
const landPlotWidth = document.querySelectorAll(".field__land-plot-width");
const landPlotLength = document.querySelectorAll(".field__land-plot-length");
const arrowsContainerNode = document.querySelectorAll(
    ".field__land-plot-show-edit"
);
const editPlotSizesNode = document.querySelectorAll(
    ".field__land-plot-user-edit"
);
const landPlotUserEditTitleNode = document.querySelectorAll(
    ".land-plot-user-edit__title"
);
const widthInputLableNode = document.querySelectorAll(
    ".land-plot-user-edit__plot-width-label"
);
const lengthInputLableNode = document.querySelectorAll(
    ".land-plot-user-edit__plot-length-label"
);
const plotWidthInput = document.querySelectorAll(
    ".land-plot-user-edit__plot-width"
);
const plotLengthInput = document.querySelectorAll(
    ".land-plot-user-edit__plot-length"
);
const landPlotEditButtonOkNode = document.querySelectorAll(
    ".land-plot-user-edit__ok"
);
const landPlotEditButtonCancelNode = document.querySelectorAll(
    ".land-plot-user-edit__cancel"
);
const plotInputErrorMessage = document.querySelectorAll(".field__error");

// Елементи, котрі накладуються на земельну ділянку
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
const elementsValuesSocleNode = document.querySelectorAll(".constructor__elements-values.socle");

// Калькулятор
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
                    const { imgUrl, titleUa, siteNameUa, price } = data[i];

                    // unshift для того, щоб елементи рендерилися в тому ж порядку, як і в прайсі
                    newCard.unshift(
                        `<div class="constructor__element-container">
                            <img src="./img/icons/close.svg" alt="Приховати елемент" class="field__hide-element-button">
                            <img src="${
                                BASE_IMG_URL + imgUrl
                            }" alt="${titleUa}" class="constructor__element-img">
                            <p class="constructor__element-name">${siteNameUa}</p>
                            <p class="constructor__element-price">
                                <span class="active">${price} грн/шт</span>
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
 * @returns { width, length }
 */
const handleLandPlotSizes = () => {
    let width = null;
    let length = null;

    width = landPlotWidth[0].innerText;
    length = landPlotLength[0].innerText;

    return { width, length };
};

/**
 * Локалізація вузлів сторінки
 * Localization of page's nodes
 * Локализация узлов страницы
 */
const handleSelectLanguage = () => {
    const navTabs = Array.from(elementsNavTabs[0].children);
    const calculatorDataTitles = Array.from(calculatorDataTitleNode);

    if (isUaLanguage) {
        pageTitlesNode[0].children[0].classList.add("active");
        pageTitlesNode[0].children[1].classList.remove("active");
        pageTitlesNode[0].children[2].classList.remove("active");

        landPlotTitleNode[0].children[0].classList.add("active");
        landPlotTitleNode[0].children[1].classList.remove("active");
        landPlotTitleNode[0].children[2].classList.remove("active");

        landPlotUserEditTitleNode[0].children[0].classList.add("active");
        landPlotUserEditTitleNode[0].children[1].classList.remove("active");
        landPlotUserEditTitleNode[0].children[2].classList.remove("active");

        widthInputLableNode[0].children[0].classList.add("active");
        widthInputLableNode[0].children[1].classList.remove("active");

        lengthInputLableNode[0].children[0].classList.add("active");
        lengthInputLableNode[0].children[1].classList.remove("active");

        landPlotEditButtonOkNode[0].children[0].classList.add("active");
        landPlotEditButtonOkNode[0].children[1].classList.remove("active");
        landPlotEditButtonOkNode[0].children[2].classList.remove("active");

        landPlotEditButtonCancelNode[0].children[0].classList.add("active");
        landPlotEditButtonCancelNode[0].children[1].classList.remove("active");
        landPlotEditButtonCancelNode[0].children[2].classList.remove("active");

        plotInputErrorMessage[0].children[0].classList.add("active");
        plotInputErrorMessage[0].children[1].classList.remove("active");
        plotInputErrorMessage[0].children[2].classList.remove("active");

        navTabs.forEach((tab) => {
            tab.children[0].classList.add("active");
            tab.children[1].classList.remove("active");
            tab.children[2].classList.remove("active");
        });

        calculatorTitleNode[0].children[0].classList.add("active");
        calculatorTitleNode[0].children[1].classList.remove("active");

        calculatorDataTitles.forEach((el) => {
            el.children[0].children[0].classList.add("active");
            el.children[0].children[1].classList.remove("active");
            el.children[0].children[2].classList.remove("active");
        });

        calculatorAttentionNode[0].children[0].classList.add("active");
        calculatorAttentionNode[0].children[1].classList.remove("active");
        calculatorAttentionNode[0].children[2].classList.remove("active");
    }

    if (isRuLanguage) {
        pageTitlesNode[0].children[1].classList.add("active");
        pageTitlesNode[0].children[0].classList.remove("active");
        pageTitlesNode[0].children[2].classList.remove("active");

        landPlotTitleNode[0].children[1].classList.add("active");
        landPlotTitleNode[0].children[0].classList.remove("active");
        landPlotTitleNode[0].children[2].classList.remove("active");

        landPlotUserEditTitleNode[0].children[1].classList.add("active");
        landPlotUserEditTitleNode[0].children[0].classList.remove("active");
        landPlotUserEditTitleNode[0].children[2].classList.remove("active");

        widthInputLableNode[0].children[1].classList.add("active");
        widthInputLableNode[0].children[1].classList.remove("active");

        lengthInputLableNode[0].children[1].classList.add("active");
        lengthInputLableNode[0].children[1].classList.remove("active");

        landPlotEditButtonOkNode[0].children[1].classList.add("active");
        landPlotEditButtonOkNode[0].children[0].classList.remove("active");
        landPlotEditButtonOkNode[0].children[2].classList.remove("active");

        landPlotEditButtonCancelNode[0].children[1].classList.add("active");
        landPlotEditButtonCancelNode[0].children[0].classList.remove("active");
        landPlotEditButtonCancelNode[0].children[2].classList.remove("active");

        plotInputErrorMessage[0].children[1].classList.add("active");
        plotInputErrorMessage[0].children[0].classList.remove("active");
        plotInputErrorMessage[0].children[2].classList.remove("active");

        navTabs.forEach((tab) => {
            tab.children[1].classList.add("active");
            tab.children[0].classList.remove("active");
            tab.children[2].classList.remove("active");
        });

        calculatorTitleNode[0].children[0].classList.add("active");
        calculatorTitleNode[0].children[1].classList.remove("active");

        calculatorDataTitles.forEach((el) => {
            el.children[0].children[1].classList.add("active");
            el.children[0].children[0].classList.remove("active");
            el.children[0].children[2].classList.remove("active");
        });

        calculatorAttentionNode[0].children[1].classList.add("active");
        calculatorAttentionNode[0].children[0].classList.remove("active");
        calculatorAttentionNode[0].children[2].classList.remove("active");
    }

    if (isEngLanguage) {
        pageTitlesNode[0].children[2].classList.add("active");
        pageTitlesNode[0].children[0].classList.remove("active");
        pageTitlesNode[0].children[1].classList.remove("active");

        landPlotTitleNode[0].children[2].classList.add("active");
        landPlotTitleNode[0].children[0].classList.remove("active");
        landPlotTitleNode[0].children[1].classList.remove("active");

        landPlotUserEditTitleNode[0].children[2].classList.add("active");
        landPlotUserEditTitleNode[0].children[0].classList.remove("active");
        landPlotUserEditTitleNode[0].children[1].classList.remove("active");

        widthInputLableNode[0].children[1].classList.add("active");
        widthInputLableNode[0].children[0].classList.remove("active");

        lengthInputLableNode[0].children[1].classList.add("active");
        lengthInputLableNode[0].children[0].classList.remove("active");

        landPlotEditButtonOkNode[0].children[2].classList.add("active");
        landPlotEditButtonOkNode[0].children[0].classList.remove("active");
        landPlotEditButtonOkNode[0].children[1].classList.remove("active");

        landPlotEditButtonCancelNode[0].children[2].classList.add("active");
        landPlotEditButtonCancelNode[0].children[0].classList.remove("active");
        landPlotEditButtonCancelNode[0].children[1].classList.remove("active");

        plotInputErrorMessage[0].children[2].classList.add("active");
        plotInputErrorMessage[0].children[0].classList.remove("active");
        plotInputErrorMessage[0].children[1].classList.remove("active");

        navTabs.forEach((tab) => {
            tab.children[2].classList.add("active");
            tab.children[0].classList.remove("active");
            tab.children[1].classList.remove("active");
        });

        calculatorTitleNode[0].children[1].classList.add("active");
        calculatorTitleNode[0].children[0].classList.remove("active");

        calculatorDataTitles.forEach((el) => {
            el.children[0].children[2].classList.add("active");
            el.children[0].children[0].classList.remove("active");
            el.children[0].children[1].classList.remove("active");
        });

        calculatorAttentionNode[0].children[2].classList.add("active");
        calculatorAttentionNode[0].children[0].classList.remove("active");
        calculatorAttentionNode[0].children[1].classList.remove("active");
    }
};

/**
 * Вибір мови
 * Handler of language select
 * Выбор языка
 */
let isUaLanguage = true;
let isRuLanguage = false;
let isEngLanguage = false;
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
        handleSelectLanguage();
    } else if (!isHiddenLanguageList && languageList.indexOf(userClick) === 1) {
        languageList[0].classList.remove("active");
        languageList[2].classList.remove("active");
        languageListNode[0].classList.remove("active");

        isHiddenLanguageList = true;
        isUaLanguage = false;
        isRuLanguage = true;
        isEngLanguage = false;
        handleSelectLanguage();
    } else if (!isHiddenLanguageList && languageList.indexOf(userClick) === 2) {
        languageList[0].classList.remove("active");
        languageList[1].classList.remove("active");
        languageListNode[0].classList.remove("active");

        isHiddenLanguageList = true;
        isUaLanguage = false;
        isRuLanguage = false;
        isEngLanguage = true;
        handleSelectLanguage();
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
}

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
        plotInputErrorMessage[0].classList.add("active");
        handleSelectLanguage();

        setTimeout(() => {
            plotInputErrorMessage[0].classList.remove("active");
        }, 3000);
    }
};

/**
 * Обробник елементів блоку "Огорожі"
 * Handler of elements "Fences"
 * Обработчик элементов блока "Ограждения"
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

        calculate();
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
    }
});

/**
 * Обробник елементів блоку "Цоколі"
 * Handler of elements "Socles"
 * Обработчик элементов блока "Цоколи"
 */
 elementsValuesSocleNode[0].addEventListener("click", (e) => {
    e.stopPropagation();

    let isSocleHidden = true;
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

        calculate();
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
        selectedSocle = null;
    }
});

/**
 * Обробник елементів блоку "Благоустрій"
 * Handler of elements "Beautification"
 * Обработчик элементов блока "Благоустройство"
 */


/**
 * Функція відміни введення нових даних в конструктор
 */
const handleCancelEditPlotInputsData = () => {
    plotWidthInput[0].value = '';
    plotWidthInput[0].classList.contains("error") && plotWidthInput[0].classList.remove("error");

    plotLengthInput[0].value = '';
    plotLengthInput[0].classList.contains("error") && plotLengthInput[0].classList.remove("error")

    editPlotSizesNode[0].classList.remove("active");

    arrowsContainerNode[0].children[1].classList.remove("active");
    arrowsContainerNode[0].children[0].classList.add("active");
};

/**
 * Блок калькулятора
 */

const getActiveBorder = () => {
    let activeBorder = null;
    const elementsBorders = Array.from(elementsBordersNode[0].children);

    for (let i = 0; i < elementsBorders.length; i++) {
        if (elementsBorders[i].classList.contains("active")) {
            activeBorder = i;
        }
    }

    return activeBorder;
};

const getActiveSocleElement = () => {
    let seceltedSocleElement = null;
    const elementsSocles = Array.from(elementsValuesSocleNode[0].children);

    for (let i = 0; i < elementsSocles.length; i++) {
        if (elementsSocles[i].classList.contains("active")) {
            seceltedSocleElement = i;
        }
    }

    return seceltedSocleElement;
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

    // Рахуємо к-сть і вартість бордюр
    const selectedBorder = getActiveBorder();

    if (selectedBorder || selectedBorder === 0) {
        const borders = priceList.map((el) => el.curbs);

        borders[0].forEach(({ id, length, price }) => {
            if (selectedBorder === id) {
                const borderPcs = Math.ceil((perimeter * 100) / length);
                dataValueCurbsNode[0].innerText = borderPcs;

                const totalCost = borderPcs * price;
                dataValueCurbsTotalCostNode[0].innerText = totalCost;
            }
        });
    }

    // Рахуємо вартість цоколю
    const selectedSocle = getActiveSocleElement();

    if (selectedSocle || selectedSocle === 0) {
        const socles = priceList.map(el => el.socle);

        socles[1].forEach(({ id, price }) => {
            if (selectedSocle === id) {
                const totalScoleCost = area * price;
                dataValueCementTotalCostNode[0].innerText = totalScoleCost;
            }
        });
    }
};

calculate();

/* Ниже черновички "позже к ним обратимся" */

// dragElement(document.getElementById("mydiv"));

// function dragElement(elmnt) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     // if present, the header is where you move the DIV from:
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
//     // otherwise, move the DIV from anywhere inside the DIV:
//     elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement() {
//     // stop moving when mouse button is released:
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }

// var canvas = new fabric.Canvas('canvas');
// document.getElementById('file').addEventListener("change", function (e) {
//   var file = e.target.files[0];
//   var reader = new FileReader();
//   reader.onload = function (f) {
//     var data = f.target.result;
//     fabric.Image.fromURL(data, function (img) {
//       var oImg = img.set({left: 0, top: 0, angle: 00,width:100, height:100}).scale(0.9);
//       canvas.add(oImg).renderAll();
//       var a = canvas.setActiveObject(oImg);
//       var dataURL = canvas.toDataURL({format: 'png', quality: 0.8});
//     });
//   };
//   reader.readAsDataURL(file);
// });

// window.addEventListener('load', function() {
//   document.querySelector('input[type="file"]').addEventListener('change', function() {
//       if (this.files && this.files[0]) {
//           var img = document.querySelector('img');
//           img.onload = () => {
//               URL.revokeObjectURL(img.src);  // no longer needed, free memory
//           }

//           img.src = URL.createObjectURL(this.files[0]); // set src to blob url
//       }
//   });
// });
