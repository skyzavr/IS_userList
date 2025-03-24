import { dataDesc } from '@shared/model/type';

export const isDataTheSame = (initData: dataDesc, changedData: dataDesc) => {
  const initDataValues = Object.values(initData);
  const changedDataValues = Object.values(changedData);

  for (let i = 0; i < initDataValues.length; i++) {
    const initVal = initDataValues[i].toLowerCase().trim();
    const changedVal = changedDataValues[i].toLowerCase().trim();
    if (initVal !== changedVal) return false;
  }
  return true;
};
