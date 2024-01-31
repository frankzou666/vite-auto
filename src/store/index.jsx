
/* 
import { configureStore } from '@reduxjs/toolkit'
import themeReducer  from '@/store/slice/theme'


export default store=configureStore({
    //这里还可以创建其他库
    reducer:{
        theme:themeReducer
    }

})  */


import { configureStore,createStore } from '@reduxjs/toolkit'
// 引入主题换肤store分库
import themeReducer from '@/store/slice/theme'

const store = configureStore({
  reducer: {
    // 主题换肤store分库
    theme:  themeReducer
    // 可以根据需要在这里继续追加其他分库
  },
})


export  default store