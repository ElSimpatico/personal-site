import type { Asset, Entry, EntryFields } from "contentful";
import type { TypeProjectFields } from "./TypeProject";

export interface TypeHomeFields {
    slugId: EntryFields.Symbol;
    avatar?: Asset;
    title?: EntryFields.Symbol;
    description?: EntryFields.Symbol;
    technologiesTitle?: EntryFields.Symbol;
    technologiesDescription?: EntryFields.Symbol;
    technologiesImages?: Asset[];
    projectsTitle?: EntryFields.Symbol;
    projectsDescription?: EntryFields.Symbol;
    projectsCard?: Entry<TypeProjectFields>[];
    mainDescription?: EntryFields.RichText;
}

export type TypeHome = Entry<TypeHomeFields>;
