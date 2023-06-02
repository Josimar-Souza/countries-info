import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Routes from './Routes';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CountriesContext from './context/CountriesContext';
import ThemeContext from './context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(Routes);

root.render(
  <React.StrictMode>
    <CountriesContext>
      <ThemeContext>
        <RouterProvider router={router} />
      </ThemeContext>
    </CountriesContext>
  </React.StrictMode>,
);

reportWebVitals();
