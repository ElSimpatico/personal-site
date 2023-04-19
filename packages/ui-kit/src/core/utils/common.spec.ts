import { parseCamelCaseToDashCase } from './common';

describe('Common utils', () => {
    it('parseCamelCaseToDashCase returns dash case string', () => {
        expect(parseCamelCaseToDashCase('')).toEqual('');
        expect(parseCamelCaseToDashCase('camelCase')).toEqual('camel-case');
        expect(parseCamelCaseToDashCase('CamelCase')).toEqual('camel-case');
    });
});
