'use strict';

const EventDispatcher = require('../event/EventDispatcher');
const delegateEventDispatcher = require('./delegateEventDispatcher');
const dispatcher = require('./symbols').dispatcher;

/**
 * Emitted when a key/value pair is set on an ObservableMap.
 *
 * @event ObservableMap#set
 * @type {object}
 * @property {string} key - the key
 * @property {*} value - the value set
 */

/**
 * Emitted when a key is removed from on an ObservableMap.
 *
 * @event ObservableMap#remove
 * @type {string} key - the key removed
 */

/**
 * Emitted when an ObservableMap is cleared. Cleared elements are provided to listeners in an array.
 *
 * @event ObservableMap#clear
 * @type {array} - array of objects containing a key and value property for each cleared element
 */

/**
 * Provides the functionality for observing changes to a Map. All instance methods available on Map
 * and EventDispatcher are available to an ObservableMap.
 */
class ObservableMap extends Map {
  /**
   * Instantiates a new ObservableMap. Arguments are forwarded to the Map constructor.
   */
  constructor() {
    super(...arguments);
    this[dispatcher] = new EventDispatcher();
  }

  /**
   * Adds a new element with a specified key and value.
   *
   * @emits ObservableMap#set
   * @param {*} key - the key of the element
   * @param {*} value - the value of the element
   */
  set(key, value) {
    super.set(key, value);
    this.dispatch('set', {
      key,
      value
    });
  }

  /**
   * Removes the element with the specified key.
   *
   * @emits ObservableMap#remove
   * @param  {*} key - the key of the element
   * @return {*} true if an element existed and was removed, otherwise false
   */
  delete(key) {
    if (super.delete(key)) {
      this.dispatch('remove', key);
      return true;
    }
    return false;
  }

  /**
   * Removes all elements.
   *
   * @emits ObservableMap#clear
   */
  clear() {
    const cleared = [];
    this.forEach((value, key) => {
      cleared.push({
        key,
        value
      });
    });
    super.clear();
    this.dispatch('clear', cleared);
  }
}

delegateEventDispatcher(ObservableMap);

module.exports = ObservableMap;
