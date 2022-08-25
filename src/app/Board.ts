import BoardConfig from "./interfaces/Board/BoardConfig";
import {
  createCircleElement,
  getAngleFromIndex,
  getPositionFromAngle,
} from "./utils";

export default class Board {
  private config: BoardConfig = {
    samples: 10,
    multiplicationFactor: 2,
  };

  public draw() {
    const container = document.querySelector("svg g.samples");
    if (!container) {
      throw new Error("Container is null");
    }
    for (let i = 0; i < this.config.samples; i++) {
      const angle = getAngleFromIndex(i, this.config.samples);
      const circle = createCircleElement(getPositionFromAngle(angle));
      container.appendChild(circle);
    }
  }

  public setConfig(config: BoardConfig) {
    this.config = config;
  }
}
