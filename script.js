'use strict';

/* Write a function that calculates the amount needed  for lbs*/
document.querySelector('.enterWeight').addEventListener('click', function () {
  // get the weight the user wants
  const weight = Number(document.querySelector('.wantedAmount').value);


  const BARBELL = 45;
  const PLATES = [45, 25, 10, 5, 2.5]; // array to loop through of the weight amounts. No one uses 35s. stop that.
  const needForLoad = []; // the plates needed for the load

  let result;
  let label;
  if (weight % 5 !== 0) {

    label = ``;
    result = `Oops sorry. Can't load this weight. Weight must be divisible by 5`;

  } else {

    // push that we need the bar for the load. obvious, but might need this as a place holder.
    needForLoad.push(`bar`);

    // remove the weight of the barbell
    let userLoadAmount = weight - BARBELL;
    // divide it by 2. we need this amount on both sides, but we're only displaying one side
    userLoadAmount = userLoadAmount / 2;

    for (let i = 0; i < PLATES.length; i++) {

      while (PLATES[i] <= userLoadAmount) {

        userLoadAmount = userLoadAmount - PLATES[i];
        needForLoad.push(PLATES[i]);

      } // end while

    } // end for
    label = `The plates you need are: `
    result = needForLoad;
  } // end else



  document.querySelector('.labelPlatesNeeded').textContent = label;
  document.querySelector('.plates').textContent = result;
});