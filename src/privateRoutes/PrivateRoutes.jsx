import React, { use } from "react";
import { AuthContext } from "../provider/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loading from "../components/Loading/Loading";

const PrivateRoutes = ({ children }) => {
  const { user,loading } = use(AuthContext);

  const location = useLocation();

  if (loading) {
    return <Loading></Loading>
  }

  if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
  }
};

export default PrivateRoutes;
