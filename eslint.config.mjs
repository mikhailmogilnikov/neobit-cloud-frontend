import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      'next',
      'plugin:prettier/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:@conarti/feature-sliced/recommended',
    ],
    plugins: ['jsx-a11y', 'prettier', 'unused-imports', 'import', 'eslint-plugin-react-compiler'],
    rules: {
      'react-hooks/exhaustive-deps': 'off',
      'react-compiler/react-compiler': 'error',
      '@conarti/feature-sliced/layers-slices': 'off',
      '@conarti/feature-sliced/absolute-relative': 'warn',
      '@conarti/feature-sliced/public-api': 'error',
      'react/display-name': 'warn',
      'no-console': 'warn',
      'jsx-a11y/click-events-have-key-events': 'warn',
      'jsx-a11y/interactive-supports-focus': 'warn',
      'prettier/prettier': 'off',
      'no-unused-vars': 'off',
      'unused-imports/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'warn',
      'react/self-closing-comp': 'warn',
      'import/order': [
        'warn',
        {
          groups: [
            'type',
            'builtin',
            'object',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          pathGroups: [
            {
              pattern: '~/**',
              group: 'external',
              position: 'after',
            },
          ],
          'newlines-between': 'always',
        },
      ],
      'react/jsx-sort-props': [
        'warn',
        {
          callbacksLast: true,
          shorthandFirst: true,
          noSortAlphabetically: false,
          reservedFirst: true,
        },
      ],
      'padding-line-between-statements': [
        'warn',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
      ],
    },
  }),
];

export default eslintConfig;
