import { IDataState } from '../models/IData';

export interface IAction {
  type: string
  payload: any
}

export const actionTypes = {
  INIT_FILMS: 'INIT_FILMS',
  SET_FAVORITE: 'SET_FAVORITE',
  UNSET_FAVORITE: 'UNSET_FAVORITE',
  SELECT_ITEM: 'SELECT_ITEM',
};

const reducer = (state: IDataState, action: IAction) => {
  switch(action.type) {
    case actionTypes.INIT_FILMS:
      return {
        ...state,
        films: action.payload,
      }

    case actionTypes.SET_FAVORITE:
      return {
        ...state,
        favorites: [ ...state.favorites, action.payload ],
      };

    case actionTypes.UNSET_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((item) => item !== action.payload),
      };

    case actionTypes.SELECT_ITEM:
      return {
        ...state,
        selectedId: action.payload,
      }

    default:
      return state;
  }
}

export default reducer;
