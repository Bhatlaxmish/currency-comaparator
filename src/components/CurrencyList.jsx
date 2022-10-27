import './CurrencyList.css';
import CurrencyCard from './CurrencyCard';
import { useCurrencyContext } from '../hooks/useCurrencyContext';

export default function CurrencyList() {
  const { chosenCurrencies, clearCurrencies } = useCurrencyContext();
  return (
    <div className="currency-list">
      {chosenCurrencies.length >= 1 && <button className='btn clear-btn' onClick={() => clearCurrencies()}>Clear Selection</button>}
      <div className='currency-card-list'>
        {chosenCurrencies && chosenCurrencies.map((currency) => (
          <CurrencyCard key={currency} currency={currency} />
        ))}
      </div>
    </div>
  )
}