

import { Button  ,theme} from 'antd'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


import Header from '@/components/header'
import goto from '@/api'
import { globalConfig } from '@/globalConfig'
import './home.styl'


const { useToken } = theme
function Home() {
    const navigate = useNavigate();
    const {token} = useToken()
    const SESSION_LOGIN_INFO = globalConfig.SESSION_LOGIN_INFO

    return(
        <div className='P-home'>
            <h1 style={{color:token.colorText}}>home page</h1>
            <div className='ipt-con'>
                <Button type='primary' onClick={()=>{navigate('/login')}}>返回</Button>
                <Button type='primary'  onClick={()=>{goto('/login')}}>组件外跳转</Button>
            </div>
        </div>
    )

}


export default Home