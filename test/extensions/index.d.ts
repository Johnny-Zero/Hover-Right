/// <reference types="jest" />
declare namespace jest {
  // noinspection JSUnusedGlobalSymbols
  interface Matchers<R> {
    /**
       * Note: Currently unimplemented
       * Passing assertion
       *
       * @param {String} message
       */
    pass(message: string): R

    /**
       * Note: Currently unimplemented
       * Failing assertion
       *
       * @param {String} message
       */
    fail(message: string): R

    /**
       * Use .toContainOnlyNumber when checking if a String '', Array [] or Object {} contains only numbers.
       */
    toContainOnlyNumbers(): R
  }
}
