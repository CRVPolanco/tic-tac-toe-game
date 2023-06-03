import { useEffect, useContext } from "react"
import { GameContext } from "../../context/GameContext"
import { Circle } from "../../svg/Circle";
import { XMark } from "../../svg/XMark";

export const SquareTitle = ({ isSelected, selectedBy, field }: GameSelections): JSX.Element => {

  const { game, winner, check, waiting, userMakeMovement, machineMakeMovement } = useContext(GameContext);
  const { turn } = game;

  const movement = { isSelected, selectedBy, field };

  const handleSelect = () => {

    if(winner === 'user' || winner === 'machine' || winner === 'draw') return;
    if(check) return;
    if(waiting) return;

    console.log(field);

    userMakeMovement(movement);
  };

  useEffect(() => {
    if(turn === 'machine'){
      setTimeout(() => {
        machineMakeMovement();
      }, 2000)
    }
  }, [turn]);

  return (
    <section
      className="flex items-center justify-center w-24 h-24 border border-white cursor-pointer text-white text-3xl"
      onClick={handleSelect}
    >
      {field}
      {selectedBy === 'machine' && <Circle />}
      {selectedBy === 'user' && <XMark />}
    </section>
  )
}
