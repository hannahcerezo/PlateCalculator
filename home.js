'use strict';


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