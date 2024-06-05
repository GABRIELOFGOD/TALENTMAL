import { createBrowserRouter } from "react-router-dom";
import Homepage from "../../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        path: "/",
        element: <Homepage />,
      },
    ],
  },
  {},
]);

export default router;
