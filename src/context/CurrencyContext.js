import { createContext, useReducer } from 'react';

export const CurrencyContext = createContext();

// Reducer Function
export const CurrencyReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_CURRENCY_LABELS':
      return { ...state, currencyLabels: action.payload, currencyComparator: action.payload[0], dataLoading: false }
    case 'SET_CURRENCY_COMPARATOR':
      return { ...state, currencyComparator: action.payload.comparator, comparatorAmount: action.payload.value, chosenCurrencies: action.payload.adjustedCurrencyList, dataLoading: false }
    case 'ADD_CURRENCY_CHOICE':
      return { ...state, chosenCurrencies: state.chosenCurrencies.concat(action.payload), dataLoading: false }
    case 'REMOVE_CURRENCY_CHOICE':
      return { ...state, chosenCurrencies: state.chosenCurrencies.filter(currency => currency !== action.payload), dataLoading: false }
    case 'CLEAR_CURRENCIES':
      return { ...state, chosenCurrencies: [] }
    case 'SET_SITE_ERROR':
      return { ...state, siteError: action.payload }
    case 'CLEAR_SITE_ERROR':
      return { ...state, siteError: null }
    default:
      return state;
  }
}

export const CurrencyContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CurrencyReducer, {
    currencyLabels: [],
    currencyComparator: null,
    comparatorAmount: 1,
    chosenCurrencies: [],
    currencyListLimit: 10,
    siteError: null
  });

  // Dispatch functions
  // const setCurrencyLabels = (data) => {
  //   dispatch({ type: 'DATA_LOADING' });
  //   dispatch({ type: 'LOAD_CURRENCY_LABELS', payload: data });
  // }

  const setComparatorChoice = (comparator, value, adjustedCurrencyList) => {
    dispatch({ type: 'SET_CURRENCY_COMPARATOR', payload: {comparator, value, adjustedCurrencyList} });
  }

  const addCurrencyChoice = (data) => {
    dispatch({ type: 'ADD_CURRENCY_CHOICE', payload: data });
  }

  const removeCurrencyChoice = (data) => {
    dispatch({ type: 'REMOVE_CURRENCY_CHOICE', payload: data });
  }

  const clearCurrencies = () => {
    dispatch({ type: 'CLEAR_CURRENCIES' });
  }

  return (
    <CurrencyContext.Provider value={{...state, dispatch, setComparatorChoice, addCurrencyChoice, removeCurrencyChoice, clearCurrencies }}>
      {children}
    </CurrencyContext.Provider>
  )
}