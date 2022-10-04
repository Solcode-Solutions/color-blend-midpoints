import {hexToRgb, rgbToHex} from "./index"

/**
 * Color blender class that handles the color blending.
 */
export default class ColorBlender {
    private initialColor
    private targetColor
    private midpointsMultipliers

    constructor (initialColor: string, targetColor: string, private midpoints: number) {
        this.initialColor = hexToRgb(initialColor)
        this.targetColor = hexToRgb(targetColor)

        if (this.initialColor !== null && this.targetColor !== null) {
            const midpointsThreshhold = midpoints + 1
            this.midpointsMultipliers = {
                r: (this.targetColor.r - this.initialColor.r) / midpointsThreshhold,
                g: (this.targetColor.g- this.initialColor.g) / midpointsThreshhold,
                b: (this.targetColor.b - this.initialColor.b) / midpointsThreshhold
            }
        } else {
            console.error('Initial color or target color was not specified! Specify them in hex format.')
        }
    }

    getBlends (includeBaseColors = true) {
        const blends = []
        const hexBlends: Array<string> = []

        blends[0] = this.initialColor
        blends[this.midpoints + 1] = this.targetColor

        // var r = (ends[0].r + (step[0] * i));
        if (this.midpointsMultipliers !== undefined && this.initialColor !== null) {
            for (let i = includeBaseColors ? 1 : 0; i <= (this.midpoints + (includeBaseColors ? 1 : 0)); i++) {
                blends[i] = {
                    r: ((this.midpointsMultipliers.r * i) + this.initialColor.r),
                    g: ((this.midpointsMultipliers.g * i) + this.initialColor.g),
                    b: ((this.midpointsMultipliers.b * i) + this.initialColor.b)
                }
            }
        } else {
            console.error('Initial color or target color was not specified! Specify them in hex format.')
        }

        blends.forEach((blend, index) => {
            hexBlends[index] = blend !== null ? rgbToHex([blend.r, blend.g, blend.b]) : ''
        })

        return hexBlends
    }
}