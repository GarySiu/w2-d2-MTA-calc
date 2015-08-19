window.onload = function() {
  startListeners();
}
// Begin init
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
var startIndex;
var nextIndex;
// End init
function checkChoice() {
  if(startLocation) { //Have we gone anywhere yet? If we have, let's compare where were.
    nextLocation = this;
    //Is our user annoying enough to have clicked the same location twice? If so ignore it.
    if (startLocation === nextLocation || (startLocation.innerText === "Union Square" && nextLocation.innerText === "Union Square")) {
      console.log("You haven't gone any stops");
      startLocation = nextLocation;
      return;
    }
    //Are we on the same line? Or are they at or going to Union Square (which is on all lines)
    if ((startLocation.attributes.class.value === nextLocation.attributes.class.value)||startLocation.attributes.innerText === "Union Square"||nextLocation.innerText === "Union Square") {
      console.log("You're on the same line");
      startIndex = getIndex(startLocation.attributes.class.value, startLocation);
      nextIndex = getIndex(this.attributes.class.value,this);
      var stopsGone = getDifference(startIndex,nextIndex);
      var answerDiv = document.createElement("div");
      answerDiv.innerText = this.innerText +" +"+ stopsGone+" stops";
      answerDiv.className = setColor(this.attributes.class.value);
      choices.appendChild(answerDiv);
      startLocation = nextLocation;
    } else {
      console.log("You're on a different line");
      var answerDiv = document.createElement("div");
      answerDiv.innerText = this.innerText;
      answerDiv.className = setColor(this.attributes.class.value);
      choices.appendChild(answerDiv)
      startLocation = nextLocation;
    }
  } else {//Haven't been anywhere? Then let's just set a start location.
    startLocation = this;
    var answerDiv = document.createElement("div");
    answerDiv.innerText = this.innerText;
    answerDiv.className = setColor(this.attributes.class.value);
    choices.appendChild(answerDiv);
  }
}
function setColor(parentClass) {
  if(parentClass === "nLine") {
    return "lineN";
  } else if(parentClass === "lLine") {
    return "lineL";
  } else {
    return "line6";
  }
}
function getIndex(parentClass,searchValue) {
  if(parentClass === "nLine") {
    return nLineArr.indexOf(searchValue);
  }
  if(parentClass === "lLine") {
    return lLineArr.indexOf(searchValue);
  }
  if(parentClass === "line6") {
    return sixLineArr.indexOf(searchValue);
  }
}
function getDifference(a,b) {
  if (a > b) {
    return a - b;
  } else {
    return b - a;
  }
}
function startListeners() {
//Stick listeners to all the stops
for (var i = 0; i < nLine.length; i++) {
  nLine[i].addEventListener('click', checkChoice)
  }
for (var i = 0; i < lLine.length; i++) {
  lLine[i].addEventListener('click', checkChoice)
  }
for (var i = 0; i < sixLine.length; i++) {
  sixLine[i].addEventListener('click', checkChoice)
  }
}