export interface IApiFilmsData {
  count: number
  results: IDataFilm[]
}

export interface IDataFilm {
  episode_id: number
  opening_crawl: string
  release_date: string
  title: string
}

export interface IDataState {
  favorites: number[]
  films: IDataFilm[]
  selectedId: number | null
}

export interface IDataStateFunctions extends IDataState {
  initFilms: Function
  selectItem: Function
  setFavorite: Function
}
