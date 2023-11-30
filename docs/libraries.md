## An explanation about each library installed

#### [Babel](https://babeljs.io/docs/)

Babel is used to converst ES2015+ code into backwards compatible version of JavaScript, you will find more often in frontend to compile the code for the web but here we are using to enjoy the facilities of ES2015+ syntax
The base configuration is `.babelrc` file and the dependencies are:
`@babel/cli`
`@babel/core`
`@babel/node`
`@babel/preset-env`
`@babel/plugin-proposal-export-namespace-from`
`babel-node`

#### [Commitlint](https://commitlint.js.org/) & [Husky](https://typicode.github.io/husky/getting-started.html)

We utilize this combination of tools to perform two key operations before pushing code to the Git repository.

- Verify commit messages to ensure they adhere to our standards for clarity and consistency.
- Execute the test suite to maintain high test coverage and confirm that all tests pass.

This process guarantees the stability and reliability of the code before it is merged into the branch.

The configuration file is `commitlint.config.js`

`@commitlint/cli`
`@commitlint/config-conventional`
`husky`

#### [Jest](https://jestjs.io/)

The best testing library for javascript, just that :)
We use `esbuild` and `esbuild-jest` to compile ES2015+ code in the tests

`jest`
`esbuild`
`esbuild-jest`

#### [Nodemon](https://nodemon.io/)

Build in real time when code changes to better dev experience

`nodemon`

#### [Prettier](https://prettier.io/)

Code formatter

`prettier`

#### [ESLint](https://eslint.org/)

Analyze the code in real time and quickly find errors

`eslint`
