
import { createSlice } from '@reduxjs/toolkit'
import { globalConfig } from '@/globalConfig'

//先看localStorage能不能取到
const sessionTheme = window.localStorage.getItem(globalConfig.SESSION_LOGIN_THEME)

const initTheme = sessionTheme?sessionTheme:globalConfig.initTheme
const initialState = {
    dark:initTheme.dark,
    colorPrimary:initTheme.colorPrimary

}


export const themeSlice = createSlice({
    // store分库名称
    name: 'theme',
    // store分库初始值
    initialState,
    reducers: {
        // redux方法：设置亮色/暗色主题
        setDark: (state, action) => {
            // 修改了store分库里dark的值（用于让全项目动态生效）
            state.dark = action.payload
            // 更新localStorage的主题配置（用于长久保存主题配置）
            window.localStorage.setItem(globalConfig.SESSION_LOGIN_THEME, JSON.stringify(state))
        },
        // redux方法：设置主题色
        setColorPrimary: (state, action) => {
            // 修改了store分库里colorPrimary的值（用于让全项目动态生效）
            state.colorPrimary = action.payload
            // 更新localStorage的主题配置（用于长久保存主题配置）
            window.localStorage.setItem(globalConfig.SESSION_LOGIN_THEME, JSON.stringify(state))
        },
    },
})

//导出的方法，注意
 const themeReducer = themeSlice.reducer
export  const {setDark} =themeSlice.actions
export  const {setColorPrimary} =themeSlice.actions
export default themeReducer