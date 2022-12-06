import {AppRoute} from '../../const';
import browserHistory from '../../browser-history';
import HistoryRouter from '../history-route/history-route';
import {Route, Routes} from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import MyListPage from '../../pages/mylist-page/my-list-page';
import FilmPage from '../../pages/film-page/film-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import PlayerPage from '../../pages/player-page/player-page';
import UnknownPage from '../unknown-page/unknown-page';
import LoadingPage from '../../pages/loading-page/loading-page';
import PrivateRoute from '../private-route/private-route';
import {useAppSelector} from '../../hooks';
import {isCheckedAuth} from '../../utils/check-auth';
import {getAuthorizationStatus} from '../../store/user-process/selectors';


export default function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (isCheckedAuth(authorizationStatus)) {
    return (
      <LoadingPage />
    );
  }

  return (
    <>
      {/*{isDataLoaded || <LoadingScreen /> }*/}
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainPage />}
          />
          <Route
            path={AppRoute.SignIn}
            element={<SignInPage />}
          />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <MyListPage/>
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Player}>
            <Route
              path={':id'}
              element={<PlayerPage />}
            />
          </Route>
          <Route path={AppRoute.Film}>
            <Route
              path={':id'}
              element={<FilmPage />}
            >
            </Route>
            <Route
              path={`:id${AppRoute.AddReview}`}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus}>
                  <AddReviewPage />
                </PrivateRoute>
              }
            >
            </Route>
          </Route>
          <Route
            path={'*'}
            element={<UnknownPage />}
          />
        </Routes>
      </HistoryRouter>
    </>
  );
}
