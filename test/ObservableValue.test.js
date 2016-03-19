'use strict';

const test = require('ava').test;
const ObservableValue = require('../').ObservableValue;

test('static property(object, prop)', t => {
  t.plan(1);
  const person = {
    name: ''
  };
  const observable = ObservableValue.property(person, 'name');
  observable.addListener('change', () => {
    t.pass('listener was called when the object property is changed');
  });
  person.name = 'Test';
});

test('static define(object, prop, initialValue)', t => {
  const person = {};
  const observable = ObservableValue.define(person, 'name', 'Test');
  t.is(person.name, 'Test', 'defines the property with the provided initial value');
  t.true(observable instanceof ObservableValue, 'returns the observable');
});

test('get()', t => {
  const observable = new ObservableValue(100);
  t.same(observable.get(), 100, 'provides access to the internal value');
});

test('set(newValue)', t => {
  const observable = new ObservableValue(100);
  t.plan(4);
  observable.addListener('change', (c) => {
    t.pass('listeners were notified of a change');
    t.is(c.old, 100, 'provides the old value');
    t.is(c.new, 200, 'provides the new value');
  });
  observable.set(200);
  t.same(observable.get(), 200, 'changes the internal value');
});
