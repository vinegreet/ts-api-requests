import React, { useContext } from 'react';
import DataContext from '../../context/DataContext';
import { IDataFilm } from '../../models/IData';

import './chosenFilm.css';

interface Props {
  film: IDataFilm
}

const ChosenFilm: React.FC<Props> = ({ film }) => {
  const { favorites, setFavorite, unsetFavorite } = useContext(DataContext);
  const { episode_id, release_date, title, opening_crawl } = film;
  const year = (release_date ?? '').split('-')[0];
  const isFavorited = favorites.includes(episode_id);

  const favBtnClickHandler = ():void => {
    if (!isFavorited) {
      setFavorite(episode_id);
    } else {
      unsetFavorite(episode_id);
    }
  }

  return (
    <div className="chosen-film">
      <div className="chosen-film_header">
        <h3 className="chosen-film_title">
          Episode {episode_id}: {title} ({year})
        </h3>
      </div>
      <p className="chosen-film_plot">{opening_crawl}</p>
      <button
        onClick={favBtnClickHandler}
        className={
          `chosen-film_favorite-button favorite-button ${
            isFavorited ? 'chosen-film_favorite-button--active' : ''
          }`
        }
      >
        <span className="favorite-button_inner favorite-button_inner--wrapper">
          <span className="favorite-button_inner favorite-button_inner--inner">
            {isFavorited ? 'Favorited ' : 'Favorite'}
          </span>
        </span>
      </button>
    </div>
  );
}

export default ChosenFilm;