// OLD IDEA. Do not use. Also you can't name your variables starting with a number stupid!
//
// //Store the stations in an array for each line
// var n_line = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
// var l_line = ["8th","6th","Union Square","3rd","1st"]
// var 6_line = ["Grand Central","33rd","28th","23rd","Union Square","Astor Place"]

window.onload = function() {
  startListeners();
}
var choices = document.getElementById('choices');
var nLine = document.getElementsByClassName('nLine');
var lLine = document.getElementsByClassName('lLine');
var sixLine = document.getElementsByClassName('sixLine');
//Convert nLine et al to REAL ARRAYS with prototype voodoo
var nLineArr = Array.prototype.slice.call(nLine);
var lLineArr = Array.prototype.slice.call(lLine);
var sixLineArr = Array.prototype.slice.call(sixLine);
var startLocation;
var nextLocation;
function addChoice() {
  if(startLocation) {
    nextLocation = this
  } else {
    startLocation = this;
  }
}
function startListeners() {
//Stick listeners to all the stops
for (var i = 0; i < nLine.length; i++) {
  nLine[i].addEventListener('click', addChoice)
  }
for (var i = 0; i < lLine.length; i++) {
  lLine[i].addEventListener('click', addChoice)
  }
for (var i = 0; i < sixLine.length; i++) {
  sixLine[i].addEventListener('click', addChoice)
  }
}