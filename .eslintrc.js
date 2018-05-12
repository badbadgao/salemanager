module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "settings": {
        "import/resolver": {
          "node": {
            "paths": ["src"]
          }
        }
      },    
    "extends": "airbnb",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "flowtype",
    ],
    "rules": {
        "linebreak-style": 0,
        "global-require": 0,
        "eslint linebreak-style": [0, "error", "windows"],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    },
};
