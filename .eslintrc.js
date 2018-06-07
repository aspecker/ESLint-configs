module.exports = { 
    "extends": [
        "airbnb-base",
        "prettier",
        "prettier/react"
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
        "quotes": [2, "single", { "allowTemplateLiterals": true }],
    }
};