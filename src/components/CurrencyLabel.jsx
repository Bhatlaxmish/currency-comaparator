import './CurrencyLabel.css';
import { useState } from 'react';
import { useCurrencyContext } from '../hooks/useCurrencyContext';
let count=0;
export default function CurrencyLabel({ shortLabel, fullLabel }) {
  count++;
  const { dispatch, chosenCurrencies, currencyComparator, currencyListLimit } = useCurrencyContext();
  const [choiceValid, setChoiceValid] = useState(null);
  
  const handleCurrencyChoice = () => {
    // Prevent user from duplicating currency choice
    // Prevent user from including same currency comparator in the currency list
    if (!chosenCurrencies.includes(shortLabel) && currencyComparator !== shortLabel) {
   
        dispatch({ type: 'ADD_CURRENCY_CHOICE', payload: shortLabel });
        setChoiceValid(true);
        setTimeout(() => {
          setChoiceValid(null);
        }, 500);
     
    } else {
      setChoiceValid(false);
      setTimeout(() => {
        setChoiceValid(null);
      }, 500);
    }
  }

  return (
    <div className={`currency-label ${choiceValid === true && 'valid'} ${choiceValid === false && 'invalid'}`} onClick={handleCurrencyChoice}>
     <li >{shortLabel} - {fullLabel}</li>
    </div>
  )
}