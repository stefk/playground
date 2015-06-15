import Dispatcher from './dispatcher.js';
import Player from './player.js';
import ReactRenderer from './react-renderer.js';
import Debug from 'debug';

Debug.storage = null;
Debug.enable(Dispatcher.getDebugPrefix());

let player = new Player();
let renderer = new ReactRenderer(document.querySelector('main'));

player.play({
  challenge: {
    choices: [
      {id: 1, text: 'Item 1'},
      {id: 2, text: 'Item 2'},
      {id: 3, text: 'Item 3'}
    ]
  },
  solution: {
    correctChoiceId: 2
  }
});
