interface ClassMap {
    [className: string]: boolean;
}

export type ClassType = string | ClassMap;

export type BreakpointSizeType = 'S' | 'M' | 'L' | 'XL';

export interface LinkModel {
    id?: string;
    href?: string;
    label?: string;
    accesibleLabel?: string;
    target?: string;
}
