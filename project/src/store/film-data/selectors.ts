import {State} from '../../types/state';
import {NameSpace} from '../../const';
import Film from '../../types/film';
import Similar from '../../types/similar';
import {Comments} from '../../types/comments';

export const getFilm = (state: State): Film | null => state[NameSpace.FilmPage].film;
export const getSimilar = (state: State): Similar => state[NameSpace.FilmPage].similar;
export const getComments = (state: State): Comments => state[NameSpace.FilmPage].comments;
export const getFilmPageTab = (state: State): string => state[NameSpace.FilmPage].filmPageTab;
export const getIsFilmLoadingStatus = (state: State): boolean | null => state[NameSpace.FilmPage].isFilmLoadingStatus;
export const getIsFilmFoundStatus = (state: State): boolean | null => state[NameSpace.FilmPage].isFilmFoundStatus;
