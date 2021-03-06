module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'airbnb-base',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        'plugin:jest/recommended',
    ],
    rules: {
        'import/no-unresolved': 0,
        'import/no-extraneous-dependencies': [1, { devDependencies: true }],
        'import/prefer-default-export': 0,
        'spaced-comment': 0,
        'no-shadow': 0,
        'no-underscore-dangle': 0,
        'no-param-reassign': 0
    },
    env: {
        browser: true,
        jest: true
    }
}