import MainPage from '../../pages/main-page/main-page';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import MyListPage from '../../pages/mylist-page/my-list-page';
import FilmPage from '../../pages/film-page/film-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import PlayerPage from '../../pages/player-page/player-page';
import UnknownPage from '../unknown-page/unknown-page';
import PrivateRoute from '../private-route/private-route';
import {AuthorizationStatus} from '../../const';
import Promo from '../../types/promo';
import Films from '../../types/films';
import Reviews from '../../types/reviews';
import Similar from '../../types/similar';
import Favorite from '../../types/favorite';

type AppProps = {
  promo: Promo,
  films: Films,
  reviews: Reviews,
  similar: Similar,
  favorite: Favorite
}
function App(props: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage promo={props.promo} films={props.films} />}></Route>
        <Route path='/login' element={<SignInPage/>}></Route>
        <Route path='/mylist' element={<PrivateRoute authorizationStatus={AuthorizationStatus.Auth}><MyListPage myList={props.favorite}/></PrivateRoute>}></Route>
        <Route path='/films/:id' element={<FilmPage films={props.films} reviews={props.reviews} similar={props.similar} />}></Route>
        <Route path='/films/:id/review' element={<AddReviewPage/>}></Route>
        <Route path='/player/:id' element={<PlayerPage/>}></Route>
        <Route path='*' element={<UnknownPage/>}></Route>
      </Routes>
    </BrowserRouter>);
}

export default App;
