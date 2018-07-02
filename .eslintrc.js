module.exports = {
    "extends": [
        "airbnb-base",
        "prettier",
        "prettier/react",
        "plugin:react/recommended"
    ],
    "plugins": [
        "react"
    ],
    "env": {
        "browser": true,
        "node": true,
        "jquery": true
    },
    rules: {
        "no-console": 0,
        "linebreak-style": 0,
        "no-unused-vars": 1,
        "quotes": [1, "single", { "allowTemplateLiterals": true }],
        "class-methods-use-this": 1
    }
};
