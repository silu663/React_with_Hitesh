import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {Store} from './app/Store.js'

import Login from './Components/Login'
import Profile from './Components/Profile'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<App/>
//   },
//   {
//     path:'/Login',
//     element : <Login />
//   },
//   {
//     path:'/profile',
//     element:<Profile />
//   }
// ])

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <App/>
    <Login />
    <Profile/>
  </Provider>,
)
