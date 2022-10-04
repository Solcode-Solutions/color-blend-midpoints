/**
 * Helper method that takes hex string and converts it to the RGB values.
 * @param hex
 */
export declare function hexToRgb(hex: string): {
    r: number;
    g: number;
    b: number;
} | null;
/**
 * Helper method for constructing hex from RGB values.
 * @param rgbColor
 */
export declare function rgbToHex(rgbColor: Array<number>): string;
/**
 * Method that blends colors.
 */
export declare function blendColors(initialColor: string, targetColor: string, midpoints: number): string[];
