"use strict";

const svgns = "http://www.w3.org/2000/svg";
const container = document.querySelector("svg g.samples");
const x0: number = 50;
const y0: number = 50;
const r0: number = 45;
const r: string = String(1);
const samples: number = 10;

if (!container) {
  throw new Error("Container is null");
}

const getAngleFromIndex = (index: number, samples = 10): number =>
  (index * 2 * Math.PI) / samples;

const getPositionFromAngle = (angle: number): { x: string; y: string } => {
  const x: string = String(x0 + r0 * Math.cos(angle));
  const y: string = String(y0 + r0 * Math.sin(angle));
  return { x, y };
};

const createCircleElement = (x: string, y: string) => {
  const circle = document.createElementNS(svgns, "circle");
  circle.setAttributeNS(null, "cx", x);
  circle.setAttributeNS(null, "cy", y);
  circle.setAttributeNS(null, "r", r);
  return circle;
};

for (let i = 0; i < samples; i++) {
  const angle = getAngleFromIndex(i);
  const { x, y } = getPositionFromAngle(angle);
  const circle = createCircleElement(x, y);
  container.appendChild(circle);
}
