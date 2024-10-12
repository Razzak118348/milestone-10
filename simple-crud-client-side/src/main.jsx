import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Users from './Components/users';
import Update from './Components/Update';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path:'/users',
    element:<Users></Users>,
    loader : async () => fetch('http://localhost:5000/users')
  },
  {
    path:'/update/:id',
    element:<Update></Update>,
    loader:({params})=>fetch(`http://localhost:5000/users/${params.id}`) //params.id,,,here id is /update/id..
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
