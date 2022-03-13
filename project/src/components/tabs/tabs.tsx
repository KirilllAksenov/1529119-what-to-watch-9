
import { useState } from 'react';
import { Tab } from '../../const';
import { Comment } from '../../types/comment';
import { Film } from '../../types/film';
import { TabName } from '../../types/tab';
import DetailsTab from './details-tab';
import TabList from '../navigation/tab-list';
import OverviewTab from './overview-tab';
import ReviewsTab from './reviews-tab';

const DEFAULT_TAB = Tab.Overview;

type Props = {
  activeItem: TabName;
  film: Film;
  comments: Comment[];
}

type getTabProps = {
  film: Film;
  comments: Comment[];
}

function getTab({activeItem, film, comments}: Props): JSX.Element {

  if (activeItem === Tab.Details) {
    return <DetailsTab film={film}/>;
  }

  if (activeItem === Tab.Reviews) {
    return <ReviewsTab comments={comments}/>;
  }

  return <OverviewTab film={film}/>;
}

function Tabs({film, comments}: getTabProps):JSX.Element {
  const [activeItem, setActiveItem] = useState<TabName>(DEFAULT_TAB);

  return(
    <div className="film-card__desc">
      <TabList activeItem={activeItem} setActiveItem={setActiveItem} />

      {getTab({activeItem, film, comments})}
    </div>
  );
}

export default Tabs;
