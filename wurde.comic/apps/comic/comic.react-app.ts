// https://www.npmjs.com/package/@teambit/react
import { ReactAppOptions } from '@teambit/react';

// type ReactAppOptions = {
//   name: string;
//   entry: string[];
//   ssr?: boolean;
//   bundler?: Bundler;
//   devServer?: DevServer;
//   webpackTransformers?: WebpackConfigTransformer[];
//   prerender?: ReactAppPrerenderOptions;
//   deploy?: (context: ReactDeployContext) => Promise<void>;
//   portRange?: number[];
//   favicon?: string;
// }
export const ComicApp: ReactAppOptions = {
  // Name of the application.
  name: 'comic',

  // Path to entry files of the application.
  entry: [require.resolve('./comic.app-root')],

  // Use server-side rendering for the app.
  ssr: false,

  // Instance of bundler to use. default is Webpack.
  // bundler: {},

  // Instance of dev server to use. default is Webpack.
  // devServer: {},

  // Set webpack transformers
  webpackTransformers: [],

  // Prerender your app. Accepts an array of routes.
  // If none, prerender would not apply.
  prerender: { routes: [] },

  // Deploy function.
  deploy: async function deployer() {
    // TODO: implement deployment script
  },

  // Ranges of ports to use to run the app server.
  portRange: [3000, 3010],

  // Favicon for the app.
  favicon: './favicon.ico',
};

export default ComicApp;
