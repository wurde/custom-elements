import { fontFamily } from './font-family';

describe('style/tokens/font-family', () => {
  it('should have a default fontFamily', () => {
    expect(fontFamily.main).toBeDefined();
    expect(fontFamily.main).toBe('arial,helvetica,sans-serif;');
  });
});
