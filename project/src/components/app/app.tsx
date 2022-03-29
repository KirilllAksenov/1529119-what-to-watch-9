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
import LoaderScreen from '../../screens/loader-screen/loader-screen';
import { useAppSelector } from '../../hooks';

function App(): JSX.Element {
  const {authorizationStatus, isDataLoading} = useAppSelector((state) => state);

  if (!isDataLoading) {
    return (
      <LoaderScreen/>
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path={APIRoute.Main} element={<MainScreen/>}/>
        <Route path={APIRoute.Login} element={<SingInScreen/>}/>
        <Route path={APIRoute.MyList} element={
          <PrivateRoute authorizationStatus={authorizationStatus}>
            <MyListScreen />
          </PrivateRoute>
        }
        />
        <Route path={APIRoute.Film} element={<MovieScreen />}/>
        <Route path={APIRoute.AddReview} element={
          <PrivateRoute authorizationStatus={authorizationStatus}>
            <AddReviewScreen />
          </PrivateRoute>
        }
        />
        <Route path={APIRoute.Player} element={<PlayerScreen />}/>
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
