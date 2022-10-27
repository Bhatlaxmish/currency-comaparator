import './CurrencyComparator.css';
import { useState } from 'react';
import { useCurrencyContext } from '../hooks/useCurrencyContext';

export default function CurrencyComparator() {
  const { dispatch, setComparatorChoice, currencyLabels, chosenCurrencies } = useCurrencyContext();
  const [comparatorValue, setComparatorValue] = useState(1);
  const [selectedComparator, setSelectedComparator] = useState('AUD');

  const handleComparatorSubmit = (e) => {
    e.preventDefault();
    if (!comparatorValue || comparatorValue <= 0) {
      dispatch({ type: 'SET_SITE_ERROR', payload: 'Please set a valid currency value.' });
      setComparatorValue(1);
      return;
    }
    let adjustedCurrencyList = chosenCurrencies.filter(currency => currency !== selectedComparator);
    setComparatorChoice(selectedComparator, comparatorValue, adjustedCurrencyList);
  }

  return (
    <div className='currency-comparator'>
      <form className="comparator-heading" onSubmit={handleComparatorSubmit}>Compare 
        <div className='comparator-inputs'>
          <input type="number" className='comparator-value' onChange={(e) => setComparatorValue(e.target.value)} value={comparatorValue} />
          <select className='comparator-select' onChange={(e) => setSelectedComparator(e.target.value)} value={selectedComparator}>
            {currencyLabels && currencyLabels.map((label) => (
              <option key={label} value={label}>{label}</option>
            ))}
          </select> 
        </div>
        to other currencies
        <div className="next">

        <button className='btn inline-btn'>Compare</button>
        </div>
      </form>
    </div>
  )
}