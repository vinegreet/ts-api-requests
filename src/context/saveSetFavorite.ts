import { Dispatch } from "react";
import { IAction } from "./dataReducer";
import { saveFavorites } from '../helpers/localStorage';

export const saveSetFavorite = (
  dispatch: Dispatch<IAction>,
  favorites: number[],
  id: number,
  actionType: string,
): void => {
  saveFavorites(favorites)
    .then(() => {
      dispatch({
        type: actionType,// TODO: create actions types constants
        payload: id,
      });
    })
    .catch((err) => {
      console.log(err);
      // If the local storage update fails, the favorite should not be added.
      // TODO: looks like user's privacy mode does not allow the use of local storage. Show them a message about it.
    });
};
