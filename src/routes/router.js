import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/main";
import T_MainPage from "../tailwind/main";
import E_MainPage from "../emotion/main";
import P_MainPage from "../panda/main";
import AKA_Main from "../UI";

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
  {
    path: "/UI",
    element: <AKA_Main />,
  },
]);

export default router;
