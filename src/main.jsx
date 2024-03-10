import React from 'react'
import ReactDOM from 'react-dom/client'
// import './assets/css/queries.css'
// import './assets/css/style.css'
// import './assets/css/utilities.css'
import './assets/css/queries.css'
import './assets/css/style.css'
import './assets/css/utilities.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import Layout from './MainLayout/Layout'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Pledge from './Pages/Pledge'
import Talpata from './Pages/Talpata'
import Works from './Pages/Works'
import English from './Pages/English'
import Hindi from './Pages/Hindi'
import Nepali from './Pages/Nepali'
import Urdu from './Pages/Urdu'
import Bangla from './Pages/Bangla'
import Nepalworks from './Pages/Nepalworks'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{
      path: "/",
      element: <Home />
    },
    {
      path: "/About",
      element: <About />
    },
    {
      path: "/Contact",
      element: <Contact />
    },
    {
      path: "/Pledge",
      element: <Pledge />
    },
    {
      path: "/Talpata",
      element: <Talpata />
    },
    {
      path: "/Works",
      element: <Works />
    },
    {
      path: "/English",
      element: <English />
    },
    {
      path: "/Hindi",
      element: <Hindi />
    },
    {
      path: "/Nepali",
      element: <Nepali />
    },
    {
      path: "/Urdu",
      element: <Urdu />
    },
    {
      path: "/Bangla",
      element: <Bangla />
    },
    {
      path: "/Nepalw",
      element: <Nepalworks />
    }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
