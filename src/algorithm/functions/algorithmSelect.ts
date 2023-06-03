import { possibleOptions } from "../possibleOptions";

export const algorithmSelect = (data: number[][], map: GameSelections[]): number | null => {
  let ifValExists: number | null = null;

  for(let i=0; i<data.length; i++){

    const firstPosDouble = data[i];
    for(let j=0; j<possibleOptions.length; j++){

      const firstPosPossible = possibleOptions[j];

      for(let k=0; k<9; k++){
        const copyFirstPosDouble: number[] = [...firstPosDouble, k + 1].sort();
        const booleanVerify: boolean[] = [];

        copyFirstPosDouble.map((v: number, ind: number) => {
          if(v === firstPosPossible[ind] && map[map.findIndex((val) => val.field === v)].selectedBy === 'nobody'){
            booleanVerify.push(true);
          }else{
            booleanVerify.push(false);
          }
        });

        ifValExists = booleanVerify.every((elem) => elem === true) ? (k + 1) : null;

        if(ifValExists !== null) {
          return ifValExists;
        }
      }
    }
  }

  return ifValExists;
}
