import { Link } from 'react-router-dom';

function NotFoundScreen(): JSX.Element{
  return (
    <div>
      <h2>Error <b>404</b></h2>
      <p>Not found page</p>
      <Link to='/'>Please, go back</Link>
    </div>
  );
}

export default NotFoundScreen;
