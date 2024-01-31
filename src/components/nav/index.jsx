
import { Children, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { HomeOutlined, UserOutlined,HolderOutlined,IdcardOutlined} from '@ant-design/icons'
import { Button  ,Menu} from 'antd'

import Header from '@/components/header'
import goto from '@/api'
import { globalConfig } from '@/globalConfig'

import './nav.styl'


function Nav(){
    const navigate= useNavigate();
    
    const homeMenuItems =[
        { label:"Home",icon:<HomeOutlined />, key:'home1',onClick:()=>{navigate('/home')}},
        { label:"Account" ,icon:<UserOutlined /> , key:'account1', onClick:()=>{navigate('/account')}},
    ]
    const accountMenuItems =[
        { label:"Home",icon:<HomeOutlined />, key:'home2',onClick:()=>{navigate('/home')}},
        { label:"Account" ,icon:<UserOutlined /> , key:'account2', onClick:()=>{navigate('/account')}},
    ]
    const mneuItems =[
        { label:"Home",icon:<HomeOutlined />, key:'home',children:homeMenuItems},
        { label:"Account" ,icon:<UserOutlined /> , key:'account',children:accountMenuItems},
    ]
    useEffect(()=>{
        
    })
    return(
        <div className='P-nav ant-menu-light'> 
           <div className='meun-con'>
                 <Menu className='nav-menu' mode='inline' selectedKeys={location.pathname} items={mneuItems}>
                 </Menu>

            </div> 
        </div>
    )
 
}


export default Nav