import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getLoggedInUser, getToken, userRole } from "./utils";

// handle the private routes
const PrivateRoutes = () => {
  return getToken() ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;

export const StudentRoutes = () => {
  const user_role = userRole();
  return user_role === "ROLE_STUDENT" ? (
    <Outlet />
  ) : (
    <Navigate to="/educator/dashboard" />
  );
};

// handle the public routes
export const PublicRoutes = () => {
  const username = getLoggedInUser()?.username;
  return !getToken() ? <Outlet /> : <Navigate to={`/${username}`} />;
};
