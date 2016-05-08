'use strict';

const EventDispatcher = require('../event/EventDispatcher');
const delegateEventDispatcher = require('./delegateEventDispatcher');
const dispatcher = require('./symbols').dispatcher;

/**
 * Emitted when an element is added to an ObservableSet. Provides listeners with the added element.
 *
 * @event ObservableSet#add
 * @type {*} element - the added element
 */

/**
 * Emitted when an element is removed from an ObservableSet. Provides listeners with the removed
 * element.
 *
 * @event ObservableSet#remove
 * @type {string} element - the removed element
 */

/**
 * Emitted when an ObservableSet is cleared. Provides listeners with an array of cleared elements.
 *
 * @event ObservableSet#clear
 * @type {array.<*>} - the values cleared from the set
 */

/**
 * Provides the functionality for observing changes to a Set. All instance methods available on Set
 * and EventDispatcher are available to an ObservableSet.
 */
class ObservableSet extends Set {
  /**
   * Instantiates a new ObservableSet. Arguments are forwarded to the Set constructor.
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
