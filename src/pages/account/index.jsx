

import { Button  } from 'antd'
import { useNavigate } from 'react-router-dom'


import Header from '@/components/header'
import './account.styl'

function Account() {
    const navigate = useNavigate();
    
    return (
        <div className='P-account'>
            <h2>this is account page</h2>
            <div className='ipt-con'>
                <Button type='primary' onClick={()=>{navigate('/login')}}>返回登录</Button>
            </div>

        </div>
    )

}


export default Account