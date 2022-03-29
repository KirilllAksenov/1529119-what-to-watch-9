import {Navigate} from 'react-router-dom';
import {APIRoute, AuthorizationStatus} from '../../const';

type Props = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
};

function PrivateRoute(props: Props): JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children as JSX.Element
      : <Navigate to={APIRoute.Login} />
  );
}

export default PrivateRoute;
