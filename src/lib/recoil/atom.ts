import { openDB } from 'idb';
import { atom } from 'recoil';

const isClinet = typeof window === 'object';

export const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: isClinet ? '' : '', // default value (aka initial value)
});

async function loadInitStateFormIDB(key: string) {
  const db = await openDB('db');
  // Get a value from a store:
  const value = await db.get('store', key);
  // Set a value in a store:
  return value;
}
