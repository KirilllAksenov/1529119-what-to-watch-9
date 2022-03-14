import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import {Film} from '../../types/film';
import DetailsItem from '../tabs/detailts-item';

dayjs.extend(duration);

type Props = {
  film: Film;
}

function DetailsTab({film}: Props):JSX.Element {
  const {director, starring, runTime, genre, released} = film;

  return(
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <DetailsItem name='Director' value={director}/>
        <DetailsItem name='Starring' value={starring.join('')}/>
      </div>

      <div className="film-card__text-col">
        <DetailsItem name='Run Time' value={dayjs.duration(runTime, 'minutes').format(`${runTime > 60 ? 'H[h] m[m]' : 'm[m]'}`)}/>
        <DetailsItem name='Genre' value={genre}/>
        <DetailsItem name='Released' value={released}/>
      </div>
    </div>
  );
}
export default DetailsTab;

