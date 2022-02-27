import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainScreen from '../../screens/main-screen/main-screen';
import SingInScreen from '../../screens/sign-in-screen/sign-in-screen';
import MyListScreen from '../../screens/my-list-screen/my-list-screen';
import MovieScreen from '../../screens/movie-screen/movie-screen';
import AddReviewScreen from '../../screens/add-review-screen/add-review-screen';
import PlayerScreen from '../../screens/player-screen/player-screen';
import PrivateRoute from '../private-route/private-route';
import NotFoundScreen from '../../screens/not-found-screen/not-found-screen';
import { Film, FilmReview} from '../../types/film';

type AppScreenProps = {
  films: Film[],
  review: FilmReview[],
  promo: {
    title: string,
    genre: string,
    releaseDate: number
  },
}

function App({ promo, films, review}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen promo={promo} films={films}/>}/>
        <Route path={AppRoute.SingIn} element={<SingInScreen/>}/>
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <MyListScreen films={films}/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Film} element={<MovieScreen films={films}/>}/>
        <Route path={AppRoute.AddReview} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <AddReviewScreen films={films} review={review}/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Player} element={<PlayerScreen films={films}/>}/>
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
