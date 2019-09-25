$(document).ready(initializeApp);

function initializeApp() {
  addEventListeners();
}

function addEventListeners() {
  // $('body').on('click', '.recordInput', triggerRecordingMode);
  // $(document).on('keydown', function(event) {
  //   if(event.keyCode === 13) {
  //     triggerRecordingMode();
  //   }
  // })
  $(document).on('keydown', buttonPressed);
}


function buttonPressed(event) {
  var currrentKeyCode = event.keyCode;
  var controls = {
    37 : leftKeyDown,
    40 : downKeyDown,
    39 : rightKeyDown,
    38 : upKeyDown,
    32 : spaceBarDown,
    13 : enterKeyDown
  }

    if(controls.hasOwnProperty(currrentKeyCode)) {
        controls[currrentKeyCode]();
    }
}

function leftKeyDown() {
  console.log('left key pressed');
}
function downKeyDown() {
  console.log('down key pressed');
}
function rightKeyDown() {
  console.log('right key pressed');
}
function upKeyDown() {
  console.log('up key pressed');
}
function spaceBarDown() {
  console.log('space key pressed');
}
function enterKeyDown() {
  console.log('enter key pressed');
}
