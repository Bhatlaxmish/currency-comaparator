import './App.css';
// Components
import Sidebar from './components/Sidebar';
import CurrencyComparator from './components/CurrencyComparator';
import CurrencyList from './components/CurrencyList';
import ErrorModal from './components/ErrorModal';
import { useCurrencyContext } from './hooks/useCurrencyContext';


function App() {
  const { siteError } = useCurrencyContext();
  return (
    <div className="App">
      <Sidebar />
      <div className="container">
        {siteError && <ErrorModal error={siteError} />}
        <CurrencyComparator />
        <CurrencyList />
      </div>
    </div>
  );
}

export default App;