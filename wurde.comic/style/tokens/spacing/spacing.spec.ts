import { spacing } from './spacing';

describe('style/tokens/spacing', () => {
  it('should have spacing using t-shirt sizing and rule of 8', () => {
    expect(spacing.zero).toBeDefined();
    expect(spacing.zero).toBe('0px');
    expect(spacing.xxxs).toBeDefined();
    expect(spacing.xxxs).toBe('4px');
    expect(spacing.xxs).toBeDefined();
    expect(spacing.xxs).toBe('8px');
    expect(spacing.xs).toBeDefined();
    expect(spacing.xs).toBe('16px');
    expect(spacing.s).toBeDefined();
    expect(spacing.s).toBe('32px');
    expect(spacing.m).toBeDefined();
    expect(spacing.m).toBe('40px');
    expect(spacing.l).toBeDefined();
    expect(spacing.l).toBe('48px');
    expect(spacing.xl).toBeDefined();
    expect(spacing.xl).toBe('56px');
    expect(spacing.xxl).toBeDefined();
    expect(spacing.xxl).toBe('64px');
    expect(spacing.xxxl).toBeDefined();
    expect(spacing.xxxl).toBe('72px');
  });
});
