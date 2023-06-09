import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import { ClockIcon } from '../../svg/ClockIcon';

type Props = { event: () => void };

export const Header = ({ event }: Props): JSX.Element => {

  const { game } = useContext(GameContext);
  const { turn, winner } = game;

  return (
    <header className="w-full flex flex-col p-4">
      <nav className="w-full flex flex-col">
        <div className="flex flex-row justify-between">
          <h2 className="text-white font-bold italic text-xl">Tic Tac Toe Game</h2>
          <figure
            className='text-white w-8 h-8'
            title='History'
            onClick={event}
          >
            <ClockIcon />
          </figure>
        </div>
        <div className="w-full text-center mt-8">
          {winner === 'nobody' && <h2 className="text-white text-lg">It's {turn} turn</h2>}
        </div>
      </nav>
    </header>
  )
};


