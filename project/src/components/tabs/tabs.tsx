import { useState } from 'react';
import { Tab } from '../../const';
import { Comment } from '../../types/comment';
import { Film } from '../../types/film';
import { TabName } from '../../types/tab';
import DetailsTab from '../details-tab/details-tab';
import NavigationList from '../navigation/navigation-list';
import OverviewTab from '../overview-tab/overview-tab';
import ReviewsTab from '../reviews-tab/reviews-tab';

const DEFAULT_TAB = Tab.Overview;

type Props = {
  film: Film;
  comments: Comment[];
}

function Tabs({film, comments}: Props):JSX.Element {
  const [activeItem, setActiveItem] = useState<TabName>(DEFAULT_TAB);

  return(
    <div className="film-card__desc">
      <NavigationList activeItem={activeItem} setActiveItem={setActiveItem} />
      {activeItem === Tab.Details && <DetailsTab film={film} />}
      {activeItem === Tab.Reviews && <ReviewsTab comments={comments} />}
      {activeItem === Tab.Overview && <OverviewTab film={film} />}
    </div>
  );
}

export default Tabs;
