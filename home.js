'use strict';


/*
Switch weight button from kilograms to lbs
*/
function weightSwitch() {
  // by default start in lbs
  let button = document.querySelector('#weightMetric');
  let weightSelect = document.querySelector('#weightSelect');
  if (button.value === "kgs") {
    button.value = "lbs";
    weightSelect = "Weight(kgs):";
  } else if (button.value === "lbs") {
    button.value = "kgs";
    weightSelect = "Weight(lbs):";
  }

  document.getElementById('weightSelect').innerHTML = weightSelect;
}

/* Write a function that calculates the amount needed */
function loadBarbell(loadAmount) {
  // 45lb barbell for now
  const BARBELL = 45;
  const FORTYFIVE = 45;
  const TWENTYFIVE = 25;
  const TEN = 10;
  const FIVE = 5;
  const TWOHALF = 2.5;
  const PLATES = [FORTYFIVE, TWENTYFIVE, TEN, FIVE, TWOHALF]; // array to loop through of the weight amounts

  const needForLoad = []; // the plates needed for the load

  // first remove the weight of the barbell
  loadAmount = loadAmount - BARBELL;
  // divide it by 2. we need this amount on both sides, but we're only displaying one side
  loadAmount = loadAmount / 2;

  let i = 0;
  while (loadAmount > 0) {
    while (PLATES[i] < loadAmount) {
      loadAmount = loadAmount - PLATES[i];
      needForLoad.push(loadAmount);
    }
    i++;
  }

  return needForLoad;
}

console.log(loadBarbell(180));
