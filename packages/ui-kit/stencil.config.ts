import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';
import packageJSON from './package.json';

import jestConfig from './jest.config';

export const config: Config = {
    namespace: 'ui-kit',
    globalStyle: 'src/scss/main.scss',
    outputTargets: [
        {
            type: 'dist',
            esmLoaderPath: '../loader',
            copy: [{ src: 'assets' }, { src: 'scss' }],
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
        reactOutputTarget({
            componentCorePackage: packageJSON.name,
            proxiesFile:
                '../ui-kit-react/lib/components/stencil-generated/index.ts',
        }),
    ],
    plugins: [
        sass({
            injectGlobalPaths: [
                'src/scss/abstracts/variables.scss',
                'src/scss/abstracts/mixins.scss',
            ],
        }),
    ],
    testing: {
        ...jestConfig,
    },
};
