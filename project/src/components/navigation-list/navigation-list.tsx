import { Tab } from '../../const';
import { TabName } from '../../types/tab';
import NavigationItem from '../navigation-item/navigation-item';

type Props = {
  activeItem: TabName;
  setActiveItem: (name: TabName) => void;
}

function NavigationList({activeItem, setActiveItem}: Props):JSX.Element {
  const tabs = Object.values(Tab);
  const navigationList = tabs.map((tab) => <NavigationItem key={tab} name={tab} activeItem={activeItem} setActiveItem={setActiveItem}/>);

  return(
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {navigationList}
      </ul>
    </nav>
  );
}
export default NavigationList;
