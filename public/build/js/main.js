/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/classes/Competence.js":
/*!*****************************************!*\
  !*** ./assets/js/classes/Competence.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Competence": () => (/* binding */ Competence)
/* harmony export */ });
/* harmony import */ var _TextAnim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextAnim */ "./assets/js/classes/TextAnim.js");


class Competence{
    constructor(parent,index,data) {
        this.parent = parent;
        this.index = index;
        this.div = null;
        this.data = data;
        this.__init__();
    }

    createDom(){
        this.div = document.createElement("div");
        this.parent.appendChild(this.div);
        this.div.classList.add("competence");
        this.div.innerHTML =
            `
                <h1>${this.data.title}</h1>
                <div class="content"></div>
            `;
        this.div.style.display = "block";
        if(this.index % 2  === 0){
            this.div.style.animationName = "fadeinLeft";
            this.div.style.animationDuration = `${Math.floor(Math.random() * (3000 - 1100 + 1) + 1100)}ms`;
            this.div.style.animationFillMode = "forwards";
        }
        else{
            this.div.style.animationName = "fadeinRight";
            this.div.style.animationDuration = `${Math.floor(Math.random() * (3000 - 1100 + 1) + 1100)}ms`;
            this.div.style.animationFillMode = "forwards";
        }
        new _TextAnim__WEBPACK_IMPORTED_MODULE_0__.TextAnim(this.div.querySelector(".content"),this.data.content,30);
    }

    __init__(){
        this.createDom();
    }
}



/***/ }),

/***/ "./assets/js/classes/CompetenceListe.js":
/*!**********************************************!*\
  !*** ./assets/js/classes/CompetenceListe.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompetenceListe": () => (/* binding */ CompetenceListe)
/* harmony export */ });
/* harmony import */ var _Competence__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Competence */ "./assets/js/classes/Competence.js");
/* harmony import */ var newexposure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! newexposure */ "./node_modules/newexposure/newExposure.js");
/* harmony import */ var is_element_visible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! is-element-visible */ "./node_modules/is-element-visible/dist/main.js");
/* harmony import */ var is_element_visible__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(is_element_visible__WEBPACK_IMPORTED_MODULE_2__);




class CompetenceListe {
    constructor(parent,api) {
        this.parent = parent;
        this.child = [];
        this.div = null;
        this.display = false;
        this.api = api;
        this.__init__();
    }

    getData(dev){
        if(!dev){

        }
        else{
            switch(this.api){
                case "competence":
                    const dataComp = {
                        1: {
                            "title": "rigoureux",
                            "content": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum erat in feugiat ultrices. Nunc ultrices ipsum orci, eu ornare lectus dignissim eget. Pellentesque ultrices posuere urna. Sed nisi odio, sollicitudin posuere interdum quis, pellentesque et purus. Praesent cursus tristique porttitor."]
                        },
                        2: {
                            "title": "autonome",
                            "content": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum erat in feugiat ultrices. Nunc ultrices ipsum orci, eu ornare lectus dignissim eget. Pellentesque ultrices posuere urna. Sed nisi odio, sollicitudin posuere interdum quis, pellentesque et purus. Praesent cursus tristique porttitor."]
                        },
                        3: {
                            "title": "polyvalent",
                            "content": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum erat in feugiat ultrices. Nunc ultrices ipsum orci, eu ornare lectus dignissim eget. Pellentesque ultrices posuere urna. Sed nisi odio, sollicitudin posuere interdum quis, pellentesque et purus. Praesent cursus tristique porttitor."]
                        },
                        4: {
                            "title": "a l'écoute",
                            "content": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum erat in feugiat ultrices. Nunc ultrices ipsum orci, eu ornare lectus dignissim eget. Pellentesque ultrices posuere urna. Sed nisi odio, sollicitudin posuere interdum quis, pellentesque et purus. Praesent cursus tristique porttitor."]
                        },
                        5: {
                            "title": "adaptation",
                            "content": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum erat in feugiat ultrices. Nunc ultrices ipsum orci, eu ornare lectus dignissim eget. Pellentesque ultrices posuere urna. Sed nisi odio, sollicitudin posuere interdum quis, pellentesque et purus. Praesent cursus tristique porttitor."]
                        },
                        6: {
                            "title": "créatif",
                            "content": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum erat in feugiat ultrices. Nunc ultrices ipsum orci, eu ornare lectus dignissim eget. Pellentesque ultrices posuere urna. Sed nisi odio, sollicitudin posuere interdum quis, pellentesque et purus. Praesent cursus tristique porttitor."]
                        },

                    }
                    for(let cont of Object.keys(dataComp)){
                        for(let index in dataComp[cont].content){
                            dataComp[cont].content[index] = "- " + dataComp[cont].content[index];
                        }
                    }
                    this.createChild(dataComp);
                    break;
                case "formation":
                    const dataForm = {
                        1: {
                            "title": "Développeur Web / Web mobile",
                            "content": ["HTML", "Javascript / Typescript", "Css / Sass","Maquettage", "PHP", "SQL", "Git / Github", "Hébergement"]
                        },
                        2: {
                            "title": "Concepteur Développeur d'Application",
                            "content": ["Competence / Competence 1","Competence 2","Competence 3","Competence / Competence 4", "Competence 5"]
                        },
                    }
                    for(let indexData of Object.keys(dataForm)){
                        for(let index in dataForm[indexData].content){
                            dataForm[indexData].content[index] = "- " + dataForm[indexData].content[index];
                        }
                    }
                    this.createChild(dataForm)
            }


        }
    }

    createChild(data){
        this.div = document.createElement("div");
        this.parent.appendChild(this.div);
        this.div.className = "competence-list";
        let nav = document.querySelector("#nav");
        newexposure__WEBPACK_IMPORTED_MODULE_1__["default"].pushListeningEle(this.div, () => {
            if(!this.display && nav.dataset.change){
                this.display = true;
                let index = 0;
                for(let i of Object.keys(data)){
                    this.child.push(new _Competence__WEBPACK_IMPORTED_MODULE_0__.Competence(this.div,index,data[i]));
                    index ++;
                }

            }
        },false);

    }

    __init__(){
        this.getData(true);
    }
}




/***/ }),

/***/ "./assets/js/classes/Nav.js":
/*!**********************************!*\
  !*** ./assets/js/classes/Nav.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nav": () => (/* binding */ Nav)
/* harmony export */ });
class Nav{
    constructor(elem,scrollTop){
        this.elem = elem;
        this.scrollTop = scrollTop;
        this.event();
    }

    animate(change,animationElemName,durationElem,animationChildName,durationChild){
        this.elem.dataset.change = change;
        this.elem.style.animationName = animationElemName;
        this.elem.style.animationDuration = durationElem;
        this.elem.style.animationFillMode = "forwards";
        for(let child of this.elem.children){
            child.style.animationName = animationChildName;
            child.style.animationDuration = durationChild;
            child.style.animationFillMode = "forwards";
        }
    }

    event(){
        window.addEventListener("scroll", (e) => {
            if(window.scrollY > this.scrollTop && this.elem.dataset.change !== "true"){
                this.animate("true","bg-toWhite","1000ms","color-toBlack","1000ms");
            }
            if(window.scrollY < this.scrollTop && this.elem.dataset.change === "true"){
                this.animate("false","bg-toRgb","1000ms","color-toWhite","1000ms")
            }
        });
    }
}



/***/ }),

/***/ "./assets/js/classes/TextAnim.js":
/*!***************************************!*\
  !*** ./assets/js/classes/TextAnim.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextAnim": () => (/* binding */ TextAnim)
