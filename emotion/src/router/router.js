import EmotionPage from "page";
import MuiPage from "page/MuiPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <EmotionPage />,
  },
  {
    path: "/mui",
    element: <MuiPage />,
  },
]);

export default router;
