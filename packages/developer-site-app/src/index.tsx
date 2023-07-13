import React from 'react';
import ReactDOM from 'react-dom/client';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { defineCustomElements } from '@personal-site/ui-kit-react';
import './index.scss';

import { App } from './app';

const client = new ApolloClient({
    uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFULL_SPACE}/environments/${process.env.CONTENTFULL_ENVIRONMENT}`,
    cache: new InMemoryCache(),
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.CONTENTFULL_ACCESS_TOKEN}`,
    },
});

const rootElement = document.getElementById('root');
if (rootElement) {
    defineCustomElements().then(() => {
        const root = ReactDOM.createRoot(rootElement);
        root.render(
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>,
        );
    });
}
