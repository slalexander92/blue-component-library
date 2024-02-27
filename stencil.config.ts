import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'blue-component-library',
  outputTargets: [{
    type: 'dist',
    esmLoaderPath: '../loader',
  }, {
    type: 'dist-custom-elements',
  }, {
    type: 'docs-readme',
  }, {
    type: 'www',
    serviceWorker: null, // disable service workers
  }],
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/styles/global.scss',
      ],
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
};
