import type { Entry, EntryFields } from "contentful";

export interface TypeLinkFields {
    href?: EntryFields.Symbol;
    label?: EntryFields.Symbol;
    accessibleLabel?: EntryFields.Symbol;
    target?: "_blank" | "_parent" | "_self" | "_top";
    id?: EntryFields.Symbol;
}

export type TypeLink = Entry<TypeLinkFields>;
