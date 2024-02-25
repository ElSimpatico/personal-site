import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { Locale } from 'contentful';

import { LinkModel, UiHeader } from '@personal-site/ui-kit-react';

import { useController } from './useController';

import './header.scss';

export function Header(): ReactElement {
    const {
        headerRef,
        loading,
        locales,
        locale,
        view,
        onCloseMenu,
        onSelectLanguage,
    } = useController();

    if (loading) {
        return null;
    }

    return (
        <div>
            <UiHeader
                class="main-header"
                logoUrl={view.logoUrl}
                logoAlt={view.logoAlt}
                darkMode
                darkModeAccessibleLabel={view.darkModeAccessibleLabel}
                dataLinksSocial={JSON.stringify(view.socialLinks)}
                ref={headerRef}
            >
                {(view.mainLinks || []).map(
                    (link: LinkModel, index: number) => {
                        return (
                            <Link
                                key={`router-link_${index}`}
                                slot="main-link"
                                className="router-link"
                                to={link.href}
                                arria-label={link.accesibleLabel}
                                onClick={onCloseMenu}
                            >
                                {link.label}
                            </Link>
                        );
                    },
                )}

                {(locales || []).length > 0 && (
                    <select
                        slot="main-link"
                        onChange={onSelectLanguage}
                        defaultValue={locale.code}
                    >
                        {locales.map((localeOption: Locale, index: number) => {
                            return (
                                <option
                                    key={`language_option_${index}`}
                                    value={localeOption.code}
                                >
                                    {localeOption.name}
                                </option>
                            );
                        })}
                    </select>
                )}
            </UiHeader>
        </div>
    );
}
