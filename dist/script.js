///////// variables part  /////////////
const againbtn = document.querySelector("#againbtn");
const userguess = document.querySelector("#numberguess");
const checkbtn = document.querySelector("#checkbutton");
const guaidtext = document.querySelector("#Textguaid");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const shownumber = document.querySelector("#shownumber");
const body = document.querySelector("#body");
let counter = 20;
let total = 0;
let computerguess = Math.trunc(Math.random() * 20) + 1;
