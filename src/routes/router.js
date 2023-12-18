import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/main";
import T_MainPage from "../tailwind/main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/tailwind",
    element: <T_MainPage />,
  },
]);

export default router;
