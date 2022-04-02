import { Link } from 'react-router-dom';
import { TabName } from '../../../types/tab';

type Props = {
  name: TabName;
  activeItem: TabName;
  setActiveItem: (name: TabName) => void;
}

function NavigationItem({name, activeItem, setActiveItem}: Props):JSX.Element {
  return(
    <li className={`film-nav__item${name === activeItem ? ' film-nav__item--active': ''}`}>
      <Link onClick={() => setActiveItem(name)} to="#" className="film-nav__link">{name}</Link>
    </li>
  );
}

export default NavigationItem;
