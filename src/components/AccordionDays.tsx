import React, { useEffect, useState, forwardRef, Ref } from 'react';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'react-bootstrap';
import { ChecklistItem } from './ChecklistItem';
import { useAtomValue } from 'jotai';
import { selectedItemsCheckAtom } from '../store';
import './AccordionDay.css';

export interface AccordionDaysProp {
  dayNumber: number,
}

export const AccordionDays = forwardRef<HTMLDivElement, AccordionDaysProp>(({ dayNumber }, ref) => {
  const [isDayDone, setIsDayDone] = useState(false);
  const itemsChecked = useAtomValue(selectedItemsCheckAtom);

  const setClass = () => {
    const item = itemsChecked.find((item) => item.day === dayNumber);
    if (item?.itemsChecked === 4) {
      console.log('asdasd');

      return setIsDayDone(true);
    }

    setIsDayDone(false);
  }

  useEffect(() => {
    setClass();
  }, [itemsChecked]);

  return (
    <div ref={ref}>
      <Accordion>
        <AccordionItem eventKey="0">
          <AccordionHeader className={isDayDone ? 'day-completed' : 'day'}>
            {`Dia ${dayNumber}`}
          </AccordionHeader>
          <AccordionBody className='d-flex flex-column gap-2'>
            <ChecklistItem text='45 min de exercício' day={dayNumber} />
            <ChecklistItem text='Beber 3L de água' day={dayNumber} />
            <ChecklistItem text='Ler 10 páginas de um livro' day={dayNumber} />
            <ChecklistItem text='Zero álcool' day={dayNumber} />
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
});
