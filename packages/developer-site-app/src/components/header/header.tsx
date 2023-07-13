import React, { ReactElement, useMemo } from 'react';

import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';

import { LinkModel, UiHeader } from '@personal-site/ui-kit-react';

import { GET_HEADER } from './queries';
import { HeaderContent, parseHeaderContent } from './adapter';
import './header.scss';

export function Header(): ReactElement {
    const { loading, data } = useQuery(GET_HEADER);

    const headerContent = useMemo<HeaderContent>(() => {
        return parseHeaderContent(data);
    }, [data]);

    if (loading) {
        return null;
    }

    return (
        <div>
            <UiHeader
                class="main-header"
                logoUrl={headerContent.logoUrl}
                logoAlt={headerContent.logoAlt}
                darkMode
                darkModeLabel={headerContent.darkModeLabel}
                darkModeAccessibleLabel={headerContent.darkModeAccessibleLabel}
                dataLinksSocial={JSON.stringify(headerContent.socialLinks)}
            >
                {(headerContent.mainLinks || []).map(
                    (link: LinkModel, index: number) => {
                        return (
                            <Link
                                key={`router-link_${index}`}
                                slot="main-link"
                                className="router-link"
                                to={link.href}
                                arria-label={link.accesibleLabel}
                            >
                                {link.label}
                            </Link>
                        );
                    },
                )}
            </UiHeader>
        </div>
    );
}
