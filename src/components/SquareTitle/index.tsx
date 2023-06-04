import { useContext } from "react"
import { GameContext } from "../../context/GameContext"
import { Circle } from "../../svg/Circle";
import { XMark } from "../../svg/XMark";
import { machineSelect } from "../../algorithm/machineSelect";

type Props = { handleError: (data: string) => void } & GameSelections;

export const SquareTitle = ({ isSelected, selectedBy, field, handleError }: Props): JSX.Element => {

  const { game, winner, check, userMakeMovement, machineMakeMovement } = useContext(GameContext);
  const { map, isFinalized, turn } = game;

  const movement = { isSelected, selectedBy, field };

  const handleSelect = () => {

    if(winner !== 'nobody' && !!isFinalized) return;

    if(selectedBy !== 'nobody') return handleError('Select another title');

    handleError('');

    if(turn === 'user'){
      userMakeMovement(movement);
    }

    if(check) return;

    setTimeout(() => {
      const dt = machineSelect(map);
      const findMovement = map.findIndex((val) => val.field === dt);

      machineMakeMovement(map[findMovement]);
    }, 1000)

  };

  return (
    <section
      className="flex items-center justify-center w-24 h-24 border border-white cursor-pointer text-white text-3xl"
      onClick={handleSelect}
    >
      {selectedBy === 'nobody' && field}
      {selectedBy === 'machine' && <Circle />}
      {selectedBy === 'user' && <XMark />}
    </section>
  )
}
