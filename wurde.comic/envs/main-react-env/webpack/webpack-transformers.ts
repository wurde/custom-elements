// https://github.com/teambit/bit/tree/master/scopes/react/react/webpack

import {
  WebpackConfigTransformer,
  WebpackConfigMutator,
} from '@teambit/webpack';

import webpackConfig from './webpack.config';

/**
 * Transformation to apply for both preview and dev server
 * @param config
 * @param _context
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function commonTransformation(config: WebpackConfigMutator) {
  // Merge config with the webpack.config.js file
  // if you choose to import a module export format config.
  config.merge([webpackConfig]);
  // config.addAliases({});
  // config.addModuleRule(youRuleHere);
  return config;
}

/**
 * Transformation for the preview only
 * @param config
 * @param context
 * @returns
 */
export const previewConfigTransformer: WebpackConfigTransformer = (
  config: WebpackConfigMutator,
) => {
  const newConfig = commonTransformation(config);
  return newConfig;
};

/**
 * Transformation for the dev server only
 * @param config
 * @param context
 * @returns
 */
export const devServerConfigTransformer: WebpackConfigTransformer = (
  config: WebpackConfigMutator,
) => {
  const newConfig = commonTransformation(config);
  return newConfig;
};
