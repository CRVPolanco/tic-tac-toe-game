export const convertToNumArr = (data: GameSelections[]): boolean | number[][] => {

  if(data.length < 2) return false;

  const resultant: number[][] = [];

  for(let i=0; i<data.length; i++){
    for(let j=0; j<data.length; j++){
      const arr: number[] = [];
      if(i !== j){
        arr.push(data[i].field, data[j].field);
        resultant.push(arr.sort());
      }
    }
  }

  return resultant;
}
