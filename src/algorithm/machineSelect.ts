import { detect } from './functions/algorithmSelect';

export const machineSelect = (map: GameSelections[]): number => {
  const someMachine = map.some((val) => val.selectedBy === 'machine');
  const someUser = map.some((val) => val.selectedBy === 'user');

  if(!someMachine) {
    const filtered = map.filter((val) => val.selectedBy === 'nobody');
    const randomNumber = Math.round(Math.random() * (filtered.length - 1));
    const num = filtered[randomNumber].field;

    console.log(filtered, num);
    return num;
  }

  if(someMachine && someUser){
    const selectionMachine = detect({ map, from: 'machine' });
    if(selectionMachine !== null) return selectionMachine;

    const selectionUser = detect({ map, from: 'user' });
    if(selectionUser !== null) return selectionUser;
  }

  const noCoincidences = map.filter((val) => val.selectedBy === 'nobody');
  return noCoincidences[Math.round(Math.random() * (noCoincidences.length - 1))].field;
};
