import React from 'react';

import WiredComponent from './wired-component.js';

export default class Player extends WiredComponent {
  componentDidMount() {
    this.listen('foo', this.test);
  }

  test() {
    this.emit('bar', {a: 123});
  }

  render() {
    return (<h1>Test</h1>);
  }
}
