import { breakpoints } from './breakpoints';

describe('style/tokens/breakpoints', () => {
  it('should have breakpoints for desktop, tablet, and mobile', () => {
    expect(breakpoints.desktop).toBeDefined();
    expect(breakpoints.desktop).toBe('1024px');
    expect(breakpoints.tablet).toBeDefined();
    expect(breakpoints.tablet).toBe('768px');
    expect(breakpoints.mobile).toBeDefined();
    expect(breakpoints.mobile).toBe('360px');
  });
});
