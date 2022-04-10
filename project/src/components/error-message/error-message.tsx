import {useAppSelector} from '../../hooks';
import {getFilmLoadingError} from '../../store/app-data/app-data';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getFilmLoadingError);

  if (error) {
    return (
      <div
        style={{
          width: '100%',
          height: '80px',
          position: 'fixed',
          top: '30px',
          right: '30px',
          padding: '10px',
          backgroundColor: '#d96666',
          color: 'white',
          borderRadius: '5px',
        }}
      >
        {error}
      </div>
    );
  }

  return null;
}

export default ErrorMessage;
