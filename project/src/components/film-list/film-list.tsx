import {useState} from 'react';
import CardFilm from '../card-film/card-film';
import GenresFilter from '../genres-filter/genres-filter';
import {useAppSelector} from '../../hooks';

export default function FilmList(): JSX.Element {
  const [pointedFilm, setPointedFilm] = useState(NaN);
  const films = useAppSelector((state) => state.shownFilms);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresFilter />

      <div className="catalog__films-list">
        {films.map((film) => (
          <CardFilm
            key={film.id}
            id={film.id}
            title={film.name}
            image={film.previewImage}
            previewVideo={film.previewVideoLink}

            isPointed={pointedFilm === film.id}
            onChangePointedFilm={(pointedId: number) => {
              setPointedFilm(pointedId);
            }}
          />))}
      </div>

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}
