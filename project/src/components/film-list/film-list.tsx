import {useState} from 'react';
import CardFilm from '../card-film/card-film';
import Films from '../../types/films';

type FilmListProps = {
  films: Films
}

export default function FilmList({films}: FilmListProps): JSX.Element {
  const [pointedFilm, setPointedFilm] = useState(NaN);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <ul className="catalog__genres-list">
        <li className="catalog__genres-item catalog__genres-item--active">
          <a href="/" className="catalog__genres-link">All genres</a>
        </li>
        <li className="catalog__genres-item">
          <a href="/" className="catalog__genres-link">Comedies</a>
        </li>
        <li className="catalog__genres-item">
          <a href="/" className="catalog__genres-link">Crime</a>
        </li>
        <li className="catalog__genres-item">
          <a href="/" className="catalog__genres-link">Documentary</a>
        </li>
        <li className="catalog__genres-item">
          <a href="/" className="catalog__genres-link">Dramas</a>
        </li>
        <li className="catalog__genres-item">
          <a href="/" className="catalog__genres-link">Horror</a>
        </li>
        <li className="catalog__genres-item">
          <a href="/" className="catalog__genres-link">Kids & Family</a>
        </li>
        <li className="catalog__genres-item">
          <a href="/" className="catalog__genres-link">Romance</a>
        </li>
        <li className="catalog__genres-item">
          <a href="/" className="catalog__genres-link">Sci-Fi</a>
        </li>
        <li className="catalog__genres-item">
          <a href="/" className="catalog__genres-link">Thrillers</a>
        </li>
      </ul>

      <div className="catalog__films-list">
        {films.map((film) => (
          <CardFilm
            key={film.id}
            id={film.id}
            title={film.name}
            image={film.previewImage}
            previewVideo={film.previewVideoLink}

            isPointed={pointedFilm === film.id}
            changeParentState={(pointedId: number) => {
              setPointedFilm(pointedId);
            }}
          />)
        )}
      </div>

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}
