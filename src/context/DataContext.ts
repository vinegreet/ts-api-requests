import { createContext } from 'react';
import { initialState } from '../models';
import { IDataStateFunctions } from '../models/IData';
import { loadFavorites } from '../helpers/localStorage';

export const persistedState = {
  ...initialState,
  favorites: loadFavorites() ?? initialState.favorites,
}

const DataContext = createContext<IDataStateFunctions>(persistedState);

export default DataContext;
