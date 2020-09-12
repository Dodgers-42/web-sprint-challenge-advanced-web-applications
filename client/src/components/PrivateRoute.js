import React from 'react';
import { Route, Redirect } from 'react-router-dom';


// Requirement 1.
// It has the same API as `<Route />`
// const PrivateRoute = ({ component: Component, ...rest }) => ()   
// Requirement 2.
// It renders a `<Route />` and passes all the props through to it.
// Requirement 3.
// It checks if the user is authenticated, if they are,
// it renders the "component" prop. If not, it redirects
// the user to /login.

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("token"))  {
          return <Component {...props} {...rest} />;
         } else {
          return <Redirect to="/login" />
      }
      }}
    />
  )

};

export default PrivateRoute;