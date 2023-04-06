const preset = require('@stencil/core/testing/jest-preset');

module.exports = {
  ...preset,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.stories.{ts,tsx}'],
  moduleNameMapper: {
    ...preset.moduleNameMapper,

    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/jest-assets-module.js',

    '@utils(.*)': '<rootDir>/src/utils$1',
  },
};
