import type { Entry, EntryFields } from "contentful";

export interface TypeExperienceFields {
    titlte?: EntryFields.Symbol;
    time?: "Full time" | "Partial time" | "Tiempo completo" | "Tiempo parcial";
    companyName?: EntryFields.Symbol;
    location?: EntryFields.Symbol;
    description?: EntryFields.RichText;
    dateFrom?: EntryFields.Date;
    dateTo?: EntryFields.Date;
}

export type TypeExperience = Entry<TypeExperienceFields>;
