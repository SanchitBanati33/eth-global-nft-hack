import React from "react";
import { Redirect, Route } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";

const ProtectedRoute = ({ component: Component, level, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (level) {
          return <Component {...props} />;
        } else {
          return <ErrorPage text={"LOCKED"} />;
        }
        // else {
        //   return (
        //     <Redirect
        //       to={{
        //         pathname: "/",
        //         state: { from: props.location },
        //       }}
        //     />
        //   );
        // }
      }}
    />
  );
};

export default ProtectedRoute;
