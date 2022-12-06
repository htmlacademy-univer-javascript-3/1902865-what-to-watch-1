import {useAppSelector} from '../../hooks';
import ShowMoreButton from '../show-more-button/show-more-button';
import {getCardCount, getFilteredFilms} from '../../store/main-data/selectors';

import GenresFilter from '../genres-filter/genres-filter';
import CardFilm from '../card-film/card-film';
export default function FilmList(): JSX.Element {
  const films = useAppSelector(getFilteredFilms);
  const cardCount = useAppSelector(getCardCount);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresFilter />

      <div className="catalog__films-list">
        {films.slice(0, cardCount).map((film) => (
          <CardFilm
            key={film.id}
            id={film.id}
            title={film.name}
            image={film.previewImage}
            previewVideo={film.previewVideoLink}
          />))}
      </div>

      <ShowMoreButton isAllCardsLoaded={cardCount !== films.length}/>
    </section>
  );
}
