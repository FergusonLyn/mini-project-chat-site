import { createBrowserRouter, Outlet } from "react-router-dom"
import { Authlayout } from "./pages/layouts/Authlayout"
import { AuthProvider } from "./context/AuthContext"
import {Signup} from "./pages/Signup"
import { LogIn } from "./pages/LogIn"
import { Rootlayout } from "./pages/layouts/Rootlayout"
import { Home } from "./pages/Home"
import { NewChannel } from "./pages/channel/new"

export const router = createBrowserRouter([
    {
        element: <ContextWrapper />,
        children: [ 
        {
        path: "/"    ,
        element: <Rootlayout />,
        children: [
            { index: true, element: <Home /> },
          {
            path: "/channel",
            children: [{ path: "new", element: <NewChannel/> }],
          },
        ],
        },
        {
        element: <Authlayout />,
        children: [
            {path: "login", element: <LogIn />},
            {path: "signup", element: <Signup />},
        ],
       }
    ]
    }
])   

function ContextWrapper() {
    return (
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    )
  }