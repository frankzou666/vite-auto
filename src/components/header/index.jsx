import {Children, useState} from 'react'

import { Button ,Card,Menu,Modal,Dropdown,Space} from 'antd'
import { HomeOutlined, UserOutlined,LogoutOutlined,IdcardOutlined,DownOutlined,SettingOutlined} from '@ant-design/icons'
import { useNavigate,useLocation } from 'react-router-dom'
//在组件中如何引入，为什么要这样引入
import {  useSelector,useDispatch } from 'react-redux'
import { apiReqs } from '@/api/'

import { setDark  } from '../../store/slice/theme'
import { globalConfig } from '@/globalConfig'

import ThemeModal from '@/components/themeModal'
import './header.styl'


function Header(props) {
    const {title} = props;
    const navigate = useNavigate();
    const location = useLocation();
   
    const [showThemeModal, setShowThemeModal] = useState(false)
    const [PROJECT_NAME,setPROJECT_NAME] = useState(globalConfig.PROJECT_NAME)
    const dispatch = useDispatch()
    const theme = useSelector((state) => state.theme)
    const [modal, contextHolder] = Modal.useModal()
    const settingsMenuItems =[
        { label:"更改密码", key:'home2',onClick:()=>{setShowThemeModal(true)}},
        {
            type: 'divider',
        },
        { label:"更换换肤", key:'home1',onClick:()=>{setShowThemeModal(true)}},
        
        { label:"日/夜 模式" , key:'account1', onClick:()=>{theme.dark?dispatch(setDark(false)):dispatch(setDark(true))}},
    ]
        
    const menuProps = {
        items:settingsMenuItems,
      };   

    const handleLogout = (e)=>{
        e.preventDefault()
        modal.confirm({
            title:'注销',
            okText:'确定',
            cancelText:'取消',
            content:'是否确定要注销？',
            onOk:()=>{
                apiReqs.logout({
                    data:{},
                    logout:(res)=>{
                        navigate('/login')
                    },
                    failed:()=>{
                        navigate('/login')
                    }
                })
            },
            onClose:()=>{

            }

        })  
    }


    return(
            <div className='M-Header'>
                    <div className='logo-con'><h3>{PROJECT_NAME}后台管理</h3></div>
                    <div className='Opt-con'>
                        <Dropdown  menu={menuProps}>
                           <a onClick={(e) => e.preventDefault()}><SettingOutlined/>设置</a>
                        </Dropdown>
                    </div> 
                    <div className='Opt-con'>
                        <a onClick={(e)=>{handleLogout(e)}} ><LogoutOutlined />退出</a>
                     </div>
                     {
                          // 显示主题色换肤对话框
                          showThemeModal && (
                              <ThemeModal
                                  onClose={() => {
                                      setShowThemeModal(false)
                                  }}
                              />
                          )
                      }
                {contextHolder}

            </div>

    )
}

export default Header