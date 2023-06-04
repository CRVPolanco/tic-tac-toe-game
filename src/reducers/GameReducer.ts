import { Game } from "../interfaces/Game";

export const GameInitialState: Game = {
  map: [
    { field: 1, selectedBy: 'nobody', isSelected: false },
    { field: 2, selectedBy: 'nobody', isSelected: false },
    { field: 3, selectedBy: 'nobody', isSelected: false },
    { field: 4, selectedBy: 'nobody', isSelected: false },
    { field: 5, selectedBy: 'nobody', isSelected: false },
    { field: 6, selectedBy: 'nobody', isSelected: false },
    { field: 7, selectedBy: 'nobody', isSelected: false },
    { field: 8, selectedBy: 'nobody', isSelected: false },
    { field: 9, selectedBy: 'nobody', isSelected: false },
  ],
  isFinalized: false,
  winnerCombination: [],
  winner: 'nobody',
  turn: 'user',
};

type GameReducerActions = |
{ type: 'USER_MAKE_MOVEMENT', payload: { data: GameSelections }} |
{ type: 'MACHINE_MAKE_MOVEMENT', payload: { data: GameSelections }} |
{ type: 'SET_WINNER', payload: { movements: GameSelections[], winner: Winner }};

export const GameReducer = (state: typeof GameInitialState, action: GameReducerActions ): Game => {

  const changeOwner = (data: GameSelections, movementFrom: MovementsFrom): GameSelections[] => {
    if(state.winner !== 'nobody') return state.map;

    const findIndex = state.map.findIndex((val) => val.field === data.field);
    const copyObject: GameSelections = { ...data, isSelected: true, selectedBy: movementFrom };

    state.map.splice(findIndex, 1, { ...copyObject });
    return state.map;
  }

  switch(action.type){

    case 'USER_MAKE_MOVEMENT':

      return {
        ...state,
        map: [...changeOwner(action.payload.data, 'user') ],
        turn: 'machine',
      };

    case 'MACHINE_MAKE_MOVEMENT':

      return {
        ...state,
        map: [...changeOwner(action.payload.data, 'machine')],
        turn: 'user',
      }

    case 'SET_WINNER':

      return {
        ...state,
        winner: action.payload.winner,
        winnerCombination: [...action.payload.movements],
      }

    default:
      return state;
  }
}
