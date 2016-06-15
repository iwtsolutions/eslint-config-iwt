module.exports = {
    "env": {
        "node": true,
        "mocha": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            4,
            { "SwitchCase": 1 }
        ],
        "linebreak-style": "off",
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": "off",
        "array-callback-return": "off",
        "block-scoped-var": "error",
        "curly": "error",
        "default-case": "error",
        "dot-notation": "error",
        "eqeqeq": "error",
        "no-alert": "error",
        "no-else-return": "error",
        "no-empty-function": [
            "error",
            {
                "allow": [ "arrowFunctions" ]
            }
        ],
        "no-eq-null": "error",
        "no-eval": "error",
        "no-floating-decimal": "error",
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-invalid-this": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-loop-func": "error",
        "no-multi-str": "error",
        "no-native-reassign": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-octal-escape": "error",
        "no-return-assign": "error",
        "no-self-compare": "error",
        "no-throw-literal": "error",
        "no-useless-concat": "error",
        "no-useless-escape": "error",
        "no-void": "error",
        "no-with": "error",
        "radix": "error",
        "yoda": "error",
        "callback-return": "error",
        "global-require": "error",
        "handle-callback-err": [
            "error",
            "^.*(e|E)rr"
        ],
        "no-mixed-requires": "error",
        "no-path-concat": "error",
        "no-catch-shadow": "error",
        "no-label-var": "error",
        "no-shadow": "error",
        "no-shadow-restricted-names": "error",
        "no-use-before-define": [
            "error",
            {
                "functions": false,
                "classes": false
            }
        ],
        "array-bracket-spacing": [
            "error",
            "always"
        ],
        "block-spacing": "error",
        "brace-style": [
            "error",
            "1tbs",
            {
                "allowSingleLine": true
            }
        ],
        "camelcase": "error",
        "comma-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "computed-property-spacing": [
            "error",
            "never"
        ],
        "key-spacing": [
            "error",
            {
                "beforeColon": false,
                "mode": "strict"
            }
        ],
        "keyword-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],
        "max-depth": [
            "error",
            4
        ],
        "max-len": [
            "error",
            120
        ],
        "max-nested-callbacks": [
            "error",
            6
        ],
        "max-statements-per-line": [
            "error",
            {
                "max": 1
            }
        ],
        "new-parens": "error",
        "newline-before-return": "off",
        "no-array-constructor": "error",
        "no-lonely-if": "error",
        "no-mixed-spaces-and-tabs": "error",
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 2,
                "maxEOF": 1,
                "maxBOF": 0
            }
        ],
        "no-negated-condition": "error",
        "no-new-object": "error",
        "no-spaced-func": "error",
        "no-trailing-spaces": "error",
        "no-unneeded-ternary": "error",
        "no-whitespace-before-property": "error",
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "one-var": [
            "error",
            "never"
        ],
        "one-var-declaration-per-line": [
            "error" ,
            "always"
        ],
        "operator-linebreak": [
            "error",
            "after"
        ],
        "padded-blocks": [
            "error",
            "never"
        ],
        "space-before-blocks": "error",
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "always",
                "named": "never"
            }
        ],
        "space-in-parens": [
            "error",
            "never"
        ],
        "spaced-comment": [
            "error",
            "always"
        ]
    }
};
