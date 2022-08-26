import Board from "./Board";
import BoardConfig from "./interfaces/Board/BoardConfig";

const config: BoardConfig = {
  samples: 250,
  multiplicationFactor: 5,
};
const board = new Board();

board.setConfig(config);
board.draw();
