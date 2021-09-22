import React, { useReducer } from 'react';
import DataContext from './DataContext';
import { initialState } from '../models';
import { saveFavorites } from './localStorage';
import dataReducer from './dataReducer';
import { IDataFilm, IDataStateFunctions } from '../models/IData';

const DataState: React.FC = ({ children }) => {
  const [ state, dispatch ] = useReducer(dataReducer, initialState);
  const { favorites, films, selectedId } = state;

  const initFilms = (films: IDataFilm[]): void => {
    dispatch({
      type: 'INIT_FILMS',
      payload: films,
    });
  }

  const setFavorite = (id: number): void => {
    // If favorite hasn't been added yet - add it
    if (!favorites.includes(id)) {
      const updatedFavorites = [ ...favorites, id ];
      saveFavorites(updatedFavorites)
        .then(() => {
          dispatch({
            type: 'SET_FAVORITE',// TODO: create actions types constants
            payload: id,
          });
        })
        .catch((err) => {
          console.log(err);
          // If the local storage update fails, the favorite should not be added.
          // TODO: looks like user's privacy mode does not allow the use of local storage. Show them a message about it.
        });
    }
  };

  const selectItem = (id: number): void => {
    if (id !== selectedId) {
      dispatch({
        type: 'SELECT ITEM',
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
  };

  return (
    <DataContext.Provider value={valueState}>
      {children}
    </DataContext.Provider>
  );
}

export default DataState;
