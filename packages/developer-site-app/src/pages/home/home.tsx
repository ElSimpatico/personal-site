import React, { ReactElement } from 'react';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { UiAvatar, UiCard, UiLink } from '@personal-site/ui-kit-react';

import { ImageItem, ProjectItem } from '@core/adapter';

import { useController } from './useController';

import './home.scss';

export function Home(): ReactElement {
    const { descriptionOptions, loading, view } = useController();

    if (loading) {
        return null;
    }

    return (
        <div>
            <section
                className="home__business-card"
                aria-labelledby="business-card-title business-card-description"
            >
                <UiAvatar
                    class="business-card__avatar"
                    imageUrl={view.avatar.url}
                    imageAlt={view.avatar.alt}
                ></UiAvatar>
                <div className="business-card__text-container">
                    {documentToReactComponents(
                        view.description,
                        descriptionOptions,
                    )}
                </div>
            </section>
            {view.technologies && (
                <section className="home__technologies">
                    <div className="text-container">
                        <h2 className="title">{view.technologies.title}</h2>
                        <p className="description">
                            {view.technologies.description}
                        </p>
                    </div>

                    <ul className="images-list">
                        {(view.technologies.items || []).map(
                            (item: ImageItem, index: number) => {
                                return (
                                    <li
                                        className="image-item"
                                        key={`tech-item__${index}`}
                                    >
                                        <img
                                            src={item.url}
                                            alt={item.alt}
                                        ></img>
                                    </li>
                                );
                            },
                        )}
                    </ul>
                </section>
            )}
            {view.projects && (
                <section className="home__projects">
                    <div className="text-container">
                        <h2 className="title">{view.projects.title}</h2>
                        <p className="description">
                            {view.projects.description}
                        </p>
                    </div>

                    {(view.projects.items || []).length > 0 && (
                        <ul className="projects-list">
                            {view.projects.items.map(
                                (item: ProjectItem, index: number) => {
                                    return (
                                        <li
                                            className="project-item"
                                            key={`project-item__${index}`}
                                        >
                                            <UiCard
                                                imageUrl={item.thumbnail.url}
                                                imageAlt={item.thumbnail.alt}
                                            >
                                                <div slot="card-body">
                                                    <h3>{item.name}</h3>
                                                    {documentToReactComponents(
                                                        item.description,
                                                    )}
                                                    <div>
                                                        <UiLink
                                                            url={
                                                                item.liveLink
                                                                    .href
                                                            }
                                                        >
                                                            {
                                                                item.liveLink
                                                                    .label
                                                            }
                                                        </UiLink>
                                                    </div>
                                                </div>
                                            </UiCard>
                                        </li>
                                    );
                                },
                            )}
                        </ul>
                    )}
                </section>
            )}
        </div>
    );
}
