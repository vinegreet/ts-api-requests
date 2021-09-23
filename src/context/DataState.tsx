import React, { useReducer } from 'react';
import DataContext, { persistedState } from './DataContext';
import dataReducer from './dataReducer';
import { IDataFilm, IDataStateFunctions } from '../models/IData';
import { saveSetFavorite } from './saveSetFavorite';

const DataState: React.FC = ({ children }) => {
  const [ state, dispatch ] = useReducer(dataReducer, persistedState);
  const { favorites, films, selectedId } = state;

  const initFilms = (films: IDataFilm[]): void => {
    dispatch({
      type: 'INIT_FILMS',
      payload: films,
    });
  }

  const setFavorite = (id: number): void => {
    if (!favorites.includes(id)) {
      const updatedFavorites = [ ...favorites, id ];
      // For better debuggability, I pass the ID that should be added, and not the updated array
      saveSetFavorite(dispatch, updatedFavorites, id, 'SET_FAVORITE');
    }
  };

  const unsetFavorite = (id: number): void => {
    if(favorites.includes(id)) {
      const updatedFavorites = favorites.filter((item) => item !== id);
      // For better debuggability, I pass the ID that should be removed, and not the updated array
      saveSetFavorite(dispatch, updatedFavorites, id, 'UNSET_FAVORITE');
    }
  }

  const selectItem = (id: number): void => {
    if (id !== selectedId) {
      dispatch({
        type: 'SELECT_ITEM',
        payload: id,
      });
    }
  };

  const valueState: IDataStateFunctions = {
    favorites,
    films,
    selectedId,
    initFilms,
    selectItem,
    setFavorite,
    unsetFavorite,
  };

  return (
    <DataContext.Provider value={valueState}>
      {children}
    </DataContext.Provider>
  );
}

export default DataState;
