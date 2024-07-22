import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {
    IconNames,
    UiAccordion,
    UiIcon,
    UiTag,
} from '@personal-site/ui-kit-react';
import React, { ReactElement } from 'react';
import { ExperienceSectionProps } from './experience-section-props';

export function ExperienceSection(props: ExperienceSectionProps): ReactElement {
    const { title, experiences } = props;

    if (experiences.length === 0) {
        return null;
    }

    return (
        <section className="aboutme__section">
            <h1 className="aboutme__title">{title}</h1>
            <ul className="aboutme__list">
                {experiences.map((item, index) => (
                    <li
                        key={`$${item.title}_${index}`}
                        className="aboutme__listItem"
                    >
                        <UiAccordion hideArrow>
                            <div className="boxInfo" slot="header">
                                <h3 className="boxInfo__title">{item.title}</h3>
                                {item.time && (
                                    <div className="boxInfo__timeTag">
                                        <UiTag>{item.time}</UiTag>
                                    </div>
                                )}
                                <div className="boxInfo__timeRange tag">
                                    <UiIcon
                                        className="tag__icon"
                                        name={IconNames.calendar}
                                    ></UiIcon>
                                    <span>{item.dateRange}</span>
                                </div>
                                <ul className="boxInfo__taglist">
                                    {item.company && (
                                        <li className="boxInfo__taglistitem">
                                            <div className="tag">
                                                <UiIcon
                                                    className="tag__icon"
                                                    name={IconNames.globe}
                                                ></UiIcon>
                                                {item.company}
                                            </div>
                                        </li>
                                    )}
                                    {item.location && (
                                        <li className="boxInfo__taglistitem">
                                            <div className="tag">
                                                <UiIcon
                                                    className="tag__icon"
                                                    name={IconNames.pin}
                                                ></UiIcon>
                                                {item.location}
                                            </div>
                                        </li>
                                    )}
                                </ul>
                            </div>

                            <div className="boxDescription" slot="body">
                                {documentToReactComponents(item.description)}
                            </div>
                        </UiAccordion>
                    </li>
                ))}
            </ul>
        </section>
    );
}
