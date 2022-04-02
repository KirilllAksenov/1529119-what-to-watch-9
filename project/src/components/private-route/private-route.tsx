import {Navigate, RouteProps} from 'react-router-dom';
import {APIRoute, AuthorizationStatus} from '../../const';
import { useAppSelector } from '../../hooks';

type Props = RouteProps & {
  children: JSX.Element;
};

function PrivateRoute(props: Props): JSX.Element {
  const {authorizationStatus} = useAppSelector((state) => state.user);
  const {children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children as JSX.Element
      : <Navigate to={APIRoute.Login} />
  );
}

export default PrivateRoute;
