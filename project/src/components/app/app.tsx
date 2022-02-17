import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainScreen from '../main-screen/main-screen';
import SingInScreen from '../sign-in-screen/sign-in-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import MovieScreen from '../movie-screen/movie-screen';
import AddReviewScreen from '../add-review-screen/add-review-screen';
import PlayerScreen from '../player-screen/player-screen';
import PrivateRoute from '../private-route/private-route';
import NotFoundScreen from '../not-found-screen/not-found-screen';

type AppMainPageProps = {
  name: string,
  genre: string,
  released: number,
}

function App({name: filmTitle, genre: filmGenre, released: releaseDate}: AppMainPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={ <MainScreen name={filmTitle} genre={filmGenre} released={releaseDate} />}/>
        <Route path={AppRoute.SingIn} element={<SingInScreen/>}/>
        <Route path={AppRoute.MyList} element={
          <PrivateRoute
            authorizationStatus={AuthorizationStatus.NoAuth}
          >
            <MyListScreen/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Movie} element={ <MovieScreen/>}/>
        <Route path={AppRoute.AddReview} element={
          <PrivateRoute
            authorizationStatus={AuthorizationStatus.NoAuth}
          >
            <AddReviewScreen/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Player} element={ <PlayerScreen/>}/>
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
