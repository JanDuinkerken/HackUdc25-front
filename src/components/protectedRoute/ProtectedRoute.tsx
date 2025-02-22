import { JSX } from 'react';
import { Navigate } from 'react-router';

interface ProtectedRouteProps {
    children: JSX.Element;
    authenticated: boolean; // set the user-roles
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
    children,
    authenticated,
}) => {

    if (!authenticated) { // if user is not authenticated, re-direct to login -- status 401
        return <Navigate to="/login" />;
    }
    return children; // return the right page if user is cleared.
};

export default ProtectedRoute;