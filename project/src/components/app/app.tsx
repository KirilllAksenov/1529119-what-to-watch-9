import MainPage from '../main-page/main-page';

type AppMainPageProps = {
  filmTitle: string,
  filmGenre: string,
  releaseDate: number,
}

function App({filmTitle, filmGenre, releaseDate}: AppMainPageProps): JSX.Element {
  return (
    <MainPage filmTitle={filmTitle} filmGenre={filmGenre} releaseDate={releaseDate}/>
  );
}

export default App;
