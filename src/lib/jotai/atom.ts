import { atomWithStorage } from 'jotai/utils';

const ATOM_PREFIX = 'jotai/atom/';

function key(key: string) {
	return `${ATOM_PREFIX}${key}`;
}

export const projectsAtom = atomWithStorage<Project[]>(key('projects'), []);

type StoreRoot = {
	projects: Project[];
	tasks: Task[];
	record: TaskRecord[];
};
type Task = {
	name: string;
	project?: string;
};
type TaskRecord = {
	taskName: string;
	startDate: Date; // expect toISOString
	endDate: Date; // expect toISOString
};
type Project = string;
