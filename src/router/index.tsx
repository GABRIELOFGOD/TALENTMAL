import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        path: "/",
        // element: <Dashboard />,
      },
    ],
  },
  {},
]);

export default router;
