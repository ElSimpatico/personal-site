import React from 'react';
import ReactDOM from 'react-dom/client';

import { defineCustomElements } from '@personal-site/ui-kit-react';
import { App } from './app';

import { LanguageProvider } from './components';

import './index.scss';

const rootElement = document.getElementById('root');
if (rootElement) {
    defineCustomElements().then(() => {
        const root = ReactDOM.createRoot(rootElement);
        root.render(
            <LanguageProvider>
                <App />
            </LanguageProvider>,
        );
    });
}
