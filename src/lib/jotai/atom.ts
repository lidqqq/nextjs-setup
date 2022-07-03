import { atomWithStorage } from 'jotai/utils';

const ATOM_PREFIX = 'jotai/atom/';

function key(key: string) {
	return `${ATOM_PREFIX}${key}`;
}

export const projectsAtom = atomWithStorage<string[]>(key('projects'), []);
