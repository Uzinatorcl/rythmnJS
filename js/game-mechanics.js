var gameStarted = false;
var runTime = null;
var amountOfKeysToDrop = testSong.length;
var keyIndex = 0;
//$('.0').position().top this will retrieve the info as it drops


function startGame() {
  console.log('gameStarted');
  var currentSequence = testSong.slice();
  function beginKeyDrop() {
    currentSequence.shift();//pops off the first thing in the array
    initiateKeyDrop(keyIndex);
      keyIndex++;
    if (currentSequence.length) {
      setTimeout(beginKeyDrop, currentSequence[0].time);
    }

  }
  setTimeout(beginKeyDrop, currentSequence[0].time);
}

function initiateKeyDrop(target) {
  $('.' + target).addClass('moveSpawn');

}
