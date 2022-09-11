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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearBoard\": () => (/* binding */ clearBoard),\n/* harmony export */   \"computerAttack\": () => (/* binding */ computerAttack),\n/* harmony export */   \"displayWinner\": () => (/* binding */ displayWinner),\n/* harmony export */   \"placeShip\": () => (/* binding */ placeShip),\n/* harmony export */   \"populateBoards\": () => (/* binding */ populateBoards)\n/* harmony export */ });\nfunction populateBoards(parentDiv, player) {\r\n    \r\n    const playerContentDiv = document.createElement('div');\r\n    const playerNameDiv = document.createElement('div');\r\n    const boardDiv = document.createElement('div');\r\n    playerNameDiv.innerText = player.getName();\r\n    playerNameDiv.classList.add('playerName');\r\n    playerContentDiv.classList.add('playerContent');\r\n    boardDiv.classList.add('board');\r\n    for(let i=0; i<10; i++){\r\n        for(let j=0; j<10; j++){\r\n            const squareDiv = document.createElement('div');\r\n            squareDiv.classList.add(\"square\");\r\n            squareDiv.classList.add(`position${i}${j}`);\r\n            if(player.getName() === 'Computer'){\r\n            squareDiv.addEventListener('click', e => {\r\n                if(player.getShotAt().includes(`${j},${i}`)) return;\r\n                player.receiveAttack(j,i);\r\n                const squareState = player.getGameboard()[i][j];\r\n                \r\n                assignDivColor(squareDiv, squareState);\r\n               \r\n                \r\n                });\r\n            }\r\n            boardDiv.appendChild(squareDiv);\r\n\r\n\r\n\r\n        }\r\n    }\r\n    playerContentDiv.appendChild(playerNameDiv);\r\n    playerContentDiv.appendChild(boardDiv);\r\n    parentDiv.appendChild(playerContentDiv);\r\n\r\n\r\n}\r\n\r\nfunction placeShip(length, x, y, isPlayer, horizontal = true, ) {\r\n    // Check which player board elements to edit\r\n    const boardNumber = isPlayer ? 0 : 1;\r\n    for(let i = 0; i < length; i++){\r\n        if(horizontal){\r\n            const squareDiv = document.querySelectorAll(`.position${y}${x+i}`)[boardNumber];\r\n            squareDiv.classList.add('ship');            \r\n        }\r\n    }\r\n}\r\n\r\nfunction computerAttack(x,y, squareState) {\r\n   \r\n    const squareDiv = document.querySelector(`.position${y}${x}`);\r\n    assignDivColor(squareDiv, squareState);\r\n\r\n}\r\n\r\nfunction assignDivColor(squareDiv, squareState) {\r\n    if(squareState === 'missed')\r\n    squareDiv.classList.add('miss');\r\n    else squareDiv.classList.add('hit');\r\n}\r\n\r\nfunction clearBoard(parentDiv) {\r\n    if(document.querySelector('.winner'))\r\n    document.querySelector('.winner').remove();\r\n    \r\n    parentDiv.innerHTML = '';\r\n}\r\n\r\nfunction displayWinner(name) {\r\n    const parentDiv = document.querySelector('.container');\r\n    const insertBeforeDiv = document.querySelector('.content');\r\n    const winnerDiv = document.createElement('div');\r\n    winnerDiv.innerText = `${name} won!`;\r\n    winnerDiv.classList.add('winner');\r\n    if(name === 'Computer') winnerDiv.style.color = \"red\";\r\n    parentDiv.insertBefore(winnerDiv, insertBeforeDiv);\r\n    disableBoard();\r\n\r\n}\r\n\r\nfunction disableBoard() {\r\n    document.querySelectorAll('.board')[1].style.pointerEvents = \"none\";\r\n}\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/dom.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n// const Ship = require('./Ship');\r\n\r\n\r\nconst Gameboard = () => {\r\n    // Create 10x10 board\r\n    let gameboard = new Array(10).fill(0).map(() => new Array(10).fill(''));\r\n    let ships = 5;\r\n\r\n    function placeShip(length, x, y, horizontal = true ){\r\n        \r\n        if(length + x - 1 > 9) return;\r\n\r\n        // Check if place not taken\r\n        for(let i=0; i< length; i++){\r\n            if(gameboard[y][x+i] !== '') return\r\n        }\r\n        \r\n        const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(length, x, y, horizontal);\r\n        for(let i=0; i < length; i++){\r\n            if(horizontal){\r\n               \r\n                gameboard[y][x+i] = ship;\r\n            } else gameboard[y+i][x] = ship;\r\n        }\r\n    }\r\n\r\n    function receiveAttack(x,y){\r\n        if(gameboard[y][x] !== ''){\r\n            gameboard[y][x].hit(x,y);\r\n            if(gameboard[y][x].isSunk()) ships--;\r\n            return true;\r\n        } else {\r\n            gameboard[y][x] = 'missed';\r\n            return false;\r\n        } \r\n\r\n    }\r\n\r\n    function allShipsSunk() {\r\n        return ships === 0;\r\n    }\r\n\r\n    function getGameboard() {\r\n        return gameboard;\r\n    }\r\n    return {placeShip, receiveAttack, allShipsSunk, getGameboard};\r\n\r\n}\r\n\r\n// module.exports = Gameboard;\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"randomSequences\": () => (/* binding */ randomSequences)\n/* harmony export */ });\nfunction randomSequences() {\r\n    let positions = [];\r\n    let randomX = [0,1,2,3,4];\r\n    let randomY = [0,1,2,3,4];\r\n    randomX = randomX.sort((a, b) => 0.5 - Math.random());\r\n    randomY = randomY.sort((a, b) => 0.5 - Math.random());\r\n\r\n    for(let i=0; i<5; i++){\r\n        let position = [];\r\n        position.push(randomX.pop());\r\n        position.push(randomY.pop());\r\n        positions.push(position);\r\n    }\r\n\r\n    return positions;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/helper.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\n\r\n\r\n\r\n\r\nconst contentDiv = document.querySelector('.content');\r\n\r\ndocument.getElementById('startBtn').addEventListener('click', e => {\r\n   (0,_dom__WEBPACK_IMPORTED_MODULE_0__.clearBoard)(contentDiv);\r\n    startGame();\r\n   \r\n})\r\n\r\nstartGame();\r\n\r\n\r\nfunction startGame() {\r\n    \r\n    const player = (0,_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Player\");\r\n    const computer = (0,_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Computer\");\r\n    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.populateBoards)(contentDiv, player);\r\n    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.populateBoards)(contentDiv, computer);\r\n    \r\n    let lengths = [5,4,3,3,2];\r\n    let shift = 0\r\n    for(let i = 0; i < 5; i++){\r\n        const length = lengths.shift();\r\n        shift += 1 ;\r\n        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.placeShip)(length ,i,i+shift,true);\r\n        player.placeShip(length, i, i+shift);\r\n    }\r\n    \r\n     lengths = [5,4,3,3,2];\r\n     let randomOrders = (0,_helper__WEBPACK_IMPORTED_MODULE_2__.randomSequences)();\r\n     shift = Math.floor(Math.random() * 5);\r\n    for(let i = 0; i < 5; i++){\r\n        \r\n        const randomOrder = randomOrders.shift();\r\n        const length = lengths.shift();\r\n        //  placeShip(length, i+randomOrder[0], shift+ randomOrder[1],false);\r\n        computer.placeShip(length, i+randomOrder[0], shift + randomOrder[1]);\r\n    }\r\n\r\n    let computerShotAtSquares = [...computer.getShotAt()];\r\n\r\n    document.querySelectorAll('.board')[1].addEventListener('click', e => {\r\n        if(computer.playerLost()){\r\n            (0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayWinner)(player.getName());\r\n        }\r\n        if(computerShotAtSquares.length !== computer.getShotAt().length){\r\n            computerShotAtSquares = [...computer.getShotAt()]\r\n            const randomCoordinates = computer.randomPlay();\r\n            player.receiveAttack(randomCoordinates[0],randomCoordinates[1]);\r\n            (0,_dom__WEBPACK_IMPORTED_MODULE_0__.computerAttack)(randomCoordinates[0],randomCoordinates[1], player.getGameboard()[randomCoordinates[1]][randomCoordinates[0]])\r\n        }\r\n        if(player.playerLost()){\r\n            (0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayWinner)(computer.getName());\r\n        }\r\n   \r\n})\r\n}\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\r\n\r\nconst Player = (name) => {\r\n    const gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    let shotAt = [];\r\n    let possibleMoves = [];\r\n    for(let y=0; y<10; y++){\r\n        for(let x=0; x<10; x++){\r\n            possibleMoves.push([y,x]);\r\n        }\r\n    }\r\n    possibleMoves = possibleMoves.sort((a, b) => 0.5 - Math.random());\r\n\r\n    function placeShip(length, x, y){\r\n        gameboard.placeShip(length, x, y);\r\n    }\r\n\r\n    function receiveAttack( y, x){\r\n        if(shotAt.includes(`${y},${x}`)) return;\r\n        shotAt.push(`${y},${x}`);\r\n        gameboard.receiveAttack(y, x);\r\n    }\r\n\r\n    function randomPlay(opponent){\r\n        const move = possibleMoves.pop();\r\n        // opponent.receiveAttack()\r\n        return move;\r\n    }\r\n\r\n    function playerLost(){\r\n        return gameboard.allShipsSunk();\r\n    }\r\n\r\n    function getName() {\r\n        return name;\r\n    }\r\n\r\n    function getShotAt() {\r\n        return shotAt;\r\n    }\r\n\r\n    function getGameboard() {\r\n        return gameboard.getGameboard();\r\n    }\r\n\r\n    return {placeShip, receiveAttack, randomPlay, playerLost, getName, getShotAt, getGameboard};\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://battleship/./src/player.js?");

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