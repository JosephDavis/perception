'use strict';

const test = require('ava').test;
const EventDispatcher = require('../').EventDispatcher;

test.beforeEach(t => {
  t.context.dispatcher = new EventDispatcher();
  t.context.listener = () => null;
});

test('#addListener(event, listener)', t => {
  const dispatcher = t.context.dispatcher;
  const listener = t.context.listener;

  dispatcher.addListener('event', listener);

  const listeners = dispatcher.getListeners('event');
  t.is(listeners.length, 1, 'contains the correct number of listeners');
});

test('#removeListener(event, listener)', t => {
  const dispatcher = t.context.dispatcher;
  const listener = t.context.listener;

  dispatcher.addListener('event', listener);
  dispatcher.removeListener('event', listener);

  const listeners = dispatcher.getListeners('event');
  t.is(listeners.length, 0, 'properly removes listeners');
});

test('#removeListeners(event)', t => {
  const dispatcher = t.context.dispatcher;
  dispatcher.addListener('event', () => 1);
  dispatcher.addListener('event', () => 2);
  dispatcher.addListener('event', () => 3);

  dispatcher.removeListeners('event');

  const listeners = dispatcher.getListeners('event');
  t.is(listeners.length, 0, 'properly removes all listeners');
});

test('#getListeners(event)', t => {
  const dispatcher = t.context.dispatcher;
  const listener = t.context.listener;
  dispatcher.addListener('event', listener);

  const listeners = dispatcher.getListeners('event');
  t.same(listeners[0], listener, 'stores listeners correctly by event name');
});

test('#dispatch(event, object)', t => {
  t.plan(1);
  const dispatcher = t.context.dispatcher;
  dispatcher.addListener('event', () => t.pass('listeners were notified'));
  dispatcher.dispatch('event');
});
