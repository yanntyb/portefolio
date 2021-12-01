/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
     *
     * @param parent
     * @param content
     * @param speed
     * @param br
     */
    constructor(parent, content, speed, br) {
        this.parent = document.querySelector(parent);
        this.content = content;
        this.speed = speed;
        this.br = br;
        this.div = null;
        this.span = [];
        this.index = 0;
        this.len = 0;
        this.__init__();
    }

    createDom() {
        this.div = document.createElement("div");
        this.parent.appendChild(this.div);
        this.div.classList.add("main-title");
        for(let char of this.content){
            if(char === this.br){
                this.div.innerHTML += "<br>";
            }
            else{
                const span = document.createElement("span");
                this.div.appendChild(span);
                span.innerText = char;
                this.span.push(span);
                this.len++;
            }
        }
    }

    animIn() {
        this.interval = window.setInterval(() =>
        {
            const char = this.span[this.index];
            console.log(char.innerHTML);
            char.style.animationName = "fadein";
            char.style.animationDuration = `${this.speed}ms`;
            char.style.animationFillMode = "forwards";
            this.index++;
            if(this.index === this.len){
                window.setTimeout(() => {
                    this.clearDom();
                },this.speed + 100);
                clearInterval(this.interval);

            }
        }, this.speed);
    }

    clearDom(){
        for(let span of this.span){
            this.div.innerHTML = this.content.replace(this.br,"<br>");
            span.remove();
        }
    }

    __init__() {
        this.createDom();
        this.animIn();
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
/* harmony import */ var _css_home_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/home.css */ "./assets/css/home.css");
/* harmony import */ var _classes_TextAnim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/TextAnim */ "./assets/js/classes/TextAnim.js");
/* harmony import */ var _classes_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Nav */ "./assets/js/classes/Nav.js");
/* harmony import */ var sweet_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweet-scroll */ "./node_modules/sweet-scroll/sweet-scroll.js");
/* harmony import */ var sweet_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweet_scroll__WEBPACK_IMPORTED_MODULE_3__);





document.addEventListener(
    'DOMContentLoaded',
    () => {
        new (sweet_scroll__WEBPACK_IMPORTED_MODULE_3___default())({});
    },
    false,
);

new _classes_TextAnim__WEBPACK_IMPORTED_MODULE_1__.TextAnim("#first","Yann Tyburczy",100)
new _classes_TextAnim__WEBPACK_IMPORTED_MODULE_1__.TextAnim("#second","Développeur Web / Web mobile$Freelance",200,"$");

