module.exports = {
  env: {
    jest: true,
  },
  root: true,
  parser: 'babel-eslint',
  extends: '@react-native',
  settings: {
    'import/ignore': ['node_modules/react-native/index\\.js$'],
    'import/resolver': {
      'babel-module': {},
    },
  },
};
