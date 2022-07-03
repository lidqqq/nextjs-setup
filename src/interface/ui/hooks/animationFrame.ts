import { useCallback, useEffect, useRef, useState } from 'react';

export function useAnimationFrame(callback: () => void, throttleMs = 16) {
	const [isRunning, setisRunning] = useState(false);
	const isRunningRef = useRef<boolean>();
	const previousTimeRef = useRef<number>();

	const setStart = useCallback(() => {
		isRunningRef.current = true;
		setisRunning(isRunningRef.current);
	}, []);
	const setStop = useCallback(() => {
		isRunningRef.current = false;
		setisRunning(isRunningRef.current);
	}, []);

	useEffect(() => {
		if (!isRunning) return;
		function replace(time: number) {
			if (!isRunningRef.current) {
				return;
			}
			if (previousTimeRef.current !== undefined) {
				const deltaTime = time - previousTimeRef.current;
				if (deltaTime < throttleMs) {
					requestAnimationFrame(replace);
					return;
				}
			}
			previousTimeRef.current = time;
			callback();
			requestAnimationFrame(replace);
		}
		replace(0);
	}, [isRunning, callback, throttleMs]);

	return [setStart, setStop];
}
