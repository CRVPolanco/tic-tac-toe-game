import { useState, useReducer } from "react";
import { GameInitialState, GameReducer } from "../reducers/GameReducer";
import { optionsToSelect } from "../algorithm/optionsToSelect";

type ThereIsWinner = { movements: GameSelections[], winner: Winner };

export const useGame = () => {

  const [game, dispatch] = useReducer(GameReducer, GameInitialState);
  const [check, setCheck] = useState<boolean>(false);
  const [waiting, setWaiting] = useState<boolean>(false);
  const [winner, setWinner] = useState<Winner>('nobody');

  const { map } = game;

  const userMakeMovement = (square: GameSelections) =>
    dispatch({ type: 'USER_MAKE_MOVEMENT', payload: { data: square } });

  const machineMakeMovement = () => {
    setWaiting(true);

    const selection = optionsToSelect(map);

    const findIndex = map.findIndex((title) => title.field === selection);
    const square = map[findIndex];

    dispatch({ type: 'MACHINE_MAKE_MOVEMENT', payload: { data: square } });

    setWaiting(false);
  }

  const gameHasWinner = ({ movements, winner }: ThereIsWinner ) =>
    dispatch({ type: 'SET_WINNER', payload: { movements, winner } });

  const handleCheck = (val: boolean) => setCheck(val);

  const handleWinner = (data: Winner) => setWinner(data);

  return {
    game,
    check,
    winner,
    waiting,
    userMakeMovement,
    machineMakeMovement,
    gameHasWinner,
    handleCheck,
    handleWinner,
  }

};
