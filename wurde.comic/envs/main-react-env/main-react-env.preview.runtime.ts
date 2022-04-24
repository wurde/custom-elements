import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect } from '@teambit/react';

import { MainReactEnvAspect } from './main-react-env.aspect';

export class MainReactEnvPreviewMain {
  static runtime = PreviewRuntime;

  static dependencies = [ReactAspect];

  static async provider() {
    const mainReactEnvPreviewMain = new MainReactEnvPreviewMain();

    return mainReactEnvPreviewMain;
  }
}

MainReactEnvAspect.addRuntime(MainReactEnvPreviewMain);
