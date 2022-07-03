import { useMounted } from '@hook/util';
import { pagesPath } from '@lib/$path';
import { projectsAtom } from '@lib/jotai/atom';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { FormEvent, MouseEvent, useRef } from 'react';

export const Project = () => {
	const [projects, setprojects] = useAtom(projectsAtom);
	const ref = useRef<HTMLInputElement>(null);
	const isMounted = useMounted();
	// avoid next.js VDOM checking
	if (!isMounted) return null;
	const onSubmint = (event: FormEvent) => {
		event.preventDefault();
		if (ref.current === null) return;
		setprojects(projects.concat([ref.current.value]));
	};
	const onClickClear = (event: MouseEvent) => {
		event.preventDefault();
		setprojects([]);
	};
	return (
		<>
			<div className="space-y-4">
				<form onSubmit={onSubmint}>
					<div>
						<label htmlFor="name">Enter your pj name: </label>
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
						value="add"
						className="p-2 border border-blue-200 rounded-md hover:cursor-pointer active:bg-blue-50"
					/>
				</form>
				<button
					onClick={onClickClear}
					className="p-2 border border-blue-200 rounded-md hover:cursor-pointer active:bg-blue-50"
				>
					clear
				</button>
			</div>
			<ul>
				{projects.map((pj, idx) => {
					return (
						<li key={`${pj}-${idx}`}>
							<Link href={pagesPath.projects._slug(pj).$url()}>
								<a>{pj}</a>
							</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
};
