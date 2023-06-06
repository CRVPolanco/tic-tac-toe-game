import { possibleOptions } from './possibleOptions';

// With this function we will verify if on the map is a possible selection.

export const verifyMap = (map: GameSelections[]): boolean | GameWinner => {

  // we should filter first to know if there are more than 5 titles selected on the map
  const moreThanFour = map.filter((f) => f.selectedBy === 'nobody').length;

  if(moreThanFour > 4) return false;

  for(let i=0; i<possibleOptions.length; i++){
    const userBooleanVerify: boolean[] = [];
    const machineBooleanVerify: boolean[] = [];

    const userSelect: GameSelections[] = [];
    const machineSelect: GameSelections[] = [];

    possibleOptions[i].map((elem) => {
      const index = map.findIndex((val) => val.field === elem);

      if(map[index].selectedBy === 'user'){
        userBooleanVerify.push(true);
        userSelect.push(map[index]);
      }else{
        userBooleanVerify.push(false);
      }
      if(map[index].selectedBy === 'machine'){
        machineBooleanVerify.push(true);
        machineSelect.push(map[index]);
      }else{
        machineBooleanVerify.push(false);
      }
    });

    if(userBooleanVerify.every((val) => val === true)){
      return {
        winner: 'user',
        fields: [...userSelect],
      }
    }

    if(machineBooleanVerify.every((val) => val === true)){
      return {
        winner: 'machine',
        fields: [...machineSelect],
      }
    }
  }

  if(moreThanFour === 0) {
    return {
      winner: 'draw',
      fields: [],
    }
  }

  return false;
};
