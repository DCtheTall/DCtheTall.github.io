"use strict";
var Raytracer_1 = require("./Raytracer");
function main() {
    var canvas;
    var raytracer;
    canvas = document.createElement("canvas");
    canvas.width = 700;
    canvas.height = 500;
    document.getElementById('container').appendChild(canvas);
    raytracer = new Raytracer_1.default(canvas);
    raytracer.setLookAt(0, 0, 10, 0, 0, 0);
    setTimeout(function () { raytracer.render(); }, 100);
}
window.onload = function (event) { return main(); };
//# sourceMappingURL=main.js.map