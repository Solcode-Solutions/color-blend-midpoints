import ColorBlender from "./colorBlender";

interface IColor {
    r: number
    g: number
    b: number
}

/**
 * Helper method that takes hex string and converts it to the RGB values.
 * @param hex
 */
export function hexToRgb (hex: string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null
}

/**
 * Helper method for constructing hex from RGB values.
 * @param rgbColor
 */
export function rgbToHex (rgbColor: Array<number>) {
    let hex = ''
    for (let i = 0; i < 3; i++) {
        let piece = Math.round(rgbColor[i]).toString(16)
        if (piece.length < 2) {piece = '0' + piece}
        hex = hex + piece
    }
    hex = '#' + hex
    return hex.toUpperCase()
}

/**
 * Method that blends colors.
 */
export function blendColors (initialColor: string, targetColor: string, midpoints: number) {
    const colorBlender = new ColorBlender(initialColor, targetColor, midpoints)
    return colorBlender.getBlends(false)
}
