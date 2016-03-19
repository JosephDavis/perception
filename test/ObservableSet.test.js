'use strict';

const test = require('ava').test;
const ObservableSet = require('../').ObservableSet;

test('add(value)', t => {
  t.plan(2);
  const observable = new ObservableSet();
  observable.addListener('add', value => {
    t.pass('The add listener was called');
    t.is(value, 'test', 'listeners receive the value added');
  });
  observable.add('test');
});

test('clear()', t => {
  t.plan(2);
  const observable = new ObservableSet();
  observable.addListener('clear', (cleared) => {
    t.pass('The clear listener was called');
    t.same(cleared, [1, 2, 3]);
  });
  [1, 2, 3].forEach(value => observable.add(value));
  observable.clear();
});

test('delete(value)', t => {
  t.plan(2);
  const observable = new ObservableSet();
  observable.addListener('remove', value => {
    t.pass('The remove listener was called');
    t.is(value, 'test', 'listeners received the value deleted');
  });
  observable.add('test');
  observable.delete('test');
});
