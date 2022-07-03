import { useMounted } from '@hook/util';
import { FormEvent, MouseEvent, useRef, useState } from 'react';
import { useAnimationFrame } from '../hooks/animationFrame';

export const Task = () => {
	const [date, setdate] = useState<string>(new Date(Date.now()).toISOString());
	const ref = useRef<HTMLInputElement>(null);
	const [setStart, setStop] = useAnimationFrame(() => {
		setdate(new Date(Date.now()).toISOString());
	}, 1000);
	const isMounted = useMounted();
	if (!isMounted) return null;
	const onSubmint = (event: FormEvent) => {
		event.preventDefault();
		setStart();
	};
	const onClickStop = (event: MouseEvent) => {
		event.preventDefault();
		setStop();
	};

	return (
		<div>
			<p>{date}</p>
			<div className="mt-4">
				<form onSubmit={onSubmint} className="flex space-x-4">
					<div>
						<label htmlFor="name">Enter your task name: </label>
						<input
							ref={ref}
							type="text"
							name="name"
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
				</form>
			</div>
		</div>
	);
};
