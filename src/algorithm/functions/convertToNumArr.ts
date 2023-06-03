const convertToNumArr = (data: GameSelections[]): void | number[][] => {

  if(data.length < 2) return;
  const resultant: number[][] = [];

  for(let i=0; i<data.length; i++){
    for(let j=0; j<data.length; j++){
      const arr: number[] = [];
      if(i !== j){
        arr.push(data[i].field, data[j].field);
      }
      resultant.push(arr);
    }
  }

  const unique = new Set(resultant);
  const res: number[][] = [...unique];

  return res;
}
