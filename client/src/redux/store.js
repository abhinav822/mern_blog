import { createSlice, configureStore } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLogin: false,  //islogin is refered to the state of the slice 
    },
    reducers: {
        login(state) {  //login reducer is used to update the state of the slice to true
            state.isLogin = true;
        },
        logout(state) {
            state.isLogin = false;
        },
    },
});
export const authActions = authSlice.actions;  

export const store = configureStore({
    reducer: authSlice.reducer,
});

//createslice is used to create a slice of the global state , slice means a part of the global state , here we are creating a slice of the global state called auth and we are defining the initial state of the slice and we are defining the reducers which will be used to update the state of the slice

//configurestore is used to create a store which will be used to store the global state , here we are passing the reducer to the configurestore function which will be used to update the state of the global state

//reducers are functions which are used to update the state of the slice , here we are defining two reducers login and logout , login will update the state of the slice to true and logout will update the state of the slice to false

//actions are functions which are used to dispatch the reducers , here we are defining two actions login and logout , login will dispatch the login reducer and logout will dispatch the logout reducer

//store is the global state which will be used to store the state of the slice , here we are creating a store and passing the reducer to the store which will be used to update the state of the slice