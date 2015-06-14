import React from 'react';
import Dispatcher from './dispatcher.js';
import Player from './player.jsx';

let dispatcher = new Dispatcher();

dispatcher.setDebugMode(true);
dispatcher.listen('bar', () => null, 'MAIN');
dispatcher.listen('bar', () => null, 'MAIN2');

React.render(
  React.createElement(Player, {dispatcher}), 
  document.querySelector('main')
);

dispatcher.emit('foo', null, 'MAIN');
dispatcher.emit('baz', [1, 2, 3]);
