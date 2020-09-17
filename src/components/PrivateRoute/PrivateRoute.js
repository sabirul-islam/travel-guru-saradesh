import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { CategoryContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {

    const [loggedInUser, setLoggedInUser] = useContext(CategoryContext);
    console.log(loggedInUser);
    return (
    
    <Route
        {...rest}
        render={({ location }) =>
        loggedInUser.email ? (
        children
        ) : (
          <Redirect
            to={{
            pathname: "/login",
            state: { from: location }
            }}
            />
            )
            }
            />
        );
};

export default PrivateRoute;