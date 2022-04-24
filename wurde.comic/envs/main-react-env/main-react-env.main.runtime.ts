import {
  MainRuntime,
} from '@teambit/cli';
import {
  ReactAspect,
  ReactMain,
  UseWebpackModifiers,
} from '@teambit/react';
import {
  EnvsAspect,
  EnvsMain,
} from '@teambit/envs';

import {
  MainReactEnvAspect,
} from './main-react-env.aspect';
import {
  previewConfigTransformer,
  devServerConfigTransformer,
} from './webpack/webpack-transformers';

export class MainReactEnvMain {
  static slots = [];

  static dependencies = [ReactAspect, EnvsAspect];

  static runtime = MainRuntime;

  static async provider([react, envs]: [ReactMain, EnvsMain]) {
    const webpackModifiers: UseWebpackModifiers = {
      previewConfig: [previewConfigTransformer],
      devServerConfig: [devServerConfigTransformer],
    };

    const MainReactEnvEnv = react.compose([
      /**
       * Uncomment to override the config files for TypeScript, Webpack or Jest
       * Your config gets merged with the defaults
       */

      react.useWebpack(webpackModifiers),
      react.overrideJestConfig(require.resolve('./jest/jest.config')),

      /**
       * override the ESLint default config here then check your files for lint errors
       * @example
       * bit lint
       * bit lint --fix
       */
      react.useEslint({
        transformers: [
          (config) => {
            config.setRule('no-console', ['error']);
            return config;
          },
        ],
      }),

      /**
       * override the Prettier default config here the check your formatting
       * @example
       * bit format --check
       * bit format
       */
      react.usePrettier({
        transformers: [
          (config) => {
            config.setKey('tabWidth', 2);
            return config;
          },
        ],
      }),

      /**
       * override dependencies here
       * @example
       * Uncomment types to include version 17.0.3 of the types package
       */
      react.overrideDependencies({
        devDependencies: {
          // '@types/react': '17.0.3'
        },
      }),
    ]);
    envs.registerEnv(MainReactEnvEnv);
    return new MainReactEnvMain();
  }
}

MainReactEnvAspect.addRuntime(MainReactEnvMain);
