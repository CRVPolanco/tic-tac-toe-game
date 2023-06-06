import { useContext, useEffect, useState } from 'react';
import { GameContext } from '../../context/GameContext';
import { XMark } from '../../svg/XMark';
import { HistoryGame } from '../../components/HistoryGame';
import { Game } from '../../interfaces/Game';

type Props = { event: () => void }

export const History = ({ event }: Props): JSX.Element => {

  const { allRecords, game } = useContext(GameContext);
  const { map } = game;

  const [records, setRecords] = useState<Game[]>([]);

  useEffect(() => {
    setRecords(allRecords);
  }, [allRecords]);

  return (
    <aside className="absolute flex flex-col w-3/6 h-screen right-0 top-0 p-4 border border-r-transparent border-t-transparent border-b-transparent shadow-2xl z-10 bg-stone-900 text-white">
      <div className="flex justify-between">
        <h2>History of games</h2>
        <figure className='w-6 h-6 cursor-pointer' onClick={event}>
          <XMark width={6} height={6} />
        </figure>
      </div>
      <div className="border mt-2"></div>
      <div className="flex flex-col gap-y-4 mt-4">
        {records.map((game) => (
          <HistoryGame {...game} key={game.id} handleClose={event} />
        ))}
        {records.length < 1 && 'No games yet.'}
      </div>

    </aside>
  )
};
