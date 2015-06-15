import React from 'react';
import DispatcherMixin from './dispatcher-mixin.js';
import Player from './components/quiz-player.jsx';

export default class Renderer {
  constructor(element) {
    this._element = element;
    this.listen('render', this.render);
  }

  render(data) {
    React.render(React.createElement(Player, data), this._element);
  }
}

Object.assign(Renderer.prototype, DispatcherMixin);