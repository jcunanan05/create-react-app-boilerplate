# `create-react-app` boilerplate package

This is a clone of `create-react-app`. I adjusted it a little bit based on what I need.

I added these packages / configuration files:

* Included redux and displayed a `hello world` data on the browser
* Added Prettier and config file
* Added ESLint and custom config file
* Extended `airbnb` ESLint config
  * but removed `propTypes` checking

## How to Use

* run in the terminal: `yarn install`
* `yarn start` to run dev mode
* `yarn build` to make a prod build
* `yarn test` to run unit tests and linting
* `yarn test:unit` to run unit tests only
* `yarn test:lint` to run all linting
  * `yarn test:lint:css` to lint sass files only
  * `yarn test:lint:js` to lint js and jsx files only