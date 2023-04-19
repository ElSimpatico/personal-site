import {
    printStoryTemplate,
    createStyles,
    jsonStringifyFormatted,
} from './storybook';

describe('Storybook utils', () => {
    it('printStoryTemplate return snippet code with attributes', () => {
        expect(printStoryTemplate('ui-component', { myProp: 'hello' })).toEqual(
            "<ui-component my-prop='hello'></ui-component>",
        );
    });
    it('printStoryTemplate return snippet code without attributes', () => {
        expect(printStoryTemplate('ui-component', {})).toEqual(
            '<ui-component></ui-component>',
        );
    });
    it('createStyles should append style tag in head of document', () => {
        createStyles('test-styles', `.myclass:{color: text;}`);
        const styleSheet = document.querySelector(
            'head style[id="test-styles"]',
        );
        expect(styleSheet).toBeTruthy();
    });
    it('jsonStringifyFormatted should return string with lenght', () => {
        const object: any = {
            propA: 'A',
            propB: 'B',
        };

        const jsonString = jsonStringifyFormatted(object);
        expect(jsonString.length).toBeGreaterThanOrEqual(0);
    });
});
