import { store } from '../../index';
import { setInputValue } from './inputReducer/action';

export const inputListener =()=>{
  const setValue =()=>{
    store.dispatch(setInputValue(input.value))
  }
  const input = document.querySelector('.input')
  input.addEventListener('input', setValue)
}