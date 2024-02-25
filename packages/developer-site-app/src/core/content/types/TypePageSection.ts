import type { Entry, EntryFields } from "contentful";

export interface TypePageSectionFields {
    title?: EntryFields.Symbol;
    description?: EntryFields.Symbol;
    contents?: Entry<Record<string, any>>[];
}

export type TypePageSection = Entry<TypePageSectionFields>;
