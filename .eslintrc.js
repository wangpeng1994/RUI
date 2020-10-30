module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb', // react
    'airbnb/hooks', // react hooks
    // "plugin:@typescript-eslint/recommended",
    // 用于关闭 ESLint 相关的格式规则集，具体可查看 https://github.com/prettier/eslint-config-prettier/blob/master/index.js
    'plugin:prettier/recommended',
    // 用于关闭 @typescript-eslint/eslint-plugin 插件相关的格式规则集，具体可查看 https://github.com/prettier/eslint-config-prettier/blob/master/%40typescript-eslint.js
    'prettier/@typescript-eslint',
  ],
  // 对上面规则的覆盖
  rules: {
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'no-use-before-define': 0,
    'func-names': 0,
    'no-underscore-dangle': 0,
    'no-unused-vars': [2, { args: 'none' }],
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'import/no-extraneous-dependencies': 0,
    'no-inner-declarations': 0,
    'prefer-promise-reject-errors': 0,
    'prefer-destructuring': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/state-in-constructor': [1, 'never'],
    'react/destructuring-assignment': 0,
    'react/no-array-index-key': 0,
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/react-in-jsx-scope': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'no-unused-expressions': [
      2,
      { allowShortCircuit: true, allowTernary: true },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 0 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  },
};
