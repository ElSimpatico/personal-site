import { getBreakpoint } from './breakpoints';

describe('Breakpints utils', () => {
    it('getBreakpoint returns S', () => {
        expect(getBreakpoint(359)).toEqual('S');
        expect(getBreakpoint(360)).toEqual('S');
        expect(getBreakpoint(763)).toEqual('S');
    });
    it('getBreakpoint returns M', () => {
        expect(getBreakpoint(764)).toEqual('M');
        expect(getBreakpoint(1023)).toEqual('M');
    });
    it('getBreakpoint returns L', () => {
        expect(getBreakpoint(1024)).toEqual('L');
        expect(getBreakpoint(1439)).toEqual('L');
    });
    it('getBreakpoint returns XL', () => {
        expect(getBreakpoint(1440)).toEqual('XL');
        expect(getBreakpoint(1441)).toEqual('XL');
    });
});
