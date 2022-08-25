import BoardConfig from "./interfaces/Board/BoardConfig";
import Point from "./interfaces/Point";
import {
  createCircleElement,
  drawLine,
  getAngleFromIndex,
  getPositionFromAngle,
  querySelector,
} from "./utils.js";

export default class Board {
  private config: BoardConfig = {
    samples: 50,
    multiplicationFactor: 2,
  };

  public draw() {
    this.#drawCircles();
    this.#drawLines();
  }

  public setConfig(config: BoardConfig) {
    this.config = config;
  }

  #drawCircles() {
    const container = querySelector("svg g.samples");
    for (let i = 0; i < this.config.samples; i++) {
      const angle = getAngleFromIndex(i, this.config.samples);
      const circle = createCircleElement(getPositionFromAngle(angle));
      container.appendChild(circle);
    }
  }
  #drawLines() {
    for (let i = 0; i < this.config.samples; i++) {
      this.#drawLine(i);
    }
  }

  #drawLine(index: number) {
    const firstAngle = getAngleFromIndex(index, this.config.samples);
    const secondAngle = getAngleFromIndex(
      this.config.multiplicationFactor * index,
      this.config.samples
    );
    const firstPoint: Point = getPositionFromAngle(firstAngle);
    const secondPoint: Point = getPositionFromAngle(secondAngle);
    drawLine(firstPoint, secondPoint);
  }
}
