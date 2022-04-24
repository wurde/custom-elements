import { colors } from './colors';

describe('style/tokens/colors', () => {
  it('should have colors for copy', () => {
    expect(colors.copy).toBeDefined();
    expect(colors.copy.primary).toBeDefined();
    expect(colors.copy.primary).toBe('#1C1C1C');
  });
});
