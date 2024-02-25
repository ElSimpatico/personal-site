import { Asset } from 'contentful';
import { LinkModel } from '@personal-site/ui-kit-react';

import {
    TypeHomeFields,
    TypeLinkFields,
    TypeProject,
    TypeProjectFields,
} from '@core/content';

import { Adapter } from '@core/adapter/base';

export interface ImageItem {
    url: string;
    alt?: string;
}

export interface ProjectItem {
    thumbnail: ImageItem;
    name: string;
    description: any;
    liveLink?: LinkModel;
}

export interface HomeView {
    avatar: ImageItem;
    description: any;
    technologies: {
        title: string;
        description: string;
        items: ImageItem[];
    };
    projects: {
        title: string;
        description: string;
        items: any[];
    };
}

export const defaultHomeView: HomeView = {
    avatar: {
        url: '',
        alt: '',
    },
    description: null,
    technologies: {
        title: '',
        description: '',
        items: [],
    },
    projects: {
        title: '',
        description: '',
        items: [],
    },
};

export class HomeAdapter extends Adapter<TypeHomeFields, HomeView> {
    adapt(origin: TypeHomeFields): HomeView {
        return {
            avatar: {
                url: origin.avatar.fields.file.url as string,
                alt: origin?.avatar.fields.description as string,
            },
            description: origin.mainDescription,
            technologies: {
                title: origin.technologiesTitle,
                description: origin.technologiesDescription,
                items: this.mapToImageCollection(origin.technologiesImages),
            },
            projects: {
                title: origin.projectsTitle,
                description: origin.projectsDescription,
                items: this.mapToCardCollection(origin.projectsCard),
            },
        };
    }

    private mapToImageCollection(collection: Asset[]): ImageItem[] {
        return collection.map((media: Asset): ImageItem => {
            return {
                url: media.fields.file?.url as string,
                alt: media.fields.description as string,
            };
        });
    }

    private mapToCardCollection(collection: TypeProject[]): ProjectItem[] {
        return collection.map((project: TypeProject): ProjectItem => {
            const fields = project.fields as TypeProjectFields;
            return {
                thumbnail: {
                    url: fields.thumbnail?.fields?.file?.url as string,
                    alt: fields.thumbnail?.fields?.description as string,
                },
                name: fields.name,
                description: fields.description,
                liveLink: {
                    href: (fields.liveLink?.fields as TypeLinkFields)?.href,
                    label: (fields.liveLink?.fields as TypeLinkFields)?.label,
                    accesibleLabel: (fields.liveLink?.fields as TypeLinkFields)
                        ?.accessibleLabel,
                },
            };
        });
    }
}
