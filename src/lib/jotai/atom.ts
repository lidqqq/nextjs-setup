import { atomWithStorage } from 'jotai/utils';

const isClinet = typeof window === 'object';

export const textAtom = atomWithStorage('key-atom', 'feaw');