/* harmony export */ });
class TextAnim {
    /**
     * @param parent
     * @param content
     * @param speed
     * @param removeDiv
     * @param callback
     * @param timeoutCallback
     */
    constructor(parent, content, speed, removeDiv, callback = () => {},timeoutCallback = null) {
        this.parent = parent;
        this.content = content;
        this.speed = speed;
        this.callback = callback;
        this.removeDiv = removeDiv;
        this.timeoutCallback = timeoutCallback;
        this.div = null;
        this.span = [];
        this.len = 0;
        this.__init__();
    }

    createDom() {
        this.div = document.createElement("div");
        this.parent.appendChild(this.div);
        this.div.classList.add("main-title");
        for(let content of this.content){
            for(let char of content){
                const span = document.createElement("span");
                this.div.appendChild(span);
                span.innerText = char;
                this.span.push(span);
                this.len++;
            }
            if(content !== this.content.slice(-1)[0]){
                const br = document.createElement("br");
                this.div.appendChild(br);
            }
        }

    }

    animIn() {
        let index = 0;
        this.interval = window.setInterval(() =>
        {
            const char = this.span[index];
            char.style.animationName = "fadein";
            char.style.animationDuration = `${this.speed}ms`;
            char.style.animationFillMode = "forwards";

            index++;
            if(index === this.len){
                window.setTimeout(() => {
                    this.clearDom();
                    if(this.timeoutCallback){
                        window.setTimeout(() => {
                            if(this.removeDiv){
                                this.remove();
                            }
                            this.callback();
                        },this.timeoutCallback)
                    }
                },this.speed);
                clearInterval(this.interval);
            }
        }, this.speed);
    }

    clearDom(){
        this.div.innerHTML = '';
        for(let span of this.content){
            this.div.innerHTML += span;
            console.log(span);
            if(span !== this.content.slice(-1)[0]){
                const br = document.createElement("br");
                this.div.appendChild(br);
            }
        }
    }

    remove() {
        this.div.style.animationName = "fadeout";
        this.div.style.animationDuration = "2s";
        this.div.style.animationFillMode = "forwards";
        window.setTimeout(() => {
            this.div.remove();
        },2000)
    }

    __init__() {
        this.createDom();
        this.animIn();
    }


}



/***/ }),

/***/ "./assets/js/classes/TextAnimManager.js":
/*!**********************************************!*\
  !*** ./assets/js/classes/TextAnimManager.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextAnimManager": () => (/* binding */ TextAnimManager)
/* harmony export */ });
/* harmony import */ var _TextAnim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextAnim */ "./assets/js/classes/TextAnim.js");


class TextAnimManager{
    constructor(parent,data){
        this.parent = parent;
        this.data = data;
        this.setAnim(1);
        this.child = [];
    }

    setAnim(index){

        new _TextAnim__WEBPACK_IMPORTED_MODULE_0__.TextAnim(this.parent,this.data[index].title,this.data[index].speed,true, this.data[index].callback,1000)

        index ++;
        let len = 0
        for (let i = 0; i < this.data[index].title.length; i++) {
            len += this.data[index].title[i].length;
        }
        window.setInterval(() => {
            for(let child of this.child){
                child.remove();
            }
            window.setTimeout(() => {
                this.child.push(new _TextAnim__WEBPACK_IMPORTED_MODULE_0__.TextAnim(this.parent,this.data[index].title,this.data[index].speed,true,() => {
                },1000));
                index++;
                if(index > Object.keys(this.data).length){
                    index = 1;
                }
            },2000)
        },len * this.data[index].speed * 1.5)
    }
}



/***/ }),

/***/ "./assets/js/home.js":
/*!***************************!*\
  !*** ./assets/js/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_home_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/home.scss */ "./assets/css/home.scss");
/* harmony import */ var _classes_TextAnimManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/TextAnimManager */ "./assets/js/classes/TextAnimManager.js");
/* harmony import */ var _classes_TextAnim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/TextAnim */ "./assets/js/classes/TextAnim.js");
/* harmony import */ var sweet_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweet-scroll */ "./node_modules/sweet-scroll/sweet-scroll.js");
/* harmony import */ var sweet_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweet_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _classes_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes/Nav */ "./assets/js/classes/Nav.js");
/* harmony import */ var _classes_CompetenceListe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./classes/CompetenceListe */ "./assets/js/classes/CompetenceListe.js");







const nav = document.querySelector("#nav");

/**
 * Scroll smooth
 */
document.addEventListener('DOMContentLoaded', () => {new (sweet_scroll__WEBPACK_IMPORTED_MODULE_3___default())({})}, false);

/**
 * Block scroll before first title is displayed
 */
window.onscroll = function () { window.scrollTo(0, 0); };
/**
 * Enable scroll
 */
const enableScroll = () => {
    window.onscroll = function (){};
    nav.style.display = "flex";
    nav.style.animationName = "display";
    nav.style.animationDuration = "1s";
    nav.style.animationFillMode= "forwards";
    window.setTimeout(() => {
        nav.style.opacity = "1";
    })
}

new _classes_TextAnim__WEBPACK_IMPORTED_MODULE_2__.TextAnim(document.querySelector("#first"),["Yann Tyburczy"],200,false);

new _classes_TextAnimManager__WEBPACK_IMPORTED_MODULE_1__.TextAnimManager(document.querySelector("#second"),
    {
        1:{
            title: ["Développeur Web / Web mobile"],
            speed: 100,
            callback: () => {
                enableScroll();
            }
        },
        2:{
            title: ["Concepteur Développeur d'Application"],
            speed: 100,
            callback: () => {}
        }
    }
)

