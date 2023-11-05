import { gql } from '@apollo/client';

export const GET_FOOTER = gql`
    query footerCollectionQuery {
        footerCollection(where: { slugId: "footer" }) {
            items {
                slugId
                logo {
                    url
                    description
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
                ownerDescription {
                    json
                }
            }
        }
    }
`;
