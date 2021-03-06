'use strict';

const delegateEventDispatcher = require('./delegateEventDispatcher');
const EventDispatcher = require('../event/EventDispatcher');
const dispatcher = require('./symbols').dispatcher;

/**
 * Emitted when one or more elements are added to an ObservableArray.
 *
 * @event ObservableArray#add
 * @type {Array.<*>}
 */

/**
 * Emitted when one or more element are removed from an ObservableArray.
 *
 * @event ObservableArray#remove
 * @type {Array.<*>}
 */

/**
 * Emitted when an ObservableArray is cleared/emptied.
 *
 * @event ObservableArray#clear
 * @type {Array.<*>}
 */

/**
 * An ObservableArray provides extensions to the Array type, allowing for changes made to be
 * observed by listeners. Methods available on Array and EventDispatcher are accessible from an
 * ObservableArray instance.
 */
class ObservableArray extends Array {
  /**
   * Instantiates a new ObservableArray. Arguments are forwarded to the Array constructor.
   */
  constructor() {
    super(...arguments);
    this[dispatcher] = new EventDispatcher();
  }

  /**
   * Removes the last element from the dispatcher array.
   *
   * @fires ObservableArray#remove
   * @returns {*} the removed element
   */
  pop() {
    const element = super.pop();
    this.dispatch('remove', [element]);
    return element;
  }

  /**
   * Adds one or more elements to the end of the dispatcher.
   *
   * @fires ObservableArray#add
   * @param {...*} arguments
   * @returns {number} the new length of the dispatcher array
   */
  push() {
    const additions = Array.from(arguments);
    const length = super.push(...additions);
    this.dispatch('add', additions);
    return length;
  }

  /**
   * Removes the first element from the dispatcher array.
   *
   * @fires ObservableArray#remove
   * @param {...*} arguments
   * @returns the removed element
   */
  shift() {
    const element = super.shift();
    this.dispatch('remove', [element]);
    return element;
  }

  /**
   * Adds one or more elments to the beginning of the dispatcher array.
   *
   * @fires ObservableArray#add
   * @param {...*} arguments
   * @returns the new length of the dispatcher array
   */
  unshift() {
    const additions = Array.from(arguments);
    const length = super.unshift(...additions);
    this.dispatch('add', additions);
    // provide the length to maintain consistency with Array#unshift
    return length;
  }

  /**
   * Changes the content of the array by removing existing elements and/or adding new elements
   *
   * @emits ObservableArray#add
   * @emits ObservableArray#remove
   * @param {number} start - the index signifying where to start changing the array
   * @param {number} deleteCount - number of elements to remove
   * @return {Array.<*>} the removed elements
   */
  splice(start, deleteCount) {
    const added = Array.prototype.slice.call(arguments, 2);
    const removed = super.splice(start, deleteCount, ...added);

    this.dispatch('remove', removed);
    this.dispatch('add', added);
    // return removed elements to maintain consistency with Array#splice
    return removed;
  }

  /**
   * Clears the contents of the array.
   */
  clear() {
    const cleared = this.slice();
    // clears all elements of the array (no indices are less than 0)
    // see ECMAScript 2015, 9.4.2 Array Exotic Objects
    this.length = 0;
    this.dispatch('clear', cleared);
  }
}

delegateEventDispatcher(ObservableArray);

module.exports = ObservableArray;
