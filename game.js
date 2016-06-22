var W = 640;
var H = 1136;
var SCORE = 0;
var BEST = 0;
var game = new Phaser.Game(W, H, Phaser.CANVAS, 'game', null, false, false);
game.state.add('load', load);
game.state.add('menu', menu);
game.state.add('play', play);
game.state.start('load');
