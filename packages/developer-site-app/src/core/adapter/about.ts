import {
    TypeAboutFields,
    TypeExperience,
    TypeExperienceFields,
} from '@core/content';

import { Adapter } from '@core/adapter/base';

export interface Experience {
    title: string;
    description: any;
    time: string;
    company: string;
    location: string;
    dateRange: string;
}

export interface AboutView {
    title: string;
    description: any;
    curriculum?: {
        accessibleLabel?: string;
        label: string;
        filename: string;
        fileUrl: string;
    };
    experiences: {
        title: string;
        items: Experience[];
    };
    education: {
        title: string;
        items: Experience[];
    };
}

export const defaultAboutView: AboutView = {
    title: '',
    description: null,

    experiences: {
        title: '',
        items: [],
    },
    education: {
        title: '',
        items: [],
    },
};

export class AboutAdapter extends Adapter<TypeAboutFields, AboutView> {
    adapt(origin: TypeAboutFields): AboutView {
        console.log('asset', origin.curriculum);
        return {
            title: origin.title ?? '',
            description: origin.description ?? null,
            curriculum: {
                accessibleLabel:
                    (origin.curriculum.fields.title as string) ?? '',
                label: (origin.curriculum.fields.title as string) ?? '',
                filename:
                    (origin.curriculum.fields.file.fileName as string) ?? '',
                fileUrl: (origin.curriculum.fields.file.url as string) ?? '',
            },
            experiences: {
                title: origin.experienceTitle ?? '',
                items: this.mapToExperienceCollection(origin.jobPositions),
            },
            education: {
                title: origin.educationTitle ?? '',
                items: this.mapToExperienceCollection(origin.education),
            },
        };
    }

    private mapToExperienceCollection(
        collection: TypeExperience[],
    ): Experience[] {
        return (collection ?? []).map((experience: TypeExperience) => {
            const fields = experience.fields as TypeExperienceFields;
            return {
                title: fields.titlte ?? '',
                time: fields.time ?? '',
                company: fields.companyName ?? '',
                location: fields.location ?? '',
                dateRange: `${fields.dateFrom} - ${fields.dateTo}`,
                description: fields.description,
            };
        });
    }
}
