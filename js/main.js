// OLD IDEA. Do not use. Also you can't name your variables starting with a number stupid!
//
// //Store the stations in an array for each line
// var n_line = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
// var l_line = ["8th","6th","Union Square","3rd","1st"]
// var 6_line = ["Grand Central","33rd","28th","23rd","Union Square","Astor Place"]

window.onload = function() {
  startListeners();
  enumStepTargets();
}
// var step = 0;
// function enumStepTargets() {
//   var step1 = document.getElementById('step1');
//   var step2 = document.getElementById('step2');
//   var step3 = document.getElementById('step3');
//   var step4 = document.getElementById('step4');
// }
// function setChoice() {
//   if (step === 0) {
//     step1.innerText = this.innerText;
//     step++;
//     } else if (step === 1) {
//     step2.innerText = this.innerText;
//     step++;
//     }

    // Let's worry about potential return journeys later?

    // case 2: step3.innerText = this.innerText;
    // step++;
    // break;
    // case 3: step4.innerText = this.innerText;
    // step++;
    // break;
  // }
// }
// function showResult() {
//   var choice1 = step1.index;
//   var choice2 = step2.index;
// }
function startListeners() {
//Stick listeners to all the stops on the nLine
for (var i = 0; i < document.getElementsByClassName('nLineStops').length; i++) {
  document.getElementsByClassName('nLineStops')[i].addEventListener('click', setChoice)
  }
}