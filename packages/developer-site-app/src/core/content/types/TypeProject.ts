import type { Asset, Entry, EntryFields } from "contentful";
import type { TypeLinkFields } from "./TypeLink";

export interface TypeProjectFields {
    name: EntryFields.Symbol;
    description?: EntryFields.RichText;
    thumbnail?: Asset;
    liveLink?: Entry<TypeLinkFields>;
}

export type TypeProject = Entry<TypeProjectFields>;
