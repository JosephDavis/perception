'use strict';

const events = Symbol('events');
const Listeners = require('./Listeners');

/**
 * Stores event listeners and provides the capability to notify them of events.
 */
class EventDispatcher {
  /**
   * Creates an instance of EventDispatcher.
   */
  constructor() {
    this[events] = new Map();
  }

  /**
   * Registers a listener for the provided event.
   *
   * @param {string} event - the event to add the listener to
   * @param  {function} listener - the listener to register
   * @return {EventDispatcher} the instance
   */
  addListener(event, listener) {
    if (this[events].has(event)) {
      this[events].get(event).push(listener);
    } else {
      this[events].set(event, new Listeners(listener));
    }
    return this;
  }

  /**
   * Remove the provided event listener. If the listener is not present for the  provided event,
   * the method has no operation.
   *
   * @param {string} event - the event to remove the listener from
   * @param {function} listener - the listener to remove
   */
  removeListener(event, listener) {
    if (this[events].has(event)) {
      this[events].get(event).remove(listener);
    }
  }

  /**
   * Removes any listeners for the provided event classifier.
   *
   * @param {string} event - the event to remove listeners for
   */
  removeListeners(event) {
    this[events].set(event, new Listeners());
  }

  /**
   * Gets a copy of the listeners for the provided event classifier.
   *
   * @param {string} event - the event to copy listeners from
   * @returns {Listeners} the listeners copy or null if no listeners are present
   */
  getListeners(event) {
    const listeners = this[events].get(event);
    if (listeners) {
      return listeners.copy();
    }
    return null;
  }

  /**
   * Dispatches the provided event, optionally accepting an object to pass to listeners.
   *
   * @param {string} event - the event to dispatch
   * @param {*} [object] - optional object to pass to listeners
   */
  dispatch(event, object) {
    if (this[events].has(event)) {
      // ensure only the currently present listeners receive notification
      this[events].get(event).copy().notify(object);
    }
  }
}

module.exports = EventDispatcher;
