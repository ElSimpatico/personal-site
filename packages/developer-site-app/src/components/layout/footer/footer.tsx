import React, { ReactElement } from 'react';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { UiFooter } from '@personal-site/ui-kit-react';

import { useController } from './useController';

import './footer.scss';

export function Footer(): ReactElement {
    const { loading, view, ownerOptions } = useController();

    if (loading) {
        return null;
    }

    return (
        <UiFooter
            class="footer"
            logoUrl={view.logoUrl}
            logoAlt={view.logoAlt}
            dataLinksSocial={JSON.stringify(view.socialLinks)}
        >
            <div slot="owner">
                {documentToReactComponents(view.ownerDescription, ownerOptions)}
            </div>
        </UiFooter>
    );
}
