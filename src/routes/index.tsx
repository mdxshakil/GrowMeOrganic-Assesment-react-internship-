import { createBrowserRouter } from "react-router-dom";
import SignInPage from "../pages/SignInPage";
import { AppRoutes } from "../constants";
import Main from "../layout/main";
import DataAndDepartmentPage from "../pages/DataAndDepartmentPage";

const router = createBrowserRouter([
  {
    path: AppRoutes.home,
    element: <SignInPage />,
  },
  {
    path: AppRoutes.data,
    element: <Main />,
    children: [
      {
        path: "",
        element: <DataAndDepartmentPage />,
      },
    ],
  },
]);

export default router;
