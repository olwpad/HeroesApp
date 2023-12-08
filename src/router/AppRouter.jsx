import React from 'react'
import {createBrowserRouter,Navigate,Route,RouterProvider,Routes} from 'react-router-dom'
import { LoginPage } from '../auth'
import { childHeroesRoutes } from '../heroes/routes/childHeroesRoutes'
import { HeroesRoutes } from '../heroes'

const router=createBrowserRouter([
  {
   path:"/",
   element:<HeroesRoutes/>,
   errorElement:<Navigate to="/"/>,
   children:childHeroesRoutes
  },
  {
    path:"/login",
    element:<LoginPage/>
  }
])




export const AppRouter = () => {
  return (
   <>

   <RouterProvider router={router}/>
   </>
)
}
