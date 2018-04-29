/**
 * Application entry point
 */

// Load application styles
import "styles/index.scss";
import p5 from "p5";
import dat from "dat.gui";
import Stats from "stats-js";

// ================================
// START YOUR APP HERE
// ================================

// P5.js experiment boilerplate

// plug in Stats;
var stats = new Stats();
stats.setMode(0);
document.body.appendChild(stats.domElement);

// plug in dat.GUI
window.onload = function() {
  var gui = new dat.GUI();
  var foo = { bar: "Hello World!" };
  gui.add(foo, "bar", 10, 1000);
};

// -----------------------------

const sketch = p5 => {
  // Variables scoped within p5
  const canvasWidth = p5.windowWidth;
  const canvasHeight = p5.windowHeight;
  // const d = new Star(500, 300, 4);

  // make library globally available
  window.p5 = p5;

  // Setup function
  // ======================================
  p5.setup = () => {
    let canvas = p5.createCanvas(canvasWidth, canvasHeight);
  };

  // Draw function
  // ======================================
  p5.draw = () => {
    p5.background("#111");
  };
};

new p5(sketch);

export default sketch;
