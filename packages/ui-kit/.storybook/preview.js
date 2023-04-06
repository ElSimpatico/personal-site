import { defineCustomElements } from '../loader';
defineCustomElements();

import '../dist/ui-kit/ui-kit.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: { disable: true },
    themes: {
        default: 'dark',
        clearable: false,
        list: [
            { name: 'light', class: 'theme-light' },
            { name: 'dark', class: 'theme-dark' },
        ],
    },
}