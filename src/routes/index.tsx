import { createBrowserRouter } from "react-router-dom";
import SignInPage from "../pages/SignInPage";
import DataAndDepartmentPage from "../pages/DataAndDepartmentPage";
import { AppRoutes } from "../constants";

const router = createBrowserRouter([
  {
    path: AppRoutes.home,
    element: <SignInPage />,
  },
  {
    path: AppRoutes.data,
    element: <DataAndDepartmentPage />,
  },
]);

export default router;
