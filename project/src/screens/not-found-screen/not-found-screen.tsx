import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import '../not-found-screen/not-found-screen-style.css';

function NotFoundScreen(): JSX.Element{
  return (
    <div className="container">
      <div className="not-found">
        <h2 className="not-found__title">Error <span>404</span></h2>
        <p className="not-found__text">Not found page</p>
        <Link to='/' className="not-found__link">Please, go back</Link>
      </div>
      <Footer />
    </div>
  );
}

export default NotFoundScreen;
