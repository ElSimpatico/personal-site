import type { Asset, Entry, EntryFields } from "contentful";
import type { TypeLinkFields } from "./TypeLink";

export interface TypeFooterFields {
    logo?: Asset;
    socialLinks?: Entry<TypeLinkFields>[];
    ownerDescription?: EntryFields.RichText;
    slugId: EntryFields.Symbol;
}

export type TypeFooter = Entry<TypeFooterFields>;
