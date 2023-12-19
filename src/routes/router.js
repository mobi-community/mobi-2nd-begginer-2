import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/main";
import T_MainPage from "../tailwind/main";
import E_MainPage from "../emotion/main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/tailwind",
    element: <T_MainPage />,
  },
  {
    path: "/emotion",
    element: <E_MainPage />,
  },
]);

export default router;
