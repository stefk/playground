import React from 'react';
import Dispatcher from './dispatcher.js';

export default class WiredComponent extends React.Component {
  constructor(props) {
    super(props);

    if (!(this.props.dispatcher instanceof Dispatcher)) {
      throw new Error(
        'Wired components must have a dispatcher property '
        + 'holding a Dispatcher instance'
      );
    }
  }

  listen(eventName, callbackMethod) {
    this.props.dispatcher.listen(eventName, callbackMethod.bind(this), this);
  }

  emit(eventName, data) {
    this.props.dispatcher.emit(eventName, data, this);
  }
}
