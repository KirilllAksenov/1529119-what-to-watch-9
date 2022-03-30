import {Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainScreen from '../../screens/main-screen/main-screen';
import SingInScreen from '../../screens/sign-in-screen/sign-in-screen';
import MyListScreen from '../../screens/my-list-screen/my-list-screen';
import FilmScreen from '../../screens/film-screen/film-screen';
import AddReviewScreen from '../../screens/add-review-screen/add-review-screen';
import PlayerScreen from '../../screens/player-screen/player-screen';
import PrivateRoute from '../private-route/private-route';
import NotFoundScreen from '../../screens/not-found-screen/not-found-screen';
import LoaderScreen from '../../screens/loader-screen/loader-screen';
import browserHistory  from '../../browser-history';
import HistoryRouter from '../../components/history-route/history-router';
import NoAuthScreen from '../../screens/no-auth-screen/no-auth-screen';
import {useAppSelector} from '../../hooks';


function App(): JSX.Element {
  const {isDataLoaded} = useAppSelector((state) => state.films);
  const { user} = useAppSelector((state) => state);
  if (!isDataLoaded) {
    return <LoaderScreen />;
  }

  if (user.authorizationStatus !== AuthorizationStatus.Auth) {
    return <NoAuthScreen />;
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen />} />
        <Route path={AppRoute.Login} element={<SingInScreen />} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute>
              <MyListScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={
            <PrivateRoute>
              <NoAuthScreen />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Film} element={<FilmScreen />} />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute>
              <AddReviewScreen />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Player} element={<PlayerScreen />} />
        <Route path='*' element={<NotFoundScreen />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
