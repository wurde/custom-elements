import { MainReactEnvMain } from './main-react-env.main.runtime';

describe('envs/main-react-env', () => {
  it('should instantiate successfully', () => {
    const env = new MainReactEnvMain();
    expect(env).toBeTruthy();
  });
});
