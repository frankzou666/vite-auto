


//导入系统组件和第三方组件
import { Outlet,useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { ConfigProvider, theme } from 'antd'

//导入自定义组件
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import PrivateRoute from '@/route'
import { setDark  } from '@/store/slice/theme'



//导入自定义CSS
import './entry.styl'
import { useEffect } from 'react'
import { SESSION_LOGIN_INFO } from '../../api'

const { darkAlgorithm, defaultAlgorithm } = theme

function Entry(){
    
    const globalTheme = useSelector((state)=>state.theme)
    const navigate = useNavigate();
    const dispatch = useDispatch()
    let antdTheme = {algorithm:globalTheme.dark?darkAlgorithm:defaultAlgorithm}
    useEffect ( ()=>{
        if ((JSON.parse(window.localStorage.getItem(SESSION_LOGIN_INFO))===null) || (JSON.parse(window.localStorage.getItem(SESSION_LOGIN_INFO))===undefined)){
            navigate('/login')
        }
       if (globalTheme.dark===undefined){
           dispatch(setDark(true))

       }
       
     }
    )
    if (globalTheme.colorPrimary) {
        antdTheme.token={
            colorPrimary:globalTheme.colorPrimary
        }
    }
    return(
             <ConfigProvider theme={antdTheme}>
                 <div className='M-entry'>
                    <Header />
                    <div className='main-container'>
                         <div className='main-nav'><Nav /></div>
                         <div className='main-content'>
                         {/* Outleg会被二级路由占据了*/}
                         <Outlet />
                         </div>

                    </div>
                    
                 </div>
             </ConfigProvider>

    )

}

export default Entry