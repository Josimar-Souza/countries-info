import React from 'react';
import NotFound from '../pages/NotFound';
import MainPage from '../pages/MainPage';

const Routes = [
  {
    path: '/',
    element: <MainPage />,
    errorElement: <NotFound />,
  },
];

export default Routes;
