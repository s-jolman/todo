module.exports = {
  extends: ['airbnb'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'ignorePackages',
  },
  env: {
    browser: true,
  },
};
