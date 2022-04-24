import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './button';

it('should render with the correct text', () => {
  const { getByText } = render(<Button>hello world!</Button>);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
