module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  ignorePatterns: ['build/', 'dist/', 'node_modules/'],
  overrides: [{
    files: ['*.test.js', '*.mock.js'],
    rules: {
      'no-undef': 0,
    },
  }],
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-unresolved': 'off',
    'max-len': ['error', { code: 120, ignoreTrailingComments: true }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        configFile: './babelrc.js',
        root: ['../src'],
      },
    },
  },
};
