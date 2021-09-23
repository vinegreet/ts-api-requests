import { IDataState } from '../models/IData';

export interface IAction {
  type: string
  payload: any
}

const reducer = (state: IDataState, action: IAction) => {
  switch(action.type) {
    case 'INIT_FILMS':
      return {
        ...state,
        films: action.payload,
      }

    case 'SET_FAVORITE':
      return {
        ...state,
        favorites: [ ...state.favorites, action.payload ],
      };

    case 'UNSET_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter((item) => item !== action.payload),
      };

    case 'SELECT_ITEM':
      return {
        ...state,
        selectedId: action.payload,
      }

    default:
      return state;
  }
}

export default reducer;
