import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import PreviewPlayer from '../preview-player/preview-player';
import {useAppDispatch} from '../../hooks';
import {useState} from 'react';
import {resetMainPage} from '../../store/main-data/main-data';

type CardFilmProps = {
  id: number,
  title: string,
  image: string,
  previewVideo: string,
}

export default function CardFilm(props: CardFilmProps): JSX.Element {
  const {id, title, image, previewVideo} = props;

  const [isPointed, setIsPointed] = useState(false); const dispatch = useAppDispatch();
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => setIsPointed(true)}
      onMouseLeave={() => setIsPointed(false)}
    >
      <div className="small-film-card__image">
        {
          isPointed ? <PreviewPlayer image={image} previewVideo={previewVideo} />
            : <img src={image} alt={title} width="280" height="175"/>
        }
      </div>
      <h3 className="small-film-card__title">
        <Link
          className="small-film-card__link"
          to={`${AppRoute.Film}/${id}`}
          onClick={() => {
            dispatch(resetMainPage());
          }}
        >
          {title}
        </Link>
      </h3>
    </article>
  );
}
