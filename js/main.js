/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021> <Yurii Andriiko>
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Делай хорошо, только хорошо! А можешь? - Делай лучше!"
 */

"use strict";

const elementsNavTabs = document.getElementsByClassName('constructor__elements-nav');
const elementsNavTabsValues = document.getElementsByClassName('constructor__elements-container');

/**
 * Блок для роботи з вкладками елементів конструктора (показати чи приховати)
 * Handle constructor's Nav Tabs (show or hide)
 * Блок для работы с вкладками элементов конструктора (показать или скрыть)
 */
elementsNavTabs[0].addEventListener('click', e => {
    e.stopPropagation();

    let userClick = e.target;
    const navTabs = Array.from(elementsNavTabs[0].children);
    let selectedNavTabNumber = navTabs.indexOf(userClick);
    const navTabsValues = Array.from(elementsNavTabsValues[0].children);

    for (let i = 0; i < navTabs.length; i ++) {
        navTabs[i].classList.remove('active');
        navTabsValues[i].classList.remove('active');

        navTabs[selectedNavTabNumber].classList.add('active');
        navTabsValues[selectedNavTabNumber].classList.add('active');
    }
});

/**
 * Блок для роботи з полями ввода зміни розмірів ділянки землі
 */
let isVisibleEditPlotSizes = false;
const arrowsContainerNode = document.querySelectorAll('.field__land-plot-show-edit');
const editPlotSizesNode = document.querySelectorAll('.field__land-plot-user-edit');

//TODO: Validate and getting data from inputs
const handleEditPlotInputs = () => {
    let newWidth = null;
    let newLength = null;

    let inputPlotWidth = document.querySelectorAll('.land-plot-user-edit__plot-width');
    let inputPlotLength = document.querySelectorAll('.land-plot-user-edit__plot-length');

    return {newWidth, newLength};
}

arrowsContainerNode[0].addEventListener('click', e => {
    e.stopPropagation();

    const arrowsContainer = Array.from(arrowsContainerNode[0].children);
    let userClick = e.target;
    
    if (!isVisibleEditPlotSizes) {
        isVisibleEditPlotSizes = true;
        arrowsContainer[0].classList.remove('active');
        arrowsContainer[1].classList.add('active');
        editPlotSizesNode[0].classList.add('active');

    } else {
        isVisibleEditPlotSizes = false;
        arrowsContainer[1].classList.remove('active');
        arrowsContainer[0].classList.add('active');
        editPlotSizesNode[0].classList.remove('active');
    }
})

/* Ниже черновички "позже к ним обратимся" */

// document.addEventListener('click', e => {
//     let userClick = null;

//     userClick = e.target;
//     console.log('[userClick]', userClick);
// });

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
