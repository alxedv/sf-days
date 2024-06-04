import { useState } from 'react';
import './Checklist.css';
import { useAtom } from 'jotai';
import { selectedItemsCheckAtom } from '../store';
import { RiCheckLine } from '@remixicon/react';

interface ChecklistProps {
  text: string;
  day: number;
}

export const ChecklistItem = ({ text, day }: ChecklistProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const [, setItemsCheck] = useAtom(selectedItemsCheckAtom);

  const select = () => {
    setIsSelected(!isSelected);
    setItemsCheck((prevDaysArray) =>
      prevDaysArray.map(item =>
        item.day === day
          ? { ...item, itemsChecked: isSelected ? item.itemsChecked - 1 : item.itemsChecked + 1 }
          : item
      )
    );
  };

  return (
    <div
      className={`d-flex align-items-center justify-content-between ${isSelected ? 'checkbox-wrapper-selected' : 'checkbox-wrapper'}`}
      onClick={select}
    >
      {text}
      {isSelected && <RiCheckLine className='align-self-end' />}
    </div>
  );
};
