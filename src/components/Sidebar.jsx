import './Sidebar.css';
import { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useCurrencyContext } from '../hooks/useCurrencyContext';
import CurrencyLabel from './CurrencyLabel';

export default function Sidebar() {
  const { data, isPending } = useFetch('https://api.frankfurter.app/currencies');
  const { dispatch } = useCurrencyContext();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (data) {
      dispatch({ type: 'LOAD_CURRENCY_LABELS', payload: Object.keys(data) });
    }
  }, [data, dispatch]);
  return (
    <div className={`sidebar ${sidebarOpen && 'open'}`}>
      <div className="sidebar-toggle" onClick={() => setSidebarOpen(prevSidebarOpen => !prevSidebarOpen)}>
      
       
      </div>
      <div className="site-brand">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC0yLTVmeUR0kZOV5SEcSIXSup-kljHo8Z4A&usqp=CAU" alt="" />
        <p className='component-heading'>Currency comparator</p>
        <div className="sidebar-spacer"></div>
      </div>
      <div className="currency-labels">
        {isPending && 
          <div className="lds-ring-container" style={{marginTop: '1.2rem'}}>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
          </div>
        }
        <ul>
     
          {data && Object.keys(data).map((label) => (
          
            <CurrencyLabel key={data[label]} shortLabel={label} fullLabel={data[label]} />
     
          )
        )
       }
        </ul>
      </div>
    </div>
  )
}