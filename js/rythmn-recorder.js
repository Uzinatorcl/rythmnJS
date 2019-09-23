var recordedRythmn = {};
var currentPlaytime = null;
var recording = false;

function triggerRecordingMode() {
  if(!recording) {
    recording = true;
  console.log('recording started');
  $('.recordInput').text('recording').toggleClass('recording');
  } else {
    recording = false;
    console.log('recording stopped');
    $('.recordInput').text('not recording').toggleClass('recording');
  }
}

function registerArrow() {

}


// function leftKeyDownRecord() {
//   console.log('left key pressed');
// }
// function downKeyDownRecord() {
//   console.log('down key pressed');
// }
// function rightKeyDownRecord() {
//   console.log('right key pressed');
// }
// function upKeyDownRecord() {
//   console.log('up key pressed');
// }
// function spaceBarDownRecord() {
//   console.log('space key pressed');
// }
