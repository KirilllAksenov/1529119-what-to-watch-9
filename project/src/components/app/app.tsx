import MainScreen from '../main-screen/main-screen';

type AppMainPageProps = {
  name: string,
  genre: string,
  released: number,
}

function App({name: filmTitle, genre: filmGenre, released: releaseDate}: AppMainPageProps): JSX.Element {
  return (
    <MainScreen name={filmTitle} genre={filmGenre} released={releaseDate} />
  );
}

export default App;
