import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Routes from './Routes';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CountriesContext from './context/CountriesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(Routes);

root.render(
  <React.StrictMode>
    <CountriesContext>
      <RouterProvider router={router} />
    </CountriesContext>
  </React.StrictMode>,
);

reportWebVitals();
