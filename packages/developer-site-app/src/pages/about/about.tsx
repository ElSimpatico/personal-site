import { IconNames, UiIcon, UiButton } from '@personal-site/ui-kit-react';
import React, { ReactElement } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { ExperienceSection } from './experience-section';

import { useController } from './useController';
import './about.scss';

export function About(): ReactElement {
    const { loading, view, onDownloadCurriculum } = useController();

    if (loading) {
        return null;
    }

    return (
        <main className="aboutme">
            <section className="aboutme__section mainSection">
                <h1 className="aboutme__title mainSection__title">
                    {view.title}
                </h1>
                {view.curriculum && (
                    <UiButton
                        className="aboutme__link mainSection__link"
                        accessibleLabel={view.curriculum.accessibleLabel}
                        onClick={onDownloadCurriculum}
                    >
                        <span>{view.curriculum.label}</span>
                        <UiIcon name={IconNames.download}></UiIcon>
                    </UiButton>
                )}
                <div className="aboutme__description mainSection__description">
                    {documentToReactComponents(view.description)}
                </div>
            </section>

            <ExperienceSection
                key="experiences"
                title={view.experiences.title}
                experiences={view.experiences.items}
            />
            <ExperienceSection
                key="education"
                title={view.education.title}
                experiences={view.education.items}
            />
        </main>
    );
}
