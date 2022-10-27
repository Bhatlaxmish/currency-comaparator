import './CurrencyCard.css';
import { useFetch } from '../hooks/useFetch';
import { useCurrencyContext } from '../hooks/useCurrencyContext';

export default function CurrencyCard({ currency }) {
  const { comparatorAmount, currencyComparator, removeCurrencyChoice } = useCurrencyContext();
  const { data, isPending } = useFetch(`https://api.frankfurter.app/latest?amount=${comparatorAmount}&from=${currencyComparator}&to=${currency}`);
  
  return (
    <div className='currency-card'>
      <div className="currency-card-content">
        <span className='currency-card-label'>{currency}</span>
        {isPending && 
          <div className="lds-ring-container">
            <div className="lds-ring lds-ring-small lds-ring-dark"><div></div><div></div><div></div><div></div></div>
          </div>
        }
        {(data && !isPending) && <span>{Object.values(data.rates)[0].toLocaleString()}</span>}
      </div>
      <div className='currency-card-remove' onClick={() => removeCurrencyChoice(currency)}>X</div>
    </div>
  )
}