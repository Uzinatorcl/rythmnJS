var gameStarted = false;
var runTime = null;
var amountOfKeysToDrop = testSong.length;

function startGame() {
  console.log('gameStarted');
  for(var keyIndex = 0; keyIndex < amountOfKeysToDrop; keyIndex++) {
    //debugger;
    trackKeyIndex(keyIndex);
  }
}

function update() {

}

function trackKeyIndex(index) {
  setTimeout(() => {
    console.log(index);
    initiateKeyDrop(index);
  }, testSong[index].time);
}

function initiateKeyDrop(target) {
  $('.' + target).addClass('moveSpawn');

}
