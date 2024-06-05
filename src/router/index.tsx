import { createBrowserRouter } from "react-router-dom";
import Homepage from "../components/homepage";

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
