module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:jsx-a11y/recommended'],
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    'no-unused-vars': 'warn',
    'no-undef': 'error',
    // quotes: ['error', 'single'],
    // 'jsx-quotes': ['error', 'prefer-single'],
    semi: ['error', 'always'],
    indent: ['error', 2],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
        'newlines-between': 'always',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
