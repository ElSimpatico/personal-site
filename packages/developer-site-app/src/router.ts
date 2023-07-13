import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@components';
import { Home, About } from '@pages';

export const ROUTER = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                path: '/',
                Component: Home,
            },
            {
                path: 'about',
                Component: About,
            },
        ],
    },
]);
