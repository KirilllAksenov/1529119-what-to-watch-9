import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ApiRoute, AuthorizationStatus } from '../../const';
import MainScreen from '../../screens/main-screen/main-screen';
import SingInScreen from '../../screens/sign-in-screen/sign-in-screen';
import MyListScreen from '../../screens/my-list-screen/my-list-screen';
import MovieScreen from '../../screens/movie-screen/movie-screen';
import AddReviewScreen from '../../screens/add-review-screen/add-review-screen';
import PlayerScreen from '../../screens/player-screen/player-screen';
import PrivateRoute from '../private-route/private-route';
import NotFoundScreen from '../../screens/not-found-screen/not-found-screen';
import { Film } from '../../types/film';
import { Comment } from '../../types/comment';

type Props = {
  films: Film[],
  comments: Comment[];
}

function App({ films, comments}: Props): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ApiRoute.Main} element={<MainScreen/>}/>
        <Route path={ApiRoute.SingIn} element={<SingInScreen/>}/>
        <Route path={ApiRoute.MyList} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <MyListScreen films={films}/>
          </PrivateRoute>
        }
        />
        <Route path={ApiRoute.Film} element={<MovieScreen films={films} comments={comments}/>}/>
        <Route path={ApiRoute.AddReview} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <AddReviewScreen films={films} comments={comments}/>
          </PrivateRoute>
        }
        />
        <Route path={ApiRoute.Player} element={<PlayerScreen films={[]} />}/>
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
