'use strict';

const test = require('ava').test;
const ObservableMap = require('../').ObservableMap;

test('set(key, value)', t => {
  t.plan(3);
  const observable = new ObservableMap();
  observable.addListener('set', obj => {
    t.pass('listener is notified');
    t.is(obj.key, 'testKey');
    t.is(obj.value, 'testValue');
  });
  observable.set('testKey', 'testValue');
});

test('delete(key)', t => {
  t.plan(2);
  const observable = new ObservableMap();
  observable.addListener('remove', key => {
    t.pass('listener is notified');
    t.is(key, 'testKey', 'the string provided to the listener represents the deleted key');
  });
  observable.set('testKey', 'testValue');
  observable.delete('testKey');
});

test('clear()', t => {
  const observable = new ObservableMap();
  const entries = [{
    key: 'one',
    value: 1
  }, {
    key: 'two',
    value: 2
  }, {
    key: 'three',
    value: 3
  }];
  entries.forEach(entry => {
    observable.set(entry.key, entry.value);
  });
  observable.addListener('clear', array => {
    t.is(array.length, 3, 'array provided to listeners contains all elements in the map');
    t.same(array, entries, 'array provided to listeners contains correct elements');
  });
});
