import React from 'react';
import { render } from '@testing-library/react';

import { Viewer } from './viewer';

describe('pages/viewer', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<Viewer />);
    const rendered = getByText('Data Trap');
    expect(rendered).toBeTruthy();
  });
});
