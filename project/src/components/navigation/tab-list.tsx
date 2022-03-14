import { Tab } from '../../const';
import { TabName } from '../../types/tab';
import TabItem from './tab-item';

type Props = {
  activeItem: TabName;
  setActiveItem: (name: TabName) => void;
}

function NavigationList({activeItem, setActiveItem}: Props):JSX.Element {
  const tabs = Object.values(Tab);
  const navList = tabs.map((tab) => <TabItem key={tab} name={tab} activeItem={activeItem} setActiveItem={setActiveItem}/>);

  return(
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {navList}
      </ul>
    </nav>
  );
}
export default NavigationList;
