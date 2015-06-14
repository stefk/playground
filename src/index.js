import Dispatcher from './dispatcher.js';
import ReactRenderer from './react-renderer.js';
import Debug from 'debug';

//Debug.storage = null;
//Debug.enable(Dispatcher.getDebugPrefix());

let dispatcher = new Dispatcher();
let renderer = new ReactRenderer(dispatcher, document.querySelector('main'));

dispatcher.emit('render', {items:[1, 2, 3]}, 'MAIN');

setTimeout(() => {
  dispatcher.emit('render', {items:[4, 5, 6]}, 'MAIN');
}, 2000);
