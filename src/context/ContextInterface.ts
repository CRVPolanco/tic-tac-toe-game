import { Game } from "../interfaces/Game";

type ThereIsWinner = {
  movements: GameSelections[];
  winner: Winner;
}

export interface ContextInterface {
  game: Game;
  winner: Winner;
  allRecords: Game[];
  gameHasWinner: ({ movements, winner }: ThereIsWinner) => void;
  userMakeMovement: (data: GameSelections) => void;
  machineMakeMovement: (data: GameSelections) => void;
  restoreGame: (game: Game) => void;
  handleWinner: (data: Winner) => void;
  handleReset: () => void;
  getUniqueRecord: (id: string) => Game;
  addNewRecord: (game: Game) => void;
  deleteRecord: (id: string) => void;
}
