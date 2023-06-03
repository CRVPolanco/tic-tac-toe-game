export interface Game {
  map: GameSelections[];
  isFinalized: boolean;
  winnerCombination: GameSelections[];
  winner: Winner;
  turn: MovementsFrom;
}
