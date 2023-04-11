import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

import jestConfig from './jest.config';

export const config: Config = {
  namespace: 'ui-kit',
  globalStyle: 'src/scss/main.scss',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [{ src: 'assets' }],
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [sass()],
  testing: {
    ...jestConfig,
  },
};
