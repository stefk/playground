import React from 'react';
import Player from './player.jsx';

export default class Renderer {
  constructor(dispatcher, element) {
    this._dispatcher = dispatcher;
    this._element = element;
    this._dispatcher.listen('render', this.render.bind(this), this);
  }

  render(data) {
    data.dispatcher = this._dispatcher;
    React.render(React.createElement(Player, data), this._element);
  }
}
