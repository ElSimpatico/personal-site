import { IconNames } from '@core/types';

/**
 * Parse camel case to dash case
 * @param { string } camelString
 * @returns { string } dashcase string
 * @example parseCamelCaseToDahCase("camelString"); //camel-string
 */
export function parseCamelCaseToDashCase(camelString: string): string {
    return (camelString || '').replace(
        /[A-Z]/g,
        (character: string, offset: number) => {
            const lowerChar = character.toLowerCase();
            return offset === 0 ? lowerChar : `-${lowerChar}`;
        },
    );
}

/**
 * Return Social icon name
 * @param id social icon name
 * @returns IconNames
 */
export function getSocialIconName(id: string): IconNames | null {
    switch (id) {
        case 'github':
            return IconNames.github;
        case 'linkedin':
            return IconNames.linkedin;
        default:
            return null;
    }
}
