import { createBrowserRouter } from "react-router-dom";
import SignInPage from "../pages/SignInPage";
import { AppRoutes } from "../constants";
import DataAndDepartmentPage from "../pages/DataAndDepartmentPage";
import RequireAuth from "../components/RequireAuth";
import Main from "../layout/Main";

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
        element: (
          <RequireAuth>
            <DataAndDepartmentPage />
          </RequireAuth>
        ),
      },
    ],
  },
]);

export default router;
