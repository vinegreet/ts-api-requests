import React, { useEffect, useContext } from 'react';
import DataContext from '../../context/DataContext';
import { host, filmsEndpoint } from '../../models';
import { IApiFilmsData, IDataFilm } from '../../models/IData';
import ChooseTheFilm from '../ChooseTheFilm/ChooseTheFilm';
import ChosenFilm from '../ChosenFilm/ChosenFilm';
import Toc from '../Toc';
import './app.css';

const App: React.FC = () => {
  const { films, initFilms, selectedId } = useContext(DataContext);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${host}${filmsEndpoint}`);
        const data: IApiFilmsData = await response.json();
        initFilms(data?.results);
      } catch(error) {
        window.alert(error) // TODO: handle failed request
      }
    })();
    // eslint-disable-next-line
  }, []);

  if (films.length === 0) {
    return (
      <div className="app">
        Loading...
      </div>
    )
  }

  const chosenFilm = films.find((film: IDataFilm) => film.episode_id === selectedId);

  return (
    <div className="app">
      <h1 className="app_title">Star Wars movies</h1>
      <div className="app_content">
        <Toc />
        {chosenFilm
          ? <ChosenFilm film={chosenFilm} />
          : <ChooseTheFilm />
        }
      </div>
    </div>
  );
}

export default App;
