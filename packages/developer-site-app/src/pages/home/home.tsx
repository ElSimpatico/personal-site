import React, { ReactElement, useMemo } from 'react';
import { useQuery } from '@apollo/client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { MARKS } from '@contentful/rich-text-types';

import { UiAvatar, UiCard, UiLink } from '@personal-site/ui-kit-react';
import { GET_HOME, GET_HOME_PROJECTS } from './queries';

import './home.scss';
import {
    HomeMainContent,
    HomeProjects,
    ImageItem,
    ProjectItem,
    parseHomeMain,
    parseHomeProjects,
} from './adapter';

export function Home(): ReactElement {
    const { loading: mainLoading, data: mainData } = useQuery(GET_HOME);
    const { loading: projectsLoading, data: projectsData } =
        useQuery(GET_HOME_PROJECTS);

    const options = useMemo(() => {
        return {
            renderMark: {
                [MARKS.BOLD]: (text) => (
                    <span className="highlighted-text">{text}</span>
                ),
            },
        };
    }, []);

    const mainContent = useMemo<HomeMainContent>(() => {
        return parseHomeMain(mainData);
    }, [mainData]);

    const projectsContent = useMemo<HomeProjects>(() => {
        return parseHomeProjects(projectsData);
    }, [projectsData]);

    if (mainLoading || projectsLoading) {
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
                    imageUrl={mainContent?.avatarImageUrl}
                    imageAlt={mainContent?.avatarImageAlt}
                ></UiAvatar>
                <div className="business-card__text-container">
                    {documentToReactComponents(
                        mainContent.mainDescription,
                        options,
                    )}
                </div>
            </section>
            {mainContent?.technologySection && (
                <section className="home__technologies">
                    <div className="text-container">
                        <h2 className="title">
                            {mainContent.technologySection?.title}
                        </h2>
                        <p className="description">
                            {mainContent.technologySection?.description}
                        </p>
                    </div>

                    <ul className="images-list">
                        {(mainContent.technologySection?.items || []).map(
                            (item: ImageItem, index: number) => {
                                return (
                                    <li
                                        className="image-item"
                                        key={`tech-item__${index}`}
                                    >
                                        <img
                                            src={item.imageUrl}
                                            alt={item.imageAlt}
                                        ></img>
                                    </li>
                                );
                            },
                        )}
                    </ul>
                </section>
            )}
            {projectsContent && (
                <section className="home__projects">
                    <div className="text-container">
                        <h2 className="title">{projectsContent.title}</h2>
                        <p className="description">
                            {projectsContent?.description}
                        </p>
                    </div>

                    {(projectsContent.items || []).length > 0 && (
                        <ul className="projects-list">
                            {projectsContent.items.map(
                                (item: ProjectItem, index: number) => {
                                    return (
                                        <li
                                            className="project-item"
                                            key={`project-item__${index}`}
                                        >
                                            <UiCard
                                                imageUrl={item.imageUrl}
                                                imageAlt={item.imageAlt}
                                            >
                                                <div slot="card-body">
                                                    <h3>{item.name}</h3>
                                                    {documentToReactComponents(
                                                        item.description,
                                                    )}
                                                    <div>
                                                        <UiLink
                                                            url={item.liveUrl}
                                                        >
                                                            {item.liveLabel}
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
