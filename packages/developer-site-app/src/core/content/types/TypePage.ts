import type { Entry, EntryFields } from "contentful";
import type { TypePageSectionFields } from "./TypePageSection";

export interface TypePageFields {
    slugId: EntryFields.Symbol;
    sections?: Entry<TypePageSectionFields>[];
}

export type TypePage = Entry<TypePageFields>;
