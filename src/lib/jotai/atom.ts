import { atomWithStorage } from 'jotai/utils';

const ATOM_PREFIX = 'jotai/atom/';

function key(key: string) {
	return `${ATOM_PREFIX}${key}`;
}

export const projectsAtom = atomWithStorage<Project[]>(key('projects'), []);
export const tasksAtom = atomWithStorage<Task[]>(key('tasks'), []);
export const recordsAtom = atomWithStorage<TaskRecord[]>(key('records'), []);

// type StoreRoot = {
// 	projects: Project[];
// 	tasks: Task[];
// 	record: TaskRecord[];
// };
type Project = string;
type Task = {
	name: string;
	project?: Project;
};
type TaskRecord = {
	taskName: Task['name'];
	startDate: Date; // expect toISOString
	endDate: Date; // expect toISOString
};
