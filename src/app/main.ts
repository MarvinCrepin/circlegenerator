import Board from "./Board";
import BoardConfig from "./interfaces/Board/BoardConfig";

const config: BoardConfig = {
  samples: 10,
  multiplicationFactor: 2,
};
const board = new Board();

board.setConfig(config);
board.draw();
