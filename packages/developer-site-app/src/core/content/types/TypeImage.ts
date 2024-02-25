import type { Asset, Entry } from "contentful";

export interface TypeImageFields {
    media: Asset;
}

export type TypeImage = Entry<TypeImageFields>;
