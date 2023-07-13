const { resolve } = require('path');

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        'storybook-addon-themes',
        '@storybook/addon-a11y',
    ],
    framework: '@storybook/html',

    staticDirs: ['./public', '../src/assets'],

    webpackFinal: async (config, { configType }) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@core': resolve(__dirname, '../src/core/'),
        };

        return config;
    },
};
