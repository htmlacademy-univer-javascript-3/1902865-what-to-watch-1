import {NameSpace} from '../../const';
import {State} from '../../types/state';
import Films from '../../types/films';
import Promo from '../../types/promo';
import Favorite from '../../types/favorite';

export const getFilms = (state: State): Films => state[NameSpace.MainPage].films;
export const getPromo = (state: State): Promo | null => state[NameSpace.MainPage].promo;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.MainPage].isDataLoaded;
export const getFilteredFilms = (state: State): Films => state[NameSpace.MainPage].filteredFilms;
export const getCardCount = (state: State): number => state[NameSpace.MainPage].cardCount;
export const getFavoriteFilms = (state: State): Favorite => state[NameSpace.MainPage].favoriteFilms;
export const getFavoriteCount = (state: State): number => state[NameSpace.MainPage].favoriteCount;