new _classes_Nav__WEBPACK_IMPORTED_MODULE_2__.Nav(document.querySelector("#nav"),130);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./assets/css/component/main-title.css":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./assets/css/component/main-title.css ***!
  \***************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Merriweather&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main-title{\r\n    position: relative;\r\n    width: 100%;\r\n    text-align: center;\r\n    font-size: 280%;\r\n    text-transform: uppercase;\r\n    font-family: 'Merriweather', serif;\r\n    color: whitesmoke;\r\n}\r\n\r\n.main-title > span{\r\n    opacity: 0;\r\n}\r\n\r\n@keyframes fadein{\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to{\r\n        opacity: 100;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./assets/css/component/main-title.css"],"names":[],"mappings":"AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,kBAAkB;IAClB,eAAe;IACf,yBAAyB;IACzB,kCAAkC;IAClC,iBAAiB;AACrB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI;QACI,UAAU;IACd;IACA;QACI,YAAY;IAChB;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Merriweather&display=swap');\r\n\r\n.main-title{\r\n    position: relative;\r\n    width: 100%;\r\n    text-align: center;\r\n    font-size: 280%;\r\n    text-transform: uppercase;\r\n    font-family: 'Merriweather', serif;\r\n    color: whitesmoke;\r\n}\r\n\r\n.main-title > span{\r\n    opacity: 0;\r\n}\r\n\r\n@keyframes fadein{\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to{\r\n        opacity: 100;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./assets/css/component/nav.css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./assets/css/component/nav.css ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#nav{\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 10vh;\r\n    z-index: 10;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    background-color: rgba(194, 194, 194, 0.30);\r\n    box-shadow: 0px 0px 8px 7px rgba(0,0,0,0.3);\r\n}\r\n\r\n#nav > *{\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n    color: whitesmoke;\r\n}\r\n\r\n@keyframes bg-toWhite{\r\n    from{\r\n        background-color: rgba(194, 194, 194, 0.30);\r\n    }\r\n    to{\r\n        background-color: whitesmoke;\r\n    }\r\n}\r\n\r\n@keyframes bg-toRgb{\r\n    from{\r\n        background-color: whitesmoke;\r\n    }\r\n    to{\r\n        background-color: rgba(194, 194, 194, 0.30);\r\n    }\r\n}\r\n\r\n@keyframes color-toBlack{\r\n    from {\r\n        color: whitesmoke;\r\n    }\r\n    to{\r\n        color: black;\r\n    }\r\n}\r\n@keyframes color-toWhite{\r\n    from {\r\n        color: black;\r\n    }\r\n    to{\r\n        color: whitesmoke;\r\n    }\r\n}\r\n", "",{"version":3,"sources":["webpack://./assets/css/component/nav.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,mBAAmB;IACnB,2CAA2C;IAC3C,2CAA2C;AAC/C;;AAEA;IACI,qBAAqB;IACrB,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;IACI;QACI,2CAA2C;IAC/C;IACA;QACI,4BAA4B;IAChC;AACJ;;AAEA;IACI;QACI,4BAA4B;IAChC;IACA;QACI,2CAA2C;IAC/C;AACJ;;AAEA;IACI;QACI,iBAAiB;IACrB;IACA;QACI,YAAY;IAChB;AACJ;AACA;IACI;QACI,YAAY;IAChB;IACA;QACI,iBAAiB;IACrB;AACJ","sourcesContent":["#nav{\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 10vh;\r\n    z-index: 10;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    background-color: rgba(194, 194, 194, 0.30);\r\n    box-shadow: 0px 0px 8px 7px rgba(0,0,0,0.3);\r\n}\r\n\r\n#nav > *{\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n    color: whitesmoke;\r\n}\r\n\r\n@keyframes bg-toWhite{\r\n    from{\r\n        background-color: rgba(194, 194, 194, 0.30);\r\n    }\r\n    to{\r\n        background-color: whitesmoke;\r\n    }\r\n}\r\n\r\n@keyframes bg-toRgb{\r\n    from{\r\n        background-color: whitesmoke;\r\n    }\r\n    to{\r\n        background-color: rgba(194, 194, 194, 0.30);\r\n    }\r\n}\r\n\r\n@keyframes color-toBlack{\r\n    from {\r\n        color: whitesmoke;\r\n    }\r\n    to{\r\n        color: black;\r\n    }\r\n}\r\n@keyframes color-toWhite{\r\n    from {\r\n        color: black;\r\n    }\r\n    to{\r\n        color: whitesmoke;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./assets/css/home.css":
/*!***********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./assets/css/home.css ***!
  \***********************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_component_main_title_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./component/main-title.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./assets/css/component/main-title.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_component_nav_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./component/nav.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./assets/css/component/nav.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4__);
// Imports





var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../image/backgound1.jpg */ "./assets/image/backgound1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_component_main_title_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_component_nav_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#main{\r\n    position: relative;\r\n    top: 0;\r\n    width: 100%;\r\n}\r\n\r\n.presentation{\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100vh;\r\n    box-shadow: 0px 0px 8px 7px rgba(0,0,0,0.3);\r\n}\r\n\r\n.presentation #first{\r\n    font-size: 80%;\r\n    margin-bottom: 2%;\r\n}\r\n\r\n#pres-1{\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-size: cover;\r\n    z-index: 4;\r\n}\r\n\r\n#pres-1:first-child{\r\n    padding-top: 15%;\r\n}", "",{"version":3,"sources":["webpack://./assets/css/home.css"],"names":[],"mappings":"AAGA;IACI,kBAAkB;IAClB,MAAM;IACN,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,aAAa;IACb,2CAA2C;AAC/C;;AAEA;IACI,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,yDAAgD;IAChD,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":["@import \"component/main-title.css\";\r\n@import \"component/nav.css\";\r\n\r\n#main{\r\n    position: relative;\r\n    top: 0;\r\n    width: 100%;\r\n}\r\n\r\n.presentation{\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100vh;\r\n    box-shadow: 0px 0px 8px 7px rgba(0,0,0,0.3);\r\n}\r\n\r\n.presentation #first{\r\n    font-size: 80%;\r\n    margin-bottom: 2%;\r\n}\r\n\r\n#pres-1{\r\n    background-image: url(\"../image/backgound1.jpg\");\r\n    background-size: cover;\r\n    z-index: 4;\r\n}\r\n\r\n#pres-1:first-child{\r\n    padding-top: 15%;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./assets/css/reset.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./assets/css/reset.css ***!
  \************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody{\r\n    width: 100vw;\r\n    font-family: 'Merriweather', serif;\r\n    overflow-x: hidden;\r\n    scroll-behavior: smooth;\r\n}", "",{"version":3,"sources":["webpack://./assets/css/reset.css"],"names":[],"mappings":"AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,kCAAkC;IAClC,kBAAkB;IAClB,uBAAuB;AAC3B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400&display=swap');\r\n\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody{\r\n    width: 100vw;\r\n    font-family: 'Merriweather', serif;\r\n    overflow-x: hidden;\r\n    scroll-behavior: smooth;\r\n}"],"sourceRoot":""}]);
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

/***/ "./assets/css/home.css":
/*!*****************************!*\
  !*** ./assets/css/home.css ***!
  \*****************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./home.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./assets/css/home.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_home_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_home_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./assets/css/reset.css":
/*!******************************!*\
  !*** ./assets/css/reset.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./reset.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./assets/css/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/reset.css */ "./assets/css/reset.css");
/* harmony import */ var _js_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/home.js */ "./assets/js/home.js");


})();

/******/ })()
;
//# sourceMappingURL=main.js.map