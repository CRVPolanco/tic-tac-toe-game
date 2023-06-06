import { useState, useReducer } from "react";
import { GameInitialState, GameReducer } from "../reducers/GameReducer";
import { Game } from "../interfaces/Game";

type ThereIsWinner = { movements: GameSelections[], winner: Winner };

export const useGame = () => {

  const [game, dispatch] = useReducer(GameReducer, GameInitialState);
  const [winner, setWinner] = useState<Winner>('nobody');

  const userMakeMovement = (square: GameSelections) =>
    dispatch({ type: 'USER_MAKE_MOVEMENT', payload: { data: square }});

  const machineMakeMovement = (square: GameSelections) =>
    dispatch({ type: 'MACHINE_MAKE_MOVEMENT', payload: { data: square }});

  const gameHasWinner = ({ movements, winner }: ThereIsWinner ) =>
    dispatch({ type: 'SET_WINNER', payload: { movements, winner }});

  const restoreGame = (game: Game) =>
    dispatch({ type: 'SET_GAME_FROM_BACKUP', payload: game });

  const handleReset = () => dispatch({ type: 'RESET' });

  const handleWinner = (data: Winner) => setWinner(data);


  return {
    game,
    winner,
    userMakeMovement,
    machineMakeMovement,
    handleReset,
    restoreGame,
    gameHasWinner,
    handleWinner,
  }

};
