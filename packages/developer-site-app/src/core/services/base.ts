export abstract class ContentService<T> {
    abstract getContent(localeCode?: string): Promise<T>;
}
