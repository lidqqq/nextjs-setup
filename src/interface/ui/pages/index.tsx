import { Project } from '@shared/Project';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Task } from '../shared/Task';

export const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header></header>
			<main className="m-6">
				<div className="mt-6 p-5 border border-green-400 rounded-sm">
					<Project />
				</div>
				<div className="mt-6 p-5 border border-green-400 rounded-sm">
					<Task />
				</div>
			</main>
			<footer></footer>
		</>
	);
};