'use strict';

$(document).ready(() => {

//divide circle deg (360deg) by the number of slices(37), generate slice with appropriate
//color, number and degree rotation and then append to div with class "wheel".
console.log('script linked');


let rouletteNums = [0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26];

let obj = {};
let arr = [];
const generateSlices = () => {
  let x = 360/37;
  let degreeCounter = 0;
  let colorChoice = true
  let color = '';
  console.log('degrees per slice: ', x);
  rouletteNums.forEach((slice) => {
    obj[slice] = degreeCounter;
    degreeCounter+= x;
    // console.log("counter: " + counter);
    // console.log("obj: " + obj[slice]);
    if (slice === 0) {
      color = 'green'
    } else if (colorChoice === true) {
      color = 'black'
    } else {
      color = 'red'
    }
    colorChoice = !colorChoice;

    arr.push(`make slice with number ${slice} that is rotated ${degreeCounter} degrees and is the color ${color}`)
  })
  return arr;
}

// generateSlices();


}); //closes document
