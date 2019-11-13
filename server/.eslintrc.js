module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    mocha: true
  },
  extends: [
    'airbnb-base',
    'prettier',
    'plugin:prettier/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "import/no-extraneous-dependencies": [1, { devDependencies: true }],
    "import/no-unresolved": 0,
    "import/prefer-default-export": 0,
    "no-underscore-dangle": 0,
    "func-names": 0,
    "no-console": 0
  },
};
