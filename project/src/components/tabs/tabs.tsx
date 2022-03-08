import { useState } from 'react';
import { Tab } from '../../const';
import { Comment } from '../../types/comment';
import { Film } from '../../types/film';
import { TabName } from '../../types/tab';
import DetailsTab from './details-tab';
import NavList from '../navigation/navigation-list';
import OverviewTab from './overview-tab';
import ReviewsTab from './reviews-tab';

const DEFAULT_TAB = Tab.Overview;

type Props = {
  film: Film;
  comments: Comment[];
}

type getTabProps = {
  activeItem: TabName;
  film: Film;
  comments: Comment[];
}

function getTab({activeItem, film, comments}: getTabProps): JSX.Element {

  if (activeItem === Tab.Details) {
    return <DetailsTab film={film}/>;
  }

  if (activeItem === Tab.Reviews) {
    return <ReviewsTab comments={comments}/>;
  }

  return <OverviewTab film={film}/>;
}

function Tabs({film, comments}: Props):JSX.Element {
  const [activeItem, setActiveItem] = useState<TabName>(DEFAULT_TAB);

  return(
    <div className="film-card__desc">
      <NavList activeItem={activeItem} setActiveItem={setActiveItem} />

      {getTab({activeItem, film, comments})}
    </div>
  );
}

export default Tabs;
