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

type AppProps={
  FilmInfo:{
    name:string,
    genre:string,
    date:number,}
}
function App(props:AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage name={props.FilmInfo.name} date={props.FilmInfo.date} genre={props.FilmInfo.genre}/>}></Route>
        <Route path='/login' element={<SignInPage/>}></Route>
        <Route path='/mylist' element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><MyListPage/></PrivateRoute>}></Route>
        <Route path='/films/:id' element={<FilmPage/>}></Route>
        <Route path='/films/:id/review' element={<AddReviewPage/>}></Route>
        <Route path='/player/:id' element={<PlayerPage/>}></Route>
        <Route path='*' element={<UnknownPage/>}></Route>
      </Routes>
    </BrowserRouter>);
}

export default App;
