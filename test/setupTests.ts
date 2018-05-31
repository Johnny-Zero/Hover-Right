/**
 * Setup and Customize Jest
 * 
 *  - run preload file
 *  - load jest into memory
 *  x run postload file (this)
 *  - jest tests are executed
 */

// ensure vscode's intellisense will find the type defs for extensions.
// extensions will still run as usual without these references, but may
// show as various errors in the IDE.
/// <reference path="../node_modules/@types/node/index.d.ts" />
/// <reference path="../node_modules/jest-extended/types/index.d.ts" />

// apply any framework extenstions grabbed from npm
require('jest-extended')

// TODO: make jest-chain work in typescript
// require('jest-chain')

// user extensions from the extensions folder
// custom matchers' code convention follows jest-extented
// (extensions written in es6 js, so we use esm for compatibility and future-proofing)
require = require('esm')(module)
module.exports = require('./extensions/index.js')
