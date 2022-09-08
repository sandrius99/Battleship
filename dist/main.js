/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"populateBoards\": () => (/* binding */ populateBoards)\n/* harmony export */ });\nfunction populateBoards(parentDiv, name) {\r\n    const playerContentDiv = document.createElement('div');\r\n    const playerNameDiv = document.createElement('div');\r\n    const boardDiv = document.createElement('div');\r\n    playerNameDiv.innerText = name;\r\n    playerNameDiv.classList.add('playerName');\r\n    playerContentDiv.classList.add('playerContent');\r\n    boardDiv.classList.add('board');\r\n    for(let i=0; i<10; i++){\r\n        for(let j=0; j<10; j++){\r\n            const squareDiv = document.createElement('div');\r\n            squareDiv.classList.add(\"square\");\r\n            squareDiv.classList.add(`${i},${j}`);\r\n            boardDiv.appendChild(squareDiv);\r\n\r\n\r\n        }\r\n    }\r\n    playerContentDiv.appendChild(playerNameDiv);\r\n    playerContentDiv.appendChild(boardDiv);\r\n    parentDiv.appendChild(playerContentDiv);\r\n\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/dom.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n// const Ship = require('./Ship');\r\n\r\n\r\nconst Gameboard = () => {\r\n    // Create 10x10 board\r\n    let gameboard = new Array(10).fill(0).map(() => new Array(10).fill(''));\r\n    let ships = 5;\r\n\r\n    function placeShip(length, x, y, horizontal = true ){\r\n        \r\n        if(length + x - 1 > 9) return;\r\n\r\n        // Check if place not taken\r\n        for(let i=0; i< length; i++){\r\n            if(gameboard[y][x+i] !== '') return\r\n        }\r\n        \r\n        const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(length, x, y, horizontal);\r\n        for(let i=0; i < length; i++){\r\n            if(horizontal){\r\n               \r\n                gameboard[y][x+i] = ship;\r\n            } else gameboard[y+i][x] = ship;\r\n        }\r\n    }\r\n\r\n    function receiveAttack(x,y){\r\n        if(gameboard[y][x] !== ''){\r\n            gameboard[y][x].hit(x,y);\r\n            if(gameboard[y][x].isSunk()) ships--;\r\n        } else {\r\n            gameboard[y][x] = 'missed';\r\n        } \r\n\r\n    }\r\n\r\n    function allShipsSunk() {\r\n        return ships === 0;\r\n    }\r\n\r\n    return {placeShip, receiveAttack, allShipsSunk};\r\n\r\n}\r\n\r\n// module.exports = Gameboard;\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\r\n\r\n\r\nconst contentDiv = document.querySelector('.content');\r\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.populateBoards)(contentDiv, 'Player');\r\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.populateBoards)(contentDiv, 'Computer');\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Ship = (length, x, y, horizontal = true) => {\r\n    let positions = [];\r\n    for(let i=0; i<length; i++){\r\n        if(horizontal){\r\n            positions[y + ',' + (x+i)] = 'intact';\r\n        } else positions[(y+1) + ',' + x] = 'intact';\r\n    }\r\n\r\n\r\n    function hit(x, y){\r\n        positions[y + ',' + x] = 'hit';\r\n    }\r\n\r\n    function isSunk(){\r\n        for(const position in positions){\r\n\r\n            if (positions[position] === 'intact') return false;\r\n        } \r\n        \r\n        return true;\r\n    }\r\n\r\n    return {hit, isSunk};\r\n}\r\n\r\n// module.exports = Ship;\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;