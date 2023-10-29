import { gql } from '@apollo/client';

export const GET_HOME = gql`
    query homeEntryQuery {
        homeCollection(where: { slugId: "home" }) {
            items {
                slugId
                avatar {
                    title
                    url
                    description
                }
                title
                description
                technologiesTitle
                technologiesDescription
                technologiesImagesCollection {
                    items {
                        title
                        url
                        description
                    }
                }
            }
        }
    }
`;

export const GET_HOME_PROJECTS = gql`
    query homeEntryQuery {
        homeCollection(where: { slugId: "home" }) {
            items {
                slugId
                projectsTitle
                projectsDescription
                projectsCardCollection {
                    items {
                        name
                        description {
                            json
                        }
                        thumbnail {
                            title
                            description
                            url
                        }
                        liveLink {
                            href
                            label
                            accessibleLabel
                        }
                    }
                }
            }
        }
    }
`;
