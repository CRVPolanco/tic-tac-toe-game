import { possibleOptions } from "../possibleOptions";

type Data = {
  map: GameSelections[];
  from: PossibleSelections;
}

export const detect = ({ map, from }: Data): number | null => {

  for(let i=0; i<map.length; i++){

    for(let j=0; j<possibleOptions.length; j++){

      const vals: PossibleSelections[] = [];
      const arrayGameSelections: GameSelections[] = [];

      possibleOptions[j].map((val) => {
        const index = map.findIndex((d) => d.field === val);
        vals.push(map[index].selectedBy);
        arrayGameSelections.push(map[index]);
      });

      let sameFromCounter = 0;
      let nobodyCounter = 0;

      arrayGameSelections.map((values) => {
        if(values.selectedBy === from) {
          sameFromCounter += 1;
        }
        if(values.selectedBy === 'nobody') {
          nobodyCounter += 1;
        }
      });
      if(sameFromCounter === 2 && nobodyCounter === 1) {
        const nobody = arrayGameSelections.findIndex((val) => val.selectedBy === 'nobody');
        return arrayGameSelections[nobody].field;
      }
    }
  }

  return null;
}
