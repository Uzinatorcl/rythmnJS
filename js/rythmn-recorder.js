var recordedRythmn = [];
var currentPlaytime = null;
var previousPlaytime = null;
var recording = false;

function triggerRecordingMode() {
  if (!recording) {
    recording = true;
    previousPlaytime = Math.floor(window.performance.now());//at start of record gets the amount of time that has gone by since you have opened the browser
    console.log('recording started');
    $('.recordInput').text('recording').toggleClass('recording');
  } else {
    recording = false;
    console.log('recording stopped');
    console.log(recordedRythmn);
    $('.recordInput').text('not recording').toggleClass('recording');
  }
}

function recordingInput(key) {
  var registeredKey = {};
  // if(recordedRythmn[0]) {
  //   previousPlaytime = recordedRythmn[recordedRythmn.length-1].time
  //   console.log(previousPlaytime);
  // }
  registeredKey['key'] = key;
  currentPlaytime = Math.floor(window.performance.now());

  var offsetTime = currentPlaytime - previousPlaytime;
  registeredKey['time'] = offsetTime;
  recordedRythmn.push(registeredKey);
  previousPlaytime = currentPlaytime;
}


function buttonPressed(event) {
  if (!recording) {
    return;
  }
  var currentKeyCode = event.keyCode;
  var controls = {
    37: () => recordingInput('LEFT'),
    40: () => recordingInput('DOWN'),
    39: () => recordingInput('RIGHT'),
    38: () => recordingInput('UP'),
    32: () => recordingInput('SPACE')
  }

  if (controls.hasOwnProperty(currentKeyCode)) {
    controls[currentKeyCode]();
  }
}
