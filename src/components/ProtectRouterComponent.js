import { Navigate, Outlet } from "react-router-dom";
import { API } from "../dynamicPathSetup.js";
import { useEffect, useState } from "react";

export const ProtectRouterComponent = () => {
  const [isAuth, setIsAuth] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    API.get("/api/auth/currentUser", {
      withCredentials: true,
    })
      .then((res) => {
        setIsAuth(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h1>is loading...</h1>;
  }

  if (!isAuth) {
    return (
      <>
        <Navigate to="/" />
      </>
    );
  }

  return <Outlet />;
};
