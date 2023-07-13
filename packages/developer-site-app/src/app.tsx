import React, { ReactElement } from 'react';
import { RouterProvider } from 'react-router-dom';

import { ROUTER } from './router';

export function App(): ReactElement {
    return <RouterProvider router={ROUTER}></RouterProvider>;
}
