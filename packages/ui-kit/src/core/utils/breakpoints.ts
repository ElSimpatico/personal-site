import { BreakpointSizeType } from '@core/types';

export const BreakpointSize: Record<BreakpointSizeType, number> = {
    S: 360,
    M: 764,
    L: 1024,
    XL: 1440,
};

export function getBreakpoint(width: number): BreakpointSizeType {
    if (width >= BreakpointSize.XL) {
        return 'XL';
    }
    if (width >= BreakpointSize.L) {
        return 'L';
    }
    if (width >= BreakpointSize.M) {
        return 'M';
    }

    return 'S';
}
