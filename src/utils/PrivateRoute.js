import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "./AuthContext";

const PrivateRoute = ({ children, ...rest }) => {
  let { user } = useContext(AuthContext);

  return <Route {...rest}>{!user ? <Redirect to="/login" /> : children}</Route>;
};

export default PrivateRoute;