new _classes_CompetenceListe__WEBPACK_IMPORTED_MODULE_5__.CompetenceListe(document.querySelector("#pres-2"),"competence");
new _classes_CompetenceListe__WEBPACK_IMPORTED_MODULE_5__.CompetenceListe(document.querySelector("#pres-3"),"formation");
new _classes_Nav__WEBPACK_IMPORTED_MODULE_4__.Nav(nav,70);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/sass-loader/dist/cjs.js!./assets/css/home.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/sass-loader/dist/cjs.js!./assets/css/home.scss ***!
  \***************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../image/backgound1.jpg */ "./assets/image/backgound1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../image/backgound2.jpg */ "./assets/image/backgound2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../image/backgound3.jpg */ "./assets/image/backgound3.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../image/backgound4.jpg */ "./assets/image/backgound4.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main-title {\n  position: relative;\n  width: 100%;\n  text-align: center;\n  font-size: 280%;\n  text-transform: uppercase;\n  font-family: \"Merriweather\", serif;\n  color: whitesmoke;\n}\n.main-title span {\n  opacity: 0;\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 100;\n  }\n}\n@keyframes fadeout {\n  from {\n    opacity: 100;\n  }\n  to {\n    opacity: 0;\n  }\n}\n#nav {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 10vh;\n  z-index: 10;\n  display: none;\n  opacity: 0;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  background-color: rgba(194, 194, 194, 0.3);\n  box-shadow: 0px 0px 8px 7px rgba(0, 0, 0, 0.3);\n}\n#nav > * {\n  text-decoration: none;\n  text-transform: uppercase;\n  color: whitesmoke;\n}\n\n@keyframes bg-toWhite {\n  from {\n    background-color: rgba(194, 194, 194, 0.3);\n  }\n  to {\n    background-color: #f4b5a4;\n  }\n}\n@keyframes bg-toRgb {\n  from {\n    background-color: #f4b5a4;\n  }\n  to {\n    background-color: rgba(194, 194, 194, 0.3);\n  }\n}\n@keyframes color-toBlack {\n  from {\n    color: whitesmoke;\n  }\n  to {\n    color: black;\n  }\n}\n@keyframes color-toWhite {\n  from {\n    color: black;\n  }\n  to {\n    color: whitesmoke;\n  }\n}\n@keyframes display {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.competence {\n  width: 30%;\n  position: relative;\n  padding: 2%;\n  display: none;\n  margin-bottom: 1%;\n  background-color: #d9ccc0;\n}\n.competence .main-title {\n  font-size: 90%;\n  text-transform: capitalize;\n  color: #3a6aa5;\n}\n.competence h1 {\n  margin-bottom: 2%;\n  text-align: center;\n  text-transform: uppercase;\n}\n.competence:nth-child(even) {\n  position: relative;\n  right: -40%;\n  box-shadow: -4px 4px 8px 2px rgba(17, 42, 47, 0.4);\n}\n.competence:nth-child(odd) {\n  left: -40%;\n  box-shadow: 4px 4px 8px 2px rgba(17, 42, 47, 0.4);\n}\n\n@keyframes fadeinLeft {\n  from {\n    left: -40;\n  }\n  to {\n    left: 0;\n  }\n}\n@keyframes fadeinRight {\n  from {\n    right: -40;\n  }\n  to {\n    right: 0;\n  }\n}\n@media screen and (max-width: 1096px) {\n  #pres-2 {\n    max-height: 80%;\n  }\n  #pres-2 .competence {\n    width: 45%;\n  }\n  #pres-2 .competence .main-title {\n    font-size: 80%;\n  }\n}\n@media screen and (max-width: 942px) {\n  #pres-2 {\n    overflow-y: scroll;\n  }\n  #pres-2 .competence-list {\n    top: 27vh !important;\n    justify-content: center !important;\n    height: 140vh !important;\n  }\n  #pres-2 .competence-list .competence {\n    width: 90%;\n  }\n}\n@media screen and (max-width: 858px) {\n  #pres-2 .competence-list {\n    top: 34vh !important;\n    justify-content: center !important;\n    height: 155vh !important;\n  }\n}\n@media screen and (max-width: 541px) {\n  #pres-2 .competence-list {\n    top: 39vh !important;\n    justify-content: center !important;\n    height: 164vh !important;\n  }\n}\n@media screen and (max-width: 453px) {\n  #pres-2 .competence-list {\n    top: 44vh !important;\n    justify-content: center !important;\n    height: 173vh !important;\n  }\n}\n#main {\n  position: relative;\n  top: 0;\n  width: 100%;\n}\n\n.presentation {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  box-shadow: 0px 0px 8px 7px rgba(0, 0, 0, 0.3);\n}\n.presentation #first {\n  font-size: 80%;\n  padding-top: 36vh;\n}\n.presentation #second {\n  font-size: 69%;\n}\n.presentation#pres-2, .presentation#pres-3 {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.presentation#pres-2 .competence-list, .presentation#pres-3 .competence-list {\n  overflow: hidden;\n  position: relative;\n  top: 2%;\n  width: 100%;\n  height: 100%;\n  padding: 5%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n#pres-1 {\n  z-index: 9;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n}\n\n#pres-2 {\n  z-index: 8;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n}\n\n#pres-3 {\n  z-index: 7;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: cover;\n}\n\n#pres-4 {\n  z-index: 6;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-size: cover;\n}\n\n::-webkit-scrollbar {\n  width: 7px;\n  height: 7px;\n}\n\n::-webkit-scrollbar-button {\n  width: 0px;\n  height: 0px;\n}\n\n::-webkit-scrollbar-thumb {\n  background: #e1e1e1;\n  border: 0px none #ffffff;\n  border-radius: 0px;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: #ffffff;\n}\n\n::-webkit-scrollbar-thumb:active {\n  background: #000000;\n}\n\n::-webkit-scrollbar-track {\n  background: #666666;\n  border: 0px none #ffffff;\n}\n\n::-webkit-scrollbar-track:hover {\n  background: #666666;\n}\n\n::-webkit-scrollbar-track:active {\n  background: #333333;\n}\n\n::-webkit-scrollbar-corner {\n  background: transparent;\n}", "",{"version":3,"sources":["webpack://./assets/css/component/_main-title.scss","webpack://./assets/css/home.scss","webpack://./assets/css/component/_nav.scss","webpack://./assets/css/component/_competence.scss"],"names":[],"mappings":"AAEA;EACI,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,yBAAA;EACA,kCAAA;EACA,iBAAA;ACAJ;ADEI;EACI,UAAA;ACAR;;ADIA;EACI;IACI,UAAA;ECDN;EDGE;IACI,YAAA;ECDN;AACF;ADIA;EACI;IACI,YAAA;ECFN;EDIE;IACI,UAAA;ECFN;AACF;AC7BA;EACI,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,UAAA;EACA,mBAAA;EACA,6BAAA;EACA,mBAAA;EACA,0CAAA;EACA,8CAAA;AD+BJ;AC7BI;EACI,qBAAA;EACA,yBAAA;EACA,iBAAA;AD+BR;;AC3BA;EACI;IACI,0CAAA;ED8BN;EC5BE;IACI,yBAAA;ED8BN;AACF;AC3BA;EACI;IACI,yBAAA;ED6BN;EC3BE;IACI,0CAAA;ED6BN;AACF;AC1BA;EACI;IACI,iBAAA;ED4BN;EC1BE;IACI,YAAA;ED4BN;AACF;AC1BA;EACI;IACI,YAAA;ED4BN;EC1BE;IACI,iBAAA;ED4BN;AACF;ACzBA;EACI;IACI,UAAA;ED2BN;ECzBE;IACI,UAAA;ED2BN;AACF;AE1FA;EACI,UAAA;EACA,kBAAA;EACA,WAAA;EACA,aAAA;EACA,iBAAA;EACA,yBAAA;AF4FJ;AE1FI;EACI,cAAA;EACA,0BAAA;EACA,cAAA;AF4FR;AEzFI;EACI,iBAAA;EACA,kBAAA;EACA,yBAAA;AF2FR;AExFI;EACI,kBAAA;EACA,WAAA;EACA,kDAAA;AF0FR;AEvFI;EACI,UAAA;EACA,iDAAA;AFyFR;;AEpFA;EACI;IACI,SAAA;EFuFN;EErFE;IACI,OAAA;EFuFN;AACF;AEnFA;EACI;IACI,UAAA;EFqFN;EEnFE;IACI,QAAA;EFqFN;AACF;AEnFA;EACI;IACI,eAAA;EFqFN;EEpFM;IACI,UAAA;EFsFV;EErFU;IACI,cAAA;EFuFd;AACF;AElFA;EACI;IACI,kBAAA;EFoFN;EEnFM;IACI,oBAAA;IACA,kCAAA;IACA,wBAAA;EFqFV;EEpFU;IACI,UAAA;EFsFd;AACF;AEhFA;EAEQ;IACI,oBAAA;IACA,kCAAA;IACA,wBAAA;EFiFV;AACF;AE7EA;EAEQ;IACI,oBAAA;IACA,kCAAA;IACA,wBAAA;EF8EV;AACF;AE1EA;EAEQ;IACI,oBAAA;IACA,kCAAA;IACA,wBAAA;EF2EV;AACF;AA9KA;EACI,kBAAA;EACA,MAAA;EACA,WAAA;AAgLJ;;AA7KA;EACI,kBAAA;EACA,WAAA;EACA,aAAA;EAEA,8CAAA;AA+KJ;AA7KI;EACI,cAAA;EACA,iBAAA;AA+KR;AA5KI;EACI,cAAA;AA8KR;AA3KI;EACI,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;AA6KR;AA5KQ;EACI,gBAAA;EACA,kBAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,mBAAA;EACA,eAAA;AA8KZ;;AAnKI;EACI,UAAA;EAEI,yDAAA;EACA,sBAAA;AAqKZ;;AAzKI;EACI,UAAA;EAEI,yDAAA;EACA,sBAAA;AA2KZ;;AA/KI;EACI,UAAA;EAEI,yDAAA;EACA,sBAAA;AAiLZ;;AArLI;EACI,UAAA;EAEI,yDAAA;EACA,sBAAA;AAuLZ;;AAjLA;EACE,UAAA;EACA,WAAA;AAoLF;;AAlLA;EACI,UAAA;EACA,WAAA;AAqLJ;;AAnLA;EACI,mBAAA;EACA,wBAAA;EACA,kBAAA;AAsLJ;;AApLA;EACI,mBAAA;AAuLJ;;AArLA;EACI,mBAAA;AAwLJ;;AAtLA;EACI,mBAAA;EACA,wBAAA;AAyLJ;;AAvLA;EACI,mBAAA;AA0LJ;;AAxLA;EACI,mBAAA;AA2LJ;;AAzLA;EACI,uBAAA;AA4LJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400&display=swap');\r\n\r\n.main-title{\r\n    position: relative;\r\n    width: 100%;\r\n    text-align: center;\r\n    font-size: 280%;\r\n    text-transform: uppercase;\r\n    font-family: 'Merriweather', serif;\r\n    color: whitesmoke;\r\n\r\n    span{\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n@keyframes fadein{\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to{\r\n        opacity: 100;\r\n    }\r\n}\r\n\r\n@keyframes fadeout {\r\n    from {\r\n        opacity: 100;\r\n    }\r\n    to{\r\n        opacity: 0;\r\n    }\r\n}","@use \"./component/main-title\";\r\n@use \"./component/nav\";\r\n@use \"./component/competence\";\r\n@use \"sass:list\";\r\n\r\n#main{\r\n    position: relative;\r\n    top: 0;\r\n    width: 100%;\r\n}\r\n\r\n.presentation{\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100vh;\r\n\r\n    box-shadow: 0px 0px 8px 7px rgba(0,0,0,0.3);\r\n\r\n    #first{\r\n        font-size: 80%;\r\n        padding-top: 36vh;\r\n    }\r\n\r\n    #second{\r\n        font-size: 69%;\r\n    }\r\n\r\n    &#pres-2, &#pres-3{\r\n        position: relative;\r\n        display: flex;\r\n        flex-direction: row;\r\n        justify-content: center;\r\n        align-items: center;\r\n        .competence-list{\r\n            overflow: hidden;\r\n            position: relative;\r\n            top: 2%;\r\n            width: 100%;\r\n            height: 100%;\r\n            padding: 5%;\r\n            display: flex;\r\n            flex-direction: row;\r\n            justify-content: space-between;\r\n            align-items: center;\r\n            flex-wrap: wrap;\r\n\r\n\r\n        }\r\n    }\r\n\r\n}\r\n\r\n$max:5;\r\n$existing-bg: 1 2 3 4;\r\n@for $i from 1 to $max{\r\n    #pres-#{$i}{\r\n        z-index: $max - $i + 5;\r\n        @if $i <= list.length($existing-bg){\r\n            background-image: url(\"../image/backgound#{$i}.jpg\");\r\n            background-size: cover;\r\n        }\r\n    }\r\n}\r\n\r\n\r\n::-webkit-scrollbar {\r\n  width: 7px;\r\n  height: 7px;\r\n}\r\n::-webkit-scrollbar-button {\r\n    width: 0px;\r\n    height: 0px;\r\n}\r\n::-webkit-scrollbar-thumb {\r\n    background: #e1e1e1;\r\n    border: 0px none #ffffff;\r\n    border-radius: 0px;\r\n}\r\n::-webkit-scrollbar-thumb:hover {\r\n    background: #ffffff;\r\n}\r\n::-webkit-scrollbar-thumb:active {\r\n    background: #000000;\r\n}\r\n::-webkit-scrollbar-track {\r\n    background: #666666;\r\n    border: 0px none #ffffff;\r\n}\r\n::-webkit-scrollbar-track:hover {\r\n    background: #666666;\r\n}\r\n::-webkit-scrollbar-track:active {\r\n    background: #333333;\r\n}\r\n::-webkit-scrollbar-corner {\r\n    background: transparent;\r\n}\r\n\r\n","#nav{\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 10vh;\r\n    z-index: 10;\r\n    display: none;\r\n    opacity: 0;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    background-color: rgba(194, 194, 194, 0.30);\r\n    box-shadow: 0px 0px 8px 7px rgba(0,0,0,0.3);\r\n\r\n    & > * {\r\n        text-decoration: none;\r\n        text-transform: uppercase;\r\n        color: whitesmoke;\r\n    }\r\n}\r\n\r\n@keyframes bg-toWhite{\r\n    from{\r\n        background-color: rgba(194, 194, 194, 0.30);\r\n    }\r\n    to{\r\n        background-color: #f4b5a4;\r\n    }\r\n}\r\n\r\n@keyframes bg-toRgb{\r\n    from{\r\n        background-color: #f4b5a4;\r\n    }\r\n    to{\r\n        background-color: rgba(194, 194, 194, 0.30);\r\n    }\r\n}\r\n\r\n@keyframes color-toBlack{\r\n    from {\r\n        color: whitesmoke;\r\n    }\r\n    to{\r\n        color: black;\r\n    }\r\n}\r\n@keyframes color-toWhite{\r\n    from {\r\n        color: black;\r\n    }\r\n    to{\r\n        color: whitesmoke;\r\n    }\r\n}\r\n\r\n@keyframes display{\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to{\r\n        opacity: 1;\r\n    }\r\n}",".competence{\r\n    width: 30%;\r\n    position: relative;\r\n    padding: 2%;\r\n    display: none;\r\n    margin-bottom: 1%;\r\n    background-color: #d9ccc0;\r\n\r\n    .main-title{\r\n        font-size: 90%;\r\n        text-transform: capitalize;\r\n        color: #3a6aa5;\r\n    }\r\n\r\n    h1{\r\n        margin-bottom: 2%;\r\n        text-align: center;\r\n        text-transform: uppercase;\r\n    }\r\n\r\n    &:nth-child(even){\r\n        position: relative;\r\n        right: -40%;\r\n        box-shadow: -4px 4px 8px 2px rgba(17,42,47,0.4);\r\n    }\r\n\r\n    &:nth-child(odd){\r\n        left: -40%;\r\n        box-shadow: 4px 4px 8px 2px rgba(17,42,47,0.4);\r\n    }\r\n}\r\n\r\n\r\n@keyframes fadeinLeft {\r\n    from{\r\n        left: -40;\r\n    }\r\n    to{\r\n        left: 0;\r\n    }\r\n}\r\n\r\n\r\n@keyframes fadeinRight {\r\n    from{\r\n        right: -40;\r\n    }\r\n    to{\r\n        right: 0;\r\n    }\r\n}\r\n@media screen and (max-width: 1096px){\r\n    #pres-2{\r\n        max-height: 80%;\r\n        .competence{\r\n            width: 45%;\r\n            .main-title{\r\n                font-size: 80%;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 942px) {\r\n    #pres-2{\r\n        overflow-y: scroll;\r\n        .competence-list{\r\n            top: 27vh !important;\r\n            justify-content: center !important;\r\n            height: 140vh !important;\r\n            .competence{\r\n                width: 90%;\r\n            }\r\n        }\r\n\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 858px) {\r\n    #pres-2 {\r\n        .competence-list {\r\n            top: 34vh !important;\r\n            justify-content: center !important;\r\n            height: 155vh !important;\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 541px) {\r\n    #pres-2 {\r\n        .competence-list {\r\n            top: 39vh !important;\r\n            justify-content: center !important;\r\n            height: 164vh !important;\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 453px) {\r\n    #pres-2 {\r\n        .competence-list {\r\n            top: 44vh !important;\r\n            justify-content: center !important;\r\n            height: 173vh !important;\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/sass-loader/dist/cjs.js!./assets/css/reset.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/sass-loader/dist/cjs.js!./assets/css/reset.scss ***!
  \****************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  width: 100vw;\n  font-family: \"Merriweather\", serif;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  scroll-behavior: smooth;\n}", "",{"version":3,"sources":["webpack://./assets/css/reset.scss"],"names":[],"mappings":"AAEA;EACI,SAAA;EACA,UAAA;EACA,sBAAA;AAAJ;;AAGA;EACI,YAAA;EACA,kCAAA;EACA,kBAAA;EACA,kBAAA;EACA,uBAAA;AAAJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400&display=swap');\r\n\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody{\r\n    width: 100vw;\r\n    font-family: 'Merriweather', serif;\r\n    overflow-x: hidden;\r\n    overflow-y: hidden;\r\n    scroll-behavior: smooth;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/is-element-visible/dist/main.js":
/*!******************************************************!*\
  !*** ./node_modules/is-element-visible/dist/main.js ***!
  \******************************************************/
/***/ ((module) => {

!function(e,t){ true?module.exports=t():0}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(e){return"hidden"===o(e,"overflow")},o=function(e,t){var n=window.getComputedStyle?document.defaultView.getComputedStyle(e,null):e.currentStyle;return t?n[t]:n},i=function(e){for(;e=e.parentNode;)if(e==document)return!0;return!1},u=function(e,t){for(var n=f(e.getBoundingClientRect());e=e.parentNode;)if(9!==e.nodeType&&r(e)){var o=f(e.getBoundingClientRect()),i=n.startX>=o.startX&&n.endX<=o.endX,u=n.startY>=o.startY&&n.endY<=o.endY;if(!i||!u)return!1}return!0},f=function(e){var t=e.x,n=e.width,r=e.y,o=e.height;return{startX:parseInt(t),endX:parseInt(t)+parseInt(n),startY:parseInt(r),endY:parseInt(r)+parseInt(o)}};function d(e){if(!i(e))return!1;var t="0"===o(e,"opacity"),n="none"===o(e,"display"),r="hidden"===o(e,"visibility");return!(t||n||r)&&u(e)}Element.prototype.isVisible=function(){return d(this)},t.default=d}])});

