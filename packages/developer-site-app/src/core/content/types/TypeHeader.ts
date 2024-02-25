import type { Asset, Entry, EntryFields } from "contentful";
import type { TypeLinkFields } from "./TypeLink";

export interface TypeHeaderFields {
    mainLinks?: Entry<TypeLinkFields>[];
    slugId: EntryFields.Symbol;
    socialLinks?: Entry<TypeLinkFields>[];
    darkMode?: EntryFields.Boolean;
    darkModeLabel?: EntryFields.Symbol;
    darkModeAccessibleLabel?: EntryFields.Symbol;
    logo?: Asset;
}

export type TypeHeader = Entry<TypeHeaderFields>;
