import { useContext, useEffect } from 'react';
import { GameContext } from '../../context/GameContext';
import { Game } from '../../interfaces/Game';
import { Circle } from '../../svg/Circle';
import { XMark } from '../../svg/XMark';

type Props = { handleClose: () => void; } & Game

export const HistoryGame = ({ id, map, winner, winnerCombination, isFinalized, turn, handleClose }: Props): JSX.Element => {

  const { restoreGame, deleteRecord } = useContext(GameContext);

  const event = () => {
    restoreGame({ id, map, winner, winnerCombination, isFinalized, turn });
    handleClose();
  };

  return (
    <section className='flex justify-between'>
      <div className="flex flex-col items-center gap-x-4 cursor-pointer" title='View Game' onClick={event}>
        <div className="w-16 grid grid-cols-3 border border-black">
          {map.map((vals, index) => (
            <section className="flex items-center justify-center w-5 h-5 border border-white text-white text-sm" key={`${index}-${vals.selectedBy}`}>
              {vals.selectedBy === 'nobody' && vals.field}
              {vals.selectedBy === 'machine' && <Circle width={4} height={4} />}
              {vals.selectedBy === 'user' && <XMark width={4} height={4} />}
            </section>
          ))}
        </div>
        <div className="flex flex-col justify-center text-center">
          <p>Winner: {winner}</p>
          <p>Movements winner: {
            winnerCombination.length ?
            winnerCombination.map((val) => ( `${val.field} ` )) :
            'null'
          }</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start">
        <figure className='w-6 h-6 cursor-pointer' onClick={() => deleteRecord(id)}>
          <XMark width={6} height={6}/>
        </figure>
      </div>
    </section>
  )
}
