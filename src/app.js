/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#newDomain").innerHTML = generateDomain();
  });

  let firstWord = ["great", "main", "first"];
  let secondWord = ["world", "earth", "tech", "solar"];
  let thirdWord = ["company", "systems", "corporation"];
  let dominio = "";
  let generateDomain = () => {
    for (let i = 0; i < firstWord.length; i++) {
      for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++)
          dominio += firstWord[i] + secondWord[j] + thirdWord[k] + ".es //";
      }
    }
    return dominio;
  };
};
