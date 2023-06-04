import { useState, useReducer } from "react";
import { GameInitialState, GameReducer } from "../reducers/GameReducer";

type ThereIsWinner = { movements: GameSelections[], winner: Winner };

export const useGame = () => {

  const [game, dispatch] = useReducer(GameReducer, GameInitialState);
  const [check, setCheck] = useState<boolean>(false);
  const [winner, setWinner] = useState<Winner>('nobody');

  const userMakeMovement = (square: GameSelections) =>
    dispatch({ type: 'USER_MAKE_MOVEMENT', payload: { data: square }});

  const machineMakeMovement = (square: GameSelections) =>
    dispatch({ type: 'MACHINE_MAKE_MOVEMENT', payload: { data: square }});

  const gameHasWinner = ({ movements, winner }: ThereIsWinner ) =>
    dispatch({ type: 'SET_WINNER', payload: { movements, winner }});

  const handleReset = () => dispatch({ type: 'RESET' });

  const handleCheck = (val: boolean) => setCheck(val);

  const handleWinner = (data: Winner) => setWinner(data);


  return {
    game,
    check,
    winner,
    userMakeMovement,
    machineMakeMovement,
    handleReset,
    gameHasWinner,
    handleCheck,
    handleWinner,

  }

};
