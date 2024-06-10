import { createBrowserRouter } from "react-router-dom";
import Homepage from "../../pages/HomePage";
import Freelancer from "../../pages/Freelancer";
import Employer from "../../pages/Employer";
import FreelancerForm from "../../pages/FreelancerForm";
import EmployerForm from "../../pages/EmployerForm";

import Layout from '../../components/fixed/Layout'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Homepage />,
      },
      {
        path: 'freelancer',
        element: <Freelancer />
      },
      {
        path: 'employer',
        element: <Employer />
      },
      {
        path: 'freelancer-register',
        element: <FreelancerForm />
      },
      {
        path: 'employer-register',
        element: <EmployerForm />
      },
    ],
  },
  {},
]);

export default router;
