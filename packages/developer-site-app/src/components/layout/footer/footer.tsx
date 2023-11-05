import React, { ReactElement, useMemo } from 'react';
import { useQuery } from '@apollo/client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { MARKS } from '@contentful/rich-text-types';

import { UiFooter } from '@personal-site/ui-kit-react';

import { GET_FOOTER } from './queries';
import { FooterContent, parseFooterContent } from './adapter';
import './footer.scss';

export function Footer(): ReactElement {
    const { loading, data } = useQuery(GET_FOOTER);

    const options = useMemo(() => {
        return {
            renderMark: {
                [MARKS.BOLD]: (text) => (
                    <span className="highlighted-text">{text}</span>
                ),
            },
        };
    }, []);

    const footerContent = useMemo<FooterContent>(() => {
        return parseFooterContent(data);
    }, [data]);

    if (loading) {
        return null;
    }

    return (
        <UiFooter
            class="footer"
            logoUrl={footerContent.logoUrl}
            logoAlt={footerContent.logoAlt}
            dataLinksSocial={JSON.stringify(footerContent.socialLinks)}
        >
            <div slot="owner">
                {documentToReactComponents(
                    footerContent.ownerDescription,
                    options,
                )}
            </div>
        </UiFooter>
    );
}
