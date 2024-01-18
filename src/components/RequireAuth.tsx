import { useEffect, useState } from "react";
import { IFormData } from "../interfaces";
import { Navigate } from "react-router-dom";
import { AppRoutes } from "../constants";
import Spinner from "./Spinner";
import toast from "react-hot-toast";

interface IProps {
  children: string | JSX.Element | JSX.Element[];
}

const RequireAuth = ({ children }: IProps) => {
  const [user, setUser] = useState<IFormData>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Retrieve user info from local storage and set it to state
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("auth") as string);
    setUser(userData);
    setIsLoading(false);
  }, []);

  // Show alert message if user is not logged in
  useEffect(() => {
    if (!isLoading && (!user?.email || !user?.name || !user?.phone)) {
      toast.error("You must enter your details to access this page!");
    }
  }, [isLoading, user]);

  //show spinner if auth check is in progress
  if (isLoading) {
    return <Spinner />;
  }

  // If user is not logged in, navigate to homepage
  if (!user?.email || !user?.name || !user?.phone) {
    return <Navigate to={AppRoutes.home} />;
  }

  return children;
};

export default RequireAuth;
