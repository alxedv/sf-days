import { atomWithStorage } from "jotai/utils";

export interface itemsCheckProp {
  itemsChecked: number,
  day: number,
}

const daysArray = Array.from({ length: 75 }, (_, index) => ({
  day: index + 1,
  itemsChecked: 0
}));

export const selectedItemsCheckAtom = atomWithStorage('checks', daysArray as itemsCheckProp[]);