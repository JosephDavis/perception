'use strict';

const EventDispatcher = require('../event/EventDispatcher');
const delegateEventDispatcher = require('./delegateEventDispatcher');
const dispatcher = require('./symbols').dispatcher;

/**
 * Provides listeners with the element added to the set.
 *
 * @event ObservableSet#add
 * @type {*} value - the value added
 */

/**
 * Provides listeners with the element removed from the Set.
 *
 * @event ObservableSet#remove
 * @type {string} element - the removed element
 */

/**
 * Provides listeners with an array of elements removed upon clearing the Set.
 *
 * @event ObservableSet#clear
 * @type {array.<*>} - the values cleared from the set
 */

/**
 * Provides the functionality for observing changes to a Set.
 */
class ObservableSet extends Set {
  /**
   * Create an instance of ObservableSet.
   */
  constructor() {
    super(...arguments);
    this[dispatcher] = new EventDispatcher();
  }

  /**
   * Appends a new element with the given value.
   *
   * @emits ObservableSet#add
   * @param {*} value - the value of the element to add
   * @return {ObservableSet} the instance
   */
  add(value) {
    super.add(value);
    this.dispatch('add', value);
    return this;
  }

  /**
   * Removes all elements.
   *
   * @emits ObservableSet#clear
   */
  clear() {
    const removed = Array.from(this);
    super.clear();
    this.dispatch('clear', removed);
  }

  /**
   * Removes the element associated to the value.
   *
   * @emits ObservableSet#remove
   * @param  {*} value - the value to remove
   * @return {boolean} true if an element is removed successfully
   */
  delete(value) {
    if (super.delete(value)) {
      this.dispatch('remove', value);
      return true;
    }
    return false;
  }
}

delegateEventDispatcher(ObservableSet);

module.exports = ObservableSet;
