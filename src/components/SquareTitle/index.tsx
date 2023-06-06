import { useContext } from "react"
import { GameContext } from "../../context/GameContext"
import { machineSelect } from "../../algorithm/machineSelect";
import { Circle } from "../../svg/Circle";
import { XMark } from "../../svg/XMark";

type Props = { handleError: (data: string) => void } & GameSelections;

export const SquareTitle = ({ isSelected, selectedBy, field, handleError }: Props): JSX.Element => {

  const { game, winner, userMakeMovement, machineMakeMovement } = useContext(GameContext);
  const { map, isFinalized, turn } = game;

  const handleSelect = () => {

    if(turn === 'machine') return;
    if(winner !== 'nobody' && !!isFinalized) return;
    if(selectedBy !== 'nobody') return handleError('Select another title');

    handleError('');

    if(turn === 'user'){
      userMakeMovement({ isSelected, selectedBy, field });
    }
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
      {selectedBy === 'machine' && <Circle width={12} height={12} />}
      {selectedBy === 'user' && <XMark width={12} height={12} />}
    </section>
  )
}
