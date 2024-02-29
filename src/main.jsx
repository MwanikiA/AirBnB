import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Discover from './pages/discover.jsx'
import Favorites from './pages/favorites.jsx'

const urls = [
  {
    path:'/',
    element: <App/>
  },
  {
    path: '/discover',
    element: <Discover/>
  },
  {
    path: '/favorites',
    element: <Favorites/>
  }
]

const paths = createBrowserRouter(urls)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={paths} />
  </React.StrictMode>,
)
