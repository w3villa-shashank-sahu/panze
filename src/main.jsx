import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './dashboard/App.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router";

import OverviewPage from './pages/overview.jsx';
import Page2 from "./pages/page2";
import GetAPI from './pages/getApi.jsx';


const router = createBrowserRouter([
  {   
      path: "/", 
      element: <App />,
      children: [
          {
              index: true,
              element: <Navigate to="/overview" replace />
          },
          {
              path: "overview",
              element: <OverviewPage/>
          },
          {
            path: "GET API",
            element: <GetAPI/>
          },
          {
            path: ":id",
            element: <Page2/>
          }
      ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

