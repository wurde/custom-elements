import React from 'react';
import { render } from '@testing-library/react';

import { Image } from './image';

describe('ui/media/image', () => {
  it('should render with the correct text', () => {
    const src = 'https://imgs.xkcd.com/comics/frankenstein_captcha.png';
    const altText = 'The distinction between a ship and a boat is a line drawn in water.';

    const { container, getByAltText } = render(<Image src={src} alt={altText} />);
    const img = container.querySelector('img');
    expect(img).toBeInTheDocument();
    const imgByAlt = getByAltText(altText);
    expect(imgByAlt).toBeTruthy();
  });

  it('should accept custom styles via class utilities', () => {
    const src = 'https://imgs.xkcd.com/comics/frankenstein_captcha.png';
    const altText = 'The distinction between a ship and a boat is a line drawn in water.';

    const { container } = render(<Image src={src} alt={altText} className="custom-class another" />);
    const rendered = container.querySelector('.custom-class');
    expect(rendered).toBeTruthy();
    const another = container.querySelector('.another');
    expect(another).toBeTruthy();
  });
});
