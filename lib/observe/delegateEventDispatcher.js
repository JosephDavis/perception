'use strict';

const dispatcher = require('../observe/symbols').dispatcher;

/**
 * Delegates methods on a type to an EventDispatcher stored on instances of the type using the
 * dispatcher symbol.
 *
 * @private
 * @param  {class} type - the type to delegate methods on
 */
function delegateEventDispatcher(type) {
  type.prototype.addListener = function addListener(event, listener) {
    return this[dispatcher].addListener(event, listener);
  };

  type.prototype.removeListener = function removeListener(event, listener) {
    return this[dispatcher].removeListener(event, listener);
  };

  type.prototype.removeListeners = function removeListeners(event) {
    return this[dispatcher].removeListeners(event);
  };

  type.prototype.getListeners = function getListeners(event) {
    return this[dispatcher].getListeners(event);
  };

  type.prototype.dispatch = function dispatch(event, object) {
    return this[dispatcher].dispatch(event, object);
  };
}

module.exports = delegateEventDispatcher;
