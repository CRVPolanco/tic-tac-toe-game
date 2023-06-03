import { Game } from "./containers/Game";
import { Layout } from "./components/Layout";
import { GameContextProvider } from "./context/GameContext";
import { Header } from "./components/Header";

export const App = (): JSX.Element => {

  return (
    <GameContextProvider>
      <Layout>
        <Header />
        <Game/>
      </Layout>
    </GameContextProvider>

  )
}
