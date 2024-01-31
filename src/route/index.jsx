
import { createHashRouter,Navigate } from 'react-router-dom'

import { globalConfig } from '@/globalConfig'
import Login from '@/pages/login/'
import Home from '@/pages/home/'
import Account from '@/pages/account/'
import Entry from '@/pages/entry/'


const SESSION_LOGIN_INFO = globalConfig.SESSION_LOGIN_INFO
const globalRouters = createHashRouter([
    {
        path:'/login',
        element:<Login />,
    },
    {
        path:'/',
        element:<Entry />,
        children:[
            {
                path:'/home',
                element:<Home />,
            },
            {
                path:'/account',
                element:<Account />,
            },
            {
                path:'/',
                element:<Home />,
            },
            {
                path:'/*',
                element:<Navigate to='/login' />,
            }

        ]
    },
    
   
]);

//提供路由守卫
export  function PrivateRoute(props){
    return window.localStorage.getItem(SESSION_LOGIN_INFO)?(props.children):(<Navigate to="/login" />)
}

export default globalRouters