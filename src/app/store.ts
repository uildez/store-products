import { configureStore } from '@reduxjs/toolkit';
import sliceProducts, { INITIAL_STATE } from './sliceProducts';


const saveStateMiddleware = ({ getState }: any) => (next: (arg0: any) => any) => (action: any) => {
  const result = next(action);
  localStorage.setItem('appState', JSON.stringify(getState()));
  return result;
};

export const store = configureStore({
  reducer: {
    products: sliceProducts
  },
  preloadedState: JSON.parse(localStorage.getItem('appState') || 'null') || INITIAL_STATE,
  middleware: [saveStateMiddleware],
});
