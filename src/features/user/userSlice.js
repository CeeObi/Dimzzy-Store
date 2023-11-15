
import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'



const themes = {
    winter:'winter',
    dracula:'dracula',
}

const getThemeFromLocalStorage = () => {
    const theme = localStorage.getItem('theme') || themes.winter;
    document.documentElement.setAttribute("data-theme", theme );
    return theme
}

const initialState = {
    user:{username:"dimscode"},
    theme: getThemeFromLocalStorage()
}



const userSlice = createSlice({
  name:'user',
  initialState: initialState,
  reducers:{
    loginUser:(state,action) =>{console.log('loginUser');},
    logoutUser:(state) =>{
        state.user = null;
        localStorage.removeItem("user");
        toast.success('Logged out successfully');
    },
    toggleTheme:(state) =>{
        const {winter,dracula} = themes;
        state.theme = state.theme === dracula ? winter : dracula;
        document.documentElement.setAttribute("data-theme", state.theme );
        localStorage.setItem('theme', state.theme);
    }
  }
})




export default userSlice.reducer;
export const {loginUser,logoutUser,toggleTheme} = userSlice.actions