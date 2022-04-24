import React from 'react';
import { render } from '@testing-library/react';

import { BasicCard } from './card.composition';

describe('ui/layout/card', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicCard />);
    const rendered = getByText('hello world!');
    expect(rendered).toBeTruthy();
  });
});
