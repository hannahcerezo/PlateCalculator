'use strict';


// /*
// Switch weight button from kilograms to lbs
// */
// function weightSwitch() {
//   // by default start in lbs
//   let button = document.querySelector('#weightMetric');
//   let weightSelect = document.querySelector('#weightSelect');
//   if (button.value === "kgs") {
//     button.value = "lbs";
//     weightSelect = "Weight(kgs):";
//   } else if (button.value === "lbs") {
//     button.value = "kgs";
//     weightSelect = "Weight(lbs):";
//   }

//   document.getElementById('weightSelect').innerHTML = weightSelect;
// }

document.querySelector('.selectKgs').addEventListener('click', function () {
  document.querySelector('.promptKgs').textContent = 'Enter the weight you want to load:';

  // create input field 
  const weightInputField = document.createElement('input');
  weightInputField.setAttribute('type', 'number');
  let weightInputVal = document.body.appendChild(weightInputField);

  // enter button
  const enterWeightButton = document.createElement('button');
  enterWeightButton.innerText = 'Enter';
  document.body.appendChild(enterWeightButton);

  // when user enters the weight, calculate the plates needed and post it
  enterWeightButton.addEventListener('click', function () {

    const userWeightKgs = Number(weightInputVal.value);
    // pass through conversion and get the array
    loadBarbellKgs(userWeightKgs);
  })
});


function loadBarbellKgs(weightKgs) {
  const BARBELLKGS = 20;
  const PLATES = [25, 20, 15, 10, 5, 2.5, 1.25];
  const needForLoadKgs = [];

  // needs to be divisible by 2.5
  if (weightKgs % 2.5 !== 0) {
    needForLoadKgs.push(`Cannot load this weight. Weight must be divisible by 5`);
  } else {
    needForLoadKgs.push(`bar`);

    // subtract the bar
    let userLoadAmtKgs = weightKgs - BARBELLKGS;
    // divide by 2
    userLoadAmtKgs = userLoadAmtKgs / 2;

    for (let i = 0; i < PLATES.length; i++) {
      while (PLATES[i] <= userLoadAmtKgs) {
        userLoadAmtKgs = userLoadAmtKgs - PLATES[i];
        needForLoadKgs.push(PLATES[i]);
      } // end while
    } // end for
  } // end else

  document.querySelector('.messageKgs').textContent = 'The plates you need are: ';
  document.querySelector('.platesNeededKgs').textContent = needForLoadKgs;
}