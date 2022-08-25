import Board from "./Board.js";
import BoardConfig from "./interfaces/Board/BoardConfig";

const config: BoardConfig = {
  samples: 50,
  multiplicationFactor: 2,
};
const board = new Board();

board.setConfig(config);
board.draw();
