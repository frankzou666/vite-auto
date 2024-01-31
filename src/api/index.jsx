
import axios from 'axios'
import { Modal,message} from 'antd'

import { globalConfig } from '@/globalConfig'
import globalRouters from '@/route'



export const goto =(path)=>{
    globalRouters.navigate(path);

}

let API_DOMAIN='http://192.168.1.34:9999'

let API_PREIX ='/api'


export const SESSION_LOGIN_THEME = globalConfig.SESSION_LOGIN_THEME
export const SESSION_LOGIN_INFO = globalConfig.SESSION_LOGIN_INFO



export const API_CODE = {
    // API请求正常
    OK: 200,
    // API请求正常，数据异常
    ERR_DATA: 403,
    // API请求正常，空数据
    ERR_NO_DATA: 301,
    // API请求正常，登录异常
    ERR_LOGOUT: 401,

    
}

 export const API_MSG= {
    // API请求正常
    loginFailed: {msg:'loginFailed',msg_zh:'登录失败'},
    userNotExist: {msg:'userNotExist',msg_zh:'用户不存在'},
    loginSuccess: {msg:'loginSuccess',msg_zh:'登录成功'},
    logoutSuccess:{msg:'logoutSuccess',msg_zh:'注销成功'},
    loginRepeated:{msg:'loginRepeated',msg_zh:'重复登录'},
    passwordIncorrect:{msg:'passwordIncorrect',msg_zh:'密码错误'},
    paramsValueNull:{msg:'paramsValueNull',msg_zh:'参数值为空'},

 }

//一个对像，里面有各种公用的函数
//各种API请求放到这里
export const apiReqs={
    login:(config)=>{
        axios.post(API_DOMAIN+API_PREIX+'/user/login',JSON.stringify(config.data),{headers:{ 'Content-Type': 'application/json'}})
        .then((response)=>{
            switch (response.data.code) {
                case API_MSG.loginSuccess.msg:
                    window.localStorage.setItem(SESSION_LOGIN_INFO,JSON.stringify({auth_token:response.data.data[0].auth_token}))
                    message.success({content:API_MSG.loginSuccess.msg_zh,duration:1})
                    config.success(response.data);
                    break; 
                default:
                    config.failed(response.data) 
            }
        })
        .catch((error)=>{console.log(error)})
    },

    logout:(config)=>{
        if ((JSON.parse(window.localStorage.getItem(SESSION_LOGIN_INFO))===null)){
            config.failed({})
        } else {
            let token = JSON.parse(window.localStorage.getItem(SESSION_LOGIN_INFO)).auth_token
            axios.post(API_DOMAIN+API_PREIX+'/user/logout',{},{headers:{'Authorization': token}})
            .then((response)=>{
                if (response.data.code==='logoutSuccess'){
                    window.localStorage.removeItem(SESSION_LOGIN_INFO)
                    message.info({content:API_MSG.logoutSuccess.msg_zh,duration:1})
                    config.logout(response.data)
                }    
            })
        }
    }

}

export default apiReqs