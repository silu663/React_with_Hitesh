import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import NavBar from './Components/NavBar.jsx'
import './index.css'
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "",
    element: <NavBar />,
  },
  {
    path:"Home",
    element:<Home />
  },
  {
    path:"About",
    element:<About />

  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </StrictMode>,
)
