import { possibleOptions } from './possibleOptions';

export const verifyMap = (map: GameSelections[]): boolean | GameWinner => {

  const moreThanFour = map.filter((f) => f.selectedBy === 'nobody').length;

  if(moreThanFour > 4) return false;

  for(let i=0; i<possibleOptions.length; i++){
    const userBooleanVerify: boolean[] = [];
    const machineBooleanVerify: boolean[] = [];

    possibleOptions[i].map((elem) => {
      const index = map.findIndex((val) => val.field === elem);

      if(map[index].selectedBy === 'user'){
        userBooleanVerify.push(true);
      }else{
        userBooleanVerify.push(false);
      }
      if(map[index].selectedBy === 'machine'){
        machineBooleanVerify.push(true);
      }else{
        machineBooleanVerify.push(false);
      }
    });

    if(userBooleanVerify.every((val) => val === true)){
      return {
        winner: 'user',
        fields: [...map.filter((val, index) => val.field === possibleOptions[i][index])]
      }
    }

    if(machineBooleanVerify.every((val) => val === true)){
      return {
        winner: 'machine',
        fields: [...map.filter((val, index) => val.field === possibleOptions[i][index])]
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
