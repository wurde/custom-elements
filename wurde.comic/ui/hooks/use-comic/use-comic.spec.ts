import { useComic } from './use-comic';

describe('ui/hooks/use-comic', () => {
  it('should return specific comic if passed ID', () => {
    const comic = useComic(1);
    expect(comic.title).toBe('Occam');
  });

  it('should return first comic if passed out of range number', async () => {
    const comic = useComic(100);
    expect(comic.title).toBe('Data Trap');
  });
});
