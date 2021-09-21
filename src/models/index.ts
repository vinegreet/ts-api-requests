import { IDataStateFunctions } from "./IData";

export const host = 'https://swapi.dev';
export const filmsEndpoint = '/api/films';

export const initialState: IDataStateFunctions = {
  favorites: [],
  films: [],
  selectedId: null,
  selectItem() {},
  setFavorite() {},
}
