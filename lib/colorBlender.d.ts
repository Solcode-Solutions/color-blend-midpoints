/**
 * Color blender class that handles the color blending.
 */
export default class ColorBlender {
    private midpoints;
    private initialColor;
    private targetColor;
    private midpointsMultipliers;
    constructor(initialColor: string, targetColor: string, midpoints: number);
    getBlends(includeBaseColors?: boolean): string[];
}
