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

///////// check part  /////////////
function changeColor() {
  guaidtext.textContent = "🎉 correct number !";
  body.classList.remove("bg-gray-800");
  body.classList.add("bg-green-500");
}
function changeColorf() {
  guaidtext.textContent = "💥 You lost the game!";
  body.classList.remove("bg-gray-800");
  body.classList.add("bg-red-800");
}
function changeBack() {
  if (body.classList.contains("bg-green-500")) {
    body.classList.remove("bg-green-500");
    body.classList.add("bg-gray-800");
  } else {
    body.classList.remove("bg-red-800");
    body.classList.add("bg-gray-800");
  }
}
againbtn.addEventListener("click", function () {
  computerguess = Math.trunc(Math.random() * 20) + 1;
  changeBack();
  counter = 20;
  guaidtext.textContent = "Start guessing ...";
  userguess.value = "";
  shownumber.textContent = "?";
  score.textContent = 20;
});
checkbtn.addEventListener("click", function () {
  const uservalue = Number(userguess.value);
  // /////// if user dont't enter anything ///////
  if (!uservalue) {
    guaidtext.textContent = "⛔ No number !";
  }
  // /////// if user found the correct number //////////
  else if (uservalue === computerguess) {
    shownumber.textContent = computerguess;
    changeColor();
    if (counter > total) {
      total = counter;
      highscore.textContent = total;
    }
  }
  // //////// if user entered higher than computer ////
  else if (uservalue > computerguess) {
    if (counter > 1) {
      counter--;
      guaidtext.textContent = "📈 Too high!";
      score.textContent = counter;
    } else {
      changeColorf();
    }
  }
  // //////// if user entered lower than computer ////
  else {
    if (counter > 1) {
      counter--;
      guaidtext.textContent = "📉 Too low!";
      score.textContent = counter;
    } else {
      changeColorf();
    }
  }
});
