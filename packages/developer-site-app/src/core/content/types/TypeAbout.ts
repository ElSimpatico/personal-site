import type { Asset, Entry, EntryFields } from 'contentful';
import type { TypeExperienceFields } from './TypeExperience';

export interface TypeAboutFields {
    slugId: EntryFields.Symbol;
    title?: EntryFields.Symbol;
    description?: EntryFields.RichText;
    experienceTitle?: EntryFields.Symbol;
    curriculum?: Asset;
    jobPositions?: Entry<TypeExperienceFields>[];
    education?: Entry<TypeExperienceFields>[];
    educationTitle?: EntryFields.Symbol;
}

export type TypeAbout = Entry<TypeAboutFields>;
