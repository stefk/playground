import debug from 'debug';

const DEBUG_PREFIX = 'dispatcher';

export default class Dispatcher {
  constructor() {
    this._listeners = {};
    this.log = debug(DEBUG_PREFIX);
  }

  setDebugMode(isDebug) {
    debug[isDebug ? 'enable' : 'disable'](DEBUG_PREFIX);
  }

  listen(eventName, callback, receiver) {
    if (!this._listeners[eventName]) {
      this._listeners[eventName] = [];
    }

    this._listeners[eventName].push({callback, receiver});
  }

  emit(eventName, payload, emitter) {
    this.log(
      'event "%s" emitted (emitter: %o, payload: %o)', 
      eventName, emitter, payload
    );

    if (this._listeners[eventName]) {
      this._listeners[eventName].forEach(listener => {
        this.log(
          '... propagating "%s" (receiver: %o)', 
          eventName, listener.receiver
        );     
        listener.callback(payload);
      });
    } else {
      this.log('... no listeners attached to "%s"', eventName);
    }
  }
}

