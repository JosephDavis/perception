'use strict';

const EventDispatcher = require('../event/EventDispatcher');
const value = Symbol('value');

/**
 * @event ObservableValue#change
 * @type {object}
 * @property {*} old - the old value
 * @property {*} new - the new value
 */

/**
 * Tells if the provided object has an enumerable property by the provided name.
 *
 * @private
 * @param object - the object containing the property
 * @param prop - the property name
 * @returns whether or not the provided property is present and enumerable
 */
function hasOwnEnumerableProperty(object, prop) {
  return object.hasOwnProperty(prop) &&
    Object.getOwnPropertyDescriptor(object, prop).enumerable;
}

/**
 * Provides the capability to maintain observers for a specific value or reference.
 */
class ObservableValue extends EventDispatcher {
  /**
   * Instantiates a new ObservableValue.
   *
   * @param {*} [initialValue] - the initial value to store
   */
  constructor(initialValue) {
    super();
    this[value] = initialValue;
  }

  /**
   * Allows for an object's existing property value to be observed.
   *
   * @static
   * @param {object} object - the object containing the property
   * @param {string} prop - the property name
   * @returns {ObservableValue} the observable value created
   */
  static property(object, prop) {
    const observable = new ObservableValue(object[prop]);
    const enumerable = hasOwnEnumerableProperty(object, prop);
    const descriptor = {
      get: observable.get.bind(observable),
      set: observable.set.bind(observable),
      enumerable
    };
    Object.defineProperty(object, prop, descriptor);
    return observable;
  }


  /**
   * Allows for the definition of an observable property on an object.
   *
   * @static
   * @param  {object} object - the object to define the property on
   * @param  {string} prop - the property name
   * @param  {*} [initialValue] - the initial value to set
   * @return {ObservableValue} the observable value created
   */
  static define(object, prop, initialValue) {
    object[prop] = initialValue;
    return ObservableValue.property(object, prop);
  }

  /**
   * Accesses the stored value.
   *
   * @returns {*} the stored value
   */
  get() {
    return this[value];
  }

  /**
   * Mutates the stored value.
   *
   * @fires ObservableValue#change
   * @param {*} newValue - the value to set
   */
  set(newValue) {
    const oldValue = this[value];
    this[value] = newValue;
    this.dispatch('change', {
      new: newValue,
      old: oldValue
    });
    return this[value];
  }
}

module.exports = ObservableValue;
