/**
 * Supresses the `requestAnimationFrame` warning
 */
global.requestAnimationFrame = function(callback) {
    setTimeout(callback, 0);
};