import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';

type AuthedUserRouteProps = {
  authStatus: string;
  children: JSX.Element;
}

function AuthedUserRoute(props: AuthedUserRouteProps): JSX.Element {
  const {authStatus, children} = props;

  return (
    authStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.SignIn} />
  );
}

export default AuthedUserRoute;
