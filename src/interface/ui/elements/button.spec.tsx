/* eslint-disable node/no-unpublished-import */
import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import { Button } from './button';

/**
 * @vitest-environment happy-dom
 */
it('serial test', async () => {
	render(<Button />);
	const elm = screen.getByTestId('button');
	expect(elm.textContent).eq('send');
});
