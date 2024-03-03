import { useSelector } from "react-redux"
import { RootStateType } from "../store"
import { Navigate, RouteProps } from "react-router"
import { HOME_URL, LOGIN_URL } from "../lib/constants"


/**
 * The AuthRoute component checks for a user session token and either redirects to the home page or
 * renders its child components accordingly.
 */
export const AuthRoute = ({ children }: RouteProps) => {
    const stateSession = useSelector((state: RootStateType) => state.session.token.data?.accessToken)

    if (stateSession) {
        return <Navigate to={HOME_URL} replace />;
    } else {
        return children
    }
}

/**
 * The PrivateRoute component checks for a valid session token and either renders the child components
 * or navigates to the login page.
 */
export const PrivateRoute = ({ children }: RouteProps) => {
    const stateSession = useSelector((state: RootStateType) => state.session.token.data?.accessToken)

    if (stateSession) {
        return children
    } else {
        return <Navigate to={LOGIN_URL} replace />;
    }
}