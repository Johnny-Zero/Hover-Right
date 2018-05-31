import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = (actual) => () =>
  matcherHint('.not.toContainOnlyNumbers') +
  '\n\n' +
  'Expected object to not only contain numbers, received:\n' +
  `  ${printReceived(actual)}`;

const failMessage = (actual) => () =>
  matcherHint('.toContainOnlyNumbers') +
  '\n\n' +
  'Expected object to only contain numbers, received:\n' +
  `  ${printReceived(actual)}`;

export default {
  toContainOnlyNumbers: (actual) => {
    const pass = predicate(actual);
    if (pass) {
      return { pass: true, message: passMessage(actual) };
    }

    return { pass: false, message: failMessage(actual) };
  }
};
