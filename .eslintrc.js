module.exports = {
  extends: ['plugin:hydrogen/recommended', 'plugin:hydrogen/typescript'],
  rules: {
    'node/no-missing-import': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'prettier/prettier': [1, {endOfLine: 'auto'}],
    'no-unused-vars': 1,
    'hydrogen/prefer-image-component': 0,
    'no-console': 0,
    'no-empty': 1,
    'react-hooks/exhaustive-deps': 0,
  },
};
