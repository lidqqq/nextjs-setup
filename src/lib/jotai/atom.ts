import { atom } from 'jotai';
import uniq from 'lodash/uniq';

import { atomWithStorage } from 'jotai/utils';

const ATOM_PREFIX = 'jotai/atom/';

function key(key: string) {
	return `${ATOM_PREFIX}${key}`;
}

export const projectsAtom = atomWithStorage<Project[]>(key('projects'), []);
// export const tasksAtom = atomWithStorage<Task[]>(key('tasks'), []);
export const recordsAtom = atomWithStorage<TaskRecord[]>(key('records'), []);
export const filterdTasksAtom = atom<string[]>(get => {
	const records = get(recordsAtom);
	const filterdTasks = uniq(records.map(r => r.taskName));
	return filterdTasks;
});

type Project = string;
export type TaskRecord = {
	taskName: string;
	startDate: string; // expect toISOString
	endDate: string; // expect toISOString
	project?: Project;
};
