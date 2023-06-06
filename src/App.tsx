import { useState } from "react";
import { GameContextProvider } from "./context/GameContext";
import { Game } from "./containers/Game";
import { Layout } from "./components/Layout";
import { Header } from "./components/Header";
import { History } from "./containers/History";

export const App = (): JSX.Element => {

  const [history, setHistory] = useState<boolean>(false);

  const handleOpenHistory = () => setHistory(!history);

  return (
    <GameContextProvider>
      <Layout>
        {history as true && <History event={handleOpenHistory}/>}
        <Header event={handleOpenHistory}/>
        <Game />
      </Layout>
    </GameContextProvider>

  )
}
