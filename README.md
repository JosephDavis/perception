Perception
============

[![Build Status](https://travis-ci.org/JosephDavis/perception.svg?branch=master)](https://travis-ci.org/JosephDavis/perception)
[![npm version](https://img.shields.io/npm/v/perception.svg)](https://www.npmjs.com/package/perception)

Perceive events and observables with ease.

Table of Contents
-----------------

  - [Requirements](#requirements)
  - [Usage](#usage)
  - [Installation](#installation)
  - [Documentation](#documentation)
  - [License](#license)

Requirements
------------

For use in a Node.js environment:
  - [Node.js](https://nodejs.org)
  - [npm](https://npmjs.com)

Usage
-----

```js
const perception = require('perception');
const ObservableArray = perception.ObservableArray;

const array = new ObservableArray(1, 2, 3);
array.addListener('add', added => {
  console.log(`Added: ${added}!`);
});

array.push(4); // Console shows: 'Added: 4!'
```

For browser usage, a UMD module is provided in the `dist` folder in the `master` branch.

Installation
------------

To install as a dependency in your `package.json` file, run the following command:
```
npm install -S perception
```

Documentation
-------------
Perception provides several observable classes and an event dispatcher.

Observables:
  - ObservableArray
  - ObservableMap
  - ObservableSet
  - ObservableValue

Events:
  - EventDispatcher

For documentation, please refer to `docs/current.md`.

License
-------

Perception is licensed under the [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0.html). See `LICENSE` for details.
Copyright &copy; 2016, Joey Davis (github.com/JosephDavis)
