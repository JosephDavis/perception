'use strict';

const EventDispatcher = require('../event/EventDispatcher');
const delegateEventDispatcher = require('./delegateEventDispatcher');
const dispatcher = require('./symbols').dispatcher;

/**
 * Provides listeners with the key and value of the element set on the map.
 *
 * @event ObservableMap#set
 * @type {object}
 * @property {string} key - the key
 * @property {*} value - the value set
 */

/**
 * Provides listeners with the key associated with element removed from the map.
 *
 * @event ObservableMap#remove
 * @type {string} key - the key removed
 */

/**
 * Provides listeners with an array of elements removed upon clearing the map.
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
   * Create an instance of ObservableMap. Arguments are forwarded to the Map constructor.
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
