import toContainOnlyNumbers from './toContainOnlyNumbers';

export default [
  toContainOnlyNumbers
].reduce((acc, matcher) => ({ ...acc, ...matcher }), {});