// for(var spawnIndex = 0; spawnIndex < testSong.length; spawnIndex++) {

// }

class keySpawn {
  constructor(key, time, buttonIndex) {
    this.key = key;
    this.domParent = $('.' + key + 'spawnArea');
    this.buttonIndex = buttonIndex;
    // this.domElementClass = key + 'spawn';
    this.time = time;
  }

  render() {
    var domElement = $('<div>').addClass(this.key + 'spawn ' + this.buttonIndex);
    this.domParent.append(domElement);
  }
}
