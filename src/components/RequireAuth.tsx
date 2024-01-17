import { useEffect, useState } from "react";
import { IFormData } from "../interfaces";
import { Navigate } from "react-router-dom";
import { AppRoutes } from "../constants";
import Spinner from "./Spinner";

interface IProps {
  children: string | JSX.Element | JSX.Element[];
}

const RequireAuth = ({ children }: IProps) => {
  const [user, setUser] = useState<IFormData>();
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  //retrive user info from localstorage and set to state
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("auth") as string);
    setUser(userData);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  //if user is not logged in, navigate to homepage
  return !user?.email || !user?.name || !user?.phone ? (
    <Navigate to={AppRoutes.home} />
  ) : (
    children
  );
};

export default RequireAuth;
