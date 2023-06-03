export const machineSelect = (map: GameSelections[]) => {

  const someMachine = map.some((val) => val.selectedBy === 'machine');
  const someUser = map.some((val) => val.selectedBy === 'user');

  console.log(someMachine);
  console.log(someUser);

};
