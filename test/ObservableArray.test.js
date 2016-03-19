'use strict';

const test = require('ava').test;
const ObservableArray = require('../').ObservableArray;

test('pop()', t => {
  t.plan(2);
  const observable = new ObservableArray(1, 2, 3);
  observable.addListener('remove', removed => {
    t.pass('notifies listeners');
    t.is(removed[0], 3, 'removed elements may be accessed from listeners');
  });
  observable.pop();
});

test('push(arguments)', t => {
  t.plan(2);
  const observable = new ObservableArray(1, 2, 3);
  observable.addListener('add', added => {
    t.pass('notifies listeners');
    t.is(added[0], 4, 'added elements may be accessed from listeners');
  });
  observable.push(4);
});

test('shift()', t => {
  t.plan(2);
  const observable = new ObservableArray(1, 2, 3);
  observable.addListener('remove', removed => {
    t.pass('notifies listeners');
    t.is(removed[0], 1, 'removed elements may be accessed from listeners');
  });
  observable.shift();
});

test('unshift(arguments)', t => {
  t.plan(2);
  const observable = new ObservableArray(1, 2, 3);
  observable.addListener('add', added => {
    t.pass('notifies listeners');
    t.is(added[0], 4, 'added elements may be accessed from listeners');
  });
  observable.unshift(4);
});


test('splice(start, deleteCount, ...)', t => {
  t.plan(4);
  const observable = new ObservableArray(1, 2, 3);
  observable.addListener('add', added => {
    t.pass('notified add listeners');
    t.is(added[0], 4);
  });
  observable.addListener('remove', removed => {
    t.pass('notified remove listeners');
    t.same(removed, [1, 2, 3]);
  });
  observable.splice(0, 3, 4);
});

test('clear()', t => {
  t.plan(3);
  const observable = new ObservableArray(1, 2, 3);
  observable.addListener('clear', cleared => {
    t.pass('listeners are notified when the array is clear');
    t.same(cleared, [1, 2, 3], 'cleared elements are provided to listeners');
  });
  observable.clear();
  t.is(observable.length, 0, 'the observed array is empty after being cleared');
});
