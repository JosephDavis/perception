'use strict';

/**
 * Manages a number of listeners.
 * @private
 */
class Listeners extends Array {

  /**
   * Remove the given listener. If the listener is not present, this method does nothing.
   *
   * @param  {function} listener - the listener to remove
   */
  remove(listener) {
    const index = super.indexOf(listener);
    if (index > -1) {
      this.splice(index, 1);
    }
  }

  /**
   * Creates a copy of the listeners.
   *
   * @return {Listeners} the copy
   */
  copy() {
    return new Listeners(...this);
  }

  /**
   * Notify listeners of an event, optionally providing an object.
   *
   * @param {*} [object] - the object to pass to listeners
   */
  notify(object) {
    for (const listener of this) {
      listener(object);
    }
  }
}

module.exports = Listeners;
