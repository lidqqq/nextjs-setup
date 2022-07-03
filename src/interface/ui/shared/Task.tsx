import { isoStringNow } from '@/lib/date';
import { filterdTasksAtom, recordsAtom, TaskRecord } from '@/lib/jotai/atom';
import { useAnimationFrame } from '@hooks/animationFrame';
import { useMounted } from '@hooks/util';
import { useAtom, useAtomValue } from 'jotai';
import { FormEvent, MouseEvent, useCallback, useRef, useState } from 'react';

export const Task = () => {
	const [displayDate, setDisplaydate] = useState<string>(isoStringNow());
	const [startDate, setStartdate] = useState<string>();
	const ref = useRef<HTMLInputElement>(null);
	const [recoreds, setrecoreds] = useAtom(recordsAtom);
	const filterdTasks = useAtomValue(filterdTasksAtom);
	const [start, stop] = useAnimationFrame(() => {
		setDisplaydate(isoStringNow());
	}, 1000);
	const onSubmit = useCallback(
		(event: FormEvent) => {
			event.preventDefault();
			if (startDate !== undefined) return;
			setStartdate(isoStringNow);
			start();
		},
		[startDate, start]
	);
	const onClickStop = useCallback(
		(event: MouseEvent) => {
			event.preventDefault();
			if (ref.current === null) return;
			if (startDate === undefined) return;
			const taskName = ref.current.value;
			const endDate = isoStringNow();
			const record: TaskRecord = {
				taskName: taskName,
				startDate,
				endDate,
			};
			setrecoreds(recoreds.concat([record]));
			setStartdate(undefined);
			stop();
		},
		[startDate, setrecoreds, recoreds, stop]
	);
	const onClickClear = useCallback(
		(event: MouseEvent) => {
			event.preventDefault();
			setrecoreds([]);
		},
		[setrecoreds]
	);
	const isMounted = useMounted();
	if (!isMounted) return null;

	return (
		<div>
			<p>{displayDate}</p>
			<div className="mt-4">
				<form onSubmit={onSubmit} className="flex space-x-4">
					<div>
						<label htmlFor="name">Enter your task name: </label>
						<input
							ref={ref}
							type="text"
							name="task-name"
							id="name"
							required
							className="p-2 border border-blue-200 rounded-md"
						/>
					</div>
					<input
						type="submit"
						value="start"
						className="p-2 border border-blue-200 rounded-md hover:cursor-pointer active:bg-blue-50"
					/>
					<button
						onClick={onClickStop}
						className="p-2 border border-blue-200 rounded-md hover:cursor-pointer active:bg-blue-50"
						type="button"
					>
						stop
					</button>
					<button
						onClick={onClickClear}
						className="p-2 border border-red-200 rounded-md hover:cursor-pointer active:bg-blue-50"
						type="button"
					>
						clear
					</button>
				</form>
				<ul className="mt-4 space-y-3 flex flex-col">
					{recoreds.map((recod, idx) => {
						return (
							<li
								key={`${recod.taskName}${idx}`}
								className="p-2 border border-gray-400 rounded-sm max-w-fit"
							>
								<p>name: {recod.taskName}</p>
								<p>start: {recod.startDate}</p>
								<p>end: {recod.endDate}</p>
							</li>
						);
					})}
				</ul>
				{filterdTasks.map(t => {
					return <p key={t}>{t}</p>;
				})}
			</div>
		</div>
	);
};
