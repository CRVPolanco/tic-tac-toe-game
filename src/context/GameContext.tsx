import { createContext } from "react";
import { ContextInterface } from "./ContextInterface";
import { useGame } from "../hooks/useGame";

export const GameContext = createContext<ContextInterface>({} as ContextInterface);

type Props = { children: JSX.Element | JSX.Element[] };

export const GameContextProvider = ({ children }: Props) => {

  const {
    game,
    check,
    winner,
    userMakeMovement,
    machineMakeMovement,
    gameHasWinner,
    handleCheck,
    handleWinner,
    handleReset,
  } = useGame();

  return (
    <GameContext.Provider value={{
      game,
      check,
      winner,
      userMakeMovement,
      machineMakeMovement,
      gameHasWinner,
      handleCheck,
      handleWinner,
      handleReset,
    }}>
      {children}
    </GameContext.Provider>
  )
};


