import { MainLayout } from '@layouts';
import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  Create,
  EditNote,
  Feed,
  Note,
  NotFound,
  SignIn,
  SignUp,
  User,
} from './lazy';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Feed />,
      },
      {
        path: '/create',
        element: <Create />,
      },
      {
        path: '/note/:noteId',
        element: <Note />,
      },
      {
        path: '/note/:noteId/edit',
        element: <EditNote />,
      },
      {
        path: '/user',
        element: <User />,
      },
    ],
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
]);

export const Routes: FC = () => <RouterProvider router={routes} />;
