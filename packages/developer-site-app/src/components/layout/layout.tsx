import React, { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@components';

import './layout.scss';

export function Layout(): ReactElement {
    return (
        <div className="layout-container">
            <Header />
            <Outlet />
        </div>
    );
}
