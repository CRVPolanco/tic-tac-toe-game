import { useState, useEffect, useContext } from "react";
import { SquareTitle } from '../../components/SquareTitle/index';
import { GameContext } from "../../context/GameContext";
import { verifyMap } from "../../algorithm/verifyMap";

export const Game = (): JSX.Element => {

  const [error, setError] = useState<string>('');
  const {game, winner, gameHasWinner, handleReset, handleWinner, addNewRecord} = useContext(GameContext);
  const {map, isFinalized, turn} = game;

  const handleError = (data: string) => setError(data);

  useEffect(() => {
    const verify = verifyMap(map);

    if(typeof verify !== 'boolean'){
      gameHasWinner({ movements: verify.fields, winner: verify.winner });
      handleWinner(verify.winner);
      addNewRecord(game);
    }

  }, [turn]);

  return(
    <section className="flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center justify-center mb-4">
        {(winner === 'user' && !!isFinalized) && <p className="text-green-600">The user has won the match</p>}
        {(winner === 'machine' && !!isFinalized) && <p className="text-blue-600">The machine has won the match</p>}
        {(winner === 'draw' && !!isFinalized) && <p className="text-gray-600">Draw match</p>}
        {(winner !== 'nobody' && !!isFinalized) &&
          <button
            className="mt-2 background-none text-white border border-green-500 border-4 text-lg px-3 py-1 rounded-lg font-bold"
            onClick={handleReset}
          >Play again</button>
        }
        {error && <p className="text-red-600 underline">Select another title</p>}
      </div>
      <div className="grid grid-cols-3 border border-black">
        {map.map((val, index) => (
          <SquareTitle
            {...val}
            handleError={handleError}
            key={index}
          />
        ))}
      </div>
    </section>
  )
}
