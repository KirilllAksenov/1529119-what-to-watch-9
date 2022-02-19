import { Link } from 'react-router-dom';

function Login(): JSX.Element{
  return (
    <li className="user-block__item">
      <Link to="/login" className="user-block__link">Sign out</Link>
    </li>
  );
}

export default Login;
