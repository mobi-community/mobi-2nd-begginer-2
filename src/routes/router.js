import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/main";
import T_MainPage from "../tailwind/main";
import E_MainPage from "../emotion/main";
import P_MainPage from "../panda/main";

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
  {
    path: "/panda",
    element: <P_MainPage />,
  },
]);

export default router;
