module.exports = {
  extends: ['airbnb'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    jest: true
  },
  plugins: ['react', 'import', 'immutable', 'jsx-a11y', 'prettier'],
  rules: {
    'max-len': [
      0,
      {
        ignoreUrls: true
      }
    ],
    'comma-dangle': [2, 'only-multiline'],
    'quote-props': [1, 'consistent'],
    'no-underscore-dangle': [0],
    'no-plusplus': [0],
    'no-use-before-define': [0],
    'no-var': [1],
    'no-undef': [2],
    'no-param-reassign': [1],
    'import/no-extraneous-dependencies': [2, { devDependencies: true }],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx']
      }
    ],
    'no-unused-expressions': [1, { allowTaggedTemplates: true }],
    'react/jsx-no-bind': 1,
    'immutable/no-let': 2,
    'react/react-in-jsx-scope': 0
  }
};
