import {DEFAULT_GENRE} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {MouseEvent, useState} from 'react';
import {getAllGenres} from '../../utils/get-all-genres';
import {getFilms} from '../../store/main-data/selectors';
import {changeGenre} from '../../store/main-data/main-data';

export default function GenresFilter(): JSX.Element {
  const [currentGenre, setCurrentGenre] = useState(DEFAULT_GENRE);

  const dispatch = useAppDispatch();

  const films = useAppSelector(getFilms);
  const genres = getAllGenres(films);

  const handleChangeGenreClick = (evt: MouseEvent<HTMLAnchorElement>, genre: string) => {
    evt.preventDefault();
    dispatch(changeGenre({currentGenre: genre}));
    setCurrentGenre(genre);
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li
          className={`catalog__genres-item ${currentGenre === genre && 'catalog__genres-item--active'}`}
          key={genre}
        >
          <a
            href="/"
            className="catalog__genres-link"
            onClick={(evt) => handleChangeGenreClick(evt, genre)}
          >
            {genre}
          </a>
        </li>))}

      {/*<li className="catalog__genres-item catalog__genres-item--active">*/}
      {/*  <a href="#" className="catalog__genres-link">All genres</a>*/}
      {/*</li>*/}
      {/*<li className="catalog__genres-item">*/}
      {/*  <a href="#" className="catalog__genres-link">Comedies</a>*/}
      {/*</li>*/}
      {/*<li className="catalog__genres-item">*/}
      {/*  <a href="#" className="catalog__genres-link">Crime</a>*/}
      {/*</li>*/}
      {/*<li className="catalog__genres-item">*/}
      {/*  <a href="#" className="catalog__genres-link">Documentary</a>*/}
      {/*</li>*/}
      {/*<li className="catalog__genres-item">*/}
      {/*  <a href="#" className="catalog__genres-link">Dramas</a>*/}
      {/*</li>*/}
      {/*<li className="catalog__genres-item">*/}
      {/*  <a href="#" className="catalog__genres-link">Horror</a>*/}
      {/*</li>*/}
      {/*<li className="catalog__genres-item">*/}
      {/*  <a href="#" className="catalog__genres-link">Kids & Family</a>*/}
      {/*</li>*/}
      {/*<li className="catalog__genres-item">*/}
      {/*  <a href="#" className="catalog__genres-link">Romance</a>*/}
      {/*</li>*/}
      {/*<li className="catalog__genres-item">*/}
      {/*  <a href="#" className="catalog__genres-link">Sci-Fi</a>*/}
      {/*</li>*/}
      {/*<li className="catalog__genres-item">*/}
      {/*  <a href="#" className="catalog__genres-link">Thrillers</a>*/}
      {/*</li>*/}
    </ul>
  );
}
