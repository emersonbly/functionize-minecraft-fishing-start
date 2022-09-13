// Functionize Minecraft Fishing Start Code

// Variables to store HTML Elements
let fishBtn = document.getElementById("fish-btn");
let charSelect = document.getElementById("character-select");
let resultImg = document.getElementById("result-img");
let numCodSpan = document.getElementById("num-cod");
let numSalmonSpan = document.getElementById("num-salmon");
let numTropicalSpan = document.getElementById("num-tropical");
let numPufferSpan = document.getElementById("num-puffer");

// Global Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;
let character = charSelect.value;

// Add Event Listener to Calculate Button
fishBtn.addEventListener("click", fishBtnClicked);

// Event handler for fishBtn
function fishBtnClicked() {
  // Check Selected Character
  let character = charSelect.value;
  fishChance(character);
}
function fishChance(character) {
  // declare variables
  let randNum = Math.random();
  let codChance = 0;
  let salmonChance = 0;
  let tropicalChance = 0;
  //set chances
  if (character === "steve") {
    codChance = 0.7;
    salmonChance = 0.9;
    tropicalChance = 0.95;
  } else if (character === "alex") {
    codChance = 0.1;
    salmonChance = 0.1;
    tropicalChance = 0.3;
  } // fish
  if (randNum < codChance) {
    numCod++;
    numCodSpan.innerHTML = numCod;
    resultImg.src = "img/Raw-Cod.png";
  } else if (randNum < salmonChance) {
    numSalmon++;
    numSalmonSpan.innerHTML = numSalmon;
    resultImg.src = "img/Raw-Salmon.png";
  } else if (randNum < tropicalChance) {
    numTropical++;
    numTropicalSpan.innerHTML = numTropical;
    resultImg.src = "img/Tropical-Fish.png";
  } else {
    numPuffer++;
    numPufferSpan.innerHTML = numPuffer;
    resultImg.src = "img/Pufferfish.png";
  }
}