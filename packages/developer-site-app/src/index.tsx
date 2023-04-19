import React from 'react';
import ReactDOM from 'react-dom/client';

import { defineCustomElements } from '@personal-site/ui-kit-react';
import './index.scss';

import { App } from './app';

const rootElement = document.getElementById('root');
if (rootElement) {
    defineCustomElements().then(() => {
        const root = ReactDOM.createRoot(rootElement);
        root.render(<App />);
    });
}
