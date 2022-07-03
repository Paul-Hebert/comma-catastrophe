import { randomItemInArray } from "./utils";
import { sentences } from "./sentences";

console.log("js loaded");

const ui = {
  sentence: document.querySelector(".sentence"),
  form: document.querySelector(".game-form"),
};

const state = {
  startSentence: null,
  modifiedSentence: null,
};

init();

function newSentence() {
  console.log("newSentence");
  state.startSentence = randomItemInArray(sentences);
  state.modifiedSentence = state.startSentence.replaceAll(",", "");

  ui.sentence.textContent = state.modifiedSentence;
}

function init() {
  console.log("init");
  newSentence();

  ui.form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (ui.sentence.textContent.trim() === state.startSentence) {
      alert("success!");
      newSentence();
    } else {
      alert("nope!");
    }
  });
}
