module.exports = {
  rules: {
    indent: [
      2,
      2
    ],
    quotes: [
      2,
      'single'
    ],
    'linebreak-style': [
      2,
      'unix'
    ],
    semi: [
      2,
      'always'
    ],
    'guard-for-in': 0
  },
  env: {
    es6: true,
    node: true,
    browser: true
  },
  extends: 'eslint:recommended'
};
