import { Point } from "./interfaces/Point";

const svgns = "http://www.w3.org/2000/svg";
const container = document.querySelector("svg g.samples");
const x0 = 50;
const y0 = 50;
const r0 = 45;
const r = String(1);
const samples = 10;

if (!container) {
  throw new Error("Container is null");
}

const getAngleFromIndex = (index: number, samples = 10): number =>
  (index * 2 * Math.PI) / samples;

const getPositionFromAngle = (angle: number): Point => {
  const x = x0 + r0 * Math.cos(angle);
  const y = y0 + r0 * Math.sin(angle);
  return { x, y };
};

const createCircleElement = ({ x, y }: Point): SVGCircleElement => {
  const circle = document.createElementNS(svgns, "circle");
  circle.setAttributeNS(null, "cx", String(x));
  circle.setAttributeNS(null, "cy", String(y));
  circle.setAttributeNS(null, "r", r);
  return circle;
};

for (let i = 0; i < samples; i++) {
  const angle = getAngleFromIndex(i);
  const circle = createCircleElement(getPositionFromAngle(angle));
  container.appendChild(circle);
}
