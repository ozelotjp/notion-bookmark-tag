module.exports = {
  root: true,
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    project: ['tsconfig.json', 'tsconfig.dev.json'],
  },
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
  ],
  ignorePatterns: [
    '/lib/**/*', // Ignore built files.
  ],
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'no-param-reassign': 'off',
    'no-void': 'off',
    'no-nested-ternary': 'off',
    'max-classes-per-file': 'off',

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',

    'prefer-promise-reject-errors': 'off',

    quotes: ['warn', 'single', { avoidEscape: true }],

    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-unused-vars': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
};
