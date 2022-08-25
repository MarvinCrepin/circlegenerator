import Point from "./interfaces/Point";

export const getAngleFromIndex = (index: number, samples = 10): number =>
  (index * 2 * Math.PI) / samples;

const x0 = 50;
const y0 = 50;
const r0 = 45;
const svgns = "http://www.w3.org/2000/svg";
const r = String(1);

export const getPositionFromAngle = (angle: number): Point => {
  const x = x0 + r0 * Math.cos(angle);
  const y = y0 + r0 * Math.sin(angle);
  return { x, y };
};

export const createCircleElement = ({ x, y }: Point): SVGCircleElement => {
  const circle = document.createElementNS(svgns, "circle");
  circle.setAttributeNS(null, "cx", String(x));
  circle.setAttributeNS(null, "cy", String(y));
  circle.setAttributeNS(null, "r", r);
  return circle;
};
