import { defaultIconPrefixCls } from "antd/es/config-provider"
import { useNavigate } from 'react-router-dom'
import { React,useState,useEffect} from 'react'

import imgLogo from './logon.png'
import { Button, Input,Alert ,Space} from 'antd'

import { apiReqs } from '@/api/'
import {globalConfig} from '@/globalConfig'
import './login.styl'

function Login() {
    //创建一个navigate对像
    const navigate = useNavigate();
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [isAlertInvisiable,setIsAlertInvisiable] = useState(true)
    const [alertmsg,setAlertmsg] = useState('')
    const [PROJECT_NAME,setPROJECT_NAME] = useState(globalConfig.PROJECT_NAME)

    let config = {
        data:{username:username,password:password},
    }
    useEffect(()=>{
        document.title=PROJECT_NAME;
    })

    const handleLogin = ()=>{
        setIsAlertInvisiable(true)
        apiReqs.login(
           {
            data:{username:username,password:password},
            success:(res)=>{
                navigate('/home')
            },
            failed:(res)=>{
                setIsAlertInvisiable(false)
                setAlertmsg(res.msg)
                navigate('/login')
            }
           }
        )
    }
    return (
        <div className="P-logo">
                <img src={imgLogo} className="logo"></img>
                <div className="ipt-con">
                    <h3>{PROJECT_NAME}后台登录</h3>
                </div>
                <div className="ipt-con">
                    <Input placeholder="帐号" value={username} onChange={(e)=>{setUsername(e.target.value)}}></Input>
                </div>
                <div className="ipt-con">
                    <Input.Password placeholder="密码" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <div className="ipt-con">
                    {/* 跳转 */}
                    <Button type="primary" block={true} onClick={handleLogin}>登录</Button>
                </div>
                <div className="ipt-con">
                    {isAlertInvisiable?<Space></Space>:<Alert message={alertmsg}  type="error" showIcon />}
                </div>
        </div>
    )

}

export default Login