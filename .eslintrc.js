module.exports = {
  extends: '@mate-academy/eslint-config',
  env: {
    jest: true,
  },
  rules: {
    'no-proto': 0,
  },
  plugins: ['jest'],

    "rules": {
    "comma-dangle": ["error", "always-multiline"],
    "function-paren-newline": "off"
  },

};
