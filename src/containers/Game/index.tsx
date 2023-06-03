import { useEffect, useContext } from "react";
import { SquareTitle } from '../../components/SquareTitle/index';
import { GameContext } from "../../context/GameContext";

export const Game = (): JSX.Element => {

  const { game, check, handleCheck, gameHasWinner, handleWinner } = useContext(GameContext);
  const { map, turn } = game;

  // useEffect(() => {
  //   handleCheck(true);

  //   const verifyMap = verifyIfWinner(map);

  //   if(verifyMap !== false) {

  //     handleWinner(verifyMap.winner);
  //     handleCheck(false);

  //     gameHasWinner({ movements: verifyMap.fields, winner: verifyMap.winner });
  //   }

  //   handleCheck(false);
  // }, []);

  return(
    <section className="flex flex-col items-center justify-center ">
      <div className="mt-4">
        {(check && turn === 'machine') && <div></div>}
      </div>
      <div className="grid grid-cols-3 border border-black">
        {map.map((val, index) => (
          <SquareTitle
            isSelected={val.isSelected}
            selectedBy={val.selectedBy}
            field={val.field}
            key={index}
          />
        ))}
      </div>
    </section>
  )
}
