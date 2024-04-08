import { createSlice } from "@reduxjs/toolkit";

const UserSlice =  createSlice({
    name: "user",
    initialState:{
        firstname:"ram",
        lastname:"kumar",
        email:"ramkumar@gmail.com",
        aadhar:"",
        address:"",
        pan:"",
        pincode:"",
        gender:"",
        phone:""
    },
    reducers:{
        add(state,action){
            return state = {...state, ...action.payload}
        }
       
    }

})

export const  {add}=UserSlice.actions ;
export default  UserSlice.reducer;