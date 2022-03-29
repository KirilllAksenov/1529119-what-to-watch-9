import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { APIRoute } from '../../const';
import MainScreen from '../../screens/main-screen/main-screen';
import SingInScreen from '../../screens/sign-in-screen/sign-in-screen';
import MyListScreen from '../../screens/my-list-screen/my-list-screen';
import MovieScreen from '../../screens/movie-screen/movie-screen';
import AddReviewScreen from '../../screens/add-review-screen/add-review-screen';
import PlayerScreen from '../../screens/player-screen/player-screen';
import PrivateRoute from '../private-route/private-route';
import NotFoundScreen from '../../screens/not-found-screen/not-found-screen';
import Loader from '../loader/loader';
import { Film } from '../../types/film';
import { Comment } from '../../types/comment';
import { useAppSelector } from '../../hooks';

type Props = {
  films: Film[],
  comments: Comment[];
}

function App({ films, comments}: Props): JSX.Element {
  const {authorizationStatus, isDataLoading} = useAppSelector((state) => state);

  if (!isDataLoading) {
    return (
      <Loader/>
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path={APIRoute.Main} element={<MainScreen/>}/>
        <Route path={APIRoute.Login} element={<SingInScreen/>}/>
        <Route path={APIRoute.MyList} element={
          <PrivateRoute authorizationStatus={authorizationStatus}>
            <MyListScreen films={[]}/>
          </PrivateRoute>
        }
        />
        <Route path={APIRoute.Film} element={<MovieScreen films={[]} comments={[]}/>}/>
        <Route path={APIRoute.AddReview} element={
          <PrivateRoute authorizationStatus={authorizationStatus}>
            <AddReviewScreen films={[]} comments={comments}/>
          </PrivateRoute>
        }
        />
        <Route path={APIRoute.Player} element={<PlayerScreen films={[]} />}/>
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
