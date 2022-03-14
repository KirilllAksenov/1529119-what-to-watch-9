type Props = {
  name: string;
  value: string | JSX.Element[] | number;
}

function DetailsItem({name, value}: Props):JSX.Element {
  return(
    <p className="film-card__details-item">
      <strong className="film-card__details-name">{name}</strong>
      <span className="film-card__details-value">{value}</span>
    </p>
  );
}
export default DetailsItem;
