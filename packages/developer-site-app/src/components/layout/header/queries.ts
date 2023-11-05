import { gql } from '@apollo/client';

export const GET_HEADER = gql`
    query headerCollectionQuery {
        headerCollection(where: { slugId: "header" }) {
            items {
                slugId
                logo {
                    url
                    description
                }
                mainLinksCollection {
                    items {
                        label
                        accessibleLabel
                        href
                        target
                    }
                }
                socialLinksCollection {
                    items {
                        id
                        label
                        accessibleLabel
                        href
                        target
                    }
                }
                darkMode
                darkModeLabel
                darkModeAccessibleLabel
            }
        }
    }
`;
