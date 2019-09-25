// for(var spawnIndex = 0; spawnIndex < testSong.length; spawnIndex++) {

// }

class keySpawn {
  constructor(key, time) {
    this.key = key;
    this.domParent = $('.' + key + 'spawnArea');
    // this.domElementClass = key + 'spawn';
    this.time = time;
  }

  render() {
    var domElement = $('<div>').addClass(this.key + 'spawn');
    this.domParent.append(domElement);
  }
}
