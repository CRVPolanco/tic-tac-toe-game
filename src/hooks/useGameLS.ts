import { Game } from "../interfaces/Game";

export const useLocalStorage = (nameToSave: string) => {

  if(!localStorage.getItem(nameToSave))
    localStorage.setItem(nameToSave, JSON.stringify([]));

  const allRecords: Game[] = [...JSON.parse(localStorage.getItem(nameToSave) as string)];

  const getUniqueRecord = (id: string): Game => {

    const rawData = localStorage.getItem(nameToSave);
    const parsedData: Game[] = [...JSON.parse(rawData as string)];

    const index = parsedData.findIndex((val) => val.id === id);
    return parsedData[index];
  };

  const addNewRecord = (game: Game): void => {

    const rawData = localStorage.getItem(nameToSave);
    const parsedData: Game[] = [...JSON.parse(rawData as string)];

    const newData: Game[] = [...parsedData, game];
    const someEqual = parsedData.some((val) => val.id === game.id);

    if(!someEqual){
      localStorage.setItem(nameToSave, JSON.stringify(newData));
    }

  };

  const deleteRecord = (id: string): void => {
    const rawData = localStorage.getItem(nameToSave);
    const parsedData: Game[] = [...JSON.parse(rawData as string)];

    const data = parsedData.filter((val) => val.id !== id);
    localStorage.setItem(nameToSave, JSON.stringify(data));

    return;
  };

  return {
    allRecords,
    getUniqueRecord,
    addNewRecord,
    deleteRecord,
  }
};
