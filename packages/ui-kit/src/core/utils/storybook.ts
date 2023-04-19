import { parseCamelCaseToDashCase } from './common';

function parseArgstoAttributesHTML(args: any): string {
    return Object.keys(args)
        .map((key: string) => {
            const value = args[key];
            return value
                ? `${parseCamelCaseToDashCase(key)}='${args[key]}'`
                : null;
        })
        .filter(Boolean)
        .join('\n');
}

export function printStoryTemplate(
    tag: string,
    args?: any,
    children?: string,
): string {
    const attributes = parseArgstoAttributesHTML(args);
    return `<${tag}${attributes ? ` ${attributes}` : ''}>${
        children || ''
    }</${tag}>`;
}

export function createStyles(id: string, cssRules: string): void {
    let style = document.querySelector(`#${id}`);
    if (!style) {
        style = document.createElement('style');
        style.id = id;
        style.textContent = cssRules;
        document.head.appendChild(style);
    }
}

export function jsonStringifyFormatted(json: any): string {
    return JSON.stringify(json, null, 4);
}
