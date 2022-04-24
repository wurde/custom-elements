import React from 'react';
import { render } from '@testing-library/react';

import { Text } from './text';

describe('ui/typography/text', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<Text>hello world!</Text>);
    const rendered = getByText('hello world!');
    expect(rendered).toBeTruthy();
  });
});
