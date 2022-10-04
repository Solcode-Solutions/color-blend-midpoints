"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
/**
 * Color blender class that handles the color blending.
 */
var ColorBlender = /** @class */ (function () {
    function ColorBlender(initialColor, targetColor, midpoints) {
        this.midpoints = midpoints;
        this.initialColor = (0, index_1.hexToRgb)(initialColor);
        this.targetColor = (0, index_1.hexToRgb)(targetColor);
        if (this.initialColor !== null && this.targetColor !== null) {
            var midpointsThreshhold = midpoints + 1;
            this.midpointsMultipliers = {
                r: (this.targetColor.r - this.initialColor.r) / midpointsThreshhold,
                g: (this.targetColor.g - this.initialColor.g) / midpointsThreshhold,
                b: (this.targetColor.b - this.initialColor.b) / midpointsThreshhold
            };
        }
        else {
            console.error('Initial color or target color was not specified! Specify them in hex format.');
        }
    }
    ColorBlender.prototype.getBlends = function (includeBaseColors) {
        if (includeBaseColors === void 0) { includeBaseColors = true; }
        var blends = [];
        var hexBlends = [];
        blends[0] = this.initialColor;
        blends[this.midpoints + 1] = this.targetColor;
        // var r = (ends[0].r + (step[0] * i));
        if (this.midpointsMultipliers !== undefined && this.initialColor !== null) {
            for (var i = includeBaseColors ? 1 : 0; i <= (this.midpoints + (includeBaseColors ? 1 : 0)); i++) {
                blends[i] = {
                    r: ((this.midpointsMultipliers.r * i) + this.initialColor.r),
                    g: ((this.midpointsMultipliers.g * i) + this.initialColor.g),
                    b: ((this.midpointsMultipliers.b * i) + this.initialColor.b)
                };
            }
        }
        else {
            console.error('Initial color or target color was not specified! Specify them in hex format.');
        }
        blends.forEach(function (blend, index) {
            hexBlends[index] = blend !== null ? (0, index_1.rgbToHex)([blend.r, blend.g, blend.b]) : '';
        });
        return hexBlends;
    };
    return ColorBlender;
}());
exports.default = ColorBlender;
