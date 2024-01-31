import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { Provider  } from 'react-redux'
import store from '@/store/'


import globalRouters from '@/route'
import PrivateRouter from '@/route'

//import App from '@/pages/login/'
//import App from './App.jsx'
//import App from '@/pages/home/'
//import App from '@/pages/account/'

import '@/commons/styles/frame.styl';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 在APP中使用来react-redux的Provider,并且给个参数sotre,和Router特别像*/}
    <Provider store={store}>
           <RouterProvider router={globalRouters}></RouterProvider>
     </Provider>
    
  </React.StrictMode>,
)
