import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import { DeclarObjectProvider } from './utils/context/DeclarObjectProvider';
import IncludeHome from './pages/Home/IncludeHome';
import IncludeDeclar from './pages/FormDeclarObject/IncludeDeclar';
import Error404 from './pages/Error404/Error404';



const routes = createBrowserRouter([
  {
    path: "/",
    element: <IncludeHome />
  },
  {
    path: "declaration",
    element: <IncludeDeclar />
  },
  {
    path: "*",
    element: <Error404 />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DeclarObjectProvider>
      <RouterProvider router={routes} />
    </DeclarObjectProvider>
  </React.StrictMode>
);
