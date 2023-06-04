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
    }}>
      {children}
    </GameContext.Provider>
  )
};


