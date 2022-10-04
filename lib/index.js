"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blendColors = exports.rgbToHex = exports.hexToRgb = void 0;
var colorBlender_1 = require("./colorBlender");
/**
 * Helper method that takes hex string and converts it to the RGB values.
 * @param hex
 */
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
exports.hexToRgb = hexToRgb;
/**
 * Helper method for constructing hex from RGB values.
 * @param rgbColor
 */
function rgbToHex(rgbColor) {
    var hex = '';
    for (var i = 0; i < 3; i++) {
        var piece = Math.round(rgbColor[i]).toString(16);
        if (piece.length < 2) {
            piece = '0' + piece;
        }
        hex = hex + piece;
    }
    hex = '#' + hex;
    return hex.toUpperCase();
}
exports.rgbToHex = rgbToHex;
/**
 * Method that blends colors.
 */
function blendColors(initialColor, targetColor, midpoints) {
    var colorBlender = new colorBlender_1.default(initialColor, targetColor, midpoints);
    return colorBlender.getBlends(false);
}
exports.blendColors = blendColors;
