import React, { FC } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../pages/Layout'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home'
import Transactions from '../pages/Transactions'
import Categories from '../pages/Categories'
import Auth from '../pages/auth'

const router =createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                // path:'home'
                index:true,
                element:<Home/>
            },
            {
                path:'transactions',
                element:<Transactions/>
            },
            {
                path:'categories',
                element:<Categories/>
            },
            {
               path:'auth',
               element:<Auth/> ,
            },
        ]
    }
])


export default router