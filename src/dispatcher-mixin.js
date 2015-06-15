import Dispatcher from './dispatcher.js';

let _dispatcher;

export default {
  listen(eventName, callbackMethod) {
    this._getDispatcher().listen(eventName, callbackMethod.bind(this), this);
  },

  emit(eventName, data) {
    this._getDispatcher().emit(eventName, data, this);
  },

  setDispatcher(dispatcher) {
    if (!(dispatcher instanceof  Dispatcher)) {
      throw new TypeError('Dispatcher instance expected');
    }

    _dispatcher = dispatcher;
  },

  _getDispatcher() {
    if (!_dispatcher) {
      _dispatcher = new Dispatcher();
    }

    return _dispatcher;
  }
};