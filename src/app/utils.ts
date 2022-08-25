import Point from "./interfaces/Point";

export const getAngleFromIndex = (index: number, samples = 10): number =>
  (index * 2 * Math.PI) / samples;

const x0 = 50;
const y0 = 50;
const r0 = 45;
const svgns = "http://www.w3.org/2000/svg";
const r = 1;

export const getPositionFromAngle = (angle: number): Point => {
  const x = x0 + r0 * Math.cos(angle);
  const y = y0 + r0 * Math.sin(angle);
  return { x, y };
};

export const createCircleElement = ({ x, y }: Point): SVGCircleElement => {
  const circle = document.createElementNS(svgns, "circle");
  setAttributeNbr(circle, "cx", x);
  setAttributeNbr(circle, "cy", y);
  setAttributeNbr(circle, "r", r);
  return circle;
};

export const createLineElement = (
  firstPoint: Point,
  secondPoint: Point
): SVGLineElement => {
  const line = document.createElementNS(svgns, "line");
  setAttributeNbr(line, "x1", firstPoint.x);
  setAttributeNbr(line, "y1", firstPoint.y);
  setAttributeNbr(line, "x2", secondPoint.x);
  setAttributeNbr(line, "y2", secondPoint.y);

  return line;
};

export const querySelector = (cssSelector: string) => {
  const container = document.querySelector(cssSelector);
  if (!container) {
    throw new Error("Container is null");
  }
  return container;
};

export const setAttributeNbr = (
  element: Element,
  key: string,
  value: number
) => {
  return element.setAttributeNS(null, key, String(value));
};

export const drawLine = (firstPoint: Point, secondPoint: Point) => {
  const container = querySelector("svg g.lines");
  container.appendChild(createLineElement(firstPoint, secondPoint));
  return container;
};
