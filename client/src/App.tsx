import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  HomeLayout,
  LandingPage,
  Register,
  Login,
  DashboardLayout,
  AddEmployee,
  Stats,
  MyEmployees,
  Profile,
  EditEmployee,
} from './pages';

import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { action as addEmployeeAction } from './pages/AddEmployee';
import { action as editEmployeeAction } from './pages/EditEmployee';
import { action as deleteEmployeeAction } from './pages/DeleteEmployee';
import { action as profileAction } from './pages/Profile';

import { loader as landingLoader } from './pages/LandingPage';
import { loader as dashboardLoader } from './pages/DashboardLayout';
import { loader as myEmployeesLoader } from './pages/MyEmployees';
import { loader as editEmployeeLoader } from './pages/EditEmployee';
import { loader as statsLoader } from './pages/Stats';

import ErrorElement from './components/ErrorElement'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
        loader: landingLoader,
      },
      {
        path: 'register',
        element: <Register />,
        action: registerAction,
        loader: landingLoader,
      },
      {
        path: 'login',
        element: <Login />,
        action: loginAction,
        loader: landingLoader,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <MyEmployees />,
            loader: myEmployeesLoader,
          },
          {
            path: 'stats',
            element: <Stats />,
            loader: statsLoader,
          },
          {
            path: 'add-employees',
            element: <AddEmployee />,
            action: addEmployeeAction,
            errorElement: <ErrorElement />,

          },
          {
            path: 'profile',
            element: <Profile />,
            action: profileAction,
          },
          {
            path: 'edit-employee/:id',
            element: <EditEmployee />,
            loader: editEmployeeLoader,
            action: editEmployeeAction,
          },
          {
            path: 'delete-employee/:id',
            action: deleteEmployeeAction
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};
export default App;
