import React, { useContext } from 'react';
import DataContext from '../../context/DataContext';
import { IDataFilm } from '../../models/IData';

import './toc.css';

const Toc: React.FC = () => {
  const { films, selectedId, selectItem } = useContext(DataContext);

  const clickHandler = (id: number) => {
    selectItem(id);
  };

  const tocItems = films
    .sort((a: IDataFilm, b: IDataFilm) => a.episode_id - b.episode_id)
    .map((film: IDataFilm) => {
      const { episode_id, release_date, title } = film;
      const year = release_date.split('-')[0];

      return (
        <li
          onClick={() => clickHandler(episode_id)}
          className={`toc_item ${episode_id === selectedId ? 'toc_item--active' : ''}`}
          key={title}
        >
          EP{episode_id}: {title} ({year})
        </li>
      );
    });

  return (
    <ul className="toc">
      {tocItems}
    </ul>
  );
}

export default Toc;