/***/ }),

/***/ "./node_modules/newexposure/newExposure.js":
/*!*************************************************!*\
  !*** ./node_modules/newexposure/newExposure.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * @Author: niumeng
 * @Date:   2016-05-03 10:55:44
 * @Last Modified by:   niumeng
 * @Last Modified time: 2016-05-17 10:42:48
 */

const newExposure = {
  _listeningEles: [],

  _init: function () {
    this._bindEvent();
  },

  _bindEvent: function () {
    this._scrollListener(window, { scrollEnd: this._checkExposeure.bind(this) });

    window.addEventListener("resize", this._checkExposeure.bind(this), false);
  },

  _checkExposeure: function () {
    var i = 0;
    var len = this._listeningEles.length;
    var action = null;

    for (i = 0; i < len; i++) {
      if (
        !this._listeningEles[i].canRepeat &&
        this._listeningEles[i].doneOnce
      ) {
        continue;
      }

      if (this._eleInView(this._listeningEles[i].ele)) {
        action = this._listeningEles[i].action;

        action && action();

        this._listeningEles[i].doneOnce = true;
      }
    }
  },

  _eleInView: function (ele) {
    if (!ele) {
      return false;
    }

    var viewHeight = window.screen.height;

    var rect = ele.getBoundingClientRect();
    var threshold = 100;

    if (
      (rect.top > 0 && viewHeight - rect.top > threshold) ||
      (rect.bottom > threshold && rect.bottom < viewHeight) ||
      (rect.top <= 0 && rect.bottom >= viewHeight)
    ) {
      // console.log(ele);

      return true;
    }
  },

  pushListeningEle: function (ele, action, canRepeat) {
    var listeningEle = {};

    listeningEle.ele = ele;
    listeningEle.action = this._actionFactory(action);
    listeningEle.canRepeat = canRepeat ? true : false;
    listeningEle.doneOnce = false;

    // console.log(listeningEle);

    this._listeningEles.push(listeningEle);
  },

  _actionFactory: function (action) {
    var actionType = typeof action;

    if (actionType == "function") {
      return action;
    } else if (actionType == "string") {
      return function () {
        var url =
          action.indexOf("?") > -1
            ? action + "&timestamp=" + new Date().valueOf()
            : action + "?timestamp=" + new Date().valueOf();

        var oImg = new Image();
        oImg.src = url;
      };
    } else {
      return null;
    }
  },

  _scrollListener: function (target, option) {
    //校验参数
    if (!target || typeof option != "object") {
      throw new Error("scrollListener needs a object parameter.");
    }

    //滚动开始、滚动中、滚动结束、判断滚动结束及两次不同滚动的时间依据
    var alowList = ["scrollStart", "scrolling", "scrollEnd", "threshold"];

    var _opt = {};

    for (var i = 0; i < 3; i++) {
      _opt[alowList[i]] = option[alowList[i]] || null;
    }

    _opt["threshold"] = option["threshold"] || 500;

    target.addEventListener("scroll", callback, false);

    var lastScrollingTime = new Date(1970, 0, 1, 0, 0, 0);
    var timer = 0;

    function callback() {
      clearTimeout(timer);

      var currentTime = new Date();

      if (currentTime - lastScrollingTime > _opt.threshold) {
        _opt.scrollStart && _opt.scrollStart();
      }

      lastScrollingTime = currentTime;

      _opt.scrolling && _opt.scrolling();

      timer = setTimeout(function () {
        _opt.scrollEnd && _opt.scrollEnd();
      }, _opt.threshold);
    }
  },
};

newExposure._init();

Object.defineProperties(window, {
  newExposure: {
    value: newExposure,
  },
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newExposure);


/***/ }),

/***/ "./assets/css/home.scss":
/*!******************************!*\
  !*** ./assets/css/home.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_home_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!../../node_modules/sass-loader/dist/cjs.js!./home.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/sass-loader/dist/cjs.js!./assets/css/home.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_home_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_home_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_home_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_home_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./assets/css/reset.scss":
/*!*******************************!*\
  !*** ./assets/css/reset.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!../../node_modules/sass-loader/dist/cjs.js!./reset.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/sass-loader/dist/cjs.js!./assets/css/reset.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/sweet-scroll/sweet-scroll.js":
/*!***************************************************!*\
  !*** ./node_modules/sweet-scroll/sweet-scroll.js ***!
  \***************************************************/
/***/ (function(module) {

/*! @preserve sweet-scroll v4.0.0 - tsuyoshiwada | MIT License */
(function (global, factory) {
     true ? module.exports = factory() :
    0;
}(this, function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    // @link https://github.com/JedWatson/exenv/blob/master/index.js
    var canUseDOM = !!(typeof window !== 'undefined' &&
        window.document &&
        window.document.createElement);
    var canUseHistory = !canUseDOM
        ? false
        : window.history && 'pushState' in window.history && window.location.protocol !== 'file:';
    var canUsePassiveOption = (function () {
        var support = false;
        if (!canUseDOM) {
            return support;
        }
        /* tslint:disable:no-empty */
        try {
            var win = window;
            var opts = Object.defineProperty({}, 'passive', {
                get: function () {
                    support = true;
                },
            });
            win.addEventListener('test', null, opts);
            win.removeEventListener('test', null, opts);
        }
        catch (e) { }
        /* tslint:enable */
        return support;
    })();

    var isString = function (obj) { return typeof obj === 'string'; };
    var isFunction = function (obj) { return typeof obj === 'function'; };
    var isArray = function (obj) { return Array.isArray(obj); };
    var isNumeric = function (obj) { return !isArray(obj) && obj - parseFloat(obj) + 1 >= 0; };
    var hasProp = function (obj, key) { return obj && obj.hasOwnProperty(key); };

    var raf = canUseDOM
        ? window.requestAnimationFrame.bind(window)
        : null;
    var caf = canUseDOM
        ? window.cancelAnimationFrame.bind(window)
        : null;

    /* tslint:disable:curly */
    /* tslint:disable:no-conditional-assignment */
    var cos = Math.cos, sin = Math.sin, pow = Math.pow, sqrt = Math.sqrt, PI = Math.PI;
    var easings = {
        linear: function (p) { return p; },
        easeInQuad: function (_, t, b, c, d) { return c * (t /= d) * t + b; },
        easeOutQuad: function (_, t, b, c, d) { return -c * (t /= d) * (t - 2) + b; },
        easeInOutQuad: function (_, t, b, c, d) {
            return (t /= d / 2) < 1 ? (c / 2) * t * t + b : (-c / 2) * (--t * (t - 2) - 1) + b;
        },
        easeInCubic: function (_, t, b, c, d) { return c * (t /= d) * t * t + b; },
        easeOutCubic: function (_, t, b, c, d) { return c * ((t = t / d - 1) * t * t + 1) + b; },
        easeInOutCubic: function (_, t, b, c, d) {
            return (t /= d / 2) < 1 ? (c / 2) * t * t * t + b : (c / 2) * ((t -= 2) * t * t + 2) + b;
        },
        easeInQuart: function (_, t, b, c, d) { return c * (t /= d) * t * t * t + b; },
        easeOutQuart: function (_, t, b, c, d) { return -c * ((t = t / d - 1) * t * t * t - 1) + b; },
        easeInOutQuart: function (_, t, b, c, d) {
            return (t /= d / 2) < 1 ? (c / 2) * t * t * t * t + b : (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
        },
        easeInQuint: function (_, t, b, c, d) { return c * (t /= d) * t * t * t * t + b; },
        easeOutQuint: function (_, t, b, c, d) { return c * ((t = t / d - 1) * t * t * t * t + 1) + b; },
        easeInOutQuint: function (_, t, b, c, d) {
            return (t /= d / 2) < 1
                ? (c / 2) * t * t * t * t * t + b
                : (c / 2) * ((t -= 2) * t * t * t * t + 2) + b;
        },
        easeInSine: function (_, t, b, c, d) { return -c * cos((t / d) * (PI / 2)) + c + b; },
        easeOutSine: function (_, t, b, c, d) { return c * sin((t / d) * (PI / 2)) + b; },
        easeInOutSine: function (_, t, b, c, d) { return (-c / 2) * (cos((PI * t) / d) - 1) + b; },
        easeInExpo: function (_, t, b, c, d) { return (t === 0 ? b : c * pow(2, 10 * (t / d - 1)) + b); },
        easeOutExpo: function (_, t, b, c, d) { return (t === d ? b + c : c * (-pow(2, (-10 * t) / d) + 1) + b); },
        easeInOutExpo: function (_, t, b, c, d) {
            if (t === 0)
                return b;
            if (t === d)
                return b + c;
            if ((t /= d / 2) < 1)
                return (c / 2) * pow(2, 10 * (t - 1)) + b;
            return (c / 2) * (-pow(2, -10 * --t) + 2) + b;
        },
        easeInCirc: function (_, t, b, c, d) { return -c * (sqrt(1 - (t /= d) * t) - 1) + b; },
        easeOutCirc: function (_, t, b, c, d) { return c * sqrt(1 - (t = t / d - 1) * t) + b; },
        easeInOutCirc: function (_, t, b, c, d) {
            return (t /= d / 2) < 1
                ? (-c / 2) * (sqrt(1 - t * t) - 1) + b
                : (c / 2) * (sqrt(1 - (t -= 2) * t) + 1) + b;
        },
    };

    var $$ = function (selector) {
        return Array.prototype.slice.call((!selector ? [] : document.querySelectorAll(selector)));
    };
    var $ = function (selector) { return $$(selector).shift() || null; };
    var isElement = function (obj) { return obj instanceof Element; };
    var isWindow = function ($el) { return $el === window; };
    var isRootContainer = function ($el) {
        return $el === document.documentElement || $el === document.body;
    };
    var matches = function ($el, selector) {
        if (isElement(selector)) {
            return $el === selector;
        }
        var results = $$(selector);
        var i = results.length;
        // tslint:disable-next-line no-empty
        while (--i >= 0 && results[i] !== $el) { }
        return i > -1;
    };

    var getHeight = function ($el) {
        return Math.max($el.scrollHeight, $el.clientHeight, $el.offsetHeight);
    };
    var getWidth = function ($el) {
        return Math.max($el.scrollWidth, $el.clientWidth, $el.offsetWidth);
    };
    var getSize = function ($el) { return ({
        width: getWidth($el),
        height: getHeight($el),
    }); };
    var getViewportAndElementSizes = function ($el) {
        var isRoot = isWindow($el) || isRootContainer($el);
        return {
            viewport: {
                width: isRoot
                    ? Math.min(window.innerWidth, document.documentElement.clientWidth)
                    : $el.clientWidth,
                height: isRoot ? window.innerHeight : $el.clientHeight,
            },
            size: isRoot
                ? {
                    width: Math.max(getWidth(document.body), getWidth(document.documentElement)),
                    height: Math.max(getHeight(document.body), getHeight(document.documentElement)),
                }
                : getSize($el),
        };
    };

    var directionMethodMap = {
        y: 'scrollTop',
        x: 'scrollLeft',
    };
    var directionPropMap = {
        y: 'pageYOffset',
        x: 'pageXOffset',
    };
    var getScroll = function ($el, direction) {
        return isWindow($el) ? $el[directionPropMap[direction]] : $el[directionMethodMap[direction]];
    };
    var setScroll = function ($el, offset, direction) {
        if (isWindow($el)) {
            var top_1 = direction === 'y';
            $el.scrollTo(!top_1 ? offset : $el.pageXOffset, top_1 ? offset : $el.pageYOffset);
        }
        else {
            $el[directionMethodMap[direction]] = offset;
        }
    };
    var getOffset = function ($el, $context) {
        var rect = $el.getBoundingClientRect();
        if (rect.width || rect.height) {
            var scroll_1 = { top: 0, left: 0 };
            var $ctx = void 0;
            if (isWindow($context) || isRootContainer($context)) {
                $ctx = document.documentElement;
                scroll_1.top = window[directionPropMap.y];
                scroll_1.left = window[directionPropMap.x];
            }
            else {
                $ctx = $context;
                var cRect = $ctx.getBoundingClientRect();
                scroll_1.top = cRect.top * -1 + $ctx[directionMethodMap.y];
                scroll_1.left = cRect.left * -1 + $ctx[directionMethodMap.x];
            }
            return {
                top: rect.top + scroll_1.top - $ctx.clientTop,
                left: rect.left + scroll_1.left - $ctx.clientLeft,
            };
        }
        return rect;
    };

    var wheelEventName = (function () {
        if (!canUseDOM) {
            return 'wheel';
        }
        return 'onwheel' in document ? 'wheel' : 'mousewheel';
    })();
    var eventName = function (name) { return (name === 'wheel' ? wheelEventName : name); };
    var apply = function ($el, method, event, listener, passive) {
        event.split(' ').forEach(function (name) {
            $el[method](eventName(name), listener, canUsePassiveOption ? { passive: passive } : false);
        });
    };
    var addEvent = function ($el, event, listener, passive) { return apply($el, 'addEventListener', event, listener, passive); };
    var removeEvent = function ($el, event, listener, passive) { return apply($el, 'removeEventListener', event, listener, passive); };

    var reRelativeToken = /^(\+|-)=(\d+(?:\.\d+)?)$/;
    var parseCoordinate = function (coordinate, enableVertical) {
        var res = { top: 0, left: 0, relative: false };
        // Object ({ top: {n}, left: {n} })
        if (hasProp(coordinate, 'top') || hasProp(coordinate, 'left')) {
            res = __assign({}, res, coordinate);
            // Array ([{n}, [{n}])
        }
        else if (isArray(coordinate)) {
            if (coordinate.length > 1) {
                res.top = coordinate[0];
                res.left = coordinate[1];
            }
            else if (coordinate.length === 1) {
                res.top = enableVertical ? coordinate[0] : 0;
                res.left = !enableVertical ? coordinate[0] : 0;
            }
            else {
                return null;
            }
            // Number
        }
        else if (isNumeric(coordinate)) {
            if (enableVertical) {
                res.top = coordinate;
            }
            else {
                res.left = coordinate;
            }
            // String ('+={n}', '-={n}')
        }
        else if (isString(coordinate)) {
            var m = coordinate.trim().match(reRelativeToken);
            if (!m) {
                return null;
            }
            var op = m[1];
            var val = parseInt(m[2], 10);
            if (op === '+') {
                res.top = enableVertical ? val : 0;
                res.left = !enableVertical ? val : 0;
            }
            else {
                res.top = enableVertical ? -val : 0;
                res.left = !enableVertical ? -val : 0;
            }
            res.relative = true;
        }
        else {
            return null;
        }
        return res;
    };

    var defaultOptions = {
        trigger: '[data-scroll]',
        header: '[data-scroll-header]',
        duration: 1000,
        easing: 'easeOutQuint',
        offset: 0,
        vertical: true,
        horizontal: false,
        cancellable: true,
        updateURL: false,
        preventDefault: true,
        stopPropagation: true,
        // Callbacks
        before: null,
        after: null,
        cancel: null,
        complete: null,
        step: null,
    };

    var CONTAINER_CLICK_EVENT = 'click';
    var CONTAINER_STOP_EVENT = 'wheel touchstart touchmove';
    var SweetScroll = /** @class */ (function () {
        /**
         * Constructor
         */
        function SweetScroll(options, container) {
            var _this = this;
            this.$el = null;
            this.ctx = {
                $trigger: null,
                opts: null,
                progress: false,
                pos: null,
                startPos: null,
                easing: null,
                start: 0,
                id: 0,
                cancel: false,
                hash: null,
            };
            /**
             * Handle each frame of the animation.
             */
            this.loop = function (time) {
                var _a = _this, $el = _a.$el, ctx = _a.ctx;
                if (!ctx.start) {
                    ctx.start = time;
                }
                if (!ctx.progress || !$el) {
                    _this.stop();
                    return;
                }
                var options = ctx.opts;
                var offset = ctx.pos;
                var start = ctx.start;
                var startOffset = ctx.startPos;
                var easing = ctx.easing;
                var duration = options.duration;
                var directionMap = { top: 'y', left: 'x' };
                var timeElapsed = time - start;
                var t = Math.min(1, Math.max(timeElapsed / duration, 0));
                Object.keys(offset).forEach(function (key) {
                    var value = offset[key];
                    var initial = startOffset[key];
                    var delta = value - initial;
                    if (delta !== 0) {
                        var val = easing(t, duration * t, 0, 1, duration);
                        setScroll($el, Math.round(initial + delta * val), directionMap[key]);
                    }
                });
                if (timeElapsed <= duration) {
                    _this.hook(options, 'step', t);
                    ctx.id = SweetScroll.raf(_this.loop);
                }
                else {
                    _this.stop(true);
                }
            };
            /**
             * Handling of container click event.
             */
            this.handleClick = function (e) {
                var opts = _this.opts;
                var $el = e.target;
                for (; $el && $el !== document; $el = $el.parentNode) {
                    if (!matches($el, opts.trigger)) {
                        continue;
                    }
                    var dataOptions = JSON.parse($el.getAttribute('data-scroll-options') || '{}');
                    var data = $el.getAttribute('data-scroll');
                    var to = data || $el.getAttribute('href');
                    var options = __assign({}, opts, dataOptions);
                    var preventDefault = options.preventDefault, stopPropagation = options.stopPropagation, vertical = options.vertical, horizontal = options.horizontal;
                    if (preventDefault) {
                        e.preventDefault();
                    }
                    if (stopPropagation) {
                        e.stopPropagation();
                    }
                    // Passes the trigger element to callback
                    _this.ctx.$trigger = $el;
                    if (horizontal && vertical) {
                        _this.to(to, options);
                    }
                    else if (vertical) {
                        _this.toTop(to, options);
                    }
                    else if (horizontal) {
                        _this.toLeft(to, options);
                    }
                    break;
                }
            };
            /**
             * Handling of container stop events.
             */
            this.handleStop = function (e) {
                var ctx = _this.ctx;
                var opts = ctx.opts;
                if (opts && opts.cancellable) {
                    ctx.cancel = true;
                    _this.stop();
                }
                else {
                    e.preventDefault();
                }
            };
            this.opts = __assign({}, defaultOptions, (options || {}));
            var $container = null;
            if (canUseDOM) {
                if (typeof container === 'string') {
                    $container = $(container);
                }
                else if (container != null) {
                    $container = container;
                }
                else {
                    $container = window;
                }
            }
            this.$el = $container;
            if ($container) {
                this.bind(true, false);
            }
        }
        /**
         * SweetScroll instance factory.
         */
        SweetScroll.create = function (options, container) {
            return new SweetScroll(options, container);
        };
        /**
         * Scroll animation to the specified position.
         */
        SweetScroll.prototype.to = function (distance, options) {
            if (!canUseDOM) {
                return;
            }
            var _a = this, $el = _a.$el, ctx = _a.ctx, currentOptions = _a.opts;
            var $trigger = ctx.$trigger;
            var opts = __assign({}, currentOptions, (options || {}));
            var optOffset = opts.offset, vertical = opts.vertical, horizontal = opts.horizontal;
            var $header = isElement(opts.header) ? opts.header : $(opts.header);
            var reg = /^#/;
            var hash = isString(distance) && reg.test(distance) ? distance : null;
            ctx.opts = opts; // Temporary options
            ctx.cancel = false; // Disable the call flag of `cancel`
            ctx.hash = hash;
            // Stop current animation
            this.stop();
            // Does not move if the container is not found
            if (!$el) {
                return;
            }
            // Get scroll offset
            var offset = parseCoordinate(optOffset, vertical);
            var coordinate = parseCoordinate(distance, vertical);
            var scroll = { top: 0, left: 0 };
            if (coordinate) {
                if (coordinate.relative) {
                    var current = getScroll($el, vertical ? 'y' : 'x');
                    scroll.top = vertical ? current + coordinate.top : coordinate.top;
                    scroll.left = !vertical ? current + coordinate.left : coordinate.left;
                }
                else {
                    scroll = coordinate;
                }
            }
            else if (isString(distance) && distance !== '#') {
                var $target = $(distance);
                if (!$target) {
                    return;
                }
                scroll = getOffset($target, $el);
            }
            if (offset) {
                scroll.top += offset.top;
                scroll.left += offset.left;
            }
            if ($header) {
                scroll.top = Math.max(0, scroll.top - getSize($header).height);
            }
            // Normalize scroll offset
            var _b = getViewportAndElementSizes($el), viewport = _b.viewport, size = _b.size;
            scroll.top = vertical
                ? Math.max(0, Math.min(size.height - viewport.height, scroll.top))
                : getScroll($el, 'y');
            scroll.left = horizontal
                ? Math.max(0, Math.min(size.width - viewport.width, scroll.left))
                : getScroll($el, 'x');
            // Call `before`
            // Stop scrolling when it returns false
            if (this.hook(opts, 'before', scroll, $trigger) === false) {
                ctx.opts = null;
                return;
            }
            // Set offset
            ctx.pos = scroll;
            // Run animation!!
            this.start(opts);
            // Bind stop events
            this.bind(false, true);
        };
        /**
         * Scroll animation to specified left position.
         */
        SweetScroll.prototype.toTop = function (distance, options) {
            this.to(distance, __assign({}, (options || {}), { vertical: true, horizontal: false }));
        };
        /**
         * Scroll animation to specified top position.
         */
        SweetScroll.prototype.toLeft = function (distance, options) {
            this.to(distance, __assign({}, (options || {}), { vertical: false, horizontal: true }));
        };
        /**
         * Scroll animation to specified element.
         */
        SweetScroll.prototype.toElement = function ($element, options) {
            var $el = this.$el;
            if (!canUseDOM || !$el) {
                return;
            }
            this.to(getOffset($element, $el), options || {});
        };
        /**
         * Stop the current scroll animation.
         */
        SweetScroll.prototype.stop = function (gotoEnd) {
            if (gotoEnd === void 0) { gotoEnd = false; }
            var _a = this, $el = _a.$el, ctx = _a.ctx;
            var pos = ctx.pos;
            if (!$el || !ctx.progress) {
                return;
            }
            SweetScroll.caf(ctx.id);
            ctx.progress = false;
            ctx.start = 0;
            ctx.id = 0;
            if (gotoEnd && pos) {
                setScroll($el, pos.left, 'x');
                setScroll($el, pos.top, 'y');
            }
            this.complete();
        };
        /**
         * Update options.
         */
        SweetScroll.prototype.update = function (options) {
            if (this.$el) {
                var opts = __assign({}, this.opts, options);
                this.stop();
                this.unbind(true, true);
                this.opts = opts;
                this.bind(true, false);
            }
        };
        /**
         * Destroy instance.
         */
        SweetScroll.prototype.destroy = function () {
            if (this.$el) {
                this.stop();
                this.unbind(true, true);
                this.$el = null;
            }
        };
        /**
         * Callback methods.
         */
        /* tslint:disable:no-empty */
        SweetScroll.prototype.onBefore = function (_, __) {
            return true;
        };
        SweetScroll.prototype.onStep = function (_) { };
        SweetScroll.prototype.onAfter = function (_, __) { };
        SweetScroll.prototype.onCancel = function () { };
        SweetScroll.prototype.onComplete = function (_) { };
        /* tslint:enable */
        /**
         * Start scrolling animation.
         */
        SweetScroll.prototype.start = function (opts) {
            var ctx = this.ctx;
            ctx.opts = opts;
            ctx.progress = true;
            ctx.easing = isFunction(opts.easing)
                ? opts.easing
                : easings[opts.easing];
            // Update start offset.
            var $container = this.$el;
            var start = {
                top: getScroll($container, 'y'),
                left: getScroll($container, 'x'),
            };
            ctx.startPos = start;
            // Loop
            ctx.id = SweetScroll.raf(this.loop);
        };
        /**
         * Handle the completion of scrolling animation.
         */
        SweetScroll.prototype.complete = function () {
            var _a = this, $el = _a.$el, ctx = _a.ctx;
            var hash = ctx.hash, cancel = ctx.cancel, opts = ctx.opts, pos = ctx.pos, $trigger = ctx.$trigger;
            if (!$el || !opts) {
                return;
            }
            if (hash != null && hash !== window.location.hash) {
                var updateURL = opts.updateURL;
                if (canUseDOM && canUseHistory && updateURL !== false) {
                    window.history[updateURL === 'replace' ? 'replaceState' : 'pushState'](null, '', hash);
                }
            }
            this.unbind(false, true);
            ctx.opts = null;
            ctx.$trigger = null;
            if (cancel) {
                this.hook(opts, 'cancel');
            }
            else {
                this.hook(opts, 'after', pos, $trigger);
            }
            this.hook(opts, 'complete', cancel);
        };
        /**
         * Callback function and method call.
         */
        SweetScroll.prototype.hook = function (options, type) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            var _a;
            var callback = options[type];
            var callbackResult;
            var methodResult;
            // callback
            if (isFunction(callback)) {
                callbackResult = callback.apply(this, args.concat([this]));
            }
            // method
            methodResult = (_a = this)["on" + (type[0].toUpperCase() + type.slice(1))].apply(_a, args);
            return callbackResult !== undefined ? callbackResult : methodResult;
        };
        /**
         * Bind events of container element.
         */
        SweetScroll.prototype.bind = function (click, stop) {
            var _a = this, $el = _a.$el, opts = _a.ctx.opts;
            if ($el) {
                if (click) {
                    addEvent($el, CONTAINER_CLICK_EVENT, this.handleClick, false);
                }
                if (stop) {
                    addEvent($el, CONTAINER_STOP_EVENT, this.handleStop, opts ? opts.cancellable : true);
                }
            }
        };
        /**
         * Unbind events of container element.
         */
        SweetScroll.prototype.unbind = function (click, stop) {
            var _a = this, $el = _a.$el, opts = _a.ctx.opts;
            if ($el) {
                if (click) {
                    removeEvent($el, CONTAINER_CLICK_EVENT, this.handleClick, false);
                }
                if (stop) {
                    removeEvent($el, CONTAINER_STOP_EVENT, this.handleStop, opts ? opts.cancellable : true);
                }
            }
        };
        /**
         * You can set Polyfill (or Ponyfill) for browsers that do not support requestAnimationFrame.
         */
        SweetScroll.raf = raf;
        SweetScroll.caf = caf;
        return SweetScroll;
    }());

    return SweetScroll;

}));


/***/ }),

/***/ "./assets/image/backgound1.jpg":
/*!*************************************!*\
  !*** ./assets/image/backgound1.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "build/images/backgound1.jpg";

/***/ }),

/***/ "./assets/image/backgound2.jpg":
/*!*************************************!*\
  !*** ./assets/image/backgound2.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "build/images/backgound2.jpg";

/***/ }),

/***/ "./assets/image/backgound3.jpg":
/*!*************************************!*\
  !*** ./assets/image/backgound3.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "build/images/backgound3.jpg";

/***/ }),

/***/ "./assets/image/backgound4.jpg":
/*!*************************************!*\
  !*** ./assets/image/backgound4.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "build/images/backgound4.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./assets/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_reset_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/reset.scss */ "./assets/css/reset.scss");
/* harmony import */ var _js_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/home.js */ "./assets/js/home.js");


})();

/******/ })()
;
//# sourceMappingURL=main.js.map