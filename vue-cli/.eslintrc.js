module.exports = {
  root: true,
  parserOptions: {
    // parser: '@typescript-eslint/parser',
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['plugin:vue/recommended', '@vue/prettier', '@vue/typescript'],
  rules: {
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 10,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    'vue/name-property-casing': ['error', 'PascalCase'],
    'vue/attributes-order': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    quotemark: [true, 'single'],
    quotes: [
      1,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    semi: [1, 'never'],
    'semi-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ]
  }
}
