import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { AccordionDays } from './components/AccordionDays';
import { selectedItemsCheckAtom } from './store';
import { useAtomValue } from 'jotai';
import React, { useEffect, useRef } from 'react';

function App() {
  const daysToCheck = useAtomValue(selectedItemsCheckAtom);
  const refs = useRef<(HTMLDivElement | null)[]>(Array(75).fill(null));

  useEffect(() => {
    const lastDayWithFourChecks = daysToCheck.findIndex(item => item.itemsChecked === 4);
    if (lastDayWithFourChecks !== -1 && refs.current[lastDayWithFourChecks]) {
      refs.current[lastDayWithFourChecks]!.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div>
      <h2>Desafio 75 dias</h2>
      <div className="d-flex flex-column gap-3">
        {
          daysToCheck.map((_, index) => (
            <AccordionDays
              key={index + 1}
              dayNumber={index + 1}
              ref={el => refs.current[index] = el as HTMLDivElement} // Assegure que a ref seja um HTMLDivElement
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
