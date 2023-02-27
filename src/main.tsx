import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./pages/About/About";
import { Home } from "./pages/Home/Home";
import { Products } from "./pages/Products/Products";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/products',
        element: <Products />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
