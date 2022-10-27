import './ErrorModal.css';
import { useCurrencyContext } from '../hooks/useCurrencyContext';

export default function ErrorModal({ error }) {
  const { dispatch } = useCurrencyContext();

  const closeErrorModal = () => {
    dispatch({ type: 'CLEAR_SITE_ERROR' });
  }
  
  return (
    <>
      <div className="error-backdrop" onClick={() => closeErrorModal()}></div>
      <div className='error-modal'>
        <p className="error-content">{error}</p>
        <div className='error-modal-close' onClick={() => closeErrorModal()}>X</div>
      </div>
    </>
  )
}