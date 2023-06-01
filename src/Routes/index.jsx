import React from 'react';
import MainPage from '../pages/MainPage';
import NotFound from '../pages/NotFound';

const Routes = [
  {
    path: '/',
    element: <MainPage />,
    errorElement: <NotFound />,
  },
];

export default Routes;
