type MovementsFrom = 'user' | 'machine';

type PossibleSelections = 'user' | 'machine' | 'nobody';

type Winner = 'user' | 'machine' | 'nobody' | 'draw';

type GameSelections = {
  field: number,
  isSelected: boolean,
  selectedBy: PossibleSelections
};

type GameWinner = {
  winner: Winner,
  fields: GameSelection[],
}
