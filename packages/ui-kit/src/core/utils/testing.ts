export function resizeWindow(width: number, height: number): void {
    window.innerWidth = width;
    window.innerHeight = height;
    window.dispatchEvent(new Event('resize'));
}
