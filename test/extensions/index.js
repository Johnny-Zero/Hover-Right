// import { red } from 'chalk';
import colors from 'colors/safe';
const red = colors.red;

import matchers from './matchers';

const jestExpect = global.expect;

if (jestExpect !== undefined) {
  jestExpect.extend(matchers);
} else {
  /* eslint-disable no-console */
  console.error(
    red(
      "Unable to find Jest's global expect."
    )
  );
  /* eslint-enable no-console */
}