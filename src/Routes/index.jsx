import React from 'react';
import NotFound from '../pages/NotFound';
import MainPage from '../pages/MainPage';
import DetailsPage from '../pages/DetailsPage';

const Routes = [
  {
    path: '/',
    element: <MainPage />,
    errorElement: <NotFound />,
  },
  {
    path: '/details/:name',
    element: <DetailsPage />,
  },
];

export default Routes;
