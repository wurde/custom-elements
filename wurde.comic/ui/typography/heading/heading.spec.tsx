import React from 'react';
import { render } from '@testing-library/react';

import { Heading } from './heading';

describe('ui/typography/heading', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<Heading>hello world!</Heading>);
    const rendered = getByText('hello world!');
    expect(rendered).toBeTruthy();
  });

  it('should render with the correct variant', () => {
    const { container: baseContainer } = render(<Heading />);
    const base = baseContainer.querySelector('h2');
    expect(base).toBeTruthy();

    const { container: h1Container } = render(<Heading variant="h1" />);
    const h1 = h1Container.querySelector('h1');
    expect(h1).toBeTruthy();

    const { container: h2Container } = render(<Heading variant="h2" />);
    const h2 = h2Container.querySelector('h2');
    expect(h2).toBeTruthy();

    const { container: h3Container } = render(<Heading variant="h3" />);
    const h3 = h3Container.querySelector('h3');
    expect(h3).toBeTruthy();

    const { container: h4Container } = render(<Heading variant="h4" />);
    const h4 = h4Container.querySelector('h4');
    expect(h4).toBeTruthy();

    const { container: h5Container } = render(<Heading variant="h5" />);
    const h5 = h5Container.querySelector('h5');
    expect(h5).toBeTruthy();

    const { container: h6Container } = render(<Heading variant="h6" />);
    const h6 = h6Container.querySelector('h6');
    expect(h6).toBeTruthy();
  });

  it('should accept custom styles via class utilities', () => {
    const { container } = render(<Heading className="custom-class another" />);
    const rendered = container.querySelector('.custom-class');
    expect(rendered).toBeTruthy();
    const another = container.querySelector('.another');
    expect(another).toBeTruthy();
  });
});
