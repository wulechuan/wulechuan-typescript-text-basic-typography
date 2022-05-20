module.exports = {
    root: true,
    env: {
        node: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    // parserOptions: {
    //     ecmaVersion: 2021,
    //     ecmaFeatures: {
    //         experimentalObjectRestSpread: true,
    //     },
    //     sourceType: 'module',
    // },
    rules: {
        '@typescript-eslint/no-explicit-any': 0,
        'no-unused-vars': 0, // ESLint 对 TypeScript 中的类型定义会报错，不论是 .ts 还是 .d.ts ，还是 .vue 。
        'import/no-unresolved': 0,
        'import/no-extraneous-dependencies': 0,
        'no-console':  [ 0 ],
        'no-debugger': [ 2 ],
        'no-multi-spaces': 0,
        'no-implicit-globals': 0,
        indent: ['error', 4, {
            SwitchCase: 1,
            MemberExpression: 1,
        }],
        'no-trailing-spaces': ['error', {
            skipBlankLines: false,
            ignoreComments: false,
        }],
        'linebreak-style': [0, 'unix'],
        'no-param-reassign': 0,
        'no-empty-pattern': 0,
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        'max-statements': [0, 64],
        'multiline-ternary': ['error', 'always-multiline'],
        'new-parens': [1],
        yoda: [0, 'never'],
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'never',
        }],
        'func-names': [0, 'as-needed'],
        'no-return-assign': 'error',
        'no-new-func': 'error',
        'no-eval': 'error',
        'no-implied-eval': 'error',
        'prefer-const': 'error',
        'arrow-body-style': 0,
        'prefer-destructuring': [ 0,
            {
                VariableDeclarator: {
                    array: true,
                    object: true,
                },
                AssignmentExpression: {
                    array: false,
                    object: false,
                },
            },
            {
                enforceForRenamedProperties: false,
            },
        ],
    },
}
