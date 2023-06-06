import { createContext } from "react";
import { ContextInterface } from "./ContextInterface";
import { useGame } from "../hooks/useGame";
import { useLocalStorage } from "../hooks/useGameLS";

export const GameContext = createContext<ContextInterface>({} as ContextInterface);

type Props = { children: JSX.Element | JSX.Element[] };

export const GameContextProvider = ({ children }: Props) => {

  const {
    allRecords,
    getUniqueRecord,
    addNewRecord,
    deleteRecord,
  } = useLocalStorage('game');

  const {
    game,
    winner,
    userMakeMovement,
    machineMakeMovement,
    restoreGame,
    gameHasWinner,
    handleWinner,
    handleReset,
  } = useGame();

  return (
    <GameContext.Provider value={{
      game,
      winner,
      allRecords,
      userMakeMovement,
      machineMakeMovement,
      gameHasWinner,
      restoreGame,
      handleWinner,
      handleReset,
      getUniqueRecord,
      addNewRecord,
      deleteRecord,
    }}>
      {children}
    </GameContext.Provider>
  )
};


