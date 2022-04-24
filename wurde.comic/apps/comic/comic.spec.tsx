import React from 'react';
import { render } from '@testing-library/react';

import { ComicApp } from './app';

describe('apps/comic', () => {
  it('should render the image with alt text', () => {
    const { container, getByAltText } = render(<ComicApp />);

    const img = container.querySelector('img');
    expect(img).toBeVisible();
    expect(img).toHaveClass('m-auto');

    const altText = 'It\'s important to make sure your analysis destroys as much information as it produces.';
    expect(getByAltText(altText)).toBeInTheDocument();
  });

  it('should render the title', () => {
    const { getByText } = render(<ComicApp />);
    const rendered = getByText('Data Trap');
    expect(rendered).toBeTruthy();
  });
});
