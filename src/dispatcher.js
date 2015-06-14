import Debug from 'debug';

const DEBUG_PREFIX = 'player:dispatcher';

export default class Dispatcher {
  constructor() {
    this._listeners = {};
    this.log = Debug(DEBUG_PREFIX);
  }

  static getDebugPrefix() {
    return DEBUG_PREFIX;
  }

  listen(eventName, callback, receiver) {
    if (!this._listeners[eventName]) {
      this._listeners[eventName] = [];
    }

    this.log(
      'registering listener for event "%s" (receiver: %o)',
      eventName, receiver
    );
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

