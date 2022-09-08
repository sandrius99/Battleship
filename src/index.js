import { populateBoards } from "./dom";
import Gameboard from "./gameboard";

const contentDiv = document.querySelector('.content');
populateBoards(contentDiv, 'Player');
populateBoards(contentDiv, 'Computer');