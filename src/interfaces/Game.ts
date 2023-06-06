export interface Game {
  id: string;
  map: GameSelections[];
  isFinalized: boolean;
  winnerCombination: GameSelections[];
  winner: Winner;
  turn: MovementsFrom;
}
