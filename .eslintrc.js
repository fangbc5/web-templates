module.exports = {
    globals: {
        template: false, // false 不允许被重写
        _util: false
    },
    root: true,
    env: {
        node: true,
        browser: true,
        es6: true,
        jquery: true
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    parserOptions: {
    parser: 'babel-eslint'
    },
    rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
}
