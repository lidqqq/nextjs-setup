// eslint-disable-next-line node/no-unpublished-import
import { expect, it } from 'vitest';
import { add } from './util';

// The two tests marked with concurrent will be run in parallel
it('serial test', async () => {
  const res = add(1, 2);
  expect(res).toBe(3);
});
