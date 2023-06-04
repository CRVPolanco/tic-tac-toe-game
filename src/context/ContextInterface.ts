import { Game } from "../interfaces/Game";

type ThereIsWinner = {
  movements: GameSelections[];
  winner: Winner;
}

export interface ContextInterface {
  game: Game;
  check: boolean;
  winner: Winner;
  gameHasWinner: ({ movements, winner }: ThereIsWinner) => void;
  userMakeMovement: (data: GameSelections) => void;
  machineMakeMovement: (data: GameSelections) => void;
  handleCheck: (data: boolean) => void;
  handleWinner: (data: Winner) => void;
  handleReset: () => void;
}